# 📍 My Dead Drops

**My Dead Drops** je lehká, anonymní a na bezpečnost zaměřená PWA aplikace určená pro bezpečnou správy a anonymní sdílení fyzických úschov (dead drops).

Aplikace funguje **bez jakékoliv registrace** a využívá architekturu **Client-Side E2EE** (zašifrování dat přímo v prohlížeči před uložením) a **PWA / Standalone Local Engine** s možností cloudové synchronizace.

---

## 🏗️ Architektura a oddělení rolí

Aplikace je z bezpečnostních důvodů striktně rozdělená do samostatných modulů, aby běžný zákazník neměl přístup k administračním ani vendorským rozhraním:

1. **`index.html` (Zákaznický portál & AR Navigace):**
   * Vstup pro zadání 6místného PINu a dešifrování úschovy.
   * Zobrazení detailu lokace na interaktivní mapě s fotogalerií.
   * Živý **🧭 AR Kompas** pro navádění vzdušnou čarou.
   * Odkaz pro podání žádosti o nový drop.

2. **`vendor.html` (Vendorský portál & Administrace):**
   * **Vytvoření úschovy:** Mapa s pohyblivým špendlíkem (`draggable`), GPS zaměřením polohy a automatickým čištěním EXIF dat z fotografií.
   * **Správa a párování požadavků:** Přehled příchozích poptávek od zákazníků s možností **přímého spárování požadavku s nově vytvářeným dropem**.
   * **Administrace:** Přehled všech aktivních dropů a správa lokálního/cloudového úložiště.

3. **`request.html` (Portal pro podání žádosti):**
   * Veřejný formulář pro objednávku nového dropu (specifikace částky v Kč, volitelný kupon PaysafeCard a poznámka k lokalitě).

---

## 🚀 Přehled aktuálních funkcí (v1.6.0)

### 🔐 Bezpečnost & Soukromí
- **End-to-End Šifrování (E2EE):** Popis i fotografie jsou šifrovány pomocí standardu **AES-GCM (256-bit)** s derivací klíče přes **PBKDF2** (30 000 iterací) přímo v zařízení.
- **Client-Side EXIF Stripping:** Veškerá EXIF/GPS metadata z fotografií jsou před zašifrováním fyzicky odstraněna pomocí HTML5 Canvas.
- **Burn-After-Read (Auto-destrukce):** Volitelné trvalé smazání záznamu ihned po prvním úspěšném dešifrování zákazníkem.

### 🧭 Navigace & Lokace
- **Interaktivní Leaflet Mapa:** Podpora ručního přetažení špendlíku po mapě i kliknutí na vybrané místo.
- **GPS Zaměření:** Tlačítko pro bleskové zaměření přesné polohy zařízení.
- **🧭 AR Kompas:** Živá směrová navigace využívající gyroskop (`deviceorientation`) a výpočet ortodromického azimutu z GPS souřadnic. Zobrazuje vzdálenost v metrech a otáčí šipku k cíli v reálném čase.

### 🔄 Párování požadavků (Request-to-Drop Pairing)
- Zákazník může přes formulář podat žádost s volitelným kuponem PaysafeCard.
- Vendor v portálu `vendor.html` klikne na **"Vytvořit Drop pro požadavek"**, čímž se aktivuje párovací režim.
- Po vygenerování PINu se požadavek automaticky označí jako **Vyřízeno** a trvale se spáruje se vzniklým dead dropem.

### 📱 PWA & Oznámení
- **In-App Toast Notifikace:** Plynulá vizuální oznámení o všech stavových akcích (zašifrování, chyba PINu, přesun špendlíku, zničení úschovy).
- **Service Worker (`sw.js`):** Podpora pro offline běh a instalaci na plochu iOS/Android zařízení (`manifest.json`).

---

## 📂 Struktura souborů v repozitáři

```text
my-dead-drops/
├── index.html            # Zákaznické rozhraní (Dešifrování, Mapa, AR Kompas)
├── vendor.html           # Vendorský portál (Tvorba dropů, Párování, Admin)
├── request.html          # Veřejný formulář pro žádost o nový drop
├── manifest.json         # PWA Web Manifest
├── sw.js                 # Service Worker pro offline běh a notifikace
├── CHANGELOG.md          # Detailní historie verzí
└── README.md             # Dokumentace projektu
