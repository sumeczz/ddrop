# 📜 Changelog — My Dead Drops

Všechny významné změny v tomto projektu jsou zaznamenány v tomto souboru.

---

## [1.6.0] - 2026-09-18

### 📥 Nové funkce & Vylepšení
- **Správa požadavků pro Vendora (`requests-vendor.html`):** Vytvořena nová samostatná stránka umožňující Vendorovi přehledně spravovat příchozí poptávky, kontrolovat vložené kupony PaysafeCard a označovat požadavky za vyřízené.
- **Flexibilnější formulář objednávky (`request.html`):** Pole pro zádání 16místného kódu PaysafeCard je nyní volitelné (zákazník může požádat o drop i s jinou formou úhrady / při předání).
- **Interaktivní mapa & Přesná GPS:** 
  - Při vytváření dropu lze špendlík libovolně přetahovat po mapě (`draggable: true`) nebo měnit pozici kliknutím na mapu.
  - Přidáno tlačítko **Moje GPS** pro okamžité zaměření přesné aktuální polohy Vendora.
- **Oprava & Kalibrace AR Kompasu:** Plně funkční směrová navigace využitím živého výpočtu ortodromického azimutu z GPS souřadnic a senzoru gyroskopu (`deviceorientation`).
- **In-App Toast Notifications:** Integrován nový plynulý notifikační systém (plovoucí oznámení), který Vendora i Zákazníka okamžitě informuje o důležitých akcích (přemístění špendlíku, načtení fotek, zašifrování, chyba PINu, zničení po přečtení).

---

## [1.5.0] - 2026-09-18

### 📱 PWA & Notification Engine
- Přidán Service Worker (`sw.js`) pro běh v offline režimu.
- Podpora pro Web Notifications API.

---

## [1.1.0] - 2026-09-15

### 🔐 Security & E2EE
- Implementováno klient-side šifrování **AES-GCM (256-bit)** přes Web Crypto API.
- Derivace klíče z 6místného PIN kódu pomocí algoritmu PBKDF2.
