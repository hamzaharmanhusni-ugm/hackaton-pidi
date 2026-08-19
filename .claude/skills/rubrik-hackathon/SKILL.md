---
name: rubrik-hackathon
description: Dipakai saat menulis, menilai, atau merevisi materi yang akan dinilai juri DIGDAYA X Hackathon PIDI — proposal, jawaban tahap, naskah pitch, konsep video, atau isian modul panitia — untuk memberi skor kasar per kriteria dan menentukan bagian mana yang paling menguntungkan diperbaiki.
---

# Rubrik Hackathon

Skill ini mengubah rubrik resmi dari daftar bobot jadi alat kerja: menilai artefak, menemukan celah, dan mengurutkan perbaikan berdasarkan imbal hasil.

> Skor yang kamu hasilkan adalah **perkiraan internal**, bukan penilaian juri sungguhan. Gunakan untuk memprioritaskan revisi. Jangan pernah menuliskan skor ini ke catatan yang akan dibaca juri, dan jangan menyebutkannya sebagai capaian ("kami dapat nilai [angka]").

## 1. Rubrik 2nd Submission (dokumen, proposal, jawaban tahap)

| Kriteria | Bobot | Yang sebenarnya dicari |
|---|---|---|
| Alignment | 20% | Kecocokan dengan tema dan mandat penyelenggara (Bank Indonesia, OJK, ASPI, Fintech Indonesia, APUVINDO, LPPI). Bukan sekadar "fintech", tapi kaitan eksplisit ke agenda inklusi keuangan dan digitalisasi UMKM. |
| Effectiveness & Impact | 20% | Bukti bahwa solusi benar-benar mengubah hasil, bukan hanya menambah fitur. Dampak terukur, dengan pembilang dan baseline yang jelas. |
| Business Model Feasibility | 20% | Apakah pendapatan, biaya, dan jalur ke pasar masuk akal dan konsisten lintas catatan. Juri mencari angka yang tidak saling bertentangan. |
| Uniqueness | 15% | Apa yang tidak bisa ditiru pesaing dalam sebulan. Moat, bukan daftar fitur. |
| Technical Quality | 15% | Arsitektur, mesin skor, dan bukti bahwa sesuatu benar-benar berjalan. Prototipe live lebih kuat daripada diagram. |
| Market Needs | 15% | Bukti masalah itu nyata dan dirasakan, bukan diasumsikan. Kualitas dan asal data pasarnya diperiksa. |

## 2. Rubrik Video

| Kriteria | Bobot | Yang sebenarnya dicari |
|---|---|---|
| Use case clarity | 25% | Dalam menit pertama: siapa penggunanya, masalah apa, dan apa yang berubah. Kalau penonton bingung di sini, sisanya tidak tertolong. |
| Algorithm quality & UX | 20% | Logika skor terlihat masuk akal dan antarmukanya bisa dipakai orang biasa, bukan hanya oleh pembuatnya. |
| Complexity | 20% | Kedalaman teknis yang nyata dan bisa dijelaskan, bukan istilah yang ditempel untuk gaya-gayaan. |
| Implementation feasibility | 15% | Bisa dibangun dan dijalankan dengan sumber daya tim, dalam tahapan yang jelas. |
| Team readiness | 10% | Peran tiap anggota jelas dan relevan dengan yang dikerjakan. |
| Business & ROI | 10% | Ada jalur uang yang bisa dijelaskan, dan angkanya dinyatakan sebagai proyeksi. |

Pilih rubrik sesuai artefaknya. Materi tertulis dinilai dengan rubrik bagian 1; naskah dan konsep video dengan rubrik bagian 2. Kalau sebuah catatan menopang keduanya, nilai dua kali dan laporkan terpisah.

## 3. Cara memberi skor

Skala 1-5 per kriteria:

| Skor | Arti |
|---|---|
| 1 | Kriteria tidak tersentuh sama sekali di artefak |
| 2 | Disinggung, tapi hanya klaim tanpa penopang |
| 3 | Dibahas memadai, penopangnya berupa asumsi atau proyeksi internal |
| 4 | Dibahas kuat, ditopang uji internal atau data yang bisa ditelusuri |
| 5 | Kuat dan bisa diverifikasi pihak luar tanpa penjelasan tambahan dari tim |

Aturan yang mengikat penilaian:

1. **Setiap skor wajib punya alasan dan bukti** berupa kutipan pendek dari dokumen atau wikilink ke catatan pendukung. Skor tanpa kutipan tidak sah — hapus, jangan ditebak.
2. **Batas atas ikut tingkat bukti.** Kalau penopangnya cuma asumsi internal (T1-T2 pada skill `verifikasi-klaim`), skor maksimum 3, seberapa pun bagus tulisannya.
3. **Nilai yang tertulis, bukan yang kamu tahu.** Kalau buktinya ada di catatan lain tapi tidak dirujuk dari artefak yang dinilai, itu tetap celah — catat sebagai "bukti ada tapi tidak terhubung".
4. **Cek konsistensi lintas catatan** sebelum memberi skor pada kriteria berangka. Angka yang berbeda di dua catatan otomatis menurunkan skor Business Model Feasibility.

## 4. Menentukan perbaikan yang paling menguntungkan

Jangan memperbaiki yang paling jelek. Perbaiki yang paling banyak mengembalikan poin.

```
potensi perolehan = bobot x (5 - skor) / 5
```

Hitung untuk semua kriteria, urutkan menurun, kerjakan dua sampai tiga teratas. Contoh ilustratif (angka skor di bawah fiktif, hanya untuk memperlihatkan cara hitungnya):

- Kriteria berbobot 20% dengan skor 3 → 20 x 2/5 = **8 poin** bisa direbut.
- Kriteria berbobot 15% dengan skor 2 → 15 x 3/5 = **9 poin** bisa direbut.

Yang berbobot 15% itu lebih layak dikerjakan lebih dulu meski bobotnya lebih kecil. Kalau dua kriteria potensinya mirip, dahulukan yang perbaikannya bisa diselesaikan dengan menambah bukti yang sudah ada di vault, bukan yang menuntut data baru.

## 5. Format keluaran

```markdown
PENILAIAN INTERNAL (perkiraan, bukan penilaian juri)
Artefak: [[nama catatan]]
Rubrik: 2nd Submission | Video

| Kriteria | Bobot | Skor | Alasan | Bukti |
|---|---|---|---|---|
| ... | ..% | ../5 | ... | "kutipan" atau [[catatan]] |

Total tertimbang: [angka]/100 (perkiraan internal)

Prioritas perbaikan (bobot x jarak ke nilai penuh):
1. [kriteria] - potensi [angka] poin - [tindakan konkret, satu kalimat]
2. ...

Celah bukti:
- [kriteria] - [bukti yang kurang atau tidak terhubung]
```

Setelah melaporkan, kerjakan prioritas nomor satu kalau diminta, lalu nilai ulang artefaknya. Jangan membuat berkas laporan penilaian baru di vault — laporkan ke percakapan, dan tuangkan hasilnya sebagai revisi pada catatan aslinya.

> Dibuat khusus untuk vault RetailMind AI, mengikuti pola everything-claude-code (MIT).
