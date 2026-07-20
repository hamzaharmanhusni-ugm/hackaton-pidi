---
title: Blueprint Versi Website
tags: [retailmind, blueprint, website, web, investor, fase-b]
status: draft
updated: 2026-07-21
---

> [!abstract] Tujuan dokumen
> Menetapkan peran versi website dalam model hibrida: apa yang tetap di web, apa yang diringankan, dan kenapa. Web menjadi ruang baca mendalam untuk pemilik dan satu-satunya kanal untuk investor. Berpijak pada analisis aplikasi live ([[06 - Analisis Aplikasi & Arah WhatsApp]]) dan temuan [[04 - Laporan Validasi Sintetis]]. Nama brand "RetailMind" bersifat sementara.

## 1. Prinsip pembagian

Chat menangani input dan coaching harian sisi UMKM. Web menangani yang butuh layar dan yang tidak mungkin di chat: **output visual kaya** dan **seluruh sisi investor**. Aplikasi web-nya sudah berjalan dan lengkap (18 halaman, nol error pada crawl), jadi ini soal penajaman peran, bukan bangun dari nol.

## 2. Yang tetap di web

| Fungsi | Alasan tetap di web |
|---|---|
| **Health Score penuh** | Gauge 0-100, breakdown komponen berbobot, riwayat 90 hari. Butuh layar, tidak muat di chat. |
| **Investment Readiness detail** | Kartu Low/Medium/High, keunggulan, hal yang perlu diperhatikan, kontrol privasi "tampilkan ke investor". |
| **Laporan siap-investor / PDF** | Dokumen yang diunduh dan disodorkan ke pemodal. |
| **Seluruh sisi investor** | Dashboard, peta 51 UMKM, filter dan screening, watchlist, portfolio monitoring. Padat data, wajib visual. |
| **Smart POS** | Kasir dine-in volume tinggi, sudah cepat dan jempol-friendly di mobile. |
| **Pengaturan dan privasi** | Kontrol siapa melihat apa, kelola akun. |

## 3. Yang diringankan atau digeser ke chat

| Sekarang di web | Perlakuan baru |
|---|---|
| **Cashbook padat** (saldo, hutang/piutang, filter, 4 grafik, anomali) | Untuk segmen bawah, input pindah ke chat. Web tetap menyimpan tampilan lengkap sebagai ruang baca mendalam bagi yang mau, bukan pintu masuk wajib. |
| **Input transaksi manual via form** | Digeser ke chat untuk pengeluaran tunai dan pesanan. Web tetap bisa dipakai yang nyaman dengan form. |

Cashbook adalah titik terberat bagi Bu Siti pada validasi. Web tidak menghapusnya, tetapi ia bukan lagi pintu masuk harian bagi pemilik gaptek.

## 4. Web sebagai kanal investor (tidak tergantikan chat)

Sisi investor sepenuhnya web. Investor butuh membandingkan banyak UMKM sekaligus, membaca peta, memfilter berdasarkan skor dan kota, dan memantau portofolio. Semua ini mustahil di percakapan. Karena itu, apa pun arah chat-first di sisi UMKM, **sisi investor tetap dan hanya di web**.

## 5. Hubungan dengan temuan validasi

- Pemilik butuh "satu ringkasan yang bisa disodorkan ke pemodal" (Koh Aan). Itu lahir di web: laporan siap-investor dan halaman skor.
- Pemilik menekankan "yang penting cair, bukan skor" (Bu Endah). Maka nilai web bukan sekadar menampilkan skor, melainkan menyambungkannya ke jalur pendanaan. Ini dibahas di [[08 - Solusi Gabungan Hibrida]].

## 6. Status implementasi

Sudah ada dan berjalan: seluruh fungsi di bagian 2 dan 3. Yang perlu ditambah pada fase berikutnya: penyederhanaan ringkasan skor agar mudah didorong ke chat, dan penyambungan ke lembaga pembiayaan (gap utama dari validasi).

→ Kembali: [[00 - Spec Desain Validasi Multi-Agent]] · Terkait: [[05 - Blueprint Versi Telegram (Chat)]] · [[08 - Solusi Gabungan Hibrida]]
