---
title: Modul 1 - Use Case Canvas & User Persona (Isian)
tags: [retailmind, digdaya, pidi, modul, use-case-canvas, persona, pmf]
status: aktif
updated: 2026-07-21
---

# Modul 1 - Use Case Canvas & User Persona (Isian)

> [!abstract] Konteks
> Isian lengkap **Use Case Canvas** (MVP Planning & Product-Market Fit, sektor F&B) dan **Praktik User Persona** dari modul. Semua sel ditarik dari materi vault yang sudah tervalidasi. Nama produk kerja "RetailMind" masih sementara.

## A. Use Case Canvas (sektor: F&B)

### WHO - Target User & Pengguna Utama

Pemilik UMKM F&B beromzet Rp10-200 juta per bulan (warung, kafe, restoran kecil dan menengah, catering) yang sudah memakai QRIS atau POS tetapi datanya belum bisa menjadi bukti performa. Pengguna utama harian bisa berbeda dari pembayar: pemilik adalah pengambil keputusan, kasir adalah operator input. Sisi kedua adalah pemodal (bank, investor ritel, analis lembaga) yang memakai skor untuk menilai kelayakan. Rujukan: [[04a - Persona Customer & User]].

### PROBLEM - Pernyataan Masalah Utama

UMKM F&B sudah punya data digital, tetapi data itu terfragmentasi antar kanal (POS, GoFood, GrabFood, catatan tangan), tidak konsisten, dan tidak bisa "bicara" kepada pemodal. Akibatnya usaha yang layak didanai tetap terjebak di skala kecil karena tidak bisa membuktikan performanya.

> [!quote] Bukti / Validasi Masalah
> - Riset lapangan tim ke 15 UMKM F&B Yogyakarta: hampir semua sudah pakai aplikasi kasir, tetapi tidak satu pun bisa menjawab pasti laba bersih bulan lalu.
> - 77% UMKM masih mencatat manual atau semi-manual (OCBC & NielsenIQ, 2024).
> - 69,5% UMKM belum bisa akses kredit perbankan; 43,1% butuh tetapi belum terlayani (Kementerian UMKM, 2025).
> - Hanya ~19% UMKM punya laporan keuangan yang diterima lembaga formal (OJK).
> - Validasi multi-agent: masalah tervalidasi dengan keyakinan tinggi ([[04 - Laporan Validasi Sintetis]]).

### SOLUTION - Solusi yang Diusulkan

Platform Business Health Scoring yang mengubah transaksi harian menjadi dua skor terstandar: **Business Health Score 0-100** dan **Investment Readiness Score** (Low/Medium/High). Pintu masuk UMKM lewat chat (chat-first hibrida), skor penuh dan sisi pemodal di web. Rujukan: [[05 - Ikhtisar Produk]], [[07 - Scoring Engine]].

> [!success] Unique Value Proposition
> Untuk UMKM F&B yang datanya sudah digital tetapi tidak bisa berbicara sebagai bukti, produk ini mengubah transaksi harian menjadi skor yang dirancang agar dapat dibaca pemodal, diakses lewat kanal chat sehari-hari sehingga hambatan adopsinya rendah.

**Differentiator:** kompetitor (Moka, Majoo, Jurnal.id, BukuWarung) berhenti di pencatatan dan laporan. Produk ini menambah lapisan skor siap-pemodal di atas data yang sama, khusus vertikal F&B Indonesia, dan dimiliki UMKM-nya sendiri (first-party data), bukan sekadar mesin skor untuk pemberi pinjaman. Rujukan: [[08 - Keunggulan & Diferensiasi]].

### PAIN POINTS - Kebutuhan Tak Terpenuhi

| Lapis      | Pain yang belum terjawab                                     |
| ---------- | ------------------------------------------------------------ |
| Fungsional | Data terpecah di banyak kanal, tidak ada laporan utuh        |
| Emosional  | Tidak bisa menjawab pertanyaan dasar keuangan usaha sendiri  |
| Identitas  | Merasa usahanya serius tetapi tidak bisa membuktikannya      |
| Sosial     | Gagal asesmen kredit, peluang ekspansi hilang                |
| Finansial  | Layak didanai tetapi tidak terbukti, terjebak skala kecil    |
| Adopsi     | Pernah coba aplikasi kasir lalu berhenti karena terasa rumit |

### VALIDATION - Strategi Validasi Product-Market Fit

| Elemen                  | Isi                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Metode                  | Validasi pasar sintetis multi-agent sebagai pra-validasi, lalu PoC bot Telegram, dilanjutkan wawancara lapangan dan pilot Yogyakarta |
| Target responden        | 6 persona F&B bernama (owner + kasir) untuk pra-validasi; 20-30 UMKM nyata di pilot; 1-2 mitra bank/BPR/koperasi                     |
| Tanda / sinyal validasi | Retensi bulan ke-2 (metrik nomor satu), kelengkapan data naik dari <40% ke >75%, minimal satu asesmen pemodal nyata berjalan         |
| Timeline / milestone    | Pra-validasi selesai, PoC selesai, pilot 0-6 bulan                                                                                   |

### SCOPE - Lingkup MVP

> [!info] Termasuk (P1)
> Smart POS, Smart Cashbook, OCR Nota, Business Health Score 6 komponen, AI Coach Rinda, Investment Readiness Score, Investor Dashboard, pintu masuk chat (Telegram PoC).

> [!failure] Tidak termasuk (di luar MVP)
> Marketplace pinjaman langsung berlisensi, integrasi penuh GoFood/GrabFood API, mobile app native, forecasting historis 12 bulan, benchmark nasional per kota. Ini masuk fase Growth dan Scale.

### Alur Demo Use Case

| Tahap | Isi |
|---|---|
| Entry Point / Trigger | UMKM butuh modal nyata (sewa outlet kedua, stok musiman) atau ajakan komunitas |
| Aksi Utama Pengguna | Catat transaksi lewat chat ("jual nasi 15rb", foto struk), lalu minta skor |
| Proses / Logika Sistem | Parse transaksi, hitung 6 komponen Health Score atas jendela bergerak, klasifikasi Readiness |
| Output untuk User | Skor 0-100 + band + insight AI Coach + laporan siap-investor |
| Impact & Value | UMKM punya bukti kredibel untuk pemodal; pemodal punya pipeline terskrining |

**Tech Stack / Platform:** Next.js 16, Supabase (PostgreSQL + RLS), AI multi-provider (Claude engine utama, Gemini pada PoC Telegram, fallback rule-based), Recharts. Bot Telegram Node.js. Rujukan: [[09 - Arsitektur & Teknologi]].

**Hambatan Integrasi:** kuota provider LLM pada beban otomatis (temuan PoC), integrasi WhatsApp Business API untuk produksi, dan sumber data agregat (GoFood/GrabFood) yang belum terbuka penuh.

---

## B. Praktik User Persona (pilih 1)

Modul meminta memilih satu persona yang paling merepresentasikan solusi dan disepakati seluruh tim. Pilihan: **Mas Aldi (P2)**, persona customer paling bernilai untuk pilot karena paling termotivasi, sudah digital, dan cepat teraktivasi. Persona pendamping (Bu Siti) disertakan ringkas untuk menunjukkan sisi segmen bawah.

> [!example] Persona utama: Mas Aldi, Pemilik Kedai Kopi Bertumbuh
> **Usia** 29 · Laki-laki · Sleman, Yogyakarta · lulusan D3/S1
> **Peran / jabatan:** pemilik kedai kopi kekinian, omzet ± Rp90 juta per bulan, usaha berjalan 3 tahun, ingin buka outlet kedua.
> **Kebiasaan digital:** nyaman dashboard dan grafik, sudah memakai POS, QRIS, GoFood, GrabFood, aktif Instagram, membandingkan produk sebelum membeli.
> **Akses teknologi:** ponsel dan laptop, koneksi stabil, mau membayar untuk hasil yang jelas.
>
> **Background masalah (pain point):** omzet tersebar di banyak kanal dan tidak bisa diringkas jadi bukti performa. Ia butuh modal ekspansi tetapi masuk kelompok 43,1% UMKM yang butuh kredit namun belum terlayani. Tidak punya bahasa bersama dengan pemodal, dan takut kehilangan momentum sewa lokasi kedua kalau modal telat.
>
> **Objektif solusi:** satukan data lintas kanal jadi metrik kredibel, dapatkan satu skor yang bisa ditunjukkan ke bank atau investor, dan siapkan laporan siap-investor tanpa rekap manual berhari-hari.

> [!note] Persona pendamping: Bu Siti, Pemilik Warung Tradisional
> **Usia** 47 · Perempuan · Bantul · warung makan, omzet ± Rp25 juta per bulan, 9 tahun berjalan, lulusan SMA.
> **Pain point:** tidak tahu laba bersih, malu saat diminta laporan keuangan, pernah unduh aplikasi kasir lalu berhenti karena rumit.
> **Objektif solusi:** tahu apakah warungnya sehat tanpa harus belajar akuntansi, dengan onboarding didampingi dan AI Coach berbahasa sehari-hari. Menegaskan kenapa pintu masuk chat penting untuk segmen ini.

Kartu persona lengkap kelima aktor (termasuk kasir dan sisi pemodal) ada di [[04a - Persona Customer & User]]. Persona sisi bank dibangun terpisah di [[05 - Persona Sisi Pemodal - Bank & Investor (Isian)]].

→ Lanjut: [[02 - Modul 2 - Value Creation Canvas & ROI (Isian)]] · Kembali: [[00 - Analisis Modul & Rekomendasi]]
