---
title: FNT Manager
short: FNTManager egy fix magasságú pixel betűtípus kezelő, amely elsősorban .fnt fájlokkal és betűcsík képekkel dolgozik.
source: https://github.com/zsotroav/FNTManager
img: /img/projects/thumb-fntmanager.png
date: 2024-11-19
tags: [Java, Asztali alkalmazás]
---

## Intro
FNTManager egy fix magasságú pixel betűtípus kezelő, amely elsősorban .fnt
fájlokkal és betűcsík képekkel dolgozik. Az alkalmazás képes olvasni és írni
mindkét fájlformátumot. Az alkalmazás egy egyszerű Java Swing GUI alkalmazás (a
követelmények szerint), amely két nézetet tartalmaz: egy elsődleges
munkafelületet és egy betűtípus tesztelő ablakot. Ez a projekt a "Programozás
alapjai 3" ([BMEVIIIAB00](https://portal.vik.bme.hu/kepzes/targyak/VIIIAB00/))
kurzushoz készült a 2024/25/2-es félévben.

## Tech stack
* Java Swing - Az alkalmazás GUI keretrendszere
* [FlatLaf](https://www.formdev.com/flatlaf/) - Java Swing "look and feel" könyvtár
* [JUnit 4](https://junit.org/junit4/) - Tesztelési keretrendszer Java-hoz

## Funkciók
* .fnt fájlok betöltése és mentése
* Betűcsík képek (PNG) betöltése és mentése
* Elérhető karakterek és szimbólumok szerkesztése

## Dokumentáció és specifikációk
A projekt specifikációi és dokumentációja megtalálható a
[projekt git tárolójában](https://github.com/zsotroav/FNTManager)