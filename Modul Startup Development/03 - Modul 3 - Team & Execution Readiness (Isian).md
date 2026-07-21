---
title: Modul 3 - Team & Execution Readiness (Isian)
tags: [retailmind, digdaya, pidi, modul, tim, roadmap, eksekusi]
status: aktif
updated: 2026-07-21
---

# Modul 3 - Team & Execution Readiness (Isian)

> [!abstract] Konteks
> Isian **Startup & Team Execution Readiness** dari modul: Team Role Canvas, roadmap eksekusi tiga fase, komitmen tim, dan rencana kontingensi. Data tim dari [[15 - Proposal DIGDAYA 2026 (Ringkasan)]]. Tim: Financial Freedom, Universitas Gadjah Mada.

## A. Team Role Canvas (kerangka 4H)

Peran dipetakan memakai kerangka **4H startup** supaya pembagian lebih jelas daripada label jabatan umum: **Hacker** membangun produk, **Hustler** membuka pasar dan modal, **Hipster** menjaga produk dan pengalaman, **Handler** menjaga operasi dan kelancaran tim.

| Peran 4H | Nama | Fokus | Tanggung jawab | Deliverable |
|---|---|---|---|---|
| **Hacker** | Dzaky Faishalariq | Teknologi, AI, kode | Scoring engine, aplikasi web, bot chat, perbaikan v2 | MVP, PoC Telegram, build v2 |
| **Hustler** | Gregorius Bugen Jovi Sitindaon | Bisnis, akuisisi, kemitraan | Akuisisi UMKM, merintis kemitraan bank, GTM | Pipeline kemitraan, rencana GTM |
| **Hipster** | Hamzah Arman Husni | Produk, pengalaman, narasi | Arah produk, desain pengalaman, pitch, prioritas antar fase | Roadmap produk, proposal, pitch deck |
| **Handler** | Aditya Nurrohman | Automation, integrasi, operasi | Alur data, integrasi API, operasional, koordinasi eksekusi | Integrasi, laporan otomatis, kelancaran tim |

> [!note] Catatan jujur soal 4H
> Tim tidak punya desainer khusus, jadi peran Hipster dipegang Hamzah yang menggabungkan arah produk, pengalaman pengguna, dan narasi pitch, sekaligus memimpin tim. Karena tim kecil (empat orang), peran saling merangkap. 4H dipakai sebagai lensa kejelasan, bukan sekat kaku. Hindari klaim "empat mahasiswa AI": faktanya satu ketua dan tiga anggota dengan keahlian berbeda, termasuk marketing ([[16 - Perbaikan Proposal]] poin 3).

> [!warning] Gap dan mitigasi
> **Gap:** tim kecil, Hacker memegang beban ganda (scoring, aplikasi, bot, perbaikan v2), berisiko menjadi bottleneck.
> **Mitigasi:**
>
> - Batasi ruang lingkup ketat, dahulukan yang membuktikan tesis (perbaikan skor dan kanal chat), tunda fitur non-inti.
> - Bagi tugas per deliverable, bukan "semua bantu semua".
> - Hustler merintis kemitraan bank sejak awal agar tidak menumpuk di akhir.
> - Andalkan AI multi-provider dengan fallback rule-based supaya demo tetap jalan.

## B. Execution Roadmap - 3 Fase

### Fase 1: Foundation (Validasi & MVP)

| Elemen | Isi |
|---|---|
| Milestone utama | MVP 6 modul berjalan, PoC bot chat terbukti, pra-validasi multi-agent selesai |
| Output / deliverable | Working prototype live, laporan PoC Telegram, laporan validasi sintetis |
| PIC | Tech Lead (MVP + PoC), Team Lead (validasi) |
| Indikator sukses | Enam persona tuntas onboarding lewat chat, tiga bug tertutup |

Status: sebagian besar sudah tercapai. Rujukan: [[Simulasi Telegram/02 - Laporan PoC Telegram]].

### Fase 2: Growth (Pilot & Traction) - Horizon bulan 2-3

| Elemen | Isi |
|---|---|
| Milestone utama | Pilot Yogyakarta, kunci satu kemitraan bank/BPR/koperasi |
| Output / deliverable | 20-30 UMKM onboarded, 1.000+ transaksi, asesmen pemodal pertama |
| PIC | Business Lead (kemitraan + akuisisi), Automation (alur data) |
| Indikator sukses | Kelengkapan data naik dari <40% ke >75%, retensi bulan ke-2 terukur, satu bank memakai skor sebagai pre-screening |

> [!important] Milestone penentu
> Mengunci satu kemitraan bank di fase ini adalah gerbang menuju monetisasi. Tanpa itu, skor tetap dianggap "kalkulator mahal" dan retensi rawan jatuh.

### Fase 3: Scale (Expansion & Sustainability) - Horizon bulan 4-6

| Elemen | Isi |
|---|---|
| Milestone utama | Perluasan awal multi-kota, aktivasi API License B2B, pindah kanal ke WhatsApp Business |
| Output / deliverable | 200+ UMKM, integrasi API bank/koperasi, skor jendela bergerak di produksi |
| PIC | Team Lead (skala), Tech Lead (produksi), Business Lead (mitra baru) |
| Indikator sukses | Pendapatan API B2B pertama, matching fee pertama, retensi Pro membaik |

## C. Komitmen Tim

> [!success] Apa yang dijanjikan untuk diselesaikan
> - Menjaga MVP tetap dapat didemonstrasikan live tanpa error sepanjang penilaian.
> - Menjalankan pilot Yogyakarta dan mengejar satu kemitraan bank sebagai prioritas tertinggi.
> - Menerapkan guardrail skor (jendela bergerak, pisah belanja stok) hasil temuan PoC.
> - Menjaga kejujuran angka: setiap klaim dampak disebut sebagai proyeksi sampai divalidasi pilot.

## D. Risiko Terbesar & Contingency Plan

| Risiko | Dampak | Rencana kontingensi |
|---|---|---|
| Tidak ada bank yang memakai skor | Monetisasi macet, skor jadi "kalkulator mahal" | Mulai dari BPR/koperasi yang lebih lincah, tawarkan pilot berbagi risiko, pakai matching fee agar mitra tidak keluar biaya di muka |
| Kualitas data rendah dari input chat | Skor tidak kredibel | Guardrail jendela bergerak, cross-validation POS vs Cashbook, syarat kelengkapan ≥60% |
| Biaya LLM membengkak saat skala | Unit economics tertekan | Multi-provider aktif, tier berbayar, tarik transaksi volume tinggi ke POS |
| Retensi UMKM jatuh setelah satu siklus | LTV runtuh | Opsi harga musiman (bayar saat butuh), sambungkan Free ke Pro lewat manfaat pendanaan nyata |
| Tim kecil, beban menumpuk di Tech Lead | Keterlambatan | Ruang lingkup MVP ketat, tunda fitur non-inti |

→ Lanjut: [[04 - Refleksi Design Thinking & Demo Pitch (Isian)]] · Kembali: [[00 - Analisis Modul & Rekomendasi]]
