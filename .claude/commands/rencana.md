---
description: Susun rencana pekerjaan dokumen lewat agent perencana, lalu berhenti menunggu konfirmasi sebelum menyentuh catatan apa pun.
argument-hint: <pekerjaan dokumen yang mau direncanakan>
---

# Rencana pekerjaan dokumen

Permintaan pengguna: `$ARGUMENTS`

Kamu sedang menyiapkan rencana kerja untuk vault RetailMind AI. **Jangan membuat, menyunting, memindahkan, atau menghapus catatan apa pun dalam command ini.** Tugasmu berhenti tepat setelah rencana disajikan.

## Langkah 1 — Pastikan permintaannya jelas

Kalau `$ARGUMENTS` kosong atau terlalu kabur untuk direncanakan (misalnya hanya "rapikan vault"), ajukan maksimal tiga pertanyaan penajam lalu berhenti. Jangan menebak ruang lingkup.

Kalau permintaannya jelas, tulis ulang dalam satu paragraf pendek dengan bahasamu sendiri, lalu lanjut.

## Langkah 2 — Kumpulkan konteks seperlunya

Sebelum memanggil agent, kumpulkan konteks murah dengan `Read`, `Grep`, dan `Glob`:

- Baca `[[00 - Beranda (MOC)]]` untuk memetakan catatan mana yang bersinggungan dengan permintaan.
- Baca `[[STATUS]]` untuk tahu kondisi terkini pekerjaan dan apa yang belum selesai.
- Kalau permintaan menyangkut angka, klaim kuantitatif, atau proyeksi, buka `[[Sumber & Asumsi Angka]]`.
- Kalau permintaan menyangkut submission lomba, buka `[[Jawaban Tahap 3 (FINAL)]]`.
- `Grep` kata kunci dari permintaan ke seluruh vault untuk menemukan catatan yang sudah membahas topik itu, supaya rencana tidak menduplikasi isi yang sudah ada.

Catat daftar berkas relevan beserta alasan singkat kenapa relevan. Jangan membaca seluruh vault; berhenti begitu kamu punya gambaran yang cukup.

## Langkah 3 — Panggil agent perencana

Panggil agent `perencana` lewat tool `Task`. Kirimkan brief yang memuat, tanpa disingkat:

1. Permintaan asli apa adanya.
2. Hasil penulisan ulang di Langkah 1.
3. Daftar berkas relevan dari Langkah 2 dengan path lengkap.
4. Batasan kerja yang berlaku: bahasa Indonesia, tanpa mengarang angka atau tanggal, tanpa menyebut deadline spesifik, konteks lomba fintech yang diawasi regulator sehingga klaim soal skor kredit dan kelayakan pendanaan tidak boleh dilebihkan.
5. Perintah eksplisit agar agent tidak menyunting berkas, hanya menyusun rencana.

## Langkah 4 — Sajikan rencana

Tampilkan hasil agent `perencana` dalam format berikut, apa adanya tanpa kamu perhalus jadi kabur:

```markdown
# Rencana: <judul pekerjaan>

## Yang dipahami
<satu paragraf: apa yang diminta dan apa hasil akhir yang dianggap selesai>

## Catatan yang tersentuh
| Catatan | Tindakan | Alasan |
|---|---|---|
| [[nama catatan]] | tulis baru / ubah bagian X / hanya dibaca | ... |

## Tahapan
### Tahap 1 — <nama>
- langkah konkret, satu baris satu tindakan
### Tahap 2 — <nama>
- ...

## Ketergantungan
- <tahap mana harus selesai sebelum tahap mana, dan kenapa>

## Risiko
- TINGGI: <risiko yang bisa merusak kredibilitas submission>
- SEDANG: <risiko konsistensi antar catatan>
- RENDAH: <risiko kosmetik>

## Yang perlu diverifikasi dulu
- <angka, klaim, atau status yang belum punya sumber di [[Sumber & Asumsi Angka]]>

## Bobot pekerjaan
BESAR / SEDANG / KECIL, dengan satu kalimat alasan.
```

Aturan isi rencana:

- Setiap langkah harus menyebut catatan tujuan secara spesifik, bukan "perbarui dokumen terkait".
- Jangan menuliskan angka baru, tanggal, nama mitra, atau status yang belum ada di vault. Kalau rencana butuh angka, tulis sebagai langkah verifikasi, bukan sebagai fakta.
- Kalau rencana menyentuh klaim kuantitatif, tambahkan langkah menjalankan `/cek-angka` sebelum pekerjaan dianggap selesai.
- Kalau rencana menyentuh catatan submission atau klaim produk ke pihak luar, tambahkan langkah menjalankan `/tinjau-dokumen`.
- Kalau ada tahapan yang benar-benar tidak saling bergantung, sebutkan bahwa tahapan itu bisa dijalankan lewat `/orkestrasi`.

## Langkah 5 — Berhenti dan tunggu konfirmasi

Tutup dengan baris ini persis:

```
MENUNGGU KONFIRMASI: jalankan rencana ini? (ya / ubah: ... / ganti pendekatan: ...)
```

Setelah itu **berhenti**. Jangan memulai tahap mana pun, jangan menyiapkan draf, jangan menulis berkas sementara. Baru bergerak setelah pengguna menjawab. Kalau jawabannya "ubah", perbaiki rencana lalu tunggu konfirmasi lagi.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
