import { HistoricalEvent } from '../lib/types';

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  {
    id: 'arrival-of-mahinda',
    slug: 'arrival-of-arahant-mahinda-247-bce',
    title: {
      en: 'Arrival of Arahant Mahinda & Introduction of Buddhism',
      si: 'මිහිඳු මහ රහතන් වහන්සේගේ ලංකාගමනය සහ බුදුසසුන් පිහිටුවීම'
    },
    year: -247,
    dateDisplay: {
      en: '247 BCE (Poson Full Moon Day)',
      si: 'ක්‍රි.පූ. 247 (පොසොන් පුන් පොහෝ දින)'
    },
    datePrecision: 'traditional',
    category: 'religious',
    location: {
      en: 'Mihintale (Missaka Mountain), Anuradhapura',
      si: 'මිහින්තලය (මිස්සක පව්ව), අනුරාධපුරය'
    },
    coordinates: [8.3510, 80.5050],
    overview: {
      en: 'Arahant Mahinda, son of Emperor Ashoka of India, met King Devanampiya Tissa on the granite crag of Missaka Pawa during a royal deer hunt. After testing the monarch’s intellect with the riddle of the mango tree, the Thera preached the Chullahaththipadopama Sutta, formally establishing Theravada Buddhism as the guiding faith of Sri Lanka.',
      si: 'ධර්මාශෝක අධිරාජ්‍යයාගේ පුත් මිහිඳු මහ රහතන් වහන්සේ මිස්සක පව්වේදී මුව දඩයමේ ගිය දෙවානම්පියතිස්ස රජු හමුවී, අඹ පැනයෙන් රජුගේ ඥානය පිරික්සා චුල්ලහත්ථිපදෝපම සූත්‍රය දේශනා කරමින් සම්බුදු සසුන පිහිටවූ සේක.'
    },
    consequences: {
      en: 'Transformed language, art, ethics, architecture, and governance, giving rise to Sri Lanka’s monastic civilization.',
      si: 'භාෂාව, සාහිත්‍යය, ගෘහ නිර්මාණ කලාව සහ රාජ්‍ය පාලනය ධර්මානුකූල මාවතකට යොමු කරමින් නව ශිෂ්ටාචාරයක් බිහිවිය.'
    },
    associatedFigures: ['devanampiya-tissa'],
    kingdomId: 'anuradhapura',
    sources: ['Mahavamsa Chapters 13-14', 'Dipavamsa Chapter 12']
  },
  {
    id: 'writing-tripitaka',
    slug: 'writing-down-the-tripitaka-aluvihara',
    title: {
      en: 'Writing Down the Pali Tripitaka at Aluvihara',
      si: 'මාතලේ අලුවිහාරයේදී ත්‍රිපිටකය ග්‍රන්ථාරූඪ කිරීම'
    },
    year: -29,
    dateDisplay: {
      en: '29 BCE (Reign of King Valagamba)',
      si: 'ක්‍රි.පූ. 29 (වළගම්බා රාජ්‍ය සමය)'
    },
    datePrecision: 'approximate',
    category: 'religious',
    location: {
      en: 'Aluvihara Rock Cave Temple, Matale',
      si: 'අලුවිහාරය, මාතලේ'
    },
    coordinates: [7.4880, 80.6230],
    overview: {
      en: 'Fearing the loss of the oral Buddhist tradition due to prolonged famine (Baminitiya Seya) and foreign invasions, 500 learned monks assembled at the Aluvihara cave temple to commit the entire Pali Canon (Tripitaka) and commentaries to writing on palm-leaf (ola) manuscripts for the first time in world history.',
      si: 'බැමිණිතියා සාය නම් වූ දරුණු සාගතය හා ආක්‍රමණ හමුවේ මුඛපරම්පරාගතව පැමිණි ධර්මය රැකගනු වස්, මහා සංඝරත්නය 500 නමක් අලුවිහාර ලෙන් තුළ රැස්වී සමස්ත ත්‍රිපිටක ධර්මය ලොව ප්‍රථම වරට තල්පත්වල (පුස්කොළ පොත්) ග්‍රන්ථාරූඪ කළහ.'
    },
    consequences: {
      en: 'Safeguarded pristine Theravada Buddhist philosophy for all future generations across the globe.',
      si: 'මුළු ලෝකයටම ථෙරවාද බුදුදහමේ නිර්මල පණිවුඩය සදාකාලිකව සුරක්ෂිත විය.'
    },
    associatedFigures: ['valagamba'],
    kingdomId: 'anuradhapura',
    sources: ['Mahavamsa Chapter 33', 'Rahula, Walpola. History of Buddhism in Ceylon']
  },
  {
    id: 'sigiriya-reign',
    slug: 'construction-of-sigiriya-citadel',
    title: {
      en: 'Construction of Sigiriya Citadel by Kashyapa I',
      si: 'පළමුවන කාශ්‍යප රජු විසින් සීගිරි පර්වත රාජධානිය ඉදිකිරීම'
    },
    year: 477,
    dateDisplay: {
      en: '477 CE – 495 CE',
      si: 'ක්‍රි.ව. 477 – ක්‍රි.ව. 495'
    },
    datePrecision: 'exact',
    category: 'engineering',
    location: {
      en: 'Sigiriya Rock Monolith, Central Province',
      si: 'සීගිරිය, මධ්‍යම පළාත'
    },
    coordinates: [7.9570, 80.7603],
    overview: {
      en: 'King Kashyapa I engineered an astonishing mountain citadel atop the sheer 200-meter monolith of Sigiriya, complete with terraced water gardens, subterranean gravity conduits, the lion staircase, mirror walls, and radiant cloud maiden frescoes.',
      si: 'පළමුවන කාශ්‍යප රජු මීටර් 200ක් උසැති සීගිරි පර්වතය මත ජල උද්‍යාන, භූගත නල, සිංහ පාද ප්‍රවේශය සහ ලෝක ප්‍රකට බිතුසිතුවම් සහිත අපූර්ව රාජකීය අහස් මාලිගයක් නිර්මාණය කළේය.'
    },
    consequences: {
      en: 'Created an enduring masterpiece of ancient South Asian urban planning, hydraulics, and fresco art recognized globally by UNESCO.',
      si: 'දකුණු ආසියානු නාගරික සැලසුම්කරණයේ හා සිතුවම් කලාවේ අග්‍රගන්‍ය නිර්මාණයක් ලොවට දායාද විය.'
    },
    associatedFigures: ['kashyapa-i'],
    kingdomId: 'anuradhapura',
    sources: ['Culavamsa Chapter 38', 'Bandaranayake, Senake. Sigiriya Project Monographs']
  },
  {
    id: 'composition-salalihini',
    slug: 'composition-of-salalihini-sandeshaya',
    title: {
      en: 'Composition of Salalihini Sandeshaya at Kotte',
      si: 'කෝට්ටේ යුගයේදී සැළලිහිණි සන්දේශය රචනා වීම'
    },
    year: 1450,
    dateDisplay: {
      en: 'c. 1450 CE',
      si: 'ක්‍රි.ව. 1450 පමණ'
    },
    datePrecision: 'approximate',
    category: 'cultural',
    location: {
      en: 'Jayawardanapura Kotte & Kelaniya',
      si: 'ජයවර්ධනපුර කෝට්ටේ සහ කැළණිය'
    },
    coordinates: [6.8920, 79.9100],
    overview: {
      en: 'Venerable Totagamuwe Sri Rahula Mahathera, the celebrated scholar-monk and linguist of the Shad Bhasha Parameshwara (Master of Six Languages), composed the Salalihini Sandeshaya. The poem describes a flight by a starling from Kotte to Kelaniya to petition God Vibhishana for an heir to Princess Ulakudaya Devi.',
      si: 'ෂඩ්භාෂා පරමේශ්වර තොටගමුවේ ශ්‍රී රාහුල හිමියන් විසින් උලකුඩය දේවියට පුත් කුමරකු පතා හයවන පැරකුම්බා රජු වෙනුවෙන් සැළලිහිණි සන්දේශය රචනා කරන ලදී.'
    },
    consequences: {
      en: 'Established the gold standard for Sinhala poetry, providing invaluable geographical, topographical, and social snapshots of 15th-century Sri Lanka.',
      si: '15 වන සියවසේ ලංකාවේ භූගෝලීය, සමාජීය හා සංස්කෘතික තොරතුරු රැගත් සිංහල සාහිත්‍යයේ අමරණීය කිරුළ බිහිවීම.'
    },
    associatedFigures: ['parakramabahu-vi'],
    kingdomId: 'kotte',
    sources: ['Salalihini Sandeshaya text', 'Somaratne, G.P.V. (1975)']
  },
  {
    id: 'battle-of-mulleriyawa',
    slug: 'battle-of-mulleriyawa-1559',
    title: {
      en: 'Battle of Mulleriyawa: The Sitawaka Triumph',
      si: 'මුල්ලේරියා මහා සංග්‍රාමය: සීතාවක විජයග්‍රහණය'
    },
    year: 1559,
    dateDisplay: {
      en: '1559 CE',
      si: 'ක්‍රි.ව. 1559'
    },
    datePrecision: 'exact',
    category: 'battle',
    location: {
      en: 'Mulleriyawa Marsh & Plains, Colombo',
      si: 'මුල්ලේරියාව වෙල්යාය, කොළඹ'
    },
    coordinates: [6.9320, 79.9350],
    overview: {
      en: 'Prince Tikiri Bandara (later King Rajasinha I of Sitawaka) mounted on his royal war elephant decisively routed a heavily armored Portuguese expeditionary force and their local allies on the marshes of Mulleriyawa, inflicting the worst colonial defeat Portugal had suffered in the East up to that time.',
      si: 'සීතාවක ටිකිරි බණ්ඩාර කුමරු (පසු කලෙක පළමුවන රාජසිංහ රජු) තම ඇතා පිට නැගී මුල්ලේරියා වෙල්යායේදී ප්‍රබල පෘතුගීසි හමුදාව සමූලඝාතනය කරමින් අසමසම ජයග්‍රහණයක් අත්කර ගත්තේය.'
    },
    consequences: {
      en: 'Halted Portuguese expansion into the southwestern hill slopes for decades and elevated Sitawaka to martial supremacy.',
      si: 'පෘතුගීසි ආක්‍රමණ දශක ගණනාවකට නතර කරමින් සීතාවක රාජධානියේ යුධමය තේජස ඉහළ නැංවීම.'
    },
    associatedFigures: [],
    kingdomId: 'sitawaka',
    sources: ['Rajavaliya', 'Fernao de Queyroz: Temporal and Spiritual Conquest of Ceylon']
  },
  {
    id: 'kandyan-convention-1815',
    slug: 'signing-of-the-kandyan-convention-1815',
    title: {
      en: 'Signing of the Kandyan Convention: End of Sovereignty',
      si: 'උඩරට ගිවිසුම අත්සන් කිරීම: ස්වෛරීත්වයේ නිමාව'
    },
    year: 1815,
    dateDisplay: {
      en: 'March 2, 1815',
      si: '1815 මාර්තු 2'
    },
    datePrecision: 'exact',
    category: 'treaty',
    location: {
      en: 'Audience Hall (Magul Maduwa), Kandy',
      si: 'මඟුල් මඩුව, මහනුවර'
    },
    coordinates: [7.2938, 80.6416],
    overview: {
      en: 'Following the capture of King Sri Vikrama Rajasinha, the Kandyan chiefs led by Ehelepola and Molligoda signed a treaty with British Governor Sir Robert Brownrigg, deposing the Nayakkar dynasty and ceding governance of the mountain kingdom to the British Crown, while guaranteeing the protection of Buddhism and customary laws.',
      si: 'ශ්‍රී වික්‍රම රාජසිංහ රජු සිරභාරයට පත්වීමෙන් පසු, ඇහැළේපොළ හා මොල්ලිගොඩ ඇතුළු උඩරට ප්‍රධානීන් සහ රොබට් බ්‍රවුන්රිග් ආණ්ඩුකාරවරයා අතර උඩරට ගිවිසුම අත්සන් කර බුදුදහම ආරක්ෂා කිරීමේ පොරොන්දුව මත පාලනය බ්‍රිතාන්‍යයන්ට පැවරිණි.'
    },
    consequences: {
      en: 'Terminated over 2,300 years of unbroken monarchical sovereignty, placing the entire island under foreign British colonial rule for the first time.',
      si: 'වසර 2,300ක අඛණ්ඩ දේශීය රාජාණ්ඩු ක්‍රමය නිමාවට පත්වෙමින් මුළු දිවයිනම ප්‍රථම වතාවට බ්‍රිතාන්‍ය යටත්විජිතයක් බවට පත්විය.'
    },
    associatedFigures: ['sri-vikrama-rajasinha'],
    kingdomId: 'kandy',
    sources: ['Kandyan Convention Treaty Document (Public Record Office London)', 'D’Oyly, John. Diary']
  },
  {
    id: 'ceylon-independence-1948',
    slug: 'restoration-of-independence-1948',
    title: {
      en: 'Restoration of Independence (Ceylon Independence Act)',
      si: 'නිදහස යළි දිනාගැනීම (1948 නිදහස් ප්‍රකාශනය)'
    },
    year: 1948,
    dateDisplay: {
      en: 'February 4, 1948',
      si: '1948 පෙබරවාරි 4'
    },
    datePrecision: 'exact',
    category: 'political',
    location: {
      en: 'Independence Memorial Hall, Torrington Square, Colombo',
      si: 'නිදහස් චතුරස්‍රය, කොළඹ'
    },
    coordinates: [6.9042, 79.8677],
    overview: {
      en: 'After 133 years of British Crown rule and peaceful national constitutional campaigns led by statesmen of all communities (D.S. Senanayake, P. Ramanathan, E.W. Perera, T.B. Jayah), Sri Lanka gained full independence as the Dominion of Ceylon on 4 February 1948.',
      si: 'වසර 133ක බ්‍රිතාන්‍ය පාලනයෙන් පසු, ඩී.එස්. සේනානායක මැතිතුමා ඇතුළු ජාතික නායකයන්ගේ නායකත්වයෙන් 1948 පෙබරවාරි 4 දින ශ්‍රී ලංකාව නිදහස් රාජ්‍යයක් බවට පත්විය.'
    },
    consequences: {
      en: 'Restored national self-determination, leading to the Republic constitution of 1972 and UNESCO conservation of ancient heritage cities.',
      si: 'දේශීය ස්වාධීනත්වය යළි තහවුරු වී 1972 දී ජනරජයක් බවට පත්වෙමින් පුරාණ සංස්කෘතික උරුමයන් ලොව හමුවේ බැබළවීමට මගපෑදිණි.'
    },
    associatedFigures: [],
    kingdomId: 'colonial-maritime',
    sources: ['Ceylon Independence Act 1947', 'National Archives of Sri Lanka']
  }
];
