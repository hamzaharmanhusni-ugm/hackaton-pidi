---
title: Perbandingan v1 vs v2 (Sebelum-Sesudah)
tags: [retailmind, perbandingan, v1, v2, sebelum-sesudah, perbaikan]
status: aktif
updated: 2026-07-22
---

# Perbandingan v1 vs v2 (Sebelum-Sesudah)

> [!abstract] Tujuan dokumen
> Mencatat perbedaan konkret antara aplikasi versi 1 dan versi 2 agar jelas apa yang diperbaiki. Keduanya masih live dan bisa dibuka berdampingan untuk demonstrasi.
> - **v1 (lama):** https://hacketon-financial-freedom.vercel.app
> - **v2 (baru):** https://retailmind-v2.vercel.app
> - Akun demo sama: `umkm@demo.com` / `investor@demo.com`, password `demo123456`.

> [!info] Catatan penting soal data
> Kedua versi berbagi satu basis data Supabase yang sama. Jadi perbedaan antara v1 dan v2 ada pada KODE (model skor dan antarmuka), bukan pada datanya. Screenshot pembanding ada di riwayat percakapan sesi ini; untuk bukti visual paling akurat, buka kedua URL berdampingan.

## Perbedaan utama

| Aspek | v1 (lama) | v2 (baru) |
|---|---|---|
| **Model skor** | Belanja bahan baku masuk COGS, skor reset per bulan kalender, nilai inventaris di-hardcode nol. Akibatnya belanja stok menjatuhkan skor (bisa terbaca rugi). | Belanja bahan baku dan kemasan dihitung sebagai inventaris (aset). Skor atas jendela bergerak 30/60/90 hari. Belanja stok tidak lagi menjatuhkan skor. |
| **Anti-gaming** | Belum ada penangkal. | Inventory Turnover diperkuat: stok tercatat tanpa penjualan dan penumpukan stok ekstrem dihukum. Lulus 19 dari 19 unit test. |
| **Simulasi Belanja (What-If)** | Tidak ada. | Ada di halaman Health Score. Pemilik mengecek dampak belanja ke skor sebelum uang keluar. |
| **Investor Dashboard** | Menampilkan Peta Lokasi (Leaflet), toggle Peta vs Daftar. | Peta dihapus. Fokus ke daftar, skor, dan readiness, ditambah filter lokasi untuk diversifikasi geografis. |
| **Demo-ware** | Ada widget cuaca. | Dibuang. |
| **Uji skor** | 14 unit test. | 19 unit test. |

## Apa yang terlihat di screenshot

- **v1, Investor Dashboard:** tombol "Peta Lokasi" dan tampilan peta ("klik marker untuk melihat detail, ukuran marker mencerminkan skor"). Inilah peta yang di v2 dihapus.
- **v2, Health Score (Warung Bu Siti):** skor **82/100 (Bisnis Sehat)** dengan rincian enam komponen sehat, plus panel **Simulasi Belanja** yang tidak ada di v1. Sebelumnya toko ini keliru menampilkan rugi.

## Kenapa perubahan ini penting

Perubahan model skor menutup cacat akuntansi yang membuat UMKM musiman terbaca rugi, dan itu yang paling merusak kredibilitas skor di mata pemodal. Penghapusan peta membuat dashboard investor lebih relevan untuk keputusan (data, bukan hiasan), dan filter lokasi tetap menjaga kebutuhan diversifikasi. Simulasi Belanja menjawab permintaan pemilik agar bisa mengecek dampak sebelum bertindak.

## Batas jujur

> [!warning] Baru satu toko demo yang di-reseed
> Perbaikan data baru diterapkan pada toko utama demo (Warung Bu Siti, kini 82/100). Toko demo lain (mis. Warung Nasi Bu Sari dan UMKM sisi investor) belum di-reseed, sehingga skor live-nya bisa tampak rendah atau tidak konsisten dengan skor tersimpan. Untuk demo yang mulus, toko-toko lain perlu ikut di-reseed. Ini pekerjaan kecil yang bisa dijalankan dengan skrip yang sama.

→ Kembali: [[00 - Beranda (MOC)]] · Terkait: [[Validasi PoC & Kesiapan Menang (Agent)]] · [[DISKUSI v3 - Ready to Win]]
