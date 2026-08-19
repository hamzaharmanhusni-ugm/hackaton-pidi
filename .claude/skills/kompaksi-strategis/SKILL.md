---
name: kompaksi-strategis
description: Dipakai saat sesi mulai panjang dan konteks penelusuran catatan sudah tidak dipakai lagi. Menentukan kapan memadatkan konteks di batas fase kerja dokumen, dan apa yang harus dicatat lebih dulu supaya tidak hilang.
---

# Kompaksi Strategis

Kompaksi otomatis datang di titik acak: bisa persis saat kamu sedang di tengah menulis satu bab, dan yang terbuang justru kerangka yang baru saja disepakati. Skill ini memindahkan keputusan itu ke tanganmu: **padatkan di batas fase, bukan di titik acak.**

## Kenapa batas fase lebih baik

- **Di batas fase, konteks yang mati sudah jelas.** Setelah penelusuran selesai, isi lengkap dua puluh catatan tidak dibutuhkan lagi; yang dibutuhkan hanya daftar temuannya.
- **Yang penting sudah tertulis.** Di batas fase biasanya sudah ada kerangka, daftar temuan, atau catatan yang tersimpan di berkas, jadi hilangnya percakapan tidak berarti hilangnya hasil.
- **Tidak ada pekerjaan setengah jadi.** Kompaksi di tengah penulisan bab memutus alur kalimat dan memaksa membaca ulang catatan sumber.
- **Fase berikutnya butuh ruang.** Menulis bab baru sambil menyeret sisa konteks fase sebelumnya membuat jawaban melambat dan melantur.
- **Bisa disiapkan.** Karena batas fase bisa diantisipasi, ringkasan serah terima dapat ditulis lebih dulu. Kompaksi otomatis tidak memberi kesempatan itu.

## Fase kerja dokumen di vault ini

1. Menelusuri catatan dan mengumpulkan bahan
2. Menyusun kerangka dan menyepakati arah
3. Menulis satu bab atau satu bagian
4. Memeriksa angka dan konsistensi lintas catatan
5. Satu putaran validasi atau tinjauan
6. Merapikan wikilink, MOC, dan penutupan

## Titik aman untuk memadatkan

- Selesai menelusuri catatan, sebelum mulai menulis. Ini titik paling menguntungkan: isi mentah banyak catatan boleh dilepas, temuannya tetap dipegang.
- Selesai menulis satu bab, sebelum pindah ke bab berikutnya.
- Selesai satu putaran validasi, sebelum putaran berikutnya dimulai.
- Setelah kerangka disetujui pengguna, sebelum penulisan dimulai.
- Setelah pemeriksaan angka selesai dan hasilnya sudah dicatat di berkas.
- Sebelum berpindah ke topik yang sama sekali berbeda, misalnya dari proposal ke naskah pitch.
- Setelah satu rangkaian kerja agent ditutup dan laporan sub-agent sudah diringkas.

## Titik yang haram dipadatkan

- Di tengah menulis satu bab, ketika kerangkanya masih hanya ada di percakapan.
- Ketika ada keputusan pengguna yang belum ditulis ke berkas mana pun.
- Di tengah penelusuran, ketika daftar catatan yang sudah dan belum dibaca masih hidup di kepala saja.
- Saat sedang menelusuri ketidakcocokan angka antar catatan dan sumber selisihnya belum ditemukan.
- Ketika masih ada agent yang berjalan dan hasilnya belum masuk.
- Menjelang pengiriman dokumen, saat daftar temuan kepatuhan belum selesai ditindaklanjuti.
- Ketika pengguna baru saja mengoreksi sesuatu dan koreksinya belum diterapkan.

## Tulis dulu sebelum memadatkan

Kompaksi menghapus percakapan, bukan berkas. Jadi pindahkan dulu yang berharga ke berkas. Sebelum memadatkan, pastikan sudah tersimpan:

- **Keputusan pengguna** beserta alasannya, di catatan yang relevan.
- **Kerangka bab** yang sudah disepakati, di berkas targetnya, meski masih berupa judul-judul kosong.
- **Daftar temuan penelusuran**: catatan mana yang sudah dibaca, apa isinya yang relevan, mana yang masih perlu dibuka.
- **Angka dan sumbernya**, ke `[[Sumber & Asumsi Angka]]` bila memang angka proyek.
- **Daftar pekerjaan tersisa** untuk fase berikutnya, cukup poin-poin.
- **Hal yang sengaja ditolak atau dikesampingkan**, supaya tidak diusulkan ulang setelah konteks bersih.
- **Konflik yang belum selesai**, misalnya angka yang berbeda antar catatan dan belum diputuskan mana yang benar.

Command `/titik-simpan` dipakai untuk menyiapkan ringkasan serah terima ini sebelum kompaksi.

## Ringkasan serah terima

Tulis sebelum memadatkan, supaya sesi setelahnya bisa langsung jalan:

```markdown
## Titik simpan — <fase yang baru selesai>

**Sudah selesai:** <ringkas satu-dua baris>
**Berkas yang tersentuh:** <daftar catatan>
**Keputusan yang mengikat:** <daftar, sertakan alasannya>
**Sudah ditolak, jangan diusulkan lagi:** <daftar>
**Langkah berikutnya:** <fase berikut dan tindakan pertamanya>
**Belum tuntas:** <konflik atau pertanyaan terbuka>
```

## Cara mengusulkan

Kamu memberi tahu **kapan**, pengguna memutuskan **jadi atau tidak**. Ajukan singkat, lalu lanjutkan kerja kalau tidak dijawab:

> Fase penelusuran sudah selesai dan temuannya sudah tercatat. Ini titik aman untuk `/compact` sebelum mulai menulis. Lanjut padatkan?

Jangan mengusulkan kompaksi lebih dari sekali per fase, dan jangan mengusulkan saat sedang berada di titik yang haram dipadatkan.

Skrip pengingat otomatisnya tersedia di `.claude/hooks`; pengaturannya bukan urusan skill ini.

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
