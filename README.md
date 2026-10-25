# Archiefwet 2026 checks

Statisch, Nederlandstalig overzicht dat per onderwerp de bepalingen uit de Archiefwet 2026, het Archiefbesluit 2026, de concept-Archiefregeling en het Besluit diploma’s archivarissen naast elkaar zet: wat moet geregeld zijn, hoe de wet dat uitwerkt en welke minimale eisen gelden.

De aanleiding voor dit hulpmiddel was mijn constatering dat er over de afzonderlijke onderwerpen van de Archiefwet 2026 al veel uitleg bestaat, maar dat die nergens op één pagina overzichtelijk bij elkaar staat. Zo'n totaaloverzicht leek me nuttig. De vinkjes, het exporteren en importeren van de voortgang en het filteren zijn later toegevoegd, voor de gebruikerservaring.

## Gebruik

Open `index.html` in een browser. Zoek op trefwoord of artikel, filter op soort archief (digitaal of fysiek) en type organisatie, en vink afgeronde punten af. De voortgang wordt lokaal in de browser opgeslagen en kan als bestand worden geëxporteerd om elders (bijvoorbeeld bij een collega) te worden geïmporteerd; met de knop "Wissen" zet u alles terug. Installatie of buildstap is niet nodig.

Elk onderwerp rangschikt de regels in vier lagen: de Archiefwet (wat moet geregeld zijn), het Archiefbesluit (hoe werkt dat uit), de Archiefregeling (welke minimale eisen) en het Besluit diploma’s archivarissen (diploma-eisen). De artikelverwijzingen linken rechtstreeks naar de officiële publicaties. De onderwerpen zijn gegroepeerd in zes fasen, van organisatie en verantwoordelijkheid tot toezicht en overgang. Bij het afdrukken print de pagina het kader "Bron, leeswijzer en status" en de onderwerpen automatisch uitgeklapt.

De Archiefregeling is nog een concept; die laag is in het overzicht daarom als zodanig gemarkeerd.

## Bronnen

De centrale informatievoorziening over de Archiefwet 2026 is de pagina [Nieuwe Archiefwet: samen werken aan duurzaam toegankelijke informatie | Nationaal Archief](https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026).

Het overzicht is gebaseerd op de volgende regelgeving:

- [Archiefwet 2026 (Staatsblad 2026, 149)](https://zoek.officielebekendmakingen.nl/stb-2026-149.html)
- [Archiefbesluit 2026 (Staatsblad 2026, 321)](https://zoek.officielebekendmakingen.nl/stb-2026-321.html), inclusief nota van toelichting
- [Archiefregeling 2026 (concept, EU-notificatie 27387)](https://technical-regulation-information-system.ec.europa.eu/nl/notification/27387)
- [Besluit diploma’s archivarissen (Staatsblad 2026, 303)](https://zoek.officielebekendmakingen.nl/stb-2026-303.html)

De kennisbankpagina van het Nationaal Archief verwijst naar deze bronnen. De pagina beschrijft wat er verandert en het invoeringstraject; de teksten daar zijn geschreven door de beleidsmedewerkers van het Ministerie van OCW, in samenwerking met medewerkers van het Nationaal Archief en de Inspectie Overheidsinformatie en Erfgoed.

Het Archiefbesluit is vastgesteld op 23 september 2026 en gepubliceerd op 16 oktober 2026. Raadpleeg bij twijfel de officiële [publicatie](https://zoek.officielebekendmakingen.nl/stb-2026-321.html) en de actuele regelgeving.

## Aanpak

Voor het samenstellen van dit overzicht zijn de PDF-versies van de vier regelingen gedownload via de officiële publicatie- en kennisbankbronnen. Van elke PDF is per pagina de tekst geëxtraheerd naar een platte-tekstversie (`.txt`), met per pagina een markering (`=====PAGE n=====`). Deze tekstversies vormden de basis van het overzicht: de artikelen per onderwerp zijn op grond van deze teksten geselecteerd en samengevat.

De PDF’s en tekstversies worden niet meegepubliceerd (zie `.gitignore`) en blijven alleen lokaal aanwezig; raadpleeg de officiële teksten via de bronnen hierboven.

De onderwerpen, samenvattingen en bronlinks staan in `data.js`; `index.html` bevat de weergave en logica. Voor een inhoudelijke update volstaat het aanpassen van `data.js`.

Bij de ontwikkeling van deze webpagina zijn achtereenvolgens Copilot Pro en Mistral Vibe gebruikt.

## Status en disclaimer

Het hulpmiddel is door de maker als privépersoon beschikbaar gesteld, niet namens of in opdracht van het Nationaal Archief, diens werkgever. Het is geen officiële publicatie of standpunt van het Nationaal Archief en geen juridisch advies. De maker heeft het ontwikkeltraject van de Archiefwet 2026 als medewerker van het Nationaal Archief van dichtbij meegemaakt en de samenvattingen gecontroleerd op eigen kennis van de wet. De bronnen en het overzicht zijn gecontroleerd en bijgewerkt op 25 oktober 2026. De Archiefregeling is nog een concept; ook de samenvattingen kunnen onvolledig of verouderd zijn. Controleer altijd de actuele officiële teksten.
