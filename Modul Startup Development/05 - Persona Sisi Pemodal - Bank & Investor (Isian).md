---
title: Persona Sisi Pemodal - Bank & Investor (Isian)
tags: [retailmind, digdaya, pidi, persona, bank, investor, pemodal, nasabah]
status: aktif
updated: 2026-07-21
---

# Persona Sisi Pemodal - Bank & Investor (Isian)

> [!abstract] Kenapa dokumen ini ada
> Kartu persona vault ([[04a - Persona Customer & User]]) lengkap di sisi UMKM, tetapi sisi pemodal baru menyentuh investor ritel dan analis lembaga. Belum ada **persona bank** yang eksplisit: orang di bank yang tugasnya menambah nasabah kredit UMKM. Padahal justru pihak inilah yang paling menentukan kemenangan pitch, karena bank adalah pembeli skor yang paling sejalan dengan tema PIDI. Dokumen ini menutup gap itu, sekaligus menyiapkan paket siap-tempel untuk proposal.

## 1. Peta sisi pemodal

Sama seperti sisi UMKM, pembayar (economic buyer) berbeda dari pengguna harian.

| Aktor | Institusi | Peran | Yang dibeli |
|---|---|---|---|
| Account Officer Mikro | Bank / KUR | User harian (menyaring calon debitur) | (dipakaikan alat) |
| Kepala Unit / Manajer Kredit UMKM | Bank | Economic buyer B2B | Lisensi API skor |
| Investor ritel / angel | Perorangan | Customer + user | Investor Access |
| Analis kredit | BPR / koperasi / fintech P2P | User harian | (dipakaikan alat) |
| OJK / BI | Regulator | Beneficiary | selaras Innovative Credit Scoring |

## 2. Persona bank utama: Pak Danang, Account Officer Mikro

> [!example] 🏦 "Target penyaluran saya naik tiap tahun, tapi mencari UMKM yang benar layak dan datanya rapi itu yang susah."
> **Usia** 33 · Laki-laki · Yogyakarta · Account Officer segmen mikro dan kecil di sebuah bank · menangani penyaluran dan pemantauan kredit UMKM (termasuk skema KUR).

Pak Danang adalah **user harian** di sisi bank. Ia yang turun mencari calon debitur, memverifikasi, dan mengusulkan. Target penyaluran kreditnya naik setiap tahun, sejalan mandat porsi kredit UMKM menuju 30% (OJK), sementara porsi riil masih tertahan di sekitar 19,8%. Tekanan ganda: kejar volume, tetapi jaga kualitas agar NPL rendah.

**Jobs-to-be-Done**

- Fungsional: "Temukan UMKM F&B yang benar layak danai, cepat, dengan data yang bisa dipertanggungjawabkan."
- Institusional: "Penuhi target penyaluran tanpa menaikkan risiko gagal bayar."
- Kepatuhan: "Pastikan asesmen selaras 5C dan kolektibilitas OJK, bisa diaudit."

> [!danger] Pain point
> - **Sulit menemukan calon nasabah yang layak.** UMKM F&B mikro banyak, tetapi yang datanya rapi dan bisa dinilai sedikit. Mayoritas mencatat manual dan mencampur keuangan pribadi dengan usaha.
> - **Biaya asesmen proporsional mahal.** Menilai satu debitur mikro butuh 2-4 minggu dan biaya besar relatif terhadap tiket pinjaman yang kecil.
> - **Risiko NPL dari data lemah.** Tanpa audit trail, omzet yang diklaim tidak terverifikasi, keputusan jadi menebak.
> - **Setelah cair, sulit memantau.** Tidak ada sinyal berkala kalau kesehatan usaha debitur menurun.

**Perilaku & teknologi:** bekerja dengan SOP, dokumen, dan SLIK. Butuh alat yang keputusannya bisa dipertanggungjawabkan ke atasan dan auditor. Konservatif terhadap risiko.

> [!success] Bagaimana RetailMind menjawab
> - **Pipeline terskrining.** Filter `readiness_level` dan `min_health_score` menyodorkan calon debitur yang sudah lolos saringan awal, jadi Pak Danang mulai dari daftar pendek, bukan dari nol.
> - **Data yang bisa dipercaya.** `data_consistency_score` dan cross-validation POS vs Cashbook mengukur kepercayaan data itu sendiri, menekan risiko omzet palsu.
> - **Proksi kolektibilitas.** Health Score tinggi dan stabil menjadi proksi prediktif Kol-1 (Lancar), bahasa yang sudah ia pakai.
> - **Pemantauan pasif.** Skor yang terus terbarui memberi sinyal dini saat kesehatan debitur menurun.

**Kekhawatiran:** "Skornya valid tidak? Bisa dimanipulasi UMKM tidak? Selaras regulasi tidak?" Jawaban: model transparan dipetakan ke 5C dan kolektibilitas OJK, syarat kelengkapan data ≥90 hari, akan divalidasi lewat backtest dan pilot.

**Sinyal aktivasi:** bank mengaktifkan lisensi API, Pak Danang memakai skor sebagai gerbang awal, sebagian calon berlanjut ke verifikasi dan pencairan.

## 3. Persona economic buyer: Bu Rahma, Kepala Unit Kredit UMKM

> [!example] 💼 "Saya butuh menaikkan volume kredit UMKM produktif tanpa menambah headcount analis, dan tetap patuh."
> **Usia** 44 · Perempuan · memutuskan pembelian alat dan kemitraan di tingkat unit/cabang.

Bu Rahma **membayar lisensi API**, sedangkan Pak Danang yang memakainya. Menang di bank berarti memuaskan Pak Danang yang memakai sekaligus meyakinkan Bu Rahma yang menandatangani.

**Yang ia timbang:** validitas model, kepatuhan regulasi, kemudahan integrasi, dan dampak ke KPI unit (volume penyaluran, efisiensi biaya asesmen, NPL). Ia tertarik pada matching fee karena berarti bank tidak keluar biaya besar di muka.

## 4. Persona pelengkap (sudah ada di vault)

- **Pak Reza, investor ritel/angel** (dana Rp50-500 juta, cari imbal hasil plus dampak lokal). Detail: [[04a - Persona Customer & User]] bagian 6.
- **Ibu Wulan, analis kredit BPR/koperasi/fintech P2P** (kapasitas 5-10 UMKM per bulan, butuh deal flow tersaring). Detail: [[04a - Persona Customer & User]] bagian 7. BPR dan koperasi berguna sebagai mitra awal yang lebih lincah sebelum bank besar.

## 5. Win-win: kenapa bank dan UMKM sama-sama untung

| | Bank | UMKM F&B |
|---|---|---|
| Dapat apa | Nasabah kredit terskrining, calon nasabah simpanan/QRIS/payroll | Akses modal formal lebih cepat dan murah dari P2P |
| Hemat apa | Biaya asesmen ~Rp8 juta per UMKM (proyeksi), waktu screening | Waktu rekap, biaya bunga tinggi jalur informal |
| Risiko turun | NPL lebih terkendali lewat data terverifikasi | Ditolak karena "tidak ada laporan" |
| Nilai tambahan | Memenuhi mandat porsi kredit UMKM 30% (OJK) | Kredibilitas yang bisa dibuktikan, rasa percaya diri |

> [!important] Inti argumen ke juri
> Platform ini bukan meminta bank berbaik hati. Ia menyodorkan pipeline nasabah baru yang produktif dengan biaya akuisisi dan asesmen lebih rendah, sambil menurunkan risiko lewat data terverifikasi. Bank dapat nasabah, UMKM dapat modal, platform dapat matching fee. Begitu satu bank memakai skor sebagai pre-screening, terbentuk efek jaringan yang menjadi moat sesungguhnya.

> [!warning] Kejujuran
> Semua manfaat bank di atas adalah rancangan dan proyeksi. Belum ada bank yang memakai skor ini, dan angka Rp8 juta bertumpu pada estimasi internal biaya asesmen ([[Sumber & Asumsi Angka]]). Mengunci satu kemitraan bank adalah prioritas nomor satu, bukan menambah fitur.

## 6. Paket siap-tempel untuk proposal

> [!quote] Kalimat business case sisi pemodal (bisa langsung dipakai)
> "Bagi bank, RetailMind memangkas dua hambatan utama pembiayaan UMKM mikro: sulitnya menemukan calon debitur yang layak dan mahalnya biaya asesmen tiket kecil. Platform menyodorkan pipeline UMKM F&B yang sudah terskor dan terverifikasi, dengan Business Health Score yang dipetakan ke kolektibilitas OJK. Bank memperoleh nasabah kredit produktif sekaligus calon nasabah simpanan dan QRIS, dengan biaya asesmen yang diproyeksikan turun hingga 80% (akan divalidasi pada pilot). Ini menjawab langsung mandat porsi kredit UMKM 30% dan mendukung agenda Innovative Credit Scoring OJK serta inklusi keuangan Bank Indonesia."

**Yang harus ditambahkan ke proposal dan pitch deck:**

- [ ] Slide/persona "Sisi Bank" (Pak Danang + Bu Rahma), bukan hanya investor ritel.
- [ ] Business case bank dengan angka HOW MUCH dari [[02 - Modul 2 - Value Creation Canvas & ROI (Isian)]].
- [ ] Tabel win-win bank vs UMKM (bagian 5 di atas).
- [ ] Penegasan keselarasan ICS OJK dan mandat porsi kredit UMKM 30%.

> [!note] Batas aksi
> Menyunting file proposal resmi (`proposal/PROPOSAL_DIGDAYA_2026_v3.md` di repo kode) adalah materi submission yang tampil ke juri. Isian di folder ini adalah sumber siap-tempel. Penyuntingan proposal final sebaiknya dikonfirmasi dulu sebelum diterapkan.

→ Kembali: [[00 - Analisis Modul & Rekomendasi]] · Terkait: [[04a - Persona Customer & User]] · [[03 - Kebutuhan & Peran Investor]]
