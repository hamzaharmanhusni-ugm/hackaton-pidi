---
description: Selaraskan dashboard MOC, README, catatan STATUS, dan wikilink dengan keadaan berkas vault yang sebenarnya setelah ada perubahan.
argument-hint: <opsional: cakupan folder atau catatan>
---

# Selaraskan Vault

Vault ini punya tiga titik yang gampang basi begitu catatan ditambah, diganti nama, atau dipindah: `[[00 - Beranda (MOC)]]`, `README.md`, dan `[[STATUS]]`. Command ini menyinkronkan ketiganya plus wikilink yang rusak, memakai daftar berkas nyata sebagai satu-satunya sumber kebenaran.

Ini pekerjaan menyunting, jadi berhati-hatilah: yang boleh berubah hanya bagian yang memang sudah tidak cocok dengan kenyataan.

## Langkah 1 — Tentukan cakupan

Cakupan diambil dari `$ARGUMENTS`:

- Kosong: pakai perubahan git. Jalankan `git status --porcelain` dan `git diff --name-only HEAD`, ambil berkas `.md` dan `.canvas`. Kalau tidak ada perubahan sama sekali, tetap lanjut ke Langkah 2 sebagai pemeriksaan menyeluruh, tapi katakan itu di awal.
- Nama folder: seluruh berkas di folder itu.
- Nama catatan: catatan itu ditambah semua catatan yang merujuknya.

Sebutkan cakupan yang kamu putuskan sebelum mulai, supaya pengguna bisa mengoreksi.

## Langkah 2 — Ambil daftar berkas yang nyata

Pakai `Glob` untuk mengumpulkan seluruh `.md` dan `.canvas` di vault. Kecualikan `.claude/`, `.obsidian/`, `.git/`, dan seluruh isi `.claude/vendor/`. Simpan sebagai daftar path lengkap beserta basename-nya, karena wikilink memakai basename.

Baca juga frontmatter setiap catatan yang relevan untuk mengambil `aliases`. Alias sah dipakai sebagai target wikilink, jadi jangan menyatakan tautan rusak sebelum mengecek alias.

## Langkah 3 — Bandingkan dengan yang tercantum di MOC dan README

Baca `00 - Beranda (MOC).md` dan `README.md`. Kumpulkan seluruh wikilink dan seluruh path folder atau berkas yang disebut di dalamnya. Lalu bandingkan dua arah:

- **TAK TERTAUT** — berkas ada di disk tetapi tidak muncul di MOC maupun README. Nilai dulu apakah memang layak ditautkan. Catatan isi wajib tertaut; berkas arsip, lampiran, dan turunan boleh tidak.
- **TAUTAN MATI** — MOC atau README menyebut catatan atau folder yang tidak ada lagi di disk. Cari apakah berkasnya pindah atau berganti nama; kalau ya, usulkan target barunya, bukan menghapus barisnya.
- **NAMA BERGESER** — teks tautan di MOC atau README tidak lagi sama dengan judul atau basename berkasnya.
- **STRUKTUR BERUBAH** — daftar folder di README atau peta folder di MOC tidak cocok lagi dengan folder yang benar-benar ada.

Tampilkan selisih ini sebagai tabel sebelum menyentuh berkas apa pun.

## Langkah 4 — Jalankan agent penyelaras

Panggil agent `penyelaras-vault` lewat tool `Task`, dan serahkan hasil Langkah 3 sebagai bahan. Kalau vaultnya diperiksa menyeluruh, pecah per folder dan kirim beberapa pemanggilan dalam satu blok supaya berjalan paralel.

Beri agent itu: daftar berkas nyata, daftar selisih, dan penegasan bahwa suntingan harus seminimal mungkin. Minta agent mengembalikan usulan suntingan per baris, bukan menulis ulang catatan.

## Langkah 5 — Periksa wikilink di seluruh cakupan

Untuk setiap catatan dalam cakupan, kumpulkan seluruh wikilink `[[...]]`. Cocokkan setiap target dengan basename berkas nyata atau alias di frontmatter. Abaikan bagian setelah `|` (teks tampilan) dan setelah `#` (heading).

Laporkan tautan yang tidak menemukan target. Untuk setiap tautan mati, cari kandidat penggantinya berdasarkan kemiripan nama dan isi. Kalau ada lebih dari satu kandidat, jangan memilih sendiri: tampilkan pilihannya.

## Langkah 6 — Periksa catatan STATUS

Baca `[[STATUS]]` dan bandingkan dengan bukti nyata: berkas yang ada, isi `[[Jawaban Tahap 3 (FINAL)]]`, dan riwayat commit terbaru.

Yang boleh kamu usulkan hanya koreksi yang punya bukti berkas. Jangan menaikkan status pekerjaan jadi selesai hanya karena catatannya sudah ada. Jangan menambahkan tanggal, angka, atau nama mitra baru. Kalau kamu tidak yakin sebuah item benar-benar selesai, tulis pertanyaannya ke pengguna alih-alih menebak.

## Langkah 7 — Aturan suntingan seminimal mungkin

Ini yang paling menentukan apakah command ini berguna atau merusak:

- Sunting hanya baris yang memang salah. Jangan menyentuh baris di sekitarnya.
- Jangan menulis ulang kalimat yang isinya masih benar, sekalipun kamu punya rumusan yang lebih rapi.
- Jangan mengubah urutan bagian, format tabel, gaya heading, emoji, atau callout yang sudah ada. Vault memakai emoji dan callout Obsidian; pertahankan.
- Jangan menyentuh frontmatter kecuali memang ada nilai yang salah. Bila field `updated` perlu diperbarui, ambil tanggal sebenarnya dari sistem, jangan menebak.
- Satu masalah, satu suntingan. Jangan menggabungkan beberapa perbaikan ke dalam satu penggantian blok besar.
- Berkas di `07 - Proposal & Submission` hanya boleh disunting setelah pengguna menyetujui usulannya satu per satu.
- Jangan membuat catatan baru dalam command ini. Kalau ada isi yang hilang, laporkan, jangan menambalnya dengan karangan.

## Langkah 8 — Laporkan

```markdown
# Penyelarasan Vault

Cakupan: <cakupan>

## Selisih yang ditemukan
| Jenis | Berkas atau tautan | Lokasi | Usulan |
|---|---|---|---|
| TAK TERTAUT / TAUTAN MATI / NAMA BERGESER / STRUKTUR BERUBAH | <nama> | <berkas>:<baris> | <tindakan> |

## Suntingan yang dikerjakan
- <berkas>:<baris> — <sebelum> menjadi <sesudah>

## Perlu keputusan pengguna
- <hal yang ambigu, dengan pilihannya>

## Tidak disentuh
- <hal yang sengaja dibiarkan, dengan alasan satu kalimat>
```

Kalau tidak ada selisih sama sekali, katakan vault sudah selaras dan berhenti. Jangan mengarang pekerjaan.

Tutup dengan menawarkan `/cek-angka` bila penyelarasan menyingkap angka yang berbeda antar catatan, atau `/tinjau-dokumen` bila ada catatan yang isinya ternyata sudah usang.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
