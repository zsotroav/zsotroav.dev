---
title: Bad Apple!! on FOK-GYEM 
short: Bad Apple has been widely used as a video test to run on all sorts of devices, and I got it running on a FOK-GYEM brand flip-dot and the YouTube video about it now has over 17000 views.
img: /img/projects/fok-gyem-bad-apple/thumbnail.png
extref: https://youtube.com/watch?v=5NXSMdUH_Cg
date: 2023-08-09
tags: [FOK-GYEM, Arduino, C++, C#]
---

## Intro
FOK-GYEM VISINFORM was a brand of electro-mechanical
[flip-dot](https://en.wikipedia.org/wiki/Flip-disc_display) display. Their
working principle is simple: An electromagnet forces a small, magnetized
"pixel" to flip from the black-painted side to the other, usually white- or
yellow-painted side. 

A while ago, I managed to get my hands on a few 7x24 pixel modules for which we
were able to create a custom controller board with a few friends. One of our
first ideas, apart from running Doom on it, was to play Bad Apple!! on it. There
were three attempts for this:

### Versions
[Version 1](https://youtube.com/watch?v=i0c76rsW4KI) was made with the original
test/beta driver board with basic firmware, and as such it didn't perform great.

A year later, it was recreated as version 2 (not shared publically) with
the new board and improved firmware which resulted in a substantial performance
and speed uplift.

Shortly after version two, the (for now) final version 3 was released with even
more improvements, the biggest of which was a parallel multi-threaded display
server that enabled the use of four driver modules simultaneously, resulting in
a further 4x speed increase.

## Tech stack
* [Arduino Uno R3](https://store.arduino.cc/en-hu/products/arduino-uno-rev3) -
  the microcontroller at the heart of the project
* C for the custom driver board's driver software
* C# for the serial connection server
* [PlatformIO](https://platformio.org/) for development
* [FFmpeg](https://www.ffmpeg.org/) for preprocessing the video (resolution and color)

## Details
The project used the existing driver board without any modifications but had
altered firmware, compared to the [stable release on
GitHub](https://github.com/zsotroav/FOK-GYEM) mainly around the serial
communication, to speed up drawing.

The key part of the project was the serial connection server running on a
computer: a multi-threaded app that handled all four connected drivers
simultaneously. To achieve this, a master thread starts the four display threads
to send the current frame and waits until all of them are done (finished sending
data and got a "done drawing" message from the screens)

## Quality of playback
This multi-threaded approach improves the speed drastically but also made
timing the images very important. The theoretical refresh rate of a single
driver board is 2500 pixels/sec since the driver boards only update the pixels
that were changed, the different modules don't all finish drawing their frames
in the same amount of time. Without the multi-threaded wait-for-all approach, the
threads could get out of sync, and start developing screen tearing-like
symptoms.

The final version was run at 28x24 pixels resolution (3 modules x 7x24) at the
original 30 frames/sec speed of Bad Apple!! and only dropped about 60 of the
total 6570; mostly towards the end of the clip. 

## Videos

<div class="my-2 has-text-centered">
<iframe class="yt-video" src="https://www.youtube.com/embed/5NXSMdUH_Cg" title="Version 3 - YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe class="yt-video" src="https://www.youtube.com/embed/i0c76rsW4KI" title="Version 1 - YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
