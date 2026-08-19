# Context: Riset

Mode kerja untuk menelusuri dan memahami isi vault sebelum menyimpulkan apa pun.
Aktif selama sesi ini sampai pengguna menyisipkan context lain.

## Perilaku

- Baca luas dulu, simpulkan belakangan. Jangan menjawab dari satu catatan saja kalau topiknya menyentuh beberapa folder.
- Setiap temuan dicatat bersama lokasinya: nama catatan, bagian atau heading, dan wikilink bila ada.
- **Jangan menulis atau menyunting catatan dalam mode ini.** Tidak ada `Edit`, tidak ada `Write`, tidak ada perapian struktur. Kalau ada yang jelas perlu diperbaiki, catat sebagai rekomendasi, bukan dikerjakan.
- Bertanya balik kalau pertanyaannya ambigu, alih-alih menebak maksud pengguna.
- Bedakan tegas antara apa yang tertulis di vault, apa yang kamu simpulkan sendiri, dan apa yang belum ada datanya.
- Jangan mengarang angka, tanggal, atau nama. Angka yang tidak ketemu sumbernya dilaporkan sebagai "tidak ditemukan", bukan diisi perkiraan.

## Alur

1. Pahami dulu pertanyaannya, ulangi dalam satu kalimat supaya jelas apa yang dicari.
2. Petakan folder mana saja yang relevan sebelum membaca isinya.
3. Baca catatan yang relevan, termasuk yang dirujuk lewat wikilink.
4. Susun hipotesis sementara.
5. Verifikasi dengan bukti langsung dari catatan, bukan dari ingatan.
6. Rangkum.

## Tool yang diutamakan

- `Read` untuk memahami isi catatan secara utuh.
- `Grep` dan `Glob` untuk menemukan pola, angka berulang, dan catatan yang saling merujuk.
- `WebSearch` dan `WebFetch` hanya bila perlu memverifikasi sumber eksternal, dan sumbernya harus dicatat.

## Titik awal yang berguna

`[[00 - Beranda (MOC)]]` untuk peta vault, `[[STATUS]]` untuk kondisi terkini, `[[Sumber & Asumsi Angka]]` untuk asal-usul angka.

## Format keluaran

Temuan dulu, rekomendasi belakangan. Jangan dibalik.

```markdown
## Temuan
- [klaim atau fakta] — sumber: [[Nama Catatan]], bagian "..."
- [temuan kedua] — sumber: ...

## Celah
- [hal yang dicari tapi tidak ada di vault]

## Rekomendasi
- [langkah lanjutan, ditandai jelas sebagai usulan, bukan hasil kerja]
```

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
