---
title: FOK-GYEM Tetris
short: Egy Tetris-jellegű játék ami natívan fut FOK-GYEM kijelzőkhöz gyártott, egyedi, arduino alapú vezérlőn. Bemutatva a 2024-es Kutatók éjszakáján az Óbudai Egyetemen.
img: /img/projects/fok-gyem-tetris/OE-Researchers.jpg
source: https://github.com/zsotroav/FOK-GYEM-Tetris-native
date: 2024-09-27
tags: [FOK-GYEM, Arduino, C++]
---

## Bevezetés
A FOK-GYEM VISINFORM egy elektromechanikus
[flip-dot](https://en.wikipedia.org/wiki/Flip-disc_display) kijelző márka volt.
Ezeknek a kijelzőknek nagyon egyszerű a működési elvük: Egy elektromágnes
átfordítja a kicsi felmágnesezett "pixeleket" a feketére festett oldalukról az
általában fehér vagy sárgára festett oldalukra.

Korábban sikerült hozzájutnom néhány 7x24 pixeles modulhoz, amikhez néhány
barátommal sikeresen csináltunk egyedi vezérlő lapokat. Az egyik első ötletünk
vele, a Doom és a [Bad Apple!!](../fok-gyem-bad-apple) futtatása mellett, az
volt, hogy játszunk Tetrist rajta. Ez a projekt tökéletesen ezt tette lehetővé.

![](/img/projects/fok-gyem-tetris/testing.jpg) <br /> *A játék tesztelése
először a végleges hardware-en*

## Használt technológiák
* [Arduino Uno R3](https://store.arduino.cc/en-hu/products/arduino-uno-rev3) -
  a projekt közepén lévő mikrokontroller
* C++ a Tetris-hez
* C az egyedi kijelző vezérlő driveréhez
* [PlatformIO](https://platformio.org/) a fejlesztéshez

## Kutatók éjszakája 2024 és BKV Buszgarázsok

2024 szeptember 27.-én ez a projekt ki volt állítva a Kutatók éjszakáján az
Óbudai Egyetemen. Egy korábbi, egyszerűbb verziója a projektnek többször volt
már kiállítva különböző [BKV](https://bkv.hu) buszgarázs nyíltnapokon. Az egyik
ilyen nyílt napon keresett meg az egyik velem együtt kiállító barátom
professzora, hogy lenne-e kedvem kiállítani ezt náluk, amit szívesen el is
fogadtam. *Archívált esemény link:
[app.kutatokejszakaja.hu](https://web.archive.org/web/20250327094120/https://app.kutatokejszakaja.hu/esemenyek/obudai-egyetem-kando-kalman-villamosmernoki-kar/display-show-elektronikus-utastajekoztatas-multja-jelene-es-jovoje)*

![](/img/projects/fok-gyem-tetris/obuda25.jpg) <br />*Az én asztalom és a
kiállított eszközeim a 2025-ös Óbudai Autóbuszgarázs nyíltnapon.*

![](/img/projects/fok-gyem-tetris/kelenfold_garazs.jpg) <br />*A kijelző
kiállítás a 2024-es Kelenföldi buszgarázs nyíltnapon; Tetris kiállítva a jobb
oldalon.*

## Részletek
Ez a projekt a Tetrisz játék kódja és a fizikai kontrollerből áll. [Tetris
maga](https://github.com/zsotroav/FOK-GYEM-Tetris-native) C++ nyelven van írva,
a [vezérlő lap drivere](https://github.com/zsotroav/FOK-GYEM) (ami csak
minimálisan változott a meglévőhöz képest a projekt keretében) pedig C-ben. 

A játék közel funkció teljes, van lehetőség tetromino gyorsításra, ledobásra,
tárolásra (cserére), valamint a játék közben az eltűntetett sorok pontozva
vannak, ami alapján a nehézség (tetromino sebessége) folyamatosan nő. Az elért
pontszám a játék végén látható és leolvasható, illetve egy egyszerű kezdő menüt
is tartalmaz. A kijelző méretének ellenére a következő és a tárolt tetromino-k
is láthatóak a játék közben.

A fizikai része is egyszerű: A meglévő egyedi vezérlőink voltak használva a
kijelzőhöz, a kontroller pedig csak egyszerű mikrokapcsolókból áll, amik
közvetlen az Arduino GPIO csatlakozóiba vannak bekötve.

![](/img/projects/fok-gyem-tetris/keypad.jpg) <br/> *A kontroller bekötve az
Arduinoba a kijelző vezérlőjén keresztül*

Ennek a projektnek a sajátossága a multiplatform implementáció: **Ugyan az a
kód** (a platform specifikus IO részeket leszámítva) lefordítható mind FOK-GYEM
vezérlő hat-es **Arduinora** és Windows vagy Linux alapú **PC-re is**. További
részletek a projekt forrásában lévő README fájlban.
