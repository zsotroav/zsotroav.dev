---
title: FOK-GYEM Tetris
short: A Tetris-like game running natively on a FOK-GYEM flipdot's custom arduino controller. Displayed at the 2024 researcher's night in Obuda University.
img: /img/projects/fok-gyem-tetris/OE-Researchers.jpg
source: https://github.com/zsotroav/FOK-GYEM-Tetris-native
date: 2024-10-14
tags: [Arduino, C++]
---

## Intro
FOK-GYEM VISINFORM is a brand of electro-mechanical
[flip-dot](https://en.wikipedia.org/wiki/Flip-disc_display) display. Their
working prinicple is very simple: An electromagnet forces a small, magnetized
"pixel" to flip from the black painted side to the other, usually white or
yellow painted side. 

A while ago, I managed to get my hands on a few 7x24 pixel modules for which we
were able to create a custom controller board with a few friends. One of our
first ideas, apart from running [Bad Apple!!](./fok-gyem-bad-apple) on it, was
to play tetris on it. This made exactly that possible.

## Tech stack
* [Ardunio Uno R3](https://store.arduino.cc/en-hu/products/arduino-uno-rev3) -
  the microcontroller in the heart of the project
* C++ for Tetris
* C for the custom driver board's driver software
* [PlatformIO](https://platformio.org/) for development

## Details
This project consists of the tetris game code and a physical controller. The code itself is 