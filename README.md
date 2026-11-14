# Archiefwet 2026 in één overzicht

Statisch, Nederlandstalig overzicht dat per onderwerp de bepalingen uit de Archiefwet 2026, het Archiefbesluit 2026, de concept-Archiefregeling en het Besluit diploma’s archivarissen naast elkaar zet: wat moet geregeld zijn, hoe de wet dat uitwerkt en welke minimale eisen gelden. De inwerkingtreding is voorzien op 1 januari 2027. Het overzicht geldt uitsluitend voor Nederland: alle wet- en regelgeving waarnaar wordt verwezen is Nederlands. De genoemde hulpmiddelen (tools, standaarden) kunnen internationale open source-producten zijn; de verplichtingen zelf zijn Nederlands.

De aanleiding voor dit hulpmiddel was mijn constatering dat er over de afzonderlijke onderwerpen van de Archiefwet 2026 al veel uitleg bestond, maar dat die nergens op één pagina overzichtelijk bij elkaar stond. Zo'n totaaloverzicht leek me nuttig. De vinkjes, het exporteren en importeren van de voortgang en het filteren zijn later toegevoegd, voor de gebruikerservaring.

## Gebruik

De eenvoudigste manier is de online versie: [rvanveenendaal.github.io/Archiefwet2026checks](https://rvanveenendaal.github.io/Archiefwet2026checks/). Wilt u het overzicht op uw eigen computer, download dan de bestanden: klik op de GitHub-pagina op de groene knop "Code" en kies "Download ZIP", pak het zipbestand uit en open daarna `index.html` in een browser. Het overzicht bestaat uit twee bestanden: `index.html` (de pagina) en `data.js` (de inhoud). Laat die samen in één map. Zonder `data.js` verschijnen de onderwerpen niet. Een installatie of buildstap is niet nodig.

Zoek op trefwoord of artikel, filter op soort archief (digitaal of fysiek), type organisatie of verschil met de Archiefwet 1995 (grotendeels gelijk, gewijzigd of nieuw), en vink afgeronde punten af. De voortgang wordt lokaal in de browser opgeslagen en kan als bestand worden geëxporteerd om elders (bijvoorbeeld bij een collega) te worden geïmporteerd. Met de knop "Wissen" zet u alles terug.

Per onderwerp is er onder de vier lagen een uitklapbaar blok "Passende maatregelen en hulpmiddelen": beschikbare standaarden, handreikingen en software (DUTO (Duurzaam Toegankelijke Overheidsinformatie), MDTO (Metagegevens voor Duurzaam Toegankelijke Overheidsinformatie), BIO2 (Baseline Informatiebeveiliging Overheid 2), e-Depot, handreikingen uit de catalogus kennisproducten, enz.) die bij dat onderwerp passen, inclusief publicaties van de koepels VNG, IPO en Unie van Waterschappen en opleidingen (UvA, HvA, Reinwardt Academie, Archiefschool, Leerhuis Informatiehuishouding, RADIO, KVAN BRAIN). Deze lijst is ter inspiratie en niet uitputtend — geen checklist. De hulpmiddelen zijn niet afvinkbaar, tellen niet mee in de voortgang, maar zijn wel doorzoekbaar via de zoekbalk. Boven de onderwerpen staat een verzamelblok: "Instrumentarium en hulpmiddelen". Bij elk onderwerp staat bovendien een label dat aangeeft of het onderwerp grofweg gelijk is aan de oude Archiefwet 1995 (met oud besluit en oude regeling), gewijzigd is, of nieuw. Daarnaast staat per onderwerp de indicatieve DUTO-categorie en kan per regel een ingangsdatum-tag "vanaf …" staan (volgens het inwerkingtredings-KB). Het type-organisatiefilter kent naast rijk/decentraal/gemeenschappelijke regeling/archiefdienst ook "toezichthouder".

Elk onderwerp rangschikt de regels in vier lagen: de Archiefwet (wat moet geregeld zijn), het Archiefbesluit (hoe werkt dat uit), de Archiefregeling (welke minimale eisen) en het Besluit diploma’s archivarissen (diploma-eisen). De artikelverwijzingen linken rechtstreeks naar de officiële publicaties. De onderwerpen zijn gegroepeerd in zes fasen, van organisatie en verantwoordelijkheid tot toezicht en overgang. Bij het afdrukken print de pagina het kader "Bron, leeswijzer en status" en de onderwerpen automatisch uitgeklapt.

De Archiefregeling is nog een concept. Die laag is in het overzicht daarom als zodanig gemarkeerd.

## Bronnen

De centrale informatievoorziening over de Archiefwet 2026 is de pagina [Nieuwe Archiefwet: samen werken aan duurzaam toegankelijke informatie | Nationaal Archief](https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026).

Het overzicht is gebaseerd op de volgende regelgeving:

- [Archiefwet 2026 (Staatsblad 2026, 149)](https://zoek.officielebekendmakingen.nl/stb-2026-149.html)
- [Archiefbesluit 2026 (Staatsblad 2026, 321)](https://zoek.officielebekendmakingen.nl/stb-2026-321.html), inclusief nota van toelichting
- [Archiefregeling 2026 (concept, EU-notificatie 27387)](https://technical-regulation-information-system.ec.europa.eu/nl/notification/27387)
- [Besluit diploma’s archivarissen (Staatsblad 2026, 303)](https://zoek.officielebekendmakingen.nl/stb-2026-303.html)

De kennisbankpagina van het Nationaal Archief verwijst naar deze bronnen. De pagina beschrijft wat er verandert en het invoeringstraject. De teksten daar zijn geschreven door de beleidsmedewerkers van het Ministerie van Onderwijs, Cultuur en Wetenschap (OCW), in samenwerking met medewerkers van het Nationaal Archief en de Inspectie Overheidsinformatie en Erfgoed.

Het Archiefbesluit is vastgesteld op 23 september 2026 en gepubliceerd op 16 oktober 2026. Raadpleeg bij twijfel de officiële [publicatie](https://zoek.officielebekendmakingen.nl/stb-2026-321.html) en de actuele regelgeving.

## Aanpak

Voor het samenstellen van dit overzicht zijn de PDF-versies van de vier regelingen gedownload via de officiële publicatie- en kennisbankbronnen. Van elke PDF is per pagina de tekst geëxtraheerd naar een platte-tekstversie (`.txt`), met per pagina een markering (`=====PAGE n=====`). Deze tekstversies vormden de basis van het overzicht: de artikelen per onderwerp zijn op grond van deze teksten geselecteerd en samengevat.

De PDF’s en tekstversies worden niet meegepubliceerd (zie `.gitignore`) en blijven alleen lokaal aanwezig. Raadpleeg de officiële teksten via de bronnen hierboven.

De onderwerpen, samenvattingen, bronlinks, de hulpmiddelen per onderwerp (`tools`) en de vergelijking met de oude wet (`change`) staan in `data.js`, net als het blok "Instrumentarium en hulpmiddelen" (`TOOLBOX`). `index.html` bevat de weergave en logica. Voor een inhoudelijke update volstaat het aanpassen van `data.js`.

Bij de ontwikkeling van deze webpagina zijn achtereenvolgens Copilot Pro en Mistral Vibe gebruikt.

## Status en disclaimer

Het hulpmiddel is door de maker als privépersoon beschikbaar gesteld, niet namens of in opdracht van het Nationaal Archief, diens werkgever. Het is geen officiële publicatie of standpunt van het Nationaal Archief en geen juridisch advies. De maker heeft het ontwikkeltraject van de Archiefwet 2026 als medewerker van het Nationaal Archief van dichtbij meegemaakt en de samenvattingen gecontroleerd op eigen kennis van de wet. De bronnen en het overzicht zijn gecontroleerd en bijgewerkt op 14 november 2026. De Archiefregeling is nog een concept. De samenvattingen kunnen onvolledig of verouderd zijn. Controleer altijd de actuele officiële teksten en laat de toepassing op uw situatie zo nodig juridisch beoordelen.
