import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "projects", "en", "hu"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("navbar", function(page) {
		const items = 
			this.collections?.navbar_visible ||
			this.ctx?.collections?.navbar_visible ||
			this.context?.environments?.collections?.navbar_visible ||
			[];

		return items.filter(post => post.page.lang === this.page.lang).sort((a, b) => a.order - b.order);
  	});

	  eleventyConfig.addFilter("inOtherLangs", function(page) {
		const items = 
			this.collections?.all ||
			this.ctx?.collections?.all ||
			this.context?.environments?.collections?.all ||
			[];

		var langs = [];

		items.forEach(i => {
			const lang = i.page.url.slice(1,3);
			if (!langs.includes(lang)) langs = langs.concat(lang);
		});

		let filtered = items.filter(p => p.page.url.slice(0,3) != this.page.url.slice(0,3) && p.page.url.slice(3) == this.page.url.slice(3));

		if (this.page.url.includes("/tags/")) {
			langs.forEach(i => {
				if (i != this.page.url.slice(1,3)) {
					let p = { data: { title: this["title"], short: this["short"] },
						      page: { url: i + this.page.url.slice(3), lang: i },
						      url: "/" + i + this.page.url.slice(3),
							  title: this["title"], short: this["short"], lang: i };
					filtered = filtered.concat(p);
				}
			});
		}
		return filtered;
  	});

	eleventyConfig.addFilter("getNextOrPreviousProject", function(currentProject, direction = "next") {
		const projects = 
			this.collections?.projects ||
			this.ctx?.collections?.projects ||
			this.context?.environments?.collections?.projects ||
			[];

		const prepped = projects.filter(post => post.page.lang === this.page.lang).sort((a, b) => a.date - b.date);

		const currentIndex = prepped.findIndex(post => post.page.inputPath === this.page.inputPath);

		if (currentIndex === -1) return null; // If current post is not found, return null

		let re = null;
		if (direction === "next") re = prepped[currentIndex + 1] || null; 
		else if (direction === "previous") re = prepped[currentIndex - 1] || null; 

		return re;
  });
};
