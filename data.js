// Brondata en instellingen voor het Archiefwet 2026-overzicht.
// Laatst gecontroleerd en bijgewerkt op: zie LAST_UPDATED.

const LAST_UPDATED = "25 oktober 2026";
const KEY = "archiefwet2026.v2";

const SOURCES = {
  wet:      { url: "https://zoek.officielebekendmakingen.nl/stb-2026-149.html", name: "Archiefwet 2026 (Staatsblad 2026, 149)" },
  besluit:  { url: "https://zoek.officielebekendmakingen.nl/stb-2026-321.html", name: "Archiefbesluit 2026 (Staatsblad 2026, 321)" },
  regeling: { url: "https://technical-regulation-information-system.ec.europa.eu/nl/notification/27387", name: "concept-Archiefregeling (EU-notificatie 27387)" },
  diploma:  { url: "https://zoek.officielebekendmakingen.nl/stb-2026-303.html", name: "Besluit diploma's archivarissen (Staatsblad 2026, 303)" }
};

// k: "dig" | "fys" (weglaten = geldt voor alle vormen). w: doelgroepen (weglaten = iedereen).
// d: details (uitklapbaar). n: let-op-notitie.
const I = (a, t, o = {}) => ({ a, t, ...o });
const NONE_B = "Geen aparte bepaling in het Besluit. De Wet is hier direct van toepassing.";
const NONE_R = "Geen aparte bepaling in de Regeling.";

const phases = [
 { name:"Organisatie en verantwoordelijkheid", topics:[
  { id:"verantwoordelijkheid", title:"Wie is verantwoordelijk?",
    doel:"Vaststellen welk orgaan verantwoordelijk is voor welke documenten, ook na overbrenging en bij een gemeenschappelijke regeling.",
    wet:[
      I("1.1","Alle 'documenten' vallen onder de wet: elk geheel van vastgelegde gegevens (digitaal of fysiek) dat een overheidsorgaan opmaakt of ontvangt en dat verband houdt met zijn publieke taak."),
      I("1.3","Houd bij uw taken rekening met het belang van documenten voor uitvoering en verantwoording, voor burgers (rechten en plichten), voor onderzoek en als cultureel erfgoed."),
      I("2.1","Staat: de genoemde organen (ministers, Kamers, Raad van State, Algemene Rekenkamer, ZBO's van de Staat e.a.) zijn ieder voor hun organisatie verantwoordelijk; voor overige organen de betrokken minister.",{w:["rijk"]}),
      I("2.2","Provincie, gemeente, waterschap: gedeputeerde staten, college van B&W, respectievelijk dagelijks bestuur zijn verantwoordelijk, volgens een verordening van de volksvertegenwoordiging.",{w:["decentraal"]}),
      I("2.3","Gemeenschappelijke regeling: dagelijks bestuur (openbaar lichaam), bestuur (bedrijfsvoeringsorganisatie), deelnemers gezamenlijk (gemeenschappelijk orgaan).",{w:["gr"]}),
      I("2.4, 2.5","Andere publiekrechtelijke rechtspersonen: het orgaan dat het dagelijks bestuur voert. Privaatrechtelijke personen met openbaar gezag: zijzelf.",{w:["rijk"]}),
      I("2.6","Na overbrenging naar het Nationaal Archief is de Minister verantwoordelijk. Bij een gemeenschappelijke regeling wijst u een orgaan aan (alleen Minister of een orgaan uit 2.2) dat ook voor de niet-overgebrachte documenten van minstens één deelnemer verantwoordelijk is.",{w:["rijk","gr"]}),
      I("3.1 – 3.3","De Minister kan taken na overbrenging overdragen aan een gemeenschappelijke regeling, provincie of gemeente, met specifieke uitkering. Intrekking kan op verzoek, bij gebrekkig beheer of na beleidsheroverweging (dan pas na 5 jaar).",{w:["gr","decentraal"],d:["Het besluit geldt voor onbepaalde tijd en leidt niet tot eigendomsoverdracht (3.1 lid 4, 5).","Specifieke uitkering: 3.2; nadere regels bij ministeriële regeling."]}),
      I("12.1","Pas bestaande gemeenschappelijke regelingen uiterlijk twee jaar na inwerkingtreding aan op 2.3, 2.6 en 10.5.",{w:["gr"]})
    ], besluit:[], regeling:[], noteB:"Besluit en Regeling bevatten hier geen bepalingen: de uitwerking zit in uw eigen verordening." },
  { id:"samenwerking", title:"Samenwerking en organisatiewijzigingen",
    doel:"Zorgen dat documenten niet tussen wal en schip raken bij samenwerkingsverbanden, fusies, opheffing of overdracht van taken.",
    wet:[
      I("3.4","Samenwerkingsverband: de verantwoordelijke organen treffen gezamenlijk een regeling voor de documenten.",{d:["In de regeling minimaal: hoe zij hun taken invullen, naar welke archiefdienst blijvende documenten gaan, hoe toezicht plaatsvindt en een beheerregeling.","De taken mogen bij één van de organen worden belegd."]}),
      I("3.5 lid 1, 2","Een regeling die organen opheft, samenvoegt of splitst, of taken overdraagt, bevat een voorziening voor hun documenten. Bij een tijdelijk orgaan: ook voor bewaring na opheffing."),
      I("3.5 lid 3","Taken naar een niet-overheidsorgaan: documenten tijdelijk ter beschikking stellen kan, mits vastgelegd welke documenten, voor welke periode (niet langer dan overbrengingstermijn, behoudens opschorting) en hoe toezicht plaatsvindt.")
    ], besluit:[], regeling:[], noteB:"Besluit en Regeling bevatten hier geen bepalingen." },
  { id:"beheerregels", title:"Beheerregels en overzicht informatiehuishouding",
    doel:"Vastleggen en publiceren hoe u uw documenten beheert, en een actueel overzicht hebben van systemen, werkprocessen en vindplaatsen.",
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
    ]}
 ]},

 { name:"Duurzame toegankelijkheid", topics:[
  { id:"duurzaam", title:"Duurzame toegankelijkheid: kernverplichting en beveiliging",
    doel:"Documenten zolang het selectiebesluit voorschrijft vindbaar, beschikbaar, leesbaar, betrouwbaar en beveiligd houden.",
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
      I("2.1","Opslag en verwerking binnen de EU, EER of een land met adequaatheidsbesluit, tenzij een verdrag anders vereist.",{k:"dig"}),
      I("2.4","Zorg dat u op verzoek een juiste en volledige weergave of export (inhoud en metadata) kunt leveren, zo nodig gedeeltelijk als er persoonsgegevens, vertrouwelijke informatie of openbaarheidsbeperkingen zijn.",{k:"dig"}),
      I("1.2, 1.3","Gelijkwaardige normen uit een andere EU/EER-staat en nieuwere versies van genoemde normen zijn toegestaan. Afwijken kan als dezelfde kwaliteit wordt bereikt.")
    ]},
  { id:"metadata", title:"Ordening en metadata",
    doel:"Documenten voorzien van metadata en een plek in een ordeningsstructuur, zodat ze vindbaar en te verantwoorden zijn.",
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
    ]},
  { id:"digitaal10", title:"Digitale bewaring langer dan 10 jaar",
    doel:"Aanvullende eisen aan digitale documenten die op basis van het selectiebesluit langer dan tien jaar bewaard worden.",
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
    ]},
  { id:"migratie", title:"Migratie, conversie en vervanging",
    doel:"Documenten veilig overzetten, omzetten of door reproducties vervangen zonder verlies van inhoud of metadata.",
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
      I("3.2","Migratieplan bevat: borging van duurzame toegankelijkheid, borging van bewaartermijnen en een beschrijving van bron- en doelsystemen.",{k:"dig",n:"Treedt pas later in werking (Regeling 8.4): artikel 8.4 spreekt van het derde kalenderjaar na inwerkingtreding, de toelichting van twee jaar erna, mogelijk dus een jaar verschil. Tot die tijd geldt alleen de planplicht uit Besluit 2.2, zonder deze inhoudseisen."}),
      I("3.3","Migratieverklaring bevat: gemigreerde documenten, niet of niet volledig gemigreerde documenten en hoe die raadpleegbaar blijven tot einde bewaartermijn.",{k:"dig",n:"Zelfde latere inwerkingtreding als 3.2."})
    ]}
 ]},

 { name:"Selectie, vernietiging en overbrenging", topics:[
  { id:"selectie", title:"Selectiebesluiten",
    doel:"Per categorie documenten vastleggen wat blijvend en wat tijdelijk bewaard wordt, via een openbare procedure met onafhankelijke inbreng.",
    wet:[
      I("5.1 lid 1 – 3","Ontwerp een of meer selectiebesluiten en pas ze toe. Een selectiebesluit beschrijft de categorieën en geeft aan wat blijvend en wat tijdelijk (met bewaartermijn) wordt bewaard. De Minister stelt het vast in overeenstemming met u."),
      I("5.1 lid 5","De AMvB regelt procedure, inhoud en afwijking. Afwijking mag nooit leiden tot vernietiging van blijvend te bewaren documenten."),
      I("5.2","Groepsselectiebesluit voor privaatrechtelijke organen: de Minister stelt het vast op een ontwerp van een representatieve organisatie. Het geldt alleen voor organen zonder eigen selectiebesluit.",{w:["rijk"]}),
      I("12.2","Bestaande selectielijsten gelden als selectiebesluiten.")
    ],
    besluit:[
      I("3.1","Inhoud en looptijd:",{d:["Opschrift, taken en structuur bij vaststelling, toepassingsperiode en afbakening met andere besluiten.","In beginsel voor documenten na vaststelling; terugwerkend deels mogelijk.","Toepassingsperiode maximaal tien jaar na 1 januari volgend op inwerkingtreding."]}),
      I("3.2","De rijksarchivaris kan modelselectiebesluiten vaststellen."),
      I("3.3","Uniforme openbare voorbereidingsprocedure (Awb afdeling 3.4). Eenieder kan een zienswijze indienen."),
      I("3.4","Indeling in categorieën die aansluit bij taken en informatiebeheer. Weeg ook het belang van gegevensbescherming (AVG). Altijd blijvend bewaren: strategische besluitvorming, planvorming en verantwoording, cruciale processen en essentiële registraties."),
      I("3.5, 3.6","Betrek de verantwoordelijke voor de informatiehuishouding, de archivaris en een onafhankelijke deskundige voor de relatie burger-overheid.",{d:["De deskundige wordt op voordracht van de eerste twee personen benoemd door het orgaan dat na overbrenging verantwoordelijk is.","De deskundige mag niet regelmatig voor de betrokken organen werken (behalve voor deze benoeming) en mag geen belangen of functies hebben die de onafhankelijkheid aantasten.","Benoeming is maximaal vijf jaar en kan één keer met maximaal vijf jaar worden verlengd."]}),
      I("3.7","Motiveer indeling en waardering en voeg een verslag van het overleg met de betrokken deskundigen toe."),
      I("3.8","Publiceer de bijlage met categorieën en waarderingen via de website van het Nationaal Archief. De Minister publiceert vastgestelde selectiebesluiten en afwijkingen op een centrale digitale infrastructuur."),
      I("3.9, 3.10","Afwijken kan voorlopig, onderbouwd en gemeld aan de rijksarchivaris:",{d:["Blijvend bewaren bij gebeurtenissen met grote gevolgen (archivaris betrekken).","Eerder vernietigen op grond van een wettelijk voorschrift, of langer bewaren op grond van wet of belangen.","Ondergeschikte aanpassing van categorieën.","Afwijkingen gaan mee in het volgende selectiebesluit."]}),
      I("3.11 – 3.13","Gezamenlijke en groepsselectiebesluiten: één archivaris, één verantwoordelijke en één deskundige volstaat. Afwijkingen volgens 3.9 en 3.10.",{w:["rijk","gr","decentraal"]}),
      I("7.2 lid 1","Overgangsrecht: bestaande selectielijsten hebben een toepassingsperiode van maximaal twintig jaar.")
    ],
    regeling:[ I("2.5 sub j, k","Leg bij elk document de categorie uit het selectiebesluit en de bewaartermijn vast als metadata.",{n:"Zie ook onderwerp 'Ordening en metadata'."}) ]},
  { id:"vernietiging", title:"Vernietiging",
    doel:"Documenten na het verstrijken van de bewaartermijn gecontroleerd en aantoonbaar vernietigen.",
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
    ]},
  { id:"vervreemding", title:"Vervreemding en invordering",
    doel:"Eigendomsoverdracht van documenten en het terughalen van documenten die bij derden berusten.",
    wet:[
      I("4.4","Vervreemden mag alleen na machtiging van de Minister, tenzij een wettelijk voorschrift het vereist."),
      I("4.5, 10.6","Wie documenten onder zich heeft, moet ze binnen vier weken afstaan voor reproductie. U geeft ze binnen vier weken terug. Bij weigering kan een last onder bestuursdwang worden opgelegd."),
      I("12.10","Overgangsrecht: oude artikel-46-regelingen (in bewaring gegeven archiefbescheiden) gelden als vervreemd aan de gemeente.",{w:["decentraal"]})
    ],
    besluit:[ I("4.3","Betrek bij de voorbereiding van een vervreemdingsbesluit de verantwoordelijke voor informatiehuishouding en de archivaris (niet bij overgang tussen archiefdiensten).") ],
    regeling:[], noteR:NONE_R },
  { id:"overbrenging", title:"Overbrenging naar de archiefdienst",
    doel:"Blijvend te bewaren documenten die ouder zijn dan tien jaar overbrengen naar het Nationaal Archief of de decentrale archiefdienst.",
    wet:[
      I("5.4 lid 1, 2","Breng blijvend te bewaren documenten ouder dan tien jaar over (ook documenten die via een afwijking blijvend bewaard worden)."),
      I("5.5 lid 1","Eerder overbrengen kan in overeenstemming met de archivaris of rijksarchivaris."),
      I("12.3 lid 1","Overgangsrecht: documenten van vóór inwerkingtreding hoeven pas bij twintig jaar over.",{n:"De eerste overbrengingen onder de nieuwe tienjaarstermijn volgen vanaf 1 januari 2037. Tot 2047 lopen beide termijnen nog door elkaar (duiding op de kennisbankpagina Overbrenging van het Nationaal Archief)."}),
      I("5.4 lid 3","Nadere regels in de AMvB.")
    ],
    besluit:[
      I("5.1 lid 1, 2","Overleg tijdig met de archivaris en maak samen een verklaring van overbrenging met een specificatie van de documenten en, bij openbaarheidsbeperking (Wet 7.2), het besluit daartoe."),
      I("5.1 lid 3","Overbrenging zonder fysieke verplaatsing: toestemming van de archivaris, gezamenlijke maatregelen zodat de archivaris zijn taken kan vervullen, en vastlegging daarvan in de verklaring.",{k:"dig"})
    ],
    regeling:[
      I("2.13","Verwijder bij overbrenging van digitale documenten eventuele versleuteling.",{k:"dig"})
    ], noteR:"Metadata over openbaarheid bij overbrenging (Regeling 2.12): zie 'Openbaarheid bij overbrenging'." },
  { id:"uitstel", title:"Uitstel en ontheffing van overbrenging",
    doel:"Overbrenging opschorten bij veelvuldig gebruik of in uitzonderlijke gevallen geheel van overbrenging ontheven worden.",
    wet:[
      I("5.5 lid 2 – 4","Opschorten bij veelvuldig gebruik kan met machtiging van gedeputeerde staten of de Minister, telkens voor maximaal tien jaar (verlengbaar)."),
      I("5.6","Ontheffing door de rijksarchivaris alleen bij een omvangrijke samenhangende verzameling, ernstige afbreuk bij overbrenging en gelijkwaardige borging van bewaring en beschikbaarstelling.",{d:["Documenten zijn kosteloos te raadplegen. Overzicht en raadpleeginformatie zijn openbaar.","Intrekking door de rijksarchivaris als de redenen vervallen of de voorzieningen tekortschieten."]}),
      I("12.3 lid 2","Bestaande machtigingen blijven gelden als machtigingen op grond van 5.5 lid 2.")
    ],
    besluit:[
      I("5.2","Machtiging tot opschorting aanvragen met omschrijving, periode, motivering van veelvuldig gebruik en advies van de archivaris. Het besluit wordt actief openbaar gemaakt."),
      I("5.3","Ontheffingsaanvraag bevat o.a. documenten, systeem of ruimte, verzameling, naleving van hoofdstuk 2 (Duurzame toegankelijkheid), overzicht en dienstverlening voor raadpleging en redenen; bij een decentrale archiefdienst met advies van de archivaris; besluit wordt actief openbaar gemaakt."),
      I("2.5 lid 2","Grondslag voor regels over de 'adequate voorziening' bij ontheffing.")
    ],
    regeling:[], noteR:"Geen invulling van de 'adequate voorziening'. Let op: Regeling 5.2 heet ook 'Ontheffing' maar gaat over depoteisen." }
 ]},

 { name:"Openbaarheid en toegang", topics:[
  { id:"openbaarheid", title:"Openbaarheid bij overbrenging",
    doel:"Bepalen of documenten bij overbrenging beperkt openbaar worden en dit onderbouwen en vastleggen.",
    wet:[
      I("1.2","Wet open overheid en Wet hergebruik zijn niet van toepassing op overgebrachte documenten, tenzij de Archiefwet anders bepaalt. Geheimhoudingsplichten staan overbrenging niet in de weg (met voorbehoud van 7.2). Bijzondere persoonsgegevens mogen verwerkt worden bij vervanging, overbrenging en beheer."),
      I("7.1 lid 1","Na overbrenging zijn documenten openbaar."),
      I("7.2","Beperk de openbaarheid bij overbrenging bij:",{d:["absolute gronden: eenheid van de Kroon, veiligheid van de Staat, vertrouwelijke bedrijfsgegevens, bijzondere en strafrechtelijke persoonsgegevens, identificatienummers;","relatieve gronden (belangenafweging): internationale betrekkingen, financiële belangen, opsporing, toezicht, privacy, concurrentiegevoelige gegevens, beveiliging, goed functioneren van de overheid;","milieu-informatie met aparte regels, emissies zijn uitgezonderd."]}),
      I("7.3","Vraag advies aan de archivaris en motiveer de beperking per grond, ondanks het tijdsverloop."),
      I("7.4","Beperkingstermijnen: 75 jaar (Kroon, Staat, internationale betrekkingen), 110 jaar (bijzondere persoonsgegevens, identificatienummers, privacy), anders 20 jaar. Langer kan met instemming van gedeputeerde staten of de Minister."),
      I("7.5, 7.6","Na overbrenging nog beperken kan alleen als openbaarheid onaanvaardbaar is. Opheffen kan als de gronden vervallen (bij Minister gehoord of in overeenstemming met het overbrengende orgaan)."),
      I("12.8","Beperkingen op grond van de Archiefwet 1995 blijven gelden.")
    ],
    besluit:[ I("5.1 lid 2 sub b","Het besluit tot openbaarheidsbeperking maakt deel uit van de verklaring van overbrenging.") ],
    regeling:[
      I("2.12","Leg uiterlijk bij overbrenging vast: status (openbaar of beperkt openbaar), duur, einddatum en grond van de beperking (Wet 7.2).",{n:"Niet van toepassing op documenten van vóór inwerkingtreding (Regeling 8.2 lid 1)."}),
      I("2.4 sub b","Zorg dat er bij persoonsgegevens, vertrouwelijke informatie of beperkingen een gedeeltelijke weergave of export mogelijk is.",{k:"dig"})
    ]},
  { id:"toegang", title:"Toegang tot overgebracht archief",
    doel:"Verzoeken om raadpleging, informatie in andere vorm en uitlening afhandelen.",
    wet:[
      I("7.1 lid 2 – 5","Raadplegen is kosteloos. Voor kopieën kan een vergoeding gevraagd worden volgens regels van het verantwoordelijke orgaan. De archivaris kan uit eigen beweging publiceren.",{w:["archiefdienst"]}),
      I("8.2","Openbare documenten: toegang op verzoek, tenzij de toestand of veiligheid zich verzet; bij bedreiging kopieën; hergebruik volgens de Wet hergebruik.",{w:["archiefdienst"]}),
      I("8.3","Beperkt openbare documenten: toegang na belangenafweging, eventueel met voorwaarden. Bij de gronden Kroon, Staat en internationale betrekkingen beslist het overbrengende orgaan.",{w:["archiefdienst"]}),
      I("8.4","Als toegang niet mogelijk is: informatie in andere vorm, mits geen onevenredige inspanning.",{w:["archiefdienst"]}),
      I("8.5, 8.6","Uitlenen aan verzoekers of aan het overbrengende orgaan, mits veilige bewaring gewaarborgd is.",{w:["archiefdienst"]}),
      I("8.7","Verzoeken: mondeling of schriftelijk (openbaar), schriftelijk bij beperkt openbaar of uitlening. De archivaris kan nadere specificatie vragen.",{w:["archiefdienst"]})
    ],
    besluit:[
      I("6.1","Toegang tot documenten met bijzondere of strafrechtelijke persoonsgegevens of identificatienummers: verzoeker toont een uitzonderingsgrond aan (overlijdensbewijs, toestemming of motivering); bij onderzoek of statistiek ook de waarborgen voor gegevensbescherming.",{w:["archiefdienst"]}),
      I("6.2","Toegang tot beperkt openbare documenten met persoonsgegevens is in beginsel zonder kopieën.",{w:["archiefdienst"],d:["Kopieën zijn toegestaan als ze nodig zijn voor een rechtsvordering of voor onderzoek naar genocide, misdrijven tegen de menselijkheid of oorlogsmisdrijven.","De archivaris kan ook kopieën verstrekken als het niet verstrekken ervan tot een onbillijkheid van overwegende aard zou leiden."]})
    ],
    regeling:[], noteR:NONE_R },
  { id:"archiefdiensten", title:"Archiefdiensten, archivarissen en beheer na overbrenging",
    doel:"Inrichten van de archiefdienst en de archivaris, en regels voor beheer van overgebrachte documenten.",
    wet:[
      I("6.1","Het Nationaal Archief bewaart en stelt beschikbaar. De rijksarchivaris is verantwoordelijk voor beheer.",{w:["archiefdienst"]}),
      I("6.2","Provincie, gemeente en waterschap voorzien in een decentrale archiefdienst met een archivaris.",{w:["decentraal","archiefdienst"]}),
      I("6.3","Aanwijzing en kwalificaties van (rijks)archivaris: diploma en professionele kwaliteiten. Aanwijzing eindigt als de functie vervalt.",{w:["rijk","decentraal","archiefdienst"]}),
      I("9.1, 9.2","De Minister vervreemdt of vernietigt overgebrachte documenten alleen na machtiging van het overbrengende orgaan.",{w:["archiefdienst"]}),
      I("9.3, 9.4","De archivaris kan afschriften van authentieke akten afgeven. Een archiefdienst kan bescheiden van particulieren in bewaring of blijvende bewaring nemen (met beperking van openbaarheid mogelijk).",{w:["archiefdienst"]}),
      I("12.4 – 12.7","Overgangsrecht: bestaande archiefbewaarplaatsen en archivarissen blijven bestaan. Provincies, gemeenten en waterschappen zonder archivaris wijzen er binnen twee jaar een aan.",{w:["decentraal","archiefdienst"]})
    ],
    besluit:[], regeling:[], diploma:[
      I("2 lid 1","Archivistiek A en B gelden als diploma. De Minister wijst de opleidingen of cursus aan.",{w:["rijk","decentraal","archiefdienst"],d:["Archivistiek A: een aangewezen masteropleiding.","Archivistiek B: een aangewezen bacheloropleiding, associate degree of cursus."]}),
      I("2 lid 2, 3","Een ander hbo- of wo-diploma kan ook voldoen: minimaal twee relevante onderwijseenheden van elk ten minste vijf studiepunten en motivering van de geschiktheid in het aanwijzingsbesluit.",{w:["rijk","decentraal","archiefdienst"],d:["De onderwijseenheden betreffen archivistiek, collectiebeheer, informatiebeheer (digitaal of anders), informatie- of data-architectuur, informatie- of datamanagement, informatierecht of toezicht op informatiebeheer."]}),
      I("2 lid 4 – 6","De Minister kan opleidingen of cursussen aanwijzen voor de diploma’s Archivistiek A en B.",{w:["rijk","decentraal","archiefdienst"]}),
      I("3","Overgangsrecht voor aangewezen opleidingen en oudere diploma’s.",{w:["rijk","decentraal","archiefdienst"],d:["Opleidingen die onder het Archiefbesluit 1995 waren aangewezen, blijven aangewezen.","Voor relevante diploma’s van vóór 1 augustus 1993 (wo) of 1 september 1993 (hbo) geldt de eis van twee examenonderdelen in plaats van twee onderwijseenheden van vijf studiepunten."]}),
      I("4","Inwerkingtreding op een bij koninklijk besluit te bepalen tijdstip.",{w:["rijk","decentraal","archiefdienst"]})
    ] }
 ]},

 { name:"Fysieke bewaring", topics:[
  { id:"depot-gebouw", title:"Depot: ligging, brandveiligheid en beveiliging",
    doel:"Het gebouw en de inrichting van fysieke depots waarin blijvend te bewaren documenten liggen.",
    wet:[ I("4.1 lid 1","Passende maatregelen voor fysieke documenten.",{k:"fys"}) ],
    besluit:[ I("2.5 lid 1 sub i","Grondslag voor regels over fysieke ruimten.",{k:"fys"}) ],
    regeling:[
      I("5.1","Een voorschrift hoeft niet gevolgd te worden als op andere wijze minimaal dezelfde veiligheid, bescherming tegen water, klimaat en hygiëne wordt geboden.",{k:"fys"}),
      I("5.2","Ontheffing door de minister voor depots van vóór de inwerkingtreding waaraan redelijkerwijs niet kan worden voldaan.",{k:"fys",n:"Bestaande ontheffingen blijven gelden (Regeling 8.2 lid 2)."}),
      I("5.3","Beperk risico's van brand, overstroming, vocht en verzakking bij ligging en bouw. Heb een actueel beheers- en calamiteitenplan.",{k:"fys"}),
      I("5.4 – 5.6","Brandveiligheid: voorzieningen voor vertragen en doven, geen onnodig brandgevaarlijke materialen, brand- en rookwerende scheidingen (60 minuten), zelfsluitende deuren, brandmelding met doormelding, blusmiddelen (geen open sprinklers of poederblussers).",{k:"fys"}),
      I("5.7, 5.8","Watermelders met doormelding; kabels en leidingen alleen als opbouw.",{k:"fys"}),
      I("5.9","Constructie: gevolgklasse CC4, waterdicht, bestand tegen natuurgeweld, vloerbelasting berekend, geen ramen.",{k:"fys"}),
      I("5.10","Beveiliging tegen inbraak: signalering volgens NEN 5089 (SKG klasse 3) en weerstandsklasse 4.",{k:"fys"}),
      I("5.16","Aanvullend voor depots met overgebrachte documenten: klasse A1, 120 minuten brandwerendheid, R200 rookdoorgang, tweemelder-afhankelijke sprinklers, extra blustoestellen en communicatiemiddel.",{k:"fys",w:["archiefdienst"]})
    ]},
  { id:"depot-klimaat", title:"Depot: klimaat, inrichting en hygiëne",
    doel:"Bewaaromstandigheden die verval van fysieke documenten tegengaan.",
    wet:[ I("4.1 lid 1","Passende maatregelen voor fysieke documenten.",{k:"fys"}) ],
    besluit:[ I("2.1 lid 1 sub f","Geen aanmerkelijke fysieke achteruitgang van documenten.",{k:"fys"}) ],
    regeling:[
      I("5.11 – 5.13","Alleen documenten in het depot, in stellingen of kasten; geen onnodig licht; schadelijke stoffen weren; magnetische dragers afgeschermd; opstelling met luchtcirculatie en minimale afstanden (20 cm van muur, paden 70 cm).",{k:"fys"}),
      I("5.14","Klimaat: 35 tot 60% RV en 13 tot 22 °C, jaargemiddelden maximaal 50% en 18 °C, beperkte schommelingen, dagelijkse luchtzuivering, sensoren, klimaatevaluatieprotocol en logboek.",{k:"fys"}),
      I("5.15","Heb een protocol depothygiëne (schoonmaak en geïntegreerde bestrijding van plaagdieren en schimmels), minstens jaarlijks geëvalueerd.",{k:"fys"}),
      I("5.17","Heb een afgezonderde quarantaineruimte of -kast met eigen luchtbehandeling.",{k:"fys"}),
      I("5.18","Afwijkende klimaatwaarden voor kleurenprocedés, cellulosenitraat en -acetaat, met acclimatisering bij verplaatsing.",{k:"fys"})
    ]},
  { id:"materialen", title:"Verpakkingen en materialen",
    doel:"Duurzame verpakkingen, papier en schrijfmaterialen voor blijvend te bewaren fysieke documenten.",
    wet:[ I("4.1 lid 1","Passende maatregelen voor fysieke documenten.",{k:"fys"}) ],
    besluit:[ I("2.5 lid 1 sub j","Grondslag voor regels over materialen.",{k:"fys"}) ],
    regeling:[
      I("6.1 – 6.4","Adequate verpakkingen die beschermen en zelf geen schade veroorzaken; omslagen, dozen en etiketten volgens de ICN-kwaliteitseisen.",{k:"fys"}),
      I("6.5, 6.6","Geen schadelijke stoffen (metaal, lignine, weekmakers, PVC-copolymeren) in contact met documenten; reactieve documenten apart verpakken.",{k:"fys"}),
      I("6.7","Nieuw te vormen blijvende documenten van duurzaam materiaal. Vervang bestaande niet-verouderingsbestendige documenten zoveel mogelijk.",{k:"fys"}),
      I("6.8","Papier volgens NEN 2728 of NEN-EN-ISO 9706; inkt en toner watervast, lichtecht en niet doordrukkend.",{k:"fys"})
    ]}
 ]},

 { name:"Toezicht en overgang", topics:[
  { id:"toezicht", title:"Toezicht, meldplicht en handhaving",
    doel:"Meldingen van incidenten, toezicht door Inspectie of archivaris en de gevolgen bij niet-naleving.",
    wet:[
      I("10.1","Rijk, andere publiekrechtelijke en privaatrechtelijke organen: toezicht door de hoofdinspecteur en inspecteurs van de Minister, met jaarverslag aan de Staten-Generaal.",{w:["rijk"],n:"De hoofdinspecteur moet bij aanwijzing eveneens voldoen aan de eisen van Wet 6.3 lid 4: een diploma en de juiste professionele kwaliteiten (Wet 10.1 lid 2)."}),
      I("10.2","Meld onverwijld aan de hoofdinspecteur: beschadiging, verlies of ontoegankelijkheid (of dreiging) van documenten met aanmerkelijk belang, en calamiteiten met veel documenten.",{w:["rijk"]}),
      I("10.3","Bij niet-naleving kan de Minister een aanwijzing, last onder bestuursdwang of bestuurlijke boete (maximaal vijfde categorie) opleggen, na overleg.",{w:["rijk"]}),
      I("10.4","Decentraal toezicht door de archivaris, die rechtstreeks rapporteert. De volksvertegenwoordiging stelt een verordening vast met minstens tweejaarlijkse verslaglegging.",{w:["decentraal","archiefdienst"]}),
      I("10.5","Gemeenschappelijke regelingen: toezicht door de archivaris van de aangewezen decentrale archiefdienst, of de Inspectie als de Minister verantwoordelijk is.",{w:["gr"]}),
      I("12.9","Bestaande hoofdinspecteur en inspecteurs blijven aangewezen.",{w:["rijk"]})
    ],
    besluit:[], regeling:[
      I("7.1","Meld een incident binnen 72 uur na ontdekking aan de hoofdinspecteur met contactgegevens, omschrijving, aanmerkelijk belang, schade, genomen maatregelen en omvang.",{w:["rijk"],d:["'Incident' is gedefinieerd in Regeling 1.1 als een situatie of calamiteit uit Wet 10.2 lid 1 sub a en b."]})
    ], noteB:"Het Besluit bevat geen aparte bepalingen over toezicht en melding." },
  { id:"overgang", title:"Evaluatie, overgangsrecht en inwerkingtreding",
    doel:"Wanneer gelden de regels, welke overgangsbepalingen zijn er en hoe wordt de regelgeving geëvalueerd.",
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
    ]}
 ]}
];
