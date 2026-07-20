---
title: Metode Validasi Multi-Agent
tags: [retailmind, metode, multi-agent, validasi, protokol, batasan]
status: aktif
updated: 2026-07-20
---

> [!abstract] Tujuan dokumen
> Menjelaskan metode validasi pasar berbasis multi-agent secara lengkap: dasar ilmiahnya, peran panel validator bernama, protokol wawancara empat ronde, cara membaca hasil, dan batasan yang diakui. Dokumen ini adalah rujukan metodologis untuk [[04 - Laporan Validasi Sintetis]] dan untuk bagian metode proof of concept di proposal. Nama brand "RetailMind" bersifat sementara.

## 1. Ringkasan satu paragraf (untuk juri)

RetailMind memvalidasi pasar dengan **panel multi-agent**: enam persona pemilik UMKM F&B bernama, yang di-*grounding* ke data sekunder bersitasi, menjalani wawancara dan mencoba alur produk lewat bot Telegram. Jawaban mereka diawasi dua agent bernama, yaitu **Pak Budi** yang mengaudit tiap klaim terhadap data nyata dan **Mbak Sinta** yang sengaja memancing keberatan. Hasilnya adalah sinyal validasi terarah pada empat aspek (problem-solution fit, kesediaan bayar, friksi onboarding, keberatan), yang secara jujur diposisikan sebagai pra-validasi sebelum wawancara lapangan, bukan pengganti bukti pasar final.

## 2. Dasar ilmiah

Simulasi responden manusia dengan model bahasa memiliki dasar riset yang terus berkembang.

- **Silicon sampling.** Argyle dkk. (2023) menunjukkan bahwa model bahasa yang dikondisikan pada latar sosio-demografis dapat menghasilkan distribusi jawaban yang mendekati kelompok manusia nyata pada studi survei. Artinya persona yang dijangkarkan pada data dapat menjadi proksi terarah, bukan tebakan acak.
- **Generative agents.** Park dkk. (2023) menunjukkan agent berbasis model bahasa dapat menampilkan perilaku yang koheren dan dapat dipercaya ketika diberi memori dan konteks yang konsisten.
- **Synthetic user research.** Praktik industri memakai persona sintetis untuk mempercepat penemuan kebutuhan pada tahap awal, dengan catatan hasilnya divalidasi ke manusia.

> [!warning] Tiga kelemahan yang wajib ditangani
> 1. **Sycophancy.** Agent cenderung mengiyakan dan memuji. Dilawan dengan Agent Skeptis, kewajiban memunculkan keberatan sebelum menyatakan minat, dan penolakan temuan tanpa jejak keberatan.
> 2. **Keragaman rendah.** Jawaban antar persona bisa menyeragam. Dilawan dengan enam persona berbeda sikap dan konteks, plus variasi kondisi (sedang butuh modal, sedang sibuk, pernah kapok).
> 3. **Halusinasi.** Agent mengarang detail. Dilawan dengan grounding ke data vault dan audit Pak Budi yang menandai klaim tak berdasar.

## 3. Panel validator

| Nama | Peran | Tugas | Output |
|---|---|---|---|
| **Moderator** | Peneliti | Menjalankan protokol empat ronde secara netral, menjaga pertanyaan tidak menggiring, merangkum. | Transkrip terstruktur per ronde. |
| **Mbak Sinta** | Agent Skeptis | Memancing keberatan realistis, melawan bias mengiyakan, mengajukan bantahan lapangan (sudah pakai Moka atau GoFood, malas mencatat, takut data dilihat investor, sudah bayar POS). | Daftar keberatan per persona. |
| **Pak Budi** | Validator Riset | Mengaudit tiap klaim persona terhadap data sekunder dan sitasi vault, menandai klaim tak ter-*grounding*, halusinasi, dan jawaban terlalu manis, lalu memberi tingkat keyakinan. | Catatan audit dan tingkat keyakinan per temuan. |

> [!info] Kenapa peran dipisah
> Memisahkan pemancing keberatan (Sinta) dari pengaudit data (Budi) mencegah satu agent memutus sendiri apa yang benar. Moderator menjaga netralitas pertanyaan. Pemisahan ini yang membuat metode tidak sirkular.

## 4. Protokol wawancara empat ronde

Setiap persona melewati empat ronde berurutan. Pak Budi mengaudit tiap ronde. Mbak Sinta menekan pada ronde yang relevan.

### Ronde 1 — Problem discovery
- **Tujuan:** menguji apakah pain muncul spontan.
- **Pemantik:** pertanyaan terbuka tentang cara mengelola keuangan dan pencatatan usaha. **Tidak menyebut produk sama sekali.**
- **Dinilai:** apakah persona sendiri mengangkat kesulitan membuktikan performa ke pemodal, tanpa dipancing.
- **Audit:** Budi mencocokkan keluhan dengan data literasi dan pencatatan ([[04 - Riset Pasar F&B Indonesia]]).

### Ronde 2 — Reaksi solusi
- **Tujuan:** mengukur daya tarik dan pemahaman.
- **Pemantik:** perkenalkan Business Health Score, AI Coach, dan kesiapan investor.
- **Dinilai:** reaksi jujur, bagian yang menarik, bagian yang tidak dipahami.
- **Audit:** Budi menandai antusiasme yang tidak berdasar alasan konkret.

### Ronde 3 — Walkthrough onboarding (konteks chat)
- **Tujuan:** menemukan titik friksi nyata.
- **Pemantik:** bawa persona mendaftar dan mencatat transaksi pertama lewat percakapan bot Telegram (mengetik "jual nasi goreng 15rb" atau mengirim foto struk), bukan form web ([[06 - Analisis Aplikasi & Arah WhatsApp]]).
- **Dinilai:** di titik mana persona ragu, bingung, atau ingin berhenti.
- **Audit:** Budi mencocokkan friksi dengan pola "coba lalu tinggalkan" pada persona kelas bawah.

### Ronde 4 — Willingness to pay dan keberatan
- **Tujuan:** menguji kesediaan bayar dan keberatan tersisa.
- **Pemantik:** tawarkan Pro Rp149.000 per bulan. Mbak Sinta menekan dengan bantahan.
- **Dinilai:** kesediaan bayar, syarat yang membuat mau bayar, keberatan yang tersisa.
- **Aturan wajib:** persona harus memunculkan **minimal dua keberatan konkret** sebelum boleh menyatakan minat. Budi menolak pernyataan minat tanpa jejak keberatan.

## 5. Cara membaca hasil

Setiap temuan diberi tingkat keyakinan oleh Pak Budi.

| Tingkat | Definisi |
|---|---|
| **Tinggi** | Konsisten di beberapa persona dan sejalan dengan data sekunder vault. |
| **Sedang** | Muncul di sebagian persona atau sejalan sebagian dengan data. Perlu konfirmasi lapangan. |
| **Rendah** | Muncul pada satu persona atau bertentangan dengan data. Diperlakukan sebagai hipotesis, bukan temuan. |

Temuan tingkat Tinggi boleh dipakai sebagai sinyal terarah. Temuan Sedang dan Rendah masuk daftar prioritas untuk wawancara lapangan.

## 6. Batasan yang diakui

> [!important] Posisi jujur metode ini
> Ini pra-validasi terarah, bukan bukti pasar. Persona sintetis mencerminkan data sekunder dan asumsi tim, bukan pelanggan nyata. Angka kesediaan bayar bersifat indikatif, bukan komitmen. Metode ini dipakai untuk mempertajam hipotesis dan menyiapkan wawancara lapangan yang lebih efisien. Karena itu [[04 - Laporan Validasi Sintetis]] wajib menutup dengan daftar pertanyaan prioritas untuk validasi manusia, diurutkan dari yang paling tidak pasti.

## 7. Kenapa metode ini valid di mata penilai

- Berjangkar pada data nyata, bukan opini agent.
- Sengaja adversarial lewat Mbak Sinta, sehingga keberatan tidak disembunyikan.
- Audit terpisah lewat Pak Budi, sehingga klaim manis tidak lolos.
- Jujur soal batas, sehingga tidak mengklaim lebih dari yang layak.
- Dapat direproduksi karena kartu persona dan protokol terdokumentasi ([[02 - Kartu Persona Agent]]).

→ Kembali: [[00 - Spec Desain Validasi Multi-Agent]] · Lanjut: [[04 - Laporan Validasi Sintetis]]
