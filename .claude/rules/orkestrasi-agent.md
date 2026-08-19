# Orkestrasi Agent

Vault ini punya delapan agent. Pilih berdasarkan jenis pekerjaannya, bukan berdasarkan yang paling sering dipakai.

## Kapan memakai agent yang mana

| Agent | Tugas | Pakai ketika |
|---|---|---|
| `perencana` | Menyusun rencana kerja bertahap | Permintaan besar menyentuh banyak catatan atau banyak folder |
| `arsitek-solusi` | Merancang struktur produk, mesin skor, dan arsitektur | Keputusan rancangan yang memengaruhi banyak catatan sekaligus |
| `peninjau-dokumen` | Meninjau kejelasan, struktur, dan kekuatan argumen catatan | Setelah menulis atau menyunting catatan penting |
| `pemeriksa-angka` | Menelusuri angka dan sumbernya lintas catatan | Ada angka baru, angka berubah, atau sebelum menyatakan dokumen siap |
| `peninjau-kepatuhan` | Memeriksa klaim regulatori, kredit, dan data pribadi | Sebelum publikasi apa pun yang menyinggung kelayakan kredit atau status regulatori |
| `penyelaras-vault` | Menyamakan istilah, angka, dan pesan lintas catatan | Setelah perubahan yang merambat ke banyak catatan |
| `perapi-vault` | Merapikan wikilink, MOC, penamaan, dan catatan yatim | Perawatan berkala atau setelah pemindahan catatan |
| `validator-persona` | Menjalankan dan menilai validasi persona sintetis | Menguji asumsi pengguna atau memperbarui hasil validasi |

Aturan pemilihan:

- Permintaan yang menyentuh lebih dari tiga catatan selalu dimulai dari `perencana`.
- Setiap dokumen yang akan masuk `07 - Proposal & Submission` wajib melewati `pemeriksa-angka` dan `peninjau-kepatuhan` sebelum dinyatakan siap.
- Jangan memakai agent untuk pekerjaan sepele yang bisa diselesaikan dengan satu pembacaan berkas.
- Jangan mengarang nama agent lain. Delapan nama di atas adalah daftar lengkapnya.

## Jalankan paralel untuk pekerjaan yang saling bebas

Kirim beberapa agent dalam satu giliran ketika pekerjaannya tidak saling bergantung dan tidak menyentuh catatan yang sama.

Contoh yang benar:

```
Jalankan tiga agent paralel:
1. pemeriksa-angka  : telusuri angka pasar di 02 - Riset & Masalah
2. peninjau-kepatuhan : periksa klaim kredit di 03 - Solusi & Produk
3. perapi-vault     : cari wikilink rusak di 99 - Kanvas & Referensi
```

Ketiganya membaca folder berbeda dan tidak ada yang menyunting catatan yang sama, jadi aman.

Contoh yang salah:

```
Jalankan berurutan padahal saling bebas:
pemeriksa-angka dulu, tunggu selesai, baru peninjau-kepatuhan, tunggu lagi, baru perapi-vault
```

## Larangan paralel ketika catatan bertabrakan

- Dilarang menjalankan dua agent atau lebih secara paralel bila ada kemungkinan mereka menyunting catatan yang sama. Suntingan bersamaan menimpa satu sama lain tanpa peringatan.
- Sebelum menjalankan paralel, tuliskan cakupan berkas tiap agent. Kalau cakupannya beririsan, jalankan berurutan.
- `penyelaras-vault` dan `perapi-vault` menyunting lintas folder. Jalankan keduanya sendirian, jangan bersamaan dengan agent penyunting lain.
- Pola aman untuk pekerjaan yang beririsan: jalankan agent pembaca secara paralel dulu untuk mengumpulkan temuan, lalu terapkan seluruh perubahan secara berurutan di satu tempat.
- Kalau ragu apakah cakupannya beririsan, pilih berurutan. Kehilangan suntingan lebih mahal daripada waktu tunggu.

## Satukan hasil jadi satu keluaran

- Jangan menempelkan laporan tiap agent satu per satu. Pengguna membaca satu keluaran, bukan tiga.
- Gabungkan temuan yang sama dari beberapa agent menjadi satu butir, sebutkan bahwa lebih dari satu agent menemukannya.
- Hilangkan pengulangan: kalimat pembuka, ringkasan cakupan, dan penutup dari tiap agent dibuang.
- Kalau dua agent bertentangan, jangan sembunyikan. Tampilkan kedua posisi, sebutkan agent mana yang mengatakan apa, lalu berikan rekomendasi.
- Urutkan hasil gabungan berdasarkan tingkat kepentingan, bukan berdasarkan urutan agent selesai.

Format keluaran gabungan:

```markdown
## Ringkasan
[dua sampai empat kalimat, hasil gabungan, bukan per agent]

## Temuan
| Prioritas | Temuan | Lokasi | Sumber temuan |
|---|---|---|---|
| Tinggi | ... | [[Catatan]] | pemeriksa-angka |

## Pertentangan antar agent
[hanya bila ada; kalau tidak ada, hapus bagian ini]

## Tindakan berikutnya
1. ...
```

## Batas

- Maksimal empat agent paralel dalam satu giliran. Lebih dari itu hasilnya sulit disatukan.
- Beri tiap agent instruksi cakupan yang tegas: folder mana, catatan mana, apa yang dicari, format apa yang dikembalikan.
- Agent tidak melihat percakapanmu. Setiap instruksi harus lengkap berdiri sendiri.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
