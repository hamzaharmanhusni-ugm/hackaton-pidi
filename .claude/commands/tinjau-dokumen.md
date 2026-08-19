---
description: Tinjau kualitas dan kredibilitas catatan vault, otomatis memanggil pemeriksa angka bila dokumen memuat klaim kuantitatif.
argument-hint: <nama catatan atau folder, kosongkan untuk yang berubah di git>
---

# Tinjauan dokumen

Target tinjauan: `$ARGUMENTS`

## Langkah 1 — Tentukan ruang lingkup

Kalau `$ARGUMENTS` terisi:

- Perlakukan sebagai nama catatan, potongan nama, atau folder. Pakai `Glob` untuk mencocokkan ke path nyata di vault.
- Kalau kecocokannya lebih dari satu dan ambigu, tampilkan daftarnya dan minta pengguna memilih sebelum lanjut.
- Kalau tidak ada yang cocok, katakan apa adanya dan berhenti. Jangan meninjau catatan lain sebagai pengganti.

Kalau `$ARGUMENTS` kosong:

- Jalankan `git status --porcelain` dan `git diff --name-only HEAD`.
- Ambil hanya berkas berekstensi `.md` dan `.canvas`. Abaikan berkas di `.obsidian/` dan `.claude/vendor/`.
- Kalau tidak ada satu pun berkas berubah, katakan tidak ada yang perlu ditinjau lalu berhenti.

Tampilkan daftar berkas yang akan ditinjau sebelum mulai.

## Langkah 2 — Deteksi klaim kuantitatif

Untuk setiap berkas dalam lingkup, baca isinya dan tandai apakah memuat klaim kuantitatif. Yang dihitung sebagai klaim kuantitatif:

- Angka nominal rupiah, persentase, jumlah pengguna, jumlah UMKM, jumlah transaksi.
- Ukuran pasar (TAM, SAM, SOM), proyeksi pendapatan, target pertumbuhan.
- Skor, akurasi model, metrik performa, jumlah sampel validasi.
- Klaim perbandingan seperti "lebih cepat", "lebih murah", "terbesar", yang menyiratkan ukuran.

Pakai `Grep` untuk mempercepat: cari pola angka, tanda persen, "Rp", "juta", "miliar", "TAM", "SAM", "SOM", "akurasi", "target".

## Langkah 3 — Jalankan agent peninjau

Panggil agent `peninjau-dokumen` lewat tool `Task` untuk seluruh berkas dalam lingkup. Beri agent itu: daftar path lengkap, konteks bahwa ini vault submission hackathon fintech yang diawasi regulator, dan permintaan agar temuan disertai kutipan kalimat aslinya.

**Bila ada berkas yang memuat klaim kuantitatif**, panggil juga agent `pemeriksa-angka` lewat tool `Task`. Kirim kedua panggilan dalam satu blok yang sama supaya berjalan bersamaan. Beri `pemeriksa-angka` hanya berkas yang memang memuat angka, ditambah instruksi membandingkan setiap angka dengan `[[Sumber & Asumsi Angka]]` dan dengan catatan lain yang menyebut angka sama.

Kalau tinjauan menyangkut catatan yang dibaca pihak luar (proposal, jawaban tahap, naskah pitch, modul panitia), panggil juga `peninjau-kepatuhan` dalam blok paralel yang sama.

Jangan menyunting berkas apa pun dalam command ini. Ini tinjauan, bukan perbaikan.

## Langkah 4 — Gabungkan temuan

Satukan keluaran semua agent menjadi satu daftar:

- Kalau dua agent melaporkan masalah pada kalimat atau angka yang sama, gabungkan jadi satu temuan. Ambil rumusan yang paling spesifik, sebutkan bahwa temuan itu terkonfirmasi oleh lebih dari satu pemeriksa, dan pakai tingkat keparahan yang paling tinggi di antara keduanya.
- Buang temuan gaya bahasa yang murni selera bila tidak mengubah makna.
- Buang temuan yang mengarah ke berkas di luar lingkup.

Urutkan dari yang paling merusak kredibilitas ke yang paling ringan:

1. **KRITIS** — angka atau klaim yang saling bertentangan antar catatan, angka tanpa sumber yang disajikan sebagai fakta, klaim soal skor kredit atau kelayakan pendanaan yang melampaui apa yang benar-benar bisa dibuktikan produk, janji hasil finansial ke pengguna, penyebutan data UMKM yang menyiratkan akses yang tidak dimiliki.
2. **TINGGI** — klaim tanpa bukti pendukung, status pekerjaan yang digambarkan lebih maju daripada `[[STATUS]]`, kontradiksi dengan `[[Jawaban Tahap 3 (FINAL)]]`, bagian rubrik yang dijawab tapi tidak nyambung dengan pertanyaannya.
3. **SEDANG** — struktur yang membingungkan pembaca, wikilink rusak atau menunjuk catatan yang tidak ada, istilah yang tidak konsisten dengan catatan lain, pengulangan yang tidak perlu.
4. **RENDAH** — kerapian penulisan, format tabel, judul yang kurang informatif.

## Langkah 5 — Laporkan

```markdown
# Tinjauan Dokumen

Lingkup: <daftar berkas>
Pemeriksa yang dijalankan: peninjau-dokumen<, pemeriksa-angka><, peninjau-kepatuhan>

## KRITIS
### 1. <ringkasan satu kalimat>
- Berkas: <path>
- Kutipan: "<kalimat asli>"
- Masalah: <kenapa ini merusak kredibilitas>
- Perbaikan: <tindakan konkret>
- Dikonfirmasi oleh: <nama agent>

## TINGGI
...

## SEDANG
...

## RENDAH
...

## Kesimpulan
LAYAK KIRIM / PERLU PERBAIKAN / JANGAN DIKIRIM DULU — dengan satu kalimat alasan.
```

Aturan pelaporan:

- Kalau satu tingkat keparahan kosong, tulis "Tidak ada temuan" dan jangan mengarang isi.
- Jangan pernah menuliskan angka pengganti hasil tebakanmu sendiri di kolom perbaikan. Tulis "verifikasi ke `[[Sumber & Asumsi Angka]]`" atau "hapus angka sampai ada sumber".
- Selama masih ada temuan KRITIS, kesimpulannya tidak boleh LAYAK KIRIM.
- Tutup dengan menawarkan `/cek-angka` bila angkanya banyak, atau `/rencana` bila perbaikannya menyentuh banyak catatan sekaligus.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
