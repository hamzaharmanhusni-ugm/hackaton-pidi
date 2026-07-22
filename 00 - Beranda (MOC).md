---
title: Dashboard Proyek RetailMind AI
aliases: [Dashboard, Dashboard Utama, Mulai di Sini, Beranda]
tags: [retailmind, hackathon, pidi, dashboard, moc]
status: aktif
event: DIGDAYA X Hackathon PIDI 2026
tim: Financial Freedom Tim (UGM)
deadline: 2026-07-26
updated: 2026-07-22
---

# 🏠 Dashboard Proyek: RetailMind AI

> [!abstract] Satu halaman untuk tahu seluruh proyek
> **RetailMind AI** adalah platform Business Health Scoring untuk UMKM F&B Indonesia. Mengubah transaksi harian menjadi skor kesehatan bisnis yang dipercaya pemodal.
> **Tagline:** Setiap transaksi membangun kepercayaan.
> **Lomba:** DIGDAYA X Hackathon PIDI 2026 (Bank Indonesia, OJK, ASPI, Fintech Indonesia, APUVINDO, LPPI). **Deadline: 26 Juli 2026.**
> Halaman ini adalah titik masuk tunggal. Kalau bingung harus baca apa, mulai dari sini.

## 🚦 Mulai dari mana (pilih jalurmu)

> [!tip] Punya 5 menit
> [[01 - Ringkasan Eksekutif]] lalu [[DISKUSI v3 - Ready to Win]]. Selesai, kamu paham inti dan arah.

> [!tip] Kamu juri atau pembaca baru
> Baca berurutan: [[01 - Ringkasan Eksekutif]] → [[02 - Masalah UMKM F&B]] → [[05 - Ikhtisar Produk]] → [[07 - Scoring Engine]] → [[08 - Keunggulan & Diferensiasi]] → [[Jawaban Tahap 3 (FINAL)]].

> [!tip] Kamu tim, mau tahu posisi dan langkah berikutnya
> [[DISKUSI v3 - Ready to Win]] → [[STATUS]] → [[04 - Laporan Validasi Sintetis]] → [[07 - Validasi Ulang Perubahan v2 (Multi-Agent)]] → [[Jawaban Tahap 3 (FINAL)]].

## 📊 Papan status proyek

| Bagian | Status | Catatan |
|---|---|---|
| Model skor (v2) | ✅ Selesai | Belanja stok jadi inventaris, bukan COGS. Lulus 16 dari 16 unit test. |
| Fitur Simulasi Belanja (What-If) | ✅ Selesai | Cek dampak belanja ke skor sebelum uang keluar. |
| Dashboard investor difokuskan | ✅ Selesai | Peta dihapus, fokus ke daftar, skor, dan readiness. |
| Aplikasi live | ✅ Jalan | Working prototype, bisa demo. |
| Validasi pasar | ✅ 5 lensa | 6 persona UMKM + bank + investor + skeptis. |
| Dokumentasi dirapikan | ✅ Selesai | Folder 01-10 berurutan, arsip dipisah. |
| **Proposal FIX** | 🔷 Fokus sekarang | Versi gap-closed untuk lolos ke tahap lanjut. |
| Mitra pembiayaan (LOI) | ⏳ Milestone pilot | Bukan syarat lomba sekarang. Jadi "The Ask" ke juri. |
| Fitur sisi bank di aplikasi | ⏳ Roadmap | SLIK, kolektibilitas, login bank, ekspor. |
| Penguatan anti-gaming | ⏳ Roadmap | Perkuat Inventory Turnover. |

## 🗺️ Peta produk

```mermaid
flowchart LR
  subgraph UMKM["UMKM (kumpul data)"]
    POS["Smart POS"]
    CB["Smart Cashbook"]
    CHAT["Pintu masuk chat"]
  end
  POS --> VAL["Validasi & bersih data"]
  CB --> VAL
  CHAT --> VAL
  VAL --> SCORE["Scoring Engine"]
  SCORE --> HS["Business Health Score 0-100"]
  SCORE --> IR["Investment Readiness"]
  HS --> DASH["Investor Dashboard"]
  IR --> DASH
  DASH --> DEC["Keputusan pendanaan"]
  DEC -.->|data flywheel| POS
```

## 📁 Struktur folder (urutan baca)

| Folder | Isi | Dokumen kunci |
|---|---|---|
| **01 - Ringkasan** | Intisari proyek | [[01 - Ringkasan Eksekutif]] |
| **02 - Riset & Masalah** | Masalah, pasar, persona | [[02 - Masalah UMKM F&B]] · [[04c - TAM SAM SOM]] |
| **03 - Solusi & Produk** | Produk dan mesin skor | [[05 - Ikhtisar Produk]] · [[07 - Scoring Engine]] |
| **04 - Keunggulan & Teknologi** | Moat, arsitektur, data | [[08 - Keunggulan & Diferensiasi]] · [[09 - Arsitektur & Teknologi]] |
| **05 - Bisnis & Eksekusi** | Model bisnis, proyeksi, roadmap | [[11 - Business Model & GTM]] · [[11b - Proyeksi Finansial 3 Tahun]] |
| **06 - Validasi Pasar** | Bukti validasi multi-agent | [[04 - Laporan Validasi Sintetis]] · [[Strategi Validasi PMF]] · [[STATUS]] |
| **07 - Proposal & Submission** | Proposal resmi dan jawaban | [[Jawaban Tahap 3 (FINAL)]] · [[20 - One-Pager & The Ask]] |
| **08 - Pitch & Presentasi** | Naskah dan skrip pitch | [[13 - Pitch & Antisipasi Juri]] · [[Naskah Pitch 60 Detik]] |
| **09 - Modul Hackathon** | Isian modul panitia | [[00 - Analisis Modul & Rekomendasi]] |
| **10 - Strategi & Review** | Arah v3 dan review juri | [[DISKUSI v3 - Ready to Win]] · [[Mindmap v3 - Ready to Win]] |
| **99 - Kanvas & Referensi** | Kanvas visual, sumber angka | [[Sumber & Asumsi Angka]] · [[Peta Produk.canvas]] |

## ❓ Keputusan yang menunggu kamu

Rincian dan bahan diskusi ada di [[DISKUSI v3 - Ready to Win]] bagian 6.
- **Nama brand final:** tetap "RetailMind" atau ganti (nama sedang dipakai pihak lain).
- **Segmen:** empat (warung, kafe, restoran, catering) atau bakery dikembalikan resmi.
- **Urutan kerja:** dahulukan fitur sisi bank atau kejar penjajakan mitra.
- **Lingkup demo v3:** fitur mana masuk demo, mana cukup roadmap.

## 👥 Tim

| Peran | Nama |
|---|---|
| Ketua Tim / AI Engineer | Hamzah Arman Husni |
| Developer | Dzaky Faishalariq |
| Marketing Strategist | Gregorius Bugen Jovi Sitindaon |
| Automation Specialist | Aditya Nurrohman |

**Institusi:** Universitas Gadjah Mada · **Tim:** Financial Freedom Tim
**Event:** DIGDAYA X Hackathon, Pusat Inovasi Digital Indonesia (PIDI) 2026
**Penyelenggara:** Bank Indonesia · OJK · ASPI · Fintech Indonesia · APUVINDO · LPPI
