---
title: Validasi Ulang Perubahan v2 (Multi-Agent)
tags: [retailmind, digdaya, pidi, validasi, multi-agent, v2, perubahan]
status: aktif
updated: 2026-07-22
---

# Validasi Ulang Perubahan v2 (Multi-Agent)

> [!abstract] Tujuan dokumen
> Menguji apakah perubahan fitur versi 2 sudah tepat di pasar, lewat validasi ulang empat lensa persona yang dijalankan paralel. Fokusnya bukan seluruh produk, melainkan tiga perubahan konkret yang baru diterapkan ke aplikasi. Ini kelanjutan dari [[06 - Audit Web + Validasi Multi-Agent (Apa yang Perlu Diperbaiki)]].

## 1. Perubahan yang divalidasi

1. **Model skor diselesaikan.** Belanja bahan baku dan kemasan kini murni dihitung sebagai inventaris (aset), tidak lagi masuk COGS periode berjalan. COGS hanya dari barang yang benar-benar terjual (item POS). Belanja alat tetap dikecualikan sebagai belanja modal. Akibatnya, menyetok bahan dalam jumlah besar jelang musim ramai tidak lagi menekan margin dan laba di bulan pembelian.
2. **Fitur baru: Simulasi Belanja (What-If).** Di halaman Health Score, pemilik memasukkan rencana nominal belanja lalu memilih kategori (stok, operasional, atau alat) dan langsung melihat skor sekarang dibanding skor setelah belanja, sebelum uang dikeluarkan.
3. **Demo-ware dibuang.** Peta lokasi UMKM di dashboard investor dihapus, begitu pula widget cuaca yang sudah tidak terpakai. Tampilan investor fokus ke daftar UMKM, skor, dan investment readiness.

## 2. Hasil empat lensa

| Lensa                      | Verdict  | Inti reaksi                                                                                                                                                     | Yang mereka minta berikutnya                                                                                                                                                                                                                 |
| -------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mas Aldi (kafe)            | Sebagian | Perbaikan skor dan simulator persis yang diminta dulu, disebut "alat kerja, bukan gimmick". Bisa cek dampak sebelum transfer.                                   | Belum mau bayar sampai ada bukti bank atau investor nyata memakai skor. Khawatir orang menandai beban sebagai stok agar skor aman.                                                                                                           |
| Mbak Rani (bakery musiman) | Sebagian | Belanja bahan Rp10 juta jelang Lebaran yang dulu menjatuhkan skor ke 0 kini terbaca sehat. Pemisahan modal bahan dan jendela bergerak menjawab pola musimannya. | Pisahkan uang muka dan pelunasan pesanan dari kas harian. Musim sepinya kadang lebih panjang dari 90 hari. Ingin opsi bayar per musim, bukan langganan bulanan tetap.                                                                        |
| Pak Danang (bank)          | Sebagian | Logika inventaris lebih masuk akal daripada versi lama. Menghapus peta membuat tampilan lebih relevan untuk keputusan kredit.                                   | Sistem harus bisa membedakan stok yang terjual dari stok menumpuk. Fitur sisi bank (login bank, SLIK, kolektibilitas, jejak audit, ekspor massal) harus jalan di aplikasi, bukan sekadar di proposal. Tetap hanya bersedia pilot 15-20 UMKM. |
| Skeptis (Mbak Sinta)       | Sebagian | Perbaikan skor nyata dan terverifikasi (16 dari 16 unit test lulus, before vs after membuktikan skor tidak lagi jatuh ke 0). Menutup cacat paling fatal.        | Baru menutup satu dari tiga syarat. Sisanya: LOI mitra pembiayaan nyata dan fitur sisi bank.                                                                                                                                                 |

## 3. Temuan yang menyatu

> [!check] Perubahan inti tepat sasaran
> Keempat lensa setuju bahwa penyelesaian model skor dan simulator sudah benar dan menyentuh keluhan lama secara langsung. Bug yang dulu meruntuhkan kredibilitas sudah tertutup dan terbukti lewat angka, bukan klaim. Menghapus demo-ware justru dianggap menaikkan relevansi, bukan mengurangi nilai.

> [!warning] Risiko baru yang muncul serempak: peluang gaming
> Memindahkan belanja stok menjadi aset membuka celah baru. Pemilik bisa menandai beban operasional sebagai stok agar skor tidak turun, atau menimbun stok yang tidak laku. Aldi, Pak Danang, dan skeptis menyinggung hal yang sama: perputaran persediaan (Inventory Turnover) harus benar-benar menghukum stok mati agar celah ini tertutup. Simulator pun berisiko menjadi alat menata tampilan skor kalau tidak disertai pengingat yang jujur.

## 4. Keputusan yang diambil dari validasi ini

- **Simulator diberi kategori ketiga (Alat/Investasi).** Mbak Rani tidak menyadari belanja alat sudah dikecualikan. Kini simulator mengajarkan ketiga kelompok yang dibedakan model: stok jadi inventaris, operasional jadi beban, alat jadi belanja modal.
- **Pengingat anti-gaming ditambahkan di simulator.** Kalimatnya jujur: menandai beban sebagai stok hanya menahan skor sesaat, dan stok yang tidak kunjung terjual justru menurunkan skor perputaran persediaan. Ini menjawab kekhawatiran gaming langsung di dalam produk, bukan sekadar di dokumen.
- **Celah gaming diakui sebagai batas yang diketahui.** Komponen Inventory Turnover sudah memberi koreksi otomatis (stok besar dibanding COGS menaikkan hari persediaan dan menurunkan skornya), tetapi bobotnya kecil. Penguatan penuh anti-gaming dijadwalkan sebagai pekerjaan berikutnya, dan skor tetap diposisikan sebagai penyaringan awal yang keputusannya diverifikasi bank.

## 5. Sisa yang belum tersentuh (jujur)

- **LOI mitra pembiayaan nyata.** Ini aksi pendiri, bukan kode. Tetap prioritas nomor satu, dan tetap kosong.
- **Fitur sisi bank di aplikasi.** Login bank, SLIK, kolektibilitas, jejak audit, ekspor massal. Masih di proposal, belum dibangun.
- **Pemecahan pesanan (uang muka dan pelunasan)** untuk catering dan bakery, diminta Mbak Rani.
- **Pola musiman lebih dari 90 hari** dan opsi harga per musim.
- **Penguatan anti-gaming perputaran persediaan** menjadi mekanisme yang benar-benar mengikat.

## 6. Verdict pasar

> [!success] Ringkasan
> Pada dimensi yang disasar, perubahan v2 sudah tepat: menutup cacat skor yang fatal, menghadirkan alat yang diminta pengguna, dan merapikan tampilan investor. Produk bergerak lebih dekat ke "ready to win" dibanding sebelum perubahan. Belum sampai, karena dua penentu terbesar (bukti eksternal berupa LOI dan fitur sisi bank) masih nol. Arah berikutnya sudah jelas dan tercatat.

## 7. Tambahan: Lensa Investor (A8)

Lensa investor ditambahkan menyusul untuk melengkapi validasi v2 di sisi pemodal. Uji ulang empat lensa di atas berfokus pada UMKM, bank, dan skeptis, sedangkan investor murni (pengguna Investor Dashboard yang menaruh modal) belum tercakup. Persona Pak Rendra (angel dan syndicate lead) diwawancarai terhadap perubahan v2. Transkrip lengkap dan kartu persona: [[Persona A8 - Investor (Pak Rendra) + Wawancara v2]].

| Lensa | Verdict | Inti reaksi | Yang diminta berikutnya |
|---|---|---|---|
| Pak Rendra (investor) | Sebagian | Perbaikan skor menutup cacat akuntansi dasar, bukan sekadar fitur. Penghapusan peta tepat asalkan data lokasi tetap tersedia sebagai kolom atau filter. Simulator berguna bagi UMKM, tetapi membuka celah gaming dari kursi investor. | Bukti track record skor-ke-pelunasan, verifikasi data independen (mutasi rekening, QRIS, agregator), anti-gaming yang mengikat, pemantauan portofolio pasca-pendanaan, data lokasi sebagai kolom atau filter, ekspor atau API. |

> [!note] Satu hal teknis untuk dicek
> Pak Rendra menandai pertanyaan konkret: setelah peta dihapus, apakah data lokasi UMKM masih tersimpan sebagai kolom atau filter, atau ikut hilang bersama widget-nya. Perlu diverifikasi di kode sebelum diklaim beres.

→ Kembali: [[06 - Audit Web + Validasi Multi-Agent (Apa yang Perlu Diperbaiki)]] · Terkait: [[Persona A7 - Bakery (Mbak Rani)]] · [[Persona A8 - Investor (Pak Rendra) + Wawancara v2]] · [[Simulasi Telegram/03 - Before vs After (v2)]]
