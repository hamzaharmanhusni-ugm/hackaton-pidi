---
description: Pecah pekerjaan besar jadi tugas paralel yang saling lepas, jalankan agent yang tepat bersamaan, lalu satukan hasilnya jadi satu keluaran runtut.
argument-hint: <pekerjaan besar yang mau dipecah>
---

# Orkestrasi pekerjaan

Pekerjaan yang diminta: `$ARGUMENTS`

## Langkah 1 — Pahami dan pecah

Kalau `$ARGUMENTS` kosong, minta pengguna menyebutkan pekerjaannya lalu berhenti.

Baca `[[00 - Beranda (MOC)]]` dan `[[STATUS]]` secukupnya untuk tahu catatan mana yang terlibat. Lalu pecah pekerjaan menjadi tugas-tugas yang masing-masing:

- punya satu keluaran yang jelas dan bisa dinilai selesai atau belum,
- bisa dikerjakan tanpa menunggu tugas lain,
- menyentuh kumpulan catatan yang tidak beririsan dengan tugas lain.

Kalau sebuah tugas tidak memenuhi ketiganya, jangan dipaksa masuk paralel. Pindahkan ke gelombang berikutnya.

## Langkah 2 — Kapan paralel TIDAK boleh dipakai

Ini aturan keras. Jalankan berurutan, bukan paralel, bila salah satu terpenuhi:

1. **Satu tugas butuh hasil tugas lain.** Contoh: menyusun rencana dulu baru mengeksekusinya, atau memverifikasi angka dulu baru menulis narasi yang memakai angka itu. Tugas hilir harus menunggu hulu selesai.
2. **Dua tugas atau lebih akan menyunting catatan yang sama.** Dua agent yang menulis ke berkas yang sama akan saling menimpa. Kalau irisan berkas tidak bisa dihindari, gabungkan jadi satu tugas dan berikan ke satu agent.
3. Tugas hanya akan bermakna setelah keputusan pengguna belum diambil. Tanyakan dulu.
4. Pekerjaannya kecil dan satu agent sudah cukup. Paralel menambah biaya tanpa menambah hasil, jadi kerjakan langsung.

Agent yang hanya membaca (`Read, Grep, Glob`) selalu aman dijalankan bersamaan, bahkan pada catatan yang sama.

## Langkah 3 — Pilih agent dari inventaris

Pilih hanya dari daftar ini. Jangan mengarang nama agent.

| Agent | Dipakai untuk |
|---|---|
| `perencana` | memecah pekerjaan, menyusun tahapan, menimbang risiko |
| `arsitek-solusi` | merumuskan pendekatan produk, mesin skor, dan arsitektur di tingkat konsep |
| `peninjau-dokumen` | menilai kualitas, kejelasan, dan kredibilitas isi catatan |
| `pemeriksa-angka` | menelusuri angka dan klaim kuantitatif sampai ke sumbernya |
| `peninjau-kepatuhan` | memeriksa klaim yang berisiko dari sisi regulasi dan janji ke pengguna |
| `penyelaras-vault` | menyamakan istilah, angka, dan narasi lintas catatan |
| `perapi-vault` | membenahi struktur, wikilink, MOC, dan penempatan berkas |
| `validator-persona` | menguji catatan dari sudut pandang persona UMKM F&B dan pemodal |

Satu tugas satu agent. Kalau satu tugas terasa butuh dua agent, itu tanda tugasnya masih perlu dipecah.

## Langkah 4 — Susun rencana orkestrasi dan tampilkan

Sebelum menjalankan apa pun, tampilkan:

```markdown
## Rencana orkestrasi

Gelombang 1 (paralel)
| # | Tugas | Agent | Catatan yang disentuh | Menulis? |
|---|---|---|---|---|
| 1 | ... | ... | ... | ya / tidak |

Gelombang 2 (menunggu gelombang 1)
| # | Tugas | Agent | Menunggu hasil dari | Alasan tidak paralel |
|---|---|---|---|---|
```

Periksa sendiri: adakah dua baris dalam satu gelombang yang kolom "Catatan yang disentuh"-nya beririsan dan keduanya menulis? Kalau ada, perbaiki pembagiannya sebelum lanjut.

Kalau ada gelombang yang menyunting catatan, minta konfirmasi pengguna dulu. Kalau semua tugas hanya membaca, langsung jalankan.

## Langkah 5 — Jalankan

Untuk setiap gelombang, kirim semua panggilan `Task` dalam **satu blok yang sama** supaya benar-benar berjalan bersamaan. Tiap brief agent harus memuat:

- tugas spesifiknya dan keluaran yang diharapkan,
- daftar path catatan yang boleh dibaca dan, kalau menulis, yang boleh diubah,
- larangan menyentuh catatan di luar daftar itu,
- batasan wajib: bahasa Indonesia, tanpa mengarang angka, tanggal, nama mitra, atau status, tanpa menyebut deadline spesifik, klaim soal skor kredit dan kelayakan pendanaan harus proporsional,
- perintah menutup laporan dengan ringkasan singkat, bukan salinan seluruh isi catatan.

Jangan menjalankan gelombang berikutnya sebelum seluruh tugas gelombang sebelumnya selesai. Serahkan hasil gelombang sebelumnya ke brief gelombang berikutnya, ringkas saja: temuan, keputusan, berkas yang berubah, pertanyaan yang belum terjawab.

Kalau satu agent gagal atau hasilnya kosong, jangan diam-diam menambalnya sendiri. Catat kegagalannya, lanjutkan tugas lain yang tidak bergantung padanya, dan laporkan di akhir.

## Langkah 6 — Satukan hasil

Jangan menempelkan keluaran mentah tiap agent berurutan. Tulis ulang jadi satu keluaran yang runtut:

```markdown
# Hasil Orkestrasi

Pekerjaan: <ringkasan satu kalimat>
Agent yang dijalankan: <daftar, per gelombang>

## Ringkasan
<satu paragraf: apa yang berubah dan apa kesimpulannya>

## Temuan gabungan
<temuan seluruh agent, sudah dibuang duplikatnya, diurutkan dari yang paling penting>

## Pertentangan antar agent
<kalau dua agent berbeda kesimpulan, tampilkan keduanya dan sebutkan mana yang lebih kuat beserta alasannya. Jangan disembunyikan.>

## Catatan yang berubah
| Catatan | Perubahan | Oleh agent |
|---|---|---|

## Yang belum selesai
<tugas gagal, pertanyaan terbuka, hal yang butuh keputusan pengguna>

## Langkah berikutnya
<tindakan konkret, sebutkan command yang relevan>
```

Tutup dengan menyarankan `/tinjau-dokumen` bila ada catatan yang berubah, atau `/cek-angka` bila ada angka yang tersentuh.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
