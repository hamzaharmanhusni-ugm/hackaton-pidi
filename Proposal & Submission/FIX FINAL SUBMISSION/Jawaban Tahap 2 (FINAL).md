---
title: Jawaban Tahap 2 (FINAL)
tags: [retailmind, submission, tahap-2, jawaban, final]
status: final-siap-submit
---

> [!success] Dokumen FINAL
> Jawaban final form Submission Tahap 2 PIDI Hackathon. Sudah menerapkan koreksi [[16 - Perbaikan Proposal]] & mencerminkan produk nyata (working prototype). Daftar pertanyaan: [[Pertanyaan Tahap 2]]. Angka `(x/limit)` = jumlah kata vs batas resmi.

## 📎 File Proposal FINAL (buka di Obsidian)
- 📊 **PPT:** [[Proposal FINAL - RetailMind AI (Financial Freedom).pptx]]
- 📄 **DOCX:** [[Proposal FINAL - RetailMind AI (Financial Freedom).docx]]
- ❓ **Pertanyaan:** [[Pertanyaan Tahap 2]]

> [!tip] Agar PPT/DOCX bisa diklik di Obsidian
> Aktifkan **Settings → Files and links → Detect all file extensions** (ON). Tanpa ini, Obsidian menyembunyikan file .pptx/.docx di file explorer & link di atas tidak resolve.

![[Proposal FINAL - RetailMind AI (Financial Freedom).pptx]]
![[Proposal FINAL - RetailMind AI (Financial Freedom).docx]]

## TEAM IDENTITY
- **Team ID:** [ISI TEAM ID DARI PANITIA]
- **Team Name:** Financial Freedom Tim
- **Proposal Title:** RetailMind AI — Platform Business Health Scoring UMKM F&B Indonesia: Mengubah Transaksi Harian Menjadi Kepercayaan Investasi
- **Email:** hamzaharmanhusni@mail.ugm.ac.id
- **Kontak:** +62 823-2892-3953
- **Institusi:** Universitas Gadjah Mada
- **Portofolio:** https://bit.ly/FinancialFreedomTeamHckaton

## TEAM IDENTITY

### Team Composition *(88/120 kata)*

Financial Freedom Tim — Universitas Gadjah Mada, empat mahasiswa S2 Artificial Intelligence:
- Hamzah Arman Husni — Ketua / Project Lead & AI Engineer
- Dzaky Faishalariq — Developer (Frontend & Backend)
- Gregorius Bugen Jovi Sitindaon — Marketing Strategist / Business Development
- Aditya Nurrohman — Automation Specialist / Data Engineer
Kombinasi kompetensi AI/ML, pengembangan web full-stack, dan business development. Tim telah melakukan riset lapangan ke 15 UMKM F&B Yogyakarta dan membangun working prototype RetailMind AI (6 modul aktif), sehingga memahami sisi teknis sekaligus konteks bisnis lokal.

### Executive Summary *(123/150 kata)*

RetailMind AI adalah platform Business Health Scoring yang mengubah data transaksi harian UMKM F&B (omzet Rp10–200 juta/bulan) menjadi Investor Readiness Intelligence otomatis. Solusi menjawab dua kegagalan ekosistem: UMKM tak bisa membuktikan performa ke investor meski sudah digital, dan investor tak punya standar penilaian objektif.
Melalui tiga modul terintegrasi — Smart Data Collection (POS + Cashbook), AI Analysis Engine (Business Health Score + AI Coach Rinda), dan Investor Dashboard — kami menghasilkan Business Health Score (0–100) dan Investment Readiness Score (Low/Medium/High).
Penajaman dari submission pertama: status naik dari konsep menjadi working prototype dengan 6 modul berfungsi penuh, data UMKM F&B Yogyakarta ter-seed, dan dapat didemonstrasikan live (data nyata → skor → keputusan investor). Dampaknya: membuka akses pembiayaan bagi UMKM layak dan mempercepat screening investor.

## PROBLEM ALIGNMENT & REFINEMENT

### Problem Statement

Memperluas Investor Ritel (tema: Penguatan Ketahanan dan Inovasi Keuangan).

### Primary Sub-Problem Statement

Memperluas Investor Ritel, dengan sub-fokus Asisten Keuangan Pribadi dan Analisis Perilaku Pasar: menyediakan standar data & skor agar investor ritel/koperasi/BPR/fintech dapat menilai UMKM F&B secara cepat dan objektif.

### Problem Validation *(126/180 kata)*

Masalah inti: UMKM F&B skala kecil–menengah (warung, kafe, bakery) di Yogyakarta sudah memakai POS/QRIS, tetapi datanya terfragmentasi, duplikatif, dan tak konsisten antar channel — sehingga tidak mampu menyajikan laporan performa yang terstruktur dan terverifikasi. Akar penyebabnya adalah data readiness, bukan ketiadaan digitalisasi. Akibatnya investor dan lembaga pembiayaan tidak percaya, dan peluang pendanaan gagal meski bisnis layak.
Bukti: riset lapangan tim ke 15 UMKM F&B Yogyakarta — 100% tidak mampu menyajikan data terverifikasi 12 bulan terakhir; 77% UMKM mencatat manual/semi-manual (OCBC & NielsenIQ 2024); hanya ~19% punya laporan keuangan diterima lembaga formal (OJK); 69,5% UMKM belum mengakses kredit (Kementerian UMKM 2025). Masalah ini penting karena UMKM menyumbang ~60% PDB nasional namun tertahan gap pembiayaan ≈Rp2.400 triliun (selisih kebutuhan vs pasokan, Kemenko Perekonomian; setara USD 234 miliar, IFC).

### Problem–Solution Mapping *(135/180 kata)*

Alur masalah → fitur/pendekatan → hasil:
- Data terfragmentasi antar channel → Smart POS + Smart Cashbook (satu sumber data harian) → dataset bersih & konsisten.
- Tak bisa membuktikan performa → Business Health Score 0–100 (6 komponen) → bukti kesehatan bisnis terukur.
- Investor tak punya standar objektif → Investment Readiness Score + Investor Dashboard → screening cepat & terbanding.
- Due diligence mahal & lambat → ringkasan skor, tren 90 hari, risk flags + proposal PDF 1-klik → keputusan dalam menit.
- UMKM tak tahu cara memperbaiki → AI Coach Rinda (insight actionable Bahasa Indonesia) → langkah konkret menaikkan skor.
- Data rawan tidak valid → guardrail kualitas (skor hanya dihitung bila data ≥60% lengkap) → angka tepercaya.
Setiap fitur inti menjawab satu masalah spesifik yang sudah divalidasi, sehingga rantai problem–solusi–outcome saling terhubung.

### Ecosystem Alignment *(107/150 kata)*

RetailMind AI menempel pada infrastruktur keuangan digital yang sudah ada: mengolah data transaksi/QRIS yang kini dipakai 32+ juta merchant (mayoritas UMKM) menjadi penilaian bisnis. Solusi selaras dengan agenda inklusi keuangan Bank Indonesia dan arah Innovative Credit Scoring (ICS) OJK yang mendorong pemanfaatan data alternatif (transaksi digital) untuk penilaian kredit, serta target memperbesar UMKM dengan laporan formal.
Stakeholder: UMKM F&B (sumber & pengguna data), investor ritel/koperasi/BPR/fintech P2P (pengguna skor), platform marketplace (GoFood/GrabFood) sebagai sumber data, dan regulator (BI/OJK) untuk keselarasan ekosistem.
Batasan implementasi: kualitas skor bergantung kelengkapan data UMKM; integrasi marketplace butuh kerja sama API; penampilan profil ke investor butuh persetujuan UMKM; kepatuhan UU PDP wajib sejak awal.

## SOLUTION & IMPACT DEEP DIVE

### Solution Approach & Mechanism *(182/250 kata)*

INPUT — UMKM mencatat lewat Smart POS (transaksi, produk, stok, metode bayar termasuk QRIS) dan Smart Cashbook (pemasukan, pengeluaran, hutang, piutang). Impor CSV/Google Sheets tersedia untuk migrasi data lama.
PROSES — sistem memvalidasi & membersihkan data, mendeteksi anomali, lalu Scoring Engine menghitung Business Health Score (0–100) dari 6 komponen tertimbang: Revenue Growth (25%), Profitability (20%), Cashflow Stability (20%), Expense Efficiency (15%), Inventory Turnover (10%), Customer Retention (10%). Dari skor kesehatan + konsistensi data + umur usaha + kualitas pelaporan dihitung Investment Readiness Score (Low/Medium/High) beserta risk flags & strengths. Guardrail: skor hanya dihitung bila kelengkapan data ≥60%.
OUTPUT — UMKM melihat skor, tren, dan rekomendasi; AI Coach Rinda memberi insight actionable berbahasa Indonesia; satu klik menghasilkan proposal pendanaan PDF. Investor membuka Investor Dashboard (peta + daftar) untuk screening, melihat detail UMKM, menyimpan watchlist, dan menyatakan minat.
INTERAKSI — UMKM via web/PWA mobile-first; investor via dashboard; akses dipisah Row Level Security.
PENAJAMAN dari proposal pertama: scoring engine kini benar-benar terimplementasi (bukan rancangan), Investor Dashboard + peta + data 10+ UMKM F&B Yogyakarta sudah berjalan, dan Cashbook ditingkatkan (kategorisasi, deteksi anomali, 5 grafik, ekspor).

### Impact Scale & Targets *(143/230 kata)*

Dampak utama: menutup kesenjangan informasi UMKM–investor sehingga UMKM layak namun belum bankable bisa dinilai & didanai, dan investor dapat menyaring banyak UMKM dengan biaya rendah.
Penerima manfaat: (1) UMKM F&B Rp10–200 juta/bulan; (2) investor ritel, koperasi, BPR, fintech P2P; (3) ekosistem keuangan (data benchmark & inklusi).
Estimasi skala bertahap:
- 0–6 bulan (pilot Yogyakarta): 20–30 UMKM onboarded, 1.000+ transaksi tercatat, kelengkapan data naik dari <40% ke >75%, first investor assessment.
- 6–24 bulan (multi-kota): 200–500 UMKM, 100+ investor assessment, integrasi BPR/Koperasi/Fintech sebagai channel.
- >24 bulan (nasional): 5.000+ UMKM, integrasi data marketplace, RetailMind Score menjadi standar evaluasi UMKM F&B.
Efisiensi yang ditargetkan (proyeksi/benchmark literatur): waktu due diligence dari 2–4 minggu menjadi hitungan menit; satu analis dapat menyaring 50+ UMKM/hari vs 5–10/bulan; potensi peningkatan akses kredit hingga 3,5× seiring kelengkapan data (McKinsey 2023). Klaim efisiensi ini adalah proyeksi berbasis benchmark, akan divalidasi pada pilot.

### Impact Measurement *(157/270 kata)*

Indikator keberhasilan terukur (dengan target angka):
Adopsi & aktivitas: UMKM onboarded/bulan (target pilot 20–30 dalam 6 bulan); transaksi tercatat/bulan (1.000+ kumulatif pada pilot); jumlah Business Health Score ter-generate (≥1 skor valid per UMKM aktif); kelengkapan data rata-rata <40% → >75% dalam 6 bulan.
Engagement & retensi: konversi Free→Pro (target awal 10%); retensi bulanan UMKM aktif (≥60%); interaksi AI Coach per UMKM/bulan.
Sisi investor: jumlah investor assessment (100+ dalam 24 bulan); UMKM masuk watchlist & pernyataan minat; waktu screening per UMKM (proyeksi: turun dari minggu → menit).
Dampak finansial/ekosistem: jumlah UMKM yang naik kategori readiness (Low→Medium→High); jumlah proposal pendanaan PDF di-generate & ditindaklanjuti; jumlah mitra (BPR/Koperasi/Fintech) bergabung sebagai channel.
Cara pengukuran: seluruh metrik tercatat otomatis di platform (event transaksi, perhitungan skor harian tersimpan di tabel business_scores, audit log akses). Pada pilot kami juga mengukur baseline vs hasil (kelengkapan data, kemampuan menyajikan laporan terverifikasi) lewat survei sebelum–sesudah pada UMKM peserta, sehingga dampak dapat dibuktikan dengan angka, bukan klaim abstrak.

### System & Public Value Proposition *(131/200 kata)*

Nilai sistemik melampaui pengguna individu:
- Inklusi keuangan: membuka jalur pembiayaan bagi UMKM yang layak tetapi belum bankable (69,5% UMKM belum akses kredit), mendukung target porsi kredit UMKM dari ~19,8% menuju 30%.
- Perbaikan kualitas & standardisasi data: menciptakan format data UMKM F&B yang konsisten dan terverifikasi — bahan baku untuk Innovative Credit Scoring (ICS) OJK dan keputusan pembiayaan.
- Pengurangan risiko & asimetri informasi: risk flags dan skor objektif menurunkan risiko gagal bayar dan menutup kesenjangan informasi investor–UMKM.
- Efisiensi ekosistem: menurunkan biaya & waktu due diligence sehingga lebih banyak modal mengalir ke sektor riil.
- Transparansi & benchmark: agregasi (anonim) menghasilkan benchmark industri F&B per kota/kategori yang berguna bagi kebijakan inklusi keuangan BI dan asosiasi.
Dengan demikian, solusi memberi nilai bagi UMKM, investor, regulator, dan ekonomi digital nasional sekaligus.

## INNOVATION & DIFFERENTIATION

### Solution Originality *(227/300 kata)*

Kebaruan RetailMind AI terletak pada integrasi tiga lapisan yang selama ini terpisah, dikemas khusus untuk vertikal UMKM F&B Indonesia:
1. Lapisan operasional (Smart POS + Cashbook) — tempat data lahir.
2. Lapisan penilaian (Business Health Score + Investment Readiness Score) — mengubah data menjadi skor objektif 0–100.
3. Lapisan investor (Dashboard + watchlist + proposal PDF) — tempat skor dipakai untuk keputusan pendanaan.
Pemain yang ada berhenti di salah satu lapisan: aplikasi kasir/akuntansi (Moka, Majoo, Jurnal.id) berhenti pada pencatatan & laporan; fintech ICS hanya melakukan scoring di sisi lender tanpa membantu UMKM membangun datanya. Belum ada produk yang menutup rantai 'transaksi harian → skor tepercaya → keputusan investor' dalam satu platform vertikal F&B.
Pembeda lain:
- Dwi-sisi (two-sided): satu produk melayani UMKM dan investor, menciptakan network effect & data flywheel — makin lama dipakai, makin akurat skor dan makin tinggi nilainya bagi investor.
- AI Coach Rinda berbahasa Indonesia yang membaca konteks data toko nyata (bukan jawaban generik), menurunkan hambatan literasi.
- Scoring transparan dengan guardrail (skor hanya muncul bila data ≥60% lengkap) — menjaga kepercayaan, berbeda dari 'black box' scoring.
- Output 'investor-ready': proposal pendanaan PDF satu klik dan tampilan investor yang hanya menampilkan ringkasan/skor (bukan data mentah).
Kebaruan utama ada pada model layanan + integrasi ekosistem + fokus segmen, bukan sekadar fitur tunggal. Inilah yang menjadikan RetailMind AI infrastruktur kepercayaan UMKM, bukan sekadar alat catat.

### Technological / Method Innovation *(177/240 kata)*

Pendekatan teknologi dipilih agar akurat, hemat, dan tahan dipakai di lapangan:
- Hybrid Business Health Scoring khusus F&B: model berbobot 6 komponen (revenue growth, profitability, cashflow stability, expense efficiency, inventory turnover, customer retention) dengan guardrail validasi data. Bobot disesuaikan karakter arus kas harian F&B, sehingga skor relevan, bukan generik.
- RAG-based AI Coach (Rinda): insight dibangun dari konteks data toko nyata (revenue, expense, stok, skor), bukan pengetahuan umum — menekan halusinasi dan membuat saran actionable.
- AI multi-provider dengan fallback rule-based: sistem dapat memakai Claude/Gemini/OpenAI/OpenRouter, dan bila tak ada API key valid otomatis turun ke respons berbasis aturan — demo & layanan selalu jalan (ketahanan operasional).
- Data quality control & anomaly detection: deduplikasi, standardisasi SKU (fuzzy matching), serta deteksi pengeluaran anomali pada Cashbook.
- Forecasting hybrid (roadmap): Prophet/ARIMA untuk histori ≥3 bulan, weighted moving average untuk data terbatas — menyesuaikan keterbatasan data UMKM.
- Geospatial mapping (Leaflet) pada Investor Dashboard untuk discovery UMKM per lokasi.
Setiap teknologi punya fungsi jelas terhadap masalah: akurasi skor, kepercayaan data, kemudahan adopsi, dan ketahanan sistem — bukan teknologi demi teknologi.

### Creativity in Implementation *(194/250 kata)*

Kreativitas pada cara solusi diadopsi, didistribusikan, dan dimonetisasi:
- Onboarding tanpa friksi: gratis untuk masuk; UMKM cukup memakai POS/Cashbook seperti biasa, lalu skor & insight muncul otomatis. Impor CSV/Google Sheets memindahkan data lama; foto produk otomatis (Pexels) mempercepat setup katalog.
- AI Coach sebagai 'mentor', bukan software: Rinda menyapa proaktif saat skor turun ('laba bulan ini turun 11%, boleh saya bantu?') sehingga UMKM terdorong terus mencatat — mesin engagement yang juga memberi data flywheel.
- Distribusi berbasis komunitas: masuk lewat komunitas WhatsApp warung digital, Instagram UMKM lokal, dan bazar/event — bukan iklan mahal, sehingga CAC rendah.
- Strategi dua sisi yang saling menarik: UMKM dapat visibilitas ke investor; investor dapat deal flow tersaring. Proposal pendanaan PDF satu klik menjadi 'jembatan' konkret dari skor ke percakapan pendanaan.
- Monetisasi bertahap: freemium untuk akuisisi, Pro untuk UMKM serius, Investor Access & API B2B untuk lembaga pembiayaan, lalu matching fee saat deal terjadi — pendapatan tumbuh seiring nilai, tanpa membebani UMKM di awal.
- Insentif kelengkapan data: checklist 'menuju siap didanai' di dashboard mengubah pelengkapan data menjadi langkah bergamifikasi yang memperbaiki skor.
Pendekatan ini membuat solusi mudah diadopsi UMKM dengan literasi digital terbatas sekaligus menarik bagi investor.

## TECHNICAL VALIDATION

### System Architecture *(165/250 kata)*

Arsitektur (mobile-first, multi-tenant):
- Frontend: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui; PWA agar bisa diakses tanpa instalasi. Visualisasi memakai Recharts; peta investor memakai Leaflet.
- Backend & data: Supabase — PostgreSQL (11 tabel inti: profiles, stores, products, transactions, transaction_items, cashbook_entries, business_scores, investment_readiness, ai_coach_sessions, investor_watchlist, dll), Supabase Auth, dan Row Level Security untuk isolasi data per UMKM.
- API & logika: Next.js Route Handlers untuk perhitungan skor (/api/scores/calculate), AI Coach streaming (SSE), ekspor Cashbook, impor produk, dan generator proposal PDF (@react-pdf).
- AI layer: abstraksi multi-provider (Claude/Gemini/OpenAI/OpenRouter) + fallback rule-based; RAG memakai konteks data toko.
- Modul fungsional: Smart POS, Smart Cashbook, Health Score, Investment Readiness, AI Coach, Investor Dashboard (peta+list+filter), UMKM detail, Watchlist.
- Infrastruktur: deploy di Vercel (frontend/API) + Supabase (DB/Auth/Storage), dapat berkembang dengan auto-scaling.
Alur data: POS/Cashbook → PostgreSQL → Scoring Engine (Route Handler) → business_scores → ditampilkan ke UMKM (dashboard/AI Coach) dan ke investor (ringkasan/skor saja). Diagram alur lengkap tersedia pada lampiran/slide solusi.

### Data & Feasibility *(137/200 kata)*

Data utama bersifat first-party — berasal dari operasional UMKM sendiri: transaksi penjualan, produk/SKU, stok, dan arus kas (pemasukan, pengeluaran, hutang, piutang). Sumber: input Smart POS & Smart Cashbook, plus impor CSV/Google Sheets untuk data historis; opsional integrasi marketplace (GoFood/GrabFood) di tahap lanjut.
Format: data transaksional terstruktur (tabel relasional PostgreSQL). Cara perolehan: dihasilkan langsung oleh pemakaian harian, sehingga tidak bergantung pada data pihak ketiga yang sulit diakses/izin.
Ketersediaan: untuk demo, data sudah tersedia & ter-seed — akun UMKM 'Warung Makan Bu Siti' (±75 transaksi sepanjang ~90+ hari) dan 10+ UMKM F&B Yogyakarta untuk sisi investor (skor 49–86). Untuk pilot, data dikumpulkan dari UMKM peserta.
Kualitas & keandalan: pipeline membersihkan, deduplikasi, dan menstandarkan data; skor hanya dihitung bila kelengkapan ≥60% dan tanpa anomali signifikan. Pendekatan data-grounded (RAG) + guardrail menjaga output tetap akurat & tepercaya bagi UMKM maupun investor.

### Security & Compliance *(136/200 kata)*

Keamanan & kepatuhan menjadi fondasi karena menyangkut data keuangan UMKM:
- Isolasi data: Row Level Security (RLS) per UMKM di Supabase — setiap UMKM hanya mengakses datanya sendiri.
- Data minimization untuk investor: investor hanya melihat skor & ringkasan, tidak pernah transaksi/cashbook mentah. Profil UMKM ditampilkan ke investor hanya setelah persetujuan UMKM (consent).
- Kontrol akses berbasis peran (UMKM vs Investor) + autentikasi Supabase Auth (email/password, verifikasi email).
- Enkripsi in-transit (HTTPS/TLS) dan penyimpanan at-rest terkelola Supabase; audit log untuk setiap akses data demi integritas.
- Kepatuhan: selaras UU No. 27/2022 tentang Perlindungan Data Pribadi (persetujuan, hak subjek data, minimisasi) dan POJK terkait keamanan data layanan fintech/penyelenggara ITSK; arsitektur multi-tenant dengan pemisahan tegas.
Roadmap kepatuhan: kebijakan privasi & ToS, data retention policy, serta penetration testing sebelum skala produksi. Prinsip privacy-by-design diterapkan sejak MVP, bukan ditambahkan belakangan.

### Implementation Readiness (MVP) *(235/300 kata)*

Status: working prototype sudah berjalan — bukan sekadar rancangan.
Fitur prioritas yang SUDAH ada di MVP:
- Smart POS (transaksi, produk, stok, metode bayar termasuk QRIS).
- Smart Cashbook (pemasukan/pengeluaran/hutang/piutang, kategorisasi, deteksi anomali, 5 grafik, ekspor CSV/PDF).
- Business Health Score 0–100 (6 komponen, dihitung via API & tersimpan harian).
- Investment Readiness Score (Low/Medium/High) + risk flags & strengths.
- AI Coach Rinda (multi-provider + fallback rule-based).
- Investor Dashboard (peta Leaflet + daftar + filter), UMKM detail, watchlist.
- Generator proposal pendanaan PDF satu klik.
- Auth + RLS + 2 akun demo, data UMKM F&B Yogyakarta ter-seed.
Fitur BELUM masuk MVP (roadmap): OCR nota (struk → auto-kategorisasi), integrasi API GoFood/GrabFood, forecasting hybrid penuh, marketplace investasi & alur deal end-to-end, notifikasi real-time, mobile app native.
Kebutuhan tim: 4 anggota saat ini (AI/ML, full-stack, automation, business); penambahan 1 data engineer & 1 customer success saat pilot.
Kebutuhan teknologi: kredit AI API, hosting Vercel/Supabase tier produksi, domain & sertifikat.
Tahapan 6–12 bulan: (1) 0–3 bln — pilot 20–30 UMKM Yogyakarta, validasi scoring dengan data nyata, tambah OCR nota; (2) 3–6 bln — onboarding mitra pembiayaan, perbaikan model dari feedback; (3) 6–12 bln — integrasi marketplace & B2B API, persiapan skala multi-kota.
Risiko teknis utama & mitigasi: kualitas/kelengkapan data UMKM (mitigasi guardrail ≥60%, impor mudah, insentif kelengkapan); akurasi skor lintas tipe usaha (kalibrasi pada pilot); biaya AI (fallback rule-based & caching); keamanan data (RLS, enkripsi, audit).

## MARKET VALIDATION

### Problem–Market Fit *(78/120 kata)*

UMKM F&B adalah subsektor No.1 ekonomi kreatif (±4,85 juta usaha penyediaan makan-minum, BPS 2023) dengan arus kas harian jelas — ideal untuk scoring. Masalah pendanaan nyata & mendesak: bila tak diselesaikan, UMKM kehilangan peluang ekspansi, terjebak modal mahal/informal, dan investor menanggung biaya due diligence tinggi (2–4 minggu, jutaan rupiah per UMKM) serta risiko data tak terverifikasi. Akibatnya modal tidak mengalir ke bisnis yang sebenarnya layak. Kebutuhan akan data tepercaya dirasakan kedua sisi setiap hari, menjadikan problem–market fit kuat.

### Evidence of Demand *(142/220 kata)*

Bukti kebutuhan dari riset & data:
- Riset lapangan tim: 15 UMKM F&B Yogyakarta, 100% tidak mampu menyajikan data terverifikasi 12 bulan terakhir dan menyatakan butuh cara membuktikan kesehatan bisnis ke pemberi modal.
- 77% UMKM mencatat manual/semi-manual (OCBC & NielsenIQ 2024); hanya ~19% punya laporan keuangan diterima lembaga formal (OJK).
- 69,5% UMKM belum mengakses kredit (Kementerian UMKM 2025); porsi kredit UMKM ~19,8% vs target 30% (OJK, Des 2024) — sisi UMKM jelas under-served.
- Sisi pembiayaan haus data kelayakan: penyaluran P2P produktif baru 30,91% vs target 40–50%, menandakan lender butuh sinyal risiko yang lebih baik.
- Gap pembiayaan ≈Rp2.400 triliun (selisih kebutuhan vs pasokan, Kemenko Perekonomian; USD 234 miliar, IFC) menunjukkan ukuran masalah.
Kesimpulan: demand terbukti dua sisi — UMKM butuh membuktikan kelayakan, investor butuh data tepercaya untuk menilai. Validasi lanjutan dilakukan pada pilot Yogyakarta (survei sebelum–sesudah & konversi Free→Pro).

### Target Market *(95/150 kata)*

Primary: UMKM F&B skala kecil–menengah dengan omzet Rp10–200 juta/bulan dan 20–100 SKU — warung makan, kafe, bakery, catering — yang sudah memakai minimal satu alat digital (POS/QRIS/spreadsheet). Lokasi awal: Yogyakarta (pilot), lalu Semarang & Surabaya. Karakteristik: pemilik aktif, melek QRIS, literasi akuntansi terbatas, butuh cara mudah membuktikan kesehatan bisnis. Potensi ±4,85 juta usaha penyediaan makan-minum nasional (BPS 2023).
Secondary: investor ritel, koperasi simpan pinjam, BPR, dan fintech P2P lending yang mencari UMKM tersaring untuk pendanaan.
Funnel: TAM 4,85 juta usaha F&B → SAM UMKM F&B sudah digital Rp10–200jt/bln → SOM pilot 20–30, lalu 200–500 UMKM.

### Adoption Readiness *(126/180 kata)*

Target pengguna relatif siap: 25,5 juta UMKM sudah go-digital dan 32+ juta merchant memakai QRIS, sehingga perilaku mencatat transaksi digital sudah terbentuk — RetailMind AI menambahkan lapisan analitik di atas kebiasaan yang ada.
Faktor pendukung: gratis untuk masuk; antarmuka mobile-first sederhana; AI Coach berbahasa Indonesia menurunkan hambatan literasi; impor CSV/Google Sheets memudahkan migrasi.
Hambatan: literasi akuntansi/keuangan terbatas, kebiasaan mencatat belum konsisten, sebagian masih campur catatan tangan, dan kekhawatiran privasi data.
Perubahan perilaku yang dibutuhkan: mencatat transaksi secara rutin & lengkap.
Strategi mengurangi hambatan: onboarding berbasis komunitas + pendampingan; checklist bergamifikasi 'menuju siap didanai'; AI Coach proaktif yang mengingatkan & menjelaskan manfaat; template data siap pakai; transparansi privasi (investor tak melihat data mentah).
Akses perangkat/internet umumnya tersedia (smartphone + paket data), sehingga PWA cukup tanpa perangkat khusus.

## BUSINESS MODEL & SCALABILITY

### Value Proposition *(163/220 kata)*

Untuk UMKM F&B:
- Tahu kondisi bisnis secara objektif lewat Business Health Score 0–100 berbasis data nyata (bukan perasaan/generik).
- AI Coach Rinda memberi langkah konkret menaikkan performa dalam Bahasa Indonesia.
- Laporan/proposal pendanaan siap investor dalam 1 klik — tak perlu menyusun laporan manual.
- Visibilitas ke investor ritel & lembaga pembiayaan; peluang akses modal lebih besar.
- Pain point terjawab: lebih mudah (catat sekali, skor otomatis), lebih cepat (laporan instan), lebih kredibel (data terverifikasi).
Untuk investor & lembaga pembiayaan:
- Screening UMKM dalam menit (vs 2–4 minggu manual) lewat skor & dashboard.
- Investment Readiness Score (Low/Medium/High), tren 90 hari, dan risk indicators otomatis.
- Deal flow tersaring & portfolio monitoring terpusat; biaya analisis kelayakan jauh lebih rendah.
- Pain point terjawab: lebih cepat, lebih murah, lebih terukur risikonya, lebih terbanding antar-UMKM.
Nilai inti yang membedakan: RetailMind AI bukan sekadar mencatat, tetapi mengubah transaksi harian menjadi kepercayaan yang bisa dipakai untuk keputusan pendanaan — manfaat yang dirasakan kedua sisi pasar sekaligus.

### Model Revenue / Funding *(144/200 kata)*

Model utama: SaaS freemium dwi-sisi, agar UMKM mudah masuk dan pendapatan tumbuh seiring nilai.
- Free (UMKM): Rp0 — akuisisi & pengumpulan data (POS + Cashbook dasar + skor terbatas).
- Pro (UMKM): Rp149.000/bulan — insight penuh AI Coach, scoring lengkap, ekspor & proposal PDF. Revenue stream utama tahap awal.
- Investor Access: Rp299.000/bulan — akses Investor Dashboard, detail UMKM, watchlist, filter lanjutan.
- API License (B2B): Rp2–5 juta/bulan — integrasi skor ke sistem BPR/Koperasi/Fintech.
- Matching Fee: 1–2% per deal pendanaan yang terfasilitasi — monetisasi jangka panjang saat marketplace matang.
Pemilihan model: UMKM sensitif harga sehingga akuisisi via gratis; nilai termonetisasi saat UMKM serius (Pro) dan saat investor/lembaga butuh data (Access/API). Matching fee menyelaraskan pendapatan dengan keberhasilan pendanaan.
Funding: bootstrap dari langganan + potensi hibah/program inkubasi (mis. ekosistem BI/OJK, kampus) untuk ekspansi multi-kota — menjaga bisnis berjalan tanpa ketergantungan awal pada investor eksternal.

### Cost Structure & Sustainability *(141/200 kata)*

Komponen biaya utama:
- Engineering & pengembangan AI: ~60% (gaji tim teknis, iterasi produk & model scoring).
- Biaya AI API & cloud/server: ~20% (inferensi LLM, Supabase/Vercel, storage). Ditekan via fallback rule-based, caching, dan pemilihan model hemat.
- Marketing & akuisisi pengguna: ~15% (komunitas, konten, event) — CAC rendah karena kanal komunitas.
- Operasional, legal/compliance & maintenance: ~5%.
Keberlanjutan finansial: unit economics sehat — CAC UMKM Rp50–150 ribu (via komunitas), LTV Pro ~Rp1,788 juta (12 bulan), rasio LTV/CAC ~12–36×, payback <1 bulan (estimasi). Margin SaaS tinggi; biaya marginal per UMKM tambahan kecil.
Jalur menuju sustainability: (1) pendapatan langganan menutup operasional pada skala ratusan UMKM Pro + beberapa mitra B2B; (2) data flywheel menurunkan biaya akuisisi & meningkatkan nilai skor seiring waktu; (3) pendapatan B2B API & matching fee menambah margin tanpa biaya akuisisi UMKM satu per satu. Diversifikasi pendapatan menjaga ketahanan.

### Scalability *(125/170 kata)*

Solusi dirancang cloud-native & multi-tenant (Supabase/PostgreSQL + Vercel), sehingga dapat skala horizontal ke ribuan UMKM dengan auto-scaling tanpa perombakan arsitektur. Faktor pendukung skalabilitas:
- Arsitektur modular & API-first: fitur dan integrasi dapat ditambah bertahap.
- Data flywheel: makin banyak UMKM, makin akurat skor & benchmark, makin tinggi daya tarik bagi investor — menurunkan biaya akuisisi seiring waktu.
- Distribusi B2B (API ke BPR/Koperasi/Fintech): menjangkau banyak UMKM lewat mitra tanpa akuisisi satu per satu.
- PWA mobile-first: tanpa instalasi, mudah menjangkau wilayah baru.
Yang perlu disiapkan agar tak terhenti di skala kecil: kalibrasi model scoring lintas kategori/kota, hardening keamanan & compliance, monitoring performa & biaya AI, serta tim customer success untuk onboarding massal. Ekspansi: Yogyakarta → kota lain → nasional, lalu integrasi marketplace dan benchmark industri.

### Partnership & Distribution *(130/170 kata)*

Strategi distribusi berlapis:
- Akuisisi UMKM (komunitas): komunitas WhatsApp warung digital, Instagram & konten edukasi, event/bazar UMKM, serta kemitraan kampus/inkubator. CAC rendah, kepercayaan tinggi.
- Distribusi via mitra (B2B2C): BPR, Koperasi simpan pinjam, dan Fintech P2P sebagai channel ke investor sekaligus pengguna skor (lewat Investor Access/API) — menjangkau banyak UMKM secara tidak langsung.
Calon mitra & peran:
- GoFood/GrabFood — sumber data marketplace untuk memperkaya skor.
- BPR/Koperasi/Fintech P2P — pengguna skor & penyalur pembiayaan; channel distribusi.
- Bank Indonesia/OJK — keselarasan ekosistem & Innovative Credit Scoring; kredibilitas.
- Asosiasi UMKM & pemerintah daerah — akses ke basis pelaku usaha untuk pilot.
- Kampus (UGM) — riset, validasi, dan talenta.
Pendekatan: mulai dari pilot komunitas Yogyakarta, lalu kunci 1–2 mitra pembiayaan sebagai bukti deal flow, kemudian replikasi ke kota lain.

## PROGRESS UPDATE & ATTACHMENT

### Progress Since the 1st Submission *(124/150 kata)*

Perkembangan konkret sejak submission pertama:
- Status naik dari konsep/ide menjadi working prototype: 6 modul berfungsi penuh (Smart POS, Smart Cashbook, AI Coach, Health Score, Investment Readiness, Investor Dashboard).
- Scoring Engine benar-benar diimplementasikan (Health Score 6 komponen + Investment Readiness) dan dapat dihitung via API serta tersimpan harian.
- Investor Dashboard dibangun lengkap dengan peta (Leaflet), filter, dan data 10+ UMKM F&B Yogyakarta ter-seed; plus generator proposal pendanaan PDF satu klik.
- Smart Cashbook ditingkatkan: kategorisasi, deteksi anomali, 5 grafik, ekspor CSV/PDF; serta dashboard 'command center' UMKM.
- Auth + Row Level Security + 2 akun demo siap untuk demonstrasi live.
- Penajaman narasi & data: koreksi atribusi gap pembiayaan, TAM spesifik F&B (4,85 juta), dan penegasan keselarasan ICS OJK / inklusi BI.

### Current Status *(39/50 kata)*

Working Prototype — siap demo live. Akun demo: umkm@demo.com & investor@demo.com (password demo123456). Bukti: 6 modul aktif, data UMKM F&B Yogyakarta ter-seed (skor 49–86), alur nyata data → skor → keputusan investor. Fokus berikut: pilot Yogyakarta + OCR nota.

### Attachment

Lampiran pendukung:
- Link portofolio tim: https://bit.ly/FinancialFreedomTeamHckaton
- Link demo live (working prototype): [ISI URL DEPLOY]
- Akun demo: umkm@demo.com / investor@demo.com (password: demo123456)
- Pitch deck / proposal: file PPTX & PDF FINAL ini
- Diagram arsitektur sistem & skema solusi (slide Solution)
- Screenshot modul: POS, Cashbook, Health Score, AI Coach, Investor Dashboard

## REFERENSI

[1] World Bank & IFC (2023). MSME Finance Gap Report: Indonesia Country Brief.
[2] McKinsey Global Institute (2023). Closing the Gap: Digital Acceleration & SME Credit Access in SEA.
[3] OJK (2023). Survei Nasional Literasi dan Inklusi Keuangan UMKM 2023.
[4] OJK (2024). Statistik Kredit/Pembiayaan UMKM (porsi ~19,8%) & arah Innovative Credit Scoring (ICS).
[5] OCBC & NielsenIQ (2024). Business Fitness Index 2024: Perilaku Keuangan UMKM Indonesia.
[6] Badan Pusat Statistik (2023). Statistik usaha penyediaan makan-minum (~4,85 juta usaha).
[7] Kementerian Koperasi dan UKM (2025). Data UMKM & akses kredit (69,5% belum akses).
[8] Kemenko Perekonomian. Estimasi gap pembiayaan UMKM (kebutuhan vs pasokan ≈ Rp2.400 triliun).
[9] POJK No. 16/POJK.04/2021 tentang Equity Crowdfunding; POJK terkait LPBBTI/P2P.
[10] UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.
[11] Lewis, P., et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP. NeurIPS.
[12] Taylor, S.J. & Letham, B. (2018). Forecasting at Scale (Prophet).

---
> Kembali: [[Pertanyaan Tahap 2]] · [[16 - Perbaikan Proposal]] · [[00 - Beranda (MOC)]]