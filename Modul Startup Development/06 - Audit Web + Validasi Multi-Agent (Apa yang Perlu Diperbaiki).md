---
title: Audit Web + Validasi Multi-Agent (Apa yang Perlu Diperbaiki)
tags: [retailmind, digdaya, pidi, audit, validasi, multi-agent, perbaikan, v2]
status: aktif
updated: 2026-07-21
---

# Audit Web + Validasi Multi-Agent (Apa yang Perlu Diperbaiki)

> [!abstract] Tujuan dokumen
> Menyatukan tiga sumber temuan menjadi satu daftar perbaikan berprioritas: (1) audit kode aplikasi live, (2) temuan PoC bot Telegram, (3) uji ulang lima lensa validasi multi-agent (empat persona + satu skeptis). Hasilnya menjadi rencana kerja versi 2 (branch v2). Sumber aplikasi: `D:\Bahan Kuliah UGM\Hackaton PIDI\Hacketon_financial_freedom\retailmind-ai`.

## 1. Audit kode aplikasi (sumber kebenaran)

> [!bug] Temuan utama: skor menghukum belanja stok yang wajar
> Di `lib/scoring/health-score.ts` dan `app/api/scores/calculate/route.ts`:
> - Skor dihitung atas **bulan kalender berjalan** dan **reset tiap awal bulan**. Di awal bulan data tipis, satu pengeluaran besar mendominasi.
> - `inventoryValue` di-**hardcode 0**, jadi belanja stok tidak pernah dihitung sebagai aset. Ia hanya memukul tiga komponen sekaligus: `expenseEfficiency`, `profitability`, dan `cashflowStability`.
> - Akibatnya belanja stok wajar terbaca sebagai bisnis kritis, dan skor bisa jatuh mendekati 0. Ini persis yang muncul di PoC (Mas Aldi beli biji kopi Rp500rb, skor jatuh 0).
>
> Ini bukan sekadar bug tampilan, melainkan cacat desain penilaian. Satu contoh ini cukup meruntuhkan kredibilitas skor di depan juri.

Temuan sekunder:
- Kategori F&B di aplikasi sudah mencakup **bakery** (`lib/constants/categories.ts`). Jadi drop bakery hanya terjadi di positioning proposal, menciptakan inkonsistensi aplikasi vs proposal. Rekomendasi: kembalikan bakery (lihat [[Persona A7 - Bakery (Mbak Rani)]]).
- Data demo live: **Warung Bu Siti + UMKM F&B Yogyakarta** (termasuk bakery), bukan "Bu Sari/Mas Budi/Pak Hendra" yang disebut proposal. Samakan ([[16 - Perbaikan Proposal]] poin 1).
- Sisi pemodal hanya punya peran **Investor**, belum ada peran/tampilan **Bank/lembaga**.
- Ada unit test skor (`health-score.test.ts`, `investment-readiness.test.ts`), jadi perbaikan skor bisa diverifikasi lewat test.

## 2. Temuan PoC bot Telegram (ringkas)

Enam persona tuntas onboarding dan mencatat lewat chat. Tiga bug diperbaiki (multi-transaksi, tanda baca, coach over-promising). Dua batas nyata: skor goyah pada belanja satu hari (sama dengan temuan audit kode), dan biaya LLM free tier tidak cukup untuk beban banyak pengguna. Detail: [[Simulasi Telegram/02 - Laporan PoC Telegram]].

## 3. Uji ulang validasi multi-agent (lima lensa)

| Lensa | Verdict inti | Perlu diperbaiki menurut mereka |
|---|---|---|
| Mas Aldi (kafe) | Belum mau bayar sampai bug skor beres dan ada bukti bank | Pisah kategori pengeluaran, tren 3-6 bulan, simulator "kalau belanja stok segini skor turun berapa" |
| Mbak Rani (bakery) | Belum mau bayar sampai pemisahan modal bahan dan skor musiman beres | Pisah belanja bahan vs alat, pecah pesanan jadi uang muka/pelunasan/biaya bahan, skor jangan reset bulanan |
| Pak Danang (bank) | Bersedia pilot kecil 10-20 UMKM sebagai screening awal saja, bukan dasar kredit | SLIK, tampilan kolektibilitas, jejak audit, ekspor massal, peran login bank |
| Skeptis | Cacat skor meruntuhkan kredibilitas dalam hitungan detik | Perbaiki skor, dapatkan satu validasi eksternal nyata (LOI), labeli angka dampak sebagai proyeksi |

> [!danger] Pola yang tidak bisa diabaikan
> Mayoritas persona **belum mau membayar**, dan alasannya sama: skor belum kredibel (bug belanja stok) dan belum ada pemodal nyata yang memakainya. Kesediaan bayar bersyarat, bukan tidak ada. Dua syaratnya jelas: perbaiki skor, kunci satu kemitraan.

> [!warning] Pertanyaan mematikan dari skeptis (harus punya jawaban)
> "Kalau UMKM berskor tinggi gagal bayar, siapa yang menanggung?" Bank sudah punya kanal sourcing sendiri (SLIK, asesmen lapangan, scoring internal). Kalau produk hanya memberi rekomendasi tanpa tanggung jawab hukum atas akurasi skor, bank menanggung risiko penuh dan startup nol.
>
> **Arah jawaban:** posisikan skor tegas sebagai **pre-screening**, bukan pengganti keputusan kredit (bank tetap memutuskan). Monetisasi lewat matching fee dan lisensi, bukan menanggung risiko kredit. Kejar payung regulasi (arah Innovative Credit Scoring OJK, jalur sandbox) dan satu LOI mitra sebagai bukti minat nyata. Ini menggeser argumen dari "percayalah skor kami" ke "kami hemat biaya penyaringan awal Anda, keputusan tetap di tangan Anda".

## 4. Daftar perbaikan berprioritas (rencana v2)

> [!important] Prioritas 1 (penentu): perbaiki mesin skor
> 1. **Pisahkan belanja stok/modal dari beban operasional.** Tambah tipe atau kategori pengeluaran (stok, alat/investasi, operasional, marketing). Belanja stok masuk sebagai aset inventaris, bukan beban, lalu diamortisasi terhadap penjualan.
> 2. **Hitung skor atas jendela bergerak** (rata-rata 30 atau 90 hari), bukan reset bulan kalender. Ini menstabilkan bisnis musiman (bakery, catering).
> 3. **Isi `inventoryValue` sebenarnya** agar Inventory Turnover bermakna, bukan selalu netral 50.
> 4. **Perbarui unit test skor** untuk mengunci perilaku baru (belanja stok besar tidak lagi menjatuhkan skor).

> [!note] Prioritas 2: bukti eksternal dan kejujuran angka
> - Kejar **satu LOI** dari bank, BPR, atau koperasi sebagai pengganti validasi sintetis.
> - Labeli semua angka dampak (ROI 133%, hemat Rp8jt/UMKM, due diligence -80%) sebagai **proyeksi** dengan asumsi terbuka. Sebagian sudah dikerjakan di [[02 - Modul 2 - Value Creation Canvas & ROI (Isian)]] dan [[Sumber & Asumsi Angka]].

> [!note] Prioritas 3: fitur sisi bank (menyambung persona Pak Danang)
> Peran login bank terpisah, field SLIK, tampilan kolektibilitas eksplisit, jejak audit `data_consistency_score`, ekspor pipeline massal. Cukup versi ringan untuk demo, tidak perlu integrasi penuh.

## 5. Fitur: tambah, ubah, kurangi

| Aksi                | Fitur                                                                       | Alasan                                                                |
| ------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Tambah**          | Kategori pengeluaran (stok/alat/ops/marketing) yang memengaruhi skor        | Akar perbaikan skor, diminta Aldi dan Rani                            |
| **Tambah**          | Tren dan skor jendela bergerak 3-6 bulan                                    | Menstabilkan musiman, diminta semua persona UMKM                      |
| **Tambah**          | Pemecahan pesanan (uang muka, pelunasan, biaya bahan) untuk catering/bakery | Diminta Mbak Rani, cocok segmen pesanan                               |
| **Tambah**          | Peran bank + SLIK + kolektibilitas + jejak audit + ekspor                   | Syarat Pak Danang agar skor dipakai                                   |
| **Tambah**          | Simulator "efek belanja stok ke skor"                                       | Membantu UMKM mengatur waktu belanja (Aldi)                           |
| **Kurangi**         | Weather widget                                                              | Demo-ware, tidak memengaruhi keputusan kredit (skeptis, Aldi, Rani)   |
| **Kurangi / tunda** | Peta lokasi UMKM                                                            | Nilai rendah untuk keputusan kredit, salah prioritas menurut skeptis  |
| **Kurangi / tunda** | Import produk dari sheet                                                    | Fitur power user, bukan kebutuhan segmen inti                         |
| **Sesuaikan**       | 8 skema pendanaan campur di tampilan bank                                   | Bank hanya KUR dan kredit konvensional, sederhanakan untuk lensa bank |


## 6. Rencana uji before vs after

Setelah v2 dibangun, jalankan ulang simulasi terskrip enam persona (plus A7 bakery) lewat `scripts/telegram-sim-scripted.mjs` dan unit test skor, lalu bandingkan skor sebelum dan sesudah perbaikan. Yang diharapkan berubah: skor Mas Aldi dan Koh Aan tidak lagi jatuh ke 0 saat belanja stok, dan skor musiman Mbak Rani lebih stabil. Hasil dicatat sebagai tabel before vs after.

## 7. Status implementasi v2 (progres)

> [!success] Prioritas 1 SELESAI dan terverifikasi (branch v2, commit 6358633)
> Bug skor diperbaiki di kode, bukan sekadar dicatat:
> - `lib/scoring/assemble-input.ts` (baru): menyusun input skor atas jendela bergerak 30/60/90 hari, memisahkan Bahan Baku dan Packaging (ke COGS dan inventaris) serta Peralatan (dikecualikan) dari beban operasional.
> - `app/api/scores/calculate/route.ts`: memakai helper itu, tidak lagi reset bulan kalender, COGS item POS dibatasi 30 hari.
> - `lib/scoring/assemble-input.test.ts` (baru): 4 tes, termasuk regresi utama yang membuktikan belanja stok besar tidak lagi menjatuhkan skor.
> - Verifikasi: 14 dari 14 unit test skor lulus, typecheck bersih.
> Tanpa ubah database: kolom `category` pada `cashbook_entries` sudah ada, jadi pemisahan cukup di kode.

> [!success] Yang sudah tuntas sesudahnya (2026-07-22)
> - **Deploy v2** ke domain baru https://retailmind-v2.vercel.app (DB sama, situs lama utuh).
> - **Fitur Telegram diperbaiki**: bot memisahkan belanja stok dari beban operasional, plus perbaikan bug split desimal `1.2jt` (commit `02dd8dc`).
> - **Uji before vs after 7 persona** (hasil di [[Simulasi Telegram/03 - Before vs After (v2)]]): A2 0→94, A3 0→56, A6 4→94, A7 bakery 0→86, A5 tetap 94.
> - **Favicon profesional** (`app/icon.svg`).
> - **Proposal investor-ready v4** (`proposal/PROPOSAL_DIGDAYA_2026_v4.md`, commit `0fa16de`): status v2 deployed, bukti before/after (8.3.1), Bank Anchor Partner + jawaban risiko gagal bayar (11.5), nama toko demo disamakan data live, bakery + 4H.

Sisa opsional (sebagian aksi founder, di luar sprint ini): fitur UI sisi bank (peran login, SLIK, kolektibilitas) baru ada di proposal belum di app; trim demo-ware (weather widget, peta); kejar satu LOI bank nyata.

→ Kembali: [[00 - Analisis Modul & Rekomendasi]] · Terkait: [[12 - Dua Solusi & Rekomendasi (Berbasis PoC)]] · [[Persona A7 - Bakery (Mbak Rani)]]
