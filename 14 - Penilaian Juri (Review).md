---
title: Penilaian Juri (Review)
tags: [retailmind, review, juri, qa]
status: aktif
skor-kesiapan: 6/10 → ditindaklanjuti
direview-oleh: Agent Juri Hackathon (critique)
tanggal: 2026-06-04
---

> [!abstract] Verdict awal: 6/10 — NEEDS-FIX → sebagian besar blocker sudah diperbaiki
> Dokumentasi terstruktur baik & sadar-diri, tetapi ada link mati, kontradiksi data antar-file, dan klaim kuantitatif yang rawan dipatahkan juri. Bagian ⬇️ mencatat temuan + status tindak lanjut.

## 🔴 Temuan KRITIKAL & status

| #   | Temuan                                                                                                                 | Status                                                                                                                                                                                                                                        |
| --- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| K-1 | Link mati `[[14 - Penilaian Juri (Review)]]` dirujuk 3× (Beranda, 13, 16) tapi file belum ada                          | ✅ **Diperbaiki** — file ini dibuat                                                                                                                                                                                                            |
| K-2 | Kontradiksi demo store: **proposal asli** (Bu Sari/Mas Budi/Pak Hendra) ≠ **data live** (Bu Siti + 10 UMKM Yogyakarta) | ✅ **Konsisten** — catatan Obsidian ([[10 - Data, Demo & Visualisasi]], [[15 - Proposal DIGDAYA 2026 (Ringkasan)]], [[17 - Pertanyaan & Jawaban Tahap 2]]) semua memakai data live; gap di proposal-asli diflag di [[16 - Perbaikan Proposal]] |
| K-3 | Klaim "satu-satunya platform" tanpa caveat & tabel kompetitor tak memuat fintech scoring                               | ✅ **Diperbaiki** — diganti "pertama di Indonesia yang mengintegrasikan 3 layer"; catatan kompetitor fintech ditambah di [[08 - Keunggulan & Diferensiasi]]                                                                                    |
| K-4 | Hubungan 69,5% vs 43,1% tidak dijelaskan                                                                               | ✅ **Diperbaiki** — penjelasan ditambah di [[01 - Ringkasan Eksekutif]] & [[04 - Riset Pasar F&B Indonesia]]                                                                                                                                   |

## 🟡 Temuan SEDANG & status

| #   | Temuan                                                                                                      | Status                                                    |
| --- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| S-1 | LTV/CAC 12–36× tanpa asumsi churn                                                                           | ✅ Asumsi ditambah di [[11 - Business Model & GTM]]        |
| S-2 | "Due diligence −80%" tanpa baseline                                                                         | ✅ Baseline logika ditambah (Rp5–15jt & 2–4 minggu manual) |
| S-3 | Nesting Health Score → Readiness (30%) terkesan double-count                                                | ✅ Dijelaskan di [[07 - Scoring Engine]]                   |
| S-4 | Metodologi riset 15 UMKM tak detail                                                                         | ⏳ Lengkapi bulan/metode/omzet (butuh data tim)            |
| S-5 | "McKinsey 2023" atribusi lemah                                                                              | ⏳ Tambahkan judul laporan/URL spesifik                    |
| S-6 | Pertanyaan juri belum diantisipasi: izin OJK/BI, cold-start investor, validasi model, churn pasca-pendanaan | ✅ Ditambah di [[13 - Pitch & Antisipasi Juri]]            |
| S-7 | Edge flywheel di `Peta Produk.canvas` routing kurang rapi                                                   | ⏳ Kosmetik — opsional                                     |

## 🟢 Saran penguatan (nice-to-have)
- Kuantifikasi **TAM/SAM/SOM** eksplisit (TAM 4,85 juta usaha F&B → SAM ~1,9 juta go-digital → SOM 30 UMKM pilot).
- Sebut perilaku **fallback rule-based** AI Coach saat demo (justru menunjukkan kematangan engineering).
- Sertakan URL repo GitHub / screenshot git log sebagai bukti "Working Prototype".
- Q18 Security: sebut **UU PDP No. 27/2022** + data minimization. ✅ Sudah ditambah di [[17 - Pertanyaan & Jawaban Tahap 2]].

## Sisa pekerjaan (butuh input tim)
- [ ] S-4: detail metodologi riset 15 UMKM (bulan, metode, rentang omzet)
- [ ] S-5: sumber spesifik klaim "3,5×" (judul laporan/URL)
- [ ] Eksekusi penuh checklist di [[16 - Perbaikan Proposal]]

→ Kembali: [[00 - Beranda (MOC)]] · Perbaikan: [[16 - Perbaikan Proposal]]
