//determines if the user has a set theme
function detectColorScheme(){
    var theme="dark";

    //local storage is used to override OS theme settings
    var ls = localStorage.getItem("theme");
    if(ls){
        theme = ls;
    } else if(window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        theme = "ligth";
    }

    document.documentElement.setAttribute("data-theme", theme);
}
detectColorScheme();