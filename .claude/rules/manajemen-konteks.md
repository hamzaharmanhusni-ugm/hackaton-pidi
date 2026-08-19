# Manajemen Konteks

Vault ini berisi puluhan catatan panjang yang saling menautkan. Membaca semuanya sekaligus membuat konteks penuh sebelum pekerjaan sebenarnya dimulai, dan kualitas jawaban turun justru ketika bahannya paling banyak. Aturan di bawah menjaga konteks tetap ramping tanpa mengorbankan ketelitian.

## Cari dulu, baca kemudian

- Mulai dari pencarian teks, bukan dari membuka berkas. Cari istilah, angka, atau nama catatan yang relevan, baru buka yang benar-benar kena.
- Jangan membuka seluruh isi folder hanya untuk mencari satu bagian. Buka berkasnya, lompat ke bagian yang dicari.
- Untuk catatan panjang, baca bagian yang relevan lebih dulu. Baca utuh hanya kalau memang sedang meninjau atau menulis ulang catatan itu.
- [[00 - Beranda (MOC)]] adalah peta. Pakai untuk menentukan catatan mana yang perlu dibuka, bukan sebagai pengganti isinya.
- Jangan membaca ulang catatan yang sudah dibaca di sesi yang sama. Kalau isinya sudah ada di konteks, pakai yang ada.

## Delegasikan penelusuran luas

- Pekerjaan yang butuh menyapu banyak catatan diserahkan ke agent, supaya hanya kesimpulannya yang masuk ke konteks utama. Yang paling sering: `pemeriksa-angka` untuk audit angka, `perapi-vault` untuk mencari catatan yatim dan tautan mati.
- Beberapa penelusuran yang saling lepas dikirim bersamaan dalam satu giliran, bukan berurutan.
- Yang diminta dari agent adalah temuan beserta lokasinya, bukan salinan isi catatan.
- Jangan mendelegasikan pekerjaan yang hanya menyentuh satu catatan. Biaya menyiapkan agent lebih besar daripada membacanya langsung.

## Padatkan di batas fase

Titik aman untuk `/compact`:

- Selesai menelusuri, sebelum mulai menulis.
- Selesai satu bab atau satu dokumen, sebelum pindah ke berikutnya.
- Selesai satu putaran validasi, sebelum putaran berikutnya.
- Selesai audit angka, setelah daftar tindakannya dicatat.

Titik yang haram dipadatkan:

- Di tengah menyunting satu catatan.
- Sebelum temuan penting dituliskan ke catatan atau ke jawaban pengguna.
- Ketika pengguna baru saja memberi koreksi yang belum diterapkan.

Sebelum memadatkan, tuliskan dulu yang tidak boleh hilang: keputusan yang diambil, angka yang sedang diperiksa, dan langkah berikutnya.

## Simpan keadaan sebelum sesi panjang berakhir

- Jalankan `/titik-simpan` sebelum sesi panjang ditutup. Catatan sesi masuk ke `.claude/sesi/`, bukan ke folder bernomor.
- Yang disimpan: yang sudah selesai, yang sedang dikerjakan, keputusan beserta alasannya, hal yang menggantung, dan catatan mana yang perlu dibuka lebih dulu nanti.
- Keputusan yang sudah final dipindahkan ke catatan vault yang sesuai, bukan dibiarkan hanya hidup di catatan sesi.

## Jaga keluaran tetap ramping

- Jangan menyalin isi catatan ke jawaban kalau cukup menautkannya.
- Kutip seperlunya, secukup yang dibutuhkan untuk menunjukkan letak masalahnya.
- Laporan panjang yang tidak dibaca sama nilainya dengan laporan yang tidak dibuat. Dahulukan temuan yang bisa ditindaklanjuti.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
