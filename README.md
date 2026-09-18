# ddrop

# 📍 My Dead Drops

**My Dead Drops** je lehká, anonymní a na bezpečnost zaměřená webová aplikace (PWA) určená pro sdílení fyzických úschov (dead drops) mezi dvěma stranami: **Vendor** (vytváří úschovu) a **Zákazník** (objevuje úschovu pomocí 6místného PIN kódu).

Aplikace funguje **bez jakékoliv registrace**, bez sběru osobních údajů a s důrazem na ochranu soukromí (odstraňování EXIF dat z fotografií přímo na zařízení).

---

## 🚀 Hlavní vlastnosti a aktuální funkce

### 🏢 Vendor Flow (Vytvoření úschovy)
- **Interaktivní mapa & GPS:** Automatické zaměření aktuální polohy přes GPS nebo ruční posun špendlíku po mapě (OpenStreetMap + Leaflet).
- **Textový popis:** Možnost přidat podrobný návod k nalezení úschovy (limit 500 znaků).
- **Fotodokumentace:** Nahrání až 3 fotografií úschovy (podpora mobilního fotoaparátu).
- **Ochrana soukromí (Client-Side EXIF Stripping):** Veškeré fotky jsou před uložením prohnány přes Canvas API v prohlížeči, které fyzicky odstraní veškerá EXIF/GPS metadata z fotoaparátu.
- **Generátor PIN kódu:** Vytvoření kryptograficky bezpečného 6místného PINu (kombinace čísel a velkých písmen s vyloučením vizuálně zaměnitelných znaků jako `0`, `O`, `1`, `I`).
- **Burn-After-Read (Zničit po přečtení):** Volitelná možnost automatického a trvalého smazání dat o úschově ihned po jejím prvním otevření zákazníkem.

### 👤 Zákazník Flow (Vyzvednutí)
- **Jednoduché rozhraní:** Vstupní obrazovka pro rychlé zadání 6místného PINu.
- **Přesná lokalizace:** Zobrazení úschovy na interaktivní mapě s fotkami a textovým popisem.
- **Přímá navigace:** Tlačítko pro okamžité přesměrování do externí mapové aplikace (Google Maps) s nastaveným cílem navigace.

### 🛠 Technické vlastnosti
- **Klientská architektura (Client-First):** Běží kompletně v prohlížeči, využívá `localStorage` a Nevyžaduje backend ani databázový server.
- **Moderní Dark Mode UI:** Responzivní minimalistické rozhraní postavené na Tailwind CSS a ikonách Lucide.
- **Připraveno pro mobilní zařízení:** Optimalizováno pro dotykové displeje s možností uložení na plochu jako PWA.

---

## 🛠 Použité technologie

* **Frontend Framework:** Vanilla HTML5 / JavaScript (ES6+)
* **Styling:** Tailwind CSS (via CDN)
* **Mapové podklady:** Leaflet.js + OpenStreetMap
* **Ikony:** Lucide Icons
* **Hosting:** GitHub Pages (statický hosting)

---

## ⚙️ Jak spustit lokálně

1. Klonujte tento repozitář:
   ```bash
   git clone [https://github.com/VASE-JMENO/my-dead-drops.git](https://github.com/VASE-JMENO/my-dead-drops.git)
