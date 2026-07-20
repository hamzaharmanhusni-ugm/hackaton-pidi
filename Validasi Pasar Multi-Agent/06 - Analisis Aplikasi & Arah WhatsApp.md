---
title: Analisis Aplikasi Live & Arah WhatsApp
tags: [retailmind, analisis, ux, whatsapp, telegram, poc]
status: draft
updated: 2026-07-20
---

> [!abstract] Tujuan
> Analisis penggunaan aplikasi live (`hacketon-financial-freedom.vercel.app`) berdasarkan crawl otomatis 18 halaman (desktop dan mobile) plus telaah layar, lalu menjawab ide "semua lewat WhatsApp" dengan rekomendasi konkret dan framing metode proof of concept untuk proposal. Nama brand "RetailMind" bersifat sementara.

## 1. Ringkasan teknis

Harness `evaluate-site.mjs` menelusuri 18 halaman sebagai user (login demo UMKM dan Investor), desktop dan mobile. **Nol sinyal masalah otomatis**: tidak ada console error, request gagal, gambar rusak, overflow layout, atau teks janggal. Secara teknis aplikasi sudah stabil dan lengkap. Yang perlu ditelaah adalah kecocokan alur dengan persona target, bukan bug.

## 2. Temuan UX per alur (mobile, karena target memakai HP)

| Alur | Temuan | Implikasi persona |
|---|---|---|
| **Register** | Bersih dan singkat: pilih peran, nama, email, password minimal 8 karakter, lalu verifikasi email. | Untuk Mas Aldi ringan. Untuk Bu Siti (gaptek) tetap ada friksi: email, kata sandi, verifikasi adalah tiga rintangan yang di lapangan sering menghentikan pendaftaran. |
| **POS Kasir** | Visual bagus: kartu produk berfoto, harga, stok, tab kategori, tombol tambah. Navigasi bawah Home, Kasir, Kas, Skor, Coach, Menu. | Kuat untuk kedai terkelola. Tetapi butuh produk di-input dulu dan dioperasikan saat ramai. Ini beban persona kasir (Dinda): setiap langkah tambahan saat antre akan dilewati. |
| **Cashbook** | Sangat kaya: saldo, arus kas, hutang/piutang per pihak, filter tanggal/kategori/metode/status, deteksi anomali, empat grafik, insight AI. | **Titik terberat.** Untuk Mas Aldi ini nilai lebih. Untuk Bu Siti ini tembok fitur yang memicu pola "coba lalu tinggalkan". Bukti terkuat bahwa segmen warung butuh lapisan yang jauh lebih ringan. |
| **AI Coach Rinda** | Sudah benar-benar percakapan. Contoh jawaban: dengan skor 72, warung eligible KUR Super Mikro dan KUR Mikro, lengkap plafon dan bunga, plus tawaran "Mau saya bantu buat Proposal Pendanaan?". | Inilah bagian yang paling siap pindah ke WhatsApp. Nilainya besar dan formatnya memang chat. |
| **Health Score** | Visual: gauge 85/100 "Bisnis Sehat", breakdown komponen berbobot, riwayat 90 hari, Investment Readiness, toggle "Tampilkan ke Investor" (kontrol privasi). | Output kaya yang butuh layar. Cocok tetap di web atau PWA. Di chat cukup dorong ringkasannya, bukan seluruh grafik. |
| **Investor Dashboard** | Peta Yogyakarta dengan 51 UMKM berwarna sesuai readiness, statistik agregat, toggle peta/daftar. | Jelas sebuah alat visual padat data. Tidak mungkin dipindah ke chat. Sisi investor tetap web. |

> [!insight] Pola yang muncul
> Aplikasi ini kuat dan lengkap, tetapi bebannya menumpuk di sisi **input dan pembacaan mendalam** untuk persona kelas bawah (warung). Sementara bagian yang paling bernilai dan paling ringan secara format, yaitu **AI Coach**, justru sudah berbentuk percakapan.

## 3. Menjawab ide "semua lewat WhatsApp"

Ide ini kuat, tetapi bukan untuk semua bagian. Yang tepat adalah **model chat-first hibrida**, bukan memindahkan seluruh aplikasi ke WhatsApp.

**Pindah ke chat (WhatsApp, POC via Telegram):**
- **Input transaksi** lewat pesan biasa ("jual nasi goreng 15rb", atau kirim foto struk untuk OCR) atau pesan suara. Ini memangkas friksi terbesar bagi warung dan kasir.
- **AI Coach Rinda** sebagai kontak yang bisa diajak ngobrol kapan saja. Sudah siap secara teknis karena logikanya memang percakapan berbasis konteks bisnis.
- **Notifikasi proaktif**: "Pak, laba minggu ini turun 11%, mau saya bantu lihat penyebabnya?" Ini yang membangun kebiasaan harian dan menahan pengguna tetap aktif.

**Tetap di web atau PWA:**
- **Health Score** penuh (gauge, grafik, breakdown), karena butuh layar.
- **Seluruh sisi investor** (dashboard, peta, screening, portofolio), karena padat data dan visual.

> [!important] Kesimpulan arah produk
> WhatsApp menjadi **pintu masuk dan mesin kebiasaan** sisi UMKM (input plus coach plus notifikasi), sementara web menjadi **ruang baca mendalam** dan seluruh sisi investor. Ini menyerang langsung masalah adopsi nomor satu, yaitu aplikasi ditinggalkan karena rumit, tanpa mengorbankan kekuatan visual yang memang dibutuhkan investor.

## 4. Kenapa Telegram dulu untuk POC, WhatsApp untuk produksi

| Aspek | Telegram (POC) | WhatsApp (produksi) |
|---|---|---|
| Akses API | Bot API gratis, instan, tanpa verifikasi | Cloud API, perlu verifikasi bisnis Meta |
| Aturan pesan | Bebas, cocok untuk simulasi agent | Ada template dan jendela sesi 24 jam, ada biaya per percakapan |
| Tempat pengguna nyata | Sedikit di kalangan UMKM | Mayoritas UMKM ada di sini |
| Peran | Membuktikan alur dan mengukur friksi secara murah | Kanal produksi tempat pengguna sebenarnya berada |

Telegram membuktikan alur percakapan dan menjalankan simulasi persona dengan biaya nol dan tanpa hambatan administratif. Setelah alur terbukti, alur yang sama dipindah ke WhatsApp sebagai kanal produksi. Inilah alasan metodologis yang bersih untuk juri.

## 5. Framing metode proof of concept untuk proposal

Susun di proposal sebagai satu alur yang jelas dan jujur:

1. **Prototype nyata sudah berjalan** (enam modul, dapat didemonstrasikan live).
2. **Validasi pasar sintetis multi-agent** menggantikan wawancara lapangan yang belum sempat: persona agent bernama, di-*grounding* ke data sekunder bersitasi, menjalani alur produk lewat bot Telegram, diaudit Agent Validator Riset (Pak Budi) dan ditekan Agent Skeptis (Mbak Sinta).
3. **Empat aspek diukur**: problem-solution fit, willingness to pay, friksi onboarding, keberatan.
4. **Posisi jujur**: ini pra-validasi terarah yang mempertajam hipotesis dan menyiapkan wawancara lapangan yang lebih efisien, bukan bukti pasar final. Setiap temuan punya tingkat keyakinan dan daftar pertanyaan untuk validasi manusia.

Framing ini membuat metode terbaca valid karena tidak mengklaim lebih dari yang layak, memakai data nyata sebagai jangkar, dan sengaja memasang mekanisme adversarial untuk melawan bias mengiyakan.

## 6. Dampak ke spec dan rencana

- [[00 - Spec Desain Validasi Multi-Agent]]: tambah model chat-first hibrida sebagai konteks produk.
- Blueprint Telegram (Task 6 di [[00b - Rencana Implementasi Fase A]]): perluas dari sekadar pendaftaran menjadi loop UMKM penuh (input plus coach plus notifikasi), dengan Health Score dan sisi investor tetap di web.
- Ronde 3 protokol (walkthrough onboarding): jalankan dalam konteks chat, bukan form web, agar friksi yang diukur relevan dengan arah produk.

→ Kembali: [[00 - Spec Desain Validasi Multi-Agent]]
