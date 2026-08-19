---
name: tinjauan-kepatuhan
description: Dipakai sebelum sebuah dokumen dipublikasikan, dikirim ke panitia, atau dipakai di depan juri. Aktifkan saat menyentuh proposal, jawaban tahap, naskah pitch, konsep video, atau modul hackathon yang memuat klaim skor kredit, kelayakan pendanaan, status regulatori, atau data UMKM.
---

# Tinjauan Kepatuhan Dokumen

Lomba ini diselenggarakan regulator (Bank Indonesia, OJK, ASPI, Fintech Indonesia, APUVINDO, LPPI). Satu klaim yang kelewat besar bisa merusak kredibilitas seluruh dokumen. Skill ini adalah daftar periksa kepatuhan **klaim dan data**, bukan keamanan aplikasi.

Jalankan daftar di bawah **satu per satu**, dari atas ke bawah. Untuk setiap butir: kutip kalimat yang bermasalah, sebut nomor barisnya, lalu usulkan versi perbaikannya. Jangan meloncat ke kesimpulan sebelum semua tujuh bagian selesai diperiksa.

## Sebelum mulai

- Baca dokumen targetnya utuh, jangan hanya bagian yang diubah.
- Buka `[[Sumber & Asumsi Angka]]` sebagai rujukan angka yang sah.
- Buka `[[STATUS]]` untuk memastikan status yang diklaim memang status terkini.
- Kalau dokumen menyebut hasil validasi, buka `[[04 - Laporan Validasi Sintetis]]` dan `[[03 - Metode Validasi Multi-Agent]]` untuk tahu metodenya sintetis atau lapangan.

## 1. Klaim kelayakan kredit dan pendanaan

- [ ] Tidak ada kalimat yang menyatakan produk **menentukan** atau **menjamin** kelayakan kredit seseorang. Posisi yang benar: memberi sinyal pendukung untuk keputusan pihak lain.
- [ ] Tidak ada janji hasil kepada UMKM (pasti dapat pinjaman, pasti dapat investor, pasti naik omzet).
- [ ] Tidak ada angka akurasi, tingkat persetujuan, atau tingkat gagal bayar tanpa rujukan ke `[[Sumber & Asumsi Angka]]`.
- [ ] Skor 0-100 dan Investment Readiness dijelaskan sebagai **indikator**, bukan keputusan kredit.
- [ ] Kalau ada perbandingan dengan penilaian kredit konvensional, disebut sebagai pelengkap, bukan pengganti.

Berisiko: "RetailMind AI menentukan UMKM mana yang layak menerima pinjaman."
Perbaikan: "RetailMind AI menyajikan skor kesehatan bisnis sebagai bahan pertimbangan tambahan; keputusan pendanaan tetap ada pada lembaga pemberi dana."

Berisiko: "Skor kami menjamin risiko gagal bayar turun."
Perbaikan: "Skor kami dirancang untuk memperjelas profil risiko; dampak terhadap gagal bayar belum diuji pada portofolio nyata."

## 2. Status regulatori

- [ ] Tidak ada klaim terdaftar, berizin, diawasi, atau bermitra dengan Bank Indonesia, OJK, atau lembaga penyelenggara lain kecuali memang tercatat di vault.
- [ ] Keikutsertaan lomba tidak ditulis seolah-olah menjadi dukungan, rekomendasi, atau afiliasi resmi penyelenggara.
- [ ] Tidak menyebut nama lembaga keuangan, bank, atau penyalur dana sebagai mitra kalau statusnya belum ada di vault.
- [ ] Rencana kepatuhan ditulis sebagai rencana, bukan sebagai keadaan yang sudah tercapai.

Berisiko: "Produk kami sudah sesuai regulasi OJK dan didukung Bank Indonesia."
Perbaikan: "Produk kami dirancang mengikuti prinsip perlindungan data dan kehati-hatian; proses perizinan formal belum ditempuh dan menjadi bagian roadmap."

## 3. Data pribadi dan data usaha UMKM

- [ ] Tidak ada nama pemilik usaha, nama warung, alamat, nomor telepon, surel, atau akun media sosial responden yang bisa mengidentifikasi orang nyata.
- [ ] Tidak ada tangkapan layar atau tabel transaksi yang memuat identitas pelanggan.
- [ ] Persona dan responden ditulis dengan label anonim, dan disebut jelas apakah persona itu sintetis atau hasil wawancara.
- [ ] Dokumen menyebut dasar pengumpulan data dan bahwa data usaha dipakai atas izin pemiliknya, bila memang begitu adanya.
- [ ] Tidak ada data usaha spesifik yang bisa dilacak ke satu UMKM tertentu tanpa persetujuan tertulis.

Berisiko: "Bu Sari, pemilik Warung Sari di Jalan Kaliurang, omzetnya naik setelah memakai aplikasi kami."
Perbaikan: "Salah satu persona UMKM F&B (dianonimkan) menggambarkan pola yang sama; angka pada contoh ini bersifat ilustratif."

## 4. Kredensial dan akun demo yang tercecer

- [ ] Tidak ada kata sandi, kunci API, token, atau string koneksi di catatan mana pun yang akan dikirim.
- [ ] Akun demo untuk juri, kalau ada, tidak ditulis lengkap dengan kata sandinya di dokumen publik; rujuk ke kanal pengiriman resmi panitia.
- [ ] Tautan aplikasi live (https://retailmind-v2.vercel.app) tidak disertai kredensial di badan teks.
- [ ] Tangkapan layar tidak memperlihatkan token pada URL, panel admin, atau isi berkas konfigurasi.
- [ ] Hook `jaga-rahasia.js` di `.claude/hooks` menangkap pola umum, tetapi tetap periksa manual: hook bukan pengganti pembacaan.

Berisiko: "Login juri: [surel] / Password: [kata sandi]."
Perbaikan: "Akun demo untuk juri dikirim terpisah melalui kanal resmi panitia."

## 5. Membedakan hasil simulasi dari hasil lapangan

Ini butir paling sering dilanggar dan paling mudah dibongkar juri.

- [ ] Setiap angka hasil validasi diberi label sumbernya: simulasi multi-agent, data sintetis, uji internal, atau wawancara lapangan.
- [ ] Tidak ada kata "pengguna", "pelanggan", "responden", atau "pilot" untuk menyebut entitas yang sebenarnya hasil simulasi.
- [ ] Status prototipe ditulis apa adanya; jangan menaikkan prototipe menjadi produk yang sudah dipakai pasar.
- [ ] Kalau satu bagian mencampur hasil simulasi dan hasil nyata, pisahkan menjadi dua paragraf atau dua kolom tabel.

Berisiko: "Dari [angka] UMKM pengguna kami, mayoritas melaporkan peningkatan."
Perbaikan: "Dari [angka] persona sintetis dalam simulasi multi-agent, mayoritas menunjukkan pola peningkatan. Validasi lapangan belum dilakukan."

## 6. Atribusi sumber pihak ketiga

- [ ] Setiap statistik pasar, angka TAM SAM SOM, dan kutipan riset menyebut lembaga sumbernya dan tercatat di `[[Sumber & Asumsi Angka]]`.
- [ ] Angka turunan hasil perhitungan sendiri ditandai sebagai asumsi tim, bukan disamarkan sebagai data resmi.
- [ ] Tidak ada logo, merek, atau nama produk pihak lain yang dipakai seolah menyiratkan kerja sama.
- [ ] Gambar, ikon, dan materi yang dipakai jelas asalnya dan boleh dipakai.
- [ ] Nama produk pesaing hanya muncul dalam perbandingan faktual, tanpa klaim negatif yang tak berdasar.

Berisiko: "Pasar UMKM F&B Indonesia bernilai [angka] triliun."
Perbaikan: "Pasar UMKM F&B Indonesia diperkirakan bernilai [angka] triliun (sumber: [lembaga], lihat [[Sumber & Asumsi Angka]])."

## 7. Konsistensi lintas dokumen

- [ ] Angka yang sama di proposal, naskah pitch, dan modul hackathon memang bernilai sama.
- [ ] Status yang diklaim seragam dengan `[[STATUS]]` dan `[[Jawaban Tahap 3 (FINAL)]]`.
- [ ] Tidak ada tanggal atau tenggat yang ditulis ulang dari ingatan; selalu rujuk catatan sumbernya.

## Format keluaran

```markdown
## Tinjauan Kepatuhan — <nama dokumen>

**Putusan:** Aman dikirim / Perlu perbaikan / Tahan dulu

### Temuan wajib diperbaiki
1. [Bagian 1 - Klaim kredit] Baris 42: "<kutipan>"
   Risiko: menjanjikan hasil pendanaan.
   Perbaikan: "<kalimat pengganti>"

### Temuan disarankan
1. ...

### Butir yang lolos
Bagian 3, 4, 6 bersih.

### Yang tidak bisa saya verifikasi
- <hal yang butuh konfirmasi tim>
```

## Batas kewenangan

Jangan menyunting dokumen diam-diam untuk "memperbaiki" klaim. Laporkan temuan, usulkan kalimat pengganti, biarkan pengguna yang memutuskan. Kalau ragu apakah sebuah klaim berlebihan atau tidak, perlakukan sebagai berlebihan dan tanyakan.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
