---
title: Laporan PoC Telegram
tags: [retailmind, poc, telegram, simulasi, laporan]
status: aktif
updated: 2026-07-21
---

> [!abstract] Tujuan dokumen
> Merangkum hasil proof of concept bot Telegram RetailMind (Fase B awal): apa yang dibangun, bukti bahwa alur chat berjalan, bug yang tersingkap simulasi dan sudah diperbaiki, edge case yang ditemukan, serta batas operasional (kuota provider). Bot: `@RetailMindBot`, provider Gemini `gemini-2.5-flash` dengan fallback Claude. Kode di repo project (`retailmind-ai/scripts/telegram-bot.mjs`, branch `telegram-poc`). Nama brand sementara.

## 1. Ringkasan

Bot chat-first berhasil dibangun dan berjalan live. Alur inti terbukti: **onboarding, mencatat transaksi lewat pesan biasa, ringkasan skor, dan AI Coach**, semua di dalam chat tanpa aplikasi baru. Simulasi persona dan probe edge case menyingkap tiga bug nyata yang langsung diperbaiki, plus satu batas operasional penting soal kuota provider. Ini membuktikan model chat-first ([[08 - Solusi Gabungan Hibrida]]) layak secara teknis.

## 2. Yang dibangun dan diuji

| Fitur | Status | Cara uji |
|---|---|---|
| Onboarding (nama usaha, kategori) | Berjalan | Simulasi persona + probe |
| Catat transaksi via chat ("jual nasi 15rb") | Berjalan | Parse Gemini + fallback heuristik |
| Multi-transaksi dalam satu pesan | Diperbaiki | Probe + simulasi A1 |
| Ringkasan dan skor estimasi | Berjalan | Perintah "skor" |
| AI Coach percakapan | Berjalan (butuh kuota LLM) | Pertanyaan bebas |

## 3. Bukti PoC

- **Simulasi persona A1 (Bu Siti, owner warung)**: menyelesaikan onboarding dan mencatat transaksi lewat percakapan natural, lalu bertanya soal biaya dan pemodal. Transkrip di [[A1-bu-siti]]. Ini menunjukkan persona gaptek pun bisa masuk lewat chat.
- **Probe edge case (12 kasus)**: [[01-edge-cases]]. Bot menangani nominal telanjang, nominal besar, dan gibberish dengan wajar, serta menolak mencatat pesan tanpa nominal.
- **Smoke test**: parser nominal lolos 8 kasus (15rb, 1.2jt, 200ribu, dst.), parse transaksi via Gemini menghasilkan JSON bersih, coach menjawab kontekstual.

## 4. Bug yang tersingkap simulasi dan sudah diperbaiki

> [!success] Inilah nilai PoC: simulasi menemukan masalah nyata sebelum pengguna asli
> 1. **Multi-transaksi dalam satu pesan.** Bu Siti mengetik tiga transaksi sekaligus ("jual nasi lauk 50rb. jual kopi teh 15rb. beli sayur 80rb"). Bot lama mencatatnya sebagai satu transaksi dengan label salah. **Perbaikan**: pesan dipecah per kalimat berangka, tiap bagian dicatat terpisah. Kini tercatat tiga transaksi dengan tipe benar.
> 2. **Perintah tidak dikenali karena tanda baca.** "Skor." (pakai titik) tidak terbaca sebagai perintah, jatuh ke coach. **Perbaikan**: normalisasi tanda baca di akhir, kini "Skor." dan "skor" sama-sama dikenali.
> 3. **Coach over-promising.** Saat ditanya "skor ini dilihat pemodal beneran?", coach menjawab seolah sudah ada lembaga pembiayaan yang bekerja sama. Padahal kemitraan itu belum ada, dan inilah persis risiko kredibilitas yang ditemukan validasi ([[04 - Laporan Validasi Sintetis]]). **Perbaikan**: prompt coach diberi aturan kejujuran, dilarang mengklaim kemitraan yang belum ada, wajib bilang kemitraan sedang dirintis.

## 5. Edge case dan batas yang teridentifikasi (belum diperbaiki, jadi backlog)

- **Belum ada koreksi atau pembatalan.** "batalin yang tadi salah" tidak didukung. Perlu perintah undo dan edit entri terakhir.
- **Nominal telanjang default ke pemasukan.** "20rb" tanpa kata kerja dianggap pemasukan. Perlu konfirmasi tipe saat ambigu.
- **Coach menurun saat kuota LLM habis.** Tanpa LLM, coach memberi pesan aman generik, bukan jawaban kontekstual. Perlu provider cadangan yang benar-benar aktif.

## 6. Batas operasional penting (temuan biaya)

> [!warning] Free tier tidak cukup untuk beban otomatis
> Gemini free tier `gemini-2.5-flash` dibatasi 5 request per menit. Simulasi otomatis enam persona menembus batas ini seketika (429 Too Many Requests), sehingga hanya sebagian persona tuntas. Bot ditambah throttle plus fallback ke Claude, tetapi key Anthropic yang tersedia ternyata tidak valid, dan tidak ada key OpenAI.
>
> Implikasi produksi: layanan chat dengan banyak pengguna nyata membutuhkan tier berbayar atau beberapa provider aktif. Untuk pemakaian interaktif satu manusia (menyapa bot lalu mengetik beberapa pesan per menit), free tier masih memadai. Angka ini masuk ke perhitungan biaya di [[10 - Paket Bisnis (USP, ROI, Model)]].

## 7. Kaitan ke validasi dan solusi

- Persona gaptek (Bu Siti) berhasil onboarding dan mencatat lewat chat, mendukung tesis bahwa chat-first menurunkan friksi adopsi.
- Bug coach over-promising membuktikan bahwa gap kemitraan pembiayaan bukan cuma soal bisnis, tetapi juga risiko produk yang bisa menyesatkan pengguna. Sekarang ditangani lewat aturan kejujuran.
- Multi-transaksi dan koreksi adalah kebutuhan nyata operasional (persona mengetik apa adanya), memperkuat catatan bahwa chat menambal pencatatan cepat, bukan menggantikan struktur POS untuk volume tinggi.

## 8. Rekomendasi teknis untuk produksi

1. Pindah ke WhatsApp Business API sebagai kanal produksi setelah alur stabil.
2. Provider LLM tier berbayar atau multi-provider aktif (Gemini, OpenAI, Claude) dengan fallback yang benar.
3. Tambah fitur koreksi/undo dan konfirmasi tipe saat ambigu.
4. Tarik penjualan volume tinggi dari POS, chat fokus ke pengeluaran tunai dan pesanan.
5. Pertahankan aturan kejujuran coach sampai kemitraan pembiayaan benar ada.

→ Kembali: [[00 - Spec Desain Validasi Multi-Agent]] · Terkait: [[05 - Blueprint Versi Telegram (Chat)]] · [[08 - Solusi Gabungan Hibrida]]
