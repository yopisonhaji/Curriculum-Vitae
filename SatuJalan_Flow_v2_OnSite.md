# 📊 FLOWCHART USER INTERFACE - WEBSITE SATUJALAN
## Layanan Hardware + Software 24 Jam (On-Site/Panggilan)
## Service Area: Jabodetabek dengan Dynamic Transport Pricing

---

## 🆕 UPDATE: MODEL BISNIS JASA PANGGILAN

### **KEY INFORMASI BISNIS**
- 🚗 **Jasa Panggilan** - Teknisi datang ke lokasi klien
- 📍 **Service Area** - Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)
- 💰 **Transport Pricing** - Dinamis per KM (referensi: Gojek/Grab rates)
- ⏱️ **Layanan** - 24 Jam Non-Stop
- 📱 **Booking** - Online + WhatsApp + Phone

### **TRANSPORT PRICING REFERENCE**
```
Base: Rp 10.000
Per KM: Rp 2.500 - 3.500 (menyesuaikan tarif online)

Contoh:
- 5 KM: Rp 10K + (5 × Rp 3K) = Rp 25.000
- 10 KM: Rp 10K + (10 × Rp 3K) = Rp 40.000
- 20 KM: Rp 10K + (20 × Rp 3K) = Rp 70.000
```

---

## 🗺️ SERVICE AREA MAP

```
┌─────────────────────────────────────────┐
│         JABODETABEK SERVICE AREA        │
│                                         │
│  🔴 JAKARTA (Semua wilayah)            │
│     - Jakarta Pusat, Selatan, Timur,   │
│     - Jakarta Barat, Utara             │
│                                         │
│  🔵 BOGOR                              │
│     - Pusat Kota, Tajur, Cipinang      │
│                                         │
│  🟢 DEPOK                              │
│     - Depok, Cinere, Sawangan          │
│                                         │
│  🟡 TANGERANG                          │
│     - BSD, Serpong, Alam Sutera,       │
│     - Gading Serpong, Balaraja         │
│                                         │
│  🟣 BEKASI                             │
│     - Bekasi Timur, Bekasi Barat,      │
│     - Harapan Indah, Summarecon        │
│                                         │
│  ❌ DILUAR AREA: Tidak melayani        │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📱 UPDATED FLOW WITH LOCATION-BASED PRICING

### **HARDWARE FLOW (dengan Location/Transport Calculation)**

```
┌─ MULAI (HOME)
│
└─► USER KLIK "🔧 HARDWARE"
    │
    ▼
    ┌────────────────────────────┐
    │ HALAMAN HARDWARE           │
    │ - Reparasi PC/Laptop       │
    │ - Maintenance              │
    │ - Install Software         │
    │ - Data Recovery            │
    │ - Upgrade Hardware         │
    │ [PILIH LAYANAN]            │
    └────────────────────────────┘
           │
           ▼
    ┌────────────────────────────────────┐
    │ FORM BOOKING (Step 1/3)            │
    │ BAGIAN A: LAYANAN & LOKASI         │
    │ ✓ Tipe Device                      │
    │ ✓ Masalah Utama                    │
    │ ✓ Nama Lengkap                     │
    │ ✓ Nomor WhatsApp/Phone             │
    │                                     │
    │ BAGIAN B: LOKASI (PENTING!)        │
    │ ✓ Kota (dropdown)                  │
    │    [Jakarta▼] [Bogor▼]             │
    │    [Depok▼] [Tangerang▼]           │
    │    [Bekasi▼]                       │
    │                                     │
    │ ✓ Alamat Lengkap                   │
    │    [__________________________]     │
    │                                     │
    │ ✓ Kelurahan/Kecamatan              │
    │    [__________________________]     │
    │                                     │
    │ ✓ Landmark (Optional)              │
    │    (Contoh: Dekat Mall, Stasiun)   │
    │                                     │
    │ [CARI LOKASI DI MAP] [GUNAKAN GPS] │
    │                                     │
    │ [LANJUT - HITUNG ESTIMASI]         │
    └────────────────────────────────────┘
           │
           ▼
    ┌────────────────────────────────────┐
    │ ESTIMASI BIAYA & JADWAL (Step 2/3) │
    │                                     │
    │ 📍 Lokasi Anda: Jakarta Selatan    │
    │    Kelapa Gading (est. 8 KM)       │
    │                                     │
    │ 💰 BREAKDOWN BIAYA:               │
    │    ├─ Servis Hardware: Rp 150K    │
    │    ├─ Transport: Rp 24K (8KM)     │
    │    │  (Base Rp 10K + 8×Rp 1.75K)  │
    │    └─ TOTAL: Rp 174.000           │
    │                                     │
    │ ⏱️  ESTIMASI:                      │
    │    ├─ Response Time: 30-60 menit   │
    │    ├─ Arrival: 14:30 - 15:00      │
    │    └─ Durasi Service: 45-120 min  │
    │                                     │
    │ 📞 Teknisi Terdekat:               │
    │    ├─ Rudi (Rating: 4.9⭐)        │
    │    ├─ Lokasi: Cilangkap (7 KM)    │
    │    └─ Estimasi Tiba: 14:45        │
    │                                     │
    │ [UBAH LOKASI] [LANJUT - KONFIRMASI]│
    └────────────────────────────────────┘
           │
           ▼
    ┌────────────────────────────────────┐
    │ PILIH WAKTU & METODE BAYAR (Step 3/3)
    │                                     │
    │ ⏰ KAPAN DIBUTUHKAN?                │
    │    [ ] ASAP (Sekarang)             │
    │    [ ] 1 Jam ke depan             │
    │    [ ] 2 Jam ke depan             │
    │    [ ] Jadwalkan: [Tgl] [Jam]     │
    │                                     │
    │ 💳 METODE PEMBAYARAN:              │
    │    [ ] Transfer Bank (BCA/BNI)    │
    │    [ ] E-wallet (GoPay, OVO)      │
    │    [ ] Tunai saat Service (COD)   │
    │                                     │
    │ 📝 Catatan Tambahan:               │
    │    [________________________________]│
    │    (Kondisi khusus, akses rumah)   │
    │                                     │
    │ [KONFIRMASI BOOKING]               │
    └────────────────────────────────────┘
           │
           ▼
    ┌────────────────────────────────────┐
    │ ✅ BOOKING CONFIRMED               │
    │                                     │
    │ Ticket ID: #HW-2026-001            │
    │ Total Biaya: Rp 174.000            │
    │ Teknisi: Rudi                      │
    │ ETA: 14:45 (25 menit lagi)        │
    │                                     │
    │ 📍 Lokasi: Jl. Gatot Subroto,     │
    │    Jakarta Selatan                 │
    │                                     │
    │ 📱 Hubungi Teknisi: [CALL RUDI]   │
    │ 💬 Chat Teknisi: [WHATSAPP RUDI]  │
    │ 🗺️  Track di Map: [LIHAT MAP]     │
    │                                     │
    │ [BAYAR SEKARANG] [TRACKING]        │
    │ [HUBUNGI SUPPORT]                  │
    └────────────────────────────────────┘
```

---

### **SOFTWARE FLOW (Service Area Check)**

```
┌─ MULAI (HOME)
│
└─► USER KLIK "💻 SOFTWARE"
    │
    ▼
    ┌────────────────────────────┐
    │ HALAMAN SOFTWARE           │
    │ - Web Development          │
    │ - Mobile App               │
    │ - Design Services          │
    │ - Digital Assets           │
    │ - Live Streaming (Event)   │
    │ [PILIH LAYANAN]            │
    └────────────────────────────┘
           │
           ▼
    ┌────────────────────────────┐
    │ FORM REQUEST (Step 1/3)    │
    │ BAGIAN A: LAYANAN          │
    │ ✓ Jenis Layanan (dropdown) │
    │ ✓ Deskripsi Project        │
    │ ✓ Budget Range             │
    │ ✓ Timeline Dibutuhkan       │
    │                            │
    │ BAGIAN B: LOKASI (untuk    │
    │ on-site support)           │
    │ ✓ Lokasi (Jabodetabek?)    │
    │ ✓ Apakah butuh on-site?    │
    │    [ ] Ya  [ ] Tidak       │
    │    (Jika ya, tambah biaya  │
    │     transport)             │
    │                            │
    │ ✓ Email & WhatsApp         │
    │ [LANJUT]                   │
    └────────────────────────────┘
           │
           ▼
    ┌────────────────────────────┐
    │ PROPOSAL (Step 2/3)        │
    │ 💰 Estimasi Service        │
    │ 💰 + Transport (jika ada)  │
    │ 📅 Durasi Project          │
    │ 📋 Timeline Detail         │
    │ [SETUJU PROPOSAL]          │
    └────────────────────────────┘
           │
           ▼
    ┌────────────────────────────┐
    │ METODE BAYAR (Step 3/3)    │
    │ ✓ Transfer Bank            │
    │ ✓ E-wallet                 │
    │ ✓ Invoice (B2B)            │
    │                            │
    │ [SETUJU & BOOKING]         │
    └────────────────────────────┘
           │
           ▼
    ┌────────────────────────────┐
    │ ✅ REQUEST ACCEPTED        │
    │ Proposal ID: #SW-001       │
    │ Total: Rp 5-50 Juta        │
    │ PO: nama@satujalan.com     │
    │ [MONITOR PROJECT]          │
    └────────────────────────────┘
```

---

## 🗺️ LOCATION & TRANSPORT INTEGRATION

### **FORM INPUT LOKASI (SMART)**

```
┌─ KOTA (REQUIRED)
│  [Dropdown dengan 5 pilihan]
│  - Jakarta (Semua Wilayah)
│  - Bogor
│  - Depok
│  - Tangerang
│  - Bekasi
│
├─ ALAMAT (REQUIRED)
│  [Text input dengan Google Maps autocomplete]
│  Contoh: "Jl. Gatot Subroto No. 123"
│
├─ KELURAHAN/KECAMATAN (AUTO-FILL)
│  [Autocomplete dari Google Maps API]
│  Contoh: "Tebet, Jakarta Selatan"
│
├─ LANDMARK (OPTIONAL)
│  [Text input]
│  Contoh: "Dekat Mal Kelapa Gading"
│
└─ GPS LOCATION (OPTIONAL)
   [🎯 USE MY LOCATION Button]
   Ambil koordinat real-time dari device
```

---

## 💰 TRANSPORT PRICING CALCULATOR

### **ALGORITHM**

```
IF lokasi == "DILUAR JABODETABEK"
  THEN TAMPILKAN: "❌ Maaf, kami belum melayani area Anda"
  RETURN

ELSE IF lokasi == "DALAM JABODETABEK"
  GET distance KM dari Google Maps API
  
  IF distance > 50 KM
    THEN TAMPILKAN: "⚠️ Lokasi terlalu jauh, surcharge tambahan"
  
  CALCULATE transport = BASE + (distance × RATE_PER_KM)
  BASE = Rp 10.000
  RATE_PER_KM = Rp 2.500 - Rp 3.500 (sesuai tarif market)
  
  SHOW breakdown:
  - Base: Rp 10.000
  - Distance: X KM
  - Rate: Rp Y per KM
  - Total Transport: Rp Z
```

---

## 📍 TEKNISI TERDEKAT (REAL-TIME)

### **FITUR TAMBAHAN**

```
Setelah user input lokasi, system mencari:
1. Teknisi aktif terdekat
2. Rating & review mereka
3. Jarak mereka dari lokasi user
4. ETA perkiraan

DISPLAY:
┌─ TEKNISI TERDEKAT ──────────────┐
│                                  │
│ 1. Rudi (⭐⭐⭐⭐⭐ 4.9)         │
│    Jarak: 7 KM                   │
│    ETA: 14:45 (25 menit)         │
│    Review: "Cepat & profesional" │
│                                  │
│ 2. Budi (⭐⭐⭐⭐ 4.7)           │
│    Jarak: 9 KM                   │
│    ETA: 15:00 (40 menit)         │
│    Review: "Friendly, bisa nego" │
│                                  │
│ 3. Andi (⭐⭐⭐⭐⭐ 4.8)         │
│    Jarak: 12 KM                  │
│    ETA: 15:15 (50 menit)         │
│    Review: "Mantap, no BS"       │
│                                  │
└──────────────────────────────────┘
```

---

## 🚗 LIVE TRACKING MAP

### **SETELAH BOOKING CONFIRMED**

```
User bisa melihat:
1. 📍 Lokasi mereka sendiri (marker biru)
2. 📍 Lokasi teknisi real-time (marker merah)
3. 🛣️  Route dari teknisi ke lokasi user
4. ⏱️  ETA yang update setiap 5 detik
5. 📞 Button untuk call/chat teknisi
6. 🔔 Notifikasi saat teknisi mendekati

MAP VIEW:
┌─────────────────────────────────┐
│                                  │
│        [MAP dengan marker]       │
│        Rudi approaching...       │
│        ETA: 10 menit             │
│                                  │
│ [📞 CALL] [💬 CHAT] [❌ CANCEL]  │
│                                  │
└─────────────────────────────────┘
```

---

## 📞 SUPPORT & KOMUNIKASI

### **BEFORE SERVICE**
- WhatsApp: Konfirmasi alamat & situasi
- Phone: Call langsung ke teknisi
- Live Chat: Tanya-jawab real-time

### **DURING SERVICE**
- WhatsApp: Update progress
- Live Map: Tracking teknisi
- Call: Hubungi jika ada masalah

### **AFTER SERVICE**
- Rating & Review: Evaluasi teknisi
- Receipt: Struk digital & WhatsApp
- Follow-up: Garansi & warranty info

---

## 🎯 HOME PAGE UPDATED

```
┌────────────────────────────────────────────────────┐
│        SATUJALAN - Solusi Lengkap Anda             │
│   Jasa Panggilan Hardware + Software 24 Jam       │
│        Melayani Jabodetabek (On-Site)              │
├────────────────────────────────────────────────────┤
│                                                     │
│  🗺️  SERVICE AREA: Jakarta, Bogor, Depok,          │
│     Tangerang, Bekasi                              │
│                                                     │
│  💰 HARGA TRANSPOR: Sesuai Gojek/Grab (Per KM)    │
│                                                     │
│  ⏰ LAYANAN: 24 JAM (Respon 30-60 menit)          │
│                                                     │
│     [🔧 HARDWARE]    [💻 SOFTWARE]               │
│     Servis Panggilan  Konsultasi On-site          │
│     Datang ke Lokasi  + Digital Assets            │
│                                                     │
│     📱 WhatsApp      📧 Chat Online               │
│     ☎️  Hubungi Kami  🔔 Notifikasi Real-time    │
│     🗺️  Live Tracking  📍 GPS Location            │
│                                                     │
│  [PESAN SEKARANG] [LIHAT HARGA] [SUPPORT 24H]    │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## 📊 UPDATED FORM VALIDATION

```
HARDWARE BOOKING:
✓ Tipe Device: REQUIRED
✓ Masalah: REQUIRED (min 20 char)
✓ Nama: REQUIRED
✓ WhatsApp: REQUIRED + VALID FORMAT
✓ Kota: REQUIRED (dropdown dari 5 kota)
✓ Alamat: REQUIRED (min 10 char)
✓ Kelurahan: REQUIRED (autocomplete)
✓ Waktu: REQUIRED

VALIDATION ERROR MESSAGES:
- "❌ Kota belum dipilih"
- "❌ Alamat harus minimal 10 karakter"
- "❌ Nomor WhatsApp tidak valid"
- "❌ Lokasi diluar service area kami"
```

---

## 🚫 ERROR HANDLING - DILUAR SERVICE AREA

```
USER INPUTS ALAMAT DILUAR JABODETABEK (Contoh: Serang, Karawang)
         ↓
SYSTEM DETECTS VIA GEOCODING
         ↓
DISPLAY ERROR:
┌─────────────────────────────────────┐
│ ❌ LOKASI DILUAR SERVICE AREA       │
│                                      │
│ Kami baru melayani:                 │
│ • Jakarta                           │
│ • Bogor                             │
│ • Depok                             │
│ • Tangerang                         │
│ • Bekasi                            │
│                                      │
│ 📍 Lokasi Anda: Serang             │
│    Status: BELUM LAYANI             │
│                                      │
│ 💭 Atau coba kota lain?             │
│ [UBAH LOKASI] [HUBUNGI KAMI]       │
│                                      │
│ Newsletter: Daftar untuk notifikasi │
│ saat kami expand ke area Anda       │
│ [✓ DAFTAR] [BATAL]                 │
│                                      │
└─────────────────────────────────────┘
```

---

## 💡 INTEGRATION REQUIREMENTS

### **TECHNICAL STACK NEEDED**

1. **Google Maps API**
   - Geocoding (address → coordinates)
   - Distance Matrix (calculate KM)
   - Autocomplete (suggest addresses)
   - Map display (live tracking)

2. **Location Services**
   - GPS access untuk user (optional)
   - Geofencing untuk service area validation

3. **Real-time Updates**
   - WebSocket atau Polling untuk live tracking
   - Push notification saat teknisi approaching

4. **CMS Integration**
   - Teknisi list management
   - Rating system
   - Service history

5. **Payment Gateway**
   - Transfer bank automation
   - E-wallet integration (GoPay, OVO)
   - COD support (cash on delivery)

---

## 🔄 UPDATED CHECKLIST IMPLEMENTATION

- [ ] Service area validation (5 kota Jabodetabek)
- [ ] Location input dengan Google Maps autocomplete
- [ ] Distance calculation algorithm (KM → pricing)
- [ ] Transport cost calculator (dynamic pricing)
- [ ] Teknisi terdekat display
- [ ] Live map tracking
- [ ] Real-time ETA updates
- [ ] Geofencing validation
- [ ] Error handling untuk diluar area
- [ ] Payment processing
- [ ] Notification system
- [ ] Rating & review system
- [ ] Admin panel untuk manage teknisi
- [ ] Database untuk booking history

---

## ✅ KEY UPDATES

**PERBEDAAN DENGAN VERSI SEBELUMNYA:**

| Aspek | Sebelumnya | Sekarang |
|-------|-----------|---------|
| **Pricing** | Fixed price | Dynamic (distance-based) |
| **Lokasi** | Text input | Dropdown + Maps autocomplete |
| **Service Area** | Tidak ada | Jabodetabek dengan validation |
| **Transport** | Tidak ada | Calculated per KM |
| **Teknisi Info** | Tidak ditampilkan | Name, rating, ETA, distance |
| **Tracking** | Ticket saja | Live map + real-time tracking |
| **Error Handling** | Basic | Smart (diluar area detection) |
| **Integration** | Simple form | Google Maps + Real-time API |

---

**Document Version:** 2.0
**Last Updated:** 17 January 2026, 21:00 WIB
**Author:** SatuJalan Development Team
**Status:** ✅ READY FOR IMPLEMENTATION (dengan Google Maps integration)

---

## 📋 NEXT STEPS

1. ✅ Sepakati dengan Google Maps API integration
2. ✅ Define transport pricing per KM
3. ✅ Create teknisi database
4. ✅ Setup real-time tracking system
5. ✅ Implement payment gateway
6. ✅ Test dengan dummy bookings

**Siap untuk development phase? 🚀**

