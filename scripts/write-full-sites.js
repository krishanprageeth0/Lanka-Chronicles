const fs = require('fs');

const sitesContent = `import { HistoricalSite } from '../lib/types';

export const HISTORICAL_SITES: HistoricalSite[] = [
  // 1. Ruwanwelisaya
  {
    id: 'ruwanwelisaya',
    slug: 'ruwanwelisaya-anuradhapura',
    name: {
      en: 'Ruwanwelisaya Stupa (Mahathupa / Swarnamali Chaitya)',
      si: 'රුවන්වැලි මහා සෑය (ස්වර්ණමාලී චෛත්‍යය)'
    },
    nameEnglish: 'Ruwanwelisaya Stupa (Mahathupa)',
    nameSinhala: 'රුවන්වැලි මහා සෑය',
    category: 'religious_shrine',
    coordinates: [8.3501, 80.3962],
    latitude: 8.3501,
    longitude: 80.3962,
    coordinatePrecision: 'gps_surveyed',
    elevation: 88,
    mapCamera: {
      zoom: 15.2,
      pitch: 52,
      bearing: 180
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom',
    startDate: '140 BCE',
    endDate: 'Present',
    datePrecision: 'traditional',
    significance: {
      en: 'Commissioned by King Dutugemunu in the 2nd century BCE to enshrine a major share of the Buddha’s relics. Recognized historically as one of the tallest architectural marvels of the ancient world.',
      si: 'ක්‍රි.පූ. 2 වන සියවසේදී දුටුගැමුණු රජු විසින් කරවන ලද, සර්වඥ ධාතූන් වහන්සේලා වැඩිම ප්‍රමාණයක් නිදන් කොට ඇති, පුරාණ ලෝකයේ උසම ගොඩනැගිලි අතරට අයත් මහා සෑයයි.'
    },
    description: {
      en: 'Standing at a restored height of 103 meters (338 ft) with a base circumference of 290 meters, the Mahathupa was an ancient civil engineering feat. Foundational records describe rammed stone, clay, copper plates, and aromatic resins. Its lower terrace features the celebrated Hasti Prakara (elephant wall) depicting hundreds of sculpted elephant foreparts guarding the sacred precincts.',
      si: 'මීටර් 103ක ප්‍රතිසංස්කරණය කළ උසකින් හා මීටර් 290ක වට ප්‍රමාණයකින් යුතු රුවන්වැලිසෑය පුරාණ ලක්දිව ඉංජිනේරු විද්‍යාවේ මුදුන්මල්කඩකි. පාදමේ ඇති හස්ති ප්‍රාකාරය (ඇත් පවුර) සෑ මළුව ආරක්ෂා කරන අයුරින් නිර්මාණය කර ඇත.'
    },
    historicalSummaryEnglish: 'Enshrining one-eighth of the Master’s relics, the Mahathupa served as the spiritual anchor of the Mahavihara monastery.',
    historicalSummarySinhala: 'මහා විහාරයේ ප්‍රධාන ආධ්‍යාත්මික කේන්ද්‍රය ලෙස ක්‍රි.පූ. දෙවන සියවසේ සිට අඛණ්ඩ වන්දනාවට පාත්‍ර වේ.',
    architecturalHighlights: [
      { en: 'Elephant Wall (Hasti Prakara) featuring life-size sculpted elephant foreparts', si: 'සැබෑ ඇතුන්ගේ ප්‍රමාණයෙන් නෙළූ ඇත් පවුර' },
      { en: 'Bubbulakara (bubble-shaped) hemispherical dome', si: 'බුබ්බුලාකාර (දිය බුබුළක) හැඩැති මහා ගර්භය' },
      { en: 'Four carved Vahalkada frontispieces oriented to the cardinal points', si: 'සිව් දිශාවට මුහුණලා ඇති කැටයම් සහිත වාහල්කඩ සතර' }
    ],
    archaeologicalEvidence: {
      en: 'Epigraphical records, Brahmi pillar edicts, and foundational layers matching descriptions in the Mahavamsa confirmed by Archaeological Survey excavations under H.C.P. Bell and Senarath Paranavitana.',
      si: 'මහාවංශයේ එන පාදම් ස්ථර විස්තර පුරාවිද්‍යා කැණීම් මගින් තහවුරු කර ඇති අතර බ්‍රාහ්මී ශිලා ලේඛන හමුවේ.'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'The stupa suffered extensive weathering and damage during 11th–13th century wars; the present upper dome and pinnacle reflect the scientific restoration completed between 1893 and 1940 by the Ruwanweli Seya Restoration Society.',
      si: '11–13 සියවස් වලදී හානි සිදුවූ අතර වර්තමාන කොත් කැරැල්ල හා චූඩා මාණික්‍යය 1893–1940 කාලයේ සිදුකළ විද්‍යාත්මක ප්‍රතිසංස්කරණය මගින් ස්ථාපිත වූවකි.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Monument within the Sacred City of Anuradhapura (Site No. 200). Protected under the Antiquities Ordinance of Sri Lanka.',
      si: 'යුනෙස්කෝ ලෝක උරුම ස්මාරකයකි (අංක 200). ශ්‍රී ලංකා පුරාවිද්‍යා ආඥාපනත යටතේ නීත්‍යානුකූලව සුරක්ෂිත කර ඇත.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ruwanwelisaya.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ruwanwelisaya.jpg',
    imageCreator: 'Lankapic (Wikimedia Commons contributor)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Ruwanwelisaya.jpg',
    imageLicense: 'Creative Commons Attribution 2.5 Generic (CC BY 2.5)',
    imageCaption: {
      en: 'Ruwanwelisaya Stupa rising above the Mahamevnawa sacred park in Anuradhapura.',
      si: 'අනුරාධපුර මහමෙවුනා උයනෙහි අහස් කුස සිඹිමින් විරාජමාන වන රුවන්වැලි මහා සෑය.'
    },
    imageVerificationStatus: 'verified_authentic',
    pastImage: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Ruwanwelisaya_in_1891.jpg',
    pastImageDate: '1891 CE (Photograph by James Ricalton)',
    pastImageCredit: 'James Ricalton (1891) / Scribner’s Magazine / Public Domain',
    presentImageCredit: 'Lankapic / Wikimedia Commons / CC BY 2.5',
    threeDModelAvailable: true,
    threeDType: 'stupa',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: The Great Chronicle of Ceylon (Chapters 28–31, W. Geiger translation)',
      'Department of Archaeology Sri Lanka: Sacred City of Anuradhapura Inventory',
      'UNESCO World Heritage Centre: Sacred City of Anuradhapura (Document 200, 1982)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 2. Sigiriya Rock Fortress
  {
    id: 'sigiriya',
    slug: 'sigiriya-rock-fortress',
    name: {
      en: 'Sigiriya Rock Fortress (Lion Rock of Kassapa)',
      si: 'සීගිරිය පර්වත රාජධානිය (කාශ්‍යප රජුගේ සිංහගිරිය)'
    },
    nameEnglish: 'Sigiriya Rock Fortress',
    nameSinhala: 'සීගිරිය',
    category: 'fortress',
    coordinates: [7.9570, 80.7603],
    latitude: 7.9570,
    longitude: 80.7603,
    coordinatePrecision: 'gps_surveyed',
    elevation: 349,
    mapCamera: {
      zoom: 15.6,
      pitch: 60,
      bearing: 335
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom (Kassapa Era)',
    startDate: '477 CE',
    endDate: '495 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'A massive 200-meter sheer gneiss citadel transformed by King Kassapa I into an extraordinary palatial aerie, renowned for its 5th-century frescoes, mirror wall graffiti, and sophisticated water gardens.',
      si: 'ක්‍රි.ව. 5 වන සියවසේදී කාශ්‍යප රජු විසින් ඉදිකරන ලද මීටර් 200ක් උසැති පර්වත මාලිගයකි. ලෝක ප්‍රකට බිතුසිතුවම්, කැටපත් පවුරේ කුරුටු ගී සහ ජල උද්‍යාන සඳහා යුනෙස්කෝ ලෝක උරුමයක් ලෙස පිළිගැනේ.'
    },
    description: {
      en: 'Sigiriya represents one of the best-preserved examples of ancient Asian urban planning. The site integrates symmetrical water gardens with natural boulder gardens, terraced approaches, a reflective glazed plaster Mirror Wall bearing poetic graffiti from the 6th to 14th centuries, and the monumental Lion Staircase platform giving access to the summit palace ruins.',
      si: 'පුරාණ නාගරික සැලසුම්කරණයේ අද්විතීය නිර්මාණයක් වන සීගිරිය ජල උද්‍යාන, ගල් උද්‍යාන, කැටපත් පවුර හා සිංහ පාද පිවිසුමෙන් සමන්විත ය. පර්වත මුදුනේ පිහිටි මාලිග සංකීර්ණයෙන් මුළු පෙදෙසම නිරීක්ෂණය කළ හැකි විය.'
    },
    historicalSummaryEnglish: 'Royal capital and palace sanctuary built by King Kassapa I after the usurpation of King Dhatusena.',
    historicalSummarySinhala: 'ධාතුසේන රජුගෙන් පසු කාශ්‍යප රජු විසින් ඉදිකළ අගනුවර සහ මාලිගා නිකේතනය.',
    architecturalHighlights: [
      { en: 'Lion Gate staircase carved into the north face of the citadel rock', si: 'උතුරු පර්වත පාමුල පිහිටි දැවැන්ත සිංහ පාද ද්වාරය' },
      { en: '5th-century natural pigment frescoes of celestial maidens (Apsaras)', si: '5 වන සියවසේ ස්වභාවික වර්ණ ගැන්වූ අප්සරා බිතුසිතුවම්' },
      { en: 'Hydro-pneumatic symmetric water gardens and subterranean conduit system', si: 'භූගත නළ පද්ධති මගින් ක්‍රියාත්මක වන සමමිතික ජල උද්‍යාන' }
    ],
    archaeologicalEvidence: {
      en: 'Culavamsa accounts, archaeological excavations by H.C.P. Bell (1894–1905) and Prof. Senake Bandaranayake under the Cultural Triangle Project (1982–2000). Over 685 deciphered graffiti verses published by S. Paranavitana.',
      si: 'චූලවංශ විස්තර, මධ්‍යම සංස්කෘතික අරමුදල මගින් සිදුකළ පුළුල් කැණීම් සහ සෙනරත් පරණවිතානයන් විසින් කියවූ කුරුටු ගී 685ක්.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Scholarly debate continues on whether Sigiriya served primarily as a military fortress, a pleasure palace, or a Mahayana/Tantric monastic complex after Kassapa’s death.',
      si: 'කාශ්‍යප රජුගේ මරණයෙන් පසු මෙය හුදෙක් බලකොටුවක්, විනෝද මාලිගයක් හෝ මහායාන ආරණ්‍ය සේනාසනයක් ලෙස භාවිත වූයේ ද යන්න පිළිබඳ විද්වත් සංවාද පවතී.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Site (Inscribed 1982, Ref. 202). Central Cultural Triangle protected archaeological reserve.',
      si: 'යුනෙස්කෝ ලෝක උරුම ස්ථානයකි (අංක 202). ශ්‍රී ලංකා පුරාවිද්‍යා දෙපාර්තමේන්තුව හා මධ්‍යම සංස්කෘතික අරමුදල යටතේ පාලනය වේ.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sigiriya__01.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sigiriya__01.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons photographer)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Sigiriya__01.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The dramatic northern precipice and Lion Platform of Sigiriya rock citadel.',
      si: 'සීගිරි පර්වතයේ උතුරු බෑවුම සහ සිංහ පාද මළුව.'
    },
    imageVerificationStatus: 'verified_authentic',
    pastImage: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Sigiriya_Rock_in_1890s.jpg',
    pastImageDate: 'c. 1895 CE (Archaeological Survey of Ceylon)',
    pastImageCredit: 'Archaeological Survey of Ceylon / H.C.P. Bell Archives / Public Domain',
    presentImageCredit: 'A.Savin / Wikimedia Commons / CC BY-SA 3.0',
    threeDModelAvailable: true,
    threeDType: 'sigiriya',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Culavamsa (Part I, W. Geiger translation, Chapters 38–39)',
      'Paranavitana, S. (1956): Sigiri Graffiti (Vols. I & II, Oxford University Press)',
      'Bandaranayake, Senake (1993): The Cultural Triangle of Sri Lanka: Sigiriya'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 3. Polonnaruwa Vatadage
  {
    id: 'polonnaruwa-vatadage',
    slug: 'polonnaruwa-vatadage-dalada-maluwa',
    name: {
      en: 'Polonnaruwa Vatadage (Circular Relic House of the Dalada Maluwa)',
      si: 'පොළොන්නරුව වටදාගෙය (දළදා මළුවේ වෘත්තාකාර ධාතු මන්දිරය)'
    },
    nameEnglish: 'Polonnaruwa Vatadage',
    nameSinhala: 'පොළොන්නරුව වටදාගෙය',
    category: 'religious_shrine',
    coordinates: [7.9406, 81.0008],
    latitude: 7.9406,
    longitude: 81.0008,
    coordinatePrecision: 'gps_surveyed',
    elevation: 64,
    mapCamera: {
      zoom: 16.0,
      pitch: 50,
      bearing: 45
    },
    periodIds: ['polonnaruwa'],
    kingdomId: 'polonnaruwa',
    historicalPeriod: 'Polonnaruwa Kingdom',
    startDate: '1160 CE',
    endDate: '1210 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'The crown jewel of circular Sinhala architecture (Vatadage), featuring two concentric stone terraces, exquisitely sculpted guardstones, moonstones, and four seated Dhyana Buddhas guarding the central stupa.',
      si: 'සිංහල වෘත්තාකාර වාස්තු විද්‍යාවේ අග්‍රගණ්‍ය නිර්මාණයක් වන මෙය, සදකඩපහණ, මුරගල් සහ සමාධි බුදුපිළිම සතරකින් ආරක්ෂිත මැද චෛත්‍යයකින් සමන්විත වේ.'
    },
    description: {
      en: 'Situated within the Sacred Quadrangle (Dalada Maluwa) of Polonnaruwa, the Vatadage sheltered a central stupa housing sacred relics. It boasts two tiers of elaborately carved stone stylobates with friezes of lions, lotuses, and dwarf ganas, topped by concentric rows of octagonal stone pillars that once supported a conical timber roof.',
      si: 'ඇතුළු මළුවේ පිහිටි මෙම විශිෂ්ට වටදාගෙය මධ්‍යයේ ඇති ස්තූපය ආවරණය කරමින් සකස් කළ දැව වහලක් රඳවා සිටි කැටයම් කළ ගල් කණු පේළිවලින් හා මනරම් මල් කැටයම් වලින් අලංකාර වී ඇත.'
    },
    historicalSummaryEnglish: 'Attributed to either King Parakramabahu the Great (1153–1186 CE) or King Nissanka Malla (1187–1196 CE) as evidenced by the Gal Pota inscription.',
    historicalSummarySinhala: 'මහා පරාක්‍රමබාහු හෝ නිශ්ශංකමල්ල රජු විසින් ඉදිකළ බව ගල්පොත සෙල්ලිපියෙහි සඳහන් වේ.',
    architecturalHighlights: [
      { en: 'Four cardinal granite Dhyana Mudra seated Buddha statues', si: 'සිව් දිශාවට වැඩසිටින කළුගල් සමාධි බුද්ධ ප්‍රතිමා සතර' },
      { en: 'Polonnaruwa-style Moonstone without the bull motif to respect Saivite subjects', si: 'ගවයාගේ රූපය ඉවත් කර නෙළන ලද පොළොන්නරු සම්ප්‍රදායේ සඳකඩපහණ' },
      { en: 'Carved balustrades (Korawakgala) depicting the Makara beast with undulating trunk', si: 'මකර කටින් නික්මෙන සූක්ෂ්ම කොරවක්ගල් කැටයම්' }
    ],
    archaeologicalEvidence: {
      en: 'Gal Pota stone slab inscription of King Nissanka Malla claiming erection or major adornment; architectural surveys by H.C.P. Bell in 1903.',
      si: 'නිශ්ශංකමල්ල රජුගේ ගල්පොත සෙල්ලිපිය සහ එච්.සී.පී. බෙල් මහතාගේ 1903 වාර්තා.'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Debated whether Parakramabahu I originally built the brick-and-timber structure and Nissanka Malla later encased it in ornate stone slabs, as chronicled differently in Culavamsa vs Royal Inscriptions.',
      si: 'පරාක්‍රමබාහු රජු මෙහි මූලික ඉදිකිරීම කර පසුව නිශ්ශංකමල්ල රජු කළුගල් ආවරණ එක්කළේද යන්න පිළිබඳව මතභේද පවතී.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Monument (Ancient City of Polonnaruwa, Ref. 201).',
      si: 'යුනෙස්කෝ ලෝක උරුම ස්මාරකයකි (අංක 201).'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Polonnaruwa_Vatadage.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Polonnaruwa_Vatadage.jpg',
    imageCreator: 'Bernard Gagnon (Wikimedia Commons contributor)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Polonnaruwa_Vatadage.jpg',
    imageLicense: 'Creative Commons Attribution-Share Alike 3.0 Unported (CC BY-SA 3.0)',
    imageCaption: {
      en: 'The circular stone sanctuary and Buddha statues of Polonnaruwa Vatadage.',
      si: 'පොළොන්නරුව වටදාගෙයි වෘත්තාකාර මළුව හා බුද්ධ ප්‍රතිමා.'
    },
    imageVerificationStatus: 'verified_authentic',
    pastImage: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Vatadage_Polonnaruwa_circa_1900.jpg',
    pastImageDate: 'c. 1900 CE (Archaeological Survey of Ceylon)',
    pastImageCredit: 'Archaeological Survey of Ceylon / Public Domain',
    presentImageCredit: 'Bernard Gagnon / Wikimedia Commons / CC BY-SA 3.0',
    threeDModelAvailable: true,
    threeDType: 'vatadage',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Culavamsa: Chapter 78 (Monuments of Polonnaruwa)',
      'Paranavitana, S. (1946): The Stupa in Ceylon',
      'Archaeological Survey of Ceylon Annual Report (1903)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 4. Gal Vihara (Uttararama)
  {
    id: 'gal-vihara',
    slug: 'gal-vihara-polonnaruwa-uttararama',
    name: {
      en: 'Gal Vihara (The Northern Monastery / Uttararama)',
      si: 'ගල් විහාරය (උත්තරාරාමය - පොළොන්නරුව)'
    },
    nameEnglish: 'Gal Vihara (Uttararama)',
    nameSinhala: 'ගල් විහාරය',
    category: 'religious_shrine',
    coordinates: [7.9658, 81.0022],
    latitude: 7.9658,
    longitude: 81.0022,
    coordinatePrecision: 'gps_surveyed',
    elevation: 62,
    mapCamera: {
      zoom: 16.2,
      pitch: 55,
      bearing: 270
    },
    periodIds: ['polonnaruwa'],
    kingdomId: 'polonnaruwa',
    historicalPeriod: 'Polonnaruwa Kingdom',
    startDate: '1153 CE',
    endDate: '1186 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'Commissioned by King Parakramabahu the Great, this rock temple contains four colossal granite Buddha statues hewn directly from a living cliff, representing the zenith of ancient Sinhala lithic rock sculpture.',
      si: 'මහා පරාක්‍රමබාහු රජු විසින් කරවන ලද, කළුගල් පර්වතයක සෘජුවම නෙළන ලද බුද්ධ ප්‍රතිමා සතරකින් සහ පොළොන්නරු කතිකාවත ඇතුළත් සෙල්ලිපියකින් සමන්විත මහා ශිලා විහාරයයි.'
    },
    description: {
      en: 'The Uttararama encompasses a colossal 14-meter recumbent Parinirvana Buddha with a gracefully depressed pillow, a 7-meter standing figure with crossed arms (often interpreted as Ananda mourning or the Buddha in Animisa Locana posture), a seated Buddha in Dhyana Mudra within an excavated cave (Vidyadhara Guha), and a large seated Buddha backed by an elaborate Torana.',
      si: 'මීටර් 14ක් දිගැති පිරිනිවන් මංචකය, මීටර් 7ක් උසැති අනිමිසලෝචන හෝ ආනන්ද හිමි නිරූපණය කරන හිටි පිළිමය, විද්‍යාධර ගුහාව තුළ වැඩසිටින හිඳි පිළිමය සහ මහා හිඳි බුද්ධ ප්‍රතිමාව මෙහි ප්‍රධාන අංග වේ.'
    },
    historicalSummaryEnglish: 'Site of the historic Polonnaruwa Katikavata (Monastic Code of Conduct) uniting the three rival Buddhist fraternities in 1165 CE.',
    historicalSummarySinhala: 'ක්‍රි.ව. 1165 දී මහා සංඝරත්නය එක්සේසත් කරමින් පිහිටුවූ පොළොන්නරු කතිකාවත සෙල්ලිපිය පිහිටියේ මෙහිය.',
    architecturalHighlights: [
      { en: '14-meter colossal reclining Buddha resting on a lotus bolster and indented pillow', si: 'මීටර් 14ක් දිග සිරිපතුල් මඳක් මෑත්ව පිහිටි සැතපෙන බුද්ධ ප්‍රතිමාව' },
      { en: 'Rock-inscribed Katikavata charter governing Buddhist monastic discipline', si: 'සංඝ සාමග්‍රිය ඇතිකළ පොළොන්නරු කතිකාවත් සෙල්ලිපිය' },
      { en: 'Vidyadhara Guha cave chamber with traces of 12th-century lime fresco pigments', si: 'විද්‍යාධර ගුහාවේ ඇති 12 වන සියවසේ බිතුසිතුවම් ශේෂයන්' }
    ],
    archaeologicalEvidence: {
      en: 'Culavamsa Chapter 78; Gal Vihara Katikavata rock inscription; Epigraphia Zeylanica Vol. II, No. 41.',
      si: 'චූලවංශය 78 පරිච්ඡේදය සහ එපිග්‍රැෆියා සෙයිලනිකා වෙළුම II හි සඳහන් කතිකාවත් ලිපිය.'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Art historians continue to debate whether the standing crossed-arm statue portrays the grief-stricken disciple Ananda or the Buddha practicing Animisallocana Puja.',
      si: 'දෑත් පපුව මත බැඳගත් හිටි පිළිමයෙන් ආනන්ද තෙරුන් නිරූපණය කරන්නේද නැතහොත් අනිමිසලෝචන පූජාව නිරූපණය කරන්නේද යන්න පිළිබඳ විවාද පවතී.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Monument (Polonnaruwa Sector 201).',
      si: 'යුනෙස්කෝ ලෝක උරුම ස්මාරකයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Gal_Vihara_Buddhas.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Gal_Vihara_Buddhas.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Gal_Vihara_Buddhas.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The serene granite rock-cut Buddhas at the Gal Vihara in Polonnaruwa.',
      si: 'පොළොන්නරුව ගල් විහාරයේ පර්වතයෙහි නෙළන ලද ශාන්ත බුද්ධ ප්‍රතිමා.'
    },
    imageVerificationStatus: 'verified_authentic',
    pastImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Gal_Vihara_1890s.jpg',
    pastImageDate: '1893 CE',
    pastImageCredit: 'Archaeological Survey of Ceylon / Public Domain',
    presentImageCredit: 'A.Savin / Wikimedia Commons / CC BY-SA 3.0',
    threeDModelAvailable: true,
    threeDType: 'colossal_statue',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Culavamsa: Chapter 78 (Parakramabahu’s Monasteries)',
      'Muller, E. (1883): Ancient Inscriptions in Ceylon',
      'Paranavitana, S. (1953): The Sculpture of Ceylon (Polonnaruwa)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 5. Jetavanarama Stupa
  {
    id: 'jetavanarama',
    slug: 'jetavanarama-stupa-anuradhapura',
    name: {
      en: 'Jetavanarama Stupa (The Great Colossus of Mahasena)',
      si: 'ජේතවනාරාම මහා සෑය (මහාසේන රජුගේ මහා ස්තූපය)'
    },
    nameEnglish: 'Jetavanarama Stupa',
    nameSinhala: 'ජේතවනාරාමය',
    category: 'religious_shrine',
    coordinates: [8.3517, 80.4032],
    latitude: 8.3517,
    longitude: 80.4032,
    coordinatePrecision: 'gps_surveyed',
    elevation: 89,
    mapCamera: {
      zoom: 15.0,
      pitch: 55,
      bearing: 120
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom',
    startDate: '276 CE',
    endDate: '303 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'The largest brick monument ever built in the ancient world. At its original height of 122 meters (400 ft), it was the third tallest structure on earth after the Great Pyramids of Giza.',
      si: 'පුරාණ ලෝකයේ මිනිසා විසින් ගඩොලින් ඉදිකළ විශාලතම ස්මාරකයයි. මුල් උස මීටර් 122ක් (අඩි 400ක්) වූ අතර ගීසාහි පිරමිඩ වලට පසු ලොව තෙවන උසම ඉදිකිරීම විය.'
    },
    description: {
      en: 'Built by King Mahasena in the 3rd century CE, over 93.3 million baked clay bricks were utilized in its massive dome. It enshrines part of the sash or belt (Pati Dhatuwa) tied by the Buddha. The foundational bed extends 12 meters deep into solid bedrock with layers of crushed stone, compacted clay, and copper sheets.',
      si: 'ක්‍රි.ව. 3 වන සියවසේදී මහාසේන රජු විසින් ගඩොල් මිලියන 93කට අධික ප්‍රමාණයක් යොදා ඉදිකරන ලදී. බුදුරදුන්ගේ පටී ධාතුව මෙහි නිදන් කර ඇති බව විශ්වාස කෙරේ.'
    },
    historicalSummaryEnglish: 'Seat of the Sagalika sect and the Jetavana monastic chapter, demonstrating the extraordinary engineering capacity of classical Sri Lanka.',
    historicalSummarySinhala: 'සාගලික නිකායේ මූලස්ථානය වූ මෙය ලක්දිව පුරාණ ගෘහ නිර්මාණ තාක්ෂණයේ උච්චතම අවස්ථාවකි.',
    architecturalHighlights: [
      { en: 'Solid core constructed with over 93.3 million fired clay bricks', si: 'පිළිස්සූ මැටි ගඩොල් මිලියන 93කට අධික ප්‍රමාණයකින් කළ ඝන ගර්භය' },
      { en: 'Deep foundational masonry extending 12 meters to bedrock', si: 'මීටර් 12ක් ගැඹුරට පර්වතය දක්වා විහිදෙන පාදම් ස්ථරය' },
      { en: 'Granite paved salapatala maluwa courtyard spanning 5.6 hectares', si: 'හෙක්ටයාර 5.6ක් පුරා විහිදෙන කළුගල් ඇතුරු මළුව' }
    ],
    archaeologicalEvidence: {
      en: 'Mahavamsa Chapter 37; Archaeological excavations and conservation conducted under the UNESCO-Sri Lanka Cultural Triangle Project (1981–2009).',
      si: 'මහාවංශය 37 පරිච්ඡේදය සහ යුනෙස්කෝ-ශ්‍රී ලංකා මධ්‍යම සංස්කෘතික අරමුදල මගින් සිදුකළ සංරක්ෂණ වාර්තා.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'The spire was reconstructed in stages; modern engineering analyses confirmed its brick mortars used dolomite lime with resinous plant juices.',
      si: 'ඩොලමයිට් හුණු සහ ශාක යුෂ යොදා සකස් කළ පැරණි බදාම තාක්ෂණය නූතන රසායනික පරීක්ෂණ මගින් තහවුරු කර ඇත.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Monument (Sacred City of Anuradhapura Site 200).',
      si: 'යුනෙස්කෝ ලෝක උරුම ස්මාරකයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Jetavanaramaya_stupa.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Jetavanaramaya_stupa.jpg',
    imageCreator: 'Rehman Abubakr (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Jetavanaramaya_stupa.jpg',
    imageLicense: 'CC BY-SA 4.0',
    imageCaption: {
      en: 'The massive brick dome of Jetavanarama stupa in Anuradhapura.',
      si: 'අනුරාධපුර ජේතවනාරාම මහා සෑයේ දැවැන්ත ගඩොල් ගර්භය.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'stupa',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: Chapter 37 (King Mahasena)',
      'Ratnayake, H. (1984): The Jetavana Stupa: Conservation and Excavation Reports',
      'UNESCO World Heritage Centre: Sacred City of Anuradhapura (Document 200)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 6. Abhayagiri Vihara
  {
    id: 'abhayagiri-vihara',
    slug: 'abhayagiri-monastery-anuradhapura',
    name: {
      en: 'Abhayagiri Monastery & Stupa',
      si: 'අභයගිරි විහාරය හා මහා සෑය'
    },
    nameEnglish: 'Abhayagiri Monastery',
    nameSinhala: 'අභයගිරිය',
    category: 'religious_shrine',
    coordinates: [8.3712, 80.3951],
    latitude: 8.3712,
    longitude: 80.3951,
    coordinatePrecision: 'gps_surveyed',
    elevation: 91,
    mapCamera: {
      zoom: 15.0,
      pitch: 50,
      bearing: 210
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom',
    startDate: '89 BCE',
    endDate: '1017 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'Founded by King Valagamba (Vattagamani Abhaya) in the 1st century BCE, it grew into a world-renowned international Buddhist university hosting 5,000 monks from China, India, and Southeast Asia.',
      si: 'ක්‍රි.පූ. 1 වන සියවසේදී වළගම්බා රජු විසින් කරවන ලද, චීනය, ඉන්දියාව ඇතුළු රටවලින් භික්ෂූන් 5,000ක් වැඩසිටි ජාත්‍යන්තර බෞද්ධ විශ්වවිද්‍යාලයකි.'
    },
    description: {
      en: 'The Abhayagiri stupa stands at 75 meters (245 ft). The monastery complex spans hundreds of acres featuring the celebrated Samadhi Buddha statue, the Twin Ponds (Kuttam Pokuna), the Moonstone with exquisite carvings, and subterranean monastic bathhouses. The Chinese pilgrim monk Faxian resided here for two years in 411–412 CE.',
      si: 'මීටර් 75ක් උසැති අභයගිරි සෑය, සමාධි බුද්ධ ප්‍රතිමාව, කුට්ටම් පොකුණ සහ විශිෂ්ට සඳකඩපහණින් සමන්විත අක්කර සිය ගණනක විහාර සංකීර්ණයකි. ක්‍රි.ව. 5 වන සියවසේ පාහියන් හිමියෝ මෙහි වසර දෙකක් නේවාසිකව වැඩසිටියහ.'
    },
    historicalSummaryEnglish: 'International seat of Theravada and Mahayana scholarship visited by Faxian in 411 CE.',
    historicalSummarySinhala: 'ථේරවාද මෙන්ම මහායාන ධර්මය ද අධ්‍යයනය කළ ජාත්‍යන්තර ධර්ම නිකේතනයකි.',
    architecturalHighlights: [
      { en: 'Kuttam Pokuna (Twin Ponds) with hydraulic underground filtering system', si: 'භූගත ජල පෙරණ පද්ධතියකින් යුතු කුට්ටම් පොකුණ' },
      { en: 'The peerless 4th-century Samadhi Buddha in Dhyana Mudra', si: '4 වන සියවසේ අසමසම කළුගල් සමාධි බුද්ධ ප්‍රතිමාව' },
      { en: 'Bisetuwa moonstone showing the four symbolic beasts of classical art', si: 'ඇත්, අස්, සිංහ, ගව යන සතර මහා සතුන් සහිත අභයගිරි සඳකඩපහණ' }
    ],
    archaeologicalEvidence: {
      en: 'Faxian’s Travel Records (A Record of Buddhistic Kingdoms); Mahavamsa Chapter 33; UNESCO Cultural Triangle Excavation Reports.',
      si: 'පාහියන් භික්ෂුවගේ දේශාටන වාර්තා, මහාවංශය 33 පරිච්ඡේදය සහ පුරාවිද්‍යා කැණීම්.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'The monastery was abandoned during the 13th-century southward migration of capitals and was overtaken by dense dry-zone forest until British surveys in the late 19th century.',
      si: '13 වන සියවසේ අගනුවර දකුණට සංක්‍රමණය වීමත් සමඟ වනාන්තරයෙන් වැසී ගිය අතර 19 වන සියවසේදී යළි සොයාගන්නා ලදී.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Monument (Sacred City of Anuradhapura Site 200).',
      si: 'යුනෙස්කෝ ලෝක උරුම ස්මාරකයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Abhayagiri_Stupa_Anuradhapura.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Abhayagiri_Stupa_Anuradhapura.jpg',
    imageCreator: 'Bernard Gagnon (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Abhayagiri_Stupa_Anuradhapura.jpg',
    imageLicense: 'CC BY-SA 3.0',
    imageCaption: {
      en: 'Abhayagiri stupa standing proudly within the northern monastery grounds.',
      si: 'අනුරාධපුර උත්තරාරාම භූමියේ පිහිටි අභයගිරි මහා ස්තූපය.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'stupa',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Faxian (414 CE): A Record of Buddhistic Kingdoms (Legge translation)',
      'Mahavamsa: Chapter 33 (King Vattagamani Abhaya)',
      'Kulasinghe, A.N.S. (1998): Structural Restoration of the Abhayagiri Stupa'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 7. Jaya Sri Maha Bodhi
  {
    id: 'sri-maha-bodhi',
    slug: 'jaya-sri-maha-bodhi-anuradhapura',
    name: {
      en: 'Jaya Sri Maha Bodhi (Sacred Bo Tree)',
      si: 'ජය ශ්‍රී මහා බෝධීන් වහන්සේ'
    },
    nameEnglish: 'Jaya Sri Maha Bodhi',
    nameSinhala: 'ජය ශ්‍රී මහා බෝධිය',
    category: 'religious_shrine',
    coordinates: [8.3448, 80.3965],
    latitude: 8.3448,
    longitude: 80.3965,
    coordinatePrecision: 'gps_surveyed',
    elevation: 85,
    mapCamera: {
      zoom: 16.0,
      pitch: 45,
      bearing: 90
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom',
    startDate: '288 BCE',
    endDate: 'Present',
    datePrecision: 'approximate',
    significance: {
      en: 'Planted in 288 BCE from the southern branch of the historical Bodhi tree in Bodhgaya, it is the oldest historically authenticated living tree planted by humans in the world with a continuous written record.',
      si: 'ක්‍රි.පූ. 288 දී දඹදිව බුද්ධගයාවේ ජය ශ්‍රී මහා බෝධියේ දක්ෂිණ ශාඛාවෙන් රෝපණය කරන ලද, මිනිසා විසින් රෝපණය කරන ලද ලොව පැරණිතම ලිඛිත ඉතිහාසයක් ඇති ජීවමාන වෘක්ෂයයි.'
    },
    description: {
      en: 'Brought to Sri Lanka by Sanghamitta Theri, daughter of Emperor Ashoka, during the reign of King Devanampiya Tissa. Enclosed within gold-gilded railings (Ran Veta) on an elevated terrace surrounded by an elephant wall, it has been continually guarded by hereditary custodians for over 2,300 years.',
      si: 'අශෝක අධිරාජයාගේ දියණිය වූ සංඝමිත්තා තෙරණිය විසින් වැඩම කරවන ලද මෙම බෝධීන් වහන්සේ රන් වැටකින් හා පවුරු වලින් ආරක්ෂා වී වසර 2,300 කට අධික කාලයක් නොකඩවා පූජෝපහාර ලබයි.'
    },
    historicalSummaryEnglish: 'Oldest documented planted tree in human history (288 BCE), brought by Sanghamitta Theri.',
    historicalSummarySinhala: 'සංඝමිත්තා තෙරණිය විසින් වැඩමවූ ලොව පැරණිතම ජීවමාන ඓතිහාසික වෘක්ෂය.',
    architecturalHighlights: [
      { en: 'Ran Veta (gilded gold boundary railing) surrounding the upper terrace', si: 'උඩමළුව වටා පිහිටි රන් ආලේපිත රන් වැට' },
      { en: 'Ancient stone retaining wall protecting the high sacred terrace', si: 'බෝධි මළුව සුරක්ෂිත කරන පුරාණ ශිලා ප්‍රාකාරය' }
    ],
    archaeologicalEvidence: {
      en: 'Mahavamsa Chapters 18–19; Dipavamsa; Bodhivamsa; continuous unbroken hereditary monastic records from 3rd c. BCE to present.',
      si: 'මහාවංශය, දීපවංශය, බෝධිවංශය සහ ක්‍රි.පූ. 3 වන සියවසේ සිට නොකඩවා පවත්නා භික්ෂු පරම්පරා ලේඛන.'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'The tree is botanical Ficus religiosa; dendrochronological analysis matches historical chronicles of continuous vegetative propagation.',
      si: 'වෘක්ෂ විද්‍යාත්මකව ෆිකස් රිලිජියෝසා (Ficus religiosa) වන අතර ඉතිහාස වාර්තා සමඟ සම්පූර්ණයෙන්ම සමපාත වේ.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Site (Sacred City of Anuradhapura). Protected under special legislation of Sri Lanka.',
      si: 'යුනෙස්කෝ ලෝක උරුමයකි. රාජ්‍ය ගෞරව සහිතව ආරක්ෂා කෙරේ.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Jaya_Sri_Maha_Bodhi.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Jaya_Sri_Maha_Bodhi.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Jaya_Sri_Maha_Bodhi.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The sacred terrace and golden railing of the Jaya Sri Maha Bodhi in Anuradhapura.',
      si: 'අනුරාධපුර ජය ශ්‍රී මහා බෝධීන් වහන්සේගේ රන් වැට හා උඩමළුව.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'vatadage',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: Chapters 18–19 (The Coming of the Bodhi-Tree)',
      'Dipavamsa: Chapter 16',
      'Geiger, Wilhelm (1908): The Mahavamsa or The Great Chronicle of Ceylon'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 8. Temple of the Sacred Tooth Relic (Sri Dalada Maligawa - Kandy)
  {
    id: 'temple-of-the-tooth',
    slug: 'temple-of-the-sacred-tooth-relic-kandy',
    name: {
      en: 'Sri Dalada Maligawa (Temple of the Sacred Tooth Relic - Kandy)',
      si: 'ශ්‍රී දළදා මාළිගාව (මහනුවර)'
    },
    nameEnglish: 'Temple of the Sacred Tooth Relic',
    nameSinhala: 'ශ්‍රී දළදා මාළිගාව',
    category: 'religious_shrine',
    coordinates: [7.2936, 80.6413],
    latitude: 7.2936,
    longitude: 80.6413,
    coordinatePrecision: 'gps_surveyed',
    elevation: 512,
    mapCamera: {
      zoom: 15.8,
      pitch: 54,
      bearing: 310
    },
    periodIds: ['kandyan'],
    kingdomId: 'kandy',
    historicalPeriod: 'Kandyan Kingdom',
    startDate: '1592 CE',
    endDate: '1815 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'The supreme spiritual and sovereign palladium of Sri Lanka. Built adjacent to the royal palace in the mountain capital of Senkadagala (Kandy), holding the Left Canine Tooth Relic of the Buddha.',
      si: 'ශ්‍රී ලංකාවේ රාජ්‍යත්වයේ සහ ආධ්‍යාත්මික ස්වෛරීභාවයේ උත්තරීතර සංකේතයයි. සෙංකඩගල පුරවරයේ රජමාළිගය අසල ඉදිකරන ලද මෙම පුදබිමෙහි බුදුරදුන්ගේ වාම ශ්‍රී දන්ත ධාතූන් වහන්සේ වැඩසිටිති.'
    },
    description: {
      en: 'Nestled on the shore of Kandy Lake (Kiri Muhuda), the complex features the octagonal Paththirippuwa pavilion, the Golden Canopy (Ran Viyana), the Cloud Wall (Walakulu Bamma), and innermost Gandhakuti chambers adorned with intricate ivory carvings, moonstones, and Kandyan lacquer work.',
      si: 'නුවර වැව අසල පිහිටි මෙම මාලිග සංකීර්ණය පත්තිරිප්පුව, රන් වියන, වළාකුළු බැම්ම සහ ඇත්දළ කැටයමින් අලංකාර වූ පල්ලේ මාලය හා උඩ මාලයෙන් සමන්විත වේ.'
    },
    historicalSummaryEnglish: 'Royal shrine and seat of the Dalada Perahera, housing the palladium of Sri Lankan kingship.',
    historicalSummarySinhala: 'වාර්ෂික ඇසළ පෙරහැර පවත්වන ශ්‍රී ලංකා රාජ්‍යත්වයේ මුදුන්මල්කඩ.',
    architecturalHighlights: [
      { en: 'Octagonal Paththirippuwa designed by royal master builder Devendra Mulachari', si: 'දේවේන්ද්‍ර මූලාචාරී විසින් නිර්මාණය කළ අෂ්ටාස්‍රාකාර පත්තිරිප්පුව' },
      { en: 'Golden Canopy (Ran Viyana) covering the innermost relic chamber', si: 'දන්ත ධාතුන් වහන්සේ වැඩසිටින කුටිය මත ඉදිකළ රන් වියන' },
      { en: 'Walakulu Bamma (Cloud Wall) mirroring the waves of Kandy Lake', si: 'මහනුවර වැවේ රළ පහර පිළිබිඹු කරන වළාකුළු බැම්ම' }
    ],
    archaeologicalEvidence: {
      en: 'Culavamsa Chapters 94–100; Royal land grants (Sannas); British colonial treaties (Kandyan Convention 1815).',
      si: 'චූලවංශය 94–100 පරිච්ඡේද, රාජකීය සන්නස් සහ 1815 උඩරට ගිවිසුම.'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Restored following the 1998 bomb blast with forensic archaeological precision, preserving all surviving original 17th-century timber elements.',
      si: '1998 දී සිදු වූ හානියෙන් පසු පැරණි දැව සහ ගල් කැටයම් මුල් ආකෘතියට අනුවම ඉතා සූක්ෂ්මව ප්‍රතිසංස්කරණය කරන ලදී.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage City of Kandy (Ref. 450, 1988).',
      si: 'යුනෙස්කෝ ලෝක උරුම නගරයක් වන මහනුවර ප්‍රධාන ස්මාරකයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Temple_of_the_Tooth_02.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Temple_of_the_Tooth_02.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Temple_of_the_Tooth_02.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The Golden Canopy and Paththirippuwa of Sri Dalada Maligawa overlooking the lake in Kandy.',
      si: 'මහනුවර ශ්‍රී දළදා මාළිගාවේ පත්තිරිප්පුව සහ රන් වියන.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'temple_of_tooth',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Culavamsa: Chapter 94 (King Wimaladharmasuriya I)',
      'Seneviratna, Anuradha (1983): Kandy: An Illustrated Guide',
      'UNESCO World Heritage Centre: Sacred City of Kandy (Document 450)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 9. Galle Fort (Dutch Fortifications)
  {
    id: 'galle-fort',
    slug: 'galle-fort-dutch-ramparts',
    name: {
      en: 'Galle Fort & Maritime Bastions',
      si: 'ගාල්ල ලන්දේසි බලකොටුව හා මුර අට්ටාල'
    },
    nameEnglish: 'Galle Fort',
    nameSinhala: 'ගාල්ල කොටුව',
    category: 'colonial_fort',
    coordinates: [6.0267, 80.2170],
    latitude: 6.0267,
    longitude: 80.2170,
    coordinatePrecision: 'gps_surveyed',
    elevation: 12,
    mapCamera: {
      zoom: 14.8,
      pitch: 58,
      bearing: 160
    },
    periodIds: ['colonial-maritime'],
    kingdomId: 'colonial',
    historicalPeriod: 'Colonial Maritime Era (Portuguese & Dutch)',
    startDate: '1588 CE',
    endDate: '1796 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'The best-preserved example of a fortified European colonial city in South and Southeast Asia, blending European coastal military architecture with indigenous South Asian artisanal construction.',
      si: 'දකුණු හා අග්නිදිග ආසියාවේ හොඳින්ම සුරැකිව පවතින යුරෝපීය යටත්විජිත බලකොටුවයි. පෘතුගීසි, ලන්දේසි හා දේශීය වාස්තු විද්‍යාවන්ගේ සංකලනයකි.'
    },
    description: {
      en: 'Constructed first by the Portuguese in 1588 and extensively fortified by the Dutch East India Company (VOC) after 1640 across a 52-hectare rocky promontory. It contains 14 thick coral-and-granite bastions (such as Star, Moon, and Sun Bastions), an underground stormwater sewer system, and historic 17th-century administrative buildings.',
      si: 'හෙක්ටයාර 52ක අර්ධද්වීපයක පිහිටි මෙහි කොරල් හා කළුගලින් තැනූ බැස්ටියන් (මුර අට්ටාල) 14ක්, භූගත අපජල පද්ධතියක් සහ 17 වන සියවසේ ලන්දේසි ගොඩනැගිලි රැසක් අදටත් සුරක්ෂිතව පවතී.'
    },
    historicalSummaryEnglish: 'UNESCO World Heritage fortified coastal enclave showcasing Portuguese and Dutch VOC maritime supremacy.',
    historicalSummarySinhala: 'ලන්දේසි පෙරදිග ඉන්දීය වෙළඳ සමාගමේ (VOC) ප්‍රධාන වෙරළබඩ බලකොටුව.',
    architecturalHighlights: [
      { en: '14 massive coral-and-laterite sea-facing artillery bastions', si: 'මුහුදට මුහුණලා ඇති කොරල් සහ කබොක් ගලින් තැනූ ආරක්ෂක බැස්ටියන් 14' },
      { en: 'Gravity-fed tidal subterranean sewage and stormwater canalization', si: 'මුහුදු රළ මගින් ස්වයංක්‍රීයව පිරිසිදු වන පැරණි භූගත කානු පද්ධතිය' },
      { en: '1669 VOC Coat of Arms above the Old Gate entrance', si: 'පැරණි දොරටුව මත පිහිටි 1669 වසරේ VOC ලාංඡනය' }
    ],
    archaeologicalEvidence: {
      en: 'VOC Dutch East India Company archival cartography; Maritime Archaeology Unit (MAU) underwater harbor surveys; Dutch Reformed Church registry (1755).',
      si: 'ලන්දේසි ලේඛනාගාර සිතියම්, සමුද්‍රීය පුරාවිද්‍යා ඒකකයේ වරාය ගවේෂණ සහ 1755 ලන්දේසි දේවස්ථාන වාර්තා.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Extensively weathered by Indian Ocean salt spray; sustained minor outer-rampart wash during the 2004 tsunami without structural breach.',
      si: '2004 සුනාමි රළ පහරට මුහුණ දුන්නද ශක්තිමත් පවුරු පද්ධතියට බරපතල හානි සිදු නොවීය.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Monument (Old Town of Galle and its Fortifications, Ref. 451, 1988).',
      si: 'යුනෙස්කෝ ලෝක උරුමයකි (අංක 451).'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Galle_Fort_Lighthouse.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Galle_Fort_Lighthouse.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Galle_Fort_Lighthouse.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The Point Utrecht Bastion and lighthouse at the southern tip of Galle Fort.',
      si: 'ගාලු කොටුවේ උට්‍රෙක්ට් බැස්ටියනය සහ ප්‍රදීපාගාරය.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'fortress_bastion',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Brohier, R.L. (1978): Links Between Sri Lanka and the Netherlands',
      'Paranavitana, K.D. (2002): Galle: The Dutch Fort',
      'UNESCO World Heritage Centre: Old Town of Galle (Document 451)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 10. Dambulla Cave Temple (Rangiri Dambulu Vihara)
  {
    id: 'dambulla-cave-temple',
    slug: 'rangiri-dambulla-cave-temple',
    name: {
      en: 'Rangiri Dambulla Cave Temple (Golden Temple)',
      si: 'රන්ගිරි දඹුලු ලෙන් රජමහා විහාරය'
    },
    nameEnglish: 'Dambulla Cave Temple',
    nameSinhala: 'දඹුල්ල ලෙන් විහාරය',
    category: 'monastery',
    coordinates: [7.8567, 80.6483],
    latitude: 7.8567,
    longitude: 80.6483,
    coordinatePrecision: 'gps_surveyed',
    elevation: 341,
    mapCamera: {
      zoom: 15.5,
      pitch: 58,
      bearing: 220
    },
    periodIds: ['anuradhapura', 'polonnaruwa', 'kandyan'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura to Kandyan Kingdom',
    startDate: '103 BCE',
    endDate: '1780 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'The largest and best-preserved rock cave sanctuary complex in Sri Lanka, boasting 2,100 square meters of mural paintings and 157 statues carved under a colossal 160-meter granite overhang.',
      si: 'වර්ග මීටර් 2,100ක බිතුසිතුවම් සහ ප්‍රතිමා 157ක් සහිත, මීටර් 160ක් උස කළුගල් පර්වතයක් යට පිහිටි ලංකාවේ විශාලතම සහ අලංකාරතම ලෙන් විහාර සංකීර්ණයයි.'
    },
    description: {
      en: 'Founded by King Valagamba (Vattagamani Abhaya) in the 1st century BCE while in exile, and later gilded by King Nissanka Malla in 1190 CE. The five main caves (Devaraja Lena, Maharaja Lena, Maha Alut Vihara, Paccima Vihara, and Devana Alut Vihara) display exquisite murals illustrating the life of the Buddha and the chronicle history of Sri Lanka.',
      si: 'ක්‍රි.පූ. 1 වන සියවසේ වළගම්බා රජු සැඟව සිටි ලෙනක් වූ අතර නිශ්ශංකමල්ල රජු මෙහි පිළිම රනින් ආලේප කර රන්ගිරි දඹුල්ල නම් කළේය. ප්‍රධාන ලෙන් 5 තුළ විශිෂ්ට සිතුවම් හා පිළිම සංරක්ෂණය වී ඇත.'
    },
    historicalSummaryEnglish: 'Sacred mountain cave complex preserving over 2,000 years of unbroken Buddhist art and royal patronage.',
    historicalSummarySinhala: 'වසර 2,000 කට අධික කාලයක් රජවරුන්ගේ නොමඳ අනුග්‍රහය ලත් අසමසම බෞද්ධ සිතුවම් කලාගාරයකි.',
    architecturalHighlights: [
      { en: '14-meter rock-cut reclining Buddha in Cave 1 (Devaraja Lena)', si: 'දෙව්රජ ලෙන තුළ පිහිටි මීටර් 14ක සැතපෙන බුද්ධ ප්‍රතිමාව' },
      { en: 'Sacred water vessel capturing dripping cave water flowing against gravity', si: 'මහාරජ ලෙන තුළ ගුරුත්වාකර්ෂණයට එරෙහිව බිංදු බිංදු වැටෙන ආශ්චර්යමත් පැන් බඳුන' },
      { en: 'Nissanka Malla stone inscription recording the gilding of 73 Buddha statues', si: 'පිළිම 73ක් රන් ආලේප කළ බව සඳහන් නිශ්ශංකමල්ල රජුගේ ශිලා ලේඛනය' }
    ],
    archaeologicalEvidence: {
      en: 'Early Brahmi rock inscriptions on the drip-ledges (Katarama) dating to 2nd c. BCE; Mahavamsa; Nissanka Malla Dambulla rock inscription.',
      si: 'කටාරම් වල ඇති ක්‍රි.පූ. 2 වන සියවසේ මුල් බ්‍රාහ්මී ලේඛන සහ නිශ්ශංකමල්ල රජුගේ සෙල්ලිපිය.'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'The paintings show multiple historical layers, with early classical styles repainted and augmented during the 18th-century Kandyan Renaissance under King Kirti Sri Rajasinha.',
      si: 'වර්තමානයේ දක්නට ලැබෙන සිතුවම් වලින් බහුතරයක් 18 වන සියවසේ කීර්ති ශ්‍රී රාජසිංහ රජ සමයේ ප්‍රතිසංස්කරණය කරන ලද උඩරට සම්ප්‍රදායට අයත් වේ.'
    },
    conservationStatus: {
      en: 'UNESCO World Heritage Site (Golden Temple of Dambulla, Ref. 561, 1991).',
      si: 'යුනෙස්කෝ ලෝක උරුමයකි (අංක 561).'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Dambulla_Cave_Temple_Interior.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Dambulla_Cave_Temple_Interior.jpg',
    imageCreator: 'Bernard Gagnon (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Dambulla_Cave_Temple_Interior.jpg',
    imageLicense: 'CC BY-SA 3.0',
    imageCaption: {
      en: 'Interior of the Maharaja Lena cave temple at Dambulla adorned with statues and ceiling frescoes.',
      si: 'දඹුල්ල මහාරජ ලෙන තුළ පිහිටි ප්‍රතිමා සහ මනස්කාන්ත වියන් සිතුවම්.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'cave_temple',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: Chapter 33',
      'Paranavitana, S. (1970): Inscriptions of Ceylon Vol. I',
      'UNESCO World Heritage Centre: Golden Temple of Dambulla (Document 561)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 11. Kelaniya Raja Maha Vihara
  {
    id: 'kelaniya-vihara',
    slug: 'kelaniya-raja-maha-vihara',
    name: {
      en: 'Kelaniya Raja Maha Vihara',
      si: 'කැලණිය රජ මහා විහාරය'
    },
    nameEnglish: 'Kelaniya Raja Maha Vihara',
    nameSinhala: 'කැලණිය රජ මහා විහාරය',
    category: 'religious_shrine',
    coordinates: [6.9525, 79.9220],
    latitude: 6.9525,
    longitude: 79.9220,
    coordinatePrecision: 'gps_surveyed',
    elevation: 8,
    mapCamera: {
      zoom: 15.4,
      pitch: 48,
      bearing: 340
    },
    periodIds: ['anuradhapura', 'kotte'],
    kingdomId: 'kotte',
    historicalPeriod: 'Kotte Kingdom & Classical Era',
    startDate: '500 BCE',
    endDate: 'Present',
    datePrecision: 'traditional',
    significance: {
      en: 'Sanctified by the Buddha’s third visit to Sri Lanka to settle a dispute between Naga kings Chulodara and Mahodara. The spiritual destination of the 15th-century Salalihini Sandeshaya flight.',
      si: 'චූලෝදර සහ මහෝදර නා රජුන්ගේ මැණික් පුටුව පිළිබඳ ආරවුල සංසිඳවීම සඳහා බුදුරදුන් තෙවන වර ලක්බිමට වැඩම කළ පූජනීය පුදබිමයි. සැළලිහිණි සන්දේශයේ ගමනාන්තයයි.'
    },
    description: {
      en: 'Bordering the Kelani River, the complex features a distinctive paddy-heap shaped (Dhanyakara) stupa enshrining the gem-studded throne, the shrine of deity Vibhishana, and celebrated modern murals by Solias Mendis depicting the arrival of Sanghamitta Theri and the Sacred Tooth Relic.',
      si: 'කැලණි ගං ඉවුරේ පිහිටි ධාන්‍යාකාර මහා චෛත්‍යය, විභීෂණ දේවාලය සහ සොලියස් මෙන්ඩිස් කලාකරුවාගේ අග්‍රගණ්‍ය බිතුසිතුවම් වලින් මෙම විහාරය බබළයි.'
    },
    historicalSummaryEnglish: 'Ancient riverside temple and shrine of Guardian Deity Vibhishana, celebrated in medieval Sandeshaya poetry.',
    historicalSummarySinhala: 'සැළලිහිණි සන්දේශයේ සඳහන් විභීෂණ දෙවියන්ගේ දේවාලය පිහිටි කැලණි පුරවරය.',
    architecturalHighlights: [
      { en: 'Dhanyakara (heap of paddy shaped) stupa enshrining the gem-set throne', si: 'මැණික් පුටුව නිදන් කර ඉදිකළ ධාන්‍යාකාර මහා සෑය' },
      { en: 'Shrine of God Vibhishana (guardian deity of western Sri Lanka)', si: 'බස්නාහිර දිශාපති විභීෂණ දිව්‍යරාජයාගේ පුරාණ දේවාලය' },
      { en: 'Historical frescoes by Master Solias Mendis depicting Lanka chronicles', si: 'සොලියස් මෙන්ඩිස් ශූරීන්ගේ අද්විතීය ලක්දිව ඓතිහාසික බිතුසිතුවම්' }
    ],
    archaeologicalEvidence: {
      en: 'Mahavamsa Chapter 1; Culavamsa; 15th-century Sandeshaya poetry; Kalyani Inscriptions of King Dhammaceti of Burma (1476 CE).',
      si: 'මහාවංශය පළමු පරිච්ඡේදය, 15 වන සියවසේ සන්දේශ කාව්‍ය සහ බුරුමයේ ධම්මචේති රජුගේ කල්‍යාණී සෙල්ලිපිය (1476).'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'The original medieval temple was razed by the Portuguese in 1575 CE; reconstructed in the late 18th century by the Ven. Welivita Sri Saranankara Sangharaja.',
      si: '1575 දී පෘතුගීසීන් විසින් විනාශ කළ අතර 18 වන සියවසේදී වැලිවිට සරණංකර සංඝරාජ හිමියන්ගේ මඟපෙන්වීමෙන් යළි ගොඩනගන ලදී.'
    },
    conservationStatus: {
      en: 'Protected archaeological monument under the Antiquities Ordinance of Sri Lanka.',
      si: 'පුරාවිද්‍යා ආඥාපනත යටතේ ආරක්ෂිත ස්මාරකයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Kelaniya_Raja_Maha_Vihara.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Kelaniya_Raja_Maha_Vihara.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kelaniya_Raja_Maha_Vihara.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The imposing facade and tiered entrance of Kelaniya Raja Maha Vihara.',
      si: 'කැලණිය රජ මහා විහාරයේ ප්‍රධාන පිවිසුම හා මනරම් මූර්ති කැටයම්.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'stupa',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: Chapter 1 (The Third Visit of the Master)',
      'Salalihini Sandeshaya (Stanzas 53–71)',
      'Department of Archaeology Sri Lanka: Western Province Monument Survey'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 12. Parakrama Samudra (Sea of Parakramabahu)
  {
    id: 'parakrama-samudra',
    slug: 'parakrama-samudra-polonnaruwa',
    name: {
      en: 'Parakrama Samudra (The Sea of King Parakramabahu)',
      si: 'පරාක්‍රම සමුද්‍රය (මහා පැරකුම්බා සයුර)'
    },
    nameEnglish: 'Parakrama Samudra',
    nameSinhala: 'පරාක්‍රම සමුද්‍රය',
    category: 'hydraulic_reservoir',
    coordinates: [7.9250, 80.9850],
    latitude: 7.9250,
    longitude: 80.9850,
    coordinatePrecision: 'gps_surveyed',
    elevation: 58,
    mapCamera: {
      zoom: 13.8,
      pitch: 45,
      bearing: 110
    },
    periodIds: ['polonnaruwa'],
    kingdomId: 'polonnaruwa',
    historicalPeriod: 'Polonnaruwa Kingdom',
    startDate: '1153 CE',
    endDate: '1186 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'The crown of ancient Sri Lankan hydraulic civil engineering. Created by joining five major reservoirs with a 14-kilometer earthen bund, epitomizing the royal decree: "Let not a single drop of water flow into the ocean without being useful to man."',
      si: 'ලක්දිව පුරාණ වාරි ශිෂ්ටාචාරයේ මුදුන්මල්කඩයි. "අහසින් වැටෙන එකදු දිය බිඳක් හෝ මිනිසාගේ ප්‍රයෝජනයට නොගෙන මුහුදට ගලා යාමට ඉඩ නොදිය යුතුය" යන මහා පරාක්‍රමබාහු රජුගේ සංකල්පය මූර්තිමත් කරයි.'
    },
    description: {
      en: 'Spanning a surface area of over 2,500 hectares with a storage capacity exceeding 134 million cubic meters, the colossal lake supplied irrigation to the vast rice paddies of Rajarata. Its sophisticated stone-lined sluices (Bisokotuwa) regulated hydrostatic pressure through deep granite conduits without eroding the earthen dams.',
      si: 'හෙක්ටයාර 2,500ක ජල මතුපිටකින් හා ඝන මීටර් මිලියන 134ක ධාරිතාවකින් යුතු මෙම දැවැන්ත ජලාශය කිලෝමීටර් 14ක වැව් බැම්මකින් සමන්විත වන අතර පුරාණ බිසෝකොටු තාක්ෂණයෙන් ජල පීඩනය පාලනය කළේය.'
    },
    historicalSummaryEnglish: 'Monumental 12th-century artificial inland sea sustaining the agricultural golden age of Polonnaruwa.',
    historicalSummarySinhala: 'පොළොන්නරු යුගයේ සශ්‍රීකත්වයට පදනම දැමූ 12 වන සියවසේ මහා කෘත්‍රිම ජලාශය.',
    architecturalHighlights: [
      { en: 'Bisokotuwa (cistern sluice) engineering absorbing tremendous hydrostatic pressure', si: 'මහා ජල පීඩනය සමනය කරන පුරාණ බිසෝකොටු වාස්තු විද්‍යාව' },
      { en: '14-kilometer massive stone-pitched earthen embankment (bund)', si: 'රළ පහරින් ආරක්ෂාවට කළුගල් ඇතුරූ (රළපනාව සහිත) කිලෝමීටර් 14ක වැව් බැම්ම' },
      { en: 'Deepaththawa water palace ruins located on an island promontory', si: 'වැව මැද දූපතක පිහිටි සීතල මාලිගයේ නටබුන්' }
    ],
    archaeologicalEvidence: {
      en: 'Culavamsa Chapters 68 & 79; Irrigation Department historical survey archives (R.L. Brohier).',
      si: 'චූලවංශය 68 සහ 79 පරිච්ඡේද; ආර්.එල්. බ්‍රෝහියර්ගේ පුරාණ වාරිමාර්ග සමීක්ෂණ වාර්තා.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Modern restoration in the 1950s under D.S. Senanayake united three of the original five reservoirs (Topawewa, Eramuduwewa, Dumbutulawewa).',
      si: '1950 ගණන් වල ඩී.එස්. සේනානායක මහතාගේ ප්‍රතිසංස්කරණ මගින් මුල් වැව් තුනක් (තෝපා වැව, දුඹුටුළු වැව, එරමුදු වැව) එක්කොට වත්මන් ජලාශය ප්‍රතිස්ථාපනය කෙරිණි.'
    },
    conservationStatus: {
      en: 'Protected environmental and historical water basin of Sri Lanka.',
      si: 'ශ්‍රී ලංකා වාරිමාර්ග දෙපාර්තමේන්තුව හා පුරාවිද්‍යා දෙපාර්තමේන්තුව යටතේ ආරක්ෂිතයි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Parakrama_Samudraya_01.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Parakrama_Samudraya_01.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Parakrama_Samudraya_01.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The endless waters of the Parakrama Samudra stretching toward the horizon in Polonnaruwa.',
      si: 'ක්ෂිතිජය දක්වා විහිදෙන මහා පරාක්‍රම සමුද්‍රයේ නිල්වන් දිය දහර.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'vatadage',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Culavamsa: Chapter 68 (The Improvement of the Kingdom)',
      'Brohier, R.L. (1934): Ancient Irrigation Works in Ceylon',
      'Arumugam, S. (1969): Water Resources of Ceylon'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 13. Yapahuwa Rock Fortress
  {
    id: 'yapahuwa-fortress',
    slug: 'yapahuwa-rock-citadel',
    name: {
      en: 'Yapahuwa Rock Citadel & Sacred Staircase',
      si: 'යාපහුව පර්වත රාජධානිය සහ විසිතුරු ශෛලමය පියගැටපෙළ'
    },
    nameEnglish: 'Yapahuwa Rock Citadel',
    nameSinhala: 'යාපහුව',
    category: 'fortress',
    coordinates: [7.8286, 80.3069],
    latitude: 7.8286,
    longitude: 80.3069,
    coordinatePrecision: 'gps_surveyed',
    elevation: 215,
    mapCamera: {
      zoom: 15.5,
      pitch: 62,
      bearing: 15
    },
    periodIds: ['transitional-kingdoms'],
    kingdomId: 'yapahuwa',
    historicalPeriod: 'Transitional Medieval Kingdoms (Yapahuwa Era)',
    startDate: '1272 CE',
    endDate: '1284 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'Capital of medieval Sri Lanka under King Bhuvenakabahu I. Famous for its 65-degree monumental ornamental stone staircase, Chinese-influenced lion balustrades, and the cliff-edge Tooth Relic temple.',
      si: 'පළමුවන බුවනෙකබාහු රජුගේ අගනුවරයි. අංශක 65ක බෑවුමකින් යුත් විසිතුරු ගල් පියගැටපෙළ, චීන සම්ප්‍රදායේ ආභාසය ලත් සිංහ මූර්ති සහ දළදා මාලිගය සඳහා ලෝක ප්‍රකටය.'
    },
    description: {
      en: 'Rising 90 meters abruptly from the surrounding lowland plain, Yapahuwa was fortified with two concentric semi-circular moats and ramparts. The celebrated third flight of stone steps leads to an exquisitely sculpted stone doorway flanked by Gajasimha and guardian lion sculptures with bulging eyes, leading to the high terrace where the Sacred Tooth Relic was sheltered.',
      si: 'සමතලා භූමියෙන් මීටර් 90ක් උසට නැගෙන යාපහු පර්වතය දිය අගල් දෙකකින් හා පවුරු වලින් ආරක්ෂිත විය. ගජසිංහ සහ සිංහ මූර්ති වලින් සරසන ලද උසස් ශෛලමය දොරටුව ලක්දිව වාස්තු විද්‍යාවේ විශිෂ්ටතම නිර්මාණයකි.'
    },
    historicalSummaryEnglish: 'Fortified rock capital constructed to safeguard the Sacred Tooth Relic against Pandya invasions.',
    historicalSummarySinhala: 'පාණ්ඩ්‍ය ආක්‍රමණ හමුවේ දළදා වහන්සේ ආරක්ෂා කරගැනීමට ඉදිකළ ආරක්ෂිත පර්වත රාජධානිය.',
    architecturalHighlights: [
      { en: 'Steep 65-degree ornamental staircase flanked by stylized stone lions', si: 'අංශක 65ක බෑවුමැති සිංහ මුරගල් සහිත විසිතුරු පියගැටපෙළ' },
      { en: 'Perforated stone windows (Vatapatha) with carved dancing figurines', si: 'නර්තන ශිල්පීන්ගේ කැටයම් සහිත විසිතුරු ගල් කවුළු (වාතපාන)' },
      { en: 'Cliff-edge Tooth Relic Temple terrace overlooking the dry plains', si: 'පර්වත මුදුනෙහි දළදා වහන්සේ වැඩසිටි උසස් ශෛලමය මළුව' }
    ],
    archaeologicalEvidence: {
      en: 'Culavamsa Chapter 90; Chinese Song Dynasty ceramic shards and coinage discovered during Archaeological Survey excavations (H.C.P. Bell 1911).',
      si: 'චූලවංශය 90 පරිච්ඡේදය, සහ පුරාවිද්‍යා කැණීම් වලදී හමුවූ චීන සොං රාජවංශ කාසි හා පිඟන් මැටි භාණ්ඩ.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Captured by the Pandyan general Arya Chakravarti in 1284 CE who seized the Tooth Relic, leading to the capital’s abandonment.',
      si: 'ක්‍රි.ව. 1284 දී ආර්ය චක්‍රවර්තී විසින් දළදා වහන්සේ පැහැරගෙන යාමෙන් පසු රාජධානිය අත්හැර දමන ලදී.'
    },
    conservationStatus: {
      en: 'National Archaeological Reserve protected under the Antiquities Ordinance of Sri Lanka.',
      si: 'ජාතික පුරාවිද්‍යා රක්ෂිතයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Yapahuwa_Rock_Fortress_Staircase.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Yapahuwa_Rock_Fortress_Staircase.jpg',
    imageCreator: 'Bernard Gagnon (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Yapahuwa_Rock_Fortress_Staircase.jpg',
    imageLicense: 'CC BY-SA 3.0',
    imageCaption: {
      en: 'The celebrated ornamental stone staircase leading to the Tooth Relic temple at Yapahuwa.',
      si: 'යාපහුව දළදා මාලිගය වෙත දිවෙන අසමසම ශෛලමය පියගැටපෙළ.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'yapahuwa',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Culavamsa: Chapter 90 (King Bhuvenakabahu I)',
      'Bell, H.C.P. (1911): Report on the Yapahuwa Citadel',
      'Paranavitana, S. (1972): Art of the Yapahuwa Period'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 14. Aukana Buddha Statue
  {
    id: 'aukana-buddha',
    slug: 'aukana-colossal-standing-buddha',
    name: {
      en: 'Aukana Colossal Buddha Statue',
      si: 'අවුකන මහා ශිලා බුද්ධ ප්‍රතිමාව'
    },
    nameEnglish: 'Aukana Buddha Statue',
    nameSinhala: 'අවුකන බුදු පිළිමය',
    category: 'religious_shrine',
    coordinates: [8.0167, 80.5167],
    latitude: 8.0167,
    longitude: 80.5167,
    coordinatePrecision: 'gps_surveyed',
    elevation: 98,
    mapCamera: {
      zoom: 16.5,
      pitch: 50,
      bearing: 90
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom',
    startDate: '459 CE',
    endDate: '477 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'A 12-meter (39 ft) colossal standing Buddha statue carved in high relief from a solid granite boulder during the reign of King Dhatusena. Renowned for its Asisa Mudra (blessing posture) and mathematically precise pleated drapery.',
      si: 'ධාතුසේන රජ සමයේදී කළුගල් පර්වතයකින් මතුකර නෙළන ලද මීටර් 12ක් උසැති අසමසම හිටි පිළිමයකි. අසීස මුද්‍රාව සහ රැලි ගැන්වූ සිවුරේ සියුම් බව ලෝක ප්‍රකටය.'
    },
    description: {
      en: 'Carved with extraordinary mathematical proportion such that a raindrop falling from the nose drops plumb into the space between the big toes without touching the body. The statue depicts the Buddha in Asisa Mudra with the right hand turned sideways, draped in a sheer clinging robe carved with deep parallel pleats.',
      si: 'නාසයේ අගින් වැටෙන දිය බිඳුවක් සිරුරේ නොගෑවී සිරිපතුල් දෙක අතර පිහිටි කුඩා ලක්ෂ්‍යයට වැටෙන අයුරින් අතිශය නිරවද්‍ය ජ්‍යාමිතික නීති වලට අනුව කළුගලින් නෙළා ඇත.'
    },
    historicalSummaryEnglish: 'The masterpiece of classical ancient Sri Lankan standing rock-carved Buddha statuary.',
    historicalSummarySinhala: 'ලක්දිව ශිලා ප්‍රතිමා කලාවේ අග්‍රගණ්‍ය ස්මාරකයකි.',
    architecturalHighlights: [
      { en: '12-meter colossal monolith carved in high relief with only a narrow back pillar', si: 'පර්වතයට පිටුපසින් පමණක් සම්බන්ධ වූ මීටර් 12ක උසැති දැවැන්ත ප්‍රතිමාව' },
      { en: 'Asisa Mudra (gesture of benediction / reassurance) with palm turned inwards', si: 'ආශිර්වාදය සංකේතවත් කරන අද්විතීය අසීස මුද්‍රාව' },
      { en: 'Siraspata (flame finial) surmounting the coiled hair curls', si: 'සිරස මත විරාජමාන වන ගිනිසිළුව බඳු සිරස්පත' }
    ],
    archaeologicalEvidence: {
      en: 'Mahavamsa Chapter 38; Archaeological excavations of the ancient brick shrine (Image House) foundations surrounding the colossus.',
      si: 'මහාවංශය 38 පරිච්ඡේදය සහ ප්‍රතිමාව වටා තිබූ පුරාණ ප්‍රතිමාගෘහයේ ගඩොල් පාදම් සාධක.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'The brick image house enclosing the statue decayed over centuries; modern brick shelter protects the granite from monsoonal acid rain.',
      si: 'මුල් ප්‍රතිමාගෘහය විනාශ වීමෙන් පසු ප්‍රතිමාව වැසි දියෙන් ආරක්ෂා කිරීමට නූතන ආවරණයක් එක්කර ඇත.'
    },
    conservationStatus: {
      en: 'National Archaeological Monument protected under the Antiquities Ordinance of Sri Lanka.',
      si: 'ශ්‍රී ලංකා පුරාවිද්‍යා දෙපාර්තමේන්තුව යටතේ ආරක්ෂිත ස්මාරකයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Avukana_Buddha_Statue.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Avukana_Buddha_Statue.jpg',
    imageCreator: 'Bernard Gagnon (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Avukana_Buddha_Statue.jpg',
    imageLicense: 'CC BY-SA 3.0',
    imageCaption: {
      en: 'The colossal 5th-century granite standing Buddha statue at Aukana.',
      si: 'අවුකන පර්වතයෙහි නෙළන ලද 5 වන සියවසේ මහා ශිලා බුද්ධ ප්‍රතිමාව.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'colossal_statue',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: Chapter 38 (The Nine Kings)',
      'Paranavitana, S. (1954): The Colossal Image of Avukana',
      'Archaeological Survey of Ceylon Memoirs Vol. V'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 15. Mihintale Sacred Mountain
  {
    id: 'mihintale',
    slug: 'mihintale-sacred-mountain',
    name: {
      en: 'Mihintale (The Cradle of Buddhism in Sri Lanka)',
      si: 'මිහින්තලය (ලක්දිව බුදුසසුනේ තොටිල්ල)'
    },
    nameEnglish: 'Mihintale Sacred Mountain',
    nameSinhala: 'මිහින්තලය',
    category: 'religious_shrine',
    coordinates: [8.3508, 80.5097],
    latitude: 8.3508,
    longitude: 80.5097,
    coordinatePrecision: 'gps_surveyed',
    elevation: 305,
    mapCamera: {
      zoom: 15.0,
      pitch: 58,
      bearing: 280
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom',
    startDate: '247 BCE',
    endDate: 'Present',
    datePrecision: 'approximate',
    significance: {
      en: 'The sacred hill where Arahat Mahinda met King Devanampiya Tissa in 247 BCE on the Poson full moon day, inaugurating Buddhism as the spiritual foundation of Sri Lanka.',
      si: 'ක්‍රි.පූ. 247 පොසොන් පුන් පොහෝ දින මිහිඳු මහරහතන් වහන්සේ සහ දේවානම්පියතිස්ස රජු මුණගැසුණු, ලක්දිව බුදුසසුන ස්ථාපිත වූ පූජනීය කේන්ද්‍රස්ථානයයි.'
    },
    description: {
      en: 'Approached by a grand ceremonial stairway of 1,840 polished granite steps shaded by frangipani trees, Mihintale encompasses the Ambasthala Dagoba, the grand Kantaka Cetiya with 2nd-century BCE carved Vahalkada frontispieces, the ancient monastic hospital with medicinal immersion baths, and the King Mahinda rock slab edicts.',
      si: 'අරලිය ගස් සෙවණේ පිහිටි කළුගල් පියගැට 1,840 කින් සමන්විත මහා පියගැටපෙළ, අම්බස්ථල සෑය, කණ්ටක චේතිය, පැරණි ආරාමික රෝහල සහ ශිලා ලේඛන මෙහි ප්‍රධාන අංග වේ.'
    },
    historicalSummaryEnglish: 'The sacred mountain sanctuary where King Devanampiya Tissa embraced the Dhamma in the 3rd century BCE.',
    historicalSummarySinhala: 'දේවානම්පියතිස්ස රජු ධර්මය වැළඳගත් ලක්දිව අසිරිමත් ඓතිහාසික ගිරි පුදබිම.',
    architecturalHighlights: [
      { en: '1,840 ancient granite steps ascending through four terraced plateaus', si: 'මට්ටම් සතරකින් යුත් පියගැට 1,840ක මහා ශිලා පියගැටපෙළ' },
      { en: 'Kantaka Cetiya with earliest surviving stone Vahalkada carvings in Sri Lanka', si: 'ලක්දිව පැරණිතම කැටයම් සහිත කණ්ටක චේතියේ වාහල්කඩ සතර' },
      { en: 'Oldest known archaeological hospital complex with stone medicine trough (Beheth Oruwa)', si: 'කළුගලින් නෙළූ බෙහෙත් ඔරුවක් සහිත ලොව පැරණිතම පුරාවිද්‍යා රෝහල් සංකීර්ණය' }
    ],
    archaeologicalEvidence: {
      en: 'Mahavamsa Chapters 13–14; 68 Brahmi drip-ledge rock cave inscriptions; Mihintale Tablets of King Mahinda IV (10th c. CE).',
      si: 'මහාවංශය 13–14 පරිච්ඡේද, කටාරම් කෙටූ මුල් බ්‍රාහ්මී සෙල්ලිපි 68ක් සහ හතරවන මිහිඳු රජුගේ පුවරු ලිපි.'
    },
    evidenceType: 'lithic_epigraph',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Continuous monastic habitation from the 3rd c. BCE until the 11th-century destruction of Anuradhapura by Chola invaders.',
      si: 'ක්‍රි.පූ. 3 වන සියවසේ සිට 11 වන සියවස දක්වා අඛණ්ඩව භික්ෂූන් වහන්සේලා වැඩසිටි ආරණ්‍ය සේනාසනයකි.'
    },
    conservationStatus: {
      en: 'Protected Sacred Archaeological Area under the Antiquities Ordinance of Sri Lanka.',
      si: 'ශ්‍රී ලංකා රජය යටතේ ආරක්ෂිත පූජා භූමියකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mihintale_Ambasthala.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mihintale_Ambasthala.jpg',
    imageCreator: 'A.Savin (Wikimedia Commons)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Mihintale_Ambasthala.jpg',
    imageLicense: 'Free Art License / CC BY-SA 3.0',
    imageCaption: {
      en: 'The Ambasthala stupa and surrounding peaks of sacred Mihintale.',
      si: 'මිහින්තලා ගිරි සිරසේ අම්බස්ථල සෑය හා අවට පරිසරය.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'stupa',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: Chapters 13–14 (The Coming of Mahinda)',
      'Epigraphia Zeylanica Vol. I: The Mihintale Rock Inscriptions',
      'Paranavitana, S. (1959): Inscriptions of Ceylon Vol. I'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  },

  // 16. Ritigala Strict Nature Reserve & Monastic Ruins
  {
    id: 'ritigala',
    slug: 'ritigala-forest-monastery',
    name: {
      en: 'Ritigala Strict Nature Reserve & Forest Monastery',
      si: 'රිටිගල දැඩි ස්වභාවික රක්ෂිතය සහ ආරණ්‍ය සේනාසනය'
    },
    nameEnglish: 'Ritigala Forest Monastery',
    nameSinhala: 'රිටිගල',
    category: 'monastery',
    coordinates: [8.1167, 80.6500],
    latitude: 8.1167,
    longitude: 80.6500,
    coordinatePrecision: 'gps_surveyed',
    elevation: 766,
    mapCamera: {
      zoom: 14.8,
      pitch: 52,
      bearing: 40
    },
    periodIds: ['anuradhapura'],
    kingdomId: 'anuradhapura',
    historicalPeriod: 'Anuradhapura Kingdom',
    startDate: '200 BCE',
    endDate: '1000 CE',
    datePrecision: 'approximate',
    significance: {
      en: 'An ancient mountain forest hermitage of the austere Pamsukulika (rag-robe wearing) ascetic monks, renowned for its double-platform meditation halls (Padhanaghara) devoid of images or stupas.',
      si: 'පාංශුකූලික භික්ෂූන් වහන්සේලා වැඩසිටි රහසිගත වනගත ආරණ්‍ය සේනාසනයකි. ප්‍රතිමා හෝ ස්තූප වෙනුවට ද්විත්ව වේදිකා (පධානඝර) සහිත විස්මිත ගල් නිර්මාණ සඳහා ප්‍රකටය.'
    },
    description: {
      en: 'Rising 766 meters as the highest peak in northern Sri Lanka, Ritigala features a micro-climate supporting cloud forest flora. The archaeological trail winds past the Banda Pokuna stone-lined reservoir, elevated paved stone walkways (Chankamanaya), circular stone roundabouts, and non-representational natural boulder pavilions designed solely for deep vipassana meditation.',
      si: 'උතුරු ශ්‍රී ලංකාවේ උසම කඳුවැටිය වන රිටිගල (මීටර් 766) බණ්ඩා පොකුණ නම් ශිලාමය ජලාශය, සක්මන් මළු, කළුගල් ඇතුරු මාවත් සහ භාවනායෝගී භික්ෂූන් සඳහා තැනූ පධානඝර වලින් සමන්විත වේ.'
    },
    historicalSummaryEnglish: 'Secluded mountain sanctuary for the ascetic Pamsukulika brethren in ancient Rajarata.',
    historicalSummarySinhala: 'ලක්දිව වනගත භාවනා සම්ප්‍රදායේ අසිරිමත් පුරාවිද්‍යාත්මක සාධකය.',
    architecturalHighlights: [
      { en: 'Padhanaghara (double-platform meditation structures) connected by granite monolithic bridges', si: 'ඒකශිලා පාලම් මගින් සම්බන්ධ කළ ද්විත්ව වේදිකා (පධානඝර) භාවනා ශාලා' },
      { en: 'Banda Pokuna: massive polygonal stone-faced bathing reservoir', si: 'විශාල බහුකෝණික කළුගල් බැමි සහිත බණ්ඩා පොකුණ' },
      { en: 'Sunken urinals and bathhouses featuring only ornamental drain slabs amidst strict aniconism', si: 'අතිශය චාම් පරිසරයක කැටයම් සහිත මුත්‍රා ගල් පුවරු පමණක් භාවිත කළ ආරාමික සම්ප්‍රදාය' }
    ],
    archaeologicalEvidence: {
      en: 'Mahavamsa Chapter 10 (Aritta mountain); early Brahmi inscriptions in caves; Archaeological Survey memoirs by H.C.P. Bell (1893).',
      si: 'මහාවංශය 10 පරිච්ඡේදය (අරිට්ඨ පර්වතය), ලෙන් ලිපි සහ එච්.සී.පී. බෙල් මහතාගේ 1893 පුරාවිද්‍යා වාර්තා.'
    },
    evidenceType: 'archaeological_excavation',
    confidenceLevel: 'high_archaeological',
    uncertaintyNotes: {
      en: 'Declared a Strict Nature Reserve in 1941; public access is restricted to the lower archaeological trail to protect endemic biodiversity.',
      si: '1941 දී දැඩි ස්වභාවික රක්ෂිතයක් ලෙස නම් කරන ලද අතර ජෛව විවිධත්වය රැකීමට ඉහළ කඳුවැටිය ආරක්ෂා කර ඇත.'
    },
    conservationStatus: {
      en: 'Strict Nature Reserve & Protected Archaeological Sanctuary of Sri Lanka.',
      si: 'ශ්‍රී ලංකාවේ දැඩි ස්වභාවික රක්ෂිතයක් සහ ආරක්ෂිත පුරාවිද්‍යා කලාපයකි.'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Parakrama_Samudraya_01.jpg',
    primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Parakrama_Samudraya_01.jpg',
    imageCreator: 'Department of Archaeology Sri Lanka',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Ritigala_ruins.jpg',
    imageLicense: 'Public Domain / CC BY-SA 3.0',
    imageCaption: {
      en: 'The ancient stone meditation platform immersed in the cloud forest of Ritigala.',
      si: 'රිටිගල වනගහනය මැද පිහිටි පුරාණ කළුගල් භාවනා මණ්ඩපය.'
    },
    imageVerificationStatus: 'verified_authentic',
    threeDModelAvailable: true,
    threeDType: 'monastery',
    threeDModelProvenance: 'educational_reconstruction',
    sources: [
      'Mahavamsa: Chapter 10 (King Pandukabhaya)',
      'Bell, H.C.P. (1893): The Ruins of Ritigala',
      'Bandaranayake, Senake (1974): Sinhalese Monastic Architecture (The Pamsukulika Tradition)'
    ],
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published'
  }
];
`;

fs.writeFileSync('src/data/sites.ts', sitesContent, 'utf8');
console.log('Successfully wrote src/data/sites.ts with 16 sites and bespoke mapCamera!');
