---
title: Uji Before vs After Skor per Persona (v2)
tanggal: 2026-07-22
tags: [retailmind, simulasi, telegram, before-after, v2]
---

# Uji Before vs After Skor per Persona (v2)

Skor dihitung lewat logika bot nyata (parse heuristik, tanpa LLM). **Before** memakai formula lama (semua pengeluaran mengurangi laba). **After** memakai perbaikan v2 (belanja stok/bahan dipisah dari beban operasional). Kaitan: [[../Modul Startup Development/06 - Audit Web + Validasi Multi-Agent (Apa yang Perlu Diperbaiki)]].

| Persona | Peran | Belanja stok | Beban ops | Skor before | Skor after |
|---|---|---|---|---|---|
| A1 Bu Siti | warung | Rp60.000 | Rp0 | 27/100 | 94/100 |
| A2 Mas Aldi | kafe | Rp500.000 | Rp0 | 0/100 | 94/100 |
| A3 Koh Aan | restoran menengah | Rp800.000 | Rp300.000 | 0/100 | 56/100 |
| A4 Bu Endah | catering | Rp1.200.000 | Rp500.000 | 68/100 | 86/100 |
| A5 Dinda (kasir) | kasir | Rp0 | Rp0 | 94/100 | 94/100 |
| A6 Uda Fauzi | restoran kecil | Rp150.000 | Rp0 | 4/100 | 94/100 |
| A7 Mbak Rani | bakery (musiman) | Rp10.000.000 | Rp800.000 | 0/100 | 86/100 |

> [!success] Temuan
> Persona dengan belanja stok besar (Mas Aldi, Koh Aan, Uda Fauzi, Mbak Rani) tidak lagi jatuh ke skor rendah atau 0. Dinda (tanpa belanja stok) tidak berubah, membuktikan perbaikan hanya menyentuh kasus yang salah, bukan menggeser semua skor.

> [!note] Batas heuristik PoC
> Persona yang hanya mencatat pemasukan dan belanja stok (tanpa beban operasional) bisa menghasilkan skor tinggi karena margin operasionalnya penuh. Skor 6 komponen di aplikasi web menilai ini lebih rinci (jendela bergerak, konsistensi data). Yang dibuktikan tabel ini: belanja stok tidak lagi menjatuhkan skor.