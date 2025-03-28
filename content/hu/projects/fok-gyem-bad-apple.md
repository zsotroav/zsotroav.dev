---
title: Bad Apple!! FOK-GYEM kijelzőn
short: A Bad Apple!!-t széles körben használják teszt videóként, amit mindenféle eszközön futtatnak, és nekem sikerült egy FOK-GYEM márkájú flip-dot-on lejátszanom. Az erről készült YouTube-videónak már több mint 17000 megtekintése van.
img: /img/projects/fok-gyem-bad-apple/thumbnail.png
extref: https://youtube.com/watch?v=5NXSMdUH_Cg
date: 2023-08-09
tags: [FOK-GYEM, Arduino, C++, C#]
---

## Bevezetés
A FOK-GYEM VISINFORM egy elektromechanikus
[flip-dot](https://en.wikipedia.org/wiki/Flip-disc_display) kijelző márka volt.
Ezeknek a kijelzőknek nagyon egyszerű a működési elvük: Egy elektromágnes
átfordítja a kicsi felmágnesezett "pixeleket" a feketére festett oldalukról az
általában fehér vagy sárgára festett oldalukra.

Korábban sikerült hozzájutnom néhány 7x24 pixeles modulhoz, amikhez néhány
barátommal sikeresen csináltunk egyedi vezérlő lapokat. Az egyik első ötletünk
vele, a Doom futtatása mellett, az a Bad Apple!! lejátszása volt. Ebből három
verzió is készült:

### Verziók
[Az 1. verzió](https://youtube.com/watch?v=i0c76rsW4KI) az eredeti béta/teszt
vezérlő lappal és rajta egyszerű firmware-el készült, így annak teljesítménye
nem volt túl jó.

Egy évvel később, második verzióként (nem készült róla publikus videó) újra el
lett készítve az új vezérlő lapokkal és jobb firmware-el, ami jelentős
teljesítmény növelést jelentett.

Rövidesen a második verzió után elkészült az (egyelőre) legújabb verzió még
több fejlesztésekkel, amikből a legnagyobb a paralelizált/többszálon futó
megjelenítési és serial kommunikációs szerver volt. Ez tette lehetővé, hogy
egyszerre négy vezérlő lapot használjuk a négy modulhoz (a korábbi 1-1 helyett)
ami további 4x-es sebesség növekedést jelentett.

## Használt technológiák
* [Arduino Uno R3](https://store.arduino.cc/en-hu/products/arduino-uno-rev3) -
  a projekt közepén lévő mikrokontroller
* C az egyedi kijelző vezérlő driveréhez
* C# a megjelenítési/serial kommunikációs szervernek
* [PlatformIO](https://platformio.org/) a fejlesztéshez
* [FFmpeg](https://ffmpeg.org/) a videó előkészítéséhez (felbontás és színek)

## Részletek
A projekt a már meglévő vezérlő lapokat használta fizikai módosítások nélkül, de
a hozzá tartozó firmware egyes részei (a [GitHub-on lévő stabil
kiadáshoz](https://github.com/zsotroav/FOK-GYEM) képest) át voltak írva,
javarészt a serial kommunikáció körül, hogy a kirajzolás gyorsabb legyen.

A kulcs része a projektnek a számtógépen futó serial kommunikációs szerver volt:
Ez a többszálú alkalmazás kezelte mind a négy kapcsolódott vezérlőt (és ezáltal
kijelző modult) egyszerre. Ahhoz, hogy ez megfelelően működjön, egy master szál
indítja el a négy kijelző szálat, amik elküldik az aktuális képkockát, majd várja
meg míg mindegyik végez (az adat küldésével és a kijelző vezérlőtől is kapott
egy "kirajzolás kész" üzenetet)

## Lejátszás minősége
Ez a többszálas megközelítés jelentősen javított a sebességen, de az időzítést
is fontosabbá tette. Az elméleti kép frissítési sebessége egy vezérlő lapnak
2500 pixel/másodperc, mivel a kijelzőn mindig csak azokat a pixeleket frissíti,
amiknek az állapota változott. Ezáltal a modulok más-más idő alatt végeznek a
kirajzolással. A többszálú vezérlő "mindenki megvárva" hozzáállása nélkül a
szálak el tudnának csúszni egymástól és screen tearing (képernyő szakadás)
jellegű jeleket is mutathatna. 

A végleges verzió 28x24 pixel felbontással (4 modul x 7 x 24) ment az eredeti
Bad Apple!! videó 30 képkocka/másodpercével és csak 60 képkockát dobott el
(nem tudott kirajzolni az időzítések miatt) az összesen 6570-ből, javarészt a
videó legvégén.

## Videók
<div class="my-2 has-text-centered">
<iframe class="yt-video" src="https://www.youtube.com/embed/5NXSMdUH_Cg" title="Version 3 - YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe class="yt-video" src="https://www.youtube.com/embed/i0c76rsW4KI" title="Version 1 - YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
