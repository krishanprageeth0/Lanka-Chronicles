# 🏛️ LANKA CHRONICLES (කාලය හරහා ලංකා ගවේෂණය)
### Discover Sri Lanka Through Time — An Interactive 3D & GIS Digital Heritage Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=flat&logo=three.js)](https://threejs.org/)
[![MapLibre GL](https://img.shields.io/badge/MapLibre-GL-blue?style=flat)](https://maplibre.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](https://opensource.org/licenses/MIT)

**Lanka Chronicles** is an immersive, cinematic digital atlas and historical exploration experience dedicated to chronicling over 2,500 years of Sri Lankan civilization, archaeological monuments, hydraulic civilizations, royal dynasties, and classical Sinhala literature.

---

## ✨ Key Features

### 1. 🦅 Interactive 3D Messenger Flight — *Salalihini Sandeshaya* (1450 CE)
- **Real 3D Waypoint Navigation**: Trace the 15th-century flight path of the starling messenger dispatched by King Parakramabahu VI from the Royal Citadel of Jayawardhanapura Kotte to Lord Vibhishana at Kelaniya Raja Maha Vihara.
- **Authentic 111 Classical Verses (අව්‍යාජ කවි 111)**:
  - All 111 original Sinhala poetic stanzas (*සිව්පද පද්‍ය පංති*).
  - Modern prose explanations in Sinhala (*සරල අර්ථය / තේරුම*).
  - High-fidelity poetic English translations.
  - Archaeological and historical annotations.
- **Dedicated Anthology Reader**: Explore the full 111 verses collection with instant search and canto filters at `/map/verses`.

### 2. 🗺️ Historical Cartography & GIS Explorer (`/explore`)
- **Interactive Multi-Period Map**: Accurate geographic boundaries across Anuradhapura, Polonnaruwa, Dambadeniya, Yapahuwa, Kurunegala, Gampola, Kotte, Sitawaka, and Kandy.
- **Verified Archaeological Dossiers**: In-depth historical data, geographic coordinates (WGS-84), architectural styles, past-vs-present interactive sliders, and 3D monument reconstructions.
- **Cartographic Layers**: Topographic contours, ancient canal networks (*ඇළ මාර්ග*), irrigation reservoirs (*වැව්*), and historical trade routes.

### 3. 👑 Verified Monarchs & Historic Leaders (`/rulers`)
- Authentic historical portraits, contemporary rock reliefs, and royal museum artifacts for 11 verified leaders (from King Pandukabhaya, Dutugemunu, Valagamba, Kashyapa I to Parakramabahu I, Parakramabahu VI, and Rajasinha I & II).

### 4. 📱 100% Mobile Responsive Architecture
- Native-like bottom sheet drawer for reading poetic verses while flying over 3D terrain.
- Fast, fluid touch interactions, responsive layouts, and bilingual (Sinhala & English) UI support.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Hydration)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom luxury heritage theme (Obsidian `#111512`, Antique Gold `#C6A15B`, Warm Parchment `#F2E8D5`)
- **3D Graphics**: [Three.js](https://threejs.org/) for real-time terrain, bird flight animation, particle ambience, and monument rendering
- **GIS Mapping**: [MapLibre GL JS](https://maplibre.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: *Cinzel*, *Cinzel Decorative*, *Inter*, and *Noto Sans Sinhala*

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.17.0 or newer)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/krishanprageeth0/Lanka-Chronicles.git
   cd Lanka-Chronicles
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

---

## 👨‍💻 System Architecture & Development

- **Design & Engineering**: **Knexa System (Krishan Prageeth)**
- **Contact / GitHub**: [@krishanprageeth0](https://github.com/krishanprageeth0)
- **Dedicated To**: Preserving, digitizing, and celebrating the peerless historical heritage of Sri Lanka for the world.

---

## 📜 Historical Attribution & Sources

- *Mahavamsa* & *Culavamsa* (Geiger translation & Pali Text Society records)
- *Salalihini Sandeshaya* by Ven. Totagamuwe Sri Rahula Thera (c. 1450 CE)
- Department of Archaeology Sri Lanka & Central Cultural Fund (CCF)
- National Museum of Colombo archaeological archives
