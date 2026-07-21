---
title: Persona A7 - Bakery (Mbak Rani)
tags: [retailmind, persona, validasi, bakery, agent, penguji]
status: aktif
updated: 2026-07-21
---

# Persona A7 - Bakery (Mbak Rani)

> [!abstract] Kenapa persona ini ditambahkan
> Segmen bakery sempat di-drop dari positioning proposal, tetapi tetap menjadi kategori aktif di aplikasi ([[08 - Keunggulan & Diferensiasi]] dan kode `lib/constants/categories.ts`). Bakery relevan untuk kasus ini: kebutuhan modalnya besar dan berpola musiman, sehingga justru menonjolkan kekuatan Scoring Engine pada Cashflow Stability dan Inventory Turnover. Persona ini dipakai sebagai penguji baru (A7) dalam validasi multi-agent. Kelanjutan dari [[02 - Kartu Persona Agent]].

> [!example] 🥐 "Order kue nikahan dan kering Lebaran banyak, tapi modal bahan keluar dulu sebelum dibayar. Oven kedua belum kebeli."
> **Nama** Mbak Rani · **Usia** 35 · Perempuan · Yogyakarta · lulusan D3
> **Usaha** home bakery: kue kering, roti harian, dan custom cake pesanan (nikahan, ulang tahun, hampers). Omzet fluktuatif Rp 20-150 juta per bulan, berjalan 4 tahun.

## Profil

- **Kebiasaan digital:** jualan lewat Instagram dan WhatsApp, terima QRIS dan transfer, catat pesanan di buku dan chat. Belum pakai POS penuh karena transaksi bukan ritel cepat, melainkan pesanan.
- **Akses teknologi:** ponsel Android, laptop sesekali untuk desain label. Nyaman chat, kurang nyaman form panjang.

## Pain point

> [!danger] Yang paling menekan
> - **Modal bahan keluar di muka.** Tepung, butter, telur, dan kemasan dibeli sebelum pesanan besar dibayar penuh. Termin klien acara sering mundur.
> - **Musiman tajam.** Lonjakan Lebaran, Natal, dan musim nikahan, lalu sepi di antaranya. Bulan sepi membuat rasio pengeluaran terlihat buruk.
> - **Butuh belanja modal alat.** Oven kedua, mixer besar, dan cold storage untuk memperluas kapasitas, tetapi bank ragu karena laporan tidak ada.
> - **Pembukuan pesanan berantakan.** Uang muka, pelunasan, dan biaya bahan per pesanan sulit dipisah dari kas harian.

## Jobs-to-be-Done

- Fungsional: "Pisahkan modal bahan dan alat dari beban rutin, supaya bulan belanja besar tidak terbaca rugi."
- Emosional: "Yakinkan saya bahwa usaha musiman saya tetap sehat di mata bank."
- Sosial: "Buktikan bahwa bakery rumahan seperti saya layak dapat KUR, bukan cuma warung ramai."

## Kenapa cocok untuk produk

Pola kas naik-turun tajam justru butuh skor yang membaca **stabilitas cashflow lintas musim** dan **perputaran stok**, bukan omzet kotor sesaat. Ini menyoroti kelemahan skor saat ini yang menghukum belanja stok besar (lihat audit di [[06 - Audit Web + Validasi Multi-Agent (Apa yang Perlu Diperbaiki)]]). Bakery menjadi kasus uji paling tajam untuk perbaikan jendela bergerak dan pemisahan belanja modal.

## Sinyal aktivasi

Memakai Cashbook untuk memisahkan biaya bahan per pesanan, menyusun satu laporan siap-pemodal untuk pengajuan KUR alat, dan bertahan lewat satu siklus musim sepi.

→ Terkait: [[04a - Persona Customer & User]] · [[02 - Kartu Persona Agent]] · Kembali: [[00 - Spec Desain Validasi Multi-Agent]]
