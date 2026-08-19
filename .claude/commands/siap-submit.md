---
description: Memeriksa kesiapan berkas submission sebelum dikirim ke panitia, lalu mengeluarkan daftar periksa berstatus dan daftar hal yang menghalangi pengiriman.
argument-hint: <opsional: tahap atau dokumen tertentu>
---

# Siap Submit

Jalankan pemeriksaan kesiapan submission. Keluaranmu menentukan pengguna berani mengirim atau tidak, jadi jangan menebak dan jangan melunakkan temuan.

## 1. Tentukan cakupan

Kalau `$ARGUMENTS` diisi, periksa tahap atau dokumen itu saja. Kalau kosong, cakupan bawaan adalah `[[Jawaban Tahap 3 (FINAL)]]` ditambah catatan submission terkait di folder `07 - Proposal & Submission`, termasuk isi `FIX FINAL SUBMISSION/`.

Baca setiap dokumen sampai habis. Jangan menyimpulkan dari judul, frontmatter, atau ringkasan.

## 2. Daftar placeholder yang perlu diisi manusia

Cari pola `[ISI`, `TODO`, `TBD`, `menyusul`, `[angka]`, tautan kosong, dan kurung siku yang isinya instruksi, bukan jawaban.

Untuk setiap temuan catat: lokasi `berkas:baris`, apa yang diminta, dan apa yang dibutuhkan untuk mengisinya. Pisahkan mana yang hanya bisa diisi manusia, misalnya tautan video, hasil ekspor berkas, atau keputusan nama brand.

Jangan mengisi sendiri placeholder yang butuh keputusan atau aset dari pemilik. Menebak isinya lebih berbahaya daripada membiarkannya kosong.

## 3. Cek batas kata dan kelengkapan field

Dokumen jawaban menandai panjang dengan pola `(x/limit kata)`. Untuk setiap bagian, hitung ulang jumlah kata sebenarnya dan bandingkan dengan angka yang tertulis serta batasnya.

- Melebihi batas: masuk daftar penghalang.
- Klaim jumlah kata tidak cocok dengan isi: masuk temuan, sebutkan hitungan sebenarnya.
- Field wajib yang belum terisi atau dropdown yang belum dipilih: masuk daftar penghalang.

## 4. Cek terhadap dua rubrik resmi

Pakai skill `rubrik-hackathon` sebagai sumber kriteria dan bobot. Ada dua rubrik dan keduanya wajib dipakai: rubrik 2nd Submission dan rubrik video.

Untuk setiap kriteria, tentukan apakah jawaban memuat bukti eksplisit, lalu tunjuk bagian mana yang menjawabnya. Kalau tidak ada bukti eksplisit, tulis `TIDAK TERJAWAB` beserta kriteria yang kosong. Jangan memberi nilai angka atau memperkirakan skor juri.

## 5. Jalankan pemeriksaan pendukung

Jalankan dua subagent atas cakupan yang sama, kirim keduanya dalam satu giliran supaya berjalan paralel:

- `pemeriksa-angka` untuk konsistensi angka terhadap `[[Sumber & Asumsi Angka]]` dan antar dokumen submission.
- `peninjau-kepatuhan` untuk klaim yang berisiko di konteks regulated fintech: kelayakan kredit, kesiapan pendanaan, penggunaan data UMKM, klaim mitra atau dukungan lembaga, dan klaim akurasi model.

Setiap temuan dari kedua agent dibawa utuh ke laporan, bukan diringkas jadi satu baris.

## 6. Keluarkan daftar periksa

```
KESIAPAN SUBMISSION
Cakupan: <dokumen yang diperiksa>

DAFTAR PERIKSA
| Item | Status | Catatan |
|---|---|---|
| Placeholder terisi | <OK/BELUM> | <jumlah tersisa> |
| Batas kata dan field wajib | <OK/BELUM> | <bagian yang bermasalah> |
| Rubrik 2nd Submission | <OK/SEBAGIAN/BELUM> | <kriteria tanpa bukti> |
| Rubrik video | <OK/SEBAGIAN/BELUM> | <kriteria tanpa bukti> |
| Konsistensi angka | <OK/BELUM> | <ringkas temuan pemeriksa-angka> |
| Kepatuhan klaim | <OK/BELUM> | <ringkas temuan peninjau-kepatuhan> |
| Lampiran dan tautan | <OK/BELUM> | <berkas atau tautan yang belum ada> |

PENGHALANG PENGIRIMAN
1. <hal yang menghalangi> — lokasi <berkas>:<baris> — perlu diselesaikan oleh <pemilik/tim>

TEMUAN LAIN
- <hal yang sebaiknya diperbaiki tapi tidak menghalangi>

STATUS: <SIAP KIRIM / BELUM SIAP>
```

## 7. Aturan status

- Status `SIAP KIRIM` hanya boleh keluar kalau daftar placeholder kosong dan tidak ada temuan risiko tinggi dari `peninjau-kepatuhan` maupun `pemeriksa-angka`.
- Selama masih ada satu placeholder atau satu temuan risiko tinggi, status tetap `BELUM SIAP` dan daftar penghalang wajib diisi.
- Jangan menyebut tanggal atau tenggat apa pun dari ingatanmu. Kalau pengguna bertanya soal waktu, rujuk `[[Jawaban Tahap 3 (FINAL)]]` atau `[[STATUS]]`.
- Jangan memperbaiki isi dokumen dalam pemeriksaan ini. Laporkan dulu, tawarkan perbaikan, kerjakan hanya setelah pengguna memilih.

> Dibuat khusus untuk vault RetailMind AI, mengikuti pola everything-claude-code (MIT).
