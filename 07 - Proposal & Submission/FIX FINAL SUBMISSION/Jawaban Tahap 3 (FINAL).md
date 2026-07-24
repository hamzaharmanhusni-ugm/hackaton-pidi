---
title: Jawaban Tahap 3 (FINAL)
tags: [retailmind, submission, tahap-3, jawaban, final, proposal-fix]
status: final-siap-submit
updated: 2026-07-22
---

> [!success] Dokumen FINAL untuk Submission Tahap 3
> Jawaban form Submission Tahap 3 DIGDAYA X Hackathon PIDI. Menutup celah yang ditemukan validasi dan mencerminkan produk nyata (working prototype v2). Angka `(x/limit)` = jumlah kata vs batas resmi form. Bagian dropdown ditandai jelas. Placeholder `[ISI ...]` wajib dilengkapi pemilik sebelum submit. Disusun mengikuti [[Panduan Tahap 3 (Ekstrak Resmi)]] (nama field dan batas kata resmi). Landasan: [[DISKUSI v3 - Ready to Win]], [[Strategi Validasi PMF]], [[07 - Validasi Ulang Perubahan v2 (Multi-Agent)]].

## Identitas

- **ID Tim:** S1100
- **Nama Tim:** Financial Freedom Tim

### Final Solution Title

RetailMind AI: Skor Kesehatan Bisnis untuk UMKM F&B, Mengubah Transaksi Harian Menjadi Kepercayaan Pemodal.

> [!note] Catatan brand
> Nama "RetailMind" masih dalam peninjauan karena kemungkinan dipakai pihak lain. Bila diganti sebelum submit, samakan di seluruh materi.

### Problem Statement *(dropdown)*

**Memperluas Investor Ritel** (tema: Penguatan Ketahanan dan Inovasi Keuangan).

### Sub-Problem Statement *(dropdown)*

**Asisten Keuangan Pribadi dan Analisis Perilaku Pasar:** menyediakan standar data dan skor agar investor ritel, koperasi, BPR, dan fintech dapat menilai UMKM F&B secara cepat dan objektif.

### Final Team Composition *(96/100 kata)*

Financial Freedom Tim, Universitas Gadjah Mada, empat mahasiswa pascasarjana dengan kombinasi kompetensi teknis dan bisnis:
- Hamzah Arman Husni, Ketua Tim dan AI Engineer (arsitektur, scoring engine, integrasi AI).
- Dzaky Faishalariq, Developer full-stack (frontend, backend, basis data).
- Gregorius Bugen Jovi Sitindaon, Marketing dan Business Development (model bisnis, go-to-market).
- Aditya Nurrohman, Automation dan Data Engineer (pipeline data, otomasi, PoC bot).
Tim membangun sendiri working prototype, menjalankan pra-validasi multi-agent dan proof of concept bot, sehingga menguasai sisi teknis sekaligus konteks bisnis lokal.

### Final Solution Summary *(148/150 kata)*

RetailMind AI mengubah data transaksi harian UMKM F&B (omzet Rp10 sampai 200 juta per bulan) menjadi skor kesehatan bisnis yang bisa dipercaya pemodal. Solusi menjawab dua kegagalan ekosistem: UMKM tidak bisa membuktikan performa ke pemodal meski sudah digital, dan pemodal tidak punya standar penilaian objektif.

Tiga lapisan terpadu: Smart Data Collection (POS dan Cashbook, dengan pintu masuk chat untuk menurunkan friksi), AI Analysis Engine (Business Health Score 0 sampai 100 dan AI Coach berbahasa Indonesia), dan Investor Dashboard (skor, Investment Readiness, dan penyaringan).

Penajaman versi ini: model skor diperbaiki (belanja stok dihitung sebagai inventaris, bukan beban, lulus 19 dari 19 unit test), ditambah simulator dampak belanja untuk UMKM, dan dashboard pemodal difokuskan ke keputusan. Dampaknya: membuka akses pembiayaan bagi UMKM layak dan mempercepat penyaringan pemodal.

### Progress and Change Log *(121/150 kata)*

Perkembangan utama sejak 2nd submission, dari validasi lanjutan dan perbaikan produk:

1. **Model skor diperbaiki dan diverifikasi.** Belanja bahan baku dan kemasan kini dihitung sebagai inventaris, bukan beban, sehingga UMKM musiman yang menyetok besar tidak lagi terbaca rugi. Skor dihitung atas jendela bergerak dan lulus 19 dari 19 unit test.
2. **Fitur baru Simulasi Belanja (What-If):** UMKM melihat dampak rencana belanja ke skor sebelum uang keluar, dengan pengingat anti-gaming.
3. **Investor Dashboard difokuskan:** peta yang sekadar pemanis dihapus, fokus ke daftar UMKM, skor, dan Investment Readiness.
4. **Validasi diperluas ke sisi pemodal:** ditambah persona bank dan investor, plus uji ulang seluruh perubahan.
5. **Kejujuran metode dipertegas:** riset lapangan awal dipisahkan dari pra-validasi sintetis multi-agent.
6. **Strategi adopsi** dinaikkan ke chat-first hibrida yang terbukti lewat PoC bot.

### Validated User Problem and Evidence *(236/250 kata)*

**Masalah utama:** UMKM F&B skala kecil dan menengah sudah memakai alat digital (POS, QRIS), tetapi datanya terfragmentasi antar kanal, tidak konsisten, dan tidak bisa diubah menjadi laporan performa yang terverifikasi. Akar masalahnya adalah data readiness dan kredibilitas, bukan ketiadaan digitalisasi. Akibatnya pemodal tidak percaya, dan UMKM yang layak tetap gagal mendapat modal.

**Bukti, disajikan jujur menurut jenisnya:**
- **Riset lapangan awal (empati):** kunjungan tim ke 15 UMKM F&B Yogyakarta. Hampir semua sudah memakai aplikasi kasir, tetapi tidak satu pun bisa menjawab pasti laba bersih bulan lalu. Ini sampel kecil dan kualitatif, sumber empati, bukan statistik pasar representatif.
- **Data sekunder:** 77% UMKM mencatat manual atau semi-manual (OCBC dan NielsenIQ 2024); hanya sekitar 19% punya laporan keuangan diterima lembaga formal (OJK); 69,5% UMKM belum mengakses kredit (Kementerian UMKM 2025); gap pembiayaan sekitar Rp2.400 triliun (Kemenko Perekonomian).
- **Pra-validasi sintetis multi-agent:** enam persona F&B bernama yang dijangkarkan data demografis nyata (silicon sampling), ditambah lensa bank dan investor. Menajamkan hipotesis dan menemukan keberatan sebelum wawancara lapangan.
- **Proof of concept:** bot chat menguji enam persona (owner dan kasir) menuntaskan onboarding dan mencatat transaksi lewat percakapan.

**Kesimpulan:** masalah tervalidasi dua sisi. UMKM butuh membuktikan kelayakan, pemodal butuh data tepercaya. Rincian metode: [[Strategi Validasi PMF]].

### End-to-End Use Case and Feature-to-Pain Mapping *(286/300 kata)*

**Alur end-to-end, dari data mentah sampai keputusan pendanaan:**

1. **UMKM mencatat.** Pemilik memakai Smart POS (transaksi, produk, stok, metode bayar termasuk QRIS) dan Smart Cashbook (pemasukan, pengeluaran, hutang, piutang). Pintu masuk chat tersedia untuk pencatatan ringan sehari-hari. Impor CSV dan Google Sheets memindahkan data lama.
   *Pain terjawab:* data terfragmentasi antar kanal menjadi satu sumber harian yang bersih.
2. **Sistem menilai.** Pipeline membersihkan, deduplikasi, dan mendeteksi anomali, lalu Scoring Engine menghitung Business Health Score 0 sampai 100 dari enam komponen tertimbang, atas jendela bergerak.
   *Pain terjawab:* UMKM tidak bisa membuktikan performa, kini punya bukti terukur.
3. **UMKM memahami dan memperbaiki.** Dashboard menampilkan skor, tren, dan risk flags. AI Coach Rinda memberi langkah konkret berbahasa Indonesia. Simulasi Belanja menunjukkan dampak keputusan ke skor sebelum uang keluar.
   *Pain terjawab:* UMKM tidak tahu cara menaikkan kelayakan, kini dipandu.
4. **UMKM menyiapkan pengajuan.** Satu klik menghasilkan proposal pendanaan PDF.
   *Pain terjawab:* menyusun laporan manual yang melelahkan menjadi otomatis.
5. **Pemodal menyaring.** Investor Dashboard menampilkan daftar UMKM, skor, Investment Readiness (Low, Medium, High), dan filter (termasuk filter lokasi untuk diversifikasi). Pemodal hanya melihat ringkasan dan skor, bukan data mentah, dan menyimpan watchlist.
   *Pain terjawab:* due diligence 2 sampai 4 minggu per UMKM menjadi penyaringan dalam menit.
6. **Keputusan dan umpan balik.** Pemodal menindaklanjuti UMKM terpilih. Pemakaian berlanjut memperkaya data, skor makin akurat (data flywheel).
   *Pain terjawab:* asimetri informasi UMKM dan pemodal menyempit dari waktu ke waktu.

Setiap fitur inti menjawab satu pain spesifik yang sudah divalidasi, sehingga rantai masalah, solusi, dan hasil saling terhubung.

### Operational Context, Solution Boundary, and Adoption *(192/200 kata)*

**Konteks pemakaian:** dipakai UMKM F&B pemilik aktif yang bertransaksi harian (warung, kafe, restoran kecil dan menengah, catering; bakery diuji sebagai kasus musiman yang menonjolkan kekuatan skor). Sisi pemodal dipakai investor ritel, koperasi, BPR, dan fintech untuk menyaring deal flow. Lokasi awal Yogyakarta.

**Batas solusi, dinyatakan jujur:**
- Skor hanya sekuat data mentahnya. Guardrail: skor dihitung bila kelengkapan data minimal 60%.
- Skor diposisikan sebagai penyaringan awal, bukan pengganti keputusan kredit. Keputusan akhir tetap di tangan pemodal.
- Data saat ini bersumber input UMKM (self-reported). Verifikasi silang ke sumber independen (mutasi rekening, QRIS, agregator) adalah roadmap, belum berjalan.
- Menampilkan profil UMKM ke pemodal butuh persetujuan UMKM (consent).

**Adopsi:** friksi masuk ditekan lewat pintu chat (terbukti di PoC keenam persona bisa onboarding lewat percakapan), antarmuka mobile-first, AI Coach berbahasa Indonesia, dan impor data mudah. Distribusi berbasis komunitas UMKM dan kemitraan kampus, bukan iklan mahal, sehingga biaya akuisisi rendah.

### Innovation Level *(dropdown, 42/50 kata)*

**Level 3: Prototype, Validasi, atau Implementasi Awal.** Alasan: working prototype enam modul sudah berfungsi penuh dan live, ditopang pra-validasi multi-agent dan PoC bot. Belum masuk Level 4 karena adopsi nyata dan skala (pilot berjalan, pengguna nyata) belum ada. Penempatan ini sengaja jujur.

### Current Technical Reality, Data, and Integration *(288/300 kata)*

**Sudah dibangun (working prototype, bukan rancangan):**
- Frontend Next.js 16 (App Router), React, TypeScript, Tailwind, shadcn/ui, PWA mobile-first. Visualisasi Recharts.
- Backend Supabase: PostgreSQL multi-tenant, Auth, dan Row Level Security untuk isolasi data per UMKM.
- Modul aktif: Smart POS, Smart Cashbook (kategorisasi, deteksi anomali, grafik, ekspor), Business Health Score 0 sampai 100 (enam komponen, dihitung via API dan tersimpan harian), Investment Readiness, AI Coach Rinda, Investor Dashboard (daftar, skor, filter), UMKM detail, watchlist, dan generator proposal PDF.
- Simulasi Belanja (What-If) dan perbaikan model skor v2 (inventaris vs beban), lulus 19 dari 19 unit test.
- Autentikasi, RLS, dua akun demo, dan data UMKM F&B Yogyakarta ter-seed. Aplikasi live dan bisa didemonstrasikan.

**Data:** first-party, lahir dari operasional UMKM sendiri (transaksi, produk, stok, arus kas). Format transaksional terstruktur di PostgreSQL. Versi ini berjalan di basis data v2 yang terpisah dari versi lama, sehingga demo bersih dan angkanya konsisten. Untuk demo, data sudah tersedia dan ter-seed (satu akun UMKM dengan lebih dari 1.300 transaksi POS lintas 90 hari beserta buku kas, plus 11 UMKM F&B publik untuk sisi pemodal). Untuk pilot, data dikumpulkan dari UMKM peserta.

**Kesiapan integrasi:** logika skor tersedia lewat Route Handler (`/api/scores/calculate`), siap dibungkus API untuk mitra B2B (BPR, koperasi, fintech). AI memakai abstraksi multi-provider (Claude, Gemini, OpenAI, OpenRouter) dengan fallback rule-based, sehingga layanan tetap jalan tanpa API key valid. Integrasi marketplace (GoFood, GrabFood) dan verifikasi data independen adalah roadmap.

**Batas jujur:** OCR nota, forecasting penuh, alur deal end-to-end, dan verifikasi data eksternal belum masuk MVP. Ini terjadwal, bukan diklaim selesai.

### MVP Execution and Deployment Plan *(238/250 kata)*

**Deployment saat ini:** frontend dan API di Vercel, basis data, auth, dan storage di Supabase. Arsitektur cloud-native yang bisa auto-scaling tanpa perombakan.

**Rencana ke pilot dan MVP berikutnya:**
- **0 sampai 3 bulan:** pilot 20 sampai 30 UMKM F&B Yogyakarta. Validasi model skor dengan data nyata, survei sebelum dan sesudah (kelengkapan data, kemampuan menyajikan laporan), tambah OCR nota. Metrik nomor satu: retensi bulan ke-2.
- **3 sampai 6 bulan:** penjajakan dan onboarding mitra pembiayaan, perbaikan model dari umpan balik lapangan, mulai bangun fitur sisi bank (tampilan kolektibilitas, ekspor due diligence).
- **6 sampai 12 bulan:** integrasi B2B API dan marketplace, persiapan multi-kota.

**Soal mitra pembiayaan (LOI) dan realitas lomba:** mengunci LOI bank nyata mustahil dalam sisa waktu lomba, dan itu memang bukan syarat pada tahap ini. Kami memposisikannya sebagai milestone pilot fase pertama dengan rencana konkret: calon mitra (BPR, koperasi, fintech P2P lokal, inkubator kampus), bunyi ajakan, dan lini masa. Paket kemitraan satu halaman dan draf LOI kami siapkan agar siap kirim. **The Ask kami ke penyelenggara (Bank Indonesia, OJK, ASPI, Fintech Indonesia): bantu hubungkan kami ke satu atau dua mitra pilot.**

**Kebutuhan:** penambahan satu data engineer dan satu customer success saat pilot, kredit AI API, dan hosting tier produksi.

### Problem and System Complexity *(190/200 kata)*

Masalah ini tidak bisa diselesaikan dengan cara sederhana karena berlapis:

1. **Bukan soal digitalisasi, tetapi kepercayaan data.** UMKM sudah punya alat kasir, tetapi datanya tidak bisa "bicara" ke pemodal. Menambah satu aplikasi catat saja tidak menyelesaikan kredibilitas. Buktinya, UMKM yang sudah digital pun tidak tahu laba bersihnya.
2. **Heterogenitas F&B.** Pola arus kas warung, kafe, restoran, dan catering berbeda tajam, termasuk musiman. Skor generik akan salah menilai. Model harus membaca stabilitas cashflow dan perputaran stok lintas waktu, bukan omzet sesaat. Inilah alasan perbaikan v2 (belanja stok jadi aset, jendela bergerak).
3. **Dua sisi yang harus percaya sekaligus.** UMKM harus mau mencatat jujur, pemodal harus percaya angkanya. Ini masalah desain insentif dan anti-gaming, bukan sekadar rumus.
4. **Rentan dimanipulasi.** Begitu skor bernilai bagi UMKM, muncul insentif mengakalinya. Sistem harus punya penangkal yang mengikat, bukan sekadar imbauan.

Kompleksitas inilah yang menjadikan solusi ini infrastruktur kepercayaan, bukan aplikasi catat biasa.

### Processing Pipeline and Engineering Depth *(236/250 kata)*

**Alur pemrosesan, dari input ke skor:**

1. **Ingest.** Transaksi POS dan entri Cashbook masuk ke PostgreSQL (tabel transactions, transaction_items, cashbook_entries), plus impor CSV dan Google Sheets.
2. **Pembersihan.** Deduplikasi, standardisasi SKU (fuzzy matching), dan deteksi pengeluaran anomali. Tujuannya menjaga kualitas bahan mentah skor.
3. **Klasifikasi biaya yang benar secara akuntansi.** Belanja bahan baku dan kemasan diperlakukan sebagai inventaris (aset), COGS hanya dari barang yang benar-benar terjual. Ini perbaikan inti v2 yang membuat UMKM musiman tidak terbaca rugi saat menyetok.
4. **Scoring Engine.** Business Health Score 0 sampai 100 dari enam komponen tertimbang: Revenue Growth (25%), Profitability (20%), Cashflow Stability (20%), Expense Efficiency (15%), Inventory Turnover (10%), Customer Retention (10%). Dihitung atas jendela bergerak (30, 60, 90 hari), bukan potret satu hari.
5. **Guardrail.** Skor hanya dihitung bila kelengkapan data minimal 60%, menghindari angka menyesatkan dari data tipis.
6. **Turunan.** Dari skor, konsistensi data, umur usaha, dan kualitas pelaporan dihitung Investment Readiness beserta risk flags dan strengths.
7. **Output ke dua sisi.** UMKM menerima skor, tren, saran AI Coach, dan simulasi. Pemodal menerima ringkasan dan skor saja.

**Kedalaman rekayasa:** logika skor teruji unit test (19 dari 19 lulus), abstraksi AI multi-provider dengan fallback rule-based, dan RLS multi-tenant. Perhitungan berat ada di Route Handler yang siap dijadikan API B2B.

### Algorithm or Rule Quality and Decision Transparency *(240/300 kata)*

**Kualitas model:** Business Health Score adalah model berbobot enam komponen yang dipilih sesuai karakter arus kas harian F&B, bukan skor generik. Bobot dan komponennya terbuka, sehingga tiap angka bisa ditelusuri.

**Transparansi keputusan (bukan black box):**
- UMKM melihat rincian per komponen, jadi tahu mengapa skornya sekian dan bagian mana yang menurunkannya.
- Skor dihitung atas jendela bergerak, sehingga satu hari belanja besar tidak menjatuhkan penilaian.
- Guardrail kelengkapan data 60% ditampilkan terbuka, jadi skor tidak muncul dari data tipis.
- AI Coach memakai pendekatan RAG yang dijangkarkan pada data toko nyata (revenue, expense, stok, skor), bukan pengetahuan umum, sehingga saran spesifik dan menekan halusinasi.

**Kualitas dan anti-gaming, dengan batas jujur:**
- Komponen Inventory Turnover memberi koreksi otomatis: stok yang menumpuk tanpa terjual menaikkan hari persediaan dan menurunkan skornya. Ini menghukum penimbunan stok mati.
- Simulator What-If diberi pengingat jujur bahwa menandai beban sebagai stok hanya menahan skor sesaat.
- **Namun kami akui terbuka:** penguatan anti-gaming yang benar-benar mengikat (bobot Inventory Turnover lebih berat, deteksi pola belanja janggal dibanding penjualan) masih perlu dikerjakan. Kami memposisikan skor sebagai penyaringan awal yang diverifikasi pemodal, bukan vonis mutlak.

Verifikasi model dilakukan lewat unit test dan uji before-after per persona, yang membuktikan perbaikan hanya menyentuh kasus yang salah, bukan menggeser semua skor.

### User Flow, Usability Testing, and Product Iteration *(242/250 kata)*

Pengalaman pengguna diuji nyata, bukan diasumsikan, lalu diperbaiki dari temuan.

**Pengujian yang dijalankan:**
- **PoC bot chat, enam persona (owner dan kasir):** warung gaptek sampai kasir yang mengetik singkat. Keenam menuntaskan onboarding dan mencatat transaksi hanya lewat percakapan. Membuktikan hipotesis "chat menurunkan friksi adopsi".
- **Input natural yang berantakan tetap tertangani:** satu persona mengetik tiga transaksi dalam satu pesan, bot memecahnya menjadi tiga entri dengan tipe benar.
- **Uji ulang lima lensa (v2):** enam persona UMKM, plus bank, investor, dan skeptis, terhadap perubahan produk.

**Iterasi dari temuan (bukti produk berubah karena uji):**
1. PoC menemukan skor jatuh ke nol saat belanja stok besar (persona kafe dan restoran). **Perbaikan:** belanja stok jadi inventaris dan jendela bergerak. Uji before-after membuktikan skor tidak lagi jatuh salah.
2. Persona kafe minta bisa mengecek dampak sebelum bertransfer. **Perbaikan:** fitur Simulasi Belanja ditambahkan.
3. PoC menemukan bug perintah karena tanda baca dan AI Coach menjanjikan kemitraan yang belum ada. **Perbaikan:** keduanya diperbaiki sebelum sampai ke pengguna nyata.
4. Investor menilai peta hanya pemanis. **Perbaikan:** peta dihapus, dashboard difokuskan, data lokasi dipertahankan sebagai filter.
5. Investor menandai risiko gaming. **Tindak lanjut:** pengingat anti-gaming ditambahkan, penguatan penuh dijadwalkan.

Rincian: [[Persona A8 - Investor (Pak Rendra) + Wawancara v2]].

### Team Capability and Execution Ownership *(212/250 kata)*

Tim membangun dan memvalidasi solusi ini sendiri, bukan menyewa atau memakai template jadi.

**Kompetensi dan kepemilikan per peran:**
- **Hamzah (Ketua, AI Engineer):** merancang arsitektur, scoring engine enam komponen, dan integrasi AI multi-provider. Memimpin keputusan produk dan validasi.
- **Dzaky (Developer full-stack):** membangun frontend, backend, basis data, dan modul-modul (POS, Cashbook, dashboard) yang kini berjalan.
- **Gregorius (Marketing dan Business Development):** menyusun model bisnis, positioning, dan strategi go-to-market berbasis komunitas.
- **Aditya (Automation dan Data Engineer):** membangun pipeline data, otomasi, dan PoC bot chat untuk pengujian persona.

**Bukti kemampuan eksekusi:**
- Working prototype enam modul yang live dan bisa didemonstrasikan.
- Perbaikan model skor yang diverifikasi 19 unit test.
- Metode validasi multi-agent berbasis data (silicon sampling) dan PoC yang dijalankan sampai selesai.
- Dokumentasi lengkap dari riset, produk, sampai strategi.

**Kesadaran batas:** tim menyadari kebutuhan menambah satu data engineer dan satu customer success saat pilot, serta pentingnya mengunci mitra pembiayaan. Kesadaran ini bagian dari kepemilikan yang jujur, bukan klaim serba bisa.

### Continuation Readiness *(196/200 kata)*

Solusi ini dirancang berlanjut setelah hackathon, bukan berhenti sebagai purwarupa lomba.

**Rencana kelanjutan konkret:**
- **Pilot Yogyakarta (0 sampai 6 bulan):** 20 sampai 30 UMKM, validasi skor dengan data nyata, ukur retensi bulan ke-2 sebagai metrik utama.
- **Kunci bukti eksternal:** kejar satu penjajakan mitra pembiayaan yang memakai skor untuk menyaring. Ini penentu terbesar kesediaan bayar menurut validasi.
- **Keberlanjutan finansial:** pendapatan langganan (Pro UMKM, Investor Access) plus potensi hibah dan program inkubasi ekosistem BI dan OJK, sehingga bisnis jalan tanpa ketergantungan awal pada investor eksternal.
- **Pengembangan produk:** OCR nota, penguatan anti-gaming, verifikasi data independen, dan fitur sisi bank (kolektibilitas, ekspor due diligence).

**Komitmen tim:** empat anggota berlanjut, dengan rencana menambah data engineer dan customer success saat pilot. Motivasi kuat karena solusi menyentuh masalah nyata yang tim temui langsung di lapangan.

**The Ask ke penyelenggara:** koneksi ke satu atau dua mitra pilot (BPR, koperasi, fintech) dan bimbingan regulasi Innovative Credit Scoring OJK. Ini mempercepat langkah paling menentukan.

### Quantified Value, Business Model, and ROI *(284/300 kata)*

**Nilai terukur bagi tiap sisi:**
- **UMKM:** dari tidak punya bukti performa menjadi punya skor dan proposal pendanaan siap kirim. Menaikkan peluang akses kredit formal yang lebih murah daripada pinjaman informal.
- **Pemodal:** penyaringan UMKM dari hitungan minggu (2 sampai 4 minggu due diligence manual, jutaan rupiah per UMKM) menjadi menit, dengan skor terbanding antar-UMKM.

**Model bisnis: SaaS freemium dwi-sisi.**
- Free (UMKM): Rp0, untuk akuisisi dan pengumpulan data.
- Pro (UMKM): Rp149.000 per bulan, insight penuh AI Coach, skor lengkap, ekspor, dan proposal PDF.
- Investor Access: Rp299.000 per bulan, akses dashboard, detail, watchlist, filter lanjutan.
- API License B2B: Rp2 sampai 5 juta per bulan, integrasi skor ke sistem BPR, koperasi, fintech.
- Matching Fee: 1 sampai 2% per deal yang terfasilitasi, monetisasi jangka panjang.

**ROI dan unit economics, dinyatakan jujur sebagai proyeksi:**
- CAC UMKM Rp50.000 sampai 150.000 (kanal komunitas).
- LTV Pro sekitar Rp1,79 juta pada asumsi retensi 12 bulan. Karena itu kami sajikan LTV pada skenario retensi 3, 6, dan 12 bulan, bukan satu angka optimistis.
- Rasio LTV terhadap CAC berada di rentang belasan sampai puluhan kali pada skenario retensi tinggi. Angka ini proyeksi, akan divalidasi pada pilot lewat retensi nyata.

**Struktur biaya:** engineering dan AI sekitar 60%, AI API dan cloud sekitar 20% (ditekan lewat fallback rule-based dan caching), akuisisi sekitar 15%, operasional dan legal sekitar 5%. Margin SaaS tinggi, biaya marginal per UMKM tambahan kecil. Semua klaim efisiensi diposisikan sebagai proyeksi berbasis benchmark, bukan hasil terukur.

### Adoption, Growth Strategy, and Competitive Moat *(244/250 kata)*

**Strategi menjangkau pengguna:**
- **Akuisisi UMKM berbasis komunitas:** komunitas WhatsApp warung digital, Instagram UMKM lokal, event dan bazar, serta kemitraan kampus. Biaya akuisisi rendah, kepercayaan tinggi.
- **Pintu masuk chat-first:** menurunkan friksi persis di segmen yang paling sulit, terbukti di PoC.
- **Distribusi B2B2C:** BPR, koperasi, dan fintech sebagai kanal ke pemodal sekaligus pengguna skor, menjangkau banyak UMKM tanpa akuisisi satu per satu.

**Pertumbuhan bertahap:** Yogyakarta, lalu kota lain, lalu nasional, diikuti integrasi marketplace dan benchmark industri.

**Moat (keunggulan yang dipertahankan):**
1. **Data flywheel:** makin banyak UMKM dan makin lama dipakai, makin akurat skor dan benchmark, makin tinggi daya tarik bagi pemodal. Ini menurunkan biaya akuisisi seiring waktu dan sulit ditiru pendatang baru.
2. **Dwi-sisi dengan network effect:** satu produk melayani UMKM dan pemodal. Begitu satu mitra pembiayaan memakai skor sebagai penyaringan, makin banyak UMKM mengejar skor karena membuka modal, makin banyak pemodal ikut.
3. **Fokus vertikal F&B:** model skor yang membaca karakter arus kas F&B, bukan generik. Pemain lain berhenti di satu lapisan (kasir, atau scoring sisi lender). Kami menutup rantai transaksi harian sampai keputusan pemodal.
4. **First-party data milik UMKM:** bahan skor lahir dari pemakaian, tidak bergantung data pihak ketiga yang sulit diakses.

Keunggulan utama ada pada model layanan, integrasi ekosistem, dan fokus segmen, bukan sekadar fitur tunggal.

### Video Submission *(attachment)*

[ISI link YouTube Elevator Pitch]. **Wajib publik** (bukan unlisted) dan maksimal 3 menit, sesuai [[Panduan Tahap 3 (Ekstrak Resmi)]]. Konsep dan naskah per blok waktu: [[Konsep Video Elevator Pitch (Tahap 3)]].

### File Attachment (PDF) *(attachment)*

[ISI / ekspor proposal ke PDF, penamaan `S1100 - Judul Proposal`, maksimal 5MB]. Lampiran pendukung: diagram arsitektur, screenshot modul (POS, Cashbook, Health Score, AI Coach, Investor Dashboard), dan tabel before-after skor.

### Link Attachment (satu link publik) *(attachment)*

Demo working prototype: [ISI URL deploy, mis. https://retailmind-v2.vercel.app]. Akun demo: umkm@demo.com dan investor@demo.com (kata sandi demo123456). Pastikan bisa dibuka tanpa minta akses tambahan.

### CV Attachment (LinkedIn atau CV per anggota) *(attachment)*

- **Ketua (Hamzah Arman Husni):** [ISI link]
- **Anggota (Dzaky Faishalariq):** [ISI link]
- **Anggota (Gregorius Bugen Jovi Sitindaon):** [ISI link]
- **Anggota (Aditya Nurrohman):** [ISI link]
- Portofolio tim: https://bit.ly/FinancialFreedomTeamHckaton

---

## Celah yang tersisa dan langkah ke depan (jujur)

> [!warning] Bukan menutupi, tetapi menunjukkan rencana
> Bagian ini sengaja terbuka. Juri berlatar bank dan regulator lebih percaya tim yang tahu batasnya dan punya rencana, daripada tim yang mengaku sempurna.

| Celah                                         | Kenapa belum tuntas                                         | Langkah ke depan                                                                                        |
| --------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Belum ada mitra pembiayaan nyata memakai skor | Mustahil dalam sisa waktu lomba, dan bukan syarat tahap ini | Milestone pilot fase 1. The Ask ke penyelenggara untuk koneksi. Draf LOI dan paket kemitraan disiapkan. |
| Data masih self-reported                      | Verifikasi eksternal butuh integrasi                        | Roadmap: sambungkan mutasi rekening, QRIS, atau agregator pembayaran.                                   |
| Anti-gaming belum mengikat penuh              | Bobot Inventory Turnover masih kecil                        | Perkuat bobot, tambah deteksi pola belanja janggal dibanding penjualan.                                 |
| Fitur sisi bank belum di aplikasi             | Fokus v2 pada kredibilitas skor lebih dulu                  | Bangun tampilan kolektibilitas, ekspor due diligence, login peran bank saat pilot.                      |
| Belum ada bukti skor terkait pelunasan        | Butuh data pilot berjalan                                   | Backtest skor terhadap kinerja pelunasan pada cohort pilot.                                             |
| Nama brand masih sementara                    | Kemungkinan dipakai pihak lain                              | Cek ketersediaan nama, domain, merek, lalu samakan di seluruh materi.                                   |

→ Kembali: [[00 - Beranda (MOC)]] · Dasar: [[DISKUSI v3 - Ready to Win]] · [[Strategi Validasi PMF]] · Form: [[Pertanyaan Tahap 2]]
