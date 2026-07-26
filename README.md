# RetailMind AI — Catatan & Proposal Hackathon (DIGDAYA PIDI 2026)

Platform **Business Health Scoring** untuk UMKM F&B Indonesia: mengubah transaksi harian menjadi skor kesehatan bisnis yang dipercaya pemodal. Repo ini menampung seluruh dokumentasi, riset, validasi, dan proposal tim **Financial Freedom (UGM)** untuk DIGDAYA X Hackathon PIDI 2026 (Bank Indonesia, OJK).

- **Aplikasi live:** https://retailmind-v2.vercel.app
- **Akun demo:** `umkm@demo.com` / `investor@demo.com` (password `demo123456`)
- **Deadline Submission Tahap 3:** 26 Juli 2026

---

## 🚦 Mulai baca dari mana

1. **Dashboard proyek** — buka `00 - Beranda (MOC).md`. Ini peta seluruh proyek plus jalur baca (5 menit / juri / tim).
2. **Arah dan strategi menang** — `10 - Strategi & Review/DISKUSI v3 - Ready to Win.md`.
3. **Hasil validasi dan kesiapan** — `10 - Strategi & Review/Validasi PoC & Kesiapan Menang (Agent).md`.

Jika hanya punya 5 menit: baca `01 - Ringkasan/01 - Ringkasan Eksekutif.md` lalu `DISKUSI v3`.

---

## 🧭 Cara membuka repo ini di Obsidian

Repo ini adalah **vault Obsidian**, bukan sekadar kumpulan berkas markdown. Isinya saling terhubung lewat wikilink `[[Nama Catatan]]`, callout, tabel, dan diagram Mermaid. Dibuka di GitHub tetap terbaca, tetapi tautan antarcatatan dan grafik hubungannya baru berfungsi di Obsidian.

**Langkah membuka:**

1. Unduh Obsidian (gratis, Windows/macOS/Linux) di https://obsidian.md lalu pasang.
2. Ambil isi repo ini: `git clone https://github.com/hamzaharmanhusni-ugm/hackaton-pidi.git`, atau unduh ZIP lewat tombol **Code → Download ZIP** lalu ekstrak.
3. Buka Obsidian, pilih **Open folder as vault**, arahkan ke folder hasil clone atau ekstrak tadi.
4. Bila muncul peringatan "Trust author and enable plugins", pilih **Trust** agar callout dan diagram tampil utuh. Vault ini tidak memuat plugin berbahaya.
5. Mulai dari `00 - Beranda (MOC).md`. Catatan itu berfungsi sebagai dashboard: seluruh folder dan jalur baca ditautkan dari sana.

**Yang membantu saat menelusuri:**

- `Ctrl/Cmd + O` untuk lompat ke catatan mana pun berdasarkan judul.
- `Ctrl/Cmd + Shift + F` untuk mencari kata di seluruh vault, berguna saat memverifikasi sebuah angka.
- Panel **Graph view** memperlihatkan keterkaitan antarcatatan.
- **Backlinks** di sisi kanan menunjukkan catatan lain yang merujuk catatan yang sedang dibuka.

**Kalau tidak ingin memasang Obsidian:** seluruh berkas `.md` tetap bisa dibaca langsung di GitHub atau editor teks apa pun. Yang hilang hanya kenyamanan navigasi, bukan isinya. Berkas `.canvas` (kanvas visual) memang hanya bisa dibuka di Obsidian.

---

## 📝 Yang harus DIINPUT ke form Submission Tahap 3

Seluruh jawaban 24 field sudah disiapkan di:

- **Sumber (markdown):** `07 - Proposal & Submission/FIX FINAL SUBMISSION/Jawaban Tahap 3 (FINAL).md`
- **Versi Word untuk dibaca/audit:** `07 - Proposal & Submission/FIX FINAL SUBMISSION/Proposal FIX Tahap 3 - RetailMind AI.docx`

Tinggal salin jawaban tiap field ke form. **Yang WAJIB kamu isi sendiri** (bertanda `[ISI ...]` di dokumen):

| Item | Keterangan |
|---|---|
| Link Video YouTube (publik) | Konsep, storyboard, dan script ada di `08 - Pitch & Presentasi/Konsep Video Elevator Pitch (Tahap 3).md` (durasi maks 3 menit: 1 menit pitch + 2 menit demo) |
| URL demo aplikasi | https://retailmind-v2.vercel.app |
| File PDF proposal | Ekspor dari deck / docx, penamaan `S1100 - Judul Proposal` |
| Link CV atau LinkedIn | 4 anggota tim |
| Dropdown Problem Statement | "Memperluas Investor Ritel" |
| Dropdown Sub-Problem | "Asisten Keuangan Pribadi dan Analisis Perilaku Pasar" |
| Dropdown Innovation Level | **Level 3** (Prototype, Validasi, atau Implementasi Awal) |
| Keputusan nama brand | "RetailMind" masih sementara, cek ketersediaan sebelum submit |

---

## 📄 Proposal yang dibangun (bentuknya)

Proposal FIX menjawab **24 field** form Tahap 3, sudah gap-closed dan ditutup tabel **"celah → langkah ke depan"** (setiap kekurangan dipasangkan rencana konkret, jujur). Disusun mengacu dua rubrik resmi:

- **2nd Submission:** Alignment 20%, Effectiveness & Impact 20%, Business Model Feasibility 20%, Uniqueness 15%, Technical Quality 15%, Market Needs 15%.
- **Video:** Use case clarity 25%, Algorithm quality & UX 20%, Complexity 20%, Implementation feasibility 15%, Team readiness 10%, Business & ROI 10%.

Tersedia dalam dua bentuk: **markdown** (sumber utama) dan **.docx** (untuk dibaca dan diaudit).

---

## 📁 Struktur folder (urut baca)

| Folder | Isi |
|---|---|
| `01 - Ringkasan` | Intisari proyek |
| `02 - Riset & Masalah` | Masalah, pasar, persona |
| `03 - Solusi & Produk` | Produk dan mesin skor |
| `04 - Keunggulan & Teknologi` | Moat, arsitektur, data |
| `05 - Bisnis & Eksekusi` | Model bisnis, proyeksi, roadmap |
| `06 - Validasi Pasar` | Bukti validasi multi-agent + PoC |
| `07 - Proposal & Submission` | Proposal resmi + Jawaban Tahap 3 |
| `08 - Pitch & Presentasi` | Naskah, skrip, konsep video |
| `09 - Modul Hackathon` | Isian modul panitia |
| `10 - Strategi & Review` | Arah v3, validasi, review juri |
| `99 - Kanvas & Referensi` | Kanvas visual, sumber angka |

---

## ✅ Status ringkas

- **Aplikasi:** live dan sehat. Data demo berisi 11 toko contoh dengan skor 41 sampai 80 (rata-rata 63,7 per 26 Juli 2026); Warung Bu Siti di angka 70.
- **Perbaikan kode (branch `v2`):** model skor stok-jadi-inventaris, Simulasi Belanja, anti-gaming Inventory Turnover, buku kas menyatu dengan kasir, filter lokasi investor. Teruji **59 unit test yang seluruhnya lulus, 20 di antaranya mesin skor**. Sudah di-deploy ulang ke Vercel.
- **Validasi agen:** PoC = "Sebagian" (69,3 dan 68,6 terhadap dua rubrik, dinilai panel agen simulasi, bukan juri sungguhan). Penentu yang tersisa adalah aksi pendiri: finalkan nama brand, rekam dan unggah video, kejar satu minat mitra pembiayaan.

Kode aplikasi ada di repo terpisah (`Hacketon_financial_freedom`, branch `v2`).

**Lampiran bukti (publik):**

- Bukti Innovation Level 3, 8 tab: https://docs.google.com/spreadsheets/d/1-9xmxrTX-AbgNUDGelORafad9Jl-OHd-pGK2UwjzBbs/edit
- Laporan uji bot chat (PoC): https://docs.google.com/document/d/1Y8qNQmbUkBbvJ_1gX1mQQkJdwGQ-LWrUPwoh-K0kJM8/edit

---

## 👥 Tim Financial Freedom (Universitas Gadjah Mada)

| Peran | Nama |
|---|---|
| Ketua / AI Engineer | Hamzah Arman Husni |
| Developer | Dzaky Faishalariq |
| Marketing & Business Development | Gregorius Bugen Jovi Sitindaon |
| Automation & Data | Aditya Nurrohman |
