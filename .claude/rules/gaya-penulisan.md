# Gaya Penulisan Vault

Aturan ini berlaku untuk setiap catatan `.md` yang kamu tulis atau sunting di vault RetailMind AI.

## Bahasa

- Tulis dalam bahasa Indonesia yang lugas. Bukan bahasa terjemahan, bukan bahasa siaran pers.
- Satu kalimat satu gagasan. Batas wajar 20 kata. Kalau lebih panjang, pecah.
- Kalimat aktif. Tulis "Tim menguji skor pada 5 skenario", bukan "Pengujian skor telah dilakukan".
- Istilah teknis Claude Code (agent, skill, command, hook, frontmatter, wikilink) tetap Inggris. Sisanya Indonesia.
- Jangan campur setengah-setengah dalam satu kalimat kalau padanan Indonesianya sudah lazim.

## Larangan bahasa pemasaran kosong

Hapus kata yang tidak menambah informasi: revolusioner, terdepan, game changer, seamless, world class, next level, solusi menyeluruh, sinergi.

Ganti klaim kosong dengan fakta yang bisa diperiksa.

| Jangan tulis | Tulis |
|---|---|
| "Skor kami sangat akurat" | "Skor diuji pada [jumlah] skenario, hasil ada di [[04 - Laporan Validasi Sintetis]]" |
| "Pasar UMKM sangat besar" | "Ukuran pasar dan asumsinya ada di [[Sumber & Asumsi Angka]]" |
| "Teknologi mutakhir" | Sebut komponen dan alasannya, rujuk [[09 - Arsitektur & Teknologi]] |

Kalau kamu tidak punya fakta pendukung, jangan menaikkan nada bahasa untuk menutupinya. Turunkan klaimnya.

## Satu catatan satu tujuan

- Setiap catatan menjawab satu pertanyaan. Kalau ada dua pertanyaan, buat dua catatan dan hubungkan dengan wikilink.
- Paragraf pembuka catatan harus menyatakan tujuan catatan dalam satu sampai dua kalimat.
- Jangan menaruh pembahasan model bisnis di dalam catatan arsitektur, dan sebaliknya. Hormati pembagian folder `01` sampai `10`.
- Kalau sebuah catatan sudah melebihi sekitar 200 baris dan membahas hal yang beragam, pecah dan buat catatan induk yang menautkannya.

## Struktur yang bisa dipindai

- Judul H1 hanya satu per catatan, sama dengan maksud berkasnya.
- Gunakan H2 untuk bagian utama, H3 untuk rincian. Jangan lompat dari H2 ke H4.
- Judul bagian harus deskriptif. Tulis "Cara skor dihitung", bukan "Penjelasan".
- Poin bertingkat maksimal dua level. Lebih dalam dari itu tandanya struktur perlu dipecah.
- Blok teks lebih dari lima baris tanpa jeda harus dipecah jadi poin atau paragraf baru.

## Tabel dan callout

- Pakai tabel untuk perbandingan: opsi versus opsi, sebelum versus sesudah, kriteria rubrik versus bukti. Jangan pakai tabel untuk narasi berurutan.
- Kolom pertama tabel adalah kunci pembanding. Jaga jumlah kolom maksimal empat agar terbaca di panel sempit.
- Pakai callout Obsidian untuk penekanan, bukan huruf kapital atau tebal berlebihan:
  - `> [!warning]` untuk risiko, klaim rawan, atau hal yang bisa menjatuhkan penilaian.
  - `> [!info]` untuk konteks tambahan yang tidak wajib dibaca.
  - `> [!example]` untuk contoh dan ilustrasi.
  - `> [!quote]` untuk kutipan sumber eksternal.
- Maksimal tiga callout per catatan. Kalau semuanya ditandai penting, tidak ada yang penting.

## Konsistensi istilah

Istilah kunci dipakai seragam di seluruh vault. Jangan menciptakan varian baru.

| Istilah baku | Jangan tulis |
|---|---|
| RetailMind AI | Retailmind, Retail Mind, RM AI |
| Business Health Scoring | health scoring, skor kesehatan (sendirian, tanpa istilah baku) |
| Investment Readiness | kesiapan investasi, investment score |
| UMKM F&B | SME F&B, UKM kuliner |
| skor kesehatan bisnis (0-100) | skor bisnis, nilai kesehatan |

Aturan turunannya:

- Tagline ditulis persis: "Setiap transaksi membangun kepercayaan."
- Nama tim ditulis persis: Financial Freedom Tim.
- Sebelum memperkenalkan istilah baru, cari dulu apakah vault sudah memakai istilah lain untuk hal yang sama. Kalau ada, pakai yang sudah ada.
- Kalau memang perlu mengganti istilah baku, ganti di seluruh vault dalam satu perubahan, jangan sebagian.

## Rujukan dan tautan

- Rujuk catatan lain dengan wikilink `[[Nama Catatan]]`, bukan menyalin isinya.
- Setiap catatan turunan menautkan balik ke [[00 - Beranda (MOC)]] atau catatan induknya.
- Jangan menyebut tanggal atau deadline langsung. Rujuk [[STATUS]] atau [[Jawaban Tahap 3 (FINAL)]].

## Periksa sebelum selesai

- Judul H1 tunggal dan deskriptif.
- Tidak ada kata pemasaran kosong.
- Istilah kunci sesuai tabel baku.
- Setiap angka punya rujukan sumber (lihat rule bukti-dan-angka).
- Wikilink yang ditulis benar-benar ada di vault.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
