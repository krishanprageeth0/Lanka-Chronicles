import { HistoricalSource } from '../lib/types';

export const HISTORICAL_SOURCES: HistoricalSource[] = [
  {
    id: 'mahavamsa',
    title: 'Mahavamsa: The Great Chronicle of Ceylon',
    nativeTitle: 'මහාවංසය',
    authorOrTradition: 'Venerable Mahanama Thera (5th Century CE) & Later Continuations',
    periodOrEra: '5th Century CE onwards',
    sourceType: 'ancient_chronicle',
    description: 'The monumental Pali verse chronicle recording the unbroken lineage of monarchs, Buddhist foundations, hydraulic works, and diplomatic missions of Sri Lanka from the 6th century BCE to 1815 CE.',
    institutionOrPublisher: 'Pali Text Society / Translated by Wilhelm Geiger'
  },
  {
    id: 'culavamsa',
    title: 'Culavamsa: Being the More Recent Part of the Mahavamsa',
    nativeTitle: 'චූලවංසය',
    authorOrTradition: 'Venerable Dhammakitti Thera & Subsequent Monastic Scholars',
    periodOrEra: '13th to 18th Century CE',
    sourceType: 'ancient_chronicle',
    description: 'Continuation of the Mahavamsa covering the kingdoms of Polonnaruwa, Dambadeniya, Yapahuwa, Kurunegala, Gampola, Kotte, Sitawaka, and Kandy.',
    institutionOrPublisher: 'Pali Text Society / Translated by Wilhelm Geiger & C. Mabel Rickmers'
  },
  {
    id: 'salalihini-sandeshaya',
    title: 'Salalihini Sandeshaya (The Starling’s Messenger Poem)',
    nativeTitle: 'සැළලිහිණි සන්දේශය',
    authorOrTradition: 'Venerable Totagamuwe Sri Rahula Mahathera (c. 1450 CE)',
    periodOrEra: 'Kingdom of Kotte (15th Century CE)',
    sourceType: 'ancient_chronicle',
    description: 'A classical Sinhala lyric sandeshaya poem composed during the reign of King Parakramabahu VI describing the flight path and topographical sights from the citadel of Kotte to Kelaniya temple.',
    institutionOrPublisher: 'Department of Cultural Affairs Sri Lanka'
  },
  {
    id: 'epigraphia-zeylanica',
    title: 'Epigraphia Zeylanica: Being Lithic and Other Inscriptions of Ceylon',
    authorOrTradition: 'Don Martino de Zilva Wickremasinghe, Senarath Paranavitana & Archaeological Survey',
    periodOrEra: '1904 to Present',
    sourceType: 'epigraph_inscription',
    description: 'Scholarly transcriptions, translations, and archaeological analyses of thousands of Brahmi rock inscriptions, copper plates, and pillar edicts across Sri Lanka.',
    institutionOrPublisher: 'Department of Archaeology Sri Lanka / Oxford University Press'
  },
  {
    id: 'brohier-irrigation',
    title: 'Ancient Irrigation Works in Ceylon (Parts I, II & III)',
    authorOrTradition: 'R.L. Brohier, F.R.G.S.',
    periodOrEra: '1934 (Survey Department Colombo)',
    sourceType: 'archaeological_report',
    description: 'The definitive field survey documenting the engineering feats, gradients, bunds, and sluice mechanisms (Bisokotuwa) of ancient Sri Lankan reservoirs and canal networks.',
    institutionOrPublisher: 'Ministry of Mahaweli Development / Survey Department of Ceylon'
  },
  {
    id: 'unesco-world-heritage',
    title: 'UNESCO World Heritage Convention Dossiers: Cultural Triangle of Sri Lanka',
    authorOrTradition: 'UNESCO World Heritage Centre & Central Cultural Fund',
    periodOrEra: '1982 to Present',
    sourceType: 'academic_publication',
    description: 'Official evaluation dossiers and conservation reports for Sacred City of Anuradhapura (200), Ancient City of Polonnaruwa (201), Ancient City of Sigiriya (202), Sacred City of Kandy (450), and Old Town of Galle and its Fortifications (451).',
    institutionOrPublisher: 'UNESCO / Central Cultural Fund'
  }
];
