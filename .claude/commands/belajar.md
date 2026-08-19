---
description: Saring pelajaran yang layak dipakai ulang dari sesi berjalan, lalu simpan sebagai skill baru atau tambahan pada rules setelah pengguna menyetujui.
argument-hint: <opsional: pelajaran spesifik yang ingin disimpan>
---

# Belajar

Ubah pengalaman sesi ini menjadi aturan yang dipakai sesi berikutnya. Nilai command ini ada pada saringannya: satu skill yang benar-benar dipakai ulang jauh lebih berharga daripada sepuluh catatan sekali pakai yang cuma menambah beban baca.

## Langkah 1 — Kumpulkan kandidat

Kalau `$ARGUMENTS` terisi, itu kandidatnya; langsung ke Langkah 2. Kalau kosong, telusuri sesi berjalan dan cari:

- **Koreksi berulang dari pengguna** — hal yang sama dibetulkan lebih dari sekali. Ini sinyal terkuat.
- **Preferensi gaya penulisan** — struktur catatan, panjang kalimat, cara menyajikan tabel, istilah yang dipilih atau ditolak.
- **Keputusan yang sudah final** — arah yang sudah diputuskan pengguna dan tidak perlu dibuka lagi.
- **Cara kerja yang terbukti berhasil di vault ini** — urutan langkah, kombinasi agent, atau cara memverifikasi sesuatu yang jelas menghemat waktu.

Tulis kandidatnya sebagai daftar pendek sebelum menyaring.

## Langkah 2 — Saring dengan tegas

Buang kandidat yang kena salah satu dari ini:

- **Sekali pakai.** Menyangkut satu catatan, satu angka, atau satu permintaan tertentu yang tidak akan berulang.
- **Sudah tertulis di catatan vault.** Fakta proyek, angka, sumber, status, dan keputusan produk adalah isi vault, bukan isi `.claude/`. Kalau tempatnya di `[[Sumber & Asumsi Angka]]`, `[[STATUS]]`, atau `[[DISKUSI v3 - Ready to Win]]`, usulkan menulis ke sana dan jangan bikin skill.
- **Sudah tercakup rules atau skill yang ada.** Baca dulu isi `.claude/rules/` dan `.claude/skills/` sebelum mengusulkan apa pun. Kalau sudah ada dan hanya kurang tajam, usulkan penyuntingan berkas itu, bukan berkas baru.
- **Pengetahuan umum.** Hal yang sudah kamu lakukan tanpa diberi tahu tidak perlu ditulis.
- **Kejadian sesaat.** Kesalahan ketik, gangguan tool, atau kekeliruan yang langsung dibetulkan sendiri.

Kalau tidak ada yang lolos saringan, katakan begitu dan berhenti. Itu keluaran yang sah.

## Langkah 3 — Pilih tempat menyimpan

- **Skill baru** di `.claude/skills/<nama>/SKILL.md` bila polanya berupa cara kerja bertahap yang berlaku untuk banyak catatan atau banyak jenis tugas, dan butuh penjelasan lebih dari beberapa baris.
- **Tambahan pada rules** di `.claude/rules/<nama>.md` bila polanya hanya berupa aturan singkat, larangan, atau preferensi. Sisipkan ke berkas rules yang paling cocok: gaya penulisan ke `gaya-penulisan`, soal angka dan bukti ke `bukti-dan-angka`, soal git ke `alur-git`, soal pembagian kerja antar agent ke `orkestrasi-agent`, soal data dan kepatuhan ke `data-dan-kepatuhan`, soal konteks dan sesi panjang ke `manajemen-konteks`.

Ragu antara keduanya: pilih rules. Menambah satu baris ke berkas yang sudah dibaca lebih murah daripada menambah satu berkas baru yang harus ditemukan dulu.

Satu pelajaran, satu tempat. Jangan menulis hal yang sama di skill dan di rules sekaligus.

## Langkah 4 — Susun draf

Untuk skill baru, pakai format ini:

```markdown
---
name: <nama-direktori>
description: <kapan skill ini harus dipakai, sebutkan pemicu konkretnya>
---

# <Judul>

## Kapan dipakai
<pemicu yang bisa dikenali>

## Cara kerja
<langkah bernomor, konkret>

## Jangan
<kesalahan yang memicu pelajaran ini>
```

Untuk tambahan rules, siapkan potongan suntingannya: berkas mana, di bawah heading mana, dan kalimat persis yang ditambahkan. Ikuti gaya berkas itu dan jangan menulis ulang bagian lain.

Aturan penulisan draf:

- Bahasa Indonesia, tanpa emoji, kalimat perintah kepada Claude.
- Konkret sampai bisa langsung dijalankan. "Tulis dengan jelas" bukan pelajaran; "batasi satu paragraf maksimal empat kalimat" baru pelajaran.
- Jangan memasukkan angka, tanggal, atau nama mitra proyek ke dalam skill maupun rules.
- Sebutkan asal pelajarannya dalam satu frasa, misalnya "muncul dari koreksi berulang soal penulisan tabel".

## Langkah 5 — Tunjukkan sebelum menyimpan

Selalu tampilkan draf lengkapnya ke pengguna sebelum menulis berkas apa pun. Format tawaran:

```
USULAN PELAJARAN

1. <judul pelajaran>
   Tempat: skill baru .claude/skills/<nama>/SKILL.md | tambahan .claude/rules/<nama>.md
   Alasan layak simpan: <satu kalimat, sebutkan bukti dari sesi ini>
   Draf:
   <isi lengkap atau potongan suntingan>

Simpan yang nomor berapa saja?
```

Tulis berkas hanya setelah pengguna menyebut nomornya. Kalau pengguna diam atau menjawab ambigu, jangan menyimpan.

## Langkah 6 — Simpan dan laporkan

Setelah disetujui, tulis berkasnya, lalu sebutkan path yang dibuat atau disunting dan satu kalimat isi tiap perubahan. Jangan menyentuh catatan vault dalam command ini, dan jangan menyimpan pelajaran ke `.claude/vendor/` yang statusnya arsip referensi.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
