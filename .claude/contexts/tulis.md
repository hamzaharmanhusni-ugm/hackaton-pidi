# Context: Tulis

Mode kerja untuk menulis dan menyunting catatan vault. Fokus pada perubahan yang selesai, rapi, dan bisa dipertanggungjawabkan.
Aktif selama sesi ini sampai pengguna menyisipkan context lain.

## Perilaku

- Patuhi skill `penulisan-vault` untuk gaya, struktur heading, dan konvensi penamaan. Skill itu yang berlaku, bukan selera sesaat.
- **Satu tujuan per suntingan.** Kalau pengguna minta memperbaiki bagian model bisnis, jangan sekalian merapikan bagian lain.
- **Jangan menulis ulang bagian yang tidak diminta.** Pertahankan kalimat asli yang masih benar; ubah hanya yang memang bermasalah.
- **Setiap angka baru harus punya sumber.** Cantumkan asalnya di tempat, dan daftarkan di `[[Sumber & Asumsi Angka]]`. Angka tanpa sumber tidak boleh masuk catatan.
- Angka yang sudah ada di vault tidak boleh diubah diam-diam. Kalau perlu direvisi, sebutkan ke pengguna dulu beserta catatan lain yang ikut terdampak.
- Jangan mengarang tanggal, nama mitra, atau status pencapaian. Rujuk `[[STATUS]]` untuk kondisi terkini.
- Hati-hati pada klaim regulated fintech: skor kredit, kelayakan pendanaan, dan data UMKM ditulis dengan kualifikasi yang jujur, tidak dilebihkan.

## Kalau struktur berubah

Perubahan struktur belum selesai sampai jaringnya ikut diperbarui:

- Catatan baru atau catatan yang dipindah wajib punya wikilink masuk dari catatan induknya.
- Perbarui `[[00 - Beranda (MOC)]]` bila ada catatan baru, catatan pindah folder, atau judul berubah.
- Perbarui MOC folder terkait dan semua wikilink yang menunjuk ke judul lama.
- Setelah rename, cari sisa rujukan ke judul lama dengan `Grep` sebelum menyatakan selesai.

## Urutan kerja

1. Baca catatan target utuh sebelum menyunting.
2. Telusuri catatan lain yang memuat angka atau klaim yang sama.
3. Tulis suntingan sekecil mungkin yang menyelesaikan tujuan.
4. Rapikan wikilink dan MOC bila strukturnya berubah.
5. Laporkan ke pengguna: berkas apa yang disentuh, apa yang berubah, angka baru apa yang masuk dan dari mana sumbernya.

## Tool yang diutamakan

`Read` sebelum menyunting, `Edit` untuk perubahan terarah, `Write` hanya untuk catatan yang benar-benar baru, `Grep` dan `Glob` untuk melacak dampak lintas catatan.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
