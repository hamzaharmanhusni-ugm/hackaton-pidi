# Bukti dan Angka

Vault ini dinilai juri lomba fintech yang diselenggarakan bersama Bank Indonesia dan OJK. Angka yang tidak bisa dipertanggungjawabkan lebih merusak daripada angka yang kecil tapi jujur. Aturan di bawah ini tidak punya pengecualian.

## Tidak ada angka tanpa sumber

- Setiap angka yang muncul di catatan wajib punya jejak ke [[Sumber & Asumsi Angka]].
- Kalau angka baru muncul dan belum ada di sana, tambahkan dulu entrinya di [[Sumber & Asumsi Angka]], baru tulis angkanya di catatan.
- Entri sumber minimal memuat: angka, satuan, asal (lembaga, laporan, hasil hitung sendiri), tahun data, dan cara memperolehnya.
- Angka hasil turunan wajib menyebut rumus dan angka masukannya, bukan hanya hasil akhirnya.
- Kalau kamu tidak punya sumber, jangan mengarang. Tulis `[angka]` sebagai placeholder dan catat sebagai lubang yang harus diisi.
- Dilarang menaruh angka ilustratif yang terlihat seperti data proyek asli. Contoh fiktif wajib diberi penanda "contoh" atau "misal" tepat di kalimatnya.

## Setiap klaim menyebut tingkat buktinya

Gunakan empat tingkat berikut, dan tulis tingkatnya secara eksplisit di dekat klaim.

| Tingkat | Arti | Cara menulisnya |
|---|---|---|
| Terukur | Berasal dari data nyata yang dikumpulkan tim atau dari aplikasi live | "berdasarkan data terukur dari ..." |
| Sekunder | Berasal dari sumber eksternal terbitan lembaga | "menurut [nama lembaga], lihat [[Sumber & Asumsi Angka]]" |
| Simulasi | Hasil validasi multi-agent, persona sintetis, atau model | "hasil simulasi, lihat [[04 - Laporan Validasi Sintetis]]" |
| Asumsi | Angka yang ditetapkan tim tanpa sumber eksternal | "asumsi tim, dasar penetapan: ..." |

Aturan turunan:

- Proyeksi finansial dan ukuran pasar selalu ditandai minimal sebagai asumsi atau sekunder, tidak pernah terukur.
- Klaim tentang akurasi skor tanpa uji lapangan selalu ditandai simulasi.
- Kalau satu paragraf mencampur dua tingkat bukti, pisahkan jadi dua kalimat agar tingkatnya jelas.

## Simulasi bukan hasil lapangan

- Hasil validasi persona sintetis, uji multi-agent, dan skenario model adalah simulasi. Tidak boleh ditulis seolah-olah wawancara pengguna nyata, uji coba lapangan, atau adopsi pasar.
- Dilarang memakai kata "pengguna kami", "pelanggan", "responden", atau "mitra" untuk entitas sintetis. Pakai "persona sintetis" atau "skenario uji".
- Setiap catatan yang memuat hasil simulasi wajib menyebut metodenya dan menautkan [[03 - Metode Validasi Multi-Agent]].
- Kalau sebuah angka simulasi dipakai di proposal atau naskah pitch, penandanya ikut dibawa. Jangan hilang saat dipindahkan ke folder `07 - Proposal & Submission` atau `08 - Pitch & Presentasi`.
- Jangan mengubah simulasi jadi klaim lapangan hanya karena kalimatnya terdengar lebih kuat. Klaim yang runtuh di sesi tanya jawab juri merugikan lebih besar.

## Satu angka, satu nilai, di semua catatan

- Angka yang sama wajib bernilai sama di seluruh vault. Tidak boleh ada dua versi ukuran pasar, dua versi target pengguna, atau dua versi proyeksi pendapatan.
- Sebelum menulis angka, cari dulu apakah angka itu sudah ada di vault. Kalau ada, pakai nilai yang sama persis, termasuk satuan dan pembulatannya.
- Satuan dan pembulatan juga harus konsisten. Jangan menulis "1,2 miliar" di satu catatan dan "1.200 juta" di catatan lain.
- Kalau kamu menemukan dua nilai berbeda untuk hal yang sama, jangan diam-diam memilih salah satu. Laporkan ketidaksesuaiannya, sebutkan kedua lokasinya, dan minta keputusan.
- Jalankan `/cek-angka` atau agent `pemeriksa-angka` sebelum menyatakan sebuah dokumen siap.

## Perubahan angka wajib merambat

Kalau sebuah angka berubah, satu perubahan belum selesai sampai lima langkah ini tuntas.

1. Perbarui entri angka itu di [[Sumber & Asumsi Angka]], termasuk alasan perubahan.
2. Cari seluruh kemunculan angka lama di vault dengan pencarian teks, bukan dari ingatan.
3. Perbarui setiap kemunculan, termasuk di tabel, diagram, kanvas, dan naskah pitch.
4. Periksa angka turunan yang memakai angka itu sebagai masukan. Hitung ulang, jangan tebak.
5. Perbarui [[STATUS]] kalau perubahan itu memengaruhi kesiapan submission.

Aturan tambahan:

- Jangan pernah mengubah angka di satu catatan saja lalu menyerahkan sisanya "untuk nanti".
- Kalau kamu tidak sempat merambatkan perubahan, jangan mengubah angkanya sama sekali. Catat sebagai temuan.

## Periksa sebelum selesai

- Setiap angka punya entri di [[Sumber & Asumsi Angka]].
- Setiap klaim menyebut satu dari empat tingkat bukti.
- Tidak ada hasil simulasi yang tampil sebagai hasil lapangan.
- Nilai, satuan, dan pembulatan seragam lintas catatan.
- Semua turunan dari angka yang berubah sudah dihitung ulang.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
