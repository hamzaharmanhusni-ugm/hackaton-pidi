---
title: Refleksi Design Thinking & Demo Pitch (Isian)
tags: [retailmind, digdaya, pidi, modul, design-thinking, demo, video-pitch]
status: aktif
updated: 2026-07-21
---

# Refleksi Design Thinking & Demo Pitch (Isian)

> [!abstract] Konteks
> Jawaban dua lembar refleksi modul: **Refleksikan Pengalaman Design Thinking** (4 pertanyaan) dan **Demo Storytelling & Video Pitch Production**. Landasan: [[01 - Design Thinking]], [[04a - Persona Customer & User]], [[Naskah Pitch 60 Detik]], [[Script Video Pitch]].

## A. Refleksi Design Thinking

### 1. Persona yang kami buat

Kami menyusun lima persona konkret yang menjadi wajah manusia dari data, bukan sekadar demografi. Yang paling merepresentasikan solusi: **Mas Aldi (29), pemilik kedai kopi bertumbuh di Sleman**, omzet sekitar Rp90 juta per bulan, sudah memakai POS, QRIS, GoFood, dan GrabFood, ingin buka outlet kedua. Persona pendamping: **Bu Siti (47), pemilik warung tradisional di Bantul**, mewakili segmen bawah yang lebih sulit teraktivasi. Di sisi pemodal ada Pak Reza (investor ritel) dan Ibu Wulan (analis lembaga). Detail: [[04a - Persona Customer & User]].

### 2. Pain point utama yang ditemukan

Masalah sebenarnya bukan "UMKM belum digital". Mayoritas target justru sudah memakai QRIS dan pencatatan digital. Pain point aslinya adalah **data readiness**: data ada tetapi terfragmentasi, tidak konsisten, dan tidak bisa berbicara sebagai bukti performa ke pemodal. Diringkas dalam satu kalimat yang menggerakkan seluruh produk: **"Data ada, kepercayaan tidak ada."**

### 3. Insight terpenting dari proses empati

Yang paling mengubah cara pandang: hampir semua UMKM sudah memakai aplikasi kasir, tetapi tidak satu pun bisa menjawab pasti laba bersih bulan lalu. Pain-nya berlapis, bukan hanya fungsional. Ada rasa malu dan cemas saat diminta laporan keuangan, dan ada kebutuhan identitas untuk dianggap pengusaha serius. Insight kedua muncul di tahap Test: input web terlalu berat bagi persona warung, sehingga muncul pola "coba lalu tinggalkan". Ini memaksa kami menggeser arah ke chat-first.

### 4. Apa yang akan kami terapkan di hackathon ini

- **Mendesain dari pain, bukan dari fitur.** Skor dirancang agar bisa dibaca pemodal, karena itu kebutuhan yang terangkat, bukan karena teknologinya menarik.
- **Menurunkan friksi adopsi lewat chat.** Temuan empati soal "coba lalu tinggalkan" langsung menjadi keputusan kanal chat-first.
- **Menguji sebelum mengklaim.** Kami memakai validasi multi-agent dan PoC bot untuk menemukan bug dan batas nyata sebelum pengguna asli menemukannya.
- **Menjaga kejujuran angka.** Setiap klaim dampak disebut proyeksi sampai divalidasi pilot. Cara meyakinkan juri adalah menurunkan klaim sampai persis sekuat bukti.

## B. Demo Storytelling & Video Pitch Production

### 1. Alur cerita video

| Elemen | Isi |
|---|---|
| Siapa tokohnya | Mas Aldi, pemilik kedai kopi yang ingin buka outlet kedua |
| Masalah yang dialami | Datanya tersebar di banyak kanal, tidak bisa membuktikan performa ke bank, pengajuan modal ditolak bukan karena bisnisnya lemah |
| Apa yang diharapkan | Satu skor yang bisa ditunjukkan ke bank, akses modal yang lebih cepat |
| Angka / metrik kunci | Business Health Score 0-100, hemat asesmen ~Rp8 juta per UMKM, screening dari mingguan jadi menit |

### 2. Konten kunci

> [!quote] Kalimat pembuka (langsung ke masalah)
> "69,5% UMKM di Indonesia belum bisa mengakses kredit. Bukan karena bisnisnya buruk, melainkan karena datanya tidak bisa dipercaya bank."

> [!tip] Apa yang membuat solusi ini berbeda
> Kompetitor berhenti di pencatatan dan laporan. Kami mengubah data harian yang sama menjadi skor yang dirancang agar dapat dibaca bank, lewat kanal chat yang sudah dipakai UMKM sehari-hari. Satu produk menjembatani dua sisi: UMKM dapat modal, bank dapat nasabah terskrining.

### 3. Rencana demo & timing

Total sekitar 2 menit, selaras [[Naskah Pitch 60 Detik]] dan [[Script Video Pitch]].

| Bagian | Alokasi | Isi |
|---|---|---|
| Masalah | 20 detik | Data ada, kepercayaan tidak ada. Angka unbankable. |
| Solusi | 25 detik | Dua skor terstandar, chat-first, menjembatani UMKM dan bank |
| Demo | 60 detik | Catat transaksi lewat chat, skor muncul, dashboard sisi pemodal |
| ROI & ajakan | 20 detik | Hemat asesmen, pipeline nasabah bank, ajakan kemitraan pilot |

### 4. Review kesiapan tim

- [ ] Alur cerita sudah jelas dan runut
- [ ] Demo bisa dijalankan tanpa error (uji live, lihat bagian C)
- [ ] Data atau user dummy sudah siap (akun demo + data F&B Yogyakarta ter-seed)
- [ ] Durasi sesuai batas panitia
- [ ] Semua yang terlibat sudah diarahkan
- [ ] Angka kunci dan metrik sudah ada
- [ ] Backup dan audio rekaman oke

## C. Bukti demo aplikasi (hasil uji live)

Hasil uji Puppeteer atas aplikasi live `hacketon-financial-freedom.vercel.app`:

> [!success] Yang terverifikasi jalan
> - **Landing page render tanpa error.** Judul "Bisnis Anda layak dapat investor. Buktikan dengan data." Brand masih tampil "RetailMind AI · Beta" (rename belum diterapkan).
> - **Jalur demo publik tersedia.** Tombol "Coba Demo UMKM" dan "Coba Demo Investor" mengarah ke `/login?demo=umkm` dan `/login?demo=investor`. Halaman login demo tampil benar dengan kredensial terisi otomatis (`umkm@demo.com`, kata sandi demo terisi). Jadi juri bisa mencoba tanpa mendaftar.
> - **Peta fitur (dari kode, sumber kebenaran).** Sisi UMKM: dashboard, POS, Cashbook (hutang/piutang, ekspor PDF, AI insight), Products (+import sheet), Health Score, AI Coach Rinda, Programs, Settings, Proposal PDF 1-klik. Sisi pemodal: dashboard, daftar 50+ UMKM + peta, detail UMKM, filter, interests, portfolio, deal flow, 8 program pendanaan.

> [!warning] Temuan konsistensi (untuk diperbaiki di proposal)
> Data live yang ter-seed adalah **Warung Bu Siti + UMKM F&B Yogyakarta** (Kopi Senja, Bakmi Jawa, dan lainnya, termasuk satu bakery), bukan "Bu Sari / Mas Budi / Pak Hendra" yang ditulis proposal. Samakan proposal ke data live. Kaitan: [[16 - Perbaikan Proposal]] poin 1.

> [!note] Batas pengujian
> Menangkap layar sisi dalam (dashboard, skor, investor) memerlukan login akun demo. Untuk uji ulang persona secara otomatis (before vs after), jalur yang dipakai adalah skrip simulasi bot Telegram dan unit test skor, bukan mengetik kata sandi di form. Uji UI mendalam dilakukan saat sesi implementasi v2.

→ Lanjut: [[05 - Persona Sisi Pemodal - Bank & Investor (Isian)]] · Kembali: [[00 - Analisis Modul & Rekomendasi]]
