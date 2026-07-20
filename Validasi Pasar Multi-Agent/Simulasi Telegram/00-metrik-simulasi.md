---
title: Metrik Uji Bot Terskrip
tanggal: 2026-07-21
tags: [retailmind, simulasi, telegram, metrik]
---

# Metrik Uji Bot Terskrip (Fase 3)

Enam persona ragam role (owner dan kasir), pesan ditulis penguji, dijalankan langsung ke logika bot RetailMind. Bukti alur chat: onboarding, multi-transaksi, skor, coach. Edge case di [[01-edge-cases]], analisis di [[02 - Laporan PoC Telegram]].

| Persona | Role | Onboarding | Transaksi | Laba | Skor |
|---|---|---|---|---|---|
| A1 Bu Siti | Owner (warung) | Ya | 4 | Rp-20.000 | 27/100 |
| A2 Mas Aldi | Owner (kafe) | Ya | 4 | Rp-437.000 | 0/100 |
| A3 Koh Aan | Owner (restoran menengah) | Ya | 3 | Rp-740.000 | 0/100 |
| A4 Bu Endah | Owner (catering) | Ya | 4 | Rp4.499.999 | 89/100 |
| A5 Dinda | Kasir (operational) | Ya | 4 | Rp60.000 | 94/100 |
| A6 Uda Fauzi | Owner (restoran kecil) | Ya | 4 | Rp225.000 | 94/100 |

> Skor akhir adalah estimasi PoC bot chat, bukan scoring engine 6 komponen aplikasi web.