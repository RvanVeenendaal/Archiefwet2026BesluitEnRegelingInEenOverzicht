# Archiefwet 2026 checks

Statisch, Nederlandstalig overzicht om onderwerpen uit de Archiefwet 2026 en bijbehorende besluiten en regeling naast elkaar te bekijken.

## Gebruik

Open `index.html` in een browser. Zoek op onderwerp of artikel, filter op organisatie en type archief, en vink afgeronde punten af. De pagina opent met een tijdlijn van termijnen en een overzicht van de grootste veranderingen t.o.v. de Archiefwet 1995. De voortgang wordt lokaal in de browser opgeslagen en kan als bestand worden geëxporteerd om elders (bijvoorbeeld bij een collega) te worden geïmporteerd; met de knop "Wissen" zet u alles terug. Installatie of buildstap is niet nodig.

## Bronnen

De centrale informatievoorziening over de Archiefwet 2026 is de pagina [Nieuwe Archiefwet: samen werken aan duurzaam toegankelijke informatie | Nationaal Archief](https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026).

Het overzicht is gebaseerd op de volgende regelgeving:

- [Archiefwet 2026 (Staatsblad 2026, 149)](https://zoek.officielebekendmakingen.nl/stb-2026-149.html)
- [Archiefbesluit 2026 (Staatsblad 2026, 321)](https://zoek.officielebekendmakingen.nl/stb-2026-321.html), inclusief nota van toelichting
- [Archiefregeling 2026 (concept, EU-notificatie 27387)](https://technical-regulation-information-system.ec.europa.eu/nl/notification/27387)
- [Besluit diploma’s archivarissen (Staatsblad 2026, 303)](https://zoek.officielebekendmakingen.nl/stb-2026-303.html)

De kennisbankpagina van het Nationaal Archief verwijst naar deze bronnen.

Het Archiefbesluit is vastgesteld op 23 september 2026 en gepubliceerd op 16 oktober 2026. Raadpleeg bij twijfel de officiële [publicatie](https://zoek.officielebekendmakingen.nl/stb-2026-321.html) en de actuele regelgeving.

## Aanpak

Voor het samenstellen van dit overzicht zijn de PDF-versies van de vier regelingen gedownload via de officiële publicatie- en kennisbankbronnen. Van elke PDF is per pagina de tekst geëxtraheerd naar een platte-tekstversie (`.txt`), met per pagina een markering (`=====PAGE n=====`). Deze tekstversies vormden de basis van het overzicht: de artikelen per onderwerp in `index.html` zijn op grond van deze teksten geselecteerd en samengevat.

De PDF’s en tekstversies worden niet meegepubliceerd (zie `.gitignore`) en blijven alleen lokaal aanwezig; raadpleeg de officiële teksten via de bronnen hierboven.

De onderwerpen, samenvattingen, tijdlijn, veranderingen en bronlinks staan in `data.js`; `index.html` bevat de weergave en logica. Voor een inhoudelijke update volstaat het aanpassen van `data.js`.

## Status en disclaimer

Het hulpmiddel is door de maker als privépersoon beschikbaar gesteld, niet namens of in opdracht van het Nationaal Archief, diens werkgever. Het is geen officiële publicatie of standpunt van het Nationaal Archief en geen juridisch advies. De bronnen en het overzicht zijn gecontroleerd en bijgewerkt op 24 oktober 2026. De Archiefregeling is nog een concept; ook de samenvattingen kunnen onvolledig of verouderd zijn. Controleer altijd de actuele officiële teksten.
