# 📜 Changelog — My Dead Drops

Všechny významné změny v projektu jsou zaznamenány v tomto souboru.

---

## [1.1.0] - 2026-09-18

### 🔐 Přidáno (Security & E2EE)
- **End-to-End Šifrování (E2EE):** Veškeré citlivé údaje (textový popis úschovy a fotografie) jsou nyní šifrovány přímo v prohlížeči před jejich uložením.
- **Web Crypto API:** Použití standardizovaného AES-GCM (256-bit) šifrování s unikátním IV (Initialization Vector) pro každý záznam.
- **Derivace klíčů:** Odvození šifrovacího klíče z 6místného PIN kódu pomocí algoritmu PBKDF2 (100 000 iterací, SHA-256).

### 📱 Přidáno (PWA & Offline support)
- **Web App Manifest (`manifest.json`):** Podpora pro instalaci aplikace přímo na plochu mobilních zařízení (iOS / Android).
- **Service Worker (`sw.js`):** Automatické cachování statických zdrojů a knihoven pro plnohodnotné spuštění aplikace bez připojení k internetu.

### 🎨 Změny v UI
- **Changelog Modal:** Přidáno tlačítko v patičce aplikace s možností zobrazit historii změn přímo na displeji mobilu.
- Rozšíření indikátorů šifrování u formulářů a tlačítka pro odeslání.

---

## [1.0.0] - 2026-09-15

### 🚀 Výchozí vydání
- Základní architektura aplikace pro role **Vendor** a **Zákazník**.
- Interaktivní mapa (Leaflet.js + OpenStreetMap) s podpora GPS zaměření.
- EXIF stripping pro nahrávané fotografie přes Canvas API.
- Generátor 6místných PIN kódů.
- Burn-after-read logika (automatické smažení z `localStorage` po přečtení).
