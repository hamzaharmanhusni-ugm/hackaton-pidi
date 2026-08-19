---
description: Simpan keadaan kerja sesi ini ke berkas bertanggal di .claude/sesi/ supaya sesi berikutnya bisa lanjut tanpa kehilangan konteks.
argument-hint: <opsional: label singkat, misalnya revisi-proposal>
---

# Titik Simpan

Tulis catatan serah terima untuk dirimu sendiri di sesi berikutnya. Yang dinilai bukan kelengkapan, tapi apakah sesi berikutnya bisa langsung bekerja tanpa bertanya ulang ke pengguna.

## Langkah 1 — Kumpulkan keadaan nyata

Jangan mengandalkan ingatan saja. Ambil bukti dulu:

- `git status --porcelain` untuk berkas yang berubah dan belum di-commit.
- `git log --oneline -5` untuk commit terakhir.
- `git rev-parse --abbrev-ref HEAD` untuk nama branch.
- Daftar catatan yang benar-benar kamu baca atau sunting sepanjang sesi ini.

Ambil tanggal dan jam sebenarnya dari sistem, misalnya lewat `date +%Y-%m-%d-%H%M`. Jangan pernah menebak tanggal.

## Langkah 2 — Tentukan nama berkas

Direktori tujuan: `.claude/sesi/` di root vault. Buat direktorinya kalau belum ada.

Pola nama: `YYYY-MM-DD-HHmm-<label>.md`, misalnya `<tanggal>-<jam>-revisi-proposal.md` dengan tanggal dan jam dari Langkah 1. Awalan tanggal-jam membuat berkas urut secara alfabet, jadi yang terbaru selalu di bawah.

Label diambil dari `$ARGUMENTS`, diubah jadi huruf kecil dengan tanda hubung. Kalau `$ARGUMENTS` kosong, buat label dua sampai tiga kata dari pekerjaan utama sesi ini. Jangan memakai nama yang generik seperti `sesi` atau `update`.

## Langkah 3 — Tulis isinya

Pakai kerangka ini apa adanya:

```markdown
# Titik simpan: <label>

Waktu: <tanggal jam dari sistem>
Branch: <nama branch> | Commit terakhir: <sha pendek> <judul commit>

## Sudah selesai
- <apa yang tuntas, dengan path berkas yang berubah>

## Sedang dikerjakan
- <pekerjaan yang belum kelar, berhenti di titik mana persisnya, dan langkah berikutnya yang sudah jelas>

## Keputusan yang diambil
- <keputusan> — alasan: <kenapa, dan alternatif apa yang ditolak>

## Masih menggantung
- <pertanyaan yang belum terjawab, hal yang menunggu keputusan pengguna, atau angka yang belum punya sumber>

## Buka dulu di sesi berikutnya
1. <path atau wikilink catatan> — <kenapa perlu dibuka lebih dulu>
```

Aturan isi:

- Tulis path lengkap atau wikilink, jangan sekadar "catatan proposal itu".
- Bagian keputusan wajib memuat alasannya. Keputusan tanpa alasan akan diperdebatkan ulang di sesi berikutnya dan itu buang waktu.
- Jangan menyalin isi catatan vault ke sini. Cukup tunjuk lokasinya.
- Jangan mengarang status, tanggal, angka, atau kesepakatan. Yang tidak kamu verifikasi, tulis sebagai "belum diverifikasi".
- Kalau pengguna menyampaikan koreksi atau preferensi yang jelas selama sesi, catat di bagian keputusan.
- Jaga tetap ringkas. Kalau lebih dari satu layar, kamu sedang menyalin, bukan meringkas.

## Langkah 4 — Batas yang tidak boleh dilanggar

Berkas sesi adalah catatan kerja, bukan bagian isi vault. Karena itu:

- Simpan hanya di `.claude/sesi/`. Jangan pernah meletakkannya di folder bernomor `01` sampai `99` atau di root vault.
- Jangan menautkannya dari `[[00 - Beranda (MOC)]]`, `README.md`, atau catatan vault mana pun.
- Jangan menambahkan tag Obsidian ke dalamnya, supaya tidak ikut muncul di pencarian tag vault.
- Jangan menyunting catatan vault dalam command ini. Command ini hanya menulis satu berkas.

## Langkah 5 — Laporkan

Sebutkan path berkas yang dibuat dan ringkas isinya dalam tiga baris: apa yang selesai, apa yang menggantung, dan apa yang dibuka lebih dulu nanti. Jangan menampilkan ulang seluruh berkas.

## Saat melanjutkan di sesi berikutnya

Kalau pengguna minta melanjutkan pekerjaan sebelumnya, ambil berkas paling baru di `.claude/sesi/` (urutan nama sudah kronologis), baca bagian "Sedang dikerjakan" dan "Buka dulu di sesi berikutnya", lalu verifikasi ulang keadaan git dan berkas sebelum bertindak. Isi berkas sesi adalah catatan, bukan kebenaran mutlak; keadaan berkas nyata yang menang bila keduanya berbeda.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
