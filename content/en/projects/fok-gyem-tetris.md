---
title: FOK-GYEM Tetris
short: A Tetris-like game running natively on a FOK-GYEM flipdot's custom arduino controller. Displayed at the 2024 researcher's night in Óbuda University.
img: /img/projects/fok-gyem-tetris/OE-Researchers.jpg
source: https://github.com/zsotroav/FOK-GYEM-Tetris-native
date: 2024-10-14
tags: [Arduino, C++]
---

## Intro
FOK-GYEM VISINFORM is a brand of electro-mechanical
[flip-dot](https://en.wikipedia.org/wiki/Flip-disc_display) display. Their
working principle is simple: An electromagnet forces a small, magnetized
"pixel" to flip from the black-painted side to the other, usually white- or
yellow-painted side. 

A while ago, I managed to get my hands on a few 7x24 pixel modules for which we
were able to create a custom controller board with a few friends. One of our
first ideas, apart from running [Bad Apple!!](./fok-gyem-bad-apple) on it, was
to play Tetris on it. This made exactly that possible.

![](/img/projects/fok-gyem-tetris/testing.jpg) <br /> *Testing the game on final
hardware for the first time*

## Tech stack
* [Arduino Uno R3](https://store.arduino.cc/en-hu/products/arduino-uno-rev3) -
  the microcontroller at the heart of the project
* C++ for Tetris
* C for the custom driver board's driver software
* [PlatformIO](https://platformio.org/) for development

## Researchers' Night 2024 and BKV Bus Garages

On September 27, 2024, this project was displayed at the Researchers' Night
event at Óbuda University. An older, simpler version of this project has been on
display at multiple [BKV](https://bkv.hu) bus garages during open-day events. The
professor of one of my friends, who was also showcasing at one of these open-day
events, approached me and asked if I was interested in joining their stand, which
I gladly accepted. *Archived event link:
[app.kutatokejszakaja.hu](https://web.archive.org/web/20250327094120/https://app.kutatokejszakaja.hu/esemenyek/obudai-egyetem-kando-kalman-villamosmernoki-kar/display-show-elektronikus-utastajekoztatas-multja-jelene-es-jovoje)*

![](/img/projects/fok-gyem-tetris/kelenfold_garazs.jpg) <br />*The display show
at Kelenföld Bus Garage; Tetris showcased on the right.*

## Details
This project consists of the Tetris game code and a physical controller. [Tetris
itself](https://github.com/zsotroav/FOK-GYEM-Tetris-native) is made in C++, while
the [driver for the board](https://github.com/zsotroav/FOK-GYEM) is written in
C. 

The hardware side of the project is also simple: Our existing custom driver
boards were used. The controller keypad consists of basic microswitches wired
directly to the Arduino's GPIO pins.

![](/img/projects/fok-gyem-tetris/keypad.jpg) <br/> *The Controller keypad connected
to the Arduino through the controller board*

This project's specialty is the multiplatform implementation: The **same code
base** (except for the platform-specific display parts) can be used to compile
the game for **both an Arduino** with a FOK-GYEM driver hat **and a PC** running
Windows or Linux. See the readme in the project files for more details.