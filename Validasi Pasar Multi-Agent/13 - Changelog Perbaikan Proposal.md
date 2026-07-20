---
title: Changelog Perbaikan Proposal (v2 ke v3)
tags: [retailmind, changelog, proposal, perbaikan, digdaya, pidi]
status: aktif
updated: 2026-07-21
---

# Changelog Perbaikan Proposal (v2 ke v3)

> [!abstract] Tujuan dokumen
> Menjelaskan setiap perbaikan dari `PROPOSAL_DIGDAYA_2026_v2.md` ke `PROPOSAL_DIGDAYA_2026_v3.md`, lengkap dengan alasan dan bukti pendukung. Setiap perubahan menutup satu kelemahan yang ditemukan [[09 - Kritik Proposal (Proof-Driven)]] dan dilandasi [[04 - Laporan Validasi Sintetis]] serta proof of concept ([[Simulasi Telegram/02 - Laporan PoC Telegram]]). Ini memenuhi permintaan "buktikan dengan proof of concept lalu perbaiki, dan jelaskan apa perbaikannya".

---

## 1. Prinsip perbaikan

Satu kalimat yang memandu seluruh revisi: **turunkan klaim sampai persis sekuat buktinya, lalu tunjukkan tim tahu langkah berikutnya.** Cara memenangkan juri OJK dan BPR bukan menaikkan klaim, melainkan menyajikan klaim yang tepat kadar. Proposal yang jujur soal batasnya justru terbaca lebih matang.

---

## 2. Tabel ringkas perubahan

| No | Bagian v2 | Perubahan di v3 | Kelemahan yang ditutup |
|---|---|---|---|
| 1 | Nama brand | Ditambah catatan jujur bahwa nama sementara dan sedang diganti | Kritik 2.6, nama sudah dipakai pihak lain |
| 2 | Kanal (web/PWA) | Chat-first hibrida diangkat jadi strategi adopsi utama (Bagian 8.2) | Kritik 2.7, kanal salah |
| 3 | Monetisasi | Konversi Free ke Pro jadi hipotesis, ditautkan ke milestone kemitraan | Kritik 2.1, klaim monetisasi tanpa fondasi |
| 4 | Unit economics | LTV jadi rentang skenario 3/6/12 bulan, retensi bulan ke-2 jadi metrik kunci | Kritik 2.4, asumsi retensi 12 bulan |
| 5 | Harga | Ditambah opsi musiman dan tahunan | Kritik 2.2, harga bulanan salah bentuk untuk pola musiman |
| 6 | Positioning | "Satu-satunya platform" diganti klaim kombinasi dan fokus segmen | Kritik 2.3, klaim absolut rapuh |
| 7 | Segmen | Bakery dihapus dari seluruh dokumen | Kritik 2.5, inkonsistensi segmen |
| 8 | Riset 15 UMKM | Dipisah jujur: riset empati vs pra-validasi sintetis | Kritik 2.8, kejujuran metode |
| 9 | Skor | Guardrail jendela bergerak ditambahkan | Temuan PoC, skor goyah pada satu hari |
| 10 | Klaim dampak | "80%" dan "50+ UMKM" jadi potensi dan target, bukan hasil | Kritik bagian 3, janji vs hasil |
| 11 | Narasi sebab-akibat | Penolakan pendanaan diakui berfaktor banyak | Kritik bagian 3, sebab-akibat terlalu rapi |
| 12 | Tim | "Empat mahasiswa S2 AI" dikoreksi jadi empat mahasiswa lintas bidang | Kritik bagian 3, komposisi tim |
| 13 | Demo | Ditegaskan data ter-seed, bukan pengguna nyata | Kritik bagian 3, status prototype vs klaim aktif |
| 14 | Biaya AI | Biaya LLM diakui nyata di cost structure | Temuan PoC, free tier tidak cukup |
| 15 | Seluruh dokumen | Semua em dash dihapus | Aturan gaya humanizer |

---

## 3. Penjelasan tiap perbaikan

### Perbaikan 1: catatan nama brand
**Sebelum:** proposal memakai "RetailMind AI" sebagai identitas final dan menyebut diri "satu-satunya platform".
**Sesudah:** ditambah blok catatan di awal bahwa nama sementara, sudah dipakai pihak lain, dan sedang diganti dengan pengecekan domain dan merek.
**Alasan:** klaim keunikan mustahil dipertahankan dengan nama yang bukan milik sendiri. Nama final belum diputuskan (keputusan pemilik), jadi proposal jujur menandainya alih-alih mengarang nama baru.

### Perbaikan 2: chat-first hibrida jadi strategi utama
**Sebelum:** kanal hanya "Website dan PWA mobile", WhatsApp sekadar kanal komunitas.
**Sesudah:** Bagian 8.2 baru berisi tabel pembagian chat vs web. Chat jadi pintu masuk UMKM, web untuk output dan seluruh sisi investor.
**Bukti:** [[06 - Analisis Aplikasi & Arah WhatsApp]] dan PoC bot yang membuktikan keenam role bisa onboarding lewat chat. Rincian keputusan di [[12 - Dua Solusi & Rekomendasi (Berbasis PoC)]].

### Perbaikan 3: monetisasi jadi hipotesis bersyarat
**Sebelum:** "Target 10% konversi Free ke Pro" disajikan sebagai target percaya diri.
**Sesudah:** di Bagian 11.3, konversi ditulis "diuji sebagai hipotesis, bukan target percaya diri", dan milestone pilot nomor satu diganti jadi "mengunci satu kemitraan pembiayaan".
**Bukti:** validasi menemukan WTP semua persona bersyarat pada bukti skor dipakai lembaga pembiayaan. Mas Aldi: "buat mainan, nggak." Bu Endah: "yang penting cair, bukan skor."

### Perbaikan 4: unit economics jadi rentang skenario
**Sebelum:** LTV tunggal Rp1.788.000, LTV/CAC 12 sampai 36x, payback di bawah 1 bulan.
**Sesudah:** tabel LTV untuk retensi 3, 6, 12 bulan (Rp447.000 sampai Rp1.788.000), LTV/CAC 3x sampai 18x, retensi bulan ke-2 jadi metrik kunci pilot.
**Alasan:** LTV Rp1.788.000 mengasumsikan retensi 12 bulan penuh, padahal retensi justru pertanyaan yang belum terjawab. Audit Pak Budi: "retensi pembayaran, bukan sekadar minat, adalah pertanyaan nyata."

### Perbaikan 5: opsi harga musiman dan tahunan
**Sebelum:** hanya Pro Rp149.000 per bulan.
**Sesudah:** ditambah baris "Pro musiman/tahunan" di Revenue Streams, dengan catatan bahwa ini respons atas pola FnB musiman.
**Bukti:** validasi menyorot bulan sepi pasca-Lebaran saat langganan bulanan tetap jalan (Bu Endah, Uda Fauzi), dan keinginan bayar hanya saat butuh (Mas Aldi).

### Perbaikan 6: positioning yang bisa dipertahankan
**Sebelum:** "satu-satunya platform yang mengubah transaksi harian menjadi Business Health Score yang dapat dipercaya".
**Sesudah:** "menggabungkan pencatatan operasional dengan penilaian kesiapan investasi khusus FnB Indonesia", kekuatan pada kombinasi dan fokus segmen.
**Alasan:** kata "satu-satunya" cukup dirobohkan satu pembanding, dan "dapat dipercaya" belum terbukti karena belum ada pemodal yang memakainya.

### Perbaikan 7: bakery dihapus
**Sebelum:** bakery disebut di Bagian 3.1, Lean Canvas, dan Business Model Canvas.
**Sesudah:** seluruh segmen jadi "warung, kafe, restoran, katering". Bakery hilang dari semua bagian.
**Alasan:** arah produk sudah men-drop bakery, dan tidak ada persona bakery di validasi. Juri jeli akan menanyakan segmen yang muncul tapi tak pernah dibahas.

### Perbaikan 8: pisahkan riset empati dari validasi sintetis
**Sebelum:** "riset lapangan 15 UMKM" disajikan seolah bukti pasar, dengan klaim "100% tidak mampu menyajikan data".
**Sesudah:** Bagian 3.1 dan 5.3 menyebutnya "riset empati" (tahap empathize, sampel kecil, catatan kualitatif), dan Bagian 11.1 baru menjelaskan pra-validasi sintetis multi-agent secara jujur sebagai bukan bukti pasar nyata.
**Alasan:** memisahkan keduanya dengan jujur justru menjadikan metode sebagai nilai jual, bukan celah.

### Perbaikan 9: guardrail jendela bergerak pada skor
**Sebelum:** formula skor tanpa penjelasan periode, rawan goyah.
**Sesudah:** Bagian 8.3 menambahkan guardrail: skor dihitung atas rata-rata 30 hari, pembelian stok dipisah dari beban operasional.
**Bukti PoC:** Mas Aldi (kafe) beli biji kopi Rp500.000 sekali, skor jatuh ke 0. Koh Aan sama. PoC memberi angka konkret untuk aturan ini. Lihat [[Simulasi Telegram/00-metrik-simulasi]].

### Perbaikan 10: klaim dampak jadi potensi
**Sebelum:** "mengurangi biaya due diligence hingga 80%" dan "screening 50+ UMKM dalam satu hari" sebagai fakta.
**Sesudah:** Bagian 12 menyajikannya sebagai potensi dan target, dengan catatan belum ada asesmen investor nyata di platform.
**Alasan:** ini janji, bukan hasil. Menyajikannya sebagai fakta mudah ditusuk juri.

### Perbaikan 11: narasi sebab-akibat dihaluskan
**Sebelum:** penolakan bank digambarkan berfaktor tunggal (data tidak dipercaya).
**Sesudah:** Bagian 5.1 mengakui penolakan berfaktor banyak (agunan, riwayat, sektor), dengan data readiness sebagai satu faktor penting yang paling bisa diperbaiki teknologi.
**Bukti:** audit Pak Budi menandai penyederhanaan ini. Juri OJK atau BPR akan langsung tahu.

### Perbaikan 12: komposisi tim dikoreksi
**Sebelum:** "empat mahasiswa S2 AI UGM", padahal tabel hanya tiga anggota plus ketua, satu di antaranya Marketing.
**Sesudah:** ketua dimasukkan ke tabel sebagai anggota keempat dengan peran "AI dan Product", ringkasan tim jadi "empat mahasiswa UGM lintas bidang".
**Alasan:** konsistensi kecil dinilai juri sebagai indikator ketelitian keseluruhan.

### Perbaikan 13: demo ditegaskan data ter-seed
**Sebelum:** "3 demo UMKM FnB aktif", berisiko dibaca sebagai pengguna nyata.
**Sesudah:** Bagian 8.4 menegaskan akun demo berdata sintetis 30 hari untuk peragaan, bukan UMKM nyata yang memakai produk.
**Alasan:** memisahkan prototype yang berjalan dari klaim traksi pengguna nyata.

### Perbaikan 14: biaya AI diakui nyata
**Sebelum:** cost structure tanpa penekanan pada biaya LLM sebagai variabel skala.
**Sesudah:** catatan di cost structure dan di Bagian 11.2 bahwa free tier tidak cukup untuk beban banyak pengguna.
**Bukti PoC:** simulasi enam persona menembus batas free tier Gemini (5 request per menit) seketika.

### Perbaikan 15: em dash dihapus
Seluruh tanda em dash di v2 diganti dengan koma, titik, atau kata sambung, sesuai aturan gaya.

---

## 4. Apa yang sengaja dipertahankan

Tidak semua diubah. Yang kuat tetap dipertahankan: tiga modul, formula 6 komponen, working prototype, tagline, dan struktur besar proposal. Perbaikan menyasar klaim yang melebihi bukti, bukan membongkar produk.

---

## 5. Status dan langkah lanjut

- File hasil: `proposal/PROPOSAL_DIGDAYA_2026_v3.md` di repo project.
- Keputusan pemilik yang masih terbuka: nama brand final (ditunda, perlu riset ketersediaan).
- Prioritas nomor satu yang berada di luar dokumen: mengunci satu kemitraan pembiayaan. Inilah yang mengubah seluruh klaim monetisasi dari hipotesis menjadi bukti.

→ Sumber: [[09 - Kritik Proposal (Proof-Driven)]] · [[12 - Dua Solusi & Rekomendasi (Berbasis PoC)]] · [[04 - Laporan Validasi Sintetis]] · Objek: `PROPOSAL_DIGDAYA_2026_v3`
