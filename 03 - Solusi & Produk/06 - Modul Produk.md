---
title: Modul Produk
tags: [retailmind, produk, modul, fitur]
status: aktif
---

> [!summary] 6 modul, semua aktif (Working Prototype)
> Dikelompokkan dalam 3 lapis: **Pengumpulan Data → Analisis AI → Platform Investor.**

## Status Implementasi

| Modul | Route | Status |
|---|---|---|
| Smart POS | `/pos` | ✅ Selesai |
| Smart Cashbook | `/cashbook` | ✅ Selesai |
| AI Business Coach (Rinda) | `/ai-coach` | ✅ Selesai |
| Business Health Score | `/health-score` | ✅ Selesai |
| Investment Readiness Score | (embedded) | ✅ Selesai |
| Investor Dashboard | `/investor/dashboard` | ✅ Selesai |

> [!note] Sumber kebenaran
> Status di atas diverifikasi langsung dari codebase (`retailmind-ai/app/...`), bukan klaim. Detail teknis: [[09 - Arsitektur & Teknologi]].

## Lapis 1 — Smart Data Collection

### Modul 1: Smart POS
Kasir digital untuk transaksi, produk, stok, pelanggan, metode pembayaran (termasuk **QRIS**).
- **Tujuan:** mengumpulkan data transaksi secara konsisten
- **Output:** data penjualan tervalidasi

### Modul 2: Smart Cashbook (Buku Kas)
Mencatat seluruh arus kas: pemasukan non-POS, pengeluaran operasional, supplier, gaji, sewa, hutang, piutang, upload nota.
- **AI:** OCR Nota (upload struk → auto-ekstrak), kategorisasi otomatis, deteksi anomali pengeluaran
- **Output:** cashflow lebih akurat
- **Visualisasi:** 5 chart (lihat [[10 - Data, Demo & Visualisasi]])

## Lapis 2 — AI Analysis & Insight Engine

### Modul 3: AI Business Coach "Rinda"
AI melakukan *business check-in* berkala dan menjawab dalam Bahasa Indonesia, streaming.
> [!example] Contoh interaksi
> *"Halo Pak Budi, laba bulan ini turun 11%. Boleh saya bertanya beberapa hal?"*
> AI menggabungkan data transaksi + keuangan + jawaban pengguna → diagnosis bisnis (RAG berbasis data toko nyata, bukan generik).

### Modul 4 & 5: Scoring
- **Business Health Score** 0–100 (6 komponen)
- **Investment Readiness Score** Low/Medium/High
- Detail lengkap & rumus: [[07 - Scoring Engine]]

## Lapis 3 — Investor Readiness Platform

### Modul 6: Investor Dashboard
- **Business Snapshot, Revenue Trend, Health Score History, Investment Readiness, Risk Indicators, Financial Summary, Store Comparison, Portfolio Monitoring**
- Filter: kategori, kota, range skor; **map** geolokasi UMKM
- **Output:** investor melakukan screening UMKM dalam hitungan menit

## MVP Scope

> [!check] Included
> Smart POS · Smart Cashbook · AI Business Coach · Business Health Score · Investment Readiness Score · Investor Dashboard

> [!fail] Excluded (di luar MVP)
> Marketplace · Social media automation · Content generator · WhatsApp chatbot · CRM · Loyalty program · Forecasting lanjutan · Multi-branch enterprise

→ Positioning: [[05 - Ikhtisar Produk]] · Skor: [[07 - Scoring Engine]] · Kembali: [[00 - Beranda (MOC)]]
