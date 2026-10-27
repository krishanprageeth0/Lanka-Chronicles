import { HistoricalPeriod } from '../lib/types';

export const HISTORICAL_PERIODS: HistoricalPeriod[] = [
  {
    id: 'prehistoric',
    slug: 'prehistoric-sri-lanka',
    name: {
      en: 'Prehistoric & Mesolithic Period',
      si: 'ප්‍රාග් ඓතිහාසික හා මධ්‍යශිලා යුගය'
    },
    startYear: -38000,
    endYear: -1000,
    dateDisplay: {
      en: 'c. 38,000 BCE – 1,000 BCE',
      si: 'ක්‍රි.පූ. 38,000 – ක්‍රි.පූ. 1,000'
    },
    isBCE: true,
    datePrecision: 'approximate',
    tagline: {
      en: 'The era of Balangoda Man and early cave habitations',
      si: 'බලංගොඩ මානවයා සහ මුල් ලෙන් වාසස්ථාන පැවති යුගය'
    },
    overview: {
      en: 'Excavations in caves like Fa-Hien Lena, Batadombalena, and Ravana Ella demonstrate human presence dating back to at least 38,000 years ago. These anatomically modern hunter-gatherers, known as Balangoda Man (Homo sapiens balangodensis), utilized microlithic quartz tools, practiced ritual burial with red ochre, and gathered wild rainforest grains.',
      si: 'පාහියංගල, බටදොඹලෙන සහ රාවණා ඇල්ල වැනි ලෙන් කැණීම් මගින් වසර 38,000 කට වඩා පැරණි මානව සාධක හමුවේ. බලංගොඩ මානවයා ලෙස හැඳින්වෙන මෙම දඩයම්-එක්රැස්කරන්නෝ ක්ෂුද්‍ර ශිලා මෙවලම්, රතු ගැඩි ආලේපිත සුසාන චාරිත්‍ර සහ වැසිවනාන්තර ශාක පරිභෝජනය කළහ.'
    },
    politicalCenters: [
      { en: 'Fa-Hien Lena (Kalutara)', si: 'පාහියන්ගල ලෙන (කළුතර)' },
      { en: 'Batadombalena (Kuruwita)', si: 'බටදොඹලෙන (කුරුවිට)' },
      { en: 'Bellanbandi Palassa', si: 'බෙල්ලන්බැඳි පැලැස්ස' }
    ],
    keyRulers: [],
    keySites: ['fa-hien-lena', 'batadombalena'],
    keyEvents: ['prehistoric-settlements'],
    significance: {
      en: 'Earliest evidence of geometric microliths in South Asia and early coastal shell bead ornaments.',
      si: 'දකුණු ආසියාවේ ජ්‍යාමිතික ක්ෂුද්‍ර ශිලා මෙවලම් සහ මුහුදු බෙල්ලන් පළඳනා පිළිබඳ පැරණිතම සාධක.'
    },
    color: '#8c887e',
    image: '/images/periods/batadombalena.jpg',
    imageCreator: 'Department of Archaeology / Wikimedia Contributor',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Batadombalena.JPG',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Deraniyagala, S.U. (1992). The Prehistory of Sri Lanka.', 'Dept. of Archaeology Sri Lanka']
  },
  {
    id: 'protohistoric',
    slug: 'protohistoric-early-iron-age',
    name: {
      en: 'Protohistoric & Early Iron Age',
      si: 'මූල ඓතිහාසික හා මුල් යකඩ යුගය'
    },
    startYear: -1000,
    endYear: -543,
    dateDisplay: {
      en: 'c. 1,000 BCE – 543 BCE',
      si: 'ක්‍රි.පූ. 1,000 – ක්‍රි.පූ. 543'
    },
    isBCE: true,
    datePrecision: 'approximate',
    tagline: {
      en: 'Megalithic urn burials, horse remains, and copper smelting',
      si: 'මහා ශිලා සුසාන, අශ්ව ඇටසැකිලි හා තඹ-යකඩ ලෝහ තාක්ෂණයේ ආරම්භය'
    },
    overview: {
      en: 'The transition to agriculture, pottery, and iron metallurgy. Sites such as Ibbankatuwa Megalithic Burial Site show sophisticated stone cist tombs containing carnelian and onyx beads, black-and-red ware pottery, and early clan symbols.',
      si: 'කෘෂිකර්මාන්තය, මැටි බඳුන් හා යකඩ ලෝහ තාක්ෂණයේ වර්ධනය. ඉබ්බන්කටුව සුසාන භූමිය වැනි ස්ථානවලින් කානීලියන් සහ අගස්ති පබළු සහිත ගල් පෙට්ටි සොහොන්, කළු හා රතු මැටි බඳුන් හමුවී ඇත.'
    },
    politicalCenters: [
      { en: 'Ibbankatuwa (Dambulla)', si: 'ඉබ්බන්කටුව (දඹුල්ල)' },
      { en: 'Anuradhapura Citadel Basal Layers', si: 'අනුරාධපුර ඇතුළුනුවර පාදම' }
    ],
    keyRulers: [],
    keySites: ['ibbankatuwa'],
    keyEvents: ['iron-age-metallurgy'],
    significance: {
      en: 'Emergence of early urban settlements and trade networks with mainland Asia.',
      si: 'මුල් නාගරික ජනාවාස හා ආසියානු මුහුදු වෙළෙඳ සබඳතා බිහිවීම.'
    },
    color: '#b47347',
    image: '/images/periods/ibbankatuwa.jpg',
    imageCreator: 'Wikimedia Contributor',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Ibbankatuwa_Megalithic_burial.jpg',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Seneviratne, S. (1984). The Archaeology of the Megalithic-Black and Red Ware Complex.', 'Central Cultural Fund']
  },
  {
    id: 'anuradhapura',
    slug: 'anuradhapura-kingdom',
    name: {
      en: 'Anuradhapura Kingdom',
      si: 'අනුරාධපුර රාජධානිය'
    },
    startYear: -377,
    endYear: 1017,
    dateDisplay: {
      en: '377 BCE – 1017 CE',
      si: 'ක්‍රි.පූ. 377 – ක්‍රි.ව. 1017'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'The golden cradle of Theravada Buddhism, colossal stupas, and hydraulic engineering',
      si: 'ථෙරවාද බුදුදහමේ මහා කේන්ද්‍රය, යෝධ දාගැබ් සහ විශ්මිත වාරි ශිෂ්ටාචාරය'
    },
    overview: {
      en: 'Founded by King Pandukabhaya and lasting nearly 1,400 years, Anuradhapura was one of Asia’s greatest metropolis cities. It witnessed the introduction of Buddhism by Arahant Mahinda, planting of the sacred Jaya Sri Maha Bodhi, construction of world-record architectural wonders like Jetavanaramaya and Ruwanwelisaya, and the world’s most sophisticated gravity-fed reservoir network.',
      si: 'පණ්ඩුකාභය රජු විසින් ආරම්භ කර වසර 1,400 කට ආසන්න කාලයක් පැවති අනුරාධපුරය, ආසියාවේ ශ්‍රේෂ්ඨතම නගරයකි. මිහිඳු මහ රහතන් වහන්සේගේ බුදුසසුන් සම්ප්‍රාප්තිය, ශ්‍රී මහා බෝධිරෝපණය, ජේතවනාරාමය හා රුවන්වැලිසෑය වැනි ලෝක පුදුම ඉදිකිරීම් සහ ලොව විශිෂ්ටතම වාරි පද්ධතිය බිහිවූයේ මෙම යුගයේදීය.'
    },
    politicalCenters: [
      { en: 'Anuradhapura (Capital)', si: 'අනුරාධපුරය (ප්‍රධාන අගනුවර)' },
      { en: 'Mihintale (Monastic Sanctuary)', si: 'මිහින්තලය (ආරාමික අගනුවර)' },
      { en: 'Sigiriya (Royal Citadel 477–495 CE)', si: 'සීගිරිය (රාජකීය බලකොටුව)' }
    ],
    keyRulers: ['pandukabhaya', 'devanampiya-tissa', 'dutugemunu', 'valagamba', 'mahasena', 'kashyapa-i', 'dhatusena'],
    keySites: ['ruwanwelisaya', 'sri-maha-bodhi', 'jetavanaramaya', 'sigiriya', 'mihintale', 'ritigala', 'kalawewa'],
    keyEvents: ['founding-anuradhapura', 'arrival-of-mahinda', 'construction-ruwanwelisaya', 'writing-tripitaka', 'sigiriya-reign'],
    significance: {
      en: 'Cradle of classical Sinhala civilization, engineering of bisokotuwa sluice gates, and preservation of the Pali Buddhist Canon.',
      si: 'සිංහල සම්භාව්‍ය ශිෂ්ටාචාරයේ තොටිල්ල, බිසෝකොටුව නමැති සොරොව් ඉංජිනේරු විද්‍යාව සහ ත්‍රිපිටක ධර්මය ග්‍රන්ථාරූඪ කිරීම.'
    },
    color: '#c6a15b',
    image: '/images/sites/ruwanwelisaya.jpg',
    imageCreator: 'Lankapic',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Ruwanwelisaya.jpg',
    imageLicense: 'CC BY 2.5',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Mahavamsa (Geiger translation)', 'Paranavitana, S. Inscriptions of Ceylon', 'UNESCO World Heritage Dossier 200']
  },
  {
    id: 'polonnaruwa',
    slug: 'polonnaruwa-kingdom',
    name: {
      en: 'Polonnaruwa Kingdom',
      si: 'පොළොන්නරුව රාජධානිය'
    },
    startYear: 1055,
    endYear: 1232,
    dateDisplay: {
      en: '1055 CE – 1232 CE',
      si: 'ක්‍රි.ව. 1055 – ක්‍රි.ව. 1232'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'The medieval garden city of Parakramabahu and granite masterpiece sculptures',
      si: 'පරාක්‍රමබාහු රජුගේ උයන් නගරය, මහා පරාක්‍රම සමුද්‍රය සහ ගල් විහාර කළුගල් ප්‍රතිමා'
    },
    overview: {
      en: 'Liberated from Chola occupation by King Vijayabahu I and elevated into an imperial golden age under King Parakramabahu the Great. Renowned for its monumental brick architecture, the colossal Parakrama Samudra reservoir, the quadrangle of shrines (Dalada Maluwa), and the sublime rock-cut statues of Gal Vihara.',
      si: 'මහා විජයබාහු රජු විසින් චෝල ආක්‍රමණයෙන් මුදවාගෙන, මහා පරාක්‍රමබාහු රජු යටතේ ස්වර්ණමය යුගයකට එළැඹිණි. ගඩොල් ගෘහ නිර්මාණ, යෝධ පරාක්‍රම සමුද්‍රය, දළදා මළුව සහ ගල් විහාරයේ අසමසම ශෛලමය ප්‍රතිමා මෙහි උරුමයයි.'
    },
    politicalCenters: [
      { en: 'Polonnaruwa (Pulathisipura)', si: 'පොළොන්නරුව (පුලතිසිපුර)' }
    ],
    keyRulers: ['vijayabahu-i', 'parakramabahu-i', 'nissanka-malla'],
    keySites: ['gal-vihara', 'vatadage-polonnaruwa', 'parakrama-samudra', 'rankoth-vehera'],
    keyEvents: ['liberation-polonnaruwa', 'unification-under-parakramabahu', 'construction-parakrama-samudra'],
    significance: {
      en: 'Pinnacle of medieval Buddhist sculpture, royal diplomacy with Burma and Cambodia, and grand water management.',
      si: 'මධ්‍යතන බෞද්ධ මූර්ති ශිල්පයේ උච්චතම අවස්ථාව, බුරුමය හා කාම්බෝජය සමඟ රාජ්‍ය තාන්ත්‍රික සබඳතා සහ ජල කළමනාකරණය.'
    },
    color: '#dfbd75',
    image: '/images/sites/polonnaruwa-vatadage.jpg',
    imageCreator: 'Simon Frost',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Polonnaruwa_Vatadage.jpg',
    imageLicense: 'CC BY-SA 2.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Culavamsa', 'Central Cultural Fund Polonnaruwa Monographs', 'Archaeological Survey of Ceylon']
  },
  {
    id: 'transitional-medieval',
    slug: 'dambadeniya-yapahuwa-gampola',
    name: {
      en: 'Dambadeniya, Yapahuwa & Gampola Kingdoms',
      si: 'දඹදෙණිය, යාපහුව සහ ගම්පොළ යුගය'
    },
    startYear: 1232,
    endYear: 1412,
    dateDisplay: {
      en: '1232 CE – 1412 CE',
      si: 'ක්‍රි.ව. 1232 – ක්‍රි.ව. 1412'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'Rock fortresses, safeguarding the Sacred Tooth Relic, and flourishing Sinhala literature',
      si: 'ශෛලමය ගිරිදුර්ග, දළදා සමිඳුන් ආරක්ෂා කිරීම සහ සම්භාව්‍ය සිංහල සාහිත්‍යයේ පුනරුදය'
    },
    overview: {
      en: 'Following the devastating invasion of Kalinga Magha, the seat of royalty moved south-westward to defensive rock formations. King Vijayabahu III established Dambadeniya, followed by King Bhuvanekabahu I building the magnificent ornamental staircase citadel at Yapahuwa, and later mountain realms at Kurunegala and Gampola.',
      si: 'කාලිංග මාඝගේ ආක්‍රමණයෙන් පසු රාජ්‍ය කේන්ද්‍රය නිරිතදිග ගිරිදුර්ග කරා විතැන් විය. දඹදෙණිය, යාපහුව සහ අනතුරුව ගම්පොළ හා කුරුණෑගල රාජධානි පිහිටුවමින් දළදා වහන්සේ රැකගනිමින් සාහිත්‍ය ප්‍රබෝධයක් ඇති කරන ලදී.'
    },
    politicalCenters: [
      { en: 'Dambadeniya', si: 'දඹදෙණිය' },
      { en: 'Yapahuwa', si: 'යාපහුව' },
      { en: 'Kurunegala (Hastishailapura)', si: 'කුරුණෑගල (හස්තිශෛලපුර)' },
      { en: 'Gampola (Gangasiripura)', si: 'ගම්පොළ (ගඟසිරිපුර)' }
    ],
    keyRulers: ['vijayabahu-iii', 'parakramabahu-ii', 'bhuvanekabahu-i'],
    keySites: ['yapahuwa-fortress', 'dambadeniya-rock', 'lankatilaka-gampola', 'gadaladeniya'],
    keyEvents: ['relocation-to-dambadeniya', 'construction-yapahuwa-staircase'],
    significance: {
      en: 'Era of exquisite literary works (Kavsilumina, Pujavaliya) and Indo-Sinhala fusion stone architecture.',
      si: 'කව්සිළුමිණ, පූජාවලිය වැනි මහා සාහිත්‍ය කෘති සහ ඉන්දු-සිංහල සම්මිශ්‍රිත ශිලා වාස්තු විද්‍යාව.'
    },
    color: '#9e7d3b',
    image: '/images/sites/yapahuwa.jpg',
    imageCreator: 'Badrajith Kumara',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Yapahuwa.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Culavamsa II', 'University of Ceylon History of Ceylon Vol. II']
  },
  {
    id: 'kotte',
    slug: 'kotte-kingdom',
    name: {
      en: 'Kingdom of Kotte',
      si: 'කෝට්ටේ රාජධානිය'
    },
    startYear: 1412,
    endYear: 1597,
    dateDisplay: {
      en: '1412 CE – 1597 CE',
      si: 'ක්‍රි.ව. 1412 – ක්‍රි.ව. 1597'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'The last sovereign unification of Lanka, golden age of Sandeshaya poetry, and the arrival of European fleets',
      si: 'මුළු ලංකාවම එක්සේසත් කළ අවසන් යුගය, සන්දේශ කාව්‍යයේ ස්වර්ණමය යුගය සහ පෘතුගීසි පැමිණීම'
    },
    overview: {
      en: 'Under King Parakramabahu VI (1412–1467), the entire island was united under a single crown for the last time before colonial rule. Kotte became a vibrant center of erudition, poetry, and arts, producing the famed Sandeshaya (messenger poem) classics like Salalihini Sandeshaya by Totagamuwe Sri Rahula Thera. The era ended in tragic fragmentation with the arrival of Portuguese caravels in 1505 and the division of the realm (Vijayaba Kollaya).',
      si: 'හයවන පරාක්‍රමබාහු රජු (1412–1467) යටතේ සමස්ත ලංකාවම අවසන් වරට එක්සේසත් විය. තොටගමුවේ ශ්‍රී රාහුල හිමියන්ගේ සැළලිහිණි සන්දේශය ඇතුළු විශිෂ්ට කාව්‍ය බිහිවූයේ මෙම යුගයේදීය. 1505 පෘතුගීසි පැමිණීම සහ විජයබා කොල්ලයත් සමඟ රාජධානිය වියවුල් විය.'
    },
    politicalCenters: [
      { en: 'Sri Jayawardanapura Kotte', si: 'ශ්‍රී ජයවර්ධනපුර කෝට්ටේ' },
      { en: 'Kelaniya Raja Maha Vihara', si: 'කැළණිය රජ මහා විහාරය' }
    ],
    keyRulers: ['parakramabahu-vi', 'bhuvanekabahu-vii', 'dharmapala'],
    keySites: ['kotte-palace-moat', 'kelaniya-vihara'],
    keyEvents: ['unification-under-parakramabahu-vi', 'composition-salalihini-sandeshaya', 'arrival-of-portuguese-1505', 'vijayaba-kollaya-1521'],
    significance: {
      en: 'Setting of the beloved Salalihini Sandeshaya poetic journey and the beginning of European colonial contact.',
      si: 'සැළලිහිණි සන්දේශ කාව්‍ය ගමනේ ඓතිහාසික පසුබිම සහ යුරෝපීය යටත්විජිත බලපෑමේ ආරම්භය.'
    },
    color: '#754238',
    image: '/images/journeys/alakeshwara-kotte.jpg',
    imageCreator: 'Chamila500',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kelaniya_Raja_Maha_Vihara.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Queyroz, Fernao de. The Temporal and Spiritual Conquest of Ceylon', 'Somaratne, G.P.V. Political History of Kotte']
  },
  {
    id: 'sitawaka',
    slug: 'sitawaka-kingdom',
    name: {
      en: 'Kingdom of Sitawaka',
      si: 'සීතාවක රාජධානිය'
    },
    startYear: 1521,
    endYear: 1594,
    dateDisplay: {
      en: '1521 CE – 1594 CE',
      si: 'ක්‍රි.ව. 1521 – ක්‍රි.ව. 1594'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'Fierce military resistance against Portuguese colonial conquest',
      si: 'පෘතුගීසි ආක්‍රමණිකයන්ට එරෙහිව නැගී සිටි අභීත යුධමය ප්‍රතිරෝධය'
    },
    overview: {
      en: 'Led by King Mayadunne and his fearless warrior son King Rajasinha I (Tikiri Bandara), Sitawaka pushed Portuguese invaders back to the walls of Colombo Fort. Winning legendary triumphs such as the Battle of Mulleriyawa (1559), Sitawaka remains a potent symbol of indigenous military valor.',
      si: 'මායාදුන්නේ රජු සහ ඔහුගේ රණශූර පුත් පළමුවන රාජසිංහ (ටිකිරි බණ්ඩාර) රජුගේ නායකත්වයෙන් පෘතුගීසීන් කොළඹ කොටුවටම සීමා කරමින් මුල්ලේරියා සටන (1559) වැනි වික්‍රමයන් සිදු කළ අභිමානවත් යුගයකි.'
    },
    politicalCenters: [
      { en: 'Sitawaka (Avissawella)', si: 'සීතාවක (අවිස්සාවේල්ල)' }
    ],
    keyRulers: ['mayadunne', 'rajasinha-i'],
    keySites: ['berendi-kovil', 'maniyangama-raja-maha-vihara'],
    keyEvents: ['battle-of-mulleriyawa-1559', 'siege-of-colombo'],
    significance: {
      en: 'Mastery of local cannon foundry, river-based naval warfare, and siege logistics against European gunpowder empires.',
      si: 'දේශීය කාලතුවක්කු නිෂ්පාදනය, ගංගාබද නාවික සටන් සහ යුරෝපීය බලවේගයන්ට එරෙහි යුධ උපායමාර්ග.'
    },
    color: '#945347',
    image: '/images/periods/mulleriyawa.png',
    imageCreator: 'Historical Cartography Archive',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Mulleriyawa_-_1559_Troop_Disposition.png',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Rajavaliya', 'Silva, C.R. de. The Portuguese in Ceylon 1617-1638']
  },
  {
    id: 'kandy',
    slug: 'kandyan-kingdom',
    name: {
      en: 'Kandyan Kingdom (Senkadagala)',
      si: 'මහනුවර රාජධානිය (සෙංකඩගල)'
    },
    startYear: 1592,
    endYear: 1815,
    dateDisplay: {
      en: '1592 CE – 1815 CE',
      si: 'ක්‍රි.ව. 1592 – ක්‍රි.ව. 1815'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'The unconquered mountain bastion of the Sacred Tooth Relic for over 220 years',
      si: 'වසර 220කට අධික කාලයක් විදේශ ආක්‍රමණ මැද දළදා සමිඳුන් සුරැකි නොබිඳුණු කඳුකර රාජධානිය'
    },
    overview: {
      en: 'Nestled in the central highlands, Senkadagalapura resisted Portuguese, Dutch, and early British invasions through masterly guerrilla warfare and impassable mountain passes (Balana Pass). Founded by Vimaladharmasuriya I, it preserved Theravada monastic lineages (Upasampada revival under Ven. Velivita Saranankara) and traditional Kandyan arts until its fall with the 1815 Kandyan Convention.',
      si: 'මධ්‍යම කඳුකරයේ පිහිටි සෙංකඩගලපුරය, බලන කපොල්ල වැනි ස්වභාවික ආරක්ෂක ස්ථාන හා ගරිල්ලා උපක්‍රම උපයෝගී කරගනිමින් විදේශ ආක්‍රමණිකයන්ට යටත් නොවී පැවතුණි. පළමුවන විමලධර්මසූරිය රජු විසින් ආරම්භ කර 1815 උඩරට ගිවිසුම තෙක් බෞද්ධ උරුමය හා කලාව සුරැකිණි.'
    },
    politicalCenters: [
      { en: 'Kandy (Senkadagala)', si: 'මහනුවර (සෙංකඩගලපුරය)' },
      { en: 'Hanguranketha', si: 'හඟුරන්කෙත' },
      { en: 'Kundasale', si: 'කුණ්ඩසාලේ' }
    ],
    keyRulers: ['vimaladharmasuriya-i', 'rajasinghe-ii', 'kirti-sri-rajasinha', 'sri-vikrama-rajasinha'],
    keySites: ['temple-of-the-tooth', 'kandy-lake', 'embekke-devalaya', 'degaldoruwa-cave'],
    keyEvents: ['battle-of-danture-1594', 'battle-of-randeniwela-1630', 'upali-thera-upasampada-1753', 'kandyan-convention-1815'],
    significance: {
      en: 'Preservation of the Sacred Tooth Relic, Kandyan brass, wood, and ivory craftsmanship, and the Esala Perahera pageant.',
      si: 'ශ්‍රී දළදා වහන්සේ සුරැකීම, උඩරට දැව හා ලෝහ කැටයම් කලාව, සෙංකඩගල ඇසළ පෙරහැර සංස්කෘතික මංගල්‍යය.'
    },
    color: '#dfbd75',
    image: '/images/sites/temple-of-the-tooth.jpg',
    imageCreator: 'A.Savin',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:SL_Kandy_asv2020-01_img34_Sacred_Tooth_Temple.jpg',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Knox, Robert (1681). An Historical Relation of the Island Ceylon', 'Dewaraja, Lorna. The Kandyan Kingdom of Ceylon']
  },
  {
    id: 'colonial-maritime',
    slug: 'colonial-maritime-era',
    name: {
      en: 'Colonial Maritime Era (Portuguese, Dutch & British)',
      si: 'යටත්විජිත සමුද්‍රාසන්න යුගය (පෘතුගීසි, ලන්දේසි හා බ්‍රිතාන්‍ය)'
    },
    startYear: 1505,
    endYear: 1948,
    dateDisplay: {
      en: '1505 CE – 1948 CE',
      si: 'ක්‍රි.ව. 1505 – ක්‍රි.ව. 1948'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'Fortified ramparts, cinnamon spice monopoly, plantation economy, and railways',
      si: 'සාගර බලකොටු, කුරුඳු වෙළෙඳ ඒකාධිකාරය, වැවිලි ආර්ථිකය හා දුම්රිය මාර්ග බිහිවීම'
    },
    overview: {
      en: 'Spanning four centuries of European maritime presence: the Portuguese (1505–1658) seeking spices and spreading Catholicism; the Dutch VOC (1658–1796) fortifying Galle, Jaffna, and Matara with star-shaped ramparts and establishing Roman-Dutch Law; and the British (1796–1948) who captured the entire island in 1815, introducing tea and rubber plantations, railways, constitutional reform, and modern infrastructure.',
      si: 'වසර 400කට අධික යුරෝපීය ආධිපත්‍යය: කුළුබඩු සොයා පැමිණි පෘතුගීසීන් (1505–1658), ගාලු කොටුව ඇතුළු බලකොටු ඉදිකළ ලන්දේසීන් (1658–1796), සහ 1815 දී මුළු දිවයිනම යටත් කරගෙන තේ වතු, දුම්රිය හා නූතන නීති ක්‍රම හඳුන්වාදුන් බ්‍රිතාන්‍යයන් (1796–1948).'
    },
    politicalCenters: [
      { en: 'Galle Fort', si: 'ගාලු කොටුව' },
      { en: 'Colombo Fort', si: 'කොළඹ කොටුව' },
      { en: 'Jaffna Fort', si: 'යාපනය කොටුව' },
      { en: 'Trincomalee (Fort Frederick)', si: 'ත්‍රිකුණාමලය (ෆෙඩ්රික් කොටුව)' }
    ],
    keyRulers: [],
    keySites: ['galle-fort', 'jaffna-fort', 'colombo-fort-lighthouse'],
    keyEvents: ['galle-fort-construction-1663', 'great-rebellion-1818', 'matale-rebellion-1848', 'ceylon-independence-1948'],
    significance: {
      en: 'Living UNESCO World Heritage ramparts at Galle, blending of South Asian and European architecture, and rise of the independence movement.',
      si: 'ගාලු කොටුව ලෝක උරුමයක් වීම, ආසියානු හා යුරෝපීය වාස්තු විද්‍යා මුසුවීම සහ ජාතික නිදහස් සටන.'
    },
    color: '#233d31',
    image: '/images/sites/galle-fort.jpg',
    imageCreator: 'Rovin Shanila',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Galle_Fort_Lighthouse.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Brohier, R.L. (1934). Ancient Irrigation Works in Ceylon', 'De Silva, K.M. A History of Sri Lanka']
  },
  {
    id: 'modern-independence',
    slug: 'independence-contemporary-sri-lanka',
    name: {
      en: 'Independence & Contemporary Sri Lanka',
      si: 'නිදහස සහ සමකාලීන ශ්‍රී ලංකාව'
    },
    startYear: 1948,
    endYear: 2026,
    dateDisplay: {
      en: '1948 CE – Present',
      si: 'ක්‍රි.ව. 1948 – වර්තමානය'
    },
    datePrecision: 'exact',
    tagline: {
      en: 'Sovereign republic, Mahaweli development diversion, cultural heritage revival, and democratic evolution',
      si: 'ස්වෛරී ජනරජයක් වීම, මහවැලි සංවර්ධන ව්‍යාපාරය, සංස්කෘතික පුනරුදය සහ ප්‍රජාතන්ත්‍රවාදී ගමන්මග'
    },
    overview: {
      en: 'Following the restoration of national independence on 4 February 1948, Sri Lanka transitioned into a sovereign republic in 1972. The era is marked by universal free healthcare and education, the monumental Accelerated Mahaweli Development Programme reviving ancient dry zone agriculture, conservation of UNESCO archaeological sites under the Central Cultural Fund, and ongoing democratic and social transformations.',
      si: '1948 පෙබරවාරි 4 දින නිදහස දිනාගැනීමෙන් අනතුරුව 1972 දී ස්වෛරී ජනරජයක් බවට පත්විය. නොමිලේ අධ්‍යාපනය හා සෞඛ්‍යය, පුරාණ වාරි ශිෂ්ටාචාරය යළි පිබිදවූ මහවැලි සංවර්ධන යෝජනාක්‍රමය සහ මධ්‍යම සංස්කෘතික අරමුදල මගින් ලෝක උරුම සංරක්ෂණය කිරීම මෙම යුගයේ ප්‍රධාන සන්ධිස්ථාන වේ.'
    },
    politicalCenters: [
      { en: 'Colombo & Sri Jayawardenepura Kotte', si: 'කොළඹ සහ ශ්‍රී ජයවර්ධනපුර කෝට්ටේ' }
    ],
    keyRulers: [],
    keySites: ['independence-memorial-hall', 'parliament-sri-jayawardenepura'],
    keyEvents: ['ceylon-independence-1948', 'republic-constitution-1972', 'unesco-listing-1982'],
    significance: {
      en: 'Restoration of ancient heritage cities as global cultural treasures and modernization of the island.',
      si: 'ඓතිහාසික නගර ලෝක උරුමයන් ලෙස ලොව පිළිගැනීම සහ දේශයේ නූතන සංවර්ධන ගමන්මග.'
    },
    color: '#325646',
    image: '/images/periods/independence-hall.jpg',
    imageCreator: 'Mayakaru',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Colombo-independence_memory_hall1.jpg',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    sources: ['Central Cultural Fund Archaeological Reports', 'Dept. of National Archives Sri Lanka']
  }
];
