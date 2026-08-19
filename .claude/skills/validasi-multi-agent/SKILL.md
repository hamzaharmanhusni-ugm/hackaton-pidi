---
name: validasi-multi-agent
description: Dipakai saat menguji ide, fitur, dokumen, model harga, atau naskah pitch lewat panel persona sintetis sebelum ada wawancara pelanggan nyata. Mengatur cara menyusun panel yang beragam, menjalankan tiap persona terpisah, menilai kualitas keberatan, menyusun laporan, dan menandai batas metode ini.
---

# Metode Validasi Multi-Agent

Mengodekan cara kerja yang sudah dipakai vault RetailMind AI di
`[[03 - Metode Validasi Multi-Agent]]`, `[[02 - Kartu Persona Agent]]`, dan
`[[04 - Laporan Validasi Sintetis]]`. Baca ketiganya sebelum menjalankan panel baru supaya
kamu tidak mengarang protokol tandingan dan tidak mengulang kesimpulan lama. Eksekusinya lewat
command `/validasi-agent` dengan subagent `validator-persona`.

## 1. Kenapa metode ini dipakai

Wawancara pelanggan nyata mahal dan lambat, sementara keputusan produk harus jalan. Panel
persona sintetis mempertajam hipotesis sebelum masuk lapangan: menemukan keberatan yang belum
terpikir, mengurutkan pertanyaan mana yang paling tidak pasti, dan menyaring ide yang jelas
lemah tanpa membakar jatah wawancara. Dasarnya, persona yang dijangkarkan pada data agregat
menjadi proksi terarah, bukan tebakan acak. Rujukan risetnya sudah tercatat di
`[[03 - Metode Validasi Multi-Agent]]`; kutip dari sana, jangan menambah referensi dari ingatan.

## 2. Batas metode, disebut lebih dulu

> [!warning] Yang tidak dihasilkan metode ini
> Ini pra-validasi terarah, bukan bukti pasar. Persona mencerminkan data sekunder dan asumsi
> tim, bukan pelanggan nyata. Kesediaan bayar yang muncul bersifat indikatif, bukan komitmen.
> Tidak ada angka konversi, retensi, atau ukuran pasar yang boleh lahir dari panel ini.

Tiga kegagalan bawaan wajib ditangani setiap kali: kecenderungan agent mengiyakan, jawaban
antarpersona yang menyeragam, dan detail yang dikarang. Penangkalnya ada di bagian 3, 4, dan 6.

## 3. Menyusun panel yang beragam

Panel seragam hanya mengonfirmasi dirinya sendiri. Bedakan pada sumbu yang benar-benar
mengubah jawaban, bukan sekadar mengganti nama.

- **Segmen usaha**: skala kecil bermargin tipis, usaha yang sedang bertumbuh, usaha dengan
  arus kas musiman.
- **Tingkat kedigitalan**: dari yang masih mencatat manual sampai yang sudah memakai POS dan
  kanal pesan antar dan merasa datanya sudah cukup.
- **Sikap awal**: sedang butuh, pernah mencoba alat sejenis lalu berhenti, atau merasa tidak
  butuh sama sekali.
- **Peran di luar pembayar**: minimal satu pengguna operasional yang menyentuh produk tiap
  hari tetapi tidak mengambil keputusan beli dan tidak peduli pada skor.
- **Sisi lawan meja**: analis kredit lembaga pembiayaan atau pemodal, karena merekalah yang
  menentukan apakah skor ada gunanya.
- **Satu Agent Skeptis** yang bukan memerankan pelanggan, melainkan mencari celah: asumsi
  rapuh, klaim berlebihan, alasan menolak memakai produk.

Pisahkan peran pengawas dari peran persona. Yang memancing keberatan (Agent Skeptis) tidak
boleh sama dengan yang mengaudit klaim terhadap data (Validator Riset), dan keduanya tidak
boleh sama dengan Moderator yang menjaga pertanyaan tetap netral. Pemisahan inilah yang
membuat panel tidak memutus sendiri apa yang benar. Jangan mengarang nama orang, usaha, mitra,
atau lokasi untuk persona baru; panel bernama yang sah hanya ada di
`[[02 - Kartu Persona Agent]]`, selebihnya pakai tipe usaha tanpa nama.

## 4. Jalankan tiap persona terpisah

Aturan keras: satu persona, satu sesi, tanpa melihat jawaban persona lain.

- Briefing identik untuk semua persona: deskripsi objek uji, konteks singkat produk, dan
  pertanyaan yang harus dijawab. Briefing tidak boleh menyebut jawaban yang kamu harapkan.
- Satu subagent per persona, seluruh pemanggilan dikirim dalam satu giliran supaya paralel dan
  tidak saling membaca. Sintesis baru dilakukan setelah semua persona selesai; menyintesis di
  tengah membuat hasil awal mewarnai persona berikutnya.
- Urutan pertanyaan mengikuti empat ronde di `[[03 - Metode Validasi Multi-Agent]]`: masalah
  dulu tanpa menyebut produk, baru reaksi solusi, baru percobaan alur, baru kesediaan bayar
  dan keberatan. Menyebut produk di ronde pertama merusak seluruh sesi.

## 5. Isi minimal kartu persona

Kartu persona adalah instruksi identitas yang dipakai verbatim. Minimal tujuh bagian.

| Bagian | Isi |
|---|---|
| Identitas | Jenis usaha, skala, lama usaha, latar pendidikan, rentang omzet, lokasi umum. |
| Karakter dan cara bicara | Nada bicara, sensitivitas harga, cara mengambil keputusan. |
| Konteks teknologi | Alat yang dipakai, cara mencatat sekarang, kenyamanan pada hal teknis. |
| Pemicu memakai produk | Kejadian konkret yang membuatnya mencari solusi. |
| Pain point berlapis | Bukan satu keluhan, tapi rantai akibatnya sampai ke keputusan. |
| Kekhawatiran | Pertanyaan yang akan ia ajukan sendiri, ditulis sebagai kalimatnya. |
| Aturan khusus persona | Kondisi yang membuatnya menolak atau berhenti. |

Dua hal wajib di luar tabel: **dasar pemilihan persona** (kenapa parameter itu dipilih dan
sumber datanya, seperti di `[[02 - Kartu Persona Agent]]`), dan **aturan roleplay bersama**
untuk semua persona: menjawab sebagai orang, boleh menolak, wajib memunculkan minimal dua
keberatan konkret sebelum menyatakan minat, tidak memuji tanpa alasan, dan mengatakan tidak
tahu ketika pertanyaan di luar pengalamannya.

## 6. Menilai kualitas keberatan

Panel yang setuju semua adalah panel yang gagal. Nilai tiap keberatan sebelum masuk laporan.

Keberatan **berkualitas** kalau memenuhi tiga syarat: menyebut kondisi konkret usaha
personanya, menunjuk alternatif atau biaya yang nyata baginya, dan tetap berlaku seandainya
produk sudah bekerja sempurna. Bentuknya misalnya sudah membayar alat lain untuk kebutuhan
mirip, kebutuhan musiman melawan biaya rutin, tidak ada yang mengerjakan input harian, atau
ragu hasilnya diakui pihak pemberi modal. Keberatan **ditolak dan diminta ulang** kalau hanya
soal rasa ("kurang menarik"), soal kosmetik yang mudah diperbaiki, atau pujian yang
disamarkan. Persona yang menyatakan minat tanpa dua keberatan konkret dijalankan ulang.

| Tingkat keyakinan | Definisi | Boleh dipakai untuk |
|---|---|---|
| Tinggi | Konsisten di beberapa persona dan sejalan dengan data sekunder vault. | Sinyal terarah untuk keputusan produk. |
| Sedang | Muncul di sebagian persona atau sejalan sebagian dengan data. | Prioritas pertanyaan wawancara lapangan. |
| Rendah | Muncul di satu persona atau bertentangan dengan data. | Hipotesis, bukan temuan. |

Hitung berapa persona memunculkan hal yang sama sebelum menyebutnya pola. Satu suara dicatat
sebagai suara minoritas, tidak dinaikkan jadi pola.

## 7. Format laporan

```markdown
## 1. Ringkasan eksekutif
Empat sampai lima temuan utama, masing-masing dengan tingkat keyakinan dalam kurung. Ditutup
satu paragraf kesimpulan yang menyebut titik terlemah, bukan titik terkuat.

## 2. Temuan per aspek
Problem-solution fit, kesediaan bayar, friksi pemakaian, keberatan. Tiap aspek diberi tingkat
keyakinan dan didukung kutipan pendek persona, bukan parafrase penulis.

## 3. Matriks persona terhadap aspek
Tabel: baris persona, kolom aspek, plus kolom keberatan paling tajam per persona.

## 4. Keberatan dan jawaban
Tabel: keberatan, muncul pada siapa, jawaban tim saat ini, status (terjawab, terjawab
sebagian, belum terjawab). Yang belum terjawab ditandai tegas.

## 5. Batasan dan rencana validasi lapangan
Pernyataan batas metode, lalu daftar pertanyaan untuk manusia nyata, diurutkan dari yang
paling tidak pasti.

## 6. Rekomendasi tindak lanjut
Tindakan konkret, masing-masing menunjuk keberatan nomor berapa yang dijawabnya.
```

Tutup setiap laporan dengan pernyataan ini, termasuk kalau hasilnya positif semua:

> [!important] Status hasil
> Hasil ini validasi sintetis, bukan riset lapangan. Persona mencerminkan data sekunder dan
> asumsi tim, bukan pelanggan nyata. Angka kesediaan bayar bersifat indikatif. Jangan
> menyajikannya sebagai wawancara pengguna, survei, atau bukti permintaan pasar di proposal,
> pitch, maupun materi ke pihak luar.

Kalau bagian laporan masuk ke dokumen submission, sebut metodenya di kalimat yang sama dengan
temuannya, bukan di catatan kaki yang mudah terlewat.

## 8. Kapan metode ini tidak cukup

Berhenti dan minta bukti nyata ketika keputusannya menyangkut hal berikut.

- **Permintaan pasar dan konversi.** Berapa orang benar-benar membayar dan berapa lama tetap
  membayar hanya bisa dijawab pengguna berbayar sungguhan.
- **Kesediaan pihak ketiga.** Apakah lembaga pembiayaan mau memakai skor sebagai dasar
  keputusan hanya bisa dijawab lembaga itu sendiri; persona tidak bisa mewakilinya.
- **Akurasi teknis.** Kualitas pembacaan nota, kategorisasi otomatis, dan kelayakan integrasi
  dijawab lewat uji sistem pada data nyata, bukan pendapat persona.
- **Perilaku bertahan.** Apakah orang tetap mencatat setelah beberapa minggu hanya terlihat
  dari pemakaian nyata sepanjang waktu.
- **Kepatuhan dan risiko regulasi.** Konteks lomba ini fintech yang diawasi. Pertanyaan soal
  perlindungan data, penilaian kredit, dan batas klaim dijawab lewat aturan yang berlaku dan
  konsultasi, bukan lewat panel.

Dalam kelima kasus itu keluaran panel bukan jawaban melainkan daftar pertanyaan. Ubah menjadi
rencana pembuktian: siapa yang harus ditanya, bukti apa yang dicari, dan apa yang membatalkan
hipotesis kalau bukti itu tidak ditemukan.

→ Metode lengkap: `[[03 - Metode Validasi Multi-Agent]]` · Kartu persona: `[[02 - Kartu Persona Agent]]` · Contoh laporan: `[[04 - Laporan Validasi Sintetis]]`

> Dibuat khusus untuk vault RetailMind AI, mengikuti pola everything-claude-code (MIT).
