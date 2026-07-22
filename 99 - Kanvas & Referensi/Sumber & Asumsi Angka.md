---
title: Sumber & Asumsi Angka
tags: [retailmind, sumber, asumsi, validasi, angka]
status: aktif
updated: 2026-07-12
---

> [!abstract] Tujuan
> Transparansi patokan setiap angka di [[Who What How Much Canvas.canvas]] dan dokumen pitch lain. Angka dipisah tegas: **tersitasi** (sumber resmi), **keputusan internal** (harga/target kami sendiri), **proyeksi/estimasi** (belum ada sumber eksternal), dan **turunan** (hasil kalkulasi). Ini penting supaya saat juri bertanya "angka ini dari mana", jawabannya jelas dan tidak mengklaim lebih dari yang bisa dibuktikan.

> [!warning] Kejujuran angka
> Beberapa angka HOW MUCH yang terlihat besar (Rp8jt/UMKM, Rp40 miliar, ROI 133%) bertumpu pada satu asumsi dasar: **biaya due diligence Rp5-15jt per UMKM**. Angka dasar ini **belum punya sumber eksternal**, hanya estimasi internal. Jadi seluruh turunannya harus disebut sebagai proyeksi yang divalidasi saat pilot, bukan fakta.

## Klasifikasi setiap angka

| Angka | Nilai | Jenis | Sumber / Dasar |
|---|---|---|---|
| Jumlah usaha F&B | 4,85 juta | Tersitasi | BPS 2023 (Statistik Penyediaan Makan-Minum), via [[04 - Riset Pasar F&B Indonesia]] |
| UMKM belum akses kredit | 69,5% | Tersitasi | Kementerian UMKM 2025, via [[04 - Riset Pasar F&B Indonesia]] |
| UMKM catat manual | 77% | Tersitasi | OCBC & NielsenIQ 2024, via [[04 - Riset Pasar F&B Indonesia]] |
| Harga Pro | Rp149K/bln | Keputusan internal | [[11 - Business Model & GTM]] |
| Harga Investor Access | Rp299K/bln | Keputusan internal | [[11 - Business Model & GTM]] |
| Harga API B2B | Rp2-5jt/bln | Keputusan internal | [[11 - Business Model & GTM]] |
| Matching fee | 1-2% per deal | Keputusan internal | [[11 - Business Model & GTM]] |
| ARR Tahun 3 | ~Rp2 miliar | Proyeksi internal | [[11b - Proyeksi Finansial 3 Tahun]] (base-case) |
| Target SOM 3 tahun | 5.000 UMKM | Target internal | [[04c - TAM SAM SOM]], [[12 - Roadmap & Metrik Sukses]] |
| **Biaya due diligence** | **Rp5-15jt/UMKM** | **Estimasi internal (belum ada sumber eksternal)** | [[03 - Kebutuhan & Peran Investor]]; konteks industri: origination fee 1-6% nilai pinjaman |
| Waktu due diligence | 2-4 minggu | Estimasi internal | [[03 - Kebutuhan & Peran Investor]] |
| Kapasitas analis | 5-10 UMKM/bln | Estimasi internal | [[03 - Kebutuhan & Peran Investor]] |
| Efisiensi screening | turun ~80% | Proyeksi | [[12 - Roadmap & Metrik Sukses]] (dinyatakan sebagai proyeksi) |
| Kapasitas dengan platform | 50+ UMKM/hari | Proyeksi | [[12 - Roadmap & Metrik Sukses]] |
| Hemat DD per UMKM | ~Rp8jt | Turunan asumsi | titik tengah Rp5-15jt (~Rp10jt) x 80% |
| Modal kerja per UMKM | Rp10-50jt | Asumsi | estimasi tim (rentang KUR mikro) |
| Porsi terdanai | 20% | Asumsi | estimasi tim (konservatif) |
| Pinjaman rata-rata | Rp30jt | Asumsi | estimasi tim |
| Total manfaat nasional | ~Rp40 miliar | Turunan | 5.000 x Rp8jt |
| Investasi pilot | Rp180 juta | Estimasi internal | [[20 - One-Pager & The Ask]] (rentang Rp150-200jt) |
| DD dihemat pilot | Rp240 juta | Turunan | 30 x Rp8jt |
| Modal difasilitasi pilot | ~Rp180 juta | Turunan asumsi | 6 UMKM x Rp30jt |
| Total manfaat pilot | Rp420 juta | Turunan | Rp240jt + Rp180jt |
| ROI pilot | ~133% | Turunan | (420 - 180) / 180 |
| Payback | ~3 bulan | Turunan | 180 / (420 / 6 per bulan) |
| Build 3 tahun | Rp2-3 miliar | Asumsi kasar | estimasi tim |

## Yang wajib divalidasi saat pilot

> [!danger] Empat asumsi paling menentukan
> 1. **Biaya due diligence riil** per UMKM (dasar semua nilai HOW MUCH). Ukur langsung dari mitra BPR/Koperasi pilot: berapa jam analis dan biaya per debitur.
> 2. **Efisiensi -80%**: bandingkan waktu screening dengan vs tanpa RetailMind pada mitra yang sama.
> 3. **Porsi terdanai (20%)** dan **pinjaman rata-rata (Rp30jt)**: dari realisasi pilot.
> 4. **Akurasi skor**: backtest skor vs realisasi pembayaran/pertumbuhan.

Ganti angka estimasi dengan angka pilot begitu tersedia, lalu perbarui [[Who What How Much Canvas.canvas]] dan [[11b - Proyeksi Finansial 3 Tahun]].

## Sumber eksternal

**Data pasar (resmi, via [[04 - Riset Pasar F&B Indonesia]]):**
- BPS, Statistik Penyediaan Makan-Minum 2023
- Kementerian UMKM 2025 (akses kredit)
- OJK SNLIK 2024; Kemenko Perekonomian / IFC (financing gap)
- OCBC & NielsenIQ 2024 (pencatatan manual)

**Konteks biaya asesmen pinjaman (pendukung, bukan angka Indonesia langsung):**
- [Bankrate: Small Business Loan Fees](https://www.bankrate.com/loans/small-business/small-business-loan-fees/)
- [PwC: Loan origination fees and costs](https://viewpoint.pwc.com/dt/us/en/pwc/accounting_guides/loans_and_investment/loans_and_investment_US/chapter_4_accounting__1_US/44_loan_origination__US.html)
- [Prospa: biaya origination pinjaman usaha (1-6%)](https://www.prospa.com/blog/what-does-a-small-business-loan-really-cost-fees-interest-and-charges-explained)
- [Client appraisal & efisiensi lembaga mikro (cost per client)](https://arxiv.org/pdf/2106.07679)

> [!note] Cara memakai konteks industri
> Benchmark origination fee 1-6% nilai pinjaman menegaskan **arah argumen** (mengasesmen pinjaman kecil proporsional mahal), bukan membuktikan angka rupiah spesifik kami. Sebut sebagai "selaras dengan praktik industri", jangan diklaim sebagai sumber angka Rp5-15jt.

→ Canvas: [[Who What How Much Canvas.canvas]] · Kembali: [[00 - Beranda (MOC)]]
