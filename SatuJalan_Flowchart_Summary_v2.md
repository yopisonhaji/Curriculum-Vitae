# 🎯 RINGKASAN FLOWCHART SATUJALAN v2.0
## Website Jasa Panggilan Hardware + Software On-Site
### Dengan Dynamic Location-Based Transport Pricing

---

## 📌 RINGKASAN BISNIS MODEL

### **TYPE: On-Site Service (Jasa Panggilan)**
- Teknisi datang ke lokasi klien
- Service area: **Jabodetabek** (Jakarta, Bogor, Depok, Tangerang, Bekasi)
- Pricing: **Dynamic per KM** (menyesuaikan Gojek/Grab rates)
- Jam operasional: **24 Jam Non-Stop**

### **TRANSPORT PRICING MODEL**
```
Formula: TOTAL TRANSPORT = BASE + (DISTANCE × RATE_PER_KM)
- Base: Rp 10.000 (biaya minimum)
- Rate per KM: Rp 2.500 - Rp 3.500
- Contoh 5KM: Rp 10K + (5 × Rp 3K) = Rp 25.000
- Contoh 10KM: Rp 10K + (10 × Rp 3K) = Rp 40.000
```

---

## 🗺️ SERVICE AREA (VALIDASI LOCATION)

| Kota | Status | Wilayah |
|------|--------|---------|
| **Jakarta** | ✅ LAYANI | Semua wilayah (Pusat, Selatan, Timur, Barat, Utara) |
| **Bogor** | ✅ LAYANI | Pusat, Tajur, Cipinang |
| **Depok** | ✅ LAYANI | Depok, Cinere, Sawangan |
| **Tangerang** | ✅ LAYANI | BSD, Serpong, Alam Sutera, Gading Serpong |
| **Bekasi** | ✅ LAYANI | Bekasi Timur, Bekasi Barat, Harapan Indah, Summarecon |
| **Diluar Area** | ❌ TOLAK | Serang, Karawang, Subang, dll |

---

## 🔄 MAIN FLOW DIAGRAM

### **HARDWARE SERVICE PATH (Merah 🔴)**

```
START
  ↓
[HOME PAGE]
  ↓
USER KLIK "🔧 HARDWARE"
  ↓
[HARDWARE LANDING PAGE]
Pilih dari: Reparasi, Maintenance, Install, Data Recovery
  ↓
[BOOKING FORM - STEP 1/3]
├─ Tipe Device (PC/Laptop/Printer)
├─ Masalah Utama
├─ Nama & WhatsApp
├─ Kota (Dropdown: 5 pilihan)
├─ Alamat (Google Maps autocomplete)
├─ Kelurahan/Kecamatan (auto-fill)
├─ Landmark (optional)
└─ [NEXT BUTTON]
  ↓
[VALIDATION]
├─ Lokasi dalam Jabodetabek? → YES/NO
├─ Distance calculation via Google Maps API
├─ Transport pricing calculation
└─ If NO → Show "❌ DILUAR SERVICE AREA" error
  ↓
[PRICING & TECHNICIAN - STEP 2/3]
├─ BREAKDOWN BIAYA:
│  ├─ Service: Rp XXX.000
│  ├─ Transport: Rp XX.000 (X KM)
│  └─ TOTAL: Rp XXX.000
├─ ESTIMASI WAKTU:
│  ├─ Response: 30-60 menit
│  ├─ Arrival: HH:MM
│  └─ Duration: 45-120 menit
├─ TEKNISI TERDEKAT:
│  ├─ Nama: Rudi ⭐4.9
│  ├─ Jarak: 7 KM
│  ├─ ETA: 14:45
│  └─ Review: "Cepat & profesional"
└─ [LANJUT BUTTON]
  ↓
[TIME & PAYMENT - STEP 3/3]
├─ Kapan dibutuhkan? (ASAP/schedule)
├─ Metode bayar (Transfer/E-wallet/COD)
├─ Catatan tambahan
└─ [KONFIRMASI BOOKING]
  ↓
[CONFIRMATION PAGE]
├─ ✅ Booking Sukses
├─ Ticket ID: #HW-2026-001
├─ Total: Rp XXX.000
├─ Teknisi: Rudi
├─ ETA: 14:45
├─ 📞 Call Rudi
├─ 💬 Chat Rudi
├─ 🗺️ Live Map Tracking
└─ [TRACK STATUS] [PAY NOW] [SUPPORT]
  ↓
[LIVE TRACKING PAGE]
├─ Real-time map dengan marker user & technician
├─ Route visualization
├─ ETA yang update real-time
├─ Live chat dengan technician
├─ Push notification saat approaching
└─ Selesai Service → Rating & Review

END
```

---

### **SOFTWARE SERVICE PATH (Biru 🔵)**

```
START
  ↓
[HOME PAGE]
  ↓
USER KLIK "💻 SOFTWARE"
  ↓
[SOFTWARE LANDING PAGE]
Pilih dari: Web Dev, Mobile App, Design, Assets, Live Streaming
  ↓
[REQUEST FORM - STEP 1/3]
├─ Jenis Layanan (Dropdown)
├─ Deskripsi Project (Text area)
├─ Budget Range
├─ Timeline Dibutuhkan
├─ Email & WhatsApp
└─ On-site Support? (YES/NO)
   └─ If YES → Add location fields
      ├─ Kota
      ├─ Alamat
      └─ Transport akan diperhitungkan
  ↓
[VALIDATION]
├─ If on-site → Validasi lokasi Jabodetabek
├─ Calculate transport jika needed
└─ Prepare proposal
  ↓
[PROPOSAL - STEP 2/3]
├─ Service Cost: Rp X - Y Juta
├─ Transport Cost (jika ada): Rp XX.000
├─ Timeline: X - Y minggu
├─ Deliverables
├─ Payment terms
└─ [SETUJU PROPOSAL]
  ↓
[PAYMENT METHOD - STEP 3/3]
├─ Transfer Bank
├─ E-wallet
├─ Invoice (B2B)
└─ [CONFIRM & BOOKING]
  ↓
[CONFIRMATION PAGE]
├─ ✅ Request Accepted
├─ Proposal ID: #SW-2026-001
├─ Total Cost: Rp X.000.000
├─ Project Manager: [nama]
├─ Email PO: support@satujalan.com
├─ 📊 Project Timeline (Gantt chart)
└─ [MONITOR PROJECT] [CHAT PO]
  ↓
[PROJECT TRACKING PAGE]
├─ Step-by-step progress
├─ Design Phase: ✅
├─ Development Phase: ⏳
├─ Testing Phase: ⬜
├─ Deployment Phase: ⬜
├─ Live chat dengan project team
└─ On-site support jika scheduled

END
```

---

## 📱 USER INTERFACE ELEMENTS

### **1. HOME PAGE STRUCTURE**
```
┌─────────────────────────────────────────┐
│ [LOGO] [MENU] [LOGIN]                   │
├─────────────────────────────────────────┤
│ HERO SECTION                             │
│ "SatuJalan - Solusi Lengkap Anda"       │
│ "Jasa Panggilan 24 Jam Jabodetabek"     │
│                                          │
│ [🔧 HARDWARE] [💻 SOFTWARE]             │
│ [Assets Store] [Support 24H]            │
├─────────────────────────────────────────┤
│ FEATURES SECTION                        │
│ ✅ 24 Jam Non-Stop                      │
│ ✅ Harga Transpor Sesuai Gojek/Grab     │
│ ✅ Teknisi Rating Tinggi                │
│ ✅ Live Tracking Real-time              │
│ ✅ Layanan Jabodetabek                  │
├─────────────────────────────────────────┤
│ FOOTER                                   │
│ Contact | About | Terms | Privacy       │
└─────────────────────────────────────────┘
```

### **2. FORM VALIDATION RULES**

**HARDWARE BOOKING:**
- ✓ Device type: REQUIRED
- ✓ Problem description: REQUIRED (min 20 chars)
- ✓ Name: REQUIRED (min 3 chars)
- ✓ WhatsApp: REQUIRED + valid phone format
- ✓ Kota: REQUIRED (must be 1 of 5)
- ✓ Alamat: REQUIRED (min 10 chars)
- ✓ Kecamatan: REQUIRED (from dropdown)
- ✓ Time: REQUIRED

**ERROR MESSAGES:**
```
❌ "Kota harus dipilih dari daftar kami"
❌ "Nomor WhatsApp tidak valid"
❌ "Alamat minimal 10 karakter"
❌ "Masalah harus dijelaskan minimal 20 karakter"
❌ "Lokasi Anda diluar service area kami"
```

### **3. DYNAMIC PRICING DISPLAY**

```
BEFORE SUBMIT:
- User tidak tahu biaya transport
- Hanya tahu biaya service

AFTER LOCATION INPUT:
- System calculate distance via Google Maps
- Show breakdown:
  * Service cost: Rp XXX.000
  * Transport: Rp XX.000 (X KM dari lokasi kami)
  * TOTAL: Rp XXX.000
- Show nearest technician dengan ETA
```

### **4. NEAREST TECHNICIAN DISPLAY**

```
┌─ TEKNISI TERDEKAT ──────────────┐
│                                  │
│ 1. Rudi (Rating 4.9⭐)          │
│    Jarak: 7 KM → ETA: 14:45    │
│    Review: Cepat & profesional  │
│    [SELECT]                      │
│                                  │
│ 2. Budi (Rating 4.7⭐)          │
│    Jarak: 9 KM → ETA: 15:00    │
│    Review: Friendly & negotiable│
│    [SELECT]                      │
│                                  │
│ 3. Andi (Rating 4.8⭐)          │
│    Jarak: 12 KM → ETA: 15:15   │
│    Review: Mantap & reliable    │
│    [SELECT]                      │
│                                  │
└──────────────────────────────────┘
```

### **5. LIVE TRACKING MAP**

```
┌─ TRACKING BOOKING #HW-001 ────┐
│                                │
│     [MAP CONTAINER]            │
│     🔵 Your Location           │
│     🔴 Technician (Moving)     │
│     🛣️  Route Visualization   │
│                                │
│ Rudi is approaching...         │
│ ETA: 10 menit                  │
│ Jarak: 2.5 KM                  │
│                                │
│ [📞 CALL] [💬 CHAT] [❌ CANCEL]│
│                                │
└────────────────────────────────┘
```

---

## 🔧 TECHNICAL IMPLEMENTATION CHECKLIST

### **FRONTEND (HTML/CSS/JS)**
- [ ] Homepage dengan toggle Hardware/Software
- [ ] Tab navigation dengan active states
- [ ] Form fields dengan validation
- [ ] Google Maps autocomplete integration
- [ ] Dynamic pricing calculator
- [ ] Progress indicator (Step 1/3, 2/3, etc)
- [ ] Responsive design (mobile-first)
- [ ] Floating support button
- [ ] Live tracking map container
- [ ] Error message display

### **BACKEND (PHP/Python/Node.js)**
- [ ] User authentication
- [ ] Form submission & validation
- [ ] Google Maps API integration (geocoding, distance matrix)
- [ ] Booking/Request processing
- [ ] Transport cost calculation
- [ ] Technician assignment algorithm (nearest + available)
- [ ] Database for bookings
- [ ] Payment gateway integration
- [ ] Email/WhatsApp notification

### **DATABASE**
- [ ] Users table
- [ ] Bookings table
- [ ] Technicians table (with location, rating, availability)
- [ ] Services table
- [ ] Pricing table
- [ ] Transactions table
- [ ] Reviews/Ratings table

### **THIRD-PARTY INTEGRATIONS**
- [ ] Google Maps API (Geocoding, Distance Matrix, Maps Display)
- [ ] Payment Gateway (Transfer bank, E-wallet)
- [ ] WhatsApp API (notifications)
- [ ] Email service (confirmations)
- [ ] SMS service (optional alerts)
- [ ] WebSocket/Firebase (real-time tracking)

---

## 💡 KEY FEATURES YANG MEMBEDAKAN

| Fitur | Benefit |
|-------|---------|
| **Dynamic Transport Pricing** | Transparan, user tahu biaya sebelum booking |
| **Nearest Technician Display** | User bisa lihat siapa & kapan tiba |
| **Live Map Tracking** | Trust factor tinggi, user bisa track real-time |
| **Service Area Validation** | Prevent invalid bookings, auto-reject diluar area |
| **Real-time ETA** | User tidak perlu tanya-tanya "kapan sampai?" |
| **Rating & Review** | Social proof, quality assurance |
| **Multi-channel Support** | Chat, WhatsApp, Phone semua available |
| **On-site Support Option** | Software service bisa pairing dengan on-site = more revenue |

---

## 🎯 USER FLOW SUMMARY

### **HARDWARE PATH (3 Steps)**
1. **Step 1:** Select service → Input location
2. **Step 2:** Review pricing & technician → Confirm
3. **Step 3:** Choose time & payment → Booking confirmed → Live tracking

### **SOFTWARE PATH (3 Steps)**
1. **Step 1:** Select service → Add location (optional) → Details
2. **Step 2:** Receive proposal → Review → Agree
3. **Step 3:** Choose payment → Booking confirmed → Project tracking

---

## ✅ READY FOR DEVELOPMENT?

**YES! Semua aspek sudah tercakup:**

✓ Business model jelas (on-site, dynamic pricing)
✓ Service area defined (5 kota Jabodetabek)
✓ Flow lengkap (Hardware + Software)
✓ Pricing calculation system
✓ Location validation system
✓ Technician assignment system
✓ Live tracking capability
✓ Payment integration points
✓ Error handling scenarios
✓ Technical stack requirements

**Siap untuk tahap development?** 🚀

---

## 📞 NEXT STEPS

1. **Approve flowchart & requirements**
2. **Setup development environment**
3. **Integrate Google Maps API**
4. **Create database schema**
5. **Develop frontend pages**
6. **Develop backend API**
7. **Integration testing**
8. **UAT & deployment**

**Contact untuk pertanyaan teknis atau clarification!**

---

**Document Version:** 2.0
**Model:** On-Site Service dengan Dynamic Location-Based Pricing
**Last Updated:** 17 January 2026, 21:05 WIB
**Status:** ✅ READY FOR IMPLEMENTATION

