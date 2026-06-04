---
title: Pertanyaan & Jawaban Tahap 2
tags: [retailmind, submission, tahap-2, qna]
status: draft-jawaban
sumber-form: proposal/FireShot ... pertanyaan tahap 2.pdf (hackathon.pidi.id)
---

> [!info] Tentang dokumen ini
> Draft jawaban untuk **form Submission Tahap 2** PIDI Hackathon (hackathon.pidi.id). Setiap field di form dijawab di bawah, grounded ke [[15 - Proposal DIGDAYA 2026 (Ringkasan)]] + data [[04 - Riset Pasar F&B Indonesia]]. **Terapkan dulu [[16 - Perbaikan Proposal]] sebelum menyalin** (terutama angka & demo store).

> [!tip] Cara pakai
> Tiap bagian = satu field di form. Salin isi blok jawaban, sesuaikan panjang dengan batas karakter form.

---

## 1. Proposal Title
**RetailMind AI — Platform Business Health Scoring untuk UMKM F&B Indonesia: Mengubah Transaksi Harian Menjadi Kepercayaan Investasi.**

## 2. Team Composition
Financial Freedom Tim (Universitas Gadjah Mada): **Hamzah Arman Husni** (Ketua), **Dzaky Faishalariq** (Developer), **Gregorius Bugen Jovi Sitindaon** (Marketing Strategist), **Aditya Nurrohman** (Automation Specialist). Latar belakang AI/ML + business development; telah melakukan riset lapangan ke 15 UMKM F&B Yogyakarta.

## 3. Executive Summary
RetailMind AI adalah platform Business Health Scoring yang mengubah data transaksi harian UMKM F&B (omzet Rp10–200jt/bln) menjadi *Investor Readiness Intelligence* otomatis. Platform menjawab dua kegagalan ekosistem: (1) UMKM tak dapat membuktikan performa ke investor meski datanya sudah digital; (2) investor tak punya standar penilaian objektif. Melalui tiga modul — Smart Data Collection (POS+Cashbook), AI Analysis Engine (Health Score + AI Coach), dan Investor Dashboard — kami menghasilkan **Business Health Score (0–100)** dan **Investment Readiness Score (Low/Medium/High)**. Status: **Working Prototype**, 6 modul aktif, dapat didemonstrasikan live.

## 4. Problem Statement
~70% UMKM Indonesia belum bisa mengakses kredit perbankan (69,5%, Kementerian UMKM 2025) — bukan karena bisnisnya lemah, tetapi karena **datanya tidak terpercaya & terfragmentasi**. UMKM F&B sudah pakai POS/QRIS namun tidak mampu menyajikan data terverifikasi; investor & lembaga pembiayaan tidak memiliki standar penilaian objektif sehingga peluang pendanaan gagal.

## 5. Primary Sub-Problem Statement
**Memperluas Investor Ritel** melalui sub-fokus *Asisten Keuangan* dan *Analisis Perilaku Pasar*: menyediakan standar data & skor yang membuat investor ritel/koperasi/BPR/fintech dapat menilai UMKM F&B secara cepat dan objektif.

## 6. Problem Validation
- Riset lapangan tim: **15 UMKM F&B Yogyakarta, 100%** tidak mampu menyajikan data terverifikasi 12 bulan terakhir.
- **77%** UMKM mencatat manual/semi-manual (OCBC & NielsenIQ 2024).
- Hanya **~19%** UMKM punya laporan keuangan diterima lembaga formal (OJK).
- Gap pembiayaan ≈ **Rp2.400 triliun** (Kemenko: kebutuhan Rp4.300T vs pasokan Rp1.900T) / **USD 234 miliar** (IFC).
- Porsi kredit UMKM hanya **~19,8%** vs target 30% (OJK Des 2024). → sumber lengkap [[04 - Riset Pasar F&B Indonesia]]

## 7. Problem → Solution Mapping
| Masalah | Solusi RetailMind |
|---|---|
| Data terfragmentasi | Smart POS + Cashbook (satu sumber data) |
| Tak bisa buktikan performa | Business Health Score 0–100 |
| Investor tak punya standar | Investment Readiness Score + Dashboard |
| Due diligence mahal/lambat | Screening berbasis skor dalam menit |
| Data rawan dimanipulasi | Guardrail konsistensi & kualitas data |

## 8. Ecosystem Alignment
Selaras dengan **agenda inklusi keuangan Bank Indonesia**, arah **Innovative Credit Scoring (ICS) OJK** (data alternatif QRIS/transaksi digital untuk penilaian kredit), dan target meningkatkan UMKM dengan laporan formal. Menempel pada momentum **32 juta merchant QRIS (95% UMKM)** — mengolah data transaksi yang sudah ada menjadi penilaian bisnis.

## 9. Solution Approach & Mechanism
Data harian (POS + Cashbook) → validasi & deteksi anomali → **Scoring Engine** menghitung 6 komponen Health Score + komponen Readiness → AI Coach memberi insight → Investor Dashboard menampilkan skor, tren, risk flags untuk keputusan. Mekanisme skor: model berbobot transparan dengan guardrail data ≥60% completeness. → [[07 - Scoring Engine]]

## 10. Impact Scale & Targets
- 0–6 bulan: 20–30 UMKM Yogyakarta, 1.000+ transaksi, first investor assessment.
- 6–24 bulan: 200–500 UMKM, 100+ investor assessments, integrasi BPR/Koperasi.
- >24 bulan: RetailMind Score jadi standar evaluasi UMKM nasional. → [[12 - Roadmap & Metrik Sukses]]

## 11. Impact Measurement
KPI: UMKM onboarded/bln, transaksi tercatat/bln, scores generated, investor assessments, konversi Free→Pro, kelengkapan data (<40%→>75%). Dampak: due diligence −80% (proyeksi), screening 50+ UMKM/hari.

## 12. System & Public Value Proposition
Nilai publik: membuka akses pembiayaan bagi UMKM yang layak namun tak bankable, menurunkan biaya & risiko screening investor, dan menciptakan **standar data UMKM** yang mendukung kebijakan inklusi keuangan nasional serta data benchmark F&B.

## 13. Solution Originality
Platform **pertama di Indonesia yang mengintegrasikan tiga layer** dalam satu produk vertikal F&B — operasional UMKM (POS+Cashbook), scoring (Health + Readiness), dan marketplace investor — dengan AI Coach berbahasa Indonesia. Pemain lain berhenti di pencatatan/laporan (Moka, Majoo, Jurnal) atau hanya scoring di sisi lender (fintech ICS). → [[08 - Keunggulan & Diferensiasi]]

## 14. Technological / Method Innovation
- **Hybrid scoring** khusus F&B Indonesia (6 komponen tertimbang + guardrail).
- **RAG-based AI Coach (Rinda)** memakai konteks data toko nyata, bukan generik.
- **Data flywheel**: makin lama dipakai, makin akurat skor.
- AI **multi-provider** (Claude utama + fallback rule-based) untuk ketahanan.

## 15. Graduality in Implementation
Modular & bertahap: Fase 0 demo → Fase 1 pilot Yogyakarta → Fase 2 multi-kota (partnership BPR/Koperasi/Fintech) → Fase 3 nasional (integrasi GoFood/GrabFood, benchmark nasional). Tidak butuh infrastruktur kompleks di awal. → [[11 - Business Model & GTM]]

## 16. System Architecture
Next.js 16 (App Router) + React 19 + TypeScript di frontend; Supabase (PostgreSQL + Auth + RLS) backend; API route untuk scoring & AI Coach; AI multi-provider; Recharts untuk visual. Multi-tenant dengan isolasi data per UMKM. Diagram: [[09 - Arsitektur & Teknologi]].

## 17. Data & Feasibility
Data dari transaksi & cashbook UMKM sendiri (first-party). Demo: akun UMKM (Warung Makan Bu Siti, ~75 transaksi/90 hari) + 10 UMKM F&B Yogyakarta untuk investor. Skor hanya dihitung bila data ≥60% lengkap. → [[10 - Data, Demo & Visualisasi]]

## 18. Security & Compliance
- **Row Level Security (RLS)** per UMKM — investor hanya melihat skor & ringkasan, **tidak pernah** transaksi/cashbook mentah (*data minimization*).
- Selaras **UU PDP No. 27/2022** & **POJK** keamanan data fintech P2P; enkripsi **in-transit** dan penyimpanan terkelola Supabase (**at-rest**); audit trail tiap akses data.
- Multi-tenant isolation; persetujuan UMKM sebelum profil ditampilkan ke investor. → [[09 - Arsitektur & Teknologi]]

## 19. Implementation Readiness (MVP)
**Working Prototype** — 6 modul aktif (POS, Cashbook, AI Coach, Health Score, Readiness Score, Investor Dashboard), 2 akun demo, data F&B ter-seed. Dapat didemonstrasikan live: data nyata → skor → keputusan investor. → [[06 - Modul Produk]]

## 20. Value Proposition
UMKM: skor berbasis data nyata, AI Coach actionable, laporan siap investor 1 klik, visibilitas ke investor. Investor: screening dalam menit, Readiness Score, risk indicators, portfolio monitoring. → [[05 - Ikhtisar Produk]]

## 21. Model Revenue / Funding
Freemium: Free (UMKM) → **Pro Rp149K/bln** → **Investor Access Rp299K/bln** → **API License B2B Rp2–5jt/bln** → **Matching Fee 1–2%/deal**. → [[11 - Business Model & GTM]]

## 22. Cost Structure & Sustainability
Engineering & AI 60% · AI API 20% · Marketing 15% · Ops 5%. Unit economics sehat: CAC Rp50–150K, LTV Pro Rp1,788jt, **LTV/CAC 12–36×**, payback <1 bulan.

## 23. Scalability
Cloud-native (Supabase) + arsitektur multi-tenant → skala horizontal. Data flywheel menurunkan biaya akuisisi seiring waktu. B2B API memungkinkan distribusi via lembaga pembiayaan tanpa akuisisi UMKM satu per satu.

## 24. Partnership & Distribution
Channel: WhatsApp komunitas UMKM, Instagram, events/bazar. B2B: **BPR, Koperasi, Fintech P2P** sebagai channel distribusi investor; **GoFood/GrabFood** untuk integrasi data; **Bank Indonesia** untuk keselarasan ekosistem.

## 25. Problem–Market Fit
UMKM F&B = subsektor No.1 ekonomi kreatif (~41–43% PDB ekraf, 4,85 juta usaha) dengan cashflow harian jelas → ideal untuk scoring. Pain point pendanaan nyata & besar. → [[04 - Riset Pasar F&B Indonesia]]

## 26. Evidence of Demand
Riset 15 UMKM Yogyakarta (100% butuh solusi data), gap pembiayaan ≈Rp2.400T, 69,5% UMKM unbankable, fintech butuh data kelayakan (P2P produktif baru 30,91% vs target 40–50%). Demand dua sisi terbukti.

## 27. Target Market
Primary: UMKM F&B Rp10–200jt/bln (warung, kafe, bakery, catering) — ±4,85 juta usaha makan-minum (BPS 2023). Secondary: investor ritel, BPR, Koperasi, Fintech P2P.

## 28. Adoption Readiness
Onboarding mudah (UMKM sudah terbiasa POS/QRIS), gratis untuk masuk, AI Coach berbahasa Indonesia menurunkan hambatan. 25,5 juta UMKM sudah go-digital → siap mengadopsi lapisan analitik.

## 29. Progress Since the 1st Submission
- Dari konsep → **Working Prototype** dengan 6 modul berfungsi penuh.
- Scoring Engine (Health + Readiness) terimplementasi & dapat dihitung via API.
- Investor Dashboard + map + data 10 UMKM F&B Yogyakarta ter-seed.
- Cashbook upgrade (5 chart, kategorisasi, deteksi anomali) & dashboard command center.
> [!note] Lengkapi dengan tanggal & commit nyata bila diminta bukti. Riwayat fitur ada di git history proyek.

## 30. Current Status
Working Prototype siap demo live. Akun demo aktif: `umkm@demo.com` / `investor@demo.com` (password `demo123456`). Fokus berikutnya: pilot Yogyakarta + OCR nota.

## 31. Attachment (Link)
Portofolio: https://bit.ly/FinancialFreedomTeamHckaton — lampirkan juga link demo live & PDF proposal v2.

---

> [!warning] Sebelum submit
> Jalankan checklist [[16 - Perbaikan Proposal]] (samakan demo store, koreksi atribusi Rp2.400T, sumber tiap angka). → Kembali: [[00 - Beranda (MOC)]]
