export interface HistoricalMapLayerConfig {
  id: string;
  name: { en: string; si: string };
  category: 'kingdoms' | 'irrigation' | 'routes' | 'forts' | 'archaeology';
  color: string;
  defaultVisible: boolean;
  uncertaintyDisclaimer: {
    en: string;
    si: string;
  };
  features: GeoJSON.FeatureCollection;
}

export const HISTORICAL_MAP_LAYERS: HistoricalMapLayerConfig[] = [
  {
    id: 'layer-kingdom-anuradhapura',
    name: {
      en: 'Anuradhapura Realm & Core Influence (Approximate)',
      si: 'අනුරාධපුර රාජධානියේ ආසන්න බල ප්‍රදේශය'
    },
    category: 'kingdoms',
    color: '#c6a15b',
    defaultVisible: true,
    uncertaintyDisclaimer: {
      en: 'Historical boundary approximation based on monastic epigraph distributions and chronicles. Not an exact modern surveyed border.',
      si: 'සෙල්ලිපි හා වංශකථා සාධක මත පදනම් වූ ආසන්න බල සීමාවකි. නූතන මැනුම් දේශසීමාවක් නොවේ.'
    },
    features: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'Rajarata Core Realm',
            period: 'Anuradhapura Kingdom (377 BCE – 1017 CE)',
            color: '#c6a15b'
          },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [79.80, 8.80],
                [80.50, 9.10],
                [81.10, 8.90],
                [81.30, 8.20],
                [80.90, 7.80],
                [80.30, 7.70],
                [79.80, 8.10],
                [79.80, 8.80]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    id: 'layer-kingdom-polonnaruwa',
    name: {
      en: 'Polonnaruwa Imperial Core (Approximate)',
      si: 'පොළොන්නරු අධිරාජ්‍ය කලාපය'
    },
    category: 'kingdoms',
    color: '#dfbd75',
    defaultVisible: false,
    uncertaintyDisclaimer: {
      en: 'Territorial sphere during the reign of King Parakramabahu I based on Culavamsa records.',
      si: 'මහා පරාක්‍රමබාහු රජුගේ පාලන සමයේ චූලවංශ වාර්තා අනුව සකස් කළ බල ප්‍රදේශය.'
    },
    features: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'Polonnaruwa Rajarata & Mahaweli basin',
            color: '#dfbd75'
          },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [80.10, 8.50],
                [80.90, 8.60],
                [81.40, 8.40],
                [81.50, 7.60],
                [80.90, 7.40],
                [80.40, 7.60],
                [80.10, 8.50]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    id: 'layer-ancient-irrigation',
    name: {
      en: 'Ancient Canals & Water Systems (Jaya Ganga & Elahera)',
      si: 'පුරාණ යෝධ ඇළ හා වාරි පද්ධතිය'
    },
    category: 'irrigation',
    color: '#38bdf8',
    defaultVisible: true,
    uncertaintyDisclaimer: {
      en: 'Traced from archaeological surveys and R.L. Brohier’s Ancient Irrigation Works in Ceylon.',
      si: 'ආර්.එල්. බ්‍රෝහියර්ගේ ලංකා වාරි මාර්ග පර්යේෂණ සහ පුරාවිද්‍යා මිනුම් අනුව සකස් කර ඇත.'
    },
    features: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'Jaya Ganga (Yoda Ela) Canal: Kalawewa to Anuradhapura (87 km)',
            gradient: '10 cm per kilometer',
            color: '#38bdf8'
          },
          geometry: {
            type: 'LineString',
            coordinates: [
              [80.5350, 7.9850], // Kalawewa
              [80.5100, 8.0400],
              [80.4850, 8.1200],
              [80.4500, 8.1900],
              [80.4200, 8.2700],
              [80.3950, 8.3300],
              [80.3900, 8.3500]  // Tissa Wewa Anuradhapura
            ]
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Elahera Canal: Amban Ganga to Minneriya & Kantale',
            color: '#38bdf8'
          },
          geometry: {
            type: 'LineString',
            coordinates: [
              [80.8200, 7.7500], // Elahera Anicut
              [80.8500, 7.9000],
              [80.8900, 8.0350], // Minneriya Wewa
              [80.9400, 8.2000],
              [81.0100, 8.3600]  // Towards Kantale
            ]
          }
        }
      ]
    }
  },
  {
    id: 'layer-historical-trade-routes',
    name: {
      en: 'Documented Ancient Royal Highways & Trade Routes',
      si: 'පුරාණ රාජකීය මාවත් සහ වෙළෙඳ ගමන් මාර්ග'
    },
    category: 'routes',
    color: '#f59e0b',
    defaultVisible: true,
    uncertaintyDisclaimer: {
      en: 'Approximate alignment inferred from ancient milestones, Ambalamas (wayside rests), and chronicle stops.',
      si: 'පුරාණ අම්බලම්, සෙල්ලිපි සහ වංශකථා තොටුපළවල් අනුව සකස් කළ ආසන්න මාර්ගයකි.'
    },
    features: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'Great North-South Royal Highway (Anuradhapura to Magama Ruhuna)',
            color: '#f59e0b'
          },
          geometry: {
            type: 'LineString',
            coordinates: [
              [80.4000, 8.3500], // Anuradhapura
              [80.5200, 8.1500],
              [80.6500, 7.8600], // Dambulla
              [80.7000, 7.6000], // Matale pass
              [80.7800, 7.3000], // Mahaweli crossing
              [81.0500, 6.9000], // Badulla pass
              [81.2500, 6.4500], // Buttala
              [81.3400, 6.2800]  // Magama / Tissamaharama
            ]
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Port Highway: Anuradhapura to Mahatittha (Manthai International Silk Route Port)',
            color: '#f59e0b'
          },
          geometry: {
            type: 'LineString',
            coordinates: [
              [80.4000, 8.3500], // Anuradhapura
              [80.2000, 8.5500],
              [80.0500, 8.7500],
              [79.9100, 8.9700]  // Manthai / Mahatittha
            ]
          }
        }
      ]
    }
  },
  {
    id: 'layer-colonial-forts',
    name: {
      en: 'Colonial Maritime Forts & Coastal Bastions (16th–18th C.)',
      si: 'යටත්විජිත සමුද්‍රාසන්න බලකොටු පද්ධතිය'
    },
    category: 'forts',
    color: '#10b981',
    defaultVisible: false,
    uncertaintyDisclaimer: {
      en: 'Verified coastal fortress locations based on Dutch VOC and British military surveys.',
      si: 'ලන්දේසි පෙරදිග වෙළෙඳ සමාගමේ හා බ්‍රිතාන්‍ය හමුදා සිතියම් මත පදනම් වූ නිවැරදි ස්ථානගත කිරීම්.'
    },
    features: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: { name: 'Galle Dutch Fort', era: '1663 Dutch VOC' },
          geometry: { type: 'Point', coordinates: [80.2170, 6.0270] }
        },
        {
          type: 'Feature',
          properties: { name: 'Colombo Fort', era: '1518 Portuguese / 1656 Dutch' },
          geometry: { type: 'Point', coordinates: [79.8430, 6.9370] }
        },
        {
          type: 'Feature',
          properties: { name: 'Jaffna Dutch Fort', era: '1680 Dutch VOC' },
          geometry: { type: 'Point', coordinates: [80.0100, 9.6610] }
        },
        {
          type: 'Feature',
          properties: { name: 'Fort Frederick Trincomalee', era: '1624 Portuguese / Dutch' },
          geometry: { type: 'Point', coordinates: [81.2400, 8.5750] }
        },
        {
          type: 'Feature',
          properties: { name: 'Matara Star Fort', era: '1765 Dutch VOC' },
          geometry: { type: 'Point', coordinates: [80.5480, 5.9500] }
        }
      ]
    }
  }
];
