---
title: Perbaikan Proposal
tags: [retailmind, proposal, perbaikan, rekonsiliasi]
status: aksi-diperlukan
prioritas: tinggi
---

> [!danger] Tujuan
> Daftar perbaikan konkret untuk **menaikkan kualitas & konsistensi proposal v2** sebelum penilaian Tahap 2. Diurutkan dari yang paling berisiko membuat juri ragu (kredibilitas/konsistensi) hingga penguatan narasi.

## 🔴 Prioritas 1 — Konsistensi internal (wajib disamakan)

### 1. Demo store: narasi ≠ data live
- **Proposal v2 menyebut:** Warung Nasi Bu Sari (Yogya, 82) · Kopi Kekinian Mas Budi (Semarang, 65) · Catering Pak Hendra (Surabaya, 46).
- **Data yang benar-benar ter-seed:** "Warung Makan Bu Siti" (akun UMKM) + 10 UMKM F&B Yogyakarta (Kopi Senja Jogja, Bakmi Jawa Pak Pele, dll), skor 49–86. → [[10 - Data, Demo & Visualisasi]]
- **Risiko:** juri membuka demo dan tidak menemukan toko yang disebut proposal → kredibilitas jatuh.
- **Aksi:** pilih satu sumber kebenaran. Rekomendasi: **samakan proposal ke data live** (atau seed ulang sesuai proposal). Sebut "10+ UMKM F&B Yogyakarta" agar konsisten dengan fokus pilot Yogyakarta.

### 2. Atribusi angka "Rp2.400 triliun"
- **Proposal menulis:** "gap pendanaan Rp2.400 triliun/tahun (World Bank & IFC, 2023)".
- **Temuan riset:** angka Rp2.400T adalah **turunan** kebutuhan Rp4.300T − pasokan Rp1.900T (**Kemenko Perekonomian**). Angka IFC yang resmi adalah **USD 234 miliar**. → [[04 - Riset Pasar F&B Indonesia]]
- **Aksi:** ubah jadi *"Gap pembiayaan UMKM ≈ Rp2.400 triliun (selisih kebutuhan vs pasokan, Kemenko Perekonomian) atau USD 234 miliar (IFC)."*

### 3. Jumlah anggota tim
- Ringkasan menyebut **"empat mahasiswa S2 AI UGM"**, sedangkan tabel memuat 1 ketua + 3 anggota = 4 (konsisten) — **pastikan kalimat & tabel tidak saling bertentangan** dan semua peran benar.

### 4. Provider AI
- Proposal: "Claude claude-sonnet-4-6 (streaming SSE)". Codebase memuat Anthropic + OpenAI + Gemini + fallback rule-based. → [[09 - Arsitektur & Teknologi]]
- **Aksi:** narasikan sebagai *"AI multi-provider dengan Claude sebagai engine utama dan fallback rule-based agar demo selalu jalan"* — lebih akurat & menonjolkan ketahanan sistem.

## 🟡 Prioritas 2 — Kekuatan bukti & sumber

### 5. Pisahkan angka "dikutip proposal" vs "terverifikasi"
- Beberapa sumber proposal (mis. 77% OCBC-NielsenIQ, 3,5× McKinsey, 19% OJK) **valid tapi perlu URL/halaman** agar bisa ditelusuri juri.
- Tambahkan angka kuat hasil riset: **69,5% UMKM belum akses kredit** (Kementerian UMKM 2025), porsi kredit UMKM **~19,8% vs target 30%**, **P2P 30,91% vs target 40–50%**. → [[04 - Riset Pasar F&B Indonesia]]

### 6. Klaim "3–5 juta unit usaha" segmen target
- Proposal menyebut 3–5 juta (BPS & Kemenkop 2024). Data BPS yang lebih spesifik: **4,85 juta usaha penyediaan makan-minum (2023)** — pakai angka spesifik ini sebagai dukungan TAM.

### 7. Klaim dampak ("due diligence −80%", "akses kredit 3,5×")
- Tandai sebagai **proyeksi/benchmark literatur**, bukan hasil platform, agar tidak dianggap overclaim.

## 🟢 Prioritas 3 — Penajaman narasi

### 8. Kuantifikasi TAM/SAM/SOM
- Tambah funnel: TAM (4,85 juta usaha F&B) → SAM (UMKM F&B sudah digital, Rp10–200jt/bln) → SOM (target pilot Yogyakarta 20–30, lalu 200–500).

### 9. Bukti traksi awal
- Tambahkan metrik prototype yang bisa ditunjukkan (jumlah transaksi seed, jumlah skor ter-generate) agar "Working Prototype" terasa nyata, bukan klaim.

### 10. Tegaskan keselarasan tema BI/OJK
- Hubungkan eksplisit ke **Innovative Credit Scoring (ICS)** OJK & agenda inklusi keuangan BI — memperkuat "System & Public Value". → [[03 - Kebutuhan & Peran Investor]]

## Checklist sebelum submit Tahap 2

- [ ] Demo store di proposal = data live (P1.1)
- [ ] Atribusi Rp2.400T dikoreksi (P1.2)
- [ ] Kalimat & tabel tim konsisten (P1.3)
- [ ] Narasi provider AI diperbaiki (P1.4)
- [ ] Setiap angka punya sumber yang bisa ditelusuri (P2.5)
- [ ] Angka TAM spesifik (4,85 juta) dipakai (P2.6)
- [ ] Klaim dampak ditandai proyeksi (P2.7)
- [ ] Funnel TAM/SAM/SOM ditambahkan (P3.8)
- [ ] Metrik traksi prototype ditampilkan (P3.9)
- [ ] Keselarasan ICS OJK / inklusi BI ditegaskan (P3.10)

→ Jawaban Tahap 2: [[17 - Pertanyaan & Jawaban Tahap 2]] · Review juri: [[14 - Penilaian Juri (Review)]] · Kembali: [[00 - Beranda (MOC)]]
