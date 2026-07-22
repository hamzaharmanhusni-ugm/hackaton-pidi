---
title: Konsep Video Pitch (Tahap 3, 3 menit)
aliases: [Konsep Video Elevator Pitch (Tahap 3)]
tags: [retailmind, video, pitch, tahap-3, produksi, editing, ai, rubrik]
status: aktif
updated: 2026-07-22
---

# Konsep Video Pitch (Tahap 3, 3 menit)

> [!abstract] Tujuan dokumen
> Panduan produksi video untuk Submission Tahap 3, mengikuti spesifikasi resmi di [[Panduan Tahap 3 (Ekstrak Resmi)]]. Video berbobot 35% dari penilaian. Durasi maksimal 180 detik, terdiri dari One-Minute Pitch (0 sampai 60 detik) dan Two-Minute Demo (60 sampai 180 detik). Setiap blok waktu dipetakan ke konten resmi agar tiap detik menyasar poin penilaian. Angka dibingkai jujur sesuai [[Sumber & Asumsi Angka]].

## 1. Spesifikasi wajib

| Item | Ketentuan resmi |
|---|---|
| Durasi | Maksimal 180 detik. Opening logo, bumper, dan credit ikut dihitung |
| Resolusi | Minimal 1920x1080 (Full HD 1080p), jangan di bawah 720p |
| Rasio | 16:9 horizontal. Vertikal atau persegi tidak disarankan |
| Audio | Narasi jelas, musik tidak menutupi suara, volume konsisten. Bahasa Indonesia atau Inggris |
| Subtitle | Sangat disarankan, sesuai narasi, terbaca jelas |
| Publikasi | Wajib diunggah di YouTube yang terbuka untuk publik, link bisa dibuka tanpa minta akses |
| Nada | Kredibel dan jujur. Audiens juri berlatar Bank Indonesia dan OJK |

## 2. Struktur: 1 menit Pitch + 2 menit Demo

| Bagian | Waktu | Fungsi | Kriteria yang disasar |
|---|---|---|---|
| One-Minute Pitch | 0-60 dtk | Elevator pitch: tarik perhatian, sampaikan inti inovasi | Use Case Clarity, Business Plan & ROI |
| Two-Minute Demo | 60-180 dtk | Bukti audio-visual solusi bekerja, kedalaman teknis, validasi | Algorithm Quality & UX, Complexity, Implementation Feasibility |

## 3. One-Minute Pitch (0 sampai 60 detik)

Struktur blok waktu mengikuti rekomendasi resmi. Target sekitar 150 kata narasi.

### 0-5 detik: Nama tim, judul solusi, hook
**VISUAL:** Logo RetailMind AI, lalu close-up tangan pemilik warung menghitung uang. Teks di layar: "Berapa laba bulan lalu?"
**Narasi:** "Financial Freedom Tim mempersembahkan RetailMind AI. Coba tanya pemilik warung ini: berapa laba bersih bulan lalu?"

### 5-15 detik: Pengguna utama, pain point, dampak
**VISUAL:** Potongan wajah beberapa pemilik UMKM (ilustrasi atau footage berizin), lalu grafik data berantakan.
**Narasi:** "Kami menanyakannya ke 15 UMKM kuliner di Yogyakarta. Hampir semua sudah memakai aplikasi kasir, tetapi tidak satu pun bisa menjawab pasti. Datanya ada, tetapi tidak bisa dipercaya pemodal, dan UMKM yang layak tetap gagal mendapat modal."

### 15-35 detik: Use case utama + cuplikan demo
**VISUAL:** Cuplikan cepat aplikasi: input kasir, lalu skor muncul, lalu saran AI Coach.
**Narasi:** "RetailMind mengubah transaksi harian itu menjadi Business Health Score nol sampai seratus yang bisa dipercaya pemodal. Warung Bu Siti mencatat lewat kasir, sistem menghitung skornya, dan AI Coach memberi langkah perbaikan dalam bahasa Indonesia."

### 35-45 detik: High-level logic, data, teknologi, feasibility
**VISUAL:** Diagram ringkas enam komponen skor dan alur data.
**Narasi:** "Skor dihitung dari enam komponen keuangan atas jendela bergerak. Belanja stok dihitung sebagai aset, jadi menyetok bahan tidak menjatuhkan skor. Dibangun di Next.js dan Supabase, prototipe enam modul sudah berjalan."

### 45-55 detik: Nilai utama, dampak, ROI, pihak yang mengadopsi
**VISUAL:** Split screen sisi UMKM dan sisi pemodal.
**Narasi:** "Bagi pemodal, penyaringan yang biasanya berminggu-minggu menjadi hitungan menit. Bagi UMKM, akses modal terbuka. Penggunanya: investor ritel, koperasi, BPR, dan fintech."

### 55-60 detik: Status, kesiapan, next milestone, collaboration ask
**VISUAL:** Teks status "Prototipe live, 19 unit test lulus", lalu logo penutup.
**Narasi:** "Prototipe sudah live dan teruji 19 unit test. Berikutnya: pilot 20 sampai 30 UMKM. Bantu kami terhubung ke satu mitra pembiayaan."

## 4. Two-Minute Demo (60 sampai 180 detik)

Waktu di bawah ini relatif dari awal bagian demo (0 sampai 120 detik). Inti nilai video ada di sini, jadi jaga alurnya mengalir tanpa loading lama.

### 0-10 detik: Pengantar deep dive
**VISUAL:** Layar login aplikasi dengan dua akun demo.
**Narasi:** "Mari lihat cara kerjanya dari dua sisi: pemilik UMKM dan pemodal."

### 10-60 detik: Bukti utama inovasi (prototype walkthrough)
**VISUAL:** Screen recording sisi UMKM. Kursor mengikuti narasi: catat transaksi di Smart POS dan Cashbook, buka Health Score (Warung Bu Siti, skor sehat), rincian enam komponen, saran AI Coach, lalu panel Simulasi Belanja.
**Narasi:** "Di sisi UMKM, Bu Siti mencatat penjualan lewat Smart POS dan Cashbook. Sistem membersihkan datanya, lalu menghitung skor dari enam komponen. Perhatikan: belanja stok dihitung sebagai aset, jadi menyetok tidak menjatuhkan skor. Sebelum belanja, pemilik bisa mengecek dampaknya lewat Simulasi Belanja."

### 60-90 detik: Cara kerja dan kedalaman solusi
**VISUAL:** Beralih ke diagram pipeline dan Investor Dashboard.
**Narasi:** "Di balik layar, data mengalir dari input, dibersihkan, biaya diklasifikasikan secara akuntansi, lalu masuk ke Scoring Engine dengan guardrail kelengkapan data. Skor bukan vonis: ia penyaringan awal, pemodal tetap yang memutuskan. Logika skor tersedia lewat API, siap diintegrasikan ke sistem BPR, koperasi, dan fintech. Di sisi pemodal, dashboard menampilkan daftar UMKM, skor, dan Investment Readiness, lengkap dengan filter lokasi untuk menyebar risiko."

### 90-110 detik: Bukti validasi atau hasil awal
**VISUAL:** Tabel before-after skor per persona, badge "19 unit test lulus", catatan PoC bot.
**Narasi:** "Perbaikan model diuji, bukan diklaim. Sebelum diperbaiki, UMKM musiman terbaca rugi dan skornya jatuh. Sesudah diperbaiki, skornya wajar, dan seluruh perubahan lolos 19 unit test. Kami juga menguji onboarding lewat bot chat pada enam persona pemilik dan kasir."
**Teks di layar:** "Data demo adalah data contoh untuk peragaan."

### 110-120 detik: Status dan batas kesiapan (jujur)
**VISUAL:** Kolom "Sudah berfungsi" dan "Sedang dikembangkan", lalu logo dan tagline penutup.
**Narasi:** "Jujur soal posisi kami: enam modul, skor, dan simulator sudah berfungsi. OCR nota, verifikasi data independen, dan fitur sisi bank sedang dikembangkan. Milestone berikutnya adalah pilot lapangan. RetailMind AI. Setiap transaksi membangun kepercayaan."

> [!warning] Kejujuran angka dan bukti
> Klaim "menit" dan "hemat biaya" adalah proyeksi, beri label proyeksi di layar. Sebut lembaga untuk angka resmi. Jangan menampilkan mitra atau pengguna nyata yang belum ada. Tegaskan data demo adalah data contoh. Rekam demo setelah data seluruh toko diperbaiki agar tidak ada toko yang tampak rugi saat direkam.

## 5. Pembagian tugas tim

| Peran | Penanggung jawab | Tugas |
|---|---|---|
| Presenter 1 (bisnis) | Hamzah atau Gregorius | Hook, nilai, ask, sisi investor |
| Presenter 2 (produk) | Dzaky | Solusi, demo sisi UMKM |
| Rekaman layar demo | Dzaky | Screen recording aplikasi live dengan akun demo |
| Editing | Aditya | Potong, caption, motion graphic, musik |
| QC dan unggah | Hamzah | Cek kejujuran klaim, durasi maksimal 180 detik, unggah publik |

## 6. Rencana editing

- **Tool:** CapCut (auto-caption Indonesia) atau DaVinci Resolve (gratis, lebih rapi).
- **Alur:** susun voiceover dan rekaman sebagai tulang, baru tempel B-roll dan screen recording.
- **Caption:** banyak juri menonton tanpa suara. Auto-caption lalu koreksi manual, terbaca jelas, tidak terlalu panjang per frame.
- **Lower-third sumber data:** saat angka disebut, tampilkan sumbernya. Beri label "proyeksi" pada angka dampak.
- **Durasi:** jaga total di bawah 180 detik termasuk logo dan credit. Tempo sekitar 150 kata per menit.
- **Musik:** instrumental ringan bebas royalti, tidak menutup suara, volume konsisten antarbagian.

## 7. Bagian yang bisa dibantu AI

> [!tip] AI untuk produksi, bukan untuk memalsukan bukti
> AI boleh mempercepat pengerjaan (suara, subtitle, ilustrasi, musik). AI tidak boleh membuat footage seolah pengguna atau mitra nyata, atau mengarang angka.

| Bagian | Bisa pakai AI | Catatan |
|---|---|---|
| Perapian script | Ya | Poles kalimat, verifikasi tiap angka ke sumber |
| Voiceover | Ya, opsional | Suara asli tim sering lebih otentik. AI VO sebagai cadangan |
| Subtitle dan terjemahan | Ya | Auto-transcribe lalu koreksi, bisa tambah subtitle Inggris |
| B-roll ilustratif dan motion graphic | Ya, hati-hati | Hanya untuk ilustrasi konsep, jelas bukan dokumentasi nyata |
| Musik latar dan thumbnail | Ya | Bebas royalti, konsisten dengan brand |
| Demo aplikasi | Tidak | Harus rekaman layar aplikasi live yang sebenarnya. Ini bukti, bukan ilustrasi |

## 8. Timeline produksi (22 sampai 26 Juli)

- **22 Juli:** kunci script dan storyboard, siapkan akun demo dan skenario rekam layar.
- **23 Juli:** rekam voiceover dan presenter, rekam screen recording demo (bagian paling panjang).
- **24 Juli:** editing kasar (susun narasi, tempel visual, caption).
- **25 Juli:** finishing (lower-third sumber, musik, koreksi caption), review kejujuran klaim dan durasi.
- **26 Juli:** unggah publik, tempel link ke form, sisakan waktu buffer.

## 9. Do dan Don't (dari panduan resmi)

- **Do:** format sesuai (screen recording, voice-over, walkthrough, motion graphic), tunjukkan use case jelas, pakai data yang dapat dipertanggungjawabkan, jelaskan fungsi teknologi secara sederhana, lindungi data sensitif, pakai aset milik sendiri atau berizin, sampaikan kondisi jujur (yang berfungsi dan yang masih dikembangkan).
- **Don't:** slideshow tanpa narasi, klaim tanpa bukti, sebut AI sebagai jargon tanpa fungsi, tampilkan hasil pihak lain seolah milik tim, data atau angka tak terverifikasi, informasi sensitif tanpa izin, melanggar hak cipta, melebih-lebihkan status atau dampak.

→ Spesifikasi lengkap: [[Panduan Tahap 3 (Ekstrak Resmi)]] · Naskah ringkas: [[Naskah Pitch 60 Detik]] · Kembali: [[00 - Beranda (MOC)]]
