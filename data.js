// Brondata en instellingen voor het Archiefwet 2026-overzicht.
// Laatst gecontroleerd en bijgewerkt op: zie LAST_UPDATED.

const LAST_UPDATED = "23 november 2026";
const KEY = "archiefwet2026.v2";

const SOURCES = {
  wet:      { url: "https://zoek.officielebekendmakingen.nl/stb-2026-149.html", name: "Archiefwet 2026 (Staatsblad 2026, 149)" },
  besluit:  { url: "https://zoek.officielebekendmakingen.nl/stb-2026-321.html", name: "Archiefbesluit 2026 (Staatsblad 2026, 321)" },
  regeling: { url: "https://zoek.officielebekendmakingen.nl/stcrt-2026-40895.html", name: "Archiefregeling 2026 (Staatscourant 2026, 40895)" },
  diploma:  { url: "https://zoek.officielebekendmakingen.nl/stb-2026-303.html", name: "Besluit diploma's archivarissen (Staatsblad 2026, 303)" }
};

// k: "dig" | "fys" (weglaten = geldt voor alle vormen). w: doelgroepen (weglaten = iedereen).
// d: details (uitklapbaar). n: let-op-notitie.
const I = (a, t, o = {}) => ({ a, t, ...o });
const NONE_B = "Geen aparte bepaling in het Besluit. De Wet is hier direct van toepassing.";
const NONE_R = "Geen aparte bepaling in de Regeling.";

// Hulpmiddelen ('passende maatregelen') per onderwerp, ontleend aan het onderzoek
// 'Passende maatregelen bij de Archiefwet 2026' (zie TOOLBOX voor de bronnen).
// h: t = titel, u = url (optioneel), d = toelichting.
const H = (t, o = {}) => ({ t, ...o });
const U = {
  thema: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026",
  duto: "https://www.nationaalarchief.nl/archiveren/kennisbank/duto-raamwerk",
  catalogus: "https://www.nationaalarchief.nl/archiveren/kennisbank/catalogus-kennisproducten-0",
  mdto: "https://nationaalarchief.github.io/MDTO-Stappenplan/",
  voorkeurs: "https://www.nationaalarchief.nl/archiveren/kennisbank/norm-voorkeursformaten",
  droid: "https://www.nationalarchives.gov.uk/information-management/manage-information/preserving-digital-records/droid/",
  jhove: "http://jhove.openpreservation.org/",
  verapdf: "https://verapdf.org/",
  dss: "https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467109107/Digital+Signature+Service+-+DSS",
  earksip: "https://earksip.dilcis.eu/",
  naSip: "https://www.nationaalarchief.nl/archiveren/mdto/specificatie-submission-information-package",
  naVoorwaarden: "https://www.nationaalarchief.nl/archiveren/mdto/aanleverproces-submission-information-package/voorwaarden",
  nha: "https://noord-hollandsarchief.nl/images/Archiefbeheer/Handleidingen/Aanlevervoorwaarden_MDTO_v10.pdf",
  ioeMeld: "https://www.inspectie-oe.nl/onderwerpen/overheidsinformatie/meldplicht-informatie-incidenten",
  edepot: "https://www.nationaalarchief.nl/archiveren/kennisbank/wat-is-een-e-depot",
  edepotEerste: "https://www.nationaalarchief.nl/archiveren/kennisbank/eerste-keer-overbrengen-aansluiten-op-het-e-depot",
  archivematica: "https://www.archivematica.org/",
  atom: "https://www.accesstomemory.org/en/",
  training: "https://www.nationaalarchief.nl/archiveren/kennisbank/training-digitale-preservering",
  bio2: "https://www.bio-overheid.nl/bio2/bio-producten/baseline-informatiebeveiliging-overheid-2-bio2/",
  duurzaam: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-duurzame-toegankelijkheid",
  beheerregels: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-beheerregels",
  overzicht: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-overzicht-informatiehuishouding",
  selectie: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-waardering-en-selectie",
  vernietigen: "https://www.nationaalarchief.nl/archiveren/kennisbank/handreiking-digitaal-vernietigen",
  overbrengen: "https://www.nationaalarchief.nl/archiveren/kennisbank/handreiking-digitaal-overbrengen-in-de-praktijk",
  overbrengingOp: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-overbrenging-opschorting-en-ontheffing",
  openbaarheid: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-openbaarheid-en-toegang",
  toezicht: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-toezicht-en-handhaving",
  voorbereiden: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-voorbereiden-op-de-inwerkingtreding",
  fysiek: "https://www.nationaalarchief.nl/archiveren/kennisbank/handreiking-behoud-en-beheer-fysiek-archief",
  depothygiene: "https://www.nationaalarchief.nl/archiveren/kennisbank/protocollen-voor-een-goede-depothygiene",
  cbp: "https://www.nationaalarchief.nl/archiveren/kennisbank/de-inhoud-van-het-collectiebehoudsplan",
  vngGrip: "https://vng.nl/projecten/grip-op-informatie",
  vngMJP: "https://vng.nl/sites/default/files/2025-12/strategisch-meerjarenplan-digitale-informatiehuishouding.pdf",
  ipoMJP: "https://www.ipo.nl/actueel/provincies-presenteren-nieuw-meerjarenplan-voor-informatiehuishouding-2026-2030/",
  ipoHandreiking: "https://www.ipo.nl/wp-content/uploads/sites/5/2026/04/Handreiking-digitaliseringswetgeving-2026.pdf",
  uvwMJP: "https://unievanwaterschappen.nl/publicaties/meerjarenplan-digitale-informatiehuishouding-waterschappen/",
  uvwTransparant: "https://unievanwaterschappen.nl/themas/transparante-overheid/",
  kiaAw: "https://kiacommunity.nl/groups/153-archiefwet-2026/welcome",
  leerhuisFs: "https://www.leerhuisinformatiehuishouding.nl/archiefwet-2026",
  uva: "https://www.uva.nl/en/programmes/dual-masters/archival-and-information-studies-heritage-studies/archival-studies-heritage-studies.html",
  hvaPostHbo: "https://www.hva.nl/cursussen/archivistiek-post-hbo",
  archiefschool: "https://www.hva.nl/archiefschool",
  reinwardt: "https://www.reinwardt.ahk.nl/bachelor-cultureel-erfgoed/",
  naDiploma: "https://www.nationaalarchief.nl/archiveren/kennisbank/archiefwet-2026-aangewezen-archivaris-en-diploma-eis",
  leerhuisAanbod: "https://www.leerhuisinformatiehuishouding.nl/actueel/nieuws/2025/12/30/het-leerhuis-leeraanbod-in-2026---met-nieuwe-trainingen",
  radio: "https://leerplatform.it-academieoverheid.nl/",
  radioIh: "https://www.it-academieoverheid.nl/onderwerpen/i/informatiehuishouding",
  kvanbrain: "https://www.kvanbrain.nl/pagina/werken-de-archiefsector",
  kvanProfielen: "https://www.kvan.nl/wp-content/uploads/2026/08/Kennis-en-Competentieprofielen-KVAN.pdf",
  rceWegwijzer: "https://kennis.cultureelerfgoed.nl/index.php/Thema/Wegwijzer_duurzaamheidsbeleid",
  rceKlimaat: "https://www.cultureelerfgoed.nl/onderwerpen/v/veilig-erfgoed/preventieve-conservering/binnenklimaat",
  lerenPreserveren: "https://lerenpreserveren.nl/topic/preserveringsstrategieen/",
  siard: "https://siard.dilcis.eu/",
  forumStandaarden: "https://www.forumstandaardisatie.nl/open-standaarden",
  noraEdepot: "https://www.noraonline.nl/wiki/E-depot",
  ed3: "https://www.noraonline.nl/images/noraonline/6/6b/ED3_v1.pdf",
  gemmaEdepot: "https://www.gemmaonline.nl/images/gemma/5/59/Handreiking_in_gebruik_nemen_e-depot_decentrale_overheden_versie_1.0_dec._2015.pdf",
  vngPreservering: "https://vng.nl/sites/default/files/2026-01/aan-de-slag-met-preserveringsbeleid-een-naslagwerk-bij-het-opstellen.pdf",
  metamorfoze: "https://www.metamorfoze.nl/sites/default/files/documents/MM%20AC%20Richtlijnen%20conservering%202023.pdf",
  tkAw: "https://toetsingskader.inspectie-oe.nl/",
  dutoQuickscan: "https://www.nationaalarchief.nl/archiveren/kennisbank/risicobeoordeling-quickscan",
  kiaGids: "https://kiacommunity.nl/thoughts/29561"
};

// Instrumentarium en hulpmiddelen: dwarsdoorsnede over alle onderwerpen heen.
const TOOLBOX = [
  { g:"Kapstok voor passende maatregelen", items:[
    H("DUTO-raamwerk (Duurzaam Toegankelijke Overheidsinformatie)",{u:U.duto,d:"Vertaalt 'passende maatregelen' in modeleisen per proces (registreren, vernietigen, bewaren, migreren, ter beschikking stellen), inclusief een risicobeoordeling; toe te passen volgens archiving by design én op bestaande systemen."}),
    H("DUTO-quickscan (risicobeoordeling)",{u:U.dutoQuickscan,d:"Snelle, globale risicoscan binnen een bepaalde scope: inzicht in de belangrijkste risico's voor duurzame toegankelijkheid en de daarbij passende maatregelen. Een quickscan is geen vorm van toezicht."})
  ]},
  { g:"Metadata en ordening", items:[
    H("MDTO (Metagegevens voor Duurzaam Toegankelijke Overheidsinformatie) + Stappenplan toepassen MDTO (23 juni 2026)",{u:U.mdto,d:"Normerend metadataschema (NEN-ISO 23081-1) met XML-schema en SIP-specificatie voor uitwisseling tussen systemen." }),
    H("Forum Standaardisatie — 'Pas toe of leg uit'-lijst open standaarden (o.a. MDTO)",{u:U.forumStandaarden,d:"MDTO is sinds september 2026 door het OBDO (Overheidsbreed Beleidsoverleg Digitale Overheid) verplicht gesteld voor de overheid."})
  ]},
  { g:"Duurzame formaten", items:[
    H("Norm Voorkeursformaten",{u:U.voorkeurs,d:"Duurzame formaten bij creatie; geen massale conversie van bestaand archief vlak voor overbrenging." }),
    H("SIARD (Software Independent Archiving of Relational Databases)",{u:U.siard,d:"Open archiefformaat van de DILCIS Board (het beheerorgaan van o.a. de SIARD- en E-ARK-specificaties) voor langetermijnbewaring van relationele databases; door het Nationaal Archief erkend in de Norm Voorkeursformaten voor opname in het e-Depot."})
  ]},
  { g:"Beveiliging", items:[
    H("BIO2 — Baseline Informatiebeveiliging Overheid 2",{u:U.bio2,d:"Normenkader voor 'passende maatregelen ter beveiliging' (Besluit 2.1 lid 2)."})
  ]},
  { g:"Digitale bewaring en overbrenging", items:[
    H("e-Depot Nationaal Archief (CoreTrustSeal-gecertificeerd)",{u:U.edepot,d:"Bewaarplaats voor digitaal archief; OAIS (NEN-ISO 14721) als model voor een eigen bewaaromgeving." }),
    H("Archivematica",{u:U.archivematica,d:"Open source preserveringssysteem volgens OAIS (Open Archival Information System): normalisatie, metadata volgens PREMIS (Preservation Metadata: Implementation Strategies), fixity en toegang." }),
    H("AtoM (Access to Memory)",{u:U.atom,d:"Open source voor archiefbeschrijving en online toegang." }),
    H("Wegwijzer Duurzaamheidsbeleid (RCE / NDE)",{u:U.rceWegwijzer,d:"Van de RCE (Rijksdienst voor het Cultureel Erfgoed), ontwikkeld binnen het NDE (Netwerk Digitaal Erfgoed) en beheerd door de RCE. Preserveringsstrategieën per collectie: media-migratie, formaat-migratie, converteren, normaliseren of emuleren (incl. emulation-as-a-service); inclusief het stapsgewijs opstellen van een duurzaamheidsbeleid (preservation policy). Zie ook de pagina 'Functionele preservering – preserveringsstrategieën' op dezelfde kennisbank." }),
    H("NORA (Nederlandse Overheids Referentie Architectuur) — e-depot",{u:U.noraEdepot,d:"Referentiearchitectuur voor e-depots bij de overheid." }),
    H("ED3 — Eisen Duurzaam Digitaal Depot (toetsingskader)",{u:U.ed3,d:"Toetsingskader voor de beheersomgeving van een eigen digitaal depot, als aanvulling op OAIS en CoreTrustSeal." }),
    H("GEMMA (Gemeentelijke Model Architectuur) — Handreiking in gebruik nemen e-depot (decentrale overheden, 2015)",{u:U.gemmaEdepot,d:"Praktische handreiking voor decentrale overheden bij het inrichten en aansluiten van een e-depot." })
  ]},
  { g:"Formaten, integriteit en overdrachtspakketten", items:[
    H("DROID",{u:U.droid,d:"Formatidentificatie op basis van PRONOM (formaatregister van The National Archives, VK)." }),
    H("JHOVE",{u:U.jhove,d:"Formatspecifieke validatie." }),
    H("veraPDF",{u:U.verapdf,d:"Open source validatie van PDF/A (duurzame archiefvariant van PDF) en PDF/UA (toegankelijkheidsvariant van PDF): controleer of documenten aan het duurzame formaat voldoen." }),
    H("E-ARK SIP (Submission Information Package) / CSIP (Common Specification for Information Packages) (eArchiving Building Block)",{u:U.earksip,d:"Europese specificatie voor Submission Information Packages (overdrachtspakketten), incl. referentie-implementatie earkweb; sluit aan bij de MDTO-SIP." }),
    H("Voorwaarden voor aanlevering (Nationaal Archief)",{u:U.naVoorwaarden,d:"Gepubliceerde acceptatievoorwaarden voor digitale overbrenging: export als SIP volgens de MDTO-standaard; zie ook de SIP-specificatie." }),
    H("Aanlevervoorwaarden MDTO — voorbeeld decentrale archiefdienst (Noord-Hollands Archief)",{u:U.nha,d:"Vergelijkbare MDTO-gebaseerde aanlever-/aansluitvoorwaarden publiceren diverse RHC's (Regionaal Historische Centra) en gemeentelijke archiefdiensten (o.a. Drents Archief, Regionaal Archief Nijmegen, Erfgoed Leiden, Stadsarchief Amsterdam)." })
  ]},
  { g:"Kennisproducten per onderwerp", items:[
    H("Catalogus kennisproducten Nationaal Archief",{u:U.catalogus,d:"Handreikingen voor e-mail, chat, sociale media, websites, vervanging, waardering/selectie, steekproeven, externe deskundige, digitaal vernietigen, digitaal overbrengen en fysiek archief." }),
    H("Toetsingskader Archiefwet 2026 (Inspectie Overheidsinformatie en Erfgoed, live sinds 23 november 2026)",{u:U.tkAw,d:"Maakt de open normen uit de Archiefwet 2026 concreet en toetsbaar: per onderwerp de geldende voorschriften plus de criteria en indicatoren waarmee de Inspectie naleving beoordeelt. Ook te gebruiken om de eigen informatiehuishouding op orde te brengen. Open source: RijksICTGilde/toetsingskader-archiefwet op GitHub." })
  ]},
  { g:"Leren en community", items:[
    H("Voorbereiden op de inwerkingtreding",{u:U.voorbereiden,d:"KIA (Kenniscommunity Informatie en Archief) en het Leerhuis Informatiehuishouding volgen het invoeringstraject." }),
    H("Training Digitale Preservering",{u:U.training,d:"Vakbekwaamheid voor digitale bewaring." }),
    H("Leren Preserveren (NDE)",{u:U.lerenPreserveren,d:"Leeromgeving van het NDE (Netwerk Digitaal Erfgoed) met o.a. preserveringsstrategieën (migratie, conversie, normalisatie, emulatie) en de Wegwijzer duurzaamheidsbeleid." }),
    H("Leerhuis Informatiehuishouding — Archiefwet 2026",{u:U.leerhuisFs,d:"Gratis leeraanbod voor rijks- en medeoverheden: factsheet, 5 microlearnings van ~15 minuten, trainingen, de tweedaagse workshop 'Slim schakelen tussen wetten', webinars (o.a. over toezicht) en een podcastserie met praktijkverhalen." })
  ]},
  { g:"Decentrale koepels: VNG (Vereniging van Nederlandse Gemeenten), IPO (Interprovinciaal Overleg) en Unie van Waterschappen", items:[
    H("VNG — Grip op Informatie (programma en kennisbank)",{u:U.vngGrip,d:"Programma met handreikingen en praktijksessies 'Archiefwet 2026 in de praktijk' voor gemeenten en gemeenschappelijke regelingen, o.a. via de Kennisbank Grip op Informatie." }),
    H("VNG — Strategisch meerjarenplan digitale informatiehuishouding 2026–2030",{u:U.vngMJP,d:"Inclusief de visie op informatiehuishouding; zie ook vng.nl/onderwerpen/archieven." }),
    H("VNG — Aan de slag met preserveringsbeleid (naslagwerk 2026)",{u:U.vngPreservering,d:"Praktisch naslagwerk bij het opstellen van een preserveringsbeleid voor de digitale collectie: welke strategie (migreren, converteren, emuleren) voor welke collectie." }),
    H("IPO — Meerjarenplan Digitale Informatiehuishouding Provincies 2026–2030",{u:U.ipoMJP,d:"Implementatieaanpak van de provincies voor o.a. de Archiefwet 2026." }),
    H("IPO — Handreiking digitaliseringswetgeving 2026",{u:U.ipoHandreiking,d:"Overzicht van digitaliseringswetgeving voor provincies, inclusief de Archiefwet 2026." }),
    H("UvW (Unie van Waterschappen) — Meerjarenplan digitale informatiehuishouding waterschappen 2026–2030",{u:U.uvwMJP,d:"Implementatieaanpak van de waterschappen; zie ook het thema transparante overheid/archiefbeheer." }),
    H("UvW — Thema transparante overheid",{u:U.uvwTransparant,d:"Informatie over archiefbeheer en openbaarheid bij waterschappen." }),
    H("KIA-community 'Archiefwet 2026'",{u:U.kiaAw,d:"Kenniscommunity Informatie en Archief: praktijkgidsen, sessies en ervaringen van o.a. VNG, IPO en UvW." }),
    H("Praktijkgids Archiefwet 2026 v1.2 (1 november 2026, gratis via KIA community)",{u:U.kiaGids,d:"Praktische gids per onderwerp over wat de Archiefwet 2026 vraagt, incl. Woo-verzoeken en het Selectiebesluit na de machtiging; ook als pdf te downloaden." })
  ]},
  { g:"Opleiding en vakbekwaamheid (diploma-eis archivaris)", items:[
    H("UvA — Dual Master Archival and Information Studies (wo; aangewezen voor diploma Archivistiek A)",{u:U.uva,d:"Academische route tot archivaris; een van de drie aangewezen opleidingen onder het Besluit diploma's archivarissen." }),
    H("HvA — post-hbo Archivistiek (hbo; aangewezen voor diploma Archivistiek B)",{u:U.hvaPostHbo,d:"Voor informatieprofessionals die doorgroeien in informatiehuishouding en archiefbeheer." }),
    H("Reinwardt Academie (AHK) — bachelor Cultureel erfgoed (hbo; aangewezen voor diploma Archivistiek B)",{u:U.reinwardt,d:"Enige hbo-opleiding in Nederland met erfgoed in de volle breedte, incl. archiefstukken." }),
    H("Archiefschool — samenwerking UvA, HvA en Reinwardt Academie",{u:U.archiefschool,d:"Cursussen en seminarcycli, o.a. 'Archivistiek voor niet-archivarissen'." }),
    H("Kennisbank NA (Nationaal Archief) — Aangewezen archivaris en diploma-eis",{u:U.naDiploma,d:"Uitleg van de diploma-eis onder de Archiefwet 2026 en de aanwijzing van opleidingen door de Minister." }),
    H("Leerhuis Informatiehuishouding — leeraanbod 2026",{u:U.leerhuisAanbod,d:"Trainingen en cursussen over o.a. de Archiefwet 2026 en de Woo (Wet open overheid); zie ook de Archiefwet-2026-pagina van het Leerhuis." }),
    H("RADIO Leerplatform — RijksAcademie voor Digitalisering en Informatisering Overheid",{u:U.radio,d:"E-learnings en cursussen voor rijksmedewerkers, o.a. over informatiehuishouding en archiveren (zie 'Informatiehuishouding')." }),
    H("KVAN BRAIN (branchevereniging van archiefinstellingen) — werken in de archiefsector",{u:U.kvanbrain,d:"Branchevereniging: overzicht van opleidingsmogelijkheden in de archiefsector." }),
    H("Kennis- en competentieprofielen archiefsector (KVAN, versie 1.0, 2026)",{u:U.kvanProfielen,d:"Wat een archivaris moet kennen en kunnen." })
  ]}
];

const phases = [
 { name:"Organisatie en verantwoordelijkheid", topics:[
  { id:"verantwoordelijkheid", title:"Wie is verantwoordelijk?",
    doel:"Vaststellen welk orgaan verantwoordelijk is voor welke documenten, ook na overbrenging en bij een gemeenschappelijke regeling.",
    change:{s:"gelijk",t:"De wet wees ook al het verantwoordelijke orgaan aan (vergelijkbaar met art. 2 Archiefwet 1995). Nieuw zijn onder meer de regels voor na overbrenging (2.6) en de overdracht van taken (3.1–3.3)."},
    wet:[
      I("1.1","Alle 'documenten' vallen onder de wet: elk geheel van vastgelegde gegevens (digitaal of fysiek) dat een overheidsorgaan opmaakt of ontvangt en dat verband houdt met zijn publieke taak."),
      I("1.3","Houd bij uw taken rekening met het belang van documenten voor uitvoering en verantwoording, voor burgers (rechten en plichten), voor onderzoek en als cultureel erfgoed."),
      I("2.1","Staat: de genoemde organen (ministers, Kamers, Raad van State, Algemene Rekenkamer, ZBO's (zelfstandige bestuursorganen) van de Staat e.a.) zijn ieder voor hun organisatie verantwoordelijk; voor overige organen de betrokken minister.",{w:["rijk"]}),
      I("2.2","Provincie, gemeente, waterschap: gedeputeerde staten, college van burgemeester en wethouders (B&W), respectievelijk dagelijks bestuur zijn verantwoordelijk, volgens een verordening van de volksvertegenwoordiging.",{w:["decentraal"]}),
      I("2.3","Gemeenschappelijke regeling: dagelijks bestuur (openbaar lichaam), bestuur (bedrijfsvoeringsorganisatie), deelnemers gezamenlijk (gemeenschappelijk orgaan).",{w:["gr"]}),
      I("2.4, 2.5","Andere publiekrechtelijke rechtspersonen: het orgaan dat het dagelijks bestuur voert. Privaatrechtelijke personen met openbaar gezag: zijzelf.",{w:["rijk"]}),
      I("2.6","Na overbrenging naar het Nationaal Archief is de Minister verantwoordelijk. Bij een gemeenschappelijke regeling wijst u een orgaan aan (alleen Minister of een orgaan uit 2.2) dat ook voor de niet-overgebrachte documenten van minstens één deelnemer verantwoordelijk is.",{w:["rijk","gr"]}),
      I("3.1 – 3.3","De Minister kan taken na overbrenging overdragen aan een gemeenschappelijke regeling, provincie of gemeente, met specifieke uitkering. Intrekking kan op verzoek, bij gebrekkig beheer of na beleidsheroverweging (dan pas na 5 jaar).",{w:["gr","decentraal"],d:["Het besluit geldt voor onbepaalde tijd en leidt niet tot eigendomsoverdracht (3.1 lid 4, 5).","Specifieke uitkering: 3.2; nadere regels bij ministeriële regeling."]}),
      I("12.1","Pas bestaande gemeenschappelijke regelingen uiterlijk twee jaar na inwerkingtreding aan op 2.3, 2.6 en 10.5.",{w:["gr"],dt:"2029-01-01",n:"Uiterlijk 1 januari 2029 (twee jaar na inwerkingtreding)."})
    ], besluit:[], regeling:[],
    tools:[
      H("Aanwijzings- en mandaatregeling",{d:"Leg per systeem vast wie feitelijk beheerder is en wie de rol van 'verantwoordelijke voor de informatiehuishouding' vervult; die rol is ook nodig bij het selectiebesluit (Besluit 3.5)."}),
      H("Evaluatiecyclus van de beheerregels",{u:U.beheerregels,d:"Maak de verantwoordelijkheidsstructuur een terugkerend agendapunt in de periodieke evaluatie van de beheerregels (Wet 4.2 lid 1)."}),
      H("DUTO-module 3 (ontwerpstelsel)",{u:U.duto,d:"Randvoorwaarden op organisatieniveau. Decentraal: toets de verordening op de nieuwe systematiek; pas gemeenschappelijke regelingen binnen twee jaar aan (Wet 12.1)."})
    ],
    noteB:"Besluit en Regeling bevatten hier geen bepalingen: de uitwerking zit in uw eigen verordening." },
  { id:"samenwerking", title:"Samenwerking en organisatiewijzigingen",
    doel:"Zorgen dat documenten niet tussen wal en schip raken bij samenwerkingsverbanden, fusies, opheffing of overdracht van taken.",
    change:{s:"gelijk",t:"De oude wet voorzag ook al in een voorziening voor documenten bij opheffing, fusie of taakoverdracht. Nieuw zijn ook samenwerkingsverbanden (3.4) en het tijdelijk ter beschikking stellen aan een niet-overheidsorgaan (3.5 lid 3)."},
    wet:[
      I("3.4","Samenwerkingsverband: de verantwoordelijke organen treffen gezamenlijk een regeling voor de documenten.",{d:["In de regeling minimaal: hoe zij hun taken invullen, naar welke archiefdienst blijvende documenten gaan, hoe toezicht plaatsvindt en een beheerregeling.","De taken mogen bij één van de organen worden belegd."]}),
      I("3.5 lid 1, 2","Een regeling die organen opheft, samenvoegt of splitst, of taken overdraagt, bevat een voorziening voor hun documenten. Bij een tijdelijk orgaan: ook voor bewaring na opheffing."),
      I("3.5 lid 3","Taken naar een niet-overheidsorgaan: documenten tijdelijk ter beschikking stellen kan, mits vastgelegd welke documenten, voor welke periode (niet langer dan overbrengingstermijn, behoudens opschorting) en hoe toezicht plaatsvindt.")
    ], besluit:[], regeling:[],
    tools:[
      H("Model-afsprakenkader met exitclausules",{d:"Project-, samenwerkings- en exitclausules waarin documenten altijd een 'eigenaar' houden; dit voorkomt dat documenten tussen wal en schip raken."}),
      H("Overzicht informatiehuishouding als inventaris",{u:U.overzicht,d:"Bij elke organisatiewijziging: welke systemen en documenten gaan over en welke samenhang is er."}),
      H("Register van documenten bij derden",{d:"Bij tijdelijk ter beschikking stellen aan een niet-overheidsorgaan (Wet 3.5 lid 3): wat, aan wie, tot wanneer, welk toezicht."})
    ],
    noteB:"Besluit en Regeling bevatten hier geen bepalingen." },
  { id:"beheerregels", title:"Beheerregels en overzicht informatiehuishouding",
    doel:"Vastleggen en publiceren hoe u uw documenten beheert, en een actueel overzicht hebben van systemen, werkprocessen en vindplaatsen.",
    change:{s:"gewijzigd",t:"Beheer in 'goede, geordende en toegankelijke staat' bestond al (art. 8 Archiefwet 1995). Nieuw: openbare beheerregels met periodieke evaluatie (Wet 4.2) en het verplichte, actuele overzicht informatiehuishouding (Regeling 2.3)."},
    w:["rijk","decentraal","gr"], du:"Bewaren",
    wet:[
      I("4.2 lid 1, 2","Stel beheerregels vast voor niet-overgebrachte documenten.",{d:["Wie is belast met het feitelijke beheer (organen of dienstonderdelen).","Per categorie documenten: de maatregelen voor duurzame toegankelijkheid en vernietiging.","Hoe het beheer periodiek wordt onderzocht, geëvalueerd en bijgesteld."]}),
      I("4.2 lid 3","Maak de beheerregels openbaar."),
      I("4.1 lid 3","Zorg dat documenten die onterecht bij een ander overheidsorgaan berusten, bij het juiste orgaan terechtkomen.")
    ],
    besluit:[
      I("1.1","Begrip 'informatiehuishouding': beleid, voorzieningen, processen en handelingen voor documentbeheer, inclusief uitwisseling met andere organen."),
      I("2.5 lid 1 sub c","Grondslag voor ministeriële regels over ordening en overzicht.")
    ],
    regeling:[
      I("2.3","Beschik over een actueel overzicht van de informatiehuishouding.",{d:["Taken en bijbehorende documenten.","Per organisatieonderdeel: applicaties en systemen per werkproces.","Vindplaats en samenhang van documenten.","Bij meerdere ordeningsstructuren: beschrijving en onderlinge relaties."],n:"Het overzicht is de basis voor vernietiging (Regeling 4.1 sub a) en voor de selectiebesluiten."})
    ],
    tools:[
      H("Beheerregels als drie-kolomentabel",{u:U.beheerregels,d:"Gebruik de wetspecificatie letterlijk: belegging van het beheer, passende maatregelen per categorie, evaluatiecyclus. Publiceer de beheerregels openbaar (Wet 4.2)."}),
      H("Overzicht informatiehuishouding als wegwijzer",{u:U.overzicht,d:"Taken → werkprocessen → systemen → vindplaatsen. Basis om te bepalen welke maatregelen passend zijn, en werkinstrument voor toezichthouders (Regeling 2.3)."}),
      H("OIM (Overheidsinformatiemodel), Richtlijn Metagegevens Overheidsinformatie en een applicatieregister/CMDB (configuration management database)",{u:U.catalogus,d:"Hulpmiddelen voor de invulling; een beheerd applicatieregister als technische onderlegger."}),
      H("KIA-community en VNG Kennisbank Grip op Informatie",{u:U.kiaAw,d:"Praktijkgidsen en sessies 'Archiefwet 2026 in de praktijk' van de koepels (VNG, IPO, UvW) voor decentrale overheden."}),
      H("Praktijkgids Archiefwet 2026 v1.2 (KIA community)",{u:U.kiaGids,d:"Gratis praktische gids per onderwerp voor de implementatie, o.a. Woo-verzoeken en het Selectiebesluit na de machtiging."}),
      H("Wegwijzer Duurzaamheidsbeleid (RCE / NDE)",{u:U.rceWegwijzer,d:"Stapsgewijs een duurzaamheidsbeleid (preservation policy) voor de digitale collectie opstellen; sluit aan bij de beheerregels (Wet 4.2)."}),
      H("VNG — Aan de slag met preserveringsbeleid (naslagwerk 2026)",{u:U.vngPreservering,d:"Naslagwerk bij het uitwerken van de passende maatregelen per categorie in de beheerregels."})
    ]}
 ]},

 { name:"Duurzame toegankelijkheid", topics:[
  { id:"duurzaam", title:"Duurzame toegankelijkheid: kernverplichting en beveiliging",
    doel:"Documenten zolang het selectiebesluit voorschrijft vindbaar, beschikbaar, leesbaar, betrouwbaar en beveiligd houden.",
    change:{s:"gewijzigd",t:"Bouwt voort op de oude beheerplicht, maar is nu expliciet 'duurzaam toegankelijk' met een risicobenadering en digitale eisen — en geldt voor álle documenten, niet alleen blijvend te bewaren (het Archiefbesluit 1995 richtte zich vooral op fysieke materialen en depots)."},
    du:"Bewaren",
    wet:[
      I("4.1 lid 1, 2","Treft passende maatregelen om documenten duurzaam toegankelijk te maken en te houden. Een maatregel mag er niet toe leiden dat de wet buiten toepassing blijft."),
      I("4.1 lid 4","Nadere regels volgen uit de algemene maatregel van bestuur (Besluit 2.1 e.v.)."),
      I("4.1 lid 5, 6","De Minister kan voor Rijk, andere publiekrechtelijke en privaatrechtelijke organen normen vaststellen (afwijken alleen gemotiveerd); mandaat aan de rijksarchivaris mogelijk.",{w:["rijk"]})
    ],
    besluit:[
      I("2.1 lid 1","Beheer documenten zodat zij zolang het selectiebesluit vereist:",{d:["a-c. binnen redelijke termijn vindbaar, beschikbaar en weer te geven (mens- of machineleesbaar);","d. vast te stellen is wanneer, door wie en uit hoofde van welke taak zij zijn opgemaakt, en hun relatie tot andere documenten;","e. de oorspronkelijke inhoud betrouwbaar, volledig en beschermd tegen ongecontroleerde wijziging is;","f. geen aanmerkelijke fysieke of digitale achteruitgang of informatieverlies optreedt."]}),
      I("2.1 lid 2","Neem passende maatregelen ter beveiliging van uw documenten.",{n:"Verdere invulling ontbreekt in de Regeling (grondslag 2.5 lid 1 sub e). Kies zelf een kader en leg het vast in uw beheerregels."}),
      I("2.5 lid 1","Grondslag voor ministeriële regels over digitale kwaliteitseisen, bewaaromgeving, beveiliging, fysieke ruimten en materialen.")
    ],
    regeling:[
      I("2.1","Opslag en verwerking binnen de EU, EER (Europese Economische Ruimte) of een land met adequaatheidsbesluit, tenzij een verdrag anders vereist.",{k:"dig"}),
      I("2.4","Zorg dat u op verzoek een juiste en volledige weergave of export (inhoud en metadata) kunt leveren, zo nodig gedeeltelijk als er persoonsgegevens, vertrouwelijke informatie of openbaarheidsbeperkingen zijn.",{k:"dig"}),
      I("1.2, 1.3","Gelijkwaardige normen uit een andere EU/EER-staat en nieuwere versies van genoemde normen zijn toegestaan. Afwijken kan als dezelfde kwaliteit wordt bereikt.")
    ],
    tools:[
      H("Risicobenadering, vastgelegd in de beheerregels",{u:U.duurzaam,d:"Differentieer de zwaarte van de maatregelen per categorie; documenten mogen nooit 'buiten beheer' raken. Verantwoord de differentiatie in de beheerregels."}),
      H("BIO2 (Baseline Informatiebeveiliging Overheid 2) als beveiligingskader",{u:U.bio2,d:"Normenkader voor de 'passende maatregelen ter beveiliging' (Besluit 2.1 lid 2). Het NA e-Depot gebruikt Baseline Rijk plus periodieke beveiligingsaudits als referentiepatroon."}),
      H("DUTO (Duurzaam Toegankelijke Overheidsinformatie) volgens archiving by design en bij inkoop",{u:U.duto,d:"Pas het raamwerk toe bij (her)ontwerp van systemen; de DUTO-risicobeoordeling bepaalt hoe zwaar de maatregelen per categorie moeten zijn."}),
      H("DUTO-quickscan als snelle risicoscan",{u:U.dutoQuickscan,d:"Snel globaal inzicht in de risico's voor duurzame toegankelijkheid binnen een scope, met concrete maatregelen; geen vorm van toezicht."}),
      H("EU/EER-opslag vastleggen in verwerkersovereenkomsten",{d:"Regeling 2.1: opslag en verwerking binnen de EU/EER of een land met een adequaatheidsbesluit."}),
      H("Jaarlijkse steekproefexport",{d:"Test dat u op verzoek een juiste en volledige weergave of export kunt leveren (Regeling 2.4)."})
    ]},
  { id:"metadata", title:"Ordening en metadata",
    doel:"Documenten voorzien van metadata en een plek in een ordeningsstructuur, zodat ze vindbaar en te verantwoorden zijn.",
    change:{s:"gelijk",t:"Ordening en metadata bestonden al in de oude regeling. Nieuw/aangescherpt: metadataschema conform NEN-ISO 23081-1, SIP-uitwisseling en aanvullende metadata voor digitale langbewaring (Regeling 2.5–2.8)."},
    du:"Bewaren",
    wet:[ I("4.1 lid 1","Metadata en ordening zijn onderdeel van de passende maatregelen voor duurzame toegankelijkheid.") ],
    besluit:[
      I("1.1","Begrip 'metadata': gegevens die inhoud, structuur en context van documenten en het beheer ervan door de tijd heen beschrijven."),
      I("2.1 lid 1 sub d","Metadata moet aantonen wanneer, door wie en uit hoofde van welke taak een document is opgemaakt of ontvangen en hoe het zich verhoudt tot andere documenten."),
      I("2.5 lid 1 sub c, d","Grondslag voor Regeling 2.2 tot en met 2.6 en 2.8.")
    ],
    regeling:[
      I("2.2","Heb een of meer ordeningsstructuren (minstens één aansluitend op taken en werkprocessen). Leg de plaats van een document vast via metadata of externe registratie."),
      I("2.5","Stel een of meer metadataschema's vast conform NEN-ISO 23081-1:2017 nl en leg minimaal vast:",{d:["inhoud, structuur, verschijningsvorm, ontvangen bestandsformaat;","uniek identificatiekenmerk;","wanneer, door wie en uit hoofde van welke taak;","samenhang met andere documenten en plaats in de ordeningsstructuur;","uitgevoerde beheeractiviteiten, categorie uit het selectiebesluit en bewaartermijn."]}),
      I("2.6","Bij een elektronische handtekening ook: ondertekenaar; bij geavanceerde handtekening het bewijs van koppeling; bij gekwalificeerde handtekening het middel en certificaat.",{k:"dig"}),
      I("2.8","Aanvullend vastleggen: gebruikte hard- en software, resultaten van integriteitschecks en een permanent uniek identificatiekenmerk.",{k:"dig",n:"Alleen voor digitale documenten met een bewaartermijn langer dan 10 jaar (Regeling 2.7)."})
    ],
    tools:[
      H("MDTO + Stappenplan toepassen MDTO (23 juni 2026)",{u:U.mdto,d:"Nederlands normerend metadataschema conform NEN-ISO 23081-1, met XML-schema en SIP-specificatie voor uitwisseling tussen systemen; vult Regeling 2.5 en 2.8 in."}),
      H("Ordeningsstructuren op taken en werkprocessen",{d:"Minstens één ordeningsstructuur aansluitend op taken en werkprocessen; leg de plaats van een document vast via metadata of externe registratie (Regeling 2.2). Handtekeningmetadata volgens 2.6."}),
      H("EU DSS — Digital Signature Service (eIDAS, de EU-verordening voor elektronische identificatie en vertrouwensdiensten)",{u:U.dss,d:"Open source-bibliotheek (github.com/esig/dss) voor het aanmaken, uitbreiden en valideren van elektronische handtekeningen (handtekeningformaten XAdES, CAdES en PAdES); zie ook het eIDAS Dashboard-hulpmiddel voor validatie. Relevant voor de handtekeningmetadata uit Regeling 2.6."}),
      H("Forum Standaardisatie — 'Pas toe of leg uit'-lijst (MDTO verplicht)",{u:U.forumStandaarden,d:"MDTO (Metagegevens voor Duurzaam Toegankelijke Overheidsinformatie) is sinds september 2026 verplicht voor de overheid."})
    ]},
  { id:"digitaal10", title:"Digitale bewaring langer dan 10 jaar",
    doel:"Aanvullende eisen aan digitale documenten die op basis van het selectiebesluit langer dan tien jaar bewaard worden.",
    change:{s:"nieuw",t:"Aanvullende eisen voor digitale documenten met een bewaartermijn langer dan tien jaar (duurzame formaten, fixity, preservering) zijn nieuw; de oude wet kende dit regime niet als zodanig."},
    du:"Bewaren",
    wet:[ I("4.1 lid 1, 4","Passende maatregelen. De AMvB en ministeriële regeling werken de digitale eisen uit.",{k:"dig"}) ],
    besluit:[
      I("2.5 lid 1 sub a, b","Grondslag voor digitale kwaliteitseisen en digitale bewaaromgevingen.",{k:"dig",n:"De Regeling gebruikt deze grondslag alleen in algemene zin (2.7 tot en met 2.11). Concrete normen ontbreken."}),
      I("2.1 lid 1 sub f","Geen aanmerkelijke digitale achteruitgang of informatieverlies. Dit geldt voor alle digitale documenten.",{k:"dig"})
    ],
    regeling:[
      I("2.7","Artikelen 2.8 tot en met 2.11 gelden voor digitale documenten met een bewaartermijn van meer dan tien jaar.",{k:"dig"}),
      I("2.9","Sla documenten zo vroeg mogelijk op in een duurzaam bestandsformaat. Compressie alleen zonder onaanvaardbaar informatieverlies.",{k:"dig"}),
      I("2.10","Waarborg dat elk document ongewijzigd en onbeschadigd wordt opgeslagen en bewaard.",{k:"dig"}),
      I("2.11","Bij een andere preserveringshandeling dan migratie, conversie of emulatie: leg vast hoe aan de kwaliteitseisen is voldaan.",{k:"dig"}),
      I("2.8","Aanvullende metadata voor deze documenten.",{k:"dig",n:"Zie onderwerp 'Ordening en metadata'."})
    ],
    tools:[
      H("Norm Voorkeursformaten",{u:U.voorkeurs,d:"Sla informatieobjecten bij creatie in een duurzaam formaat op. Geen massale conversie van bestaand archief vlak voor overbrenging (informatieverlies); bewaar bestaande objecten in het originele formaat."}),
      H("DROID",{u:U.droid,d:"Formatidentificatie op basis van PRONOM; breng het formaatlandschap in kaart."}),
      H("JHOVE",{u:U.jhove,d:"Formatspecifieke validatie: controleer objecten op leesbaarheid."}),
      H("Fixity met checksums en manifesten",{d:"Verifieerbare opslag; periodieke fixity-checks zijn de integriteitschecks uit Regeling 2.8. Voor de transferverpakking: volg de gepubliceerde aanlevervoorwaarden van uw archiefdienst (zie onderwerp 'Overbrenging')."}),
      H("veraPDF",{u:U.verapdf,d:"Open source validatie van PDF/A (duurzame archiefvariant van PDF) en PDF/UA (toegankelijkheidsvariant van PDF): controleer of documenten daadwerkelijk aan het duurzame formaat voldoen."}),
      H("e-Depot of een eigen OAIS-omgeving",{u:U.edepot,d:"e-deposit bij de archiefdienst (het NA e-Depot is CoreTrustSeal-gecertificeerd) of een eigen bewaaromgeving conform OAIS (NEN-ISO 14721). Open source: Archivematica."}),
      H("SIARD voor relationele databases",{u:U.siard,d:"Open archiefformaat (DILCIS Board) voor databases, erkend in de Norm Voorkeursformaten; het e-Depot van het Nationaal Archief neemt SIARD op."}),
      H("Training Digitale Preservering",{u:U.training,d:"Vakbekwaamheid voor digitale bewaring."})
    ]},
  { id:"migratie", title:"Migratie, conversie en vervanging",
    doel:"Documenten veilig overzetten, omzetten of door reproducties vervangen zonder verlies van inhoud of metadata.",
    change:{s:"gewijzigd",t:"Vervanging door reproducties kon al onder de oude wet, maar met vooral administratieve procedures (verklaringen achteraf). Nieuw: migratieplan en -verklaring, een procesbeschrijving vervanging en eisen aan conversie."},
    du:"Migreren",
    wet:[
      I("4.3 lid 1, 2","U kunt documenten vervangen door reproducties en de originelen vernietigen. De reproducties gelden daarna als origineel."),
      I("4.3 lid 3","Nadere regels staan in het Besluit en de Regeling.")
    ],
    besluit:[
      I("2.2","Migratie: juiste en volledige weergave van inhoud en metadata. Werk met een vastgesteld migratieplan (niet nodig bij alleen een andere opslaglocatie) en maak een migratieverklaring.",{k:"dig",n:"Deze plicht geldt zelf vanaf inwerkingtreding; alleen de inhoudseisen uit Regeling 3.2 en 3.3 komen later (zie daar)."}),
      I("2.4","Conversie (ander bestandsformaat): juiste en volledige weergave van inhoud en metadata.",{k:"dig"}),
      I("2.3","Vervanging van analoge documenten: juiste en volledige weergave en een vastgestelde procesbeschrijving.",{k:"fys",d:["Voor nog niet overgebrachte blijvend te bewaren documenten vraagt u advies aan de archivaris (lid 3).","Niet nodig voor categorieën met algemeen advies van de rijksarchivaris (lid 4)."]}),
      I("4.2","Worden bij migratie of conversie originelen vernietigd, dan is dat vervanging in de zin van Wet 4.3. De vernietigingsprocedure (Besluit 4.1) is dan niet van toepassing.",{k:"dig"}),
      I("2.5 lid 1 sub f, g, h","Grondslag voor Regeling 3.1 tot en met 3.3.")
    ],
    regeling:[
      I("3.1","Procesbeschrijving vervanging bevat minimaal:",{k:"fys",d:["documenten, inhoud, structuur en vorm; gronden voor vervanging;","wanneer en hoe de archivaris adviseert en hoe cultureel-erfgoeddocumenten bewaard blijven;","uitzonderingen, technische infrastructuur, procesinrichting en kwaliteitsprocedures;","hoe de vervangen documenten worden vernietigd en hoe de beschrijving periodiek wordt geëvalueerd;","minimale beeldkwaliteit en metadatering."]}),
      I("3.2","Migratieplan bevat: borging van duurzame toegankelijkheid, borging van bewaartermijnen en een beschrijving van bron- en doelsystemen.",{k:"dig",dt:"2029-01-01",n:"Treedt pas later in werking (Regeling 8.4): artikel 8.4 spreekt van het derde kalenderjaar na inwerkingtreding, de toelichting van twee jaar erna, mogelijk dus een jaar verschil. Volgens het inwerkingtredings-KB (koninklijk besluit) is dat 1 januari 2029. Tot die tijd geldt alleen de planplicht uit Besluit 2.2, zonder deze inhoudseisen."}),
      I("3.3","Migratieverklaring bevat: gemigreerde documenten, niet of niet volledig gemigreerde documenten en hoe die raadpleegbaar blijven tot einde bewaartermijn.",{k:"dig",dt:"2029-01-01",n:"Zelfde latere inwerkingtreding als 3.2: 1 januari 2029."})
    ],
    tools:[
      H("DUTO-proces Migreren (module 7)",{u:U.duto,d:"Modeleisen voor migratie- en conversiescenario's."}),
      H("Handreiking Vervanging archiefbescheiden",{u:U.catalogus,d:"Scankwaliteit, procesbeschrijving en controle bij vervanging van analoog archief (Besluit 2.3, Regeling 3.1)."}),
      H("Proefmigraties met dubbele controle",{d:"Vergelijk steekproefgewijs bron en doel (inhoud, metadata, handtekeningen) vóór de originelen vervallen; leg de resultaten vast in de migratieverklaring, inclusief de niet-gemigreerde documenten (Regeling 3.2–3.3)."}),
      H("Handreikingen per informatiesoort",{u:U.catalogus,d:"E-mail, chatberichten, sociale media en overheidswebsites (incl. validatie van WARC-websitebestanden; WARC = webarchief-formaat)."}),
      H("Wegwijzer Duurzaamheidsbeleid — preserveringsstrategieën (RCE / NDE)",{u:U.rceWegwijzer,d:"Kies per scenario een strategie: media-migratie, formaat-migratie, converteren, normaliseren of emuleren (incl. emulation-as-a-service); leg de keuze en de borging vast in het migratieplan (Besluit 2.2)."}),
      H("Metamorfoze — Richtlijnen Conservering en kwaliteitsrichtlijnen digitalisering",{u:U.metamorfoze,d:"Voor vervanging van analoog archief (Besluit 2.3, Regeling 3.1): kwaliteitsrichtlijnen voor de scan/reproductie en richtlijnen voor conservering van het origineel."})
    ]}
 ]},

 { name:"Selectie, vernietiging en overbrenging", topics:[
  { id:"selectie", title:"Selectiebesluiten",
    doel:"Per categorie documenten vastleggen wat blijvend en wat tijdelijk bewaard wordt, via een openbare procedure met onafhankelijke inbreng.",
    change:{s:"gewijzigd",t:"Selectielijsten bestonden al (geldigheidsduur maximaal twintig jaar). Nieuw: het 'selectiebesluit' met een toepassingsperiode van maximaal tien jaar, een openbare procedure met onafhankelijke deskundige en modelselectiebesluiten."},
    w:["rijk","decentraal","gr"], du:"Vernietigen",
    wet:[
      I("5.1 lid 1 – 3","Ontwerp een of meer selectiebesluiten en pas ze toe. Een selectiebesluit beschrijft de categorieën en geeft aan wat blijvend en wat tijdelijk (met bewaartermijn) wordt bewaard. De Minister stelt het vast in overeenstemming met u."),
      I("5.1 lid 5","De AMvB regelt procedure, inhoud en afwijking. Afwijking mag nooit leiden tot vernietiging van blijvend te bewaren documenten."),
      I("5.2","Groepsselectiebesluit voor privaatrechtelijke organen: de Minister stelt het vast op een ontwerp van een representatieve organisatie. Het geldt alleen voor organen zonder eigen selectiebesluit.",{w:["rijk"]}),
      I("12.2","Bestaande selectielijsten gelden als selectiebesluiten.")
    ],
    besluit:[
      I("3.1","Inhoud en looptijd:",{d:["Opschrift, taken en structuur bij vaststelling, toepassingsperiode en afbakening met andere besluiten.","In beginsel voor documenten na vaststelling; terugwerkend deels mogelijk.","Toepassingsperiode maximaal tien jaar na 1 januari volgend op inwerkingtreding."]}),
      I("3.2","De rijksarchivaris kan modelselectiebesluiten vaststellen."),
      I("3.3","Uniforme openbare voorbereidingsprocedure (Awb afdeling 3.4 van de Algemene wet bestuursrecht). Eenieder kan een zienswijze indienen."),
      I("3.4","Indeling in categorieën die aansluit bij taken en informatiebeheer. Weeg ook het belang van gegevensbescherming (de AVG, de Algemene Verordening Gegevensbescherming). Altijd blijvend bewaren: strategische besluitvorming, planvorming en verantwoording, cruciale processen en essentiële registraties."),
      I("3.5, 3.6","Betrek de verantwoordelijke voor de informatiehuishouding, de archivaris en een onafhankelijke deskundige voor de relatie burger-overheid.",{d:["De deskundige wordt op voordracht van de eerste twee personen benoemd door het orgaan dat na overbrenging verantwoordelijk is.","De deskundige mag niet regelmatig voor de betrokken organen werken (behalve voor deze benoeming) en mag geen belangen of functies hebben die de onafhankelijkheid aantasten.","Benoeming is maximaal vijf jaar en kan één keer met maximaal vijf jaar worden verlengd."]}),
      I("3.7","Motiveer indeling en waardering en voeg een verslag van het overleg met de betrokken deskundigen toe."),
      I("3.8","Publiceer de bijlage met categorieën en waarderingen via de website van het Nationaal Archief. De Minister publiceert vastgestelde selectiebesluiten en afwijkingen op een centrale digitale infrastructuur."),
      I("3.9, 3.10","Afwijken kan voorlopig, onderbouwd en gemeld aan de rijksarchivaris:",{d:["Blijvend bewaren bij gebeurtenissen met grote gevolgen (archivaris betrekken).","Eerder vernietigen op grond van een wettelijk voorschrift, of langer bewaren op grond van wet of belangen.","Ondergeschikte aanpassing van categorieën.","Afwijkingen gaan mee in het volgende selectiebesluit."]}),
      I("3.11 – 3.13","Gezamenlijke en groepsselectiebesluiten: één archivaris, één verantwoordelijke en één deskundige volstaat. Afwijkingen volgens 3.9 en 3.10.",{w:["rijk","gr","decentraal"]}),
      I("7.2 lid 1","Overgangsrecht: bestaande selectielijsten hebben een toepassingsperiode van maximaal twintig jaar.")
    ],
    regeling:[ I("2.5 sub j, k","Leg bij elk document de categorie uit het selectiebesluit en de bewaartermijn vast als metadata.",{n:"Zie ook onderwerp 'Ordening en metadata'."}) ],
    tools:[
      H("Handreiking Waardering en selectie en Handreiking Steekproeven voor selectie",{u:U.catalogus,d:"Methodiek voor waardering en selectie; zie ook de themapagina Waardering en selectie voor de procedurestappen."}),
      H("Modelselectiebesluiten van de rijksarchivaris",{u:U.selectie,d:"Hergebruik een model in plaats van zelf te ontwerpen (Besluit 3.2)."}),
      H("Handreiking Externe deskundige",{u:U.catalogus,d:"Voor de verplichte onafhankelijke inbreng (Besluit 3.5), naast de archivaris en de verantwoordelijke voor de informatiehuishouding."}),
      H("Categorie en bewaartermijn als metadata koppelen",{d:"Leg per document de categorie uit het selectiebesluit vast (Regeling 2.5 sub j/k); zonder die koppeling is een selectiebesluit een dode letter."})
    ]},
  { id:"vernietiging", title:"Vernietiging",
    doel:"Documenten na het verstrijken van de bewaartermijn gecontroleerd en aantoonbaar vernietigen.",
    change:{s:"gelijk",t:"Vernietiging na verstrijken van de bewaartermijn bestond al onder de oude wet. Nieuw/aangescherpt: de verplichte procesbeschrijving en verklaring van vernietiging (Besluit 4.1, Regeling 4.1–4.2)."},
    w:["rijk","decentraal","gr"], du:"Vernietigen",
    wet:[
      I("5.3 lid 1","Zorg dat documenten waarvan de bewaartermijn is verstreken, worden vernietigd, tenzij zij op grond van een toegestane afwijking (Wet 5.1 lid 5 sub c) van vernietiging zijn uitgezonderd."),
      I("5.1 lid 4","Het selectiebesluit kan bepalen dat categorieën tijdelijk te bewaren documenten op elk moment vernietigd mogen worden."),
      I("5.3 lid 3","In buitengewone omstandigheden kan de Minister-President afwijkende regels stellen.")
    ],
    besluit:[
      I("4.1 lid 1, 2","Vernietig volgens een vastgestelde procesbeschrijving en maak een verklaring van vernietiging."),
      I("4.1 lid 3","Procesbeschrijving en verklaring zijn niet nodig voor categorieën die op elk moment vernietigd mogen worden."),
      I("4.2 lid 2","Bij vernietiging in het kader van vervanging geldt 4.1 niet.")
    ],
    regeling:[
      I("4.1","Procesbeschrijving vernietiging bevat:",{d:["relatie met overzicht informatiehuishouding, beheerkeuzes en selectiebesluiten;","beleid voor de wijze en het effect van vernietiging;","rollen en verantwoordelijkheden;","hoe u zich ervan vergewist dat de documenten vernietigd zijn."]}),
      I("4.2","Verklaring van vernietiging bevat: omschrijving van de documenten, het systeem, de artikelen van het selectiebesluit en de wijze van vernietiging.")
    ],
    tools:[
      H("Handreiking Digitaal vernietigen",{u:U.vernietigen,d:"Standaardwerk voor het vernietigingsproces: handvatten, keuzen en maatregelen (gebaseerd op AVG, BIO, MoReq2010, ISO 16175 en ISO 15489)."}),
      H("Retentie- en disposalfunctionaliteit in zaak- en documentsystemen",{d:"Richt vernietiging in als continu proces; log vernietigingsacties en genereer daaruit de verklaring van vernietiging (Regeling 4.2)."}),
      H("DUTO-proces Vernietigen (module 5)",{u:U.duto,d:"Modeleisen voor de inrichting van het vernietigingsproces."}),
      H("Ruimte 'op elk moment vernietigbaar' uitwerken in de beheerregels",{d:"Leg uit hoe medewerkers verantwoord omgaan met categorieën die op elk moment vernietigd mogen worden (Besluit 4.1 lid 3)."})
    ]},
  { id:"vervreemding", title:"Vervreemding en invordering",
    doel:"Eigendomsoverdracht van documenten en het terughalen van documenten die bij derden berusten.",
    change:{s:"gelijk",t:"Machtiging voor vervreemding en de plicht om documenten af te staan voor reproductie (invordering) bestonden al onder de oude wet (o.a. de oude artikel-46-regelingen)."},
    wet:[
      I("4.4","Vervreemden mag alleen na machtiging van de Minister, tenzij een wettelijk voorschrift het vereist."),
      I("4.5, 10.6","Wie documenten onder zich heeft, moet ze binnen vier weken afstaan voor reproductie. U geeft ze binnen vier weken terug. Bij weigering kan een last onder bestuursdwang worden opgelegd."),
      I("12.10","Overgangsrecht: oude artikel-46-regelingen (in bewaring gegeven archiefbescheiden) gelden als vervreemd aan de gemeente.",{w:["decentraal"]})
    ],
    besluit:[ I("4.3","Betrek bij de voorbereiding van een vervreemdingsbesluit de verantwoordelijke voor informatiehuishouding en de archivaris (niet bij overgang tussen archiefdiensten).") ],
    regeling:[],
    tools:[
      H("Beslissings- en adviestraject documenteren",{d:"Betrek bij de voorbereiding van een vervreemdingsbesluit de archivaris en de verantwoordelijke voor de informatiehuishouding (Besluit 4.3) en documenteer de onderbouwing."}),
      H("Registratie van 'documenten bij derden'",{u:U.overzicht,d:"Maakt de invorderingsplicht handhaafbaar (Wet 4.5, 10.6): documenten bij opslag, IT-leveranciers of externe bewaring."}),
      H("Standaardclausules in contracten",{d:"Eigendoms- en teruggeefregels bij overheveling naar private partijen: de goedkoopste passende maatregel."})
    ],
    noteR:NONE_R },
  { id:"overbrenging", title:"Overbrenging naar de archiefdienst",
    doel:"Blijvend te bewaren documenten die ouder zijn dan tien jaar overbrengen naar het Nationaal Archief of de decentrale archiefdienst.",
    change:{s:"gewijzigd",t:"Overbrenging van blijvend te bewaren documenten bestond al, maar de termijn wordt verkort van twintig naar tien jaar (oud art. 7; de oude uitloop van tien jaar vervalt). Nieuw: de gezamenlijke verklaring van overbrenging en digitale eisen (o.a. versleuteling verwijderen)."},
    w:["rijk","decentraal","gr"], du:"Ter beschikking stellen",
    wet:[
      I("5.4 lid 1, 2","Breng blijvend te bewaren documenten ouder dan tien jaar over (ook documenten die via een afwijking blijvend bewaard worden)."),
      I("5.5 lid 1","Eerder overbrengen kan in overeenstemming met de archivaris of rijksarchivaris."),
      I("12.3 lid 1","Overgangsrecht: documenten van vóór inwerkingtreding hoeven pas bij twintig jaar over.",{n:"De eerste overbrengingen onder de nieuwe tienjaarstermijn volgen vanaf 1 januari 2037. Tot 2047 lopen beide termijnen nog door elkaar (zie de kennisbankpagina Overbrenging van het Nationaal Archief)."}),
      I("5.4 lid 3","Nadere regels in de AMvB.")
    ],
    besluit:[
      I("5.1 lid 1, 2","Overleg tijdig met de archivaris en maak samen een verklaring van overbrenging met een specificatie van de documenten en, bij openbaarheidsbeperking (Wet 7.2), het besluit daartoe."),
      I("5.1 lid 3","Overbrenging zonder fysieke verplaatsing: toestemming van de archivaris, gezamenlijke maatregelen zodat de archivaris zijn taken kan vervullen, en vastlegging daarvan in de verklaring.",{k:"dig"})
    ],
    regeling:[
      I("2.13","Verwijder bij overbrenging van digitale documenten eventuele versleuteling.",{k:"dig"})
    ],
    tools:[
      H("Handreiking Digitaal overbrengen in de praktijk",{u:U.overbrengen,d:"Voorbereiding, uitvoering en afronding van een digitale overbrenging."}),
      H("Aansluiten op het e-Depot (rijksorganen)",{u:U.edepotEerste,d:"Het e-Depot van het Nationaal Archief is CoreTrustSeal-gecertificeerd en garandeert bewaring, vindbaarheid en hergebruik."}),
      H("Acceptatievoorwaarden van de archiefdienst overnemen en een proefoverbrenging plannen",{d:"Neem formaten, MDTO-metadata, openbaarheidsgegevens en fixity-eisen op in de beheerregels en oefen ruim vóór de overbrenging."}),
      H("SIP volgens de aanlevervoorwaarden van de archiefdienst",{u:U.naVoorwaarden,d:"Bij het Nationaal Archief: export als SIP conform de MDTO-standaard (zie ook de SIP-specificatie). Checksums/manifesten voor integriteit."}),
      H("Grootste gemene deler aanlevervoorwaarden Nederlandse archiefdiensten",{u:U.nha,d:"Wat bij het Nationaal Archief, RHC's en gemeentelijke archiefdiensten gangbaar is: SIP met MDTO-metadata (incidenteel nog TMLO (Toepassingsmodel Metadata Lokale Overheden)), duurzame/open bestandsformaten, checksums (pakbon) voor integriteitscontrole, geen versleuteling en openbaarheidsgegevens als metadata. Check altijd de actuele aanlever-/aansluitvoorwaarden van uw eigen archiefdienst."}),
      H("E-ARK SIP/CSIP als overdrachtsformaat",{u:U.earksip,d:"Europese specificatie voor Submission Information Packages, aansluitend bij de MDTO-SIP; inclusief referentie-implementatie earkweb."}),
      H("Termijnbewaking per object",{u:U.overbrengingOp,d:"De tienjaarstermijn telt per document vanaf creatie of ontvangst, niet per dossier."}),
      H("Meerjarenplannen 2026–2030 van VNG, IPO en UvW",{u:U.uvwMJP,d:"De koepels bundelen hun implementatieaanpak voor de Archiefwet 2026; zie ook het blok 'Instrumentarium en hulpmiddelen' bovenaan."})
    ],
    noteR:"Metadata over openbaarheid bij overbrenging (Regeling 2.12): zie 'Openbaarheid bij overbrenging'." },
  { id:"uitstel", title:"Uitstel en ontheffing van overbrenging",
    doel:"Overbrenging opschorten bij veelvuldig gebruik of in uitzonderlijke gevallen geheel van overbrenging ontheven worden.",
    change:{s:"gewijzigd",t:"Opschorting bij veelvuldig gebruik (5.5) bestond al onder de oude wet maar is aangepast; de ontheffing van de overbrengingsplicht (5.6) is nieuw."},
    du:"Ter beschikking stellen",
    wet:[
      I("5.5 lid 2 – 4","Opschorten bij veelvuldig gebruik kan met machtiging van gedeputeerde staten of de Minister, telkens voor maximaal tien jaar (verlengbaar).",{n:"De ingangsdatum van dit artikel kan bij het inwerkingtredings-KB afwijken van 1 januari 2027 (art. 12.14)."}),
      I("5.6","Ontheffing door de rijksarchivaris alleen bij een omvangrijke samenhangende verzameling, ernstige afbreuk bij overbrenging en gelijkwaardige borging van bewaring en beschikbaarstelling.",{d:["Documenten zijn kosteloos te raadplegen. Overzicht en raadpleeginformatie zijn openbaar.","Intrekking door de rijksarchivaris als de redenen vervallen of de voorzieningen tekortschieten."]}),
      I("12.3 lid 2","Bestaande machtigingen blijven gelden als machtigingen op grond van 5.5 lid 2.")
    ],
    besluit:[
      I("5.2","Machtiging tot opschorting aanvragen met omschrijving, periode, motivering van veelvuldig gebruik en advies van de archivaris. Het besluit wordt actief openbaar gemaakt."),
      I("5.3","Ontheffingsaanvraag bevat o.a. documenten, systeem of ruimte, verzameling, naleving van hoofdstuk 2 (Duurzame toegankelijkheid), overzicht en dienstverlening voor raadpleging en redenen; bij een decentrale archiefdienst met advies van de archivaris; besluit wordt actief openbaar gemaakt."),
      I("2.5 lid 2","Grondslag voor regels over de 'adequate voorziening' bij ontheffing.")
    ],
    regeling:[],
    tools:[
      H("Gebruiks- en raadpleegstatistieken bijhouden",{d:"Logging van veelvuldig gebruik is de bron voor de motivering in de aanvraag tot opschorting (Besluit 5.2)."}),
      H("Evaluatiecyclus uit de beheerregels als onderbouwing",{u:U.beheerregels,d:"De ontheffingsaanvraag (Besluit 5.3) vraagt een beschrijving van de periodieke evaluatie van de maatregelen; die genereert u uit de beheerregels."})
    ],
    noteR:"Geen invulling van de 'adequate voorziening'. Let op: Regeling 5.2 heet ook 'Ontheffing' maar gaat over depoteisen." }
 ]},

 { name:"Openbaarheid en toegang", topics:[
  { id:"openbaarheid", title:"Openbaarheid bij overbrenging",
    doel:"Bepalen of documenten bij overbrenging beperkt openbaar worden en dit onderbouwen en vastleggen.",
    change:{s:"gewijzigd",t:"Openbaar na overbrenging en beperkingsgronden bestonden al. Nieuw: de gronden zijn afgestemd op de Woo, met termijnen van 75/110/20 jaar en het vastleggen van status, grond en einddatum als metadata (Regeling 2.12)."},
    du:"Ter beschikking stellen",
    wet:[
      I("1.2","Wet open overheid en Wet hergebruik zijn niet van toepassing op overgebrachte documenten, tenzij de Archiefwet anders bepaalt. Geheimhoudingsplichten staan overbrenging niet in de weg (met voorbehoud van 7.2). Bijzondere persoonsgegevens mogen verwerkt worden bij vervanging, overbrenging en beheer."),
      I("7.1 lid 1","Na overbrenging zijn documenten openbaar."),
      I("7.2","Beperk de openbaarheid bij overbrenging bij:",{d:["absolute gronden: eenheid van de Kroon, veiligheid van de Staat, vertrouwelijke bedrijfsgegevens, bijzondere en strafrechtelijke persoonsgegevens, identificatienummers;","relatieve gronden (belangenafweging): internationale betrekkingen, financiële belangen, opsporing, toezicht, privacy, concurrentiegevoelige gegevens, beveiliging, goed functioneren van de overheid;","milieu-informatie met aparte regels, emissies zijn uitgezonderd."],n:"Voor de nieuwe beperkingsgronden kan het inwerkingtredings-KB een afwijkende ingangsdatum vaststellen (art. 12.14)."}),
      I("7.3","Vraag advies aan de archivaris en motiveer de beperking per grond, ondanks het tijdsverloop."),
      I("7.4","Beperkingstermijnen: 75 jaar (Kroon, Staat, internationale betrekkingen), 110 jaar (bijzondere persoonsgegevens, identificatienummers, privacy), anders 20 jaar. Langer kan met instemming van gedeputeerde staten of de Minister."),
      I("7.5, 7.6","Na overbrenging nog beperken kan alleen als openbaarheid onaanvaardbaar is. Opheffen kan als de gronden vervallen (bij Minister gehoord of in overeenstemming met het overbrengende orgaan)."),
      I("12.8","Beperkingen op grond van de Archiefwet 1995 blijven gelden.")
    ],
    besluit:[ I("5.1 lid 2 sub b","Het besluit tot openbaarheidsbeperking maakt deel uit van de verklaring van overbrenging.") ],
    regeling:[
      I("2.12","Leg uiterlijk bij overbrenging vast: status (openbaar of beperkt openbaar), duur, einddatum en grond van de beperking (Wet 7.2).",{n:"Niet van toepassing op documenten van vóór inwerkingtreding (Regeling 8.2 lid 1)."}),
      I("2.4 sub b","Zorg dat er bij persoonsgegevens, vertrouwelijke informatie of beperkingen een gedeeltelijke weergave of export mogelijk is.",{k:"dig"})
    ],
    tools:[
      H("Woo-afwegingsinstrumentarium hergebruiken",{u:U.openbaarheid,d:"De beperkingsgronden zijn Woo-conform; koppel het bestaande kader (o.a. de brochure 'Open tenzij') aan de archiefmetadata."}),
      H("Openbaarheidsstatus als verplicht metagegevensveld",{d:"Status, grond, duur en einddatum per document (Regeling 2.12); maakt de verklaring van overbrenging en inzageverzoeken machinaal verwerkbaar."}),
      H("Handreiking Openbaarheid bij en na overbrenging",{u:U.catalogus,d:"In ontwikkeling; houd de catalogus kennisproducten in de gaten."})
    ]},
  { id:"toegang", title:"Toegang tot overgebracht archief",
    doel:"Verzoeken om raadpleging, informatie in andere vorm en uitlening afhandelen.",
    change:{s:"gelijk",t:"Kosteloos raadplegen, belangenafweging bij beperkt openbaar archief en uitlening bestonden al. Nieuw: specifieke regels voor bijzondere en strafrechtelijke persoonsgegevens en identificatienummers (Besluit 6.1–6.2)."},
    du:"Ter beschikking stellen",
    wet:[
      I("7.1 lid 2 – 5","Raadplegen is kosteloos. Voor kopieën kan een vergoeding gevraagd worden volgens regels van het verantwoordelijke orgaan. De archivaris kan uit eigen beweging publiceren.",{w:["archiefdienst"]}),
      I("8.2","Openbare documenten: toegang op verzoek, tenzij de toestand of veiligheid zich verzet; bij bedreiging kopieën; hergebruik volgens de Wet hergebruik.",{w:["archiefdienst"]}),
      I("8.3","Beperkt openbare documenten: toegang na belangenafweging, eventueel met voorwaarden. Bij de gronden Kroon, Staat en internationale betrekkingen beslist het overbrengende orgaan.",{w:["archiefdienst"]}),
      I("8.4","Als toegang niet mogelijk is: informatie in andere vorm, mits geen onevenredige inspanning.",{w:["archiefdienst"]}),
      I("8.5, 8.6","De archivaris leent overgebrachte documenten voor een bepaalde tijd uit: aan een verzoeker (8.5) en in het bijzonder aan het overbrengende overheidsorgaan dat de documenten heeft overgebracht (8.6), mits deskundig beheer en veilige bewaring naar zijn oordeel voldoende zijn gewaarborgd.",{d:["Voor beperkt openbare documenten gelden de voorwaarden van artikel 8.3 (schriftelijk verzoek, belangenafweging).","Weigert de archivaris uitlening wegens de toestand van de documenten, dan stelt hij zo mogelijk kopieën ter beschikking (8.6 lid 2).","De kosten van uitlening kunnen volgens regels van het verantwoordelijke overheidsorgaan bij de verzoeker in rekening worden gebracht (8.5 lid 3)."]}),
      I("8.7","Verzoek om toegang of uitlening: bij openbaar archief mondeling of schriftelijk; bij beperkt openbaar archief of uitlening schriftelijk. De archivaris kan nadere specificatie vragen.")
    ],
    besluit:[
      I("6.1","Toegang tot documenten met bijzondere of strafrechtelijke persoonsgegevens of identificatienummers: verzoeker toont een uitzonderingsgrond aan (overlijdensbewijs, toestemming of motivering); bij onderzoek of statistiek ook de waarborgen voor gegevensbescherming.",{w:["archiefdienst"]}),
      I("6.2","Toegang tot beperkt openbare documenten met persoonsgegevens is in beginsel zonder kopieën.",{w:["archiefdienst"],d:["Kopieën zijn toegestaan als ze nodig zijn voor een rechtsvordering of voor onderzoek naar genocide, misdrijven tegen de menselijkheid of oorlogsmisdrijven.","De archivaris kan ook kopieën verstrekken als het niet verstrekken ervan tot een onbillijkheid van overwegende aard zou leiden."]})
    ],
    regeling:[],
    tools:[
      H("Handreiking Toegang tot digitaal archief na overbrenging",{u:U.catalogus,d:"Voor archiefdiensten: verzoekafhandeling na overbrenging."}),
      H("Zaaksysteem met beslistermen en logging",{d:"Bouw de bewijsstukken uit Besluit 6.1 (overlijdensbewijs, toestemming, motivering) in als checklist bij beperkt openbare documenten met persoonsgegevens."}),
      H("Redactiewerkplekken voor gedeeltelijke export",{d:"Ondersteun 'informatie in andere vorm' (Wet 8.4) met een gefilterde weergave of export (Regeling 2.4 sub b)."})
    ],
    noteR:NONE_R },
  { id:"archiefdiensten", title:"Archiefdiensten, archivarissen en beheer na overbrenging",
    doel:"Inrichten van de archiefdienst en de archivaris, en regels voor beheer van overgebrachte documenten.",
    change:{s:"gelijk",t:"Archiefdiensten en de archivaris bestonden al onder de oude wet. Nieuw: de diploma-eisen in een apart besluit en het overgangsrecht (organen zonder archivaris wijzen er binnen twee jaar een aan)."},
    du:"Bewaren",
    wet:[
      I("6.1","Het Nationaal Archief bewaart en stelt beschikbaar. De rijksarchivaris is verantwoordelijk voor beheer.",{w:["archiefdienst"]}),
      I("6.2","Provincie, gemeente en waterschap voorzien in een decentrale archiefdienst met een archivaris.",{w:["decentraal","archiefdienst"]}),
      I("6.3","Aanwijzing en kwalificaties van (rijks)archivaris: diploma en professionele kwaliteiten. Aanwijzing eindigt als de functie vervalt.",{w:["rijk","decentraal","archiefdienst"]}),
      I("9.1, 9.2","De Minister vervreemdt of vernietigt overgebrachte documenten alleen na machtiging van het overbrengende orgaan.",{w:["archiefdienst"]}),
      I("9.3, 9.4","De archivaris kan afschriften van authentieke akten afgeven. Een archiefdienst kan bescheiden van particulieren in bewaring of blijvende bewaring nemen (met beperking van openbaarheid mogelijk)."),
      I("12.4 – 12.7","Overgangsrecht: bestaande archiefbewaarplaatsen en archivarissen blijven bestaan. Provincies, gemeenten en waterschappen zonder archivaris wijzen er binnen twee jaar een aan.",{w:["decentraal","archiefdienst"],dt:"2029-01-01",n:"Aanwijzen van een archivaris uiterlijk 1 januari 2029."})
    ],
    besluit:[], regeling:[], diploma:[
      I("2 lid 1","Archivistiek A en B gelden als diploma. De Minister wijst de opleidingen of cursus aan.",{w:["rijk","decentraal","archiefdienst"],d:["Archivistiek A: een aangewezen masteropleiding.","Archivistiek B: een aangewezen bacheloropleiding, associate degree of cursus."]}),
      I("2 lid 2, 3","Een ander hbo- of wo-diploma kan ook voldoen: minimaal twee relevante onderwijseenheden van elk ten minste vijf studiepunten en motivering van de geschiktheid in het aanwijzingsbesluit.",{w:["rijk","decentraal","archiefdienst"],d:["De onderwijseenheden betreffen archivistiek, collectiebeheer, informatiebeheer (digitaal of anders), informatie- of data-architectuur, informatie- of datamanagement, informatierecht of toezicht op informatiebeheer."]}),
      I("2 lid 4 – 6","De Minister kan opleidingen of cursussen aanwijzen voor de diploma’s Archivistiek A en B.",{w:["rijk","decentraal","archiefdienst"]}),
      I("3","Overgangsrecht voor aangewezen opleidingen en oudere diploma’s.",{w:["rijk","decentraal","archiefdienst"],d:["Opleidingen die onder het Archiefbesluit 1995 waren aangewezen, blijven aangewezen.","Voor relevante diploma’s van vóór 1 augustus 1993 (wo) of 1 september 1993 (hbo) geldt de eis van twee examenonderdelen in plaats van twee onderwijseenheden van vijf studiepunten."]}),
      I("4","Inwerkingtreding op een bij koninklijk besluit te bepalen tijdstip.",{w:["rijk","decentraal","archiefdienst"]})
    ],
    tools:[
      H("Beleidskader aanwijzen archiefdienst en archivaris",{u:U.thema,d:"Inclusief diploma-eis, Regionaal Historische Centra en overgangsregels: organen zonder archivaris wijzen er binnen twee jaar een aan (Wet 12.4–12.7)."}),
      H("OAIS (NEN-ISO 14721) met CoreTrustSeal als maatstaf",{u:U.edepot,d:"Praktijkstandaard voor het beheer van overgebracht digitaal archief, zoals het NA e-Depot die hanteert."}),
      H("NORA e-depot en ED3 (Eisen Duurzaam Digitaal Depot) voor een eigen e-depot",{u:U.noraEdepot,d:"NORA (Nederlandse Overheids Referentie Architectuur) beschrijft e-depots; ED3 is een toetsingskader voor de beheersomgeving. Zie ook de GEMMA (Gemeentelijke Model Architectuur)-handreiking 'In gebruik nemen e-depot' voor decentrale overheden."}),
      H("AtoM (Access to Memory)",{u:U.atom,d:"Open source voor archiefbeschrijving en online toegang."}),
      H("Aangewezen opleidingen diploma Archivistiek A/B: UvA (wo), HvA en Reinwardt Academie (hbo)",{u:U.naDiploma,d:"Zie ook de groep 'Opleiding en vakbekwaamheid' in het blok 'Instrumentarium en hulpmiddelen' bovenaan."})
    ] }
 ]},

 { name:"Fysieke bewaring", topics:[
  { id:"depot-gebouw", title:"Depot: ligging, brandveiligheid en beveiliging",
    doel:"Het gebouw en de inrichting van fysieke depots waarin blijvend te bewaren documenten liggen.",
    change:{s:"gewijzigd",t:"Depotvoorschriften bestonden al in de oude regeling, maar zijn nu concreter en strenger (gevolgklasse CC4, inbraaksignalering NEN 5089, brandwerendheid 60/120 minuten), met een ontheffingsmogelijkheid voor bestaande depots."},
    du:"Bewaren",
    wet:[ I("4.1 lid 1","Passende maatregelen voor fysieke documenten.",{k:"fys"}) ],
    besluit:[ I("2.5 lid 1 sub i","Grondslag voor regels over fysieke ruimten.",{k:"fys"}) ],
    regeling:[
      I("5.1","Een voorschrift hoeft niet gevolgd te worden als op andere wijze minimaal dezelfde veiligheid, bescherming tegen water, klimaat en hygiëne wordt geboden.",{k:"fys"}),
      I("5.2","Ontheffing door de minister voor depots van vóór de inwerkingtreding waaraan redelijkerwijs niet kan worden voldaan.",{k:"fys",n:"Bestaande ontheffingen blijven gelden (Regeling 8.2 lid 2)."}),
      I("5.3","Beperk risico's van brand, overstroming, vocht en verzakking bij ligging en bouw. Heb een actueel beheers- en calamiteitenplan.",{k:"fys"}),
      I("5.4 – 5.6","Brandveiligheid: voorzieningen voor vertragen en doven, geen onnodig brandgevaarlijke materialen, brand- en rookwerende scheidingen (60 minuten), zelfsluitende deuren, brandmelding met doormelding, blusmiddelen (geen open sprinklers of poederblussers).",{k:"fys"}),
      I("5.7, 5.8","Watermelders met doormelding; kabels en leidingen alleen als opbouw.",{k:"fys"}),
      I("5.9","Constructie: gevolgklasse CC4, waterdicht, bestand tegen natuurgeweld, vloerbelasting berekend, geen ramen.",{k:"fys"}),
      I("5.10","Beveiliging tegen inbraak: signalering volgens NEN 5089 met SKG-keurmerk klasse 3 (keurmerkinstituut SKG-IKOB) en weerstandsklasse 4.",{k:"fys"}),
      I("5.16","Aanvullend voor depots met overgebrachte documenten: klasse A1, 120 minuten brandwerendheid, R200 rookdoorgang, tweemelder-afhankelijke sprinklers, extra blustoestellen en communicatiemiddel.",{k:"fys",w:["archiefdienst"]})
    ],
    tools:[
      H("Depotaudit / gap-analyse tegen de Regeling",{d:"Toets het depot aan Regeling hoofdstuk 5. Voor bestaande depots: afweging tussen aanpassen en ontheffing aanvragen (Regeling 5.2); bij de equivalentieclausule (Regeling 5.1) de onderbouwing documenteren."}),
      H("Handreiking Behoud en beheer fysiek archief",{u:U.fysiek,d:"Modules Klimaatbeheer, Depothygiëne, Collectiebehoudsplan en Collectiehulpverleningsplan als praktische vertaling van de normeisen."}),
      H("Beheers- en calamiteitenplan opstellen en oefenen",{d:"Expliciet vereist (Regeling 5.3)."}),
      H("Meldplicht (informatie)incidenten binnen 72 uur inrichten",{u:U.toezicht,d:"Koppel de meldplicht (Wet 10.2, Regeling 7.1) aan de bestaande incidentregistratie (BIO/Woo) en calamiteitendraaiboeken; het meldformulier is in ontwikkeling."})
    ]},
  { id:"depot-klimaat", title:"Depot: klimaat, inrichting en hygiëne",
    doel:"Bewaaromstandigheden die verval van fysieke documenten tegengaan.",
    change:{s:"gewijzigd",t:"Klimaatnormen bestonden al (oude regeling: 50% RV (relatieve luchtvochtigheid) ±5%, 18 °C ±2 °C). Nieuw zijn de huidige waarden (35–60% RV, 13–22 °C met jaargemiddelden), continue monitoring en de protocollen voor depothygiëne."},
    du:"Bewaren",
    wet:[ I("4.1 lid 1","Passende maatregelen voor fysieke documenten.",{k:"fys"}) ],
    besluit:[ I("2.1 lid 1 sub f","Geen aanmerkelijke fysieke achteruitgang van documenten.",{k:"fys"}) ],
    regeling:[
      I("5.11 – 5.13","Alleen documenten in het depot, in stellingen of kasten; geen onnodig licht; schadelijke stoffen weren; magnetische dragers afgeschermd; opstelling met luchtcirculatie en minimale afstanden (20 cm van muur, paden 70 cm).",{k:"fys"}),
      I("5.14","Klimaat: 35 tot 60% RV en 13 tot 22 °C, jaargemiddelden maximaal 50% en 18 °C, beperkte schommelingen, dagelijkse luchtzuivering, sensoren, klimaatevaluatieprotocol en logboek.",{k:"fys"}),
      I("5.15","Heb een protocol depothygiëne (schoonmaak en geïntegreerde bestrijding van plaagdieren en schimmels), minstens jaarlijks geëvalueerd.",{k:"fys"}),
      I("5.17","Heb een afgezonderde quarantaineruimte of -kast met eigen luchtbehandeling.",{k:"fys"}),
      I("5.18","Afwijkende klimaatwaarden voor kleurenprocedés, cellulosenitraat en -acetaat, met acclimatisering bij verplaatsing.",{k:"fys"})
    ],
    tools:[
      H("Module Klimaatbeheer met continue monitoring",{u:U.fysiek,d:"Dataloggers en trendrapportage tegen de normwaarden (Regeling 5.14)."}),
      H("Module Depothygiëne en protocollen depothygiëne",{u:U.depothygiene,d:"Schoonmaak, schimmelcontrole en geïntegreerde ongediertebestrijding; het protocol minstens jaarlijks evalueren (Regeling 5.15)."}),
      H("Module Collectiebehoudsplan",{u:U.cbp,d:"Schade-inventarisatie en collectiewaardering om prioriteiten te stellen tussen conservering en restauratie."}),
      H("Module Collectiehulpverleningsplan",{u:U.fysiek,d:"Calamiteitenplan voor het depot, met draagvlak in de organisatie."}),
      H("RCE — binnenklimaat en klimaatrisico's voor depotbeheer",{u:U.rceKlimaat,d:"Praktische informatie van de Rijksdienst voor het Cultureel Erfgoed over binnenklimaat in depots, als aanvulling op de Module Klimaatbeheer."})
    ]},
  { id:"materialen", title:"Verpakkingen en materialen",
    doel:"Duurzame verpakkingen, papier en schrijfmaterialen voor blijvend te bewaren fysieke documenten.",
    change:{s:"gelijk",t:"Kwaliteitseisen voor verpakkingen, papier (NEN 2728 of NEN-EN-ISO 9706) en inkt/toner bestonden al in de oude regeling (de ICN-kwaliteitseisen van het Instituut Collectie Nederland)."},
    du:"Bewaren",
    wet:[ I("4.1 lid 1","Passende maatregelen voor fysieke documenten.",{k:"fys"}) ],
    besluit:[ I("2.5 lid 1 sub j","Grondslag voor regels over materialen.",{k:"fys"}) ],
    regeling:[
      I("6.1 – 6.4","Adequate verpakkingen die beschermen en zelf geen schade veroorzaken; omslagen, dozen en etiketten volgens de ICN-kwaliteitseisen.",{k:"fys"}),
      I("6.5, 6.6","Geen schadelijke stoffen (metaal, lignine, weekmakers, PVC-copolymeren) in contact met documenten; reactieve documenten apart verpakken.",{k:"fys"}),
      I("6.7","Nieuw te vormen blijvende documenten van duurzaam materiaal. Vervang bestaande niet-verouderingsbestendige documenten zoveel mogelijk.",{k:"fys"}),
      I("6.8","Papier volgens NEN 2728 of NEN-EN-ISO 9706; inkt en toner watervast, lichtecht en niet doordrukkend.",{k:"fys"})
    ],
    tools:[
      H("ICN-kwaliteitseisen als norm",{d:"Regeling hoofdstuk 6 is zelf de norm: verpakkingen, omslagen, dozen en etiketten; papier volgens NEN 2728 of NEN-EN-ISO 9706; watervaste, lichtechte inkt en toner."}),
      H("Catalogus kennisproducten",{u:U.catalogus,d:"Verdiepende handreikingen voor behoud en beheer van fysiek archief."})
    ]}
 ]},

 { name:"Toezicht en overgang", topics:[
  { id:"toezicht", title:"Toezicht, meldplicht en handhaving",
    doel:"Meldingen van incidenten, toezicht door Inspectie of archivaris en de gevolgen bij niet-naleving.",
    change:{s:"gewijzigd",t:"Toezicht door de Inspectie en de archivaris bestond al. Nieuw: de meldplicht voor (informatie)incidenten binnen 72 uur, de bestuurlijke boete en toezicht dat zich ook uitstrekt tot overgebracht archief."},
    wet:[
      I("10.1","Rijk, andere publiekrechtelijke en privaatrechtelijke organen: toezicht door de hoofdinspecteur en inspecteurs van de Minister, met jaarverslag aan de Staten-Generaal.",{w:["rijk","toezichthouder"],n:"De hoofdinspecteur moet bij aanwijzing eveneens voldoen aan de eisen van Wet 6.3 lid 4: een diploma en de juiste professionele kwaliteiten (Wet 10.1 lid 2)."}),
      I("10.2","Meld onverwijld aan de hoofdinspecteur: beschadiging, verlies of ontoegankelijkheid (of dreiging) van documenten met aanmerkelijk belang, en calamiteiten met veel documenten.",{w:["rijk","toezichthouder"]}),
      I("10.3","Bij niet-naleving kan de Minister een aanwijzing, last onder bestuursdwang of bestuurlijke boete (maximaal vijfde categorie) opleggen, na overleg.",{w:["rijk","toezichthouder"]}),
      I("10.4","Decentraal toezicht door de archivaris, die rechtstreeks rapporteert. De volksvertegenwoordiging stelt een verordening vast met minstens tweejaarlijkse verslaglegging.",{w:["decentraal","archiefdienst","toezichthouder"]}),
      I("10.5","Gemeenschappelijke regelingen: toezicht door de archivaris van de aangewezen decentrale archiefdienst, of de Inspectie als de Minister verantwoordelijk is.",{w:["gr","toezichthouder"]}),
      I("12.9","Bestaande hoofdinspecteur en inspecteurs blijven aangewezen.",{w:["rijk","toezichthouder"]})
    ],
    besluit:[], regeling:[
      I("7.1","Meld een incident binnen 72 uur na ontdekking aan de hoofdinspecteur met contactgegevens, omschrijving, aanmerkelijk belang, schade, genomen maatregelen en omvang.",{w:["rijk","toezichthouder"],d:["'Incident' is gedefinieerd in Regeling 1.1 als een situatie of calamiteit uit Wet 10.2 lid 1 sub a en b."]})
    ],
    tools:[
      H("Toetsingskader Archiefwet 2026 — Inspectie IOE (live sinds 23 november 2026)",{u:U.tkAw,d:"Maakt de open norm 'passend' concreet en toetsbaar: per onderwerp de geldende voorschriften plus de criteria/indicatoren waarmee de Inspectie naleving beoordeelt. Stem uw eigen toetsing hierop af; ook open source beschikbaar (RijksICTGilde op GitHub)."}),
      H("72-uursmeldplicht koppelen aan bestaande processen",{u:U.toezicht,d:"Meld (informatie)incidenten binnen 72 uur (Wet 10.2, Regeling 7.1) via de bestaande incidentregistratie en calamiteitenplannen, zodat de 72-uursklok geen ad-hocproces wordt."}),
      H("Interbestuurlijk toezicht organiseren",{d:"Decentraal houdt de eigen archivaris rechtstreeks toezicht (Wet 10.4); de Inspectie houdt interbestuurlijk toezicht."}),
      H("Meldpagina meldplicht informatie-incidenten (Inspectie Overheidsinformatie en Erfgoed (IOE))",{u:U.ioeMeld,d:"Officiële pagina van de Inspectie Overheidsinformatie en Erfgoed over de meldplicht die vanaf 1 januari 2027 geldt."})
    ],
    noteB:"Het Besluit bevat geen aparte bepalingen over toezicht en melding." },
  { id:"overgang", title:"Evaluatie, overgangsrecht en inwerkingtreding",
    doel:"Wanneer gelden de regels, welke overgangsbepalingen zijn er en hoe wordt de regelgeving geëvalueerd.",
    change:{s:"nieuw",t:"De evaluatie van de wet binnen vijf en vijftien jaar en het overgangsrecht (o.a. oude selectielijsten, openbaarheidsbeperkingen en de twintigjaarstermijn voor bestaand archief) zijn nieuw."},
    wet:[
      I("12.11","Evaluatie binnen vijf en binnen vijftien jaar na inwerkingtreding."),
      I("12.12 – 12.14","De Archiefwet 1995 wordt ingetrokken. Inwerkingtreding bij koninklijk besluit, per artikel verschillend.",{n:"Voorzien: 1 januari 2027."}),
      I("12.1 – 12.10","Overgangsbepalingen: zie bij de betreffende onderwerpen (gemeenschappelijke regelingen, selectielijsten, overbrenging, archiefdiensten, openbaarheid)."),
    ],
    besluit:[
      I("7.1","Evaluatie binnen vijf en binnen vijftien jaar."),
      I("7.2","Overgangsrecht:",{d:["Bestaande selectielijsten hebben maximaal twintig jaar toepassingsperiode vanaf hun inwerkingtreding.","Een op grond van artikel 3a van het Archiefbesluit 1995 benoemde deskundige geldt na inwerkingtreding als benoemd op grond van artikel 3.6.","Artikel 9, eerste lid, van het Archiefbesluit 1995 blijft gelden voor documenten van vóór de inwerkingtreding van dit besluit."]}),
      I("7.3 – 7.5","Het Archiefbesluit 1995 wordt ingetrokken. Inwerkingtreding volgt bij koninklijk besluit en kan per artikel verschillen. De citeertitel is Archiefbesluit met het jaartal van het Staatsblad waarin het wordt geplaatst.")
    ],
    regeling:[
      I("8.1","De minister evalueert mee met Wet en Besluit en daarnaast elke vijf jaar."),
      I("8.2","Regeling 2.12 geldt niet voor oude documenten. Bestaande depotontheffingen blijven gelden."),
      I("8.3, 8.4","Intrekking van de Archiefregeling. Inwerkingtreding gelijk met het Besluit, behalve 3.2 en 3.3 (migratieplan en -verklaring): volgens artikel 8.4 per het derde kalenderjaar daarna, volgens de toelichting twee jaar erna. Bedoeld om lopende migratietrajecten af te ronden.")
    ],
    tools:[
      H("KIA (Kenniscommunity Informatie en Archief) en Leerhuis Informatiehuishouding",{u:U.voorbereiden,d:"Kenniscommunity Informatie en Archief en het Leerhuis Informatiehuishouding volgen het invoeringstraject."}),
      H("Timingstabel in de gaten houden",{u:U.thema,d:"Inwerkingtreding voorzien op 1 januari 2027; binnen twee jaar: gemeenschappelijke regelingen aanpassen (Wet 12.1) en archivarissen aanwijzen (Wet 12.4–12.7); overgangsrecht voor selectielijsten, openbaarheidsbeperkingen en de oude twintigjaarstermijn (Wet 12.2, 12.3, 12.8)."})
    ]}
 ]}
];
