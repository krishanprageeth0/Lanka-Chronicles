import { HistoricalStory } from '../lib/types';

export const HISTORICAL_STORIES: HistoricalStory[] = [
  {
    id: 'story-salalihini-flight',
    slug: 'the-poetic-flight-of-salalihini',
    title: {
      en: 'The Flight of the Messenger: Decoding Salalihini Sandeshaya',
      si: 'පියාඹන පණිවුඩකරු: සැළලිහිණි සන්දේශයේ භූගෝලීය රහස්'
    },
    subtitle: {
      en: 'How a 15th-century Sinhala poem preserved the geography and royal life of medieval Kotte',
      si: '15 වන සියවසේ විශිෂ්ට කාව්‍යයක් මධ්‍යතන කෝට්ටේ භූගෝලය හා රාජකීය අසිරිය ලොවට හෙළි කළ අයුරු'
    },
    authorOrCurator: 'Prof. Senake Bandaranayake & Lanka Chronicles Curatorial Guild',
    readTime: '6 min read',
    periodId: 'kotte',
    coverImage: '/images/sites/kelaniya.jpg',
    summary: {
      en: 'When Venerable Totagamuwe Sri Rahula dispatched a starling bird from the fortified walls of Kotte to the ancient shrine of Kelaniya, he created more than high literature: he created one of the most vivid GIS records of medieval Asia.',
      si: 'තොටගමුවේ ශ්‍රී රාහුල හිමියන් කෝට්ටේ මාලිගාවේ සිට කැලණි පුදබිම දක්වා සැළලිහිණියා පිටත් කළ විට, උන්වහන්සේ සාහිත්‍ය නිර්මාණයකට එහා ගිය මධ්‍යතන ආසියාවේ විශිෂ්ටතම භූගෝලීය වාර්තාවක් බිහිකළහ.'
    },
    sections: [
      {
        heading: {
          en: 'A Fortress Carved in Water and Laterite',
          si: 'දියෙන් සහ කබොක් ගලින් නිර්මිත බලකොටුව'
        },
        body: {
          en: 'In 1450 CE, Sri Jayawardanapura Kotte was virtually impregnable. Built on an elevated peninsula surrounded by the marshy loops of the Diyawanna river, the city was accessed solely through causeways defended by heavy timber gates and laterite ramparts. Stanza by stanza, Sri Rahula describes the glittering moats that reflected the white churn of royal boats like pearl necklaces.',
          si: 'ක්‍රි.ව. 1450 වන විට කෝට්ටේ නගරය දියවන්නා ඔයේ වගුරු බිම් වලින් වටවූ අපරාජිත ජල දුර්ගයක් විය. මුතු මාලයක් මෙන් පෙණ නංවමින් ගලාගිය දිය අගල් සහ කබොක් පවුරු මතින් සැළලිහිණියා පියාසර කළ ආකාරය කාව්‍යයේ මනහරව විස්තර වේ.'
        }
      },
      {
        heading: {
          en: 'The Prayer of a King',
          si: 'රජෙකුගේ හදපිරි ප්‍රාර්ථනය'
        },
        body: {
          en: 'King Parakramabahu VI had unified Sri Lanka, but his golden lineage faced uncertainty. His beloved daughter, Princess Ulakudaya Devi, had not yet borne an heir to the throne. The mission entrusted to the starling bird was to convey a royal plea to God Vibhishana at Kelaniya. The chronicle confirms that the prayer was granted: Princess Ulakudaya Devi subsequently gave birth to Prince Jayabahu.',
          si: 'මුළු රටම එක්සේසත් කළ හයවන පැරකුම්බා නිරිඳුන්ගේ දියණිය වූ උලකුඩය දේවියට රාජ්‍ය උරුමක්කාර පුත් කුමරකු නොසිටීම නිසා, කැලණියේ විභීෂණ දෙවියන්ගෙන් වරම් පතා මෙම පණිවුඩය යැවිණි. අනතුරුව ජයබාහු කුමරුගේ උපත සිදුවිය.'
        }
      }
    ],
    relatedSites: ['kotte-palace-moat', 'kelaniya-vihara'],
    relatedRulers: ['parakramabahu-vi'],
    sources: ['Salalihini Sandeshaya', 'Somaratne, G.P.V. Political History of Kotte']
  },
  {
    id: 'story-sigiriya-graffiti',
    slug: 'voices-on-the-mirror-wall',
    title: {
      en: 'Voices on the Mirror Wall: 1,500 Poems of Ancient Wanderers',
      si: 'කැඩපත් පවුරේ හඬ: වසර දහසක් පැරණි කවීන්ගේ සීගිරි කුරුටු ගී'
    },
    subtitle: {
      en: 'How ordinary pilgrims recorded their astonishment, love, and poetic wit on polished plaster',
      si: 'සීගිරිය නැරඹූ සාමාන්‍ය වන්දනාකරුවන් තම මවිතය හා ආදරය කවි ලෙස සටහන් කළ අපූරු ඉතිහාසය'
    },
    authorOrCurator: 'Prof. Senarath Paranavitana Tribute & Cultural Triangle Archives',
    readTime: '7 min read',
    periodId: 'anuradhapura',
    coverImage: '/images/rulers/sigiri-frescoes.jpg',
    summary: {
      en: 'Long before modern social media or guestbooks, ancient travelers from all walks of Sri Lankan life engraved their reactions to the Sigiriya frescoes directly onto the porcelain-smooth Mirror Wall between the 6th and 13th centuries CE.',
      si: 'නූතන සමාජ මාධ්‍ය බිහිවීමට සියවස් ගණනාවකට පෙර, ක්‍රි.ව. 6 සිට 13 වන සියවස් දක්වා සීගිරිය නැරඹූ විවිධ තරාතිරමේ මිනිසුන් කැඩපත් පවුර මත තම කවි කුරුටු ගෑහ.'
    },
    sections: [
      {
        heading: {
          en: 'The Mirror-Smooth Chemistry',
          si: 'කැඩපතක් බඳු ඔපදැමූ රසායනය'
        },
        body: {
          en: 'The Mirror Wall (Katapath Pavura) was plastered with a mixture of lime, egg white, honey, and plant sap, polished with crystalline stones until it reflected the visitor like a dark bronze mirror. Over centuries, tourists visiting the abandoned rock used copper styluses to scratch poems in classical Sinhala verse (Giti).',
          si: 'හුණු, බිත්තර සුදුමද, මීපැණි සහ ඖෂධීය ශාක යුෂ මිශ්‍ර කර සාදා ගල් කැට වලින් ඔපදැමූ කැඩපත් පවුර, තඹ කටු වලින් පද්‍ය රචනා කිරීමට කදිම තලයක් විය.'
        }
      }
    ],
    relatedSites: ['sigiriya'],
    relatedRulers: ['kashyapa-i'],
    sources: ['Paranavitana, Senarath. (1956). Sigiriya Graffiti (2 vols)']
  }
];
