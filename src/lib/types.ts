export type Language = 'en' | 'si';

export interface BilingualText {
  en: string;
  si: string;
}

export type EvidenceType = 'archaeological_excavation' | 'lithic_epigraph' | 'ancient_chronicle' | 'colonial_survey' | 'geological_sediment' | 'oral_tradition';
export type ConfidenceLevel = 'high_archaeological' | 'moderate_chronicle' | 'disputed_scholarly' | 'traditional_folklore';
export type PublicationStatus = 'draft' | 'pending_verification' | 'verified' | 'published';
export type ImageVerificationStatus = 'verified_authentic' | 'verified_archival_plate' | 'verified_modern_photo' | 'educational_reconstruction' | 'unverified_placeholder';

export interface HistoricalPeriod {
  id: string;
  slug: string;
  name: BilingualText;
  startYear: number; // Negative for BCE, positive for CE
  endYear: number;
  dateDisplay: BilingualText;
  isBCE?: boolean;
  datePrecision: 'exact' | 'approximate' | 'disputed' | 'traditional';
  tagline: BilingualText;
  overview: BilingualText;
  politicalCenters: BilingualText[];
  keyRulers: string[];
  keySites: string[];
  keyEvents: string[];
  significance: BilingualText;
  color: string;
  image: string;
  imageCreator?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  sources: string[];
  lastVerifiedAt?: string;
  publicationStatus?: PublicationStatus;
}

export interface Kingdom {
  id: string;
  slug: string;
  name: BilingualText;
  periodId: string;
  periodName: BilingualText;
  startYear: number;
  endYear: number;
  dateDisplay: BilingualText;
  capitals: BilingualText[];
  overview: BilingualText;
  geography: BilingualText;
  boundariesNote: BilingualText;
  prominentRulers: {
    name: BilingualText;
    reign: string;
    slug?: string;
  }[];
  majorMonuments: string[];
  archaeologicalSites: string[];
  hydraulicWorks: string[];
  declineOrTransition: BilingualText;
  image: string;
  imageCreator?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  coordinates: [number, number]; // [lat, lng]
  sources: string[];
  lastVerifiedAt?: string;
  publicationStatus?: PublicationStatus;
}

export interface HistoricalFigure {
  id: string;
  slug: string;
  name: BilingualText;
  epithet?: BilingualText;
  kingdomId: string;
  kingdomName: BilingualText;
  reignPeriod: BilingualText;
  reignStartYear?: number;
  reignEndYear?: number;
  datePrecision: 'exact' | 'approximate' | 'traditional';
  biography: BilingualText;
  achievements: BilingualText[];
  associatedMonuments: string[];
  relatedFigures: {
    name: BilingualText;
    relation: BilingualText;
  }[];
  portraitType: 'archaeological_sculpture' | 'mural_painting' | 'historical_illustration';
  image: string;
  imageAttribution: string;
  imageCreator?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  sources: string[];
  lastVerifiedAt?: string;
  publicationStatus?: PublicationStatus;
}

export interface HistoricalSite {
  id: string;
  slug: string;
  name: BilingualText;
  nameSinhala?: string;
  nameEnglish?: string;
  category: 'royal_capital' | 'religious_shrine' | 'fortress' | 'hydraulic_reservoir' | 'monastery' | 'colonial_fort';
  coordinates: [number, number]; // [latitude, longitude]
  latitude?: number;
  longitude?: number;
  coordinatePrecision?: 'gps_surveyed' | 'approximate_archaeological_mound' | 'regional_cluster';
  elevation?: number; // meters
  periodIds: string[];
  kingdomId?: string;
  historicalPeriod?: string;
  startDate?: string;
  endDate?: string;
  datePrecision?: 'exact' | 'approximate' | 'traditional' | 'disputed';
  significance: BilingualText;
  description: BilingualText;
  historicalSummarySinhala?: string;
  historicalSummaryEnglish?: string;
  architecturalHighlights: BilingualText[];
  archaeologicalEvidence: BilingualText;
  evidenceType?: EvidenceType;
  confidenceLevel?: ConfidenceLevel;
  uncertaintyNotes?: BilingualText;
  conservationStatus: BilingualText;
  image: string;
  primaryImage?: string;
  imageCreator?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  imageCaption?: BilingualText;
  imageVerificationStatus?: ImageVerificationStatus;
  pastImage?: string;
  pastImageDate?: string;
  pastImageCredit?: string;
  presentImageCredit?: string;
  threeDModelAvailable?: boolean;
  threeDType?: 'stupa' | 'sigiriya' | 'moonstone' | 'vatadage' | 'yapahuwa' | 'cave_temple' | 'temple_of_tooth' | 'colossal_statue' | 'fortress_bastion';
  threeDModelProvenance?: 'educational_reconstruction' | 'photogrammetric_scan' | 'architectural_drawing' | 'archaeological_scan' | 'architectural_survey';
  mapCamera?: {
    zoom: number;
    pitch: number;
    bearing: number;
  };
  relatedSites?: string[];
  relatedHistoricalFigures?: string[];
  relatedEvents?: string[];
  publicationStatus?: PublicationStatus;
  lastVerifiedAt?: string;
  sources: string[];
  sourceReferences?: {
    title: string;
    authorOrInstitution: string;
    url?: string;
    type: string;
  }[];
}

export interface HistoricalEvent {
  id: string;
  slug: string;
  title: BilingualText;
  year: number;
  dateDisplay: BilingualText;
  datePrecision: 'exact' | 'approximate' | 'traditional';
  category: 'battle' | 'religious' | 'political' | 'engineering' | 'cultural' | 'treaty';
  location: BilingualText;
  coordinates?: [number, number];
  overview: BilingualText;
  consequences: BilingualText;
  associatedFigures: string[];
  kingdomId: string;
  evidenceType?: EvidenceType;
  confidenceLevel?: ConfidenceLevel;
  sources: string[];
  lastVerifiedAt?: string;
  publicationStatus?: PublicationStatus;
}

export interface JourneyWaypoint {
  id: string;
  title: BilingualText;
  coordinates: [number, number]; // [lat, lng]
  cameraPitch: number; // e.g. 55 deg tilt
  cameraBearing: number; // rotation in degrees
  zoom: number;
  altitudeMeters: number;
  sinhalaStanza?: string; // e.g. for Salalihini Sandeshaya
  stanzaMeaning?: BilingualText;
  stanzaAttribution?: string; // Specific chapter & verse in Totagamuwe Sri Rahula's text
  narrative: BilingualText;
  historicalContext: BilingualText;
  archaeologicalHighlight: BilingualText;
  image: string;
  imageCreator?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  rulerAssociation?: BilingualText;
  identificationConfidence?: 'verified_landmark' | 'traditional_ferry_crossing' | 'literary_interpretation';
}

export interface HistoricalJourney {
  id: string;
  slug: string;
  title: BilingualText;
  subtitle: BilingualText;
  periodName: BilingualText;
  dateDisplay: BilingualText;
  description: BilingualText;
  theme: 'literary_flight' | 'sacred_relic' | 'hydraulic_trail' | 'rock_citadels' | 'colonial_ramparts';
  totalDistanceKm: number;
  estimatedStops: number;
  heroImage: string;
  audioTrackName: string;
  audioTrackTheme: 'kotte_flute' | 'temple_chant' | 'cascade_water' | 'ocean_breeze';
  waypoints: JourneyWaypoint[];
  historicalNotes: BilingualText;
  sources: string[];
}

export interface HistoricalStory {
  id: string;
  slug: string;
  title: BilingualText;
  subtitle: BilingualText;
  authorOrCurator: string;
  readTime: string;
  periodId: string;
  coverImage: string;
  imageCreator?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  summary: BilingualText;
  sections: {
    heading: BilingualText;
    body: BilingualText;
    image?: string;
    caption?: BilingualText;
  }[];
  relatedSites: string[];
  relatedRulers: string[];
  sources: string[];
}

export interface HistoricalSource {
  id: string;
  title: string;
  nativeTitle?: string;
  authorOrTradition: string;
  periodOrEra: string;
  sourceType: 'ancient_chronicle' | 'epigraph_inscription' | 'archaeological_report' | 'academic_publication' | 'colonial_record';
  description: string;
  institutionOrPublisher: string;
  url?: string;
}
