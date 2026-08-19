# Data dan Kepatuhan

Vault ini repo publik, isinya dibaca juri lomba yang diselenggarakan Bank Indonesia dan OJK, dan produknya menyentuh keuangan usaha kecil. Tiga hal itu membuat kesalahan di sini mahal: kunci yang bocor tidak bisa ditarik kembali, data orang lain bukan milik kita, dan klaim regulatori yang keliru merugikan lebih besar daripada klaim yang tidak dibuat sama sekali.

## Rahasia tidak pernah masuk catatan

- Dilarang menulis kunci API, token, kata sandi, string koneksi, atau kunci privat ke dalam berkas `.md`, `.canvas`, maupun lampiran.
- Tempat kunci hanya `.mcp.json` dan berkas lingkungan, yang sudah masuk `.gitignore`. Jangan memindahkannya ke tempat lain.
- Kredensial demo boleh disebut hanya kalau memang sudah dipublikasikan pemilik untuk keperluan penilaian, dan hanya di catatan yang memang membahas cara mencoba aplikasi.
- Kalau menemukan rahasia yang terlanjur tertulis di catatan, jangan hanya menghapusnya. Laporkan ke pengguna, karena rahasia yang pernah masuk riwayat git harus dianggap sudah bocor dan wajib diganti.
- Sebelum menempel isi dari sumber luar, periksa dulu apakah ada nilai rahasia yang ikut terbawa.

## Data usaha dan data pribadi

- Dilarang memuat data pribadi orang sungguhan: nomor telepon, alamat rumah, NIK, nomor rekening, atau foto identitas.
- Data transaksi atau omzet UMKM sungguhan tidak boleh masuk vault tanpa izin tertulis pemiliknya. Kalau butuh contoh, pakai data demo aplikasi atau angka yang jelas ditandai sebagai contoh.
- Persona di vault ini adalah persona sintetis. Jangan memberinya identitas yang bisa tertukar dengan orang nyata, dan jangan menyebut nama usaha nyata sebagai pengguna kecuali memang sudah ada kesepakatan.
- Nama anggota tim dan peran mereka boleh ditulis. Kontak pribadi tidak.

## Klaim regulatori dan klaim keuangan

Klaim di bawah ini hanya boleh ditulis kalau statusnya benar-benar sudah dimiliki, dan wajib melewati agent `peninjau-kepatuhan` sebelum dipublikasikan.

| Jenis klaim | Aturan |
|---|---|
| Berizin, terdaftar, atau diawasi otoritas | Hanya kalau izinnya benar ada. Kalau belum, tulis apa adanya sebagai rencana. |
| Skor kelayakan kredit | Skor produk ini adalah indikator kesehatan usaha, bukan penilaian kelayakan kredit. Jangan disamakan. |
| Jaminan pendanaan atau akses modal | Dilarang. Produk memfasilitasi penilaian, tidak menjanjikan hasil. |
| Kerja sama dengan bank, lembaga, atau penyelenggara | Hanya kalau sudah ada kesepakatan tertulis. Penjajakan ditulis sebagai penjajakan. |
| Akurasi model | Wajib menyebut basis ujinya dan batasnya. Tanpa uji lapangan, tandai sebagai simulasi. |

Kata yang wajib dihindari kecuali benar-benar terbukti: menjamin, memastikan, pasti disetujui, satu-satunya, sudah bekerja sama dengan, resmi didukung.

## Kejujuran soal tahap produk

- Prototipe ditulis sebagai prototipe. Fitur roadmap ditulis sebagai roadmap, bukan sebagai fitur yang sudah berjalan.
- Batas yang diakui sendiri lebih kuat daripada batas yang ditemukan juri. Setiap klaim besar sebaiknya berpasangan dengan satu kalimat tentang batasnya.
- Kalau sebuah kemampuan hanya berjalan pada data demo, sebutkan itu di kalimat yang sama.

## Sebelum mempublikasikan

Publikasi berarti apa pun yang keluar dari vault: dikirim ke panitia, dipakai di depan juri, diunggah, atau dibagikan ke pihak luar.

1. Jalankan agent `peninjau-kepatuhan` atas dokumen yang akan keluar.
2. Cari kunci, token, dan data pribadi yang mungkin terbawa.
3. Pastikan setiap klaim regulatori dan klaim keuangan lolos tabel di atas.
4. Pastikan hasil simulasi tidak terbaca sebagai hasil lapangan, sesuai [[Sumber & Asumsi Angka]] dan aturan bukti.
5. Kalau ada satu temuan berisiko tinggi yang belum selesai, dokumen belum boleh keluar.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
