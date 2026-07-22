---
title: Validasi PoC & Kesiapan Menang (Agent)
tags: [retailmind, digdaya, pidi, validasi, poc, rubrik, agent, kesiapan-menang]
status: aktif
updated: 2026-07-22
---

# Validasi PoC & Kesiapan Menang (Agent)

> [!abstract] Tujuan dokumen
> Hasil penilaian panel agen (juri DIGDAYA berlatar Bank Indonesia dan OJK, plus penilai skeptis) atas kesiapan proof of concept RetailMind dan peluang menang, dinilai terhadap dua rubrik resmi dari panduan peserta. Ditutup dengan perbaikan yang sudah dikerjakan dan yang masih tersisa. Rujukan: [[DISKUSI v3 - Ready to Win]], [[Jawaban Tahap 3 (FINAL)]].

## 1. Verdict dan skor rubrik

> [!warning] Verdict PoC: Sebagian
> PoC sah secara teknis (kode nyata dan live, teruji unit test dan lima putaran validasi multi-agent), tetapi hipotesis bisnis intinya, yaitu skor yang benar-benar dipakai lembaga pembiayaan, belum dibuktikan ke pihak eksternal. Layak lanjut dengan perbaikan mendesak, belum layak diklaim lolos penuh.

| Rubrik | Skor tertimbang | Kriteria paling menekan |
|---|---|---|
| 2nd Submission | 69,3 / 100 | Effectiveness & Impact (57), Business Model Feasibility (55): dampak ke luar masih nol tanpa mitra pembiayaan |
| Video Submission | 68,6 / 100 | Implementation Feasibility (55), Business & ROI (58): bergantung adopsi lembaga yang belum tersentuh |

## 2. Perbaikan yang SUDAH dikerjakan dari validasi ini

> [!success] Selesai (branch v2)
> - **Data demo diperbaiki.** Warung Bu Siti tadinya menampilkan rugi (omzet POS ~Rp1,5jt/bln vs beban ~Rp2,4jt/bln). Kini di-reseed realistis: ~15-20 penjualan per hari, omzet ~Rp23jt/bln, COGS ~52%, laba sehat. Skor kini dihitung jujur dari data, bukan angka hardcoded. Commit `f532b8d`.
> - **Anti-gaming Inventory Turnover diperkuat.** Menutup celah yang berulang disebut semua lensa uji: (1) stok tercatat tanpa penjualan tidak lagi netral, (2) penumpukan stok di atas 3x barang terjual kena penalti. Belanja musiman wajar tetap aman (uji regresi lulus). 19 dari 19 unit test skor lulus. Commit `e85462d`.
> - **Filter lokasi ditambahkan** di Investor Dashboard, menjawab kebutuhan diversifikasi geografis investor (kota kini bisa disaring, bukan hanya dicari). Commit `d035597`, tsc bersih.
> - **Redeploy ke Vercel (production)** membawa seluruh perubahan kode v2 (anti-gaming + filter lokasi) live di retailmind-v2.vercel.app (root 200 terverifikasi). Deployment `dpl_DsiuncmhWhbCpkQZbhrq3hdM4eSZ`.
> - **Batas jujur dicatat:** membedakan salah-kategori moderat dari restok normal butuh pelacakan stok multi-periode, dijadikan roadmap.

## 3. Perbaikan prioritas yang tersisa

| # | Perbaikan | Jenis | Catatan |
|---|---|---|---|
| 1 | Selesaikan penggantian nama brand di seluruh materi | Founder | Murni administratif, risiko persepsi besar di mata juri regulator. Paling mudah dituntaskan. |
| 2 | Pastikan video pitch terekam dan terunggah | Founder | Satu rubrik penuh (Video) bergantung padanya. Placeholder link masih kosong di jawaban. |
| 3 | ~~Cek data lokasi UMKM masih bisa difilter~~ | Kode | SELESAI: kota tersimpan dan kini punya dropdown filter lokasi eksplisit. |
| 4 | Label pembeda data seed vs data nyata di layar demo | Kode | Agar saat live demo, jawaban "ini contoh atau nyata" sudah ada di layar. |
| 5 | Samakan pelabelan "proyeksi" pada semua materi (one-pager, antisipasi juri) | Proposal | Sebagian materi masih menyebut "hemat 80%" dan "screening 50+ UMKM" sebagai fakta. |
| 6 | Periksa ulang klaim komposisi tim (bukan semua AI) | Proposal | Sudah dilunakkan di Jawaban Tahap 3, samakan di materi lain. |
| 7 | Kejar satu komitmen awal pembiayaan (sekecil apa pun) | Founder | Email balasan atau jadwal pertemuan sudah mengubah narasi. Kalau tidak tercapai, sebut sebagai milestone berjadwal. |

## 4. Risiko yang paling mungkin ditusuk juri

> [!danger] Tiga tusukan dan jawabannya
> 1. **"Kalau UMKM skor tinggi gagal bayar, siapa tanggung jawab?"** Jawab tegas dan cepat: skor adalah penyaringan awal, bukan pemutus kredit. Keputusan dan tanggung jawab tetap di lembaga pembiayaan yang punya SLIK dan asesmen sendiri. Monetisasi dari biaya penyaringan dan lisensi, bukan menanggung risiko kredit.
> 2. **"Mana bukti skor benar-benar dipakai lembaga, bukan dihitung sendiri?"** Jawab jujur: belum ada, ini milestone pilot fase pertama, dan tim tahu langkah konkretnya (20-30 UMKM Yogyakarta, retensi bulan kedua, koneksi mitra lewat penyelenggara). Juri BI dan OJK menghargai tim yang tahu batas dan punya rencana.
> 3. **Nama brand yang berpotensi bentrok.** Kecil secara teknis, besar secara persepsi. Tidak ada jawaban selain menyelesaikannya sebelum penjurian.

## 5. Kalau hanya sempat tiga hal sebelum 26 Juli

1. **Tuntaskan nama brand** di seluruh materi (administratif, tidak ada alasan tertunda).
2. **Rekam dan unggah video pitch** (satu rubrik penuh bergantung padanya).
3. **Perkuat anti-gaming** (sudah dikerjakan) dan **pastikan filter lokasi** masih ada (perbaikan kode kecil yang menjawab keluhan paling sering diulang).

Mengejar satu LOI nyata boleh dicoba, tetapi jangan sampai tiga hal di atas terbengkalai demi sesuatu yang kemungkinan besar tidak selesai tepat waktu.

→ Kembali: [[00 - Beranda (MOC)]] · Terkait: [[DISKUSI v3 - Ready to Win]] · [[Jawaban Tahap 3 (FINAL)]]
