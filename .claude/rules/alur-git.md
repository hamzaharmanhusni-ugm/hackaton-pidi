# Alur Git di Vault

Vault ini adalah repo git biasa, tetapi juga disinkronkan otomatis oleh plugin Obsidian Git. Artinya riwayat berisi campuran commit manual dan commit backup otomatis. Perlakukan riwayat sebagai sesuatu yang bisa berubah tanpa kamu sadari.

## Kenyataan yang harus diingat

- Plugin Obsidian Git membuat commit backup sendiri dengan pesan seragam bergaya `vault backup: <waktu>`. Commit itu bukan buatanmu dan tidak menandai selesainya pekerjaan.
- Perubahan yang belum kamu commit bisa ikut tersapu ke dalam commit backup otomatis kapan saja.
- Karena itu jangan pernah menganggap `git status` bersih berarti pekerjaanmu sudah ter-commit dengan pesan yang benar.
- Berkas konfigurasi `.obsidian/` sering berubah sendiri saat vault dibuka. Perubahan itu bukan bagian dari pekerjaanmu.

## Format pesan commit

```
<jenis>: <ringkasan dalam bahasa Indonesia>

<badan opsional: alasan perubahan, catatan yang terdampak>
```

Jenis yang dipakai:

| Jenis | Untuk |
|---|---|
| `docs` | Menulis atau menyunting isi catatan |
| `fix` | Memperbaiki angka salah, wikilink rusak, klaim keliru |
| `refactor` | Memindah, memecah, atau menggabungkan catatan tanpa mengubah maknanya |
| `chore` | Konfigurasi, berkas `.claude/**`, penataan folder |
| `feat` | Menambah artefak baru yang berdiri sendiri, misalnya kanvas atau modul baru |

Aturan penulisan pesan:

- Ringkasan berbahasa Indonesia, huruf kecil di awal setelah jenis, tanpa titik penutup, maksimal sekitar 70 karakter.
- Ringkasan menyebut apa yang berubah, bukan berkas apa yang disentuh. Tulis `fix: samakan proyeksi pendapatan di proposal dan pitch`, bukan `fix: update 3 files`.
- Kalau perubahan menyentuh angka, sebutkan itu di badan commit dan sebut bahwa [[Sumber & Asumsi Angka]] ikut diperbarui.
- Tanpa emoji di pesan commit.

## Satu commit satu tujuan

- Satu commit menyelesaikan satu maksud. Jangan menggabung penulisan catatan baru, perbaikan angka, dan penataan folder dalam satu commit.
- Kalau kamu terlanjur mengerjakan beberapa hal, pisahkan saat staging dengan `git add` per berkas. Jangan `git add -A` sebagai kebiasaan.
- Perubahan pada `.claude/**` selalu jadi commit tersendiri, terpisah dari perubahan isi vault.
- Perubahan otomatis pada `.obsidian/**` jangan dicampur dengan commit isi. Kalau ikut ter-stage tanpa alasan, keluarkan dari staging.
- Perubahan angka lintas catatan boleh berada dalam satu commit, karena memang satu tujuan: menjaga konsistensi.

## Jangan pernah commit rahasia

- Dilarang meng-commit kunci API, token, kata sandi, cookie sesi, atau berkas `.env` dalam bentuk apa pun.
- Sebelum commit, periksa isi perubahan dengan `git diff --staged` dan cari pola seperti `key`, `token`, `secret`, `password`, `Bearer`.
- Berkas plugin seperti `.obsidian/plugins/*/data.json` bisa memuat token. Jangan pernah meng-commit-nya tanpa memeriksa isinya lebih dulu.
- Kalau rahasia terlanjur masuk ke riwayat, hentikan pekerjaan, laporkan ke pengguna, dan minta kunci itu dicabut lalu diganti. Menghapusnya di commit berikutnya tidak cukup, karena riwayat masih menyimpannya.
- Aturan lengkap soal data sensitif ada di rule data-dan-kepatuhan.

## Prosedur sebelum dan sesudah commit

1. Jalankan `git status` dan `git log --oneline -5` untuk melihat apakah ada commit backup otomatis yang baru menyusul.
2. Kalau ada commit backup yang sudah memuat sebagian perubahanmu, jangan mencoba membatalkannya. Lanjutkan dengan commit manual untuk sisanya dan jelaskan maksud utuhnya di badan commit.
3. Periksa `git diff --staged` sepenuhnya sebelum commit.
4. Commit dengan pesan sesuai format di atas.
5. Jalankan `git status` sekali lagi setelah commit. Plugin bisa menyisakan perubahan baru yang muncul setelahnya.

## Yang tidak boleh dilakukan

- Jangan menulis ulang riwayat dengan `rebase -i`, `commit --amend`, atau `reset --hard` di vault ini. Sinkronisasi otomatis membuat penulisan ulang riwayat berisiko menghilangkan pekerjaan.
- Jangan `push --force`.
- Jangan commit atau push kecuali pengguna memintanya.
- Jangan menghapus commit backup otomatis, meskipun terlihat berisik.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
