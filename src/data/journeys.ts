import { HistoricalJourney } from '../lib/types';

export const HISTORICAL_JOURNEYS: HistoricalJourney[] = [
  {
    id: 'salalihini-sandeshaya',
    slug: 'salalihini-sandeshaya-flight',
    title: {
      en: 'The Starling’s Messenger Flight (Salalihini Sandeshaya)',
      si: 'සැළලිහිණි සන්දේශ ගුවන් ගමන් මග'
    },
    subtitle: {
      en: 'An authentic 15th-century flight from the Royal Citadel of Kotte to Kelaniya Shrine',
      si: '15 වන සියවසේ කෝට්ටේ රාජධානියේ සිට කැළණි පුදබිම දක්වා සැළලිහිණියාගේ අසිරිමත් ගමන'
    },
    periodName: {
      en: 'Kingdom of Kotte (1412–1597 CE)',
      si: 'කෝට්ටේ යුගය'
    },
    dateDisplay: {
      en: 'c. 1450 CE (Reign of King Parakramabahu VI)',
      si: 'ක්‍රි.ව. 1450 පමණ (හයවන පරාක්‍රමබාහු රාජ්‍ය සමය)'
    },
    description: {
      en: 'Experience the verified 15th-century poetic journey penned by Venerable Totagamuwe Sri Rahula Thera. You fly as the starling (Salalihini bird), carrying King Parakramabahu VI’s royal petition to God Vibhishana at Kelaniya, invoking blessings for an heir to Princess Ulakudaya Devi. Each waypoint corresponds to documented medieval waterways, ferry crossings, and shrines.',
      si: 'තොටගමුවේ ශ්‍රී රාහුල මාහිමියන් විසින් රචිත අමරණීය සැළලිහිණි සන්දේශය ඔස්සේ පියඹා යන්න. උලකුඩය දේවියට පුත් කුමරකු පතා හයවන පැරකුම්බා නිරිඳුන් වෙනුවෙන් කැලණියේ විභීෂණ දෙවියන් වෙත පණිවුඩය ගෙන යන සැළලිහිණියාගේ මග ඔස්සේ සැබෑ ඓතිහාසික කවි හා මංසලකුණු අත්විඳින්න.'
    },
    theme: 'literary_flight',
    totalDistanceKm: 18.5,
    estimatedStops: 6,
    heroImage: '/images/sites/kelaniya.jpg',
    audioTrackName: 'Traditional Flute & Temple Ambience',
    audioTrackTheme: 'kotte_flute',
    waypoints: [
      {
        id: 'kotte-palace',
        title: {
          en: '1. Departure: The Royal Citadel of Jayawardanapura Kotte',
          si: '1. පිටත්වීම: ශ්‍රී ජයවර්ධනපුර කෝට්ටේ රාජ මාලිගය'
        },
        coordinates: [6.8920, 79.9100],
        cameraPitch: 58,
        cameraBearing: 320,
        zoom: 15.5,
        altitudeMeters: 45,
        sinhalaStanza: 'සැරද සුලකළකුරු - මියුරු පිය තෙපුලෙන් රඳනා\nරජකුල රහසැ මැතිනිය - සියනෙහි සැළලිහිණි සඳ',
        stanzaAttribution: 'Salalihini Sandeshaya — Stanza 1 (Blessing & Mission Charge)',
        stanzaMeaning: {
          en: '“May you live long, gentle friend Salalihini, endowed with auspicious marks, resonant with sweet speech, wise confidante of the royal court...”',
          si: 'යහපත් ලක්ෂණයෙන් යුතු, මිහිරි කතාබහ ඇති, රාජකීය රහස් රැකීමේ සමත් ඇමතිනියක් බඳු මිතුරු සැළලිහිණියනි, ඔබට දීර්ඝායුෂ වේවා!'
        },
        narrative: {
          en: 'The flight begins at the royal palace within the fortified island-citadel of Kotte. King Parakramabahu VI, having unified the island under one umbrella, dispatches the beloved starling bird with a prayer for the birth of a royal grandson to Princess Ulakudaya Devi.',
          si: 'මුළු ලංකාවම එක්සේසත් කළ හයවන පරාක්‍රමබාහු රජුගේ මාලිගයෙන් ගමන ඇරඹේ. තම දියණිය වූ උලකුඩය දේවියට පුත් කුමරකු පතා විභීෂණ දෙවියන් වෙත පණිවුඩය භාරදීම මෙහි අරමුණයි.'
        },
        historicalContext: {
          en: 'During the 15th century, Kotte was an impregnable water-fortress (Jala Durgaya) engineered amidst the marsh loops of the Diyawanna lake.',
          si: '15 වන සියවසේදී කෝට්ටේ යනු දියවන්නාවේ වගුරු බිම් සහ කබොක් පවුරු වලින් වටවූ ආරක්ෂිත ජල දුර්ගයකි.'
        },
        archaeologicalHighlight: {
          en: 'Laterite (kabok) ramparts, ancient moat foundations, and Alakeshwara archaeological palace complex.',
          si: 'ඇතුළු කෝට්ටේ කබොක් පවුරු, අලකේශ්වර මාලිගා නටබුන් සහ පුරාණ දිය අගල් පද්ධතිය.'
        },
        image: '/images/journeys/alakeshwara-kotte.jpg',
        rulerAssociation: {
          en: 'King Parakramabahu VI (1412–1467 CE)',
          si: 'හයවන පරාක්‍රමබාහු රජු'
        },
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'diyawanna-moat',
        title: {
          en: '2. The Water Ramparts: Diyawanna Oya & Marshes',
          si: '2. දියවන්නා දිය අගල සහ පවුරු'
        },
        coordinates: [6.8995, 79.9160],
        cameraPitch: 50,
        cameraBearing: 345,
        zoom: 14.8,
        altitudeMeters: 75,
        sinhalaStanza: 'පැලඳි මුතුහරක් මෙන් වට දිය අගල\nබැබළි රළ පැහැර දිස්වන පෙණ මඬල\nසැලෙදි මඳ පවන ගිලිහෙන පෙති විපුල\nනොලඳි සුවඳ විහිදුවනා මල් කෙවුල',
        stanzaAttribution: 'Salalihini Sandeshaya — Stanza 6 (The Encircling Moats of Kotte)',
        stanzaMeaning: {
          en: '“The deep water moat encircling the fortress sparkles like a pearl necklace adorned with glistening foam as the evening breeze scatters fragrant lotus petals...”',
          si: 'නුවර වටා වූ දිය අගල පෙණ පිඬු වලින් දිලෙන මුතු මාලයක් මෙන් බැබළෙයි, සුවඳැති නෙළුම් පෙති සුළඟේ සැලෙයි...'
        },
        narrative: {
          en: 'Soaring above the outer ramparts, you look down at the deep moat waters filled with water lilies and lotus blooms, engineered by Minister Nissanka Alagakkonara to repel invasions from the north.',
          si: 'පිටත පවුරු මතින් පියාඹන විට, ආක්‍රමණ වැළැක්වීමට අලගක්කෝනාර අමාත්‍යවරයා විසින් නිර්මාණය කළ ගැඹුරු දිය අගල් හා නෙළුම් විල් පහළින් දිස්වේ.'
        },
        historicalContext: {
          en: 'Hydro-defensive engineering transformed the peninsula into an impregnable stronghold.',
          si: 'ස්වභාවික ජල මාර්ග උපයෝගී කරගනිමින් කෝට්ටේ අපරාජිත ජල දුර්ගයක් බවට පත්කර තිබුණි.'
        },
        archaeologicalHighlight: {
          en: 'Traces of stone sluice outlets and defensive laterite bastions along the historic rampart line.',
          si: 'දිය පාලනය සඳහා ඉදිකළ ගල් සොරොව් සහ කබොක් මුරකොටු නටබුන්.'
        },
        image: '/images/journeys/diyawanna-lake.jpg',
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'konthaganthota-ferry',
        title: {
          en: '3. Konthaganthota: The River Crossing',
          si: '3. කොන්තගංතොට: ඓතිහාසික ගංගා තොටුපළ'
        },
        coordinates: [6.9280, 79.9020],
        cameraPitch: 45,
        cameraBearing: 355,
        zoom: 15.0,
        altitudeMeters: 60,
        sinhalaStanza: 'පෙරව සඳ කිරණ පිපි කුමුදු මල් වටින්\nපරව තඹර පෙති ගිලි දිය තලා පිටින්\nතරව සිහි ඇතිව පරතෙරට යන අටින්\nකරව පියාසර සකි කොන්ත ගං තොටින්',
        stanzaAttribution: 'Salalihini Sandeshaya — Stanza 21 (The Flight Over Konthaganthota)',
        stanzaMeaning: {
          en: '“Wrapped in moonbeams as white water-lilies blossom along the margins and faded lotus petals fall upon the waters, fly steadfastly across to the opposite bank, gentle friend, over Konthaganthota...”',
          si: 'හඳ රැස් පොරවාගත් කුමුදු මල් පිපි, නෙළුම් පෙති වැටී පාවෙන ජල තලාවෙන් එගොඩට යාමේ දැඩි සිහියෙන් යුතුව, මිතුරු සැළලිහිණියනි, කොන්තගංතොටින් එතෙරට පියාසර කරනු මැනවි.'
        },
        narrative: {
          en: 'Here the ancient royal roadway crossed the waterway. Outrigger canoes, river barges, and travelers crossed between Kotte and the riverine kingdoms.',
          si: 'කෝට්ටේ සිට කැලණිය දක්වා ගමන් කළ මගීන් හා වෙළෙඳුන් ගඟ හරහා එතෙර කළ ප්‍රධාන ඓතිහාසික තොටුපළයි.'
        },
        historicalContext: {
          en: 'A verified geographic landmark mentioned in 15th-century Sandeshaya literature connecting the interior to the lower Kelani valley.',
          si: '15 වන සියවසේ සන්දේශ කාව්‍යයන්හි සඳහන් වන, අභ්‍යන්තර වෙළෙඳ මාර්ග යා කළ කාර්යබහුල තොටුපළකි.'
        },
        archaeologicalHighlight: {
          en: 'Medieval stone landing steps and ancient timber boat mooring posts discovered in river sediments.',
          si: 'ගං ඉවුරේ පුරාණ ගල් පඩි සහ දිය යටින් හමුවූ දැව නැංගුරම් සාධක.'
        },
        image: '/images/journeys/kelani-river.jpg',
        identificationConfidence: 'traditional_ferry_crossing'
      },
      {
        id: 'isuru-kovil',
        title: {
          en: '4. Isuru Kovil & The Incense Altars',
          si: '4. ඉසුරු කෝවිල සහ කපුරු සුවඳ මන්දිරය'
        },
        coordinates: [6.9380, 79.9050],
        cameraPitch: 52,
        cameraBearing: 10,
        zoom: 14.5,
        altitudeMeters: 90,
        sinhalaStanza: 'කළුවැල් කපුරු දුම තුළ ලෙළෙන දද පෙළ\nසුවිසල් මිහිඟු සක් සන් මිණි හඬ පතළ\nකැරැ ලොල් සතන් පවසන තියු ගී දෙමළ\nමනකල් ඉසුරු කෝවිලැ ලගිනේ ලකළ',
        stanzaAttribution: 'Salalihini Sandeshaya — Stanza 22 (Isuru Kovil Shrine)',
        stanzaMeaning: {
          en: '“Where banners flutter through billowing clouds of incense and camphor smoke, where resonant drums, conches and bells echo while Tamil hymns are sweetly recited, take rest, gentle bird, in the delightful Isuru Kovil...”',
          si: 'කපුරු දුම් සහ ධජ පතාක මැද, බෙර, සක් සහ මිණි හඬ දසත පැතිරෙද්දී මිහිරි දෙමළ ගීත ගායනා කෙරෙන මනරම් ඉසුරු කෝවිලෙහි සැළලිහිණියනි විවේක ගන්න.'
        },
        narrative: {
          en: 'Crossing Konthaganthota, the messenger pauses at the historic Isuru Kovil, an ancient Shiva shrine patronized during the Kotte era, reflecting the religious harmony of the 15th-century kingdom.',
          si: 'කොන්තගංතොටින් එතෙර වූ සැළලිහිණියා ඉසුරු කෝවිලෙහි නැවතී විවේක ගන්නා අයුරු ශ්‍රී රාහුල හිමියන් විස්තර කරයි.'
        },
        historicalContext: {
          en: 'Evidences the multicultural and multi-religious fabric of King Parakramabahu VI’s unified realm.',
          si: 'හයවන පරාක්‍රමබාහු රජුගේ කාලයේ පැවති බහු-ආගමික හා සාමකාමී සංස්කෘතික පරිසරය පෙන්නුම් කරයි.'
        },
        archaeologicalHighlight: {
          en: 'Inscriptional references to royal endowments made by Kotte monarchs to guardian devalayas.',
          si: 'කෝට්ටේ රජවරුන් විසින් දේවාල හා සිද්ධස්ථාන සඳහා සිදුකළ පූජාවන් සනාථ කරන ලේඛන.'
        },
        image: '/images/journeys/munneswaram-kovil.jpg',
        identificationConfidence: 'literary_interpretation'
      },
      {
        id: 'kelani-river',
        title: {
          en: '5. The Sacred Kelani River (Kalyani Ganga)',
          si: '5. පුණ්‍යවන්ත කැලණි නදී තෙර'
        },
        coordinates: [6.9530, 79.9180],
        cameraPitch: 48,
        cameraBearing: 30,
        zoom: 15.2,
        altitudeMeters: 55,
        sinhalaStanza: 'මනහර නා මණෙවියනිඳ ළවැලි පිට\nගෙන මිණි වෙණ තත් නියගින් මැද රුවට\nකන හෙවැ කියන බුදු ගුණ ගී මියුරු කොට\nසැනහෙව කැලණි ගඟ බඩ මඳ කලක් සිට',
        stanzaAttribution: 'Salalihini Sandeshaya — Stanza 47 (The Maidens on Kelani River Sands)',
        stanzaMeaning: {
          en: '“Where enchanting Naga maidens seated upon the tender sands tune the jeweled lute with delicate fingernails and sing melodious hymns of the Buddha’s virtues, be refreshed, stay a while upon the banks of the Kelani River...”',
          si: 'මනහර නාග යුවතියන් ළවැලි තලාවේ හිඳ, මිණි වීණාවේ තත් නියගින් පිරිමදිමින් මියුරු බුදු ගුණ ගී ගයන කැලණි ගං ඉවුරේ මඳ වේලාවක් නැවතී සැනසෙන්න.'
        },
        narrative: {
          en: 'The broad curve of the Kelani River unfurls beneath the bird’s wings. Monks, bathing pilgrims, and riverside gardens create an atmosphere of spiritual peace as the sacred stupa comes into view.',
          si: 'කැලණි නදියේ රිදීවන් ජල ධාරාව දිස්වේ. වන්දනාකරුවන් සහ පන්සලේ ඝණ්ඨාර නාදය දසත පැතිරෙද්දී සැළලිහිණියා කැලණි පුදබිමට ළඟාවේ.'
        },
        historicalContext: {
          en: 'Sanctified in Buddhist tradition by the Buddha’s third visit to Sri Lanka upon the invitation of Naga King Maniakkitha.',
          si: 'මණිඅක්ඛිත නා රජුගේ ඇරයුමෙන් බුදුරජාණන් වහන්සේගේ තෙවන ලංකාගමනයෙන් පාරිශුද්ධත්වයට පත් පූජනීය භූමියයි.'
        },
        archaeologicalHighlight: {
          en: 'Ancient river terrace stone bathing stairs and flood-retaining stone works.',
          si: 'පුරාණ ගංගා තොටුපළ ගල් පඩි හා ජල ගැලීම් පාලන ශිලා බැමි.'
        },
        image: '/images/journeys/kelani-river.jpg',
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'kelaniya-vihara',
        title: {
          en: '6. Arrival: Kelaniya Raja Maha Vihara & Vibhishana Devalaya',
          si: '6. ගමනාන්තය: කැළණිය රජ මහා විහාරය සහ විභීෂණ දේවාලය'
        },
        coordinates: [6.9585, 79.9230],
        cameraPitch: 62,
        cameraBearing: 45,
        zoom: 16.5,
        altitudeMeters: 30,
        sinhalaStanza: 'සව්සිරි පිරි සුරපුර වන් කැලණි පුර දෙව් මෙ හසුන්\nවිබිසණ සුරිඳුට පවර මනරම් ලෙස පවස මියුරඳ',
        stanzaAttribution: 'Salalihini Sandeshaya — Stanza 5 & Concluding Verses (Invocation to God Vibhishana)',
        stanzaMeaning: {
          en: '“Deliver this royal petition with sweet accents before God Vibhishana, radiant sovereign of Kelaniya, fulfilling the King’s solemn prayer...”',
          si: 'සියලු සිරින් පිරි දිව්‍ය පුරයක් බඳු කැලණි පුරවරයේ වැඩසිටින විභීෂණ දෙවිඳුන්ට මේ රාජකීය හසුන ගොස් පවසනු මැනවි.'
        },
        narrative: {
          en: 'The journey reaches its culmination upon the sacred sand terrace of Kelaniya Raja Maha Vihara. Entering the Vibhishana Devalaya, the starling delivers the royal message, praying for a son for Princess Ulakudaya Devi. The chronicle records that the prayer was answered with the birth of Prince Jayabahu.',
          si: 'ධාන්‍යාකාර හැඩැති කැලණිය චෛත්‍ය රාජයාණන් ඉදිරියේ සැළලිහිණියා ගොඩබසී. විභීෂණ දේවාලයේදී පණිවුඩය පිරිනමමින් උලකුඩය දේවියට පුත් කුමරකු පැතීමේ රාජකීය මෙහෙවර සාර්ථකව නිමාවට පත්වේ.'
        },
        historicalContext: {
          en: 'The birth of Prince Jayabahu (later King Jayabahu II) is verified in the Culavamsa and contemporary 15th-century documents.',
          si: 'උලකුඩය දේවියට ජයබාහු කුමරු උපත ලද බව චූලවංශය හා 15 වන සියවසේ රාජකීය වාර්තා සනාථ කරයි.'
        },
        archaeologicalHighlight: {
          en: 'Dhanyakara stupa enshrining the legendary gem throne, medieval Bahirawa dwarf carvings, and inscriptions of King Parakramabahu IX.',
          si: 'මණිඅක්ඛිත රජු කළ මැණික් පුටුව නිදන් කළ දාගැබ, බහිරව කැටයම් සහ නවවන පරාක්‍රමබාහු රජුගේ ශිලා ලේඛනය.'
        },
        image: '/images/sites/kelaniya.jpg',
        rulerAssociation: {
          en: 'King Parakramabahu VI & Princess Ulakudaya Devi',
          si: 'හයවන පැරකුම්බා රජු සහ උලකුඩය දේවිය'
        },
        identificationConfidence: 'verified_landmark'
      }
    ],
    historicalNotes: {
      en: 'Composed c. 1450 CE during the reign of King Parakramabahu VI, Salalihini Sandeshaya is celebrated as the pinnacle of Sinhala messenger poetry. Every geographical waypoint named in the text corresponds to verified medieval river crossings and topographical landmarks between Kotte and Kelaniya.',
      si: 'හයවන පරාක්‍රමබාහු රජුගේ රාජ්‍ය සමයේදී රචිත සැළලිහිණි සන්දේශය සිංහල සන්දේශ කාව්‍යාවලියේ කිරුළ ලෙස සැලකේ. කාව්‍යයේ සඳහන් සෑම ස්ථානයක්ම කෝට්ටේ සහ කැලණිය අතර පැවති සැබෑ ඓතිහාසික භූගෝලීය සන්ධිස්ථාන වේ.'
    },
    sources: [
      'Salalihini Sandeshaya by Ven. Totagamuwe Sri Rahula Thera (c. 1450 CE)',
      'Department of Archaeology Sri Lanka: Archaeological Survey of Kotte Citadel',
      'Somaratne, G.P.V. (1975). Political History of the Kingdom of Kotte'
    ]
  },
  {
    id: 'sacred-tooth-relic',
    slug: 'sacred-tooth-relic-odyssey',
    title: {
      en: 'Odyssey of the Sacred Tooth Relic',
      si: 'ශ්‍රී දන්ත ධාතූන් වහන්සේගේ ඓතිහාසික වැඩමවීම'
    },
    subtitle: {
      en: 'Following the palladium of Sinhala sovereignty through seven royal kingdoms',
      si: 'රාජ්‍යත්වයේ උත්තරීතර සංකේතය වූ දළදා සමිඳුන් රාජධානි හතක් ඔස්සේ වැඩම කළ මහා ගමන'
    },
    periodName: {
      en: 'From Anuradhapura to Kandy (310 CE – 1815 CE)',
      si: 'අනුරාධපුරයේ සිට මහනුවර දක්වා'
    },
    dateDisplay: {
      en: '310 CE – 1815 CE',
      si: 'ක්‍රි.ව. 310 – ක්‍රි.ව. 1815'
    },
    description: {
      en: 'In ancient Sri Lanka, he who possessed the Sacred Tooth Relic of the Buddha possessed the legitimate right to the throne. Follow this epic journey spanning over 1,500 years from its arrival in Anuradhapura under King Kithsirimewan to Polonnaruwa, Dambadeniya, Yapahuwa, Kurunegala, Kotte, Delgamuwa, and its final sanctuary in the Temple of the Tooth in Kandy.',
      si: 'දළදා වහන්සේගේ භාරකාරත්වය යනු ලංකාවේ රාජ්‍යත්වයේ පරම සංකේතය විය. කිත්සිරිමෙවන් රජු දවස අනුරාධපුරයට වැඩම කළ තැන් පටන්, පොළොන්නරුව, දඹදෙණිය, යාපහුව, කුරුණෑගල, කෝට්ටේ, දැල්ගමුව හරහා මහනුවර ශ්‍රී දළදා මාලිගාව දක්වා වසර 1500කට අධික කාලයක් දිවෙන අසිරිමත් ගමන මෙහි දිගහැරේ.'
    },
    theme: 'sacred_relic',
    totalDistanceKm: 420.0,
    estimatedStops: 5,
    heroImage: '/images/sites/temple-of-the-tooth.jpg',
    audioTrackName: 'Temple Drums & Golden Chants',
    audioTrackTheme: 'temple_chant',
    waypoints: [
      {
        id: 'anuradhapura-meghagiri',
        title: {
          en: '1. Arrival in Lanka: Meghagiri Vihara (Anuradhapura)',
          si: '1. ලංකාගමනය: මේඝගිරි විහාරය (අනුරාධපුරය)'
        },
        coordinates: [8.3480, 80.3990],
        cameraPitch: 50,
        cameraBearing: 25,
        zoom: 15.0,
        altitudeMeters: 60,
        narrative: {
          en: 'In the 9th year of King Kithsirimewan (310 CE), Princess Hemamala and Prince Dantha brought the sacred relic concealed in Hemamala’s hair from Kalinga. It was first deposited in Meghagiri Vihara (Isurumuniya) before being enshrined in the royal pavilion.',
          si: 'කිත්සිරිමෙවන් රජුගේ 9 වන වර්ෂයේදී (ක්‍රි.ව. 310) හේමමාලා කුමරිය සහ දන්ත කුමරු විසින් දළදා වහන්සේ මේඝගිරි විහාරයට (ඉසුරුමුණියට) වැඩම කරවන ලදී.'
        },
        historicalContext: {
          en: 'Established the tradition of annual public expositions where the relic was processed to Abhayagiri monastery.',
          si: 'දළදා වහන්සේ අභයගිරි විහාරය වෙත වැඩමවා වාර්ෂික දළදා පෙරහැර පැවැත්වීමේ සම්ප්‍රදාය ඇරඹිණි.'
        },
        archaeologicalHighlight: {
          en: 'The ancient Tooth Relic Temple (Dalada Ge) ruins near the Royal Palace in the Anuradhapura Citadel.',
          si: 'අනුරාධපුර ඇතුළුනුවර රජ මාලිගය අසල පිහිටි දළදා ගේ නටබුන්.'
        },
        image: '/images/journeys/isurumuniya.jpg'
      },
      {
        id: 'polonnaruwa-atadage',
        title: {
          en: '2. The Medieval Enshrinement: Atadage & Hatadage (Polonnaruwa)',
          si: '2. මධ්‍යතන පූජාසනය: අටදාගෙය සහ හැටදාගෙය (පොළොන්නරුව)'
        },
        coordinates: [7.9424, 81.0008],
        cameraPitch: 55,
        cameraBearing: 110,
        zoom: 16.0,
        altitudeMeters: 50,
        narrative: {
          en: 'King Vijayabahu I built the Atadage guarded by elite Velaikkara mercenaries. King Nissanka Malla later constructed the stone Hatadage within 60 hours according to rock inscriptions.',
          si: 'මහා විජයබාහු රජු විසින් අටදාගෙය කරවා වේලයික්කාර සේනාවට එහි ආරක්ෂාව පැවරූ අතර, නිශ්ශංක මල්ල රජු හැටදාගෙය කරවීය.'
        },
        historicalContext: {
          en: 'Polonnaruwa Dalada Maluwa was the spiritual heart of the island where kings were crowned before the relic.',
          si: 'දළදා මළුව රාජ්‍යත්වයේ අභිෂේකය ලබන පූජනීය මධ්‍යස්ථානය විය.'
        },
        archaeologicalHighlight: {
          en: 'The Tamil Velaikkara slab inscription recording the sworn oath to defend the relic with their lives.',
          si: 'දළදා වහන්සේ ජීවිත පරිත්‍යාගයෙන් ආරක්ෂා කිරීමට දිවුරුම් දුන් වේලයික්කාර දෙමළ ශිලා ලේඛනය.'
        },
        image: '/images/journeys/hatadage.jpg'
      },
      {
        id: 'yapahuwa-shrine',
        title: {
          en: '3. The Granite Citadel: Yapahuwa Staircase Temple',
          si: '3. ගිරිදුර්ග පූජාසනය: යාපහුව ශිලා දළදා මැදුර'
        },
        coordinates: [7.8105, 80.3125],
        cameraPitch: 60,
        cameraBearing: 180,
        zoom: 16.2,
        altitudeMeters: 120,
        narrative: {
          en: 'King Bhuvanekabahu I installed the relic atop the monumental lion-guarded staircase. It was captured by Pandyan invaders and later valiantly recovered by King Parakramabahu III.',
          si: 'පළමුවන බුවනෙකබාහු රජු දැවැන්ත සිංහ පියගැටපෙළ මුදුනේ දළදා මැදුර කරවූ අතර, පසුව පාණ්ඩ්‍යයන් පැහැරගත් දළදාව තුන්වන පැරකුම්බා රජු යළි දිනාගත්තේය.'
        },
        historicalContext: {
          en: 'Reflects the military tension and relocation of capitals to steep rocky heights.',
          si: 'ආක්‍රමණ හමුවේ අගනුවරවල් උස් පර්වත මස්තක කරා රැගෙන යාමේ යුගය පෙන්නුම් කරයි.'
        },
        archaeologicalHighlight: {
          en: 'Elaborate perforated stone windows (Saluwatay) and dragon balustrades.',
          si: 'සියුම් කැටයම් සහිත සලුවතැයි ගල් කවුළු සහ කොරවක්ගල්.'
        },
        image: '/images/sites/yapahuwa.jpg'
      },
      {
        id: 'delgamuwa-grinding-stone',
        title: {
          en: '4. The Secret Underground Refuge: Delgamuwa Vihara (Kuruwita)',
          si: '4. රහසිගත රැකවරණය: දැල්ගමුව රජ මහා විහාරය (කුරුවිට)'
        },
        coordinates: [6.7680, 80.3620],
        cameraPitch: 45,
        cameraBearing: 65,
        zoom: 15.0,
        altitudeMeters: 110,
        narrative: {
          en: 'When Portuguese troops were razing Buddhist shrines in Kotte and Sitawaka, the monk Ven. Mahathera Keerawelle secretly concealed the Sacred Tooth inside a hollow stone grinding-mill (Kurahan Gala) at Delgamuwa for 43 years.',
          si: 'පෘතුගීසීන් වෙහෙර විහාර විනාශ කරද්දී, කීරවැල්ලේ තෙරණුවන් විසින් දළදා වහන්සේ කුරක්කන් ගලක් තුළ සඟවා වසර 43ක් රැකගත් පුණ්‍ය භූමිය.'
        },
        historicalContext: {
          en: 'The dramatic clandestine preservation of the palladium during the heights of Sitawaka-Portuguese wars.',
          si: 'සීතාවක-පෘතුගීසි යුගයේදී දළදා සමිඳුන් අනතුරෙන් බේරාගත් ත්‍රාසජනක ඉතිහාසය.'
        },
        archaeologicalHighlight: {
          en: 'The historic Kurahan Gala (granite grinding stone) preserved to this day within the temple shrine.',
          si: 'දළදා සමිඳුන් සැඟවූ ඓතිහාසික කුරක්කන් ගල අදටත් දැල්ගමුව විහාරයේ සුරක්ෂිතව පවතී.'
        },
        image: '/images/journeys/delgamuwa-vihara.jpg'
      },
      {
        id: 'kandy-dalada-maligawa',
        title: {
          en: '5. The Final Mountain Sanctuary: Sri Dalada Maligawa (Kandy)',
          si: '5. සදාතනික කඳුකර අභයභූමිය: ශ්‍රී දළදා මාලිගාව (මහනුවර)'
        },
        coordinates: [7.2936, 80.6413],
        cameraPitch: 58,
        cameraBearing: 310,
        zoom: 16.8,
        altitudeMeters: 510,
        narrative: {
          en: 'King Vimaladharmasuriya I brought the relic triumphantly up the mountain passes to Senkadagala. Housed within the two-storeyed inner sanctum, embellished with a golden canopy and octagonal Pattirippuwa, the Sacred Tooth Relic remains the spiritual core of Sri Lanka.',
          si: 'පළමුවන විමලධර්මසූරිය රජු දළදාව සෙංකඩගලට වැඩම කරවීය. රන් වියන හා අටපට්ටම් පත්තිරිප්පුවෙන් අලංකාර වූ ශ්‍රී දළදා මාලිගාවේ අදටත් වැඩවෙසෙමින් ලංකාද්වීපය ආරක්ෂා කරයි.'
        },
        historicalContext: {
          en: 'The continuous home of the world-renowned Esala Perahera pageant for over two centuries.',
          si: 'වසර දෙසියයකට වැඩි කාලයක් මුළුල්ලේ ඇසළ පෙරහැර මංගල්‍යය පැවැත්වෙන පූජනීය මධ්‍යස්ථානය.'
        },
        archaeologicalHighlight: {
          en: 'Pattirippuwa (octagonal tower), Golden Canopy, and the ancient Wadahitina Maligawa shrine room.',
          si: 'පත්තිරිප්පුව, රන් වියන සහ දළදා වහන්සේ වැඩසිටින මාලිගාව.'
        },
        image: '/images/sites/temple-of-the-tooth.jpg',
        rulerAssociation: {
          en: 'Vimaladharmasuriya I & Kirti Sri Rajasinha',
          si: 'පළමුවන විමලධර්මසූරිය සහ කීර්ති ශ්‍රී රාජසිංහ රජවරු'
        }
      }
    ],
    historicalNotes: {
      en: 'The Dathavamsa (Chronicle of the Tooth Relic) records the sacred journey that determined the legitimacy of every sovereign ruler of Sri Lanka for 1,500 years.',
      si: 'දාඨාවංශය මගින් සනාථ කරන මෙම පූජනීය ගමන, වසර 1500ක් පුරා ලක්දිව රජවරුන්ගේ රාජ්‍ය උරුමය තීරණය කළ උත්තරීතර සාධකය විය.'
    },
    sources: [
      'Dathavamsa (Pali Chronicle of the Tooth Relic)',
      'Mahavamsa and Culavamsa',
      'UNESCO World Heritage Documentation: Sacred City of Kandy'
    ]
  }  ,
  // 3. Ancient Rajarata Hydraulic Civilization
  {
    id: 'hydraulic-civilization',
    slug: 'ancient-irrigation-engineering-trail',
    title: {
      en: 'The Great Hydraulic Civilization of Rajarata',
      si: 'පුරාණ රජරට මහා වාරි ශිෂ්ටාචාරයේ ගමන් මඟ'
    },
    subtitle: {
      en: 'Witness the world\'s most sophisticated ancient water engineering network across dry-zone Sri Lanka',
      si: 'වියළි කලාපය සශ්‍රීක කළ ලොව අග්‍රගණ්‍ය පුරාණ වාරි තාක්ෂණය ඔස්සේ ගවේෂණය'
    },
    periodName: {
      en: 'Classical Anuradhapura & Polonnaruwa Eras (3rd c. – 12th c. CE)',
      si: 'අනුරාධපුර සහ පොළොන්නරු යුග'
    },
    dateDisplay: {
      en: 'c. 276 CE – 1186 CE',
      si: 'ක්‍රි.ව. 276 – 1186'
    },
    description: {
      en: 'Explore the monumental reservoirs, canal gradients, and subterranean sluice systems that transformed the arid northern plains into the rice granary of the East. Ancient engineers achieved impossible gradients of just 10 centimeters per kilometer along the 87-kilometer Jayaganga (Yoda Ela).',
      si: 'වියළි කලාපය පෙරදිග ධාන්‍යාගාරය බවට පත්කළ මහා වැව්, බිසෝකොටු සහ කිලෝමීටරයකට සෙන්ටිමීටර 10ක ආනතියක් පවත්වා ගත් යෝධ ඇළ ඔස්සේ අසිරිමත් වාරි ගමනක යෙදෙන්න.'
    },
    theme: 'hydraulic_trail',
    totalDistanceKm: 142.0,
    estimatedStops: 4,
    heroImage: '/images/sites/parakrama-samudra.jpg',
    audioTrackName: 'Rippling Water & Wind Ambiance',
    audioTrackTheme: 'cascade_water',
    waypoints: [
      {
        id: 'minneriya-reservoir',
        title: {
          en: '1. Minneriya Wewa (Tank of King Mahasena)',
          si: '1. මින්නේරිය වැව (මහසෙන් දෙවියන්ගේ වැව)'
        },
        coordinates: [8.0333, 80.8833],
        cameraPitch: 48,
        cameraBearing: 45,
        zoom: 14.5,
        altitudeMeters: 65,
        sinhalaStanza: 'අහසින් වැටෙන එකදු දිය බිඳකුදු - මිනිස් ලොවට වැඩ නොගෙනැ නොයන සේ\\nමහසෙන් නිරිඳු කළ මේ මහා සයුර - රැකදේ අදත් අපෙ මුතුන්මිත්තන්ගෙ උරුමය',
        stanzaAttribution: 'Rajarata Vap Maga Chronicle',
        stanzaMeaning: {
          en: '“Built by King Mahasena that not a single drop of water might leave without nourishing humanity...”',
          si: 'මහසෙන් නිරිඳුන් විසින් ලක්වැසියන් වෙනුවෙන් කළ මහා වැව අදටත් අපේ උරුමය රැකදෙයි.'
        },
        narrative: {
          en: 'Built in the 3rd century CE by King Mahasena (venerated as Minneriya Deiyo), this reservoir submerged over 4,670 acres, feeding an intricate network of channels.',
          si: 'ක්‍රි.ව. 3 වන සියවසේදී මහසෙන් රජු විසින් කරවන ලද මින්නේරිය වැව අක්කර 4,670ක් යටකරමින් මහා වාරි පද්ධතියකට මුලපිරීය.'
        },
        historicalContext: {
          en: 'Minneriya established the precedent for mega-scale imperial water storage in South Asia.',
          si: 'දකුණු ආසියාවේ මහා පරිමාණ ජලාශ ඉදිකිරීමේ මුල්ම පෙරගමන්කරු වූයේ මින්නේරියයි.'
        },
        archaeologicalHighlight: {
          en: 'Submerged feeder channels and early stone-faced sluice gates.',
          si: 'පැරණි ගල් බිසෝකොටු සහ පෝෂක ඇළ මාර්ග.'
        },
        image: '/images/journeys/minneriya-lake.jpg',
        rulerAssociation: {
          en: 'King Mahasena (276–303 CE)',
          si: 'මහසෙන් රජු'
        },
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'kalawewa-basin',
        title: {
          en: '2. Kalawewa & The Jayaganga (Yoda Ela)',
          si: '2. කලා වැව සහ ජයගඟ (යෝධ ඇළ)'
        },
        coordinates: [7.9733, 80.5367],
        cameraPitch: 52,
        cameraBearing: 310,
        zoom: 14.0,
        altitudeMeters: 90,
        narrative: {
          en: 'Engineered by King Dhatusena in 459 CE, Kalawewa fed the 87-kilometer Yoda Ela canal flowing to Anuradhapura at an unfathomable slope of 10 cm per kilometer.',
          si: 'ක්‍රි.ව. 459 දී ධාතුසේන රජු විසින් කළ කලා වැවෙන් ඇරඹෙන කිලෝමීටර් 87ක යෝධ ඇළ අනුරාධපුරය දක්වා අතිශය විස්මිත ආනතියකින් ජලය ගෙන ගියේය.'
        },
        historicalContext: {
          en: 'King Dhatusena famously declared to his captor son Kassapa that the waters of Kalawewa were his only true wealth.',
          si: '"මා සතු එකම ධනය කලා වැවයි" කියා ධාතුසේන රජු තම පුත් කාශ්‍යපට පැවසූ ඓතිහාසික පුවත මෙහිදී සිහිපත් වේ.'
        },
        archaeologicalHighlight: {
          en: 'Massive stone spillway and the intake portal of the Jayaganga canal.',
          si: 'විශාල කළුගල් පිටවාන සහ ජයගඟේ ප්‍රධාන දොරටුව.'
        },
        image: '/images/journeys/kala-wewa.jpg',
        rulerAssociation: {
          en: 'King Dhatusena (455–473 CE)',
          si: 'ධාතුසේන රජු'
        },
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'parakrama-samudra-stop',
        title: {
          en: '3. Parakrama Samudra (The Sea of Parakramabahu)',
          si: '3. පරාක්‍රම සමුද්‍රය (මහා පැරකුම් සයුර)'
        },
        coordinates: [7.9250, 80.9850],
        cameraPitch: 42,
        cameraBearing: 110,
        zoom: 13.8,
        altitudeMeters: 80,
        narrative: {
          en: 'Consolidating earlier tanks into a unified inland sea with a 14-kilometer bund, King Parakramabahu I created the zenith of medieval water mastery.',
          si: 'තෝපාවැව, එරමුදුවැව සහ දුඹුටුළුවැව එක්කර කිලෝමීටර් 14ක වැව් බැම්මකින් මහා පරාක්‍රමබාහු රජු කළ මහා සමුද්‍රය.'
        },
        historicalContext: {
          en: 'Fed by the Angamedilla canal diverting the Amban Ganga river from the central highlands.',
          si: 'අඹන් ගඟ හරස්කොට අඟමැඩිල්ල අමුණෙන් ජලය ලබාගත් විස්මිත වාරි සැලැස්ම.'
        },
        archaeologicalHighlight: {
          en: 'Ancient stone wave-breakers (Ralapanawa) and deep sluice cisterns.',
          si: 'රළපනාව හා ශිලාමය බිසෝකොටු තාක්ෂණය.'
        },
        image: '/images/sites/parakrama-samudra.jpg',
        rulerAssociation: {
          en: 'King Parakramabahu the Great (1153–1186 CE)',
          si: 'මහා පරාක්‍රමබාහු රජු'
        },
        identificationConfidence: 'verified_landmark'
      }
    ],
    historicalNotes: {
      en: 'The hydraulic civilization of Sri Lanka is recognized by global civil engineers as the pinnacle of ancient gravitational water control.',
      si: 'ලෝක ඉංජිනේරු ඉතිහාසයේ ගුරුත්වාකර්ෂණ බලයෙන් ක්‍රියා කළ විශිෂ්ටතම වාරි පද්ධතිය ලෙස පිළිගැනේ.'
    },
    sources: [
      'Culavamsa Chapters 68 & 79',
      'Brohier, R.L. (1934): Ancient Irrigation Works in Ceylon',
      'Needham, Joseph: Science and Civilization in China (Vol. 4, Hydraulic references to Ceylon)'
    ]
  },

  // 4. Maritime Coastal Fortresses Trail
  {
    id: 'maritime-colonial-fortresses',
    slug: 'maritime-coastal-forts-trail',
    title: {
      en: 'Colonial Maritime Fortresses of Lanka',
      si: 'ලක්දිව වෙරළබඩ යටත්විජිත බලකොටු ගමන් මඟ'
    },
    subtitle: {
      en: 'Trace the 300-year struggle for maritime supremacy from Colombo and Galle to Trincomalee and Jaffna',
      si: 'පෘතුගීසි, ලන්දේසි හා බ්‍රිතාන්‍ය සමුද්‍රීය බල අරගලය සනිටුහන් කළ වෙරළබඩ මුරකොටු'
    },
    periodName: {
      en: 'Colonial Maritime Era (1505–1796 CE)',
      si: 'යටත්විජිත සමුද්‍රීය යුගය'
    },
    dateDisplay: {
      en: '1505 CE – 1796 CE',
      si: 'ක්‍රි.ව. 1505 – 1796'
    },
    description: {
      en: 'From early Portuguese stockades to impregnable Dutch VOC stone bastions, explore how European maritime powers fortified the natural deep-water ports of Sri Lanka to control Indian Ocean cinnamon, spice, and silk trade routes.',
      si: 'කුරුඳු හා කුළුබඩු වෙළඳාමේ ඒකාධිකාරය තහවුරු කරගැනීමට ලන්දේසි හා පෘතුගීසි ජාතිකයන් විසින් කොළඹ, ගාල්ල, ත්‍රිකුණාමලය හා යාපනයේ ඉදිකළ කළුගල් මුරකොටු ගවේෂණය කරන්න.'
    },
    theme: 'colonial_ramparts',
    totalDistanceKm: 480.0,
    estimatedStops: 4,
    heroImage: '/images/sites/galle-fort.jpg',
    audioTrackName: 'Ocean Waves & Wind Ambiance',
    audioTrackTheme: 'ocean_breeze',
    waypoints: [
      {
        id: 'colombo-fort-point',
        title: {
          en: '1. Colombo Fort & Harbor',
          si: '1. කොළඹ කොටුව සහ ස්වභාවික වරාය'
        },
        coordinates: [6.9360, 79.8450],
        cameraPitch: 48,
        cameraBearing: 190,
        zoom: 14.8,
        altitudeMeters: 60,
        narrative: {
          en: 'First fortified by Lourenço de Almeida in 1505, Colombo evolved into the central administrative fortress of the Dutch VOC and later British Ceylon.',
          si: '1505 දී පෘතුගීසීන් ගොඩබැසීමෙන් පසු ඉදිකළ මුල් කොටුව පසුව ලන්දේසි පෙරදිග වෙළඳ සමාගමේ ප්‍රධාන බලකොටුව බවට පත්විය.'
        },
        historicalContext: {
          en: 'Site of the grueling seven-month siege of Colombo in 1655–1656 between the Dutch and Portuguese.',
          si: '1655–1656 කාලයේ ලන්දේසි සහ පෘතුගීසි හමුදා අතර පැවති ඓතිහාසික කොළඹ වටලෑම සිදුවූයේ මෙහිය.'
        },
        archaeologicalHighlight: {
          en: 'Surviving Dutch Hospital precinct, Delft Gate, and harbor bastion foundations.',
          si: 'ලන්දේසි රෝහල් පරිශ්‍රය, ඩෙල්ෆ්ට් දොරටුව සහ වරාය මුරකොටු පාදම්.'
        },
        image: '/images/journeys/colombo-dutch-hospital.jpg',
        rulerAssociation: {
          en: 'Dutch Governor Gerard Hulft (1656)',
          si: 'ජෙරාඩ් හල්ෆ්ට් ආණ්ඩුකාරවරයා'
        },
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'galle-fort-bastions',
        title: {
          en: '2. Galle Fort & Sea Bastions',
          si: '2. ගාල්ල ලන්දේසි බලකොටුව'
        },
        coordinates: [6.0267, 80.2170],
        cameraPitch: 50,
        cameraBearing: 340,
        zoom: 15.0,
        altitudeMeters: 45,
        narrative: {
          en: 'Spanning a 52-hectare promontory with 14 granite and coral bastions, Galle remains the best-preserved European fortified city in Asia.',
          si: 'හෙක්ටයාර 52ක අර්ධද්වීපයක බැස්ටියන් 14කින් සන්නද්ධ ගාල්ල කොටුව ආසියාවේ හොඳින්ම සුරැකිව ඇති යුරෝපීය බලකොටුවයි.'
        },
        historicalContext: {
          en: 'Captured by the Dutch in 1640 and maintained as their primary naval stronghold for 156 years.',
          si: '1640 දී ලන්දේසීන් අත්පත් කරගත් පසු වසර 156ක් ඔවුන්ගේ ප්‍රධාන නාවික කඳවුර ලෙස පැවතිණි.'
        },
        archaeologicalHighlight: {
          en: 'Star, Moon, and Sun Bastions with original VOC gunpowder magazines.',
          si: 'තරු, සඳ හා හිරු බැස්ටියන් සහ වෙඩි බෙහෙත් ගබඩා.'
        },
        image: '/images/sites/galle-fort.jpg',
        rulerAssociation: {
          en: 'Willem Jacobsz Coster & VOC commanders',
          si: 'විලෙම් කොස්ටර් සහ ලන්දේසි සෙන්පතියෝ'
        },
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'trincomalee-fort-frederick',
        title: {
          en: '3. Fort Frederick (Trincomalee Promontory)',
          si: '3. ෆෙඩ්රික් කොටුව (ත්‍රිකුණාමලය)'
        },
        coordinates: [8.5783, 81.2417],
        cameraPitch: 46,
        cameraBearing: 70,
        zoom: 14.5,
        altitudeMeters: 75,
        narrative: {
          en: 'Constructed by Portuguese general Constantine de Sá in 1623 atop the promontory of ancient Koneswaram temple, overlooking one of the finest natural deep-water harbors in the world.',
          si: 'ලොව විශිෂ්ටතම ස්වභාවික ගැඹුරු වරායක් රැකගැනීමට 1623 දී කොන්ස්ටන්ටයින් ද සා විසින් ඉදිකළ මුරකොටුවයි.'
        },
        historicalContext: {
          en: 'Fiercely contested throughout the 18th century between French, Dutch, and British naval fleets.',
          si: 'ප්‍රංශ, ලන්දේසි සහ බ්‍රිතාන්‍ය නාවික බලඇණි අතර නිරන්තර ගැටුම් වලට ලක්වූ උපායමාර්ගික නාවික කේන්ද්‍රයකි.'
        },
        archaeologicalHighlight: {
          en: 'Outer rampart masonry incorporating dressed stone pillars from the destroyed temple, and Swami Rock cliff.',
          si: 'පැරණි කෝවිලේ කැටයම් කළ ගල් කණු උපයෝගී කරගත් ආරක්ෂක පවුරු සහ ස්වාමි පර්වතය.'
        },
        image: '/images/journeys/fort-frederick.jpg',
        rulerAssociation: {
          en: 'Constantine de Sá de Noronha (1623)',
          si: 'කොන්ස්ටන්ටයින් ද සා ජෙනරාල්වරයා'
        },
        identificationConfidence: 'verified_landmark'
      },
      {
        id: 'jaffna-fort-peninsula',
        title: {
          en: '4. Jaffna Fort (The Star Fortress of the North)',
          si: '4. යාපනය කොටුව (උතුරේ පස්කොන් තරු කොටුව)'
        },
        coordinates: [9.6617, 80.0117],
        cameraPitch: 52,
        cameraBearing: 215,
        zoom: 15.2,
        altitudeMeters: 40,
        narrative: {
          en: 'Built between 1618 and 1680 on the Jaffna lagoon, this pentagonal star fortress was the second largest Dutch fortification in Sri Lanka.',
          si: 'යාපනය කලපුව අසල 1618–1680 අතර ඉදිකළ මෙම පස්කොන් තරු බලකොටුව ලංකාවේ දෙවන විශාලතම ලන්දේසි බලකොටුවයි.'
        },
        historicalContext: {
          en: 'Guarded the northern gateway against southern maritime incursions and northern trade passages.',
          si: 'උතුරු මුහුදු තීරයේ සහ පෝක් සමුද්‍ර සන්ධියේ වෙළඳ නාවික මඟ පාලනය කළ මුරපොළයි.'
        },
        archaeologicalHighlight: {
          en: 'Geometric pentagonal curtain walls, deep outer moat, and the Dutch Groote Kerk church ruins.',
          si: 'පස්කොන් ජ්‍යාමිතික පවුරු, පිටත දිය අගල සහ ලන්දේසි මහා දේවස්ථාන නටබුන්.'
        },
        image: '/images/journeys/jaffna-fort.jpg',
        rulerAssociation: {
          en: 'Ryklof van Goens & Philip Baldaeus',
          si: 'රයික්ලොෆ් වැන් ගොන්ස් සහ පිලිප් බැල්ඩියස්'
        },
        identificationConfidence: 'verified_landmark'
      }
    ],
    historicalNotes: {
      en: 'The coastal fortresses of Sri Lanka served as nodes in the global mercantile network connecting Lisbon, Amsterdam, and Batavia.',
      si: 'ලිස්බන්, ඇම්ස්ටර්ඩෑම් සහ බතාවියාව යා කළ ලෝක වෙළඳ ජාලයේ තීරණාත්මක මුරපොළවල් විය.'
    },
    sources: [
      'Nelson, W.A. (1984): The Dutch Forts of Sri Lanka',
      'Brohier, R.L. (1978): Links Between Sri Lanka and the Netherlands',
      'Baldaeus, Philip (1672): A Description of the East India Coasts of Malabar and Coromandel and the Island of Ceylon'
    ]
  }
];
