import { Kingdom } from '../lib/types';

export const KINGDOMS: Kingdom[] = [
  {
    id: 'anuradhapura',
    slug: 'anuradhapura',
    name: {
      en: 'Kingdom of Anuradhapura',
      si: 'අනුරාධපුර රාජධානිය'
    },
    periodId: 'anuradhapura',
    periodName: {
      en: 'Anuradhapura Kingdom',
      si: 'අනුරාධපුර යුගය'
    },
    startYear: -377,
    endYear: 1017,
    dateDisplay: {
      en: '377 BCE – 1017 CE',
      si: 'ක්‍රි.පූ. 377 – ක්‍රි.ව. 1017'
    },
    capitals: [
      { en: 'Anuradhapura', si: 'අනුරාධපුරය' },
      { en: 'Sigiriya (477–495 CE)', si: 'සීගිරිය' }
    ],
    overview: {
      en: 'The longest reigning civilization on the island, Anuradhapura established the core pillars of Sri Lankan culture: state patronage of Theravada Buddhism, colossal architectural stupas exceeding 100 meters in height, and the miraculous cascade irrigation technology that turned the arid dry zone into a lush agricultural breadbasket.',
      si: 'ශ්‍රී ලංකාවේ දීර්ඝතම රාජධානිය වන අනුරාධපුරය, ථෙරවාද බුදුදහම රාජ්‍ය ආගම බවට පත්කිරීම, මීටර් 100 ඉක්මවූ ලොව උසම ගඩොල් දාගැබ් නිර්මාණය සහ වියළි කලාපය සරුසාර කළ මහා වාරි තාක්ෂණය බිහිකිරීම මගින් සිංහල ශිෂ්ටාචාරයේ පදනම දැමීය.'
    },
    geography: {
      en: 'Centered on the Malwathu Oya basin in the North Central plains, extending over Rajarata, Ruhuna in the south, and Maya Rata in the southwest.',
      si: 'උතුරු මැද තැන්නෙහි මල්වතු ඔය නිම්නය කේන්ද්‍ර කරගනිමින් රජරට, දකුණේ රුහුණ සහ නිරිතදිග මායා රට දක්වා විහිදී තිබිණි.'
    },
    boundariesNote: {
      en: 'Historical territorial boundaries expanded and contracted across 14 centuries. Subordinate principalities like Ruhuna often maintained high regional autonomy.',
      si: 'වසර 1400 පුරා දේශසීමා විවිධ වෙනස්කම්වලට ලක්විය. රුහුණ වැනි ප්‍රාදේශීය පාලනයන් බොහෝවිට ස්වාධීනව පැවතුණි.'
    },
    prominentRulers: [
      { name: { en: 'Pandukabhaya', si: 'පණ්ඩුකාභය රජු' }, reign: '437–367 BCE', slug: 'pandukabhaya' },
      { name: { en: 'Devanampiya Tissa', si: 'දෙවානම්පියතිස්ස රජු' }, reign: '307–267 BCE', slug: 'devanampiya-tissa' },
      { name: { en: 'Dutugemunu (Gamani Abhaya)', si: 'දුටුගැමුණු රජු' }, reign: '161–137 BCE', slug: 'dutugemunu' },
      { name: { en: 'Valagamba (Vattagamani Abhaya)', si: 'වළගම්බා රජු' }, reign: '103 BCE, 89–77 BCE', slug: 'valagamba' },
      { name: { en: 'Mahasena', si: 'මහසෙන් රජු' }, reign: '277–304 CE', slug: 'mahasena' },
      { name: { en: 'Dhatusena', si: 'ධාතුසේන රජු' }, reign: '459–477 CE', slug: 'dhatusena' },
      { name: { en: 'Kashyapa I', si: 'පළමුවන කාශ්‍යප රජු' }, reign: '477–495 CE', slug: 'kashyapa-i' }
    ],
    majorMonuments: ['Ruwanwelisaya', 'Jetavanaramaya', 'Abhayagiriya', 'Sigiriya Citadel', 'Thuparamaya', 'Mirisawetiya'],
    archaeologicalSites: ['Anuradhapura Sacred City', 'Sigiriya Rock Fortress', 'Mihintale', 'Ritigala Monastic Reserve'],
    hydraulicWorks: ['Tissa Wewa', 'Nuwara Wewa', 'Kalawewa', 'Minneriya Wewa', 'Jaya Ganga (Yoda Ela)'],
    declineOrTransition: {
      en: 'Succumbed to prolonged South Indian Chola naval invasions in 1017 CE under Rajendra Chola I, who captured King Mahinda V, leading to the relocation of the administrative capital to Polonnaruwa.',
      si: 'ක්‍රි.ව. 1017 දී පළමුවන රාජේන්ද්‍ර චෝලගේ ආක්‍රමණයෙන් පස්වන මහින්ද රජු සිරභාරයට පත්වීමත් සමඟ අගනුවර පොළොන්නරුවට විතැන් විය.'
    },
    image: '/images/sites/ruwanwelisaya.jpg',
    imageCreator: 'Lankapic',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Ruwanwelisaya.jpg',
    imageLicense: 'CC BY 2.5',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    coordinates: [8.35, 80.40],
    sources: ['Mahavamsa (W. Geiger)', 'Epigraphia Zeylanica', 'UNESCO Inscription No. 200']
  },
  {
    id: 'polonnaruwa',
    slug: 'polonnaruwa',
    name: {
      en: 'Kingdom of Polonnaruwa',
      si: 'පොළොන්නරුව රාජධානිය'
    },
    periodId: 'polonnaruwa',
    periodName: {
      en: 'Polonnaruwa Kingdom',
      si: 'පොළොන්නරු යුගය'
    },
    startYear: 1055,
    endYear: 1232,
    dateDisplay: {
      en: '1055 CE – 1232 CE',
      si: 'ක්‍රි.ව. 1055 – ක්‍රි.ව. 1232'
    },
    capitals: [
      { en: 'Polonnaruwa (Pulathisipura)', si: 'පොළොන්නරුව (පුලතිසිපුර)' }
    ],
    overview: {
      en: 'Polonnaruwa flourished as a fortified garden metropolis and the pinnacle of medieval hydraulic engineering and stone art. Its rulers launched naval expeditions to Lower Burma (Ramanna) and southern India, and constructed the colossal inland sea known as the Parakrama Samudra.',
      si: 'පොළොන්නරුව සුරක්ෂිත උයන් නගරයක් ලෙසත්, මධ්‍යතන වාරි හා ශිලා මූර්ති කලාවේ කූටප්‍රාප්තිය ලෙසත් වැජඹිණි. බුරුමය හා දකුණු ඉන්දියාව වෙත නාවික බල ඇණි මෙහෙයවූ අතර, සයුරක් බඳු පරාක්‍රම සමුද්‍රය නිර්මාණය කරන ලද්දේ මෙහිය.'
    },
    geography: {
      en: 'Positioned strategically on the left bank of the Mahaweli River, guarding the vital river crossings into the southern and central hills.',
      si: 'මහවැලි ගං ඉවුරේ උපායමාර්ගිකව පිහිටා තිබූ අතර, මධ්‍යම කඳුකරයට හා රුහුණට පිවිසෙන ගංගා තොටුපළවල් පාලනය කළේය.'
    },
    boundariesNote: {
      en: 'Territory unified the entire island under Parakramabahu I, with deep cultural and military influence across the Indian Ocean.',
      si: 'මහා පරාක්‍රමබාහු රජු යටතේ දිවයින පුරා එක්සේසත් පාලනයක් ස්ථාපිත විය.'
    },
    prominentRulers: [
      { name: { en: 'Vijayabahu I', si: 'පළමුවන විජයබාහු රජු' }, reign: '1055–1110 CE', slug: 'vijayabahu-i' },
      { name: { en: 'Parakramabahu I (The Great)', si: 'මහා පරාක්‍රමබාහු රජු' }, reign: '1153–1186 CE', slug: 'parakramabahu-i' },
      { name: { en: 'Nissanka Malla', si: 'නිශ්ශංක මල්ල රජු' }, reign: '1187–1196 CE', slug: 'nissanka-malla' }
    ],
    majorMonuments: ['Gal Vihara Granite Sculptures', 'Polonnaruwa Vatadage', 'Rankoth Vehera', 'Royal Palace of Parakramabahu', 'Hatadage & Atadage'],
    archaeologicalSites: ['Dalada Maluwa (The Quadrangle)', 'Alahana Parivena', 'Deepa Uyana', 'Gal Vihara'],
    hydraulicWorks: ['Parakrama Samudra', 'Giritale Wewa', 'Angamedilla Anicut', 'Elahera Canal'],
    declineOrTransition: {
      en: 'Fell in 1215 CE to the destructive conquest of Kalinga Magha, prompting the royal court to retreat south-westward into defensive rocky terrains.',
      si: 'ක්‍රි.ව. 1215 දී කාලිංග මාඝගේ විනාශකාරී ආක්‍රමණය හේතුවෙන් රාජකීය සභාව නිරිතදිග ගිරිදුර්ග කරා විතැන් විය.'
    },
    image: '/images/sites/polonnaruwa-vatadage.jpg',
    imageCreator: 'Simon Frost',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Polonnaruwa_Vatadage.jpg',
    imageLicense: 'CC BY-SA 2.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    coordinates: [7.94, 81.00],
    sources: ['Culavamsa Part I & II', 'Central Cultural Fund Polonnaruwa Guide', 'UNESCO Inscription No. 201']
  },
  {
    id: 'dambadeniya-yapahuwa',
    slug: 'dambadeniya-yapahuwa',
    name: {
      en: 'Kingdoms of Dambadeniya & Yapahuwa',
      si: 'දඹදෙණිය සහ යාපහුව රාජධානි'
    },
    periodId: 'transitional-medieval',
    periodName: {
      en: 'Transitional Medieval Period',
      si: 'මධ්‍යතන සංක්‍රාන්ති යුගය'
    },
    startYear: 1232,
    endYear: 1293,
    dateDisplay: {
      en: '1232 CE – 1293 CE',
      si: 'ක්‍රි.ව. 1232 – ක්‍රි.ව. 1293'
    },
    capitals: [
      { en: 'Dambadeniya', si: 'දඹදෙණිය' },
      { en: 'Yapahuwa', si: 'යාපහුව' }
    ],
    overview: {
      en: 'Built atop forbidding granite rocks, Dambadeniya and Yapahuwa safeguarded the Sacred Tooth Relic against foreign onslaughts. Yapahuwa features one of South Asia’s most dramatic ceremonial staircases adorned with stylized guardian lions and stone friezes.',
      si: 'උස් කළුගල් පර්වත මස්තකයේ ඉදිවූ දඹදෙණිය සහ යාපහුව, විදේශ ආක්‍රමණ හමුවේ දන්ත ධාතූන් වහන්සේ ආරක්ෂා කළහ. යාපහුවේ පිහිටි දර්ශනීය ශිලා පියගැටපෙළ හා සිංහ රූප ආසියාවේ විශිෂ්ටතම නිර්මාණයකි.'
    },
    geography: {
      en: 'North-Western Province (Wayamba), in the rugged terrain between Kurunegala and Maho.',
      si: 'වයඹ පළාතේ කුරුණෑගල හා මාහෝ අතර පිහිටි ආරක්ෂිත පර්වත භූමිය.'
    },
    boundariesNote: {
      en: 'Territory covered southwestern lowlands and intermediate hill country, with the northern dry zone fragmented under petty chieftains (Vanniyars).',
      si: 'නිරිතදිග තැනිතලාව හා කඳුකර බෑවුම් ආවරණය කළ අතර, උතුරු වියළි කලාපය වන්නිවරුන්ගේ පාලනයට නතුව තිබිණි.'
    },
    prominentRulers: [
      { name: { en: 'Vijayabahu III', si: 'තුන්වන විජයබාහු රජු' }, reign: '1232–1236 CE', slug: 'vijayabahu-iii' },
      { name: { en: 'Parakramabahu II (Panditha Parakramabahu)', si: 'දෙවන පරාක්‍රමබාහු රජු' }, reign: '1236–1270 CE', slug: 'parakramabahu-ii' },
      { name: { en: 'Bhuvanekabahu I', si: 'පළමුවන බුවනෙකබාහු රජු' }, reign: '1272–1284 CE', slug: 'bhuvanekabahu-i' }
    ],
    majorMonuments: ['Yapahuwa Lion Staircase', 'Dambadeniya Rock Fortress', 'Vijayasundararamaya Temple'],
    archaeologicalSites: ['Yapahuwa Archaeological Reserve', 'Dambadeniya Citadel Rock'],
    hydraulicWorks: ['Local tank cascades and rock cisterns'],
    declineOrTransition: {
      en: 'A Pandyan invasion led by Arya Chakravarti captured Yapahuwa and seized the Tooth Relic, later recovered by King Parakramabahu III who shifted to Kurunegala.',
      si: 'පාණ්ඩ්‍ය ආර්ය චක්‍රවර්තීගේ ආක්‍රමණයෙන් දළදා වහන්සේ පැහැරගනු ලැබූ අතර, පසුව තුන්වන පරාක්‍රමබාහු රජු විසින් එය යළි ලබාගෙන කුරුණෑගලට වැඩම කරවන ලදී.'
    },
    image: '/images/sites/yapahuwa.jpg',
    imageCreator: 'Badrajith Kumara',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Yapahuwa.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    coordinates: [7.81, 80.31],
    sources: ['Culavamsa II', 'Paranavitana, S. Art and Architecture of Ceylon', 'Archaeological Survey of Ceylon']
  },
  {
    id: 'kotte',
    slug: 'kotte',
    name: {
      en: 'Kingdom of Kotte (Sri Jayawardanapura)',
      si: 'කෝට්ටේ රාජධානිය (ශ්‍රී ජයවර්ධනපුර)'
    },
    periodId: 'kotte',
    periodName: {
      en: 'Kingdom of Kotte',
      si: 'කෝට්ටේ යුගය'
    },
    startYear: 1412,
    endYear: 1597,
    dateDisplay: {
      en: '1412 CE – 1597 CE',
      si: 'ක්‍රි.ව. 1412 – ක්‍රි.ව. 1597'
    },
    capitals: [
      { en: 'Sri Jayawardanapura Kotte', si: 'ශ්‍රී ජයවර්ධනපුර කෝට්ටේ' }
    ],
    overview: {
      en: 'A prosperous maritime realm surrounded by natural marsh moats and laterite walls. King Parakramabahu VI subdued the northern kingdom of Jaffna and unified the entire island. This era nurtured the golden age of classical Sinhala Sandeshaya (messenger) poetry, notably Salalihini Sandeshaya composed by Ven. Totagamuwe Sri Rahula Thera.',
      si: 'දිය අගල් හා කබොක් පවුරු වලින් වටවූ සමෘද්ධිමත් රාජධානියකි. හයවන පරාක්‍රමබාහු රජු යාපනය ද අත්පත් කරගනිමින් මුළු ලංකාවම එක්සේසත් කළේය. තොටගමුවේ ශ්‍රී රාහුල හිමියන්ගේ සැළලිහිණි සන්දේශය වැනි අමරණීය කාව්‍ය බිහිවූයේ මෙම මහා සාහිත්‍ය පුනරුදයේදීය.'
    },
    geography: {
      en: 'Western coastal plains bounded by the Diyawanna Oya marshes and Kelani River mouth, with direct access to maritime ports at Colombo and Beruwala.',
      si: 'දියවන්නා ඔය සහ කැලණි ගං මෝය අතර බටහිර වෙරළබඩ තැනිතලාව, කොළඹ හා බේරුවල වරායන් පාලනය කළේය.'
    },
    boundariesNote: {
      en: 'Under Parakramabahu VI, sovereign tributary allegiance covered the whole island from Dondra to Jaffna. After 1521, fragmented into Kotte, Sitawaka, and Raigama.',
      si: 'හයවන පරාක්‍රමබාහු රජු යටතේ දෙවුන්දර සිට යාපනය දක්වා මුළු රටම පාලනය විය. 1521 දී විජයබා කොල්ලයෙන් පසු කෝට්ටේ, සීතාවක සහ රයිගම ලෙස බෙදී ගියේය.'
    },
    prominentRulers: [
      { name: { en: 'Parakramabahu VI', si: 'හයවන පරාක්‍රමබාහු රජු' }, reign: '1412–1467 CE', slug: 'parakramabahu-vi' },
      { name: { en: 'Bhuvanekabahu VII', si: 'හත්වන බුවනෙකබාහු රජු' }, reign: '1521–1551 CE', slug: 'bhuvanekabahu-vii' },
      { name: { en: 'Don Juan Dharmapala', si: 'දොන් ජුවන් ධර්මපාල' }, reign: '1551–1597 CE', slug: 'dharmapala' }
    ],
    majorMonuments: ['Royal Palace of Kotte (Rampart remains)', 'Kelaniya Raja Maha Vihara', 'Sunethradevi Pirivena'],
    archaeologicalSites: ['Kotte Rampart Bastion', 'Alakeshwara Archaeological Tomb', 'Kelaniya Riverside Temple'],
    hydraulicWorks: ['Diyawanna Oya defensive canals and Kolonnawa waterway moats'],
    declineOrTransition: {
      en: 'Don Juan Dharmapala converted to Catholicism and bequeathed the kingdom to King Philip I of Portugal upon his death in 1597, ending the Kotte dynasty.',
      si: 'දොන් ජුවන් ධර්මපාල රජු කතෝලික ආගම වැළඳගෙන 1597 දී තම මරණයෙන් පසු රාජධානිය පෘතුගාලයේ පළමුවන පිලිප් රජුට තෑගි ඔප්පුවකින් පවරා දීමෙන් කෝට්ටේ රාජවංශය නිමාවිය.'
    },
    image: '/images/journeys/alakeshwara-kotte.jpg',
    imageCreator: 'Department of Archaeology / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Alakeshwara_Archaeological_Site.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    coordinates: [6.89, 79.91],
    sources: ['Salalihini Sandeshaya (Ven. Totagamuwe Sri Rahula)', 'Queyroz, Fernao de. Conquest of Ceylon', 'Somaratne, G.P.V. (1975)']
  },
  {
    id: 'kandy',
    slug: 'kandy',
    name: {
      en: 'Kingdom of Kandy (Senkadagalapura)',
      si: 'මහනුවර රාජධානිය (සෙංකඩගලපුර)'
    },
    periodId: 'kandy',
    periodName: {
      en: 'Kandyan Kingdom',
      si: 'මහනුවර යුගය'
    },
    startYear: 1592,
    endYear: 1815,
    dateDisplay: {
      en: '1592 CE – 1815 CE',
      si: 'ක්‍රි.ව. 1592 – ක්‍රි.ව. 1815'
    },
    capitals: [
      { en: 'Kandy (Senkadagala)', si: 'මහනුවර (සෙංකඩගලපුර)' }
    ],
    overview: {
      en: 'The legendary mountain sanctuary that stood unconquered against three successive European maritime empires for over two centuries. Home to the Sacred Tooth Relic at Sri Dalada Maligawa, Kandy preserved the sovereign traditions, Theravada upasampada ordination, traditional Kandyan dance, and indigenous architecture until 1815.',
      si: 'වසර දෙසියයකට වැඩි කාලයක් යුරෝපීය ආක්‍රමණ තුනක් හමුවේ නොසැලී සිටි කඳුකර අභයභූමියයි. ශ්‍රී දළදා මාලිගාවේ වැඩසිටින දන්ත ධාතූන් වහන්සේගේ ආශිර්වාදය ලබමින්, උපසම්පදාව, උඩරට නැටුම් සහ සම්ප්‍රදායික ශිල්ප කලාවන් 1815 දක්වා රැකගත්තේය.'
    },
    geography: {
      en: 'Central highlands surrounded by the Mahaweli Ganga and fortified mountain passes including Balana, Gannoruwa, and Kadugannawa.',
      si: 'මහවැලි ගංගාවෙන් වටවූ මධ්‍යම කඳුකරය, බලන, ගන්නෝරුව හා කඩුගන්නාව වැනි ස්වභාවික ගිරි කපොලු වලින් ආරක්ෂා විය.'
    },
    boundariesNote: {
      en: 'Controlled the central hill country, Uva, Sabaragamuwa, North Central, and portions of the eastern coast (Batticaloa and Trincomalee access).',
      si: 'මධ්‍යම කඳුකරය, ඌව, සබරගමුව, උතුරු මැද සහ නැගෙනහිර වෙරළේ සමහර ප්‍රදේශ පාලනය කළේය.'
    },
    prominentRulers: [
      { name: { en: 'Vimaladharmasuriya I', si: 'පළමුවන විමලධර්මසූරිය රජු' }, reign: '1592–1604 CE', slug: 'vimaladharmasuriya-i' },
      { name: { en: 'Senarat', si: 'සෙනරත් රජු' }, reign: '1604–1635 CE' },
      { name: { en: 'Rajasinghe II', si: 'දෙවන රාජසිංහ රජු' }, reign: '1635–1687 CE', slug: 'rajasinghe-ii' },
      { name: { en: 'Kirti Sri Rajasinha', si: 'කීර්ති ශ්‍රී රාජසිංහ රජු' }, reign: '1747–1782 CE', slug: 'kirti-sri-rajasinha' },
      { name: { en: 'Sri Vikrama Rajasinha', si: 'ශ්‍රී වික්‍රම රාජසිංහ රජු' }, reign: '1798–1815 CE', slug: 'sri-vikrama-rajasinha' }
    ],
    majorMonuments: ['Temple of the Sacred Tooth Relic', 'Kandy Lake (Kiri Muhuda)', 'Embekke Devalaya Wood Carvings', 'Lankatilaka Vihara', 'Gadaladeniya'],
    archaeologicalSites: ['Senkadagala Sacred Complex', 'Balana Military Watchpost', 'Gannoruwa Battlefield'],
    hydraulicWorks: ['Kandy Lake (constructed by Sri Vikrama Rajasinha)', 'Dunumadalawa Water Reserve'],
    declineOrTransition: {
      en: 'Internal political dissent between the King and Kandyan chieftains led to the signing of the Kandyan Convention on March 2, 1815, ceding sovereignty to the British Crown.',
      si: 'රජු සහ උඩරට ප්‍රධානීන් අතර ඇතිවූ දේශපාලන අසමගිය නිසා 1815 මාර්තු 2 වන දින උඩරට ගිවිසුම අත්සන් කරමින් බ්‍රිතාන්‍ය කිරීටයට පාලනය පැවරිණි.'
    },
    image: '/images/sites/temple-of-the-tooth.jpg',
    imageCreator: 'A.Savin',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:SL_Kandy_asv2020-01_img34_Sacred_Tooth_Temple.jpg',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-24',
    publicationStatus: 'published',
    coordinates: [7.29, 80.64],
    sources: ['Knox, Robert (1681). Historical Relation of Ceylon', 'D’Oyly, John. A Sketch of the Constitution of the Kandyan Kingdom', 'UNESCO Inscription No. 450']
  }
];
