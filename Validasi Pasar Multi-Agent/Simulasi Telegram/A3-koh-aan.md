---
persona: A3 Koh Aan
role: Owner (restoran menengah)
tanggal: 2026-07-21
tags: [retailmind, simulasi, telegram, poc]
---

# Uji Bot - A3 Koh Aan (Owner (restoran menengah))

Usaha: RM Aan (restoran). Pesan persona ditulis penguji, respons dari bot nyata.

## Transkrip

**Koh Aan:** /start

**Bot RetailMind:** Halo! Saya RetailMind, asisten bisnis F&B kamu langsung di chat. Cukup lapor transaksi lewat pesan biasa, nanti saya rangkum jadi skor kesehatan bisnis yang bisa ditunjukkan ke pemodal.

Boleh saya tahu nama usahanya dulu?

**Koh Aan:** RM Aan

**Bot RetailMind:** Siap, RM Aan. Jenis usahanya apa? Balas salah satu: warung, kafe, restoran, atau catering.

**Koh Aan:** restoran

**Bot RetailMind:** Mantap. RM Aan (restoran) siap.

Coba lapor transaksi, contoh:
- "jual nasi goreng 15rb"
- "beli sayur 200rb"

Ketik "skor" untuk ringkasan, atau tanya apa saja soal bisnismu ke Coach Rinda.

**Koh Aan:** jual paket ayam 12 porsi 360rb

**Bot RetailMind:** Tercatat: pemasukan jual paket ayam 12 porsi 360rb Rp360.000.
Laba sementara: Rp360.000 (skor 91/100). Ketik "skor" untuk ringkasan.

**Koh Aan:** bayar belanja bahan 800rb. bayar gaji harian 300rb

**Bot RetailMind:** Tercatat 2 transaksi:
- keluar: bayar belanja bahan 800rb Rp800.000
- keluar: bayar gaji harian 300rb Rp300.000
Laba sementara: Rp-740.000 (skor 0/100). Ketik "skor" untuk ringkasan.

**Koh Aan:** skor

**Bot RetailMind:** Ringkasan RM Aan:
Pemasukan: Rp360.000
Pengeluaran: Rp1.100.000
Laba: Rp-740.000
Transaksi tercatat: 3

Skor kesehatan (estimasi PoC): 0/100

Catatan: skor penuh 6 komponen ada di aplikasi web. Di chat ini versi ringkas.

**Koh Aan:** saya sudah bayar POS tiap bulan, kenapa harus pakai ini lagi?

**Bot RetailMind:** Coba ulangi ya. Kamu bisa lapor transaksi ("jual ... 15rb") atau ketik "skor" untuk ringkasan.

## Metrik

| Metrik | Nilai |
|---|---|
| Role | Owner (restoran menengah) |
| Onboarding | Ya |
| Transaksi tercatat | 3 |
| Pemasukan | Rp360.000 |
| Pengeluaran | Rp1.100.000 |
| Laba | Rp-740.000 |
| Skor akhir (PoC) | 0/100 |
