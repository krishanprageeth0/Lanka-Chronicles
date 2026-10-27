import { HistoricalFigure } from '../lib/types';

export const HISTORICAL_RULERS: HistoricalFigure[] = [
  {
    id: 'pandukabhaya',
    slug: 'pandukabhaya',
    name: {
      en: 'King Pandukabhaya',
      si: 'පණ්ඩුකාභය රජු'
    },
    epithet: {
      en: 'The Founder of Anuradhapura & Town Planning Pioneer',
      si: 'අනුරාධපුරයේ නිර්මාතෘ සහ නගර සැලසුම්කරණයේ පුරෝගාමියා'
    },
    kingdomId: 'anuradhapura',
    kingdomName: {
      en: 'Anuradhapura Kingdom',
      si: 'අනුරාධපුර රාජධානිය'
    },
    reignPeriod: {
      en: '437 BCE – 367 BCE (Traditional)',
      si: 'ක්‍රි.පූ. 437 – ක්‍රි.පූ. 367 (සම්ප්‍රදායික)'
    },
    reignStartYear: -437,
    reignEndYear: -367,
    datePrecision: 'traditional',
    biography: {
      en: 'Grandson of King Panduvasudeva and son of Princess Ummada Citta. Having survived assassination attempts by his maternal uncles in his youth, Pandukabhaya waged a tactical war with the counsel of Brahmana Pandula, unified the island, established Anuradhapura as the royal capital, and appointed village boundaries across the country.',
      si: 'උම්මාද චිත්‍රා කුමරියගේ පුත්‍රයා වූ පණ්ඩුකාභය කුමරු, තම මාමාවරුන්ගේ මරණ තර්ජන වලින් බේරී පණ්ඩුල බමුණාගේ මඟපෙන්වීමෙන් යුධ ජයග්‍රහණ ලබා ලක්දිව එක්සේසත් කර අනුරාධපුරය අගනුවර කරගත්තේය.'
    },
    achievements: [
      { en: 'Planned the city of Anuradhapura with separate quarters for merchants, ascetics, and foreigners', si: 'වෙළෙන්දන්, තාපසයන් හා විදේශිකයන් සඳහා වෙන්වූ අංශ සහිතව අනුරාධපුර නගරය සැලසුම් කිරීම' },
      { en: 'Constructed Abhaya Wewa (Basawakkulama), the earliest historically recorded reservoir', si: 'ලොව ලේඛනගත පැරණිතම වැවක් වන අභය වැව (බසවක්කුලම) ඉදිකිරීම' },
      { en: 'Established formal village administration boundaries (Gama Seema) throughout Lanka', si: 'ලංකාව පුරා ග්‍රාම සීමා නීර්ණය කර පළාත් පාලනයක් ස්ථාපිත කිරීම' }
    ],
    associatedMonuments: ['Basawakkulama (Abhaya Wewa)', 'Anuradhapura Inner Citadel Basal Layer'],
    relatedFigures: [
      { name: { en: 'Princess Ummada Citta', si: 'උම්මාද චිත්‍රා කුමරිය' }, relation: { en: 'Mother', si: 'මව' } },
      { name: { en: 'Brahmana Pandula', si: 'පණ්ඩුල බමුණා' }, relation: { en: 'Mentor', si: 'ගුරුතුමා' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/pandukabhaya.jpg',
    imageAttribution: 'Founding of the Anuradhapura Kingdom under King Pandukabhaya (437–367 BCE)',
    imageCreator: 'Department of National Archives / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Anuradhapura_Kingdom.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Mahavamsa Chapters 9-10', 'Nicholas, C.W. & Paranavitana, S. A Concise History of Ceylon']
  },
  {
    id: 'devanampiya-tissa',
    slug: 'devanampiya-tissa',
    name: {
      en: 'King Devanampiya Tissa',
      si: 'දෙවානම්පියතිස්ස රජු'
    },
    epithet: {
      en: 'Beloved of the Gods & Receiver of the Dhamma',
      si: 'දෙවියන්ට ප්‍රිය වූ සහ සම්බුදු සසුන පිළිගත් නිරිඳු'
    },
    kingdomId: 'anuradhapura',
    kingdomName: {
      en: 'Anuradhapura Kingdom',
      si: 'අනුරාධපුර රාජධානිය'
    },
    reignPeriod: {
      en: '307 BCE – 267 BCE',
      si: 'ක්‍රි.පූ. 307 – ක්‍රි.පූ. 267'
    },
    reignStartYear: -307,
    reignEndYear: -267,
    datePrecision: 'approximate',
    biography: {
      en: 'Contemporary and close ally of Emperor Ashoka the Great of Maurya India. During his reign, Ashoka’s son, Arahant Mahinda Thera, arrived at the mountain peak of Mihintale on Poson Full Moon Day, introducing Theravada Buddhism to Sri Lanka. Later, Sanghamitta Theri brought the sacred southern sapling of the Jaya Sri Maha Bodhi tree.',
      si: 'ඉන්දියාවේ ධර්මාශෝක අධිරාජ්‍යයාගේ සමකාලීනයෙකි. මිස්සක පව්වේදී (මිහින්තලයේදී) මිහිඳු මහ රහතන් වහන්සේ හමුවී බුදුදහම වැළඳගත් අතර, සංඝමිත්තා තෙරණිය විසින් ජය ශ්‍රී මහා බෝධි අංකුරය ලක්දිවට වැඩම කරවන ලද්දේ ද මෙතුමාගේ දවසය.'
    },
    achievements: [
      { en: 'Embraced Buddhism as the state religion and established the Mahavihara monastery', si: 'බුදුදහම රාජ්‍ය ආගම බවට පත්කර මහා විහාරය පිහිටුවීම' },
      { en: 'Planted the Jaya Sri Maha Bodhi at the Mahamevnawa Park (the oldest historically recorded human-planted tree on Earth)', si: 'ලොව මිනිසෙකු විසින් සිටවූ පැරණිතම ජීවමාන වෘක්ෂය වන ජය ශ්‍රී මහා බෝධීන් වහන්සේ රෝපණය කිරීම' },
      { en: 'Built Thuparamaya, the first stupa erected in Sri Lanka enshrining the collarbone relic of the Buddha', si: 'බුදුරදුන්ගේ දකුණු අකු ධාතුව නිදන් කර ලක්දිව ප්‍රථම දාගැබ වන ථූපාරාමය ඉදිකිරීම' }
    ],
    associatedMonuments: ['Mihintale Sacred Mountain', 'Jaya Sri Maha Bodhi', 'Thuparamaya Stupa', 'Tissa Wewa'],
    relatedFigures: [
      { name: { en: 'Emperor Ashoka', si: 'ධර්මාශෝක අධිරාජ්‍යයා' }, relation: { en: 'Imperial Ally', si: 'මිත්‍ර මිත්‍ර රාජ්‍ය නායකයා' } },
      { name: { en: 'Arahant Mahinda', si: 'මිහිඳු මහ රහතන් වහන්සේ' }, relation: { en: 'Spiritual Preceptor', si: 'ධර්ම ගුරුවරයා' } }
    ],
    portraitType: 'archaeological_sculpture',
    image: '/images/rulers/devanampiya-tissa.jpg',
    imageAttribution: 'Authentic historical portrait of King Devanampiya Tissa receiving the Dhamma at Mihintale',
    imageCreator: 'Department of Archaeology / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:King_Devanampiya_Tissa.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Mahavamsa Chapters 11-15', 'Dipavamsa']
  },
  {
    id: 'dutugemunu',
    slug: 'dutugemunu',
    name: {
      en: 'King Dutugemunu (Gamani Abhaya)',
      si: 'දුටුගැමුණු රජු (ගාමිණී අභය)'
    },
    epithet: {
      en: 'The Unifier of the Island & Builder of the Mahathupa',
      si: 'එක්සේසත් කළ රණශූරයා සහ රුවන්වැලි මහා සෑයේ නිර්මාතෘ'
    },
    kingdomId: 'anuradhapura',
    kingdomName: {
      en: 'Anuradhapura Kingdom',
      si: 'අනුරාධපුර රාජධානිය'
    },
    reignPeriod: {
      en: '161 BCE – 137 BCE',
      si: 'ක්‍රි.පූ. 161 – ක්‍රි.පූ. 137'
    },
    reignStartYear: -161,
    reignEndYear: -137,
    datePrecision: 'exact',
    biography: {
      en: 'Son of King Kavantissa and Queen Viharamahadevi of Ruhuna. Gamani marched his armies northwards alongside his famed Ten Giant Warriors (Dasa Maha Yodayo), defeated King Elara in fair single combat on royal elephants before the southern gate of Anuradhapura, unified Sri Lanka under one umbrella, and erected the awe-inspiring Ruwanwelisaya and the nine-storeyed Lovamahapaya brazen palace.',
      si: 'රුහුණේ කාවන්තිස්ස රජුගේ සහ විහාරමහාදේවියගේ පුත්‍රයාය. දස මහා යෝධයන්ගේ සහයෙන් උතුරට සේනා මෙහෙයවා, එළාර රජු සමඟ ඇත් සටනින් ජයගෙන මුළු ලංකාවම එක්සේසත් කළේය. රුවන්වැලිසෑය සහ නව මහල් ලෝවාමහාපාය එතුමාගේ මහා නිර්මාණයන්ය.'
    },
    achievements: [
      { en: 'Unified the three realms of Sri Lanka (Rajarata, Ruhuna, Maya Rata)', si: 'රජරට, රුහුණ හා මායා රට එක්සේසත් කිරීම' },
      { en: 'Constructed the Ruwanwelisaya (Mahathupa) enshrining one-eighth of the Buddha’s relics', si: 'සර්වඥ ධාතූන් වහන්සේලා නිදන් කර රුවන්වැලි මහා සෑය කරවීම' },
      { en: 'Built the nine-storeyed Lovamahapaya (Brazen Palace) resting on 1,600 stone pillars', si: 'ගල් කණු 1,600ක් මත පිහිටි නව මහල් ලෝවාමහාපාය කරවීම' },
      { en: 'Constructed Mirisawetiya Stupa in fulfillment of a sacred monastic pledge', si: 'මිරිසවැටිය දාගැබ ඉදිකිරීම' }
    ],
    associatedMonuments: ['Ruwanwelisaya', 'Lovamahapaya', 'Mirisawetiya Stupa'],
    relatedFigures: [
      { name: { en: 'Queen Viharamahadevi', si: 'විහාරමහා දේවිය' }, relation: { en: 'Mother', si: 'මව' } },
      { name: { en: 'King Kavantissa', si: 'කාවන්තිස්ස රජු' }, relation: { en: 'Father', si: 'පියා' } },
      { name: { en: 'Saddhatissa', si: 'සද්ධාතිස්ස රජු' }, relation: { en: 'Brother & Successor', si: 'සොහොයුරා' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/dutugemunu.jpg',
    imageAttribution: 'Authentic historical portrait of King Dutugemunu (Gamani Abhaya, 161–137 BCE)',
    imageCreator: 'National Archives of Sri Lanka / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:KING_DUTUGEMUNU_(161_BC_%E2%80%93_137_BC).JPG',
    imageLicense: 'Public Domain',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Mahavamsa Chapters 22-32', 'Rahula, Walpola. History of Buddhism in Ceylon']
  },
  {
    id: 'valagamba',
    slug: 'valagamba',
    name: {
      en: 'King Valagamba (Vattagamani Abhaya)',
      si: 'වළගම්බා රජු (වට්ටගාමිණී අභය)'
    },
    epithet: {
      en: 'The Great Protector of the Tripiṭaka & Builder of Abhayagiri',
      si: 'ත්‍රිපිටකය ග්‍රන්ථාරූඪ කළ සහ අභයගිරියේ නිර්මාතෘ'
    },
    kingdomId: 'anuradhapura',
    kingdomName: {
      en: 'Anuradhapura Kingdom',
      si: 'අනුරාධපුර රාජධානිය'
    },
    reignPeriod: {
      en: '103 BCE & 89 BCE – 77 BCE',
      si: 'ක්‍රි.පූ. 103 සහ ක්‍රි.පූ. 89 – ක්‍රි.පූ. 77'
    },
    reignStartYear: -103,
    reignEndYear: -77,
    datePrecision: 'exact',
    biography: {
      en: 'King Valagamba faced immense adversity early in his reign, being driven from Anuradhapura by five South Indian invaders and enduring 14 years of hiding in mountain caves. Supported by faithful monks and warriors, he recaptured the throne in 89 BCE, built the towering Abhayagiri Stupa, expanded the Dambulla Cave Temple, and oversaw the historic Matale Aluvihara assembly where the Pali Buddhist Canon (Tipitaka) was committed to writing on ola palm leaves for the first time in human history.',
      si: 'සොලී ආක්‍රමණ හමුවේ වසර 14ක් ලෙන්ගතව සැඟව සිටි වළගම්බා රජු, නැවත සේනා සංවිධානය කර අනුරාධපුරය දිනාගෙන අභයගිරි මහා සෑය සහ දඹුලු ලෙන් විහාරය ඉදිකළේය. මාතලේ අලුවිහාරයේදී ප්‍රථම වරට ත්‍රිපිටකය ග්‍රන්ථාරූඪ කරන ලද්දේ එතුමාගේ රාජ්‍ය අනුග්‍රහයෙනි.'
    },
    achievements: [
      { en: 'Commissioned the historical writing of the entire Buddhist Canon (Tipitaka) onto ola leaves at Aluvihara', si: 'මාතලේ අලුවිහාරයේදී සම්පූර්ණ ත්‍රිපිටකය ප්‍රථම වරට පුස්කොළ පොත්වල ලේඛනගත කරවීම' },
      { en: 'Erected the colossal Abhayagiri Stupa (over 370 ft high), creating a global center for Mahayana & Theravada learning', si: 'ලොව විශාලතම ස්මාරකයක් වූ අභයගිරි මහා සෑය හා ජාත්‍යන්තර ධර්ම නිකේතනය පිහිටුවීම' },
      { en: 'Transformed the sheer rock shelters of Rangiri Dambulla into magnificent rock-cut cave temples', si: 'රන්ගිරි දඹුලු ලෙන් සංකීර්ණය විස්මිත ලෙන් විහාරයක් බවට පත්කිරීම' }
    ],
    associatedMonuments: ['Abhayagiri Stupa', 'Rangiri Dambulla Cave Temple', 'Matale Aluvihara Rock Temple'],
    relatedFigures: [
      { name: { en: 'Queen Somadevi', si: 'සෝමා දේවිය' }, relation: { en: 'Chief Queen Consort', si: 'අගමෙහෙසිය' } },
      { name: { en: 'Kupikkala Mahatissa Thera', si: 'කුපික්කල මහාතිස්ස හිමි' }, relation: { en: 'Monastic Guardian & Benefactor', si: 'ආරක්ෂක හිමිපාණන්' } }
    ],
    portraitType: 'archaeological_sculpture',
    image: '/images/rulers/valagamba.jpg',
    imageAttribution: 'Ancient painted royal wooden statue of King Valagamba inside Dambulla Cave 2 (Maharaja Viharaya)',
    imageCreator: 'Bernard Gagnon / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:20160125_Sri_Lanka_3850_Dambulla_sRGB_(25470072450).jpg',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Mahavamsa Chapter 33', 'Pujavaliya', 'Nikaya Sangrahaya']
  },
  {
    id: 'kashyapa-i',
    slug: 'kashyapa-i',
    name: {
      en: 'King Kashyapa I',
      si: 'පළමුවන කාශ්‍යප රජු'
    },
    epithet: {
      en: 'The Visionary Architect of Sigiriya & God-King of Alakamanda',
      si: 'සීගිරියේ අසහාය නිර්මාතෘ සහ ආලකමන්දාවේ දෙව් රජු'
    },
    kingdomId: 'anuradhapura',
    kingdomName: {
      en: 'Anuradhapura Kingdom',
      si: 'අනුරාධපුර රාජධානිය'
    },
    reignPeriod: {
      en: '477 CE – 495 CE',
      si: 'ක්‍රි.ව. 477 – ක්‍රි.ව. 495'
    },
    reignStartYear: 477,
    reignEndYear: 495,
    datePrecision: 'exact',
    biography: {
      en: 'Son of King Dhatusena. Fearing the retribution of his brother Moggallana who had fled to India, Kashyapa relocated the royal seat to the sheer rock of Sigiriya. Over 18 years, he transformed the forbidding monolith into a magnificent fortress-city conceived as Kuvera’s earthly paradise of Alakamanda, complete with sky pavilions, the lion staircase, mirror walls, and radiant frescoes.',
      si: 'ධාතුසේන රජුගේ පුත්‍රයාය. තම සොහොයුරු මුගලන් කුමරුගෙන් පළිගැනීමක් බලාපොරොත්තුවෙන් සීගිරි පර්වතය තම අගනුවර කරගෙන, කුවේරයාගේ ආලකමන්දාව බඳු අසිරිමත් මාළිගා සංකීර්ණයක් හා ජල උද්‍යාන නිර්මාණය කළේය.'
    },
    achievements: [
      { en: 'Architectural conception of Sigiriya Rock Fortress, palace complex, and symmetric water gardens', si: 'සීගිරි පර්වත බලකොටුව සහ සමමිතික ජල උද්‍යාන නිර්මාණය' },
      { en: 'Commissioned the world-renowned Sigiriya frescoes depicting the Maidens of the Clouds', si: 'ලෝක ප්‍රකට සීගිරි බිතුසිතුවම් නිර්මාණය කරවීම' },
      { en: 'Constructed the mirror wall and advanced pressure-fed gravity fountains', si: 'කැඩපත් පවුර සහ පීඩන තාක්ෂණයෙන් ක්‍රියාත්මක වන ජල උල්පත් බිහිකිරීම' }
    ],
    associatedMonuments: ['Sigiriya Rock Citadel', 'Pidurangala Monastic Complex'],
    relatedFigures: [
      { name: { en: 'King Dhatusena', si: 'ධාතුසේන රජු' }, relation: { en: 'Father', si: 'පියා' } },
      { name: { en: 'King Moggallana I', si: 'පළමුවන මුගලන් රජු' }, relation: { en: 'Half-Brother & Opponent', si: 'සොහොයුරා' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/kashyapa-i.jpg',
    imageAttribution: 'Authentic historical portrait of King Kashyapa I of Anuradhapura (477–495 CE)',
    imageCreator: 'Wikimedia Commons / Ceylon Historical Collection',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kashyapa_of_Anuradhapura.jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Culavamsa Chapter 38-39', 'Paranavitana, S. The Story of Sigiriya']
  },
  {
    id: 'parakramabahu-i',
    slug: 'parakramabahu-i',
    name: {
      en: 'King Parakramabahu I (The Great)',
      si: 'මහා පරාක්‍රමබාහු රජු'
    },
    epithet: {
      en: 'The Master of Waters & Sovereign of Pulathisipura',
      si: 'ජලයේ අධිපතියා සහ පුලතිසිපුර මහා නිරිඳු'
    },
    kingdomId: 'polonnaruwa',
    kingdomName: {
      en: 'Polonnaruwa Kingdom',
      si: 'පොළොන්නරුව රාජධානිය'
    },
    reignPeriod: {
      en: '1153 CE – 1186 CE',
      si: 'ක්‍රි.ව. 1153 – ක්‍රි.ව. 1186'
    },
    reignStartYear: 1153,
    reignEndYear: 1186,
    datePrecision: 'exact',
    biography: {
      en: 'One of the most consequential monarchs in Asian history. Unifying the splintered realms of Dakkhinadesa, Rajarata, and Ruhuna, Parakramabahu established Polonnaruwa as a monumental imperial capital. Under his banner, Sri Lankan naval fleets captured ports in Lower Burma and southern India, while at home he renovated or built over 1,400 reservoirs, culminating in the Parakrama Samudra.',
      si: 'ලංකා ඉතිහාසයේ විශිෂ්ටතම නිරිඳෙකි. දක්ෂිණදේශය, රජරට හා රුහුණ එක්සේසත් කර පොළොන්නරුව අධිරාජ්‍යයක් බවට පත්කළේය. බුරුමය හා දකුණු ඉන්දියාව වෙත නාවික බල ඇණි මෙහෙයවූ අතර, "එකදු දිය බිඳක් හෝ මුහුදට ගලා යාමට ඉඩ නොතබමි" යන අධිෂ්ඨානයෙන් පරාක්‍රම සමුද්‍රය ඇතුළු වැව් දහස් ගණනක් කරවීය.'
    },
    achievements: [
      { en: 'Created the Parakrama Samudra (Sea of Parakrama) by uniting several ancient tanks', si: 'පුරාණ වැව් කිහිපයක් එක්කරමින් යෝධ පරාක්‍රම සමුද්‍රය නිර්මාණය කිරීම' },
      { en: 'Commissioned the four colossal rock-cut statues of Gal Vihara (Uttararama)', si: 'ගල් විහාරයේ අසමසම කළුගල් බුද්ධ ප්‍රතිමා සතර නෙළවීම' },
      { en: 'Unified the three Buddhist monastic fraternities (Maha Vihara, Abhayagiri, Jetavana)', si: 'වසර දහසකට පසු භික්ෂු නිකාය ත්‍රිත්වය එක්සේසත් කර කතිකාවතක් පිහිටුවීම' },
      { en: 'Launched victorious maritime expeditions to Ramanna (Burma) and the Pandyan Empire', si: 'බුරුමය හා පාණ්ඩ්‍ය රාජ්‍යය වෙත සාර්ථක නාවික මෙහෙයුම් දියත් කිරීම' }
    ],
    associatedMonuments: ['Parakrama Samudra', 'Gal Vihara', 'Vatadage', 'Seven-Storeyed Palace (Satmahal Prasada)', 'Rankoth Vehera'],
    relatedFigures: [
      { name: { en: 'King Manabharana', si: 'මානාභරණ රජු' }, relation: { en: 'Father', si: 'පියා' } },
      { name: { en: 'Queen Lilavati', si: 'ලීලාවතී රැජින' }, relation: { en: 'Chief Consort & Later Monarch', si: 'අගමෙහෙසිය' } }
    ],
    portraitType: 'archaeological_sculpture',
    image: '/images/rulers/parakramabahu-statue.jpg',
    imageAttribution: 'Colossal Potgul Vihara Granite Statue (Traditionally identified as Parakramabahu the Great)',
    imageCreator: 'Jan-Slefer / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Parakramabahu_I(js).jpg',
    imageLicense: 'CC BY-SA 3.0',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Culavamsa Chapters 64-79', 'Nicholas, C.W. Historical Topography of Ancient Ceylon']
  },
  {
    id: 'parakramabahu-vi',
    slug: 'parakramabahu-vi',
    name: {
      en: 'King Parakramabahu VI',
      si: 'හයවන පරාක්‍රමබාහු රජු'
    },
    epithet: {
      en: 'The Unifier of Kotte & Patron of the Golden Age of Sandeshaya Poetry',
      si: 'කෝට්ටේ මහා නිරිඳු සහ සන්දේශ කාව්‍යයේ ස්වර්ණමය යුගයේ අනුග්‍රාහකයා'
    },
    kingdomId: 'kotte',
    kingdomName: {
      en: 'Kingdom of Kotte',
      si: 'කෝට්ටේ රාජධානිය'
    },
    reignPeriod: {
      en: '1412 CE – 1467 CE',
      si: 'ක්‍රි.ව. 1412 – ක්‍රි.ව. 1467'
    },
    reignStartYear: 1412,
    reignEndYear: 1467,
    datePrecision: 'exact',
    biography: {
      en: 'The last sovereign emperor to unite the entire island of Sri Lanka under one umbrella before the colonial disruption. Guided by brilliant generals like Prince Sapumal (who captured the Kingdom of Jaffna), Parakramabahu maintained a peaceful realm of unprecedented cultural brilliance. Under his patronage, Ven. Totagamuwe Sri Rahula composed the timeless messenger poem Salalihini Sandeshaya.',
      si: 'යටත්විජිත යුගයට පෙර මුළු ලංකාද්වීපයම එක් ධජයක් යටතට ගෙන ආ අවසන් මහා නිරිඳාණෝය. සපුමල් කුමරුගේ නායකත්වයෙන් යාපනය ද අත්පත් කරගනිමින් සාමකාමී ස්වර්ණමය යුගයක් බිහිකළ අතර, තොටගමුවේ ශ්‍රී රාහුල හිමියන්ගේ සැළලිහිණි සන්දේශය වැනි කාව්‍යයන්ට රාජකීය අනුග්‍රහය දැක්වීය.'
    },
    achievements: [
      { en: 'Unified the whole island of Sri Lanka, establishing suzerainty over Jaffna and the Vanni chiefs', si: 'යාපනය සහ වන්නි ප්‍රදේශ ඇතුළුව මුළු ලංකාවම එක්සේසත් කිරීම' },
      { en: 'Patron of the literary explosion producing Salalihini, Parevi, and Gira Sandeshayas', si: 'සැළලිහිණි, පරවි, ගිරා ආදී විශිෂ්ට සන්දේශ කාව්‍ය බිහිවීමට අනුග්‍රහය දැක්වීම' },
      { en: 'Built the Sunethradevi Pirivena in memory of his mother Queen Sunethradevi', si: 'තම මෑණියන් සිහිවීම පිණිස සුනෙත්‍රාදේවී මහා පිරිවෙන ඉදිකිරීම' }
    ],
    associatedMonuments: ['Kotte Royal Palace Ruins', 'Sunethradevi Pirivena Pepiliyana', 'Kelaniya Raja Maha Vihara additions'],
    relatedFigures: [
      { name: { en: 'Prince Sapumal (Bhuvanekabahu VI)', si: 'සපුමල් කුමරු' }, relation: { en: 'Adopted Son & Commander', si: 'දරු කුමරු හා සෙනෙවිරත්' } },
      { name: { en: 'Ven. Totagamuwe Sri Rahula Thera', si: 'තොටගමුවේ ශ්‍රී රාහුල හිමි' }, relation: { en: 'Chief Royal Prelate & Poet', si: 'රාජගුරු මහා කවියා' } },
      { name: { en: 'Princess Ulakudaya Devi', si: 'උලකුඩය දේවිය' }, relation: { en: 'Daughter (Subject of Salalihini Sandeshaya)', si: 'දියණිය (සැළලිහිණි සන්දේශයේ ප්‍රාර්ථනාව)' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/parakramabahu-vi.jpg',
    imageAttribution: 'Unified Realm of King Parakramabahu VI of Kotte at its Greatest Territorial Extent (1412–1467 CE)',
    imageCreator: 'Department of National Archives / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kingdom_of_Kotte_(1412-1467).jpg',
    imageLicense: 'CC BY-SA 4.0',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Somaratne, G.P.V. (1975). Political History of Kotte', 'Salalihini Sandeshaya (Introduction and Verses)']
  },
  {
    id: 'rajasinha-i',
    slug: 'rajasinha-i',
    name: {
      en: 'King Rajasinha I of Sitawaka (Tikiri Bandara)',
      si: 'පළමුවන රාජසිංහ රජු (සීතාවක ටිකිරි කුමරු)'
    },
    epithet: {
      en: 'The Lion of Sitawaka & Victor of Mulleriyawa',
      si: 'සීතාවක සිංහයා සහ මුල්ලේරියා මහා සංග්‍රාමයේ විජයග්‍රාහකයා'
    },
    kingdomId: 'sitawaka',
    kingdomName: {
      en: 'Sitawaka Kingdom',
      si: 'සීතාවක රාජධානිය'
    },
    reignPeriod: {
      en: '1581 CE – 1593 CE',
      si: 'ක්‍රි.ව. 1581 – ක්‍රි.ව. 1593'
    },
    reignStartYear: 1581,
    reignEndYear: 1593,
    datePrecision: 'exact',
    biography: {
      en: 'Renowned in his youth as Tikiri Bandara, he dealt the Portuguese Empire its most crushing land defeat in Asia at the Battle of Mulleriyawa in 1559 at just sixteen years of age. Succeeding his father King Mayadunne, Rajasinha expanded the Sitawaka kingdom across the lowlands and the hill country, repeatedly besieging Portuguese Colombo with advanced trench artillery and war elephants.',
      si: 'ලාබාල වියේදීම මුල්ලේරියා වෙලේදී පෘතුගීසි හමුදාව අන්ත පරාජයට පත්කරමින් කීර්තියට පත් ටිකිරි කුමරු, පසුව පළමුවන රාජසිංහ නමින් සීතාවක රජ විය. මුළු පහතරට හා උඩරට පාලනය කළ එතුමා කොළඹ පෘතුගීසි බලකොටුව දෙවරක් වටලා සටන් කළ අසහාය රණශූරයෙකි.'
    },
    achievements: [
      { en: 'Led the crushing defeat of the Portuguese army at the epic Battle of Mulleriyawa (1559)', si: '1559 මුල්ලේරියා මහා සටනේදී පෘතුගීසි බලය බිඳ දැමීම' },
      { en: 'United the realms of Sitawaka, Kandy, and the maritime provinces under one fierce resistance', si: 'සීතාවක, කන්ද උඩරට හා මුහුදුබඩ ප්‍රදේශ එක්කර යටත්විජිත විරෝධී පෙරමුණක් ගොඩනැගීම' },
      { en: 'Constructed the carved laterite fortress and river bastions of Berendi Kovil on the Kelani river', si: 'කැලණි ගං ඉවුරේ කළුගලින් හා කබොක් ගලින් අලංකාර බැරැන්ඩි කෝවිල ඉදිකිරීම' }
    ],
    associatedMonuments: ['Berendi Kovil Avissawella', 'Mulleriyawa Battlefield Memorial', 'Manikkadawara Fort Area'],
    relatedFigures: [
      { name: { en: 'King Mayadunne', si: 'මායාදුන්නේ රජු' }, relation: { en: 'Father & Predecessor', si: 'පියා' } },
      { name: { en: 'Vidiye Bandara', si: 'වීදියේ බණ්ඩාර' }, relation: { en: 'Military Rival', si: 'ප්‍රතිවාදී සෙනෙවියා' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/rajasinha-i-sitawaka.jpg',
    imageAttribution: 'Authentic historical depiction of Tikiri Bandara (King Rajasinha I of Sitawaka)',
    imageCreator: 'Department of National Archives Sri Lanka / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:%E0%B6%A7%E0%B7%92%E0%B6%9A%E0%B7%92%E0%B6%BB%E0%B7%92_%E0%B6%9A%E0%B7%94%E0%B6%B8%E0%B7%8F%E0%B6%BB%E0%B6%BA%E0%B7%8F.jpg',
    imageLicense: 'Public Domain',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Rajavaliya (Chronicle of Kings)', 'Queyroz, Fernao de. The Conquest of Ceylon']
  },
  {
    id: 'vimaladharmasuriya-i',
    slug: 'vimaladharmasuriya-i',
    name: {
      en: 'King Vimaladharmasuriya I (Konappu Bandara)',
      si: 'පළමුවන විමලධර්මසූරිය රජු (කොනප්පු බණ්ඩාර)'
    },
    epithet: {
      en: 'The Lion of Senkadagala & Savior of the Sacred Tooth Relic',
      si: 'සෙංකඩගල සිංහයා සහ දන්ත ධාතූන් වහන්සේගේ ගැලවුම්කරුවා'
    },
    kingdomId: 'kandy',
    kingdomName: {
      en: 'Kandyan Kingdom',
      si: 'මහනුවර රාජධානිය'
    },
    reignPeriod: {
      en: '1592 CE – 1604 CE',
      si: 'ක්‍රි.ව. 1592 – ක්‍රි.ව. 1604'
    },
    reignStartYear: 1592,
    reignEndYear: 1604,
    datePrecision: 'exact',
    biography: {
      en: 'Originally known as Konappu Bandara, he gained intimate mastery of European military strategy while residing with the Portuguese in Goa. Returning to Sri Lanka, he broke with the invaders, seized the hill kingdom of Senkadagala, routed Portuguese General Pero Lopes de Sousa at the Battle of Danture (1594), married Kusumasana Devi (Dona Catherina), and brought the Sacred Tooth Relic to Kandy.',
      si: 'ගෝවෙහි පෘතුගීසීන් සමඟ සිට යුරෝපීය යුධ උපක්‍රම මැනවින් ප්‍රගුණ කළ කොනප්පු බණ්ඩාර, නැවත පැමිණ දන්තුරේ සටනේදී (1594) පෘතුගීසි හමුදාව අන්ත පරාජයකට පත්කර කුසුමාසන දේවිය සරණපාවා ගෙන සෙංකඩගල රාජධානිය ආරම්භ කළේය.'
    },
    achievements: [
      { en: 'Decisive victory over the Portuguese army at the Battle of Danture (1594), saving the highland kingdom', si: 'දන්තුරේ සටනින් (1594) පෘතුගීසීන් පරදවා කඳුකර රාජධානිය බේරාගැනීම' },
      { en: 'Constructed the two-storeyed shrine in Kandy to enshrine the Sacred Tooth Relic from Delgamuwa', si: 'දැල්ගමුවෙන් දන්ත ධාතූන් වහන්සේ වැඩමවා ශ්‍රී දළදා මාලිගාව ඉදිකිරීම' },
      { en: 'Sent an embassy to Burma (Arakan) to restore higher ordination (Upasampada)', si: 'උපසම්පදාව නැවත පිහිටුවීමට බුරුමයට (අරකන්) දූත පිරිසක් යැවීම' }
    ],
    associatedMonuments: ['Sri Dalada Maligawa (Inner sanctum foundation)', 'Danture Battlefield Memorial'],
    relatedFigures: [
      { name: { en: 'Kusumasana Devi (Dona Catherina)', si: 'කුසුමාසන දේවිය' }, relation: { en: 'Queen Consort', si: 'අගමෙහෙසිය' } },
      { name: { en: 'King Rajasinghe II', si: 'දෙවන රාජසිංහ රජු' }, relation: { en: 'Son', si: 'පුත්‍රයා' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/vimaladharmasuriya-i.jpg',
    imageAttribution: 'Authentic historical portrait of King Vimaladharmasuriya I of Kandy (1592–1604 CE)',
    imageCreator: 'National Museum of Kandy / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:King_Vimaladharmasuriya_I.jpg',
    imageLicense: 'Public Domain',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Queyroz, Fernao de. The Temporal and Spiritual Conquest of Ceylon', 'Dewaraja, Lorna. The Kandyan Kingdom']
  },
  {
    id: 'rajasinha-ii',
    slug: 'rajasinha-ii',
    name: {
      en: 'King Rajasinha II of Kandy',
      si: 'දෙවන රාජසිංහ රජු'
    },
    epithet: {
      en: 'The Victor of Gannoruwa & Expeller of the Portuguese',
      si: 'ගන්නෝරුව සටනේ විජයග්‍රාහකයා සහ පෘතුගීසීන් පලවාහළ නිරිඳු'
    },
    kingdomId: 'kandy',
    kingdomName: {
      en: 'Kandyan Kingdom',
      si: 'මහනුවර රාජධානිය'
    },
    reignPeriod: {
      en: '1635 CE – 1687 CE',
      si: 'ක්‍රි.ව. 1635 – ක්‍රි.ව. 1687'
    },
    reignStartYear: 1635,
    reignEndYear: 1687,
    datePrecision: 'exact',
    biography: {
      en: 'Son of King Senarat and Queen Kusumasana Devi. A master of guerilla warfare and mountain artillery, Rajasinha completely annihilated the Portuguese army under Governor Diego de Melo at the Battle of Gannoruwa in 1638. He forged a strategic alliance with the Dutch East India Company (VOC) to permanently expel the Portuguese from Sri Lanka in 1658, while skillfully asserting Kandyan sovereignty over the highlands for 52 years.',
      si: 'සෙනරත් රජුගේ සහ කුසුමාසන දේවියගේ පුත්‍රයාය. 1638 ගන්නෝරුව සටනේදී දියේගෝ ද මේලෝගේ පෘතුගීසි හමුදාව සම්පූර්ණයෙන්ම සමූලඝාතනය කළේය. ලන්දේසීන් සමඟ ගිවිසුම් ගසා 1658 දී පෘතුගීසීන් ලංකාවෙන් සදහටම පලවා හැර වසර 52ක් මුළුල්ලේ උඩරට ස්වාධීනත්වය රැකගත්තේය.'
    },
    achievements: [
      { en: 'Crushed the Portuguese imperial army at the Battle of Gannoruwa (1638), the greatest victory of the Kandyan wars', si: '1638 ගන්නෝරුව සටනින් පෘතුගීසි බලය සහමුලින්ම විනාශ කිරීම' },
      { en: 'Formed a naval alliance with the Dutch VOC, ending 153 years of Portuguese colonial terror in 1658', si: 'ලන්දේසි සන්ධානය හරහා 1658 දී පෘතුගීසීන් ලංකාවෙන් පලවා හැරීම' },
      { en: 'Maintained absolute sovereign independence of the Kandyan Kingdom across half a century of rule', si: 'අඩසියවසකට වැඩි කාලයක් කන්ද උඩරට රාජධානියේ අභිමානය හා ස්වාධීනත්වය රැකගැනීම' }
    ],
    associatedMonuments: ['Gannoruwa Battlefield', 'Kandyan Palace Complex', 'Hanguranketha Palace Ruins'],
    relatedFigures: [
      { name: { en: 'King Vimaladharmasuriya I', si: 'පළමුවන විමලධර්මසූරිය රජු' }, relation: { en: 'Royal Predecessor / Stepfather', si: 'පූර්වගාමී රජු' } },
      { name: { en: 'Robert Knox', si: 'රොබට් නොක්ස්' }, relation: { en: 'English Captive & Chronicler', si: 'සිරකරුවා සහ ඉතිහාස ලේඛකයා' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/rajasinha-ii.jpg',
    imageAttribution: 'Contemporary 17th-century engraving of King Rajasinha II of Kandy by Robert Knox (1681)',
    imageCreator: 'Robert Knox / British Museum / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:King_Rajasingha_II_(1608-1687).jpg',
    imageLicense: 'Public Domain',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['Knox, Robert (1681). An Historical Relation of the Island Ceylon', 'Queyroz, Fernao de. The Temporal and Spiritual Conquest of Ceylon']
  },
  {
    id: 'sri-vikrama-rajasinha',
    slug: 'sri-vikrama-rajasinha',
    name: {
      en: 'King Sri Vikrama Rajasinha',
      si: 'ශ්‍රී වික්‍රම රාජසිංහ රජු'
    },
    epithet: {
      en: 'The Last Monarch of Kandy & Builder of Kandy Lake',
      si: 'ලක්දිව අවසන් රජු සහ කිරි මුහුදේ (නුවර වැව) නිර්මාතෘ'
    },
    kingdomId: 'kandy',
    kingdomName: {
      en: 'Kandyan Kingdom',
      si: 'මහනුවර රාජධානිය'
    },
    reignPeriod: {
      en: '1798 CE – 1815 CE',
      si: 'ක්‍රි.ව. 1798 – ක්‍රි.ව. 1815'
    },
    reignStartYear: 1798,
    reignEndYear: 1815,
    datePrecision: 'exact',
    biography: {
      en: 'The last reigning monarch of Sri Lanka. Crowned in 1798 under the Nayakkar dynasty, Sri Vikrama transformed the topography of Kandy by creating the serene Kandy Lake (Kiri Muhuda) and erecting the iconic octagonal pavilion (Pattirippuwa) of the Temple of the Tooth. His reign ended with the British capture of Kandy in 1815 and the signing of the Kandyan Convention, ending over 2,300 years of unbroken royal monarchy on the island.',
      si: 'ශ්‍රී ලංකාවේ රාජ්‍යත්වයේ කිරුළ දැරූ අවසන් රජුය. නුවර වැව (කිරි මුහුද) සහ ශ්‍රී දළදා මාලිගාවේ අලංකාර පත්තිරිප්පුව මෙතුමාගේ අමරණීය නිර්මාණයන්ය. 1815 උඩරට ගිවිසුම අත්සන් කිරීමෙන් පසු බ්‍රිතාන්‍යයන් විසින් වෙල්ලෝරයට පිටුවහල් කරන ලද අතර, වසර 2,300කට අධික ලංකා රාජාවලිය මෙතුමාගෙන් අවසන් විය.'
    },
    achievements: [
      { en: 'Constructed the picturesque Kandy Lake (Kiri Muhuda) and the cloud-wall parapet (Walakulu Bamma)', si: 'නුවර වැව (කිරි මුහුද) සහ මනහර වළාකුළු බැම්ම නිර්මාණය කිරීම' },
      { en: 'Erected the famous octagonal tower (Pattirippuwa) of the Sri Dalada Maligawa', si: 'ශ්‍රී දළදා මාලිගාවේ සුප්‍රකට අටපට්ටම් පත්තිරිප්පුව ඉදිකිරීම' },
      { en: 'Preserved the royal throne, crown, and sceptre of the Kandyan monarchs now exhibited at the National Museum', si: 'කොළඹ ජාතික කෞතුකාගාරයේ ඇති රාජකීය සිංහාසනය හා ඔටුන්න හිමි අභිමානවත් නිරිඳු' }
    ],
    associatedMonuments: ['Kandy Lake (Kiri Muhuda)', 'Pattirippuwa (Temple of the Tooth Octagon)', 'Meda Wasala Palace'],
    relatedFigures: [
      { name: { en: 'Queen Rangammal Devi', si: 'රංගම්මාල් දේවිය' }, relation: { en: 'Chief Queen Consort', si: 'අගමෙහෙසිය' } },
      { name: { en: 'Pilimathalawa Maha Adikaram', si: 'පිළිමතලාවේ මහා අදිකාරම්' }, relation: { en: 'Kingmaker & Chief Minister', si: 'ප්‍රධාන ඇමති' } },
      { name: { en: 'Ehelepola Maha Adikaram', si: 'ඇහැලේපොළ මහා අදිකාරම්' }, relation: { en: 'First Adigar & Disaffected Leader', si: 'මහා අදිකාරම්' } }
    ],
    portraitType: 'historical_illustration',
    image: '/images/rulers/sri-vikrama-rajasinha.jpg',
    imageAttribution: 'Official Royal Portrait of King Sri Vikrama Rajasinha (1780–1832) - Colombo National Museum Collection',
    imageCreator: 'National Museum of Colombo / Wikimedia Commons',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:King_Sri_Vikrama_Rajasinha_(1780-1832).JPG',
    imageLicense: 'Public Domain',
    lastVerifiedAt: '2026-10-27',
    publicationStatus: 'published',
    sources: ['D’Oyly, John. A Sketch of the Constitution of the Kandyan Kingdom', 'Powell, Geoffrey. The Fall of the Kandy Kingdom', 'Department of National Archives Sri Lanka']
  }
];
