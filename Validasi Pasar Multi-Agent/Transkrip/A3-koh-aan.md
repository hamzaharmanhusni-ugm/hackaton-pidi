---
title: Transkrip Validasi - A3 Koh Aan
persona: A3 Koh Aan (restoran menengah)
tanggal: 2026-07-20
tags: [retailmind, validasi, transkrip, persona]
---

> [!info] Konteks
> Transkrip simulasi wawancara persona sintetis. Metode dan batasan di [[03 - Metode Validasi Multi-Agent]]. Kartu persona di [[02 - Kartu Persona Agent]].

## Ronde 1 - Problem discovery

**Moderator:** Koh Aan, terima kasih sudah menyempatkan. Saya mulai dari yang umum dulu. Sehari-hari, bagaimana Koh mengatur keuangan rumah makan?

**Koh Aan:** Ya begini. Kasir jalan pakai POS, sudah tujuh tahun rapi. Karyawan input penjualan sama stok tiap hari, saya tidak pegang sendiri. Tiap Senin saya lihat laporan mingguan, penjualan berapa, bahan baku habis berapa. Untuk pembukuan agak resmi, saya pakai jasa lepas, datang sebulan sekali rapikan buku.

**Moderator:** Kalau soal uang masuk dan keluar di luar kasir, misalnya bayar supplier atau tarik untuk pribadi?

**Koh Aan:** Nah itu di rekening. Supplier saya transfer, kadang tunai. Gaji karyawan tanggal 1. Masalahnya angka di POS itu penjualan kotor, sedangkan yang benar-benar masuk kantong ada di rekening dan catatan staf. Jadi kalau mau tahu untung bersih bulan ini, saya harus gabung tiga tempat itu. Capek, tapi ya jalan.

**Moderator:** Selama tujuh tahun ini pernah ada momen di mana urusan data keuangan itu benar-benar jadi hambatan?

**Koh Aan:** Sekarang ini justru lagi kejadian. Saya mau buka cabang kedua, butuh modal. Saya datang ke bank, arus kas saya sebenarnya sehat, tiap bulan masuk seratus lima puluh jutaan. Tapi bank lihat agunan. Restoran saya kontrak, bukan milik sendiri, jadi nilai agunannya kecil di mata mereka. Mereka tidak terlalu peduli dapur saya ramai tiap hari. Yang mereka mau surat, jaminan, angka rapi berbulan-bulan.

**Moderator:** Jadi menurut Koh, masalahnya di jaminan, atau di membuktikan bahwa usahanya memang jalan?

**Koh Aan:** Dua-duanya, tapi yang bikin saya jengkel itu pembuktiannya. Saya tahu usaha saya bagus. Tapi buat meyakinkan orang yang pegang uang, saya harus kumpulkan data dari mana-mana, cetak, susun, jelasin satu-satu. Prosesnya lama, mereka periksa manual. Sudah gitu belum tentu cair. Coba kalau ada cara nunjukin "ini lho kondisi usaha saya" yang mereka langsung percaya, saya tidak perlu bolak-balik.

## Ronde 2 - Reaksi solusi

**Moderator:** Dari yang Koh ceritakan itu nyambung dengan konsep yang mau saya perlihatkan. Ada platform yang mengubah data transaksi harian jadi satu skor kesehatan bisnis, angka nol sampai seratus, plus penilaian kesiapan didanai, rendah, sedang, atau tinggi. Skor itu yang ditunjukkan ke pemodal, bukan transaksi mentahnya.

**Koh Aan:** Sebentar. Skor nol sampai seratus ini yang bikin siapa? Sistemnya sendiri dari data saya?

**Moderator:** Betul, dihitung otomatis dari transaksi yang masuk. Pemodal cuma lihat skor dan ringkasan, tidak lihat jualan Koh satu per satu.

**Koh Aan:** Itu bagian yang saya suka, jujur. Saya memang tidak mau buka semua isi dapur ke orang bank. Tapi pertanyaan saya yang lebih penting: skor ini benar dilihat pemodal, atau cuma indikator internal buat saya sendiri? Karena kalau cuma buat saya lihat-lihat, POS saya juga sudah kasih laporan. Saya tidak butuh angka tambahan buat pajangan.

**Moderator:** Arahnya memang supaya jadi bahasa yang dipercaya pemodal, bukan sekadar internal.

**Koh Aan:** Kalau memang begitu, baru menarik. Tapi saya belum percaya sebelum lihat ada pemodal betulan yang mau pakai angka itu buat keputusan. Angka gampang dibikin, yang susah bikin bank atau investor mau nurut sama angka itu. Siapa yang jamin skornya kredibel? Kalau tiap platform bikin skor sendiri-sendiri, buat pemodal ya sama saja tidak ada artinya.

**Moderator:** Itu catatan yang wajar. Selain kredibilitas skor, ada hal lain yang langsung Koh pikirkan?

**Koh Aan:** Iya, ini nambah kerjaan atau tidak. Saya sudah punya sistem jalan. Kalau ini artinya karyawan saya harus input ulang di aplikasi baru, langsung saya coret. Waktu mereka itu ada harganya buat saya.

## Ronde 3 - Walkthrough onboarding (chat)

**Moderator:** Justru soal input itu ada yang mau saya perlihatkan. Pencatatannya lewat chat. Jadi tidak ada aplikasi rumit. Cukup ketik di bot Telegram, misalnya "jual rendang 25rb", atau kirim foto struk, nanti dibaca otomatis. Coba kita bayangkan Koh baru daftar dan mau catat transaksi pertama.

**Koh Aan:** Lewat chat saja? Oke, ini beda. Jadi tinggal ketik "nasi gudeg lima porsi 60 ribu" gitu?

**Moderator:** Persis. Bisa juga foto struk, sistemnya yang mengubah jadi data.

**Koh Aan:** Pertanyaan pertama saya: siapa yang ngetik ini? Kalau saya suruh karyawan kasir ketik ulang tiap transaksi ke Telegram, itu dua kali kerja. Sudah masuk POS, masuk chat lagi. Tidak masuk akal, jam sibuk mereka tidak akan sempat, dan pasti banyak yang lupa. Saya juga tidak mungkin ketik sendiri seratus transaksi sehari.

**Moderator:** Berarti untuk Koh, input manual satu-satu ini tidak realistis di volume restoran.

**Koh Aan:** Tidak realistis sama sekali. Warung kopi kecil mungkin muat, transaksinya sedikit. Tempat saya tidak. Makanya pertanyaan kunci saya: bisa tarik data dari POS yang sudah saya pakai tidak? Kalau bisa nyedot langsung dari POS, karyawan saya tidak usah ngapa-ngapain, data mengalir sendiri, baru saya mau dengar lanjut. Kalau tidak bisa dan harus manual, buat saya produk ini belum jadi.

**Moderator:** Jadi integrasi POS itu bukan fitur tambahan, tapi syarat.

**Koh Aan:** Syarat mati. Chat ini enak buat catatan yang lepas dari POS, misalnya saya bayar tukang servis kulkas pakai uang tunai, itu tidak masuk kasir. Nah yang begitu saya sendiri bisa ketik cepat, "keluar 300rb servis kulkas", gampang. Untuk itu chat berguna. Tapi tulang punggung penjualan harus otomatis dari POS. Dua-duanya harus jalan, jangan cuma chatnya.

## Ronde 4 - Willingness to pay dan keberatan

**Moderator:** Baik, kita bicara harga. Ada versi gratis untuk mulai. Untuk fitur penuh, termasuk AI Coach namanya Rinda yang kasih saran dan bantu cek kelayakan KUR, ada paket Pro seratus empat puluh sembilan ribu per bulan. Di titik ini saya minta rekan saya, Mbak Sinta, ikut menimbang.

**Mbak Sinta:** Koh Aan, saya bantu tekan sedikit ya biar jujur. Seratus empat puluh sembilan ribu sebulan untuk usaha omzet seratus lima puluh juta itu kecil sekali, kan? Harusnya tidak masalah buat Koh.

**Koh Aan:** Nah ini cara pikir yang saya tidak suka. Murah atau mahal itu bukan dibanding omzet, tapi dibanding apa yang saya sudah bayar dan apa yang saya dapat. Keberatan pertama saya jelas: saya sudah bayar POS tiap bulan. Sekarang saya disuruh bayar lagi seratus empat puluh sembilan ribu buat sesuatu yang sebagian datanya dari POS itu juga. Buat saya itu tumpang tindih. Kenapa saya harus bayar dua kali untuk data yang sama?

**Mbak Sinta:** Tapi POS Koh tidak bikin skor buat pemodal. Ini beda produk.

**Koh Aan:** Betul beda, dan itu satu-satunya alasan saya masih duduk di sini. Tapi keberatan kedua saya belum kejawab: integrasi. Saya belum lihat buktinya bisa narik data dari POS saya. Kalau ternyata tidak connect dan ujung-ujungnya karyawan saya harus input manual, ini malah nambah beban kerja, bukan ngurangin. Saya bayar, karyawan saya tambah repot, dan datanya belum tentu lengkap. Itu rugi dua kali.

**Mbak Sinta:** Anggap integrasinya lancar dan karyawan tidak nambah kerja. Masih keberatan?

**Koh Aan:** Kalau dua itu beres, keberatan saya tinggal satu, dan ini yang paling menentukan: hasilnya. Seratus empat puluh sembilan ribu kali dua belas bulan itu hampir dua juta setahun. Buat saya itu bukan soal angkanya, tapi soal apakah ini benar bikin pengajuan modal saya lebih cepat cair atau bunganya lebih ringan. Kalau skor ini beneran bikin pemodal atau bank lebih percaya dan proses due diligence yang biasanya lama itu jadi cepat, dua juta setahun itu tidak ada apa-apanya dibanding satu cabang yang bisa buka lebih cepat.

**Mbak Sinta:** Jadi Koh mau bayar?

**Koh Aan:** Saya mau coba, dengan syarat. Saya pakai yang gratis dulu, saya buktikan integrasi POS-nya jalan dan karyawan saya tidak nambah kerja. Terus saya mau lihat ada satu saja jalur pendanaan nyata yang menghargai skor ini, entah bank partner atau lembaga KUR. Kalau dua itu saya lihat sendiri, saya bayar Pro, tidak nawar. Tapi sebelum itu, buat saya ini masih janji. Saya orang dapur, saya percaya yang sudah matang, bukan yang di menu.

## Ringkasan sinyal (sudut pandang persona)
- **Problem-solution fit:** Kuat pada masalah inti. Koh Aan mengangkat sendiri soal susahnya membuktikan performa usaha ke pemodal dan lambatnya due diligence, tanpa dipancing. Nilai jual utama yang dia tangkap: pemodal cukup lihat skor dan ringkasan, bukan transaksi mentah. Skeptis pada kredibilitas skor, dia menuntut bukti ada pemodal betulan yang mau memakai skor itu untuk keputusan.
- **Willingness to pay:** Bersyarat, bukan langsung. Menolak logika "murah dibanding omzet". Bersedia bayar Pro Rp149.000/bln hanya setelah dua bukti terpenuhi lewat paket gratis: integrasi POS jalan tanpa menambah kerja karyawan, dan minimal satu jalur pendanaan nyata yang menghargai skor. Membingkai biaya sebagai investasi ke percepatan modal cabang, bukan biaya bulanan.
- **Friksi onboarding:** Tinggi kalau input manual. Volume restoran membuat pencatatan chat satu per satu tidak realistis. Chat dinilai berguna hanya untuk transaksi non-POS (pengeluaran tunai lepas). Syarat mati: sinkronisasi otomatis dari POS existing supaya karyawan tidak kerja dua kali.
- **Keberatan utama:** (1) Sudah bayar POS, menolak biaya tumpang tindih untuk data yang sama. (2) Integrasi POS belum terbukti, risiko malah menambah beban kerja karyawan. (3) Nilai akhir belum pasti, ragu skor benar mempercepat pencairan modal sebelum ada bukti pemodal yang memakainya.

---

## Audit Pak Budi (Validator Riset)

**Grounding.** Kuat. Agunan restoran dinilai rendah meski cashflow sehat cocok langsung dengan jangkar agunan usaha F&B bernilai likuidasi rendah, bank ragu meski arus kas sehat. Tumpang tindih biaya karena sudah bayar POS adalah keberatan nyata.

**Hipotesis.** Integrasi POS sebagai syarat mati dan tuntutan jalur pendanaan nyata yang menghargai skor perlu konfirmasi lapangan, terutama kesediaan penyedia POS membuka data.

**Halusinasi/janggal.** Tidak ada.

**Sycophancy.** Kritis dan realistis. Keberatan: sudah bayar POS, integrasi belum terbukti, nilai akhir belum pasti. Aturan dua keberatan terpenuhi.

**Tingkat keyakinan.** Problem fit (agunan F&B): Tinggi. Syarat integrasi: Tinggi. WTP: Rendah sebelum integrasi terbukti.
