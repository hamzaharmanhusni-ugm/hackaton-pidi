---
description: Audit konsistensi angka lintas catatan vault memakai agent pemeriksa-angka, lalu usulkan perbaikan tanpa mengubah apa pun sebelum pengguna setuju.
argument-hint: <nama catatan atau folder, kosongkan untuk seluruh vault>
---

# Cek Angka

Jalankan audit konsistensi angka atas cakupan yang diminta. Ini pekerjaan baca dan lapor. Kamu tidak boleh mengubah satu pun catatan sebelum pengguna menyetujui usulan.

## 1. Tentukan cakupan

Cakupan diambil dari `$ARGUMENTS`:

- Kosong: seluruh vault. Lewati `.claude/`, `.obsidian/`, `.git/`, dan seluruh isi `.claude/vendor/`.
- Nama catatan: catatan itu ditambah semua catatan yang dirujuk wikilink di dalamnya.
- Nama folder: semua berkas `.md` di dalam folder tersebut.

Sebutkan cakupan yang kamu putuskan di awal keluaran, supaya pengguna bisa mengoreksi.

## 2. Kumpulkan angka

Jalankan subagent `pemeriksa-angka` atas cakupan. Kalau cakupannya besar, pecah per folder dan kirim beberapa pemanggilan sekaligus dalam satu giliran supaya berjalan paralel.

Yang dihitung sebagai angka: nominal rupiah dan kelipatannya (rb, jt, juta, miliar, K, M), persentase, rentang (`Rp5-15jt`), jumlah unit usaha atau pengguna, rasio dan multiplier, skor, jumlah bulan atau tahun, dan jumlah hasil uji. Catat setiap kemunculan lengkap dengan berkas dan nomor baris.

## 3. Cocokkan ke sumber

Baca `[[Sumber & Asumsi Angka]]` dan cocokkan setiap angka ke barisnya. Beri klasifikasi sesuai catatan itu: tersitasi, keputusan internal, proyeksi atau estimasi internal, atau turunan.

- Angka yang tidak ada di tabel sumber: tandai `TANPA SUMBER`.
- Angka turunan: hitung ulang dari komponennya. Kalau hasil hitung tidak cocok dengan yang tertulis, tandai `TURUNAN SALAH` dan tunjukkan perhitungannya.
- Angka proyeksi atau estimasi yang ditulis seolah fakta pasti: tandai `KLAIM TERLALU KUAT`.

## 4. Cari nilai yang sama muncul berbeda

Untuk setiap angka penting, cari kemunculannya di seluruh vault, bukan hanya di cakupan. Bandingkan nilainya.

Sebelum menyatakan konflik, periksa konteksnya dulu. Nilai yang berbeda bukan konflik kalau memang skenarionya berbeda, misalnya base case dan skenario optimistis, atau angka sebelum dan sesudah revisi produk. Kalau konteksnya sama tetapi nilainya beda, itu `BEDA` dan wajib dilaporkan.

## 5. Keluarkan tabel temuan

```
AUDIT ANGKA
Cakupan: <cakupan yang diperiksa>

| Angka | Nilai ditemukan | Lokasi | Klasifikasi | Status |
|---|---|---|---|---|
| <nama angka> | <nilai> | <berkas>:<baris> | <tersitasi/internal/proyeksi/turunan> | <SELARAS/BEDA/TANPA SUMBER/TURUNAN SALAH/KLAIM TERLALU KUAT> |

Ringkasan: <n> selaras, <n> beda, <n> tanpa sumber, <n> turunan salah
```

Urutkan dari yang paling merusak kredibilitas: turunan salah dan konflik nilai di dokumen submission lebih dulu, baru sisanya. Kalau tidak ada temuan, katakan begitu dan berhenti.

## 6. Tawarkan perbaikan

Setelah tabel, tulis daftar usulan bernomor. Setiap usulan memuat lokasi `berkas:baris`, nilai sekarang, nilai usulan, dan alasannya dalam satu kalimat.

Aturan usulan:

- Jangan mengarang nilai pengganti. Kalau angka tidak punya sumber, usulkan menandainya sebagai estimasi internal di `[[Sumber & Asumsi Angka]]`, bukan mengganti nilainya.
- Kalau dua nilai berkonflik dan kamu tidak tahu mana yang benar, jangan memilih sendiri. Tampilkan keduanya beserta lokasinya dan minta pengguna memutuskan.
- Perbaikan yang menyentuh dokumen di `07 - Proposal & Submission` selalu ditandai prioritas tinggi.

Tutup dengan satu pertanyaan: usulan nomor berapa saja yang disetujui. Baru setelah pengguna menjawab, kerjakan perbaikan satu per satu dan laporkan berkas apa saja yang berubah.

> Dibuat khusus untuk vault RetailMind AI, mengikuti pola everything-claude-code (MIT).
