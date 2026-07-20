---
persona: A6 Uda Fauzi
role: Owner (restoran kecil)
tanggal: 2026-07-21
tags: [retailmind, simulasi, telegram, poc]
---

# Uji Bot - A6 Uda Fauzi (Owner (restoran kecil))

Usaha: RM Padang Uda Fauzi (restoran). Pesan persona ditulis penguji, respons dari bot nyata.

## Transkrip

**Uda Fauzi:** /start

**Bot RetailMind:** Halo! Saya RetailMind, asisten bisnis F&B kamu langsung di chat. Cukup lapor transaksi lewat pesan biasa, nanti saya rangkum jadi skor kesehatan bisnis yang bisa ditunjukkan ke pemodal.

Boleh saya tahu nama usahanya dulu?

**Uda Fauzi:** RM Padang Uda Fauzi

**Bot RetailMind:** Siap, RM Padang Uda Fauzi. Jenis usahanya apa? Balas salah satu: warung, kafe, restoran, atau catering.

**Uda Fauzi:** restoran

**Bot RetailMind:** Mantap. RM Padang Uda Fauzi (restoran) siap.

Coba lapor transaksi, contoh:
- "jual nasi goreng 15rb"
- "beli sayur 200rb"

Ketik "skor" untuk ringkasan, atau tanya apa saja soal bisnismu ke Coach Rinda.

**Uda Fauzi:** jua rendang 30rb. jua ayam pop 25rb. jua gulai tunjang 20rb

**Bot RetailMind:** Tercatat 3 transaksi:
- masuk: jua rendang 30rb Rp30.000
- masuk: jua ayam pop 25rb Rp25.000
- masuk: jua gulai tunjang 20rb Rp20.000
Laba sementara: Rp75.000 (skor 93/100). Ketik "skor" untuk ringkasan.

**Uda Fauzi:** bali cabai jo santan 150rb

**Bot RetailMind:** Tercatat: pemasukan bali cabai jo santan 150rb Rp150.000.
Laba sementara: Rp225.000 (skor 94/100). Ketik "skor" untuk ringkasan.

**Uda Fauzi:** skor

**Bot RetailMind:** Ringkasan RM Padang Uda Fauzi:
Pemasukan: Rp225.000
Pengeluaran: Rp0
Laba: Rp225.000
Transaksi tercatat: 4

Skor kesehatan (estimasi PoC): 94/100

Catatan: skor penuh 6 komponen ada di aplikasi web. Di chat ini versi ringkas.

**Uda Fauzi:** tiap bulan bayar? kalau sepi abih Lebaran macam mana?

**Bot RetailMind:** Coba ulangi ya. Kamu bisa lapor transaksi ("jual ... 15rb") atau ketik "skor" untuk ringkasan.

## Metrik

| Metrik | Nilai |
|---|---|
| Role | Owner (restoran kecil) |
| Onboarding | Ya |
| Transaksi tercatat | 4 |
| Pemasukan | Rp225.000 |
| Pengeluaran | Rp0 |
| Laba | Rp225.000 |
| Skor akhir (PoC) | 94/100 |
