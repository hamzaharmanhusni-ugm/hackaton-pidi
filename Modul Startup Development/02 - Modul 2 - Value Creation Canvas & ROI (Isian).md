---
title: Modul 2 - Value Creation Canvas & ROI (Isian)
tags: [retailmind, digdaya, pidi, modul, value-creation, roi, bank, how-much]
status: aktif
updated: 2026-07-21
---

# Modul 2 - Value Creation Canvas & ROI (Isian)

> [!abstract] Konteks
> Isian **Value Creation Canvas** (Who · What · How Much) dari modul, sekaligus merapikan angka tulisan tangan di lembar kamu. Semua angka mengikuti disiplin [[Sumber & Asumsi Angka]]: dipisah tegas antara tersitasi, keputusan internal, dan proyeksi. Fokus baru: sisi pemodal ditulis sebagai **bank** yang mencari nasabah, bukan sekadar "investor".

> [!warning] Aturan angka
> Angka HOW MUCH yang besar bertumpu pada satu asumsi dasar: biaya asesmen kredit Rp5-15 juta per UMKM. Angka dasar ini estimasi internal, belum ada sumber eksternal. Seluruh turunannya (ROI 133%, hemat Rp8 juta per UMKM, manfaat nasional Rp40 miliar) adalah **proyeksi yang divalidasi saat pilot**, bukan fakta.

## WHO - Siapa yang diuntungkan?

| Pihak | Peran | Cara diuntungkan |
|---|---|---|
| **UMKM F&B** | Pengguna + pemilik data | Akses modal formal lebih cepat dan murah, kredibilitas yang bisa dibuktikan |
| **Bank / lembaga pembiayaan** | Pembeli skor + penyalur modal | Pipeline nasabah UMKM terskrining, biaya asesmen turun, memenuhi mandat porsi kredit UMKM |
| **Platform (kami)** | Penyedia skor | Pendapatan langganan, lisensi API, matching fee |

- **Segmen utama:** warung, kafe, bakery, restoran (kecil dan menengah), catering. Omzet Rp10-200 juta per bulan. Catatan: bakery dikembalikan sebagai segmen karena tetap menjadi kategori aktif di aplikasi dan kebutuhan modalnya kuat (lihat [[05 - Persona Sisi Pemodal - Bank & Investor (Isian)]] dan persona bakery [[Persona A7 - Bakery (Mbak Rani)]]).
- **Skala pasar:** 4,85 juta usaha penyediaan makan-minum di Indonesia (BPS, 2023).
- **Target pemodal (appraiser):** bank, BPR, koperasi, fintech P2P, selaras arah OJK Innovative Credit Scoring.

## WHAT - Nilai apa yang diciptakan?

Masalah yang diselesaikan: data UMKM ada tetapi tidak terpercaya, sehingga usaha layak danai tetap unbankable dan pemodal tidak punya standar penilaian. Produk menciptakan **satu bahasa penilaian** (Health Score + Readiness Score) yang menjembatani keduanya.

> [!info] DATA BASELINE (kondisi tanpa solusi)
> - Biaya asesmen kredit konvensional: Rp5-15 juta per UMKM (estimasi internal).
> - Waktu due diligence: 2-4 minggu per UMKM.
> - Kapasitas satu analis: 5-10 UMKM per bulan.
> - 69,5% UMKM belum akses kredit; porsi kredit UMKM baru ~19,8% vs target 30% (OJK).

## HOW MUCH - Seberapa besar nilainya?

### Investasi (biaya solusi)

| Item | Nilai | Jenis |
|---|---|---|
| Investasi pilot | Rp180 juta | Estimasi internal ([[20 - One-Pager & The Ask]]) |
| Biaya build 3 tahun | Rp2-3 miliar | Asumsi kasar tim |

### Manfaat pilot (30 UMKM Yogyakarta)

| Komponen manfaat | Perhitungan | Nilai |
|---|---|---|
| Due diligence dihemat | 30 UMKM × Rp8 juta | Rp240 juta |
| Modal difasilitasi | 6 UMKM (porsi terdanai 20%) × Rp30 juta | Rp180 juta |
| **Total manfaat pilot** | Rp240 juta + Rp180 juta | **Rp420 juta** |

> [!success] ROI pilot
> ROI = (Rp420 juta − Rp180 juta) / Rp180 juta ≈ **133%**. Payback ≈ 3 bulan.
> Ini angka yang kamu tulis tangan, dan sudah cocok dengan [[Sumber & Asumsi Angka]]. Sebut sebagai proyeksi, bukan realisasi.

> [!danger] Angka ini belum menjadi kesediaan bayar
> Uji ulang persona menegaskan: Mas Aldi dan Mbak Rani belum mau membayar sampai bug skor (belanja stok menjatuhkan skor) diperbaiki dan ada bukti satu bank memakai skor. Jadi ROI 133% adalah potensi, bukan permintaan terbukti. Alasan lengkap: [[06 - Audit Web + Validasi Multi-Agent (Apa yang Perlu Diperbaiki)]].

### Manfaat skala nasional (proyeksi)

5.000 UMKM (target SOM 3 tahun) × Rp8 juta hemat asesmen ≈ **Rp40 miliar** manfaat asesmen, ditambah pipeline ribuan calon nasabah kredit terskrining untuk bank.

## HOW MUCH untuk bank secara spesifik

> [!important] Kenapa bank untung, dalam angka
> - **Biaya akuisisi dan asesmen nasabah turun.** Tiap UMKM yang datang sudah terskor, jadi tahap pre-screening yang biasa menelan Rp5-15 juta dan berminggu-minggu dipangkas. Hemat per UMKM diproyeksikan ~Rp8 juta (titik tengah Rp10 juta dikali efisiensi 80%).
> - **Nasabah baru yang produktif.** Health Score tinggi dan stabil menjadi proksi Kol-1 (Lancar). Dari pilot 30 UMKM, sekitar 6 layak lanjut ke pencairan (asumsi konservatif 20%), setiap satunya menjadi nasabah kredit sekaligus calon nasabah simpanan, QRIS, dan payroll.
> - **Memenuhi mandat regulator.** Menaikkan porsi kredit UMKM menuju target 30% (OJK) dan mendukung agenda inklusi keuangan BI, jadi nilai reputasi dan kepatuhan, bukan hanya nilai finansial.
>
> Semua angka ini proyeksi bersyarat: nyata hanya setelah ada bank yang benar-benar memakai skor. Itulah kenapa mengunci satu kemitraan bank adalah prioritas nomor satu.

## Revenue Model

| Aliran | Tarif | Peran |
|---|---|---|
| Free (UMKM) | Rp0 | Akuisisi dan pengumpulan data |
| Pro (UMKM) | Rp149.000/bln | Pendukung |
| Investor Access | Rp299.000/bln | Sekunder |
| **API License B2B (bank/lembaga)** | Rp2-5 juta/bln | **Kunci monetisasi** |
| **Matching Fee** | 1-2% per deal | **Kunci jangka panjang** |

> [!note] Pergeseran dari proposal
> Validasi membalik urutan: kunci monetisasi bukan langganan Pro, melainkan **kemitraan bank** (API License + matching fee). Selama skor belum diakui pemodal, langganan Pro sulit terkonversi ([[10 - Paket Bisnis (USP, ROI, Model)]]).

## Corong pasar (untuk melengkapi HOW MUCH)

| Tingkat | Populasi | Potensi nilai |
|---|---|---|
| TAM | 4,85 juta usaha F&B | ± Rp8,7 triliun/tahun (langganan saja) |
| SAM | ± 3 juta UMKM F&B go-digital Rp10-200jt/bln | ± Rp5,4 triliun/tahun |
| SOM (3 tahun) | ± 5.000 UMKM onboarded | ARR ± Rp2 miliar/tahun |

Rujukan: [[04c - TAM SAM SOM]], [[11b - Proyeksi Finansial 3 Tahun]].

## Aspek kunci

- **Aspek kunci #1 (asumsi yang harus divalidasi):** biaya asesmen riil per UMKM. Ukur langsung dari mitra bank/BPR pilot. Ini dasar semua angka HOW MUCH.
- **Aspek kunci #2 (pengukuran hasil):** porsi UMKM yang benar terdanai dan retensi bulan ke-2. Ganti angka estimasi dengan angka pilot begitu tersedia.

→ Lanjut: [[03 - Modul 3 - Team & Execution Readiness (Isian)]] · Kembali: [[00 - Analisis Modul & Rekomendasi]]
