---
description: Menjalankan panel persona sintetis secara paralel memakai agent validator-persona untuk menguji dokumen, fitur, atau naskah, lalu merangkum pola dan keberatan terkuat.
argument-hint: <dokumen, fitur, atau naskah yang mau divalidasi>
---

# Validasi Multi-Agent

Uji `$ARGUMENTS` lewat panel persona sintetis. Metodenya mengikuti `[[03 - Metode Validasi Multi-Agent]]`, jangan mengarang protokol sendiri.

Kalau `$ARGUMENTS` kosong, tanya dulu apa yang mau diuji dan berhenti.

## 1. Siapkan objek uji

Baca objek uji sampai habis sebelum memanggil siapa pun. Kalau berupa catatan vault, baca berkasnya. Kalau berupa fitur atau ide yang ditulis di prompt, rangkum jadi deskripsi ringkas yang akan dibaca semua persona.

Baca juga `[[03 - Metode Validasi Multi-Agent]]` untuk protokol empat ronde dan `[[04 - Laporan Validasi Sintetis]]` untuk temuan yang sudah ada, supaya panel tidak mengulang kesimpulan lama.

Susun satu paket briefing yang identik untuk seluruh persona: deskripsi objek uji, konteks singkat produk, dan pertanyaan yang harus dijawab. Briefing tidak boleh menggiring, jadi jangan menyebut jawaban yang kamu harapkan.

## 2. Tentukan panel

Panel bawaan berisi enam persona. Sesuaikan hanya kalau pengguna meminta.

| Persona | Sudut pandang |
|---|---|
| Pemilik warung makan harian | Skala kecil, catat manual, margin tipis, waktu sangat terbatas |
| Pemilik kedai kopi | Sudah pakai POS dan aplikasi pesan antar, merasa datanya sudah cukup |
| Pemilik usaha katering atau pesanan | Arus kas musiman dan tidak rata, butuh modal kerja mendadak |
| Analis kredit lembaga pembiayaan | Sisi bank, koperasi, atau BPR. Menilai apakah skor bisa dipakai untuk keputusan kredit |
| Pemodal atau investor ritel | Menilai apakah skor mempercepat penyaringan dan layak dipercaya |
| Agent Skeptis | Tugasnya mencari celah: asumsi rapuh, klaim berlebihan, alasan menolak memakai produk |

Jangan mengarang nama orang, nama usaha, nama mitra, atau lokasi spesifik untuk persona. Cukup tipe usaha dan kondisinya.

## 3. Jalankan terpisah dan paralel

Panggil subagent `validator-persona` satu kali per persona. Kirim seluruh pemanggilan dalam satu giliran supaya berjalan paralel.

Aturan yang wajib disebut di setiap pemanggilan:

- Persona tidak boleh melihat jawaban persona lain. Isolasi ini yang menjaga panel tidak saling menyeragamkan.
- Persona wajib memunculkan minimal dua keberatan konkret sebelum boleh menyatakan minat. Jawaban yang hanya memuji ditolak dan diminta ulang.
- Persona menjawab dari kondisi usahanya, bukan dari sudut pandang tim produk.
- Persona tidak boleh mengarang angka pasar. Kalau menyebut nominal kesediaan bayar, tandai sebagai perkiraan pribadi persona.

## 4. Gabungkan hasil

Setelah semua persona selesai, baru lakukan sintesis. Hitung berapa persona yang memunculkan hal yang sama sebelum menyebutnya pola.

```
VALIDASI SINTETIS
Objek uji: <objek>
Panel: <n> persona, dijalankan terpisah

POLA BERULANG
1. <pola> — muncul di <n>/<n> persona — <kutipan pendek atau ringkasan alasannya>

KEBERATAN TERKUAT
1. <keberatan> — sumber: <persona> — dampak kalau tidak dijawab: <satu kalimat>

SUARA MINORITAS
- <hal penting yang hanya muncul di satu persona, tetap dicatat, tidak diperlakukan sebagai pola>

TINDAKAN DISARANKAN
1. <tindakan konkret> — menjawab keberatan nomor <n> — menyentuh <catatan atau bagian produk>

Catatan metode: hasil ini validasi sintetis, bukan bukti pasar. Persona mencerminkan data sekunder dan asumsi tim, bukan pelanggan nyata. Angka kesediaan bayar bersifat indikatif. Gunakan sebagai pra-validasi dan bahan pertanyaan untuk wawancara lapangan.
```

Baris catatan metode wajib ada di setiap keluaran, termasuk kalau hasilnya positif semua. Hasil yang positif semua justru mencurigakan: periksa apakah Agent Skeptis benar-benar menekan, dan kalau tidak, jalankan ulang persona itu.

## 5. Setelah laporan

Jangan menulis hasil ke catatan vault kecuali pengguna memintanya. Kalau diminta, tawarkan menyimpannya sebagai bagian baru di catatan validasi yang relevan dan sebutkan berkas tujuannya sebelum menulis.

> Dibuat khusus untuk vault RetailMind AI, mengikuti pola everything-claude-code (MIT).
