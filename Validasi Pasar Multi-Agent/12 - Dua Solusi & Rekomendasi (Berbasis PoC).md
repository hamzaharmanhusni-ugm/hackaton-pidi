---
title: Dua Solusi & Rekomendasi (Berbasis PoC)
tags: [retailmind, solusi, rekomendasi, poc, keputusan, digdaya, pidi]
status: aktif
updated: 2026-07-21
---

# Dua Solusi & Rekomendasi (Berbasis PoC)

> [!abstract] Tujuan dokumen
> Menjabarkan dua solusi yang dibandingkan tim, **(A) Web murni** dan **(B) Chat-first hibrida**, lalu memberi satu rekomendasi yang tidak lagi bertumpu pada dugaan, melainkan pada bukti proof of concept yang sudah dijalankan ([[Simulasi Telegram/02 - Laporan PoC Telegram|Laporan PoC Telegram]], [[Simulasi Telegram/00-metrik-simulasi|Metrik Uji Bot]]). Melengkapi [[08 - Solusi Gabungan Hibrida]] yang ditulis sebelum PoC ada. Landasan validasi: [[04 - Laporan Validasi Sintetis]] dan [[09 - Kritik Proposal (Proof-Driven)]]. Nama brand "RetailMind" bersifat sementara.

---

## 1. Mengapa dokumen ini ada

Kritik proposal ([[09 - Kritik Proposal (Proof-Driven)]]) menempatkan "kanal salah" sebagai satu dari enam kelemahan utama: proposal berdiri di atas web dan PWA, sementara validasi menuntut chat-first untuk segmen bawah. Sebelum arah itu dinaikkan ke proposal, tim perlu **membuktikannya**, bukan hanya berargumen. Bot Telegram dibangun persis untuk itu. Dokumen ini membandingkan dua arah dengan bukti PoC di tangan, lalu memutuskan.

---

## 2. Solusi A: Web murni (kondisi proposal sekarang)

Semua fungsi berjalan di aplikasi web (Next.js + Supabase): UMKM mendaftar lewat email dan kata sandi, mengisi transaksi di form POS dan Cashbook, membaca Health Score dan grafik, sementara investor memakai dashboard yang sama arsitekturnya. WhatsApp hanya disebut sebagai kanal komunitas, bukan kanal produk.

| Aspek | Penilaian |
|---|---|
| **Kekuatan** | Satu kanal, satu basis kode. Cocok untuk output kaya: grafik skor, laporan siap-investor, screening investor. Sudah jadi (working prototype 6 modul). |
| **Kelemahan (dari validasi)** | Friksi masuk tinggi untuk persona gaptek: email, kata sandi, verifikasi, form. Persona warung (Bu Siti) memicu pola "coba lalu tinggalkan". Justru segmen inti klaim 77% pencatatan manual yang paling terhambat. |
| **Risiko** | Adopsi sisi UMKM lemah di segmen bawah. Tanpa aliran data harian yang konsisten, scoring engine kekurangan bahan, dan seluruh nilai produk ikut runtuh. |

---

## 3. Solusi B: Chat-first hibrida

Satu produk, satu backend, **dua pintu masuk** (rincian arsitektur di [[08 - Solusi Gabungan Hibrida]]):

- **Chat (WhatsApp untuk produksi, Telegram untuk PoC)** menjadi pintu masuk dan mesin kebiasaan sisi UMKM: daftar cepat, catat transaksi lewat pesan biasa, tanya AI Coach, terima notifikasi.
- **Web** tetap menjadi ruang baca mendalam dan satu-satunya kanal investor: skor penuh, grafik, laporan, screening, portofolio.

| Aspek | Penilaian |
|---|---|
| **Kekuatan** | Pintu masuk lewat aplikasi yang sudah dipakai sehari-hari, tanpa aplikasi baru dan tanpa form berat. Menurunkan friksi adopsi persis di segmen yang paling sulit. |
| **Kelemahan** | Chat kalah cepat dari POS saat ramai (temuan Dinda, kasir). Input ringan berisiko menurunkan kualitas data. Butuh dua permukaan (chat dan web) yang harus dijaga konsisten. |
| **Risiko** | Kualitas data dan biaya provider LLM. Keduanya muncul nyata di PoC (lihat bagian 5). |

---

## 4. Bukti PoC: apa yang benar-benar dijalankan

Bukan simulasi di atas kertas. Enam persona ragam role (owner dan kasir) menjalankan logika bot nyata dari onboarding sampai minta skor. Metrik lengkap di [[Simulasi Telegram/00-metrik-simulasi]].

| Persona | Role | Onboarding | Transaksi tercatat | Skor PoC |
|---|---|---|---|---|
| A1 Bu Siti | Owner (warung) | Berhasil | 4 | 27 |
| A2 Mas Aldi | Owner (kafe) | Berhasil | 4 | 0 |
| A3 Koh Aan | Owner (restoran menengah) | Berhasil | 3 | 0 |
| A4 Bu Endah | Owner (catering) | Berhasil | 4 | 89 |
| A5 Dinda | Kasir | Berhasil | 4 | 94 |
| A6 Uda Fauzi | Owner (restoran kecil) | Berhasil | 4 | 94 |

> [!success] Tiga hal yang dibuktikan PoC
> 1. **Chat-first layak secara teknis untuk semua role.** Keenam persona, termasuk warung gaptek (Bu Siti) dan kasir yang mengetik singkat (Dinda), menuntaskan onboarding dan mencatat transaksi hanya lewat percakapan. Ini bukti langsung bahwa hipotesis "chat menurunkan friksi adopsi" berjalan, bukan sekadar diharapkan.
> 2. **Input natural yang berantakan tetap tertangani.** Bu Siti mengetik tiga transaksi dalam satu pesan; bot memecahnya jadi tiga entri dengan tipe benar. Persona mengetik apa adanya, dan alur bertahan.
> 3. **Simulasi menemukan bug sebelum pengguna nyata.** Perintah tidak terbaca karena tanda baca, dan coach yang menjanjikan kemitraan pembiayaan yang belum ada. Keduanya sudah diperbaiki. Inilah nilai PoC: menutup lubang sebelum juri atau pengguna menemukannya.

---

## 5. Dua risiko Solusi B muncul nyata di PoC (dan itu bagus)

PoC bukan hanya membuktikan yang berhasil, tetapi juga menyingkap dua batas yang harus dijawab. Menemukannya sekarang jauh lebih murah daripada di lapangan.

> [!warning] Risiko 1: skor terlalu goyah pada potret satu hari
> Mas Aldi (kafe) membeli biji kopi Rp500.000 dalam satu hari, lalu skornya jatuh ke 0. Koh Aan (restoran) sama: belanja bahan dan gaji harian besar menekan skor ke 0. Pengeluaran modal yang wajar dan berkala terbaca sebagai bisnis kritis.
>
> **Arti untuk keputusan:** persis kekhawatiran yang ditandai kritik, bahwa input ringan bisa menghasilkan skor yang tidak kredibel. Skor harus dihitung atas jendela bergerak (misalnya rata-rata 30 hari), bukan potret satu hari, dan pembelian stok dipisahkan dari beban operasional. Chat-first tidak boleh mengorbankan kualitas skor. PoC memberi angka konkret untuk aturan ini.

> [!warning] Risiko 2: biaya provider LLM pada beban otomatis
> Free tier Gemini `gemini-2.5-flash` dibatasi 5 request per menit. Simulasi otomatis enam persona menembusnya seketika (429), sehingga coach jatuh ke jawaban aman generik. Untuk satu manusia yang mengobrol santai, free tier cukup; untuk banyak pengguna nyata, butuh tier berbayar atau beberapa provider aktif.
>
> **Arti untuk keputusan:** biaya AI adalah komponen nyata di unit economics, bukan nol. Angka ini masuk ke [[10 - Paket Bisnis (USP, ROI, Model)]].

---

## 6. Perbandingan berdampingan

| Kriteria | A: Web murni | B: Chat-first hibrida |
|---|---|---|
| Friksi adopsi UMKM bawah | Tinggi (form, kata sandi) | **Rendah, terbukti di PoC** |
| Kecepatan input saat ramai | Sedang (POS) | POS untuk volume, chat menambal |
| Kualitas data | Bergantung disiplin isi form | Perlu guardrail jendela skor (temuan PoC) |
| Sisi investor | Web | Tetap di web, tidak berubah |
| Kesiapan teknis | Sudah jalan | **Terbukti jalan lewat PoC** |
| Biaya AI | Terkontrol per sesi | Perlu tier berbayar untuk skala |
| Menjawab temuan validasi | Tidak menjawab friksi adopsi | Menjawab langsung |

---

## 7. Rekomendasi

> [!important] Pilih Solusi B: chat-first hibrida, dengan guardrail dari PoC
> 1. **Jadikan chat pintu masuk sisi UMKM** (Telegram untuk PoC, WhatsApp untuk produksi). PoC membuktikan keenam role bisa masuk dan mencatat lewat chat.
> 2. **Pertahankan web** untuk skor penuh, laporan, dan seluruh sisi investor. Web tidak salah, hanya salah tempat sebagai pintu masuk UMKM.
> 3. **Hitung skor atas jendela bergerak, bukan satu hari,** dan pisahkan belanja stok dari beban operasional. Ini jawaban langsung atas skor 0 yang muncul di PoC untuk Mas Aldi dan Koh Aan.
> 4. **Anggarkan biaya LLM tier berbayar** untuk beban banyak pengguna. PoC menunjukkan free tier tidak cukup untuk beban otomatis.
> 5. **Kejar satu kemitraan pembiayaan sebagai prioritas tertinggi.** Ini tetap kunci monetisasi menurut validasi, dan tidak berubah oleh pilihan kanal. Kanal menyelesaikan adopsi; kemitraan menyelesaikan kesediaan bayar.

Solusi B menang bukan karena lebih baru, tetapi karena menjawab kelemahan yang ditemukan validasi sekaligus terbukti berjalan lewat PoC. Yang tidak diselesaikan kanal mana pun adalah kesediaan bayar, dan itu tetap bergantung pada kemitraan pembiayaan.

---

## 8. Kaitan ke perbaikan proposal

Rekomendasi ini menjadi bahan Fase 5: mengangkat chat-first hibrida ke dalam proposal sebagai strategi adopsi utama (bukan catatan kaki), menambahkan guardrail kualitas skor, dan memasukkan biaya AI ke unit economics. Rincian tiap perbaikan di [[13 - Changelog Perbaikan Proposal]].

→ Sumber: [[Simulasi Telegram/02 - Laporan PoC Telegram]] · [[04 - Laporan Validasi Sintetis]] · [[08 - Solusi Gabungan Hibrida]] · [[09 - Kritik Proposal (Proof-Driven)]] · Lanjut: [[13 - Changelog Perbaikan Proposal]]
