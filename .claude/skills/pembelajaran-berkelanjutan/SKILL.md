---
name: pembelajaran-berkelanjutan
description: Dipakai di akhir sesi kerja yang panjang, atau begitu pengguna mengoreksi hal yang sama lebih dari sekali. Menangkap pelajaran berulang dari sesi di vault ini (preferensi gaya penulisan, keputusan yang sudah final, pola kerja yang terbukti berhasil) lalu mengusulkannya untuk disimpan.
---

# Pembelajaran Berkelanjutan

Tujuannya satu: hal yang sudah dikoreksi sekali tidak perlu dikoreksi lagi di sesi berikutnya. Skill ini mengubah koreksi berulang menjadi aturan tertulis yang dibaca Claude otomatis.

Ini bukan buku harian sesi. Yang ditangkap hanya pelajaran yang akan **berlaku lagi** di sesi lain.

## Kapan dijalankan

- Di akhir sesi panjang, sebelum konteks ditutup.
- Begitu kamu sadar pengguna mengoreksi hal yang sama untuk kedua kalinya.
- Saat pengguna memanggil `/belajar`.
- Setelah satu putaran kerja besar selesai, misalnya satu bab proposal rampung ditinjau.

Hook `sesi-selesai.js` di `.claude/hooks` bisa mengingatkan di akhir sesi, tetapi keputusan menyimpan tetap lewat skill ini.

## Langkah kerja

1. **Baca ulang jalannya sesi.** Cari titik di mana pengguna membalikkan, mengoreksi, atau menolak sesuatu yang kamu lakukan.
2. **Kelompokkan.** Gabungkan koreksi yang sebenarnya soal yang sama menjadi satu pelajaran.
3. **Saring** dengan daftar di bawah. Buang yang tidak lolos.
4. **Rumuskan** tiap pelajaran jadi satu kalimat perintah yang bisa langsung dieksekusi.
5. **Tanyakan ke pengguna** sebelum menulis apa pun ke berkas.
6. **Simpan** hanya yang disetujui, ke tempat yang benar.

## Saringan: apa yang layak disimpan

Simpan kalau memenuhi **semua** ini:

- Terjadi lebih dari sekali, atau jelas akan terjadi lagi.
- Berlaku untuk vault ini secara umum, bukan hanya untuk satu catatan.
- Bisa ditulis sebagai instruksi konkret, bukan nasihat kabur.
- Masih akan benar minggu depan.

Tiga jenis yang paling berharga di vault ini:

| Jenis | Contoh bentuknya |
|---|---|
| Preferensi gaya penulisan | "Pengguna menolak kalimat superlatif di proposal; tulis klaim dengan angka bersumber atau tidak sama sekali." |
| Keputusan yang sudah final | "Positioning produk sudah dikunci sebagai Business Health Scoring; jangan menawarkan ulang alternatif positioning." |
| Pola yang terbukti berhasil | "Sebelum menulis bab baru, telusuri dulu catatan terkait lalu ajukan kerangka; urutan ini yang diterima pengguna." |

## Saringan: apa yang TIDAK disimpan

- Salah ketik, salah baca satu kali, atau kekeliruan sepele yang sudah diperbaiki di tempat.
- Fakta isi proyek. Angka, status, dan tanggal tempatnya di vault (`[[Sumber & Asumsi Angka]]`, `[[STATUS]]`), bukan di `.claude`.
- Hal yang hanya berlaku untuk satu catatan tertentu.
- Ringkasan apa yang dikerjakan hari ini. Itu bukan pelajaran.
- Preferensi yang kamu duga sendiri tanpa pernah dinyatakan pengguna.
- Aturan yang bertentangan dengan `.claude/rules` yang sudah ada. Kalau bertentangan, laporkan konfliknya, jangan diam-diam menimpa.

## Ke mana disimpan

Dua tujuan saja:

**`.claude/rules/<nama>.md`** — untuk pelajaran pendek yang selalu berlaku. Preferensi gaya masuk ke `gaya-penulisan`, urusan angka dan bukti ke `bukti-dan-angka`, urusan data dan klaim ke `data-dan-kepatuhan`, urusan konteks ke `manajemen-konteks`, urusan koordinasi agent ke `orkestrasi-agent`, urusan git ke `alur-git`. Utamakan **menambah satu-dua baris** ke rule yang sudah ada.

**`.claude/skills/<nama>/SKILL.md`** — hanya kalau pelajarannya berupa prosedur bertahap yang punya pemicu jelas dan tidak muat sebagai satu baris rule. Membuat skill baru adalah pengecualian, bukan kebiasaan.

Kalau ragu di antara keduanya, pilih rule.

## Wajib minta persetujuan

Jangan pernah menulis ke `.claude/rules` atau `.claude/skills` tanpa persetujuan eksplisit pengguna di sesi itu juga. Ajukan dengan format ini:

```markdown
## Usulan pelajaran dari sesi ini

### 1. <judul singkat>
Bukti: pengguna mengoreksi hal ini pada <situasi A> dan <situasi B>.
Kalimat yang akan disimpan: "<satu kalimat instruksi>"
Tujuan: `.claude/rules/gaya-penulisan.md` (tambah baris)

### 2. <judul singkat>
...

Setujui yang mana? Balas nomornya, atau "tidak usah".
```

Tunggu jawaban. Diam bukan persetujuan. Kalau pengguna hanya menyetujui sebagian, simpan yang itu saja dan jangan tawarkan ulang sisanya di sesi yang sama.

## Menjaga simpanan tidak jadi sampah

Aturan yang menumpuk tanpa dirawat akan diabaikan, dan aturan yang diabaikan lebih buruk daripada tidak ada aturan.

- **Gabung, jangan tambah.** Sebelum menulis baris baru, baca rule tujuannya. Kalau sudah ada baris yang mirip, pertajam baris itu.
- **Satu pelajaran satu baris.** Kalau butuh satu paragraf penuh, biasanya pelajarannya belum matang.
- **Batas wajar.** Kalau satu berkas rule sudah lewat sekitar 40 baris, rapikan dulu sebelum menambah.
- **Buang yang mati.** Kalau sebuah aturan lahir dari keputusan yang kini sudah berubah, usulkan penghapusannya.
- **Nol duplikat.** Satu aturan hidup di satu tempat. Jangan menyalin aturan yang sama ke rule lain supaya lebih aman.
- **Tanpa tanggal dan tanpa riwayat.** Rule berisi aturan yang berlaku sekarang, bukan catatan kapan aturan itu lahir.
- Sekali waktu, saat diminta, telusuri seluruh `.claude/rules` dan laporkan baris yang saling tumpang tindih atau sudah tidak relevan.

## Batas kewenangan

Kamu mengusulkan, pengguna memutuskan. Jangan menyimpan pelajaran tentang orang, jangan menyimpan kredensial, dan jangan memindahkan isi vault ke `.claude` dengan alasan supaya lebih cepat diingat.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
