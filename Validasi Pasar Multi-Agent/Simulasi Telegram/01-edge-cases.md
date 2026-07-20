---
title: Probe Edge Case Bot Telegram
tanggal: 2026-07-21
tags: [retailmind, simulasi, edge-case, poc]
---

# Probe Edge Case Bot Telegram (Fase 3)

Skrip adversarial tetap untuk menyingkap batas bot: input ambigu, koreksi, typo, gibberish, nominal ekstrem. Ini bahan perbaikan PoC.

| Input | Jenis | Perilaku bot | Respons (ringkas) |
|---|---|---|---|
| /start | perintah mulai | lanjut onboarding | Halo! Saya RetailMind, asisten bisnis F&B kamu langsung di chat. Cukup lapor transaksi lewat pesan biasa, nanti saya rangkum jadi skor kesehatan bisnis yang bis |
| Warung Uji Coba | nama usaha | lanjut onboarding | Siap, Warung Uji Coba. Jenis usahanya apa? Balas salah satu: warung, kafe, restoran, atau catering. |
| warung | kategori | dijawab (coach/perintah), tidak dicatat | Mantap. Warung Uji Coba (warung) siap.  Coba lapor transaksi, contoh: - "jual nasi goreng 15rb" - "beli sayur 200rb"  Ketik "skor" untuk ringkasan, atau tanya a |
| jual 3 nasi goreng sama 2 es teh totalnya 65rb | multi-item satu pesan | dicatat sebagai transaksi (+1) | Tercatat: pemasukan jual 3 nasi goreng sama 2 es teh totalnya 65rb Rp65.000. Laba sementara: Rp65.000 (skor 91/100). Ketik "skor" untuk ringkasan. |
| 20rb | nominal telanjang tanpa kata kerja | dicatat sebagai transaksi (+1) | Tercatat: pemasukan 20rb Rp20.000. Laba sementara: Rp85.000 (skor 92/100). Ketik "skor" untuk ringkasan. |
| beli beras satu karung | pengeluaran tanpa nominal | dijawab (coach/perintah), tidak dicatat | Coba ulangi ya. Kamu bisa lapor transaksi ("jual ... 15rb") atau ketik "skor" untuk ringkasan. |
| jualan tadi pagi lupa kecatat, 150rb | pemasukan lampau, bahasa longgar | dicatat sebagai transaksi (+1) | Tercatat: pemasukan jualan tadi pagi lupa kecatat, 150rb Rp150.000. Laba sementara: Rp235.000 (skor 93/100). Ketik "skor" untuk ringkasan. |
| batalin yang tadi salah | permintaan koreksi/batal (belum didukung) | dijawab (coach/perintah), tidak dicatat | Coba ulangi ya. Kamu bisa lapor transaksi ("jual ... 15rb") atau ketik "skor" untuk ringkasan. |
| brp untung sy skrg | pertanyaan coach dengan singkatan/typo | dijawab (coach/perintah), tidak dicatat | Coba ulangi ya. Kamu bisa lapor transaksi ("jual ... 15rb") atau ketik "skor" untuk ringkasan. |
| asdfghjkl | gibberish | dijawab (coach/perintah), tidak dicatat | Coba ulangi ya. Kamu bisa lapor transaksi ("jual ... 15rb") atau ketik "skor" untuk ringkasan. |
| jual kopi 2.500.000 | nominal sangat besar | dicatat sebagai transaksi (+1) | Tercatat: pemasukan jual kopi 2.500.000 Rp2.500.000. Laba sementara: Rp2.735.000 (skor 94/100). Ketik "skor" untuk ringkasan. |
| skor | minta ringkasan | dijawab (coach/perintah), tidak dicatat | Ringkasan Warung Uji Coba: Pemasukan: Rp2.735.000 Pengeluaran: Rp0 Laba: Rp2.735.000 Transaksi tercatat: 4  Skor kesehatan (estimasi PoC): 94/100  Catatan: skor |