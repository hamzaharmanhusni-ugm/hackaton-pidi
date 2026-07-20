---
persona: A2 Mas Aldi
role: Owner (kafe)
tanggal: 2026-07-21
tags: [retailmind, simulasi, telegram, poc]
---

# Uji Bot - A2 Mas Aldi (Owner (kafe))

Usaha: Kopi Aldi (kafe). Pesan persona ditulis penguji, respons dari bot nyata.

## Transkrip

**Mas Aldi:** /start

**Bot RetailMind:** Halo! Saya RetailMind, asisten bisnis F&B kamu langsung di chat. Cukup lapor transaksi lewat pesan biasa, nanti saya rangkum jadi skor kesehatan bisnis yang bisa ditunjukkan ke pemodal.

Boleh saya tahu nama usahanya dulu?

**Mas Aldi:** Kopi Aldi

**Bot RetailMind:** Siap, Kopi Aldi. Jenis usahanya apa? Balas salah satu: warung, kafe, restoran, atau catering.

**Mas Aldi:** kafe

**Bot RetailMind:** Mantap. Kopi Aldi (kafe) siap.

Coba lapor transaksi, contoh:
- "jual nasi goreng 15rb"
- "beli sayur 200rb"

Ketik "skor" untuk ringkasan, atau tanya apa saja soal bisnismu ke Coach Rinda.

**Mas Aldi:** jual kopi susu 25rb. jual americano 20rb. jual croissant 18rb

**Bot RetailMind:** Tercatat 3 transaksi:
- masuk: jual kopi susu 25rb Rp25.000
- masuk: jual americano 20rb Rp20.000
- masuk: jual croissant 18rb Rp18.000
Laba sementara: Rp63.000 (skor 93/100). Ketik "skor" untuk ringkasan.

**Mas Aldi:** beli biji kopi 500rb

**Bot RetailMind:** Tercatat: pengeluaran beli biji kopi 500rb Rp500.000.
Laba sementara: Rp-437.000 (skor 0/100). Ketik "skor" untuk ringkasan.

**Mas Aldi:** skor

**Bot RetailMind:** Ringkasan Kopi Aldi:
Pemasukan: Rp63.000
Pengeluaran: Rp500.000
Laba: Rp-437.000
Transaksi tercatat: 4

Skor kesehatan (estimasi PoC): 0/100

Catatan: skor penuh 6 komponen ada di aplikasi web. Di chat ini versi ringkas.

**Mas Aldi:** skor ini diakui investor yang mana? bedanya apa sama laporan biasa?

**Bot RetailMind:** Coba ulangi ya. Kamu bisa lapor transaksi ("jual ... 15rb") atau ketik "skor" untuk ringkasan.

## Metrik

| Metrik | Nilai |
|---|---|
| Role | Owner (kafe) |
| Onboarding | Ya |
| Transaksi tercatat | 4 |
| Pemasukan | Rp63.000 |
| Pengeluaran | Rp500.000 |
| Laba | Rp-437.000 |
| Skor akhir (PoC) | 0/100 |
