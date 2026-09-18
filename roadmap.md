 Roadmap: Plán pro dalších 10 funkcí
Do budoucích verzí aplikace je plánováno rozšíření o tyto pokročilé funkce:
1. 🔐 End-to-End Šifrování (E2EE): Šifrování popisu a fotografií přímo v prohlížeči pomocí AES-GCM klíče odvozeného z PIN kódu. Server ani lokální úložiště neuvidí data v čitelné podobě.
2. 📱 PWA & Offline Manifest: Přidání ⁠manifest.json⁠ a Service Workeru pro plnohodnotnou instalaci na plochu iOS/Androidu a fungování bez připojení k internetu.
3. 📲 Generátor QR kódů: Automatické vygenerování QR kódu obsahujícího přímý odkaz s PINem pro bleskové předání z displeje na displej.
4. ⏱️ Nastavitelná expirace (Time-to-Live): Možnost nastavit vlastní dobu platnosti úschovy (např. 1 hodina, 24 hodin, 7 dní), po které se záznam nenávratně smaže.
5. 🔒 Ochrana PINu heslem/Passphrase: Dvě úrovně zabezpečení – pro vyhledání je potřeba PIN, ale pro dešifrování obsahu ještě dodatečné tajné heslo.
6. 🗺️ Podpora více mapových podkladů: Přepínač mezi standardní mapou, satelitními snímky (Esri/Mapbox) a cyklo/turistickými podklady.
7. 🚨 SOS Auto-Delete (Panická pojistka): Tlačítko pro okamžité smazání všech uložených úschov v prohlížeči nebo možnost nastavení „Falešného PINu“, který po zadání data smaže.
8. 🧭 Kompas & AR Navigace: Využití gyroskopu a kompasu telefonu pro přímé navádění vzdušnou čarou s ukazatelem vzdálenosti v metrech.
9. 📸 Komprese fotografií na klientovi: Integrovaný ořez a úprava jas/kontrast přímo v prohlížeči před vytvořením dead dropu.
10. ☁️ Volitelný Šifrovaný Backend (Sync): Volitelná možnost synchronizace pouze zašifrovaných dat přes anonymní decentralizované sítě (Web3 storage / IPFS) nebo Node.js API s PostgreSQL.
