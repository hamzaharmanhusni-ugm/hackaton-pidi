---
name: verifikasi-klaim
description: Dipakai saat menulis atau meninjau klaim, angka, atau pernyataan hasil di catatan vault — aktifkan sebelum kalimat berisi angka, capaian, dampak, atau superlatif masuk ke proposal, naskah pitch, jawaban juri, atau catatan validasi.
---

# Verifikasi Klaim

Yang kamu verifikasi di sini adalah **klaim di dokumen**, bukan kode. Vault ini tidak punya build, test runner, atau linter. Alat verifikasinya cuma tiga: sumber, tingkat bukti, dan lawan argumen.

Konteksnya regulated fintech (Bank Indonesia, OJK, ASPI). Klaim soal skor kredit, kelayakan pendanaan, dan data UMKM yang melampaui buktinya bukan sekadar lemah — itu risiko kepatuhan. Untuk batasan kepatuhannya, pakai skill `tinjauan-kepatuhan`.

## 1. Tingkatan kekuatan bukti

Urut dari paling lemah ke paling kuat. Setiap klaim harus bisa ditempatkan di salah satu tingkat.

| Tingkat | Nama | Isi | Bahasa yang boleh dipakai |
|---|---|---|---|
| T1 | Asumsi internal | Perkiraan tim tanpa pengukuran apa pun | "kami asumsikan", "estimasi tim" |
| T2 | Turunan / proyeksi | Hasil kalkulasi di atas asumsi T1 | "proyeksi base-case", "jika asumsi X benar" |
| T3 | Simulasi agent | Validasi persona sintetis, lihat [[03 - Metode Validasi Multi-Agent]] dan [[04 - Laporan Validasi Sintetis]] | "indikasi dari validasi sintetis" |
| T4 | Uji internal | Sesuatu yang benar-benar dijalankan tim: prototipe di https://retailmind-v2.vercel.app, backtest [[07 - Scoring Engine]], demo alur | "kami uji sendiri pada ..." |
| T5 | Bukti pihak luar | Lembaga resmi yang terdaftar di [[Sumber & Asumsi Angka]], atau hasil dari mitra/pengguna nyata di luar tim | "menurut ...", "berdasarkan data ..." |

Tiga aturan yang mengikat:

1. **Klaim gabungan turun ke tingkat terlemah.** Angka T5 dikali asumsi T1 menghasilkan klaim T2, bukan T5.
2. **T3 tidak boleh ditulis seolah T5.** Jangan pernah menyebut persona sintetis sebagai "responden", "hasil survei", atau "wawancara pengguna". Sebut apa adanya: simulasi.
3. **Menaikkan tingkat lebih baik daripada memperhalus kalimat.** Kalau masih bisa dinaikkan (cari sumber, jalankan uji), naikkan dulu sebelum melunakkan bahasa.

## 2. Setiap klaim wajib menyebut tingkat buktinya

Klaim yang bukan T5 harus membawa penandanya di kalimat itu sendiri, bukan di catatan kaki yang tidak ikut terbaca juri. Contoh perbaikan:

| Sebelum | Sesudah |
|---|---|
| "Platform menghemat biaya due diligence [angka] per UMKM." | "Dengan asumsi biaya due diligence [angka] per UMKM (estimasi internal, belum tersitasi), penghematannya diproyeksikan [angka]." |
| "UMKM ingin fitur ini." | "Validasi sintetis pada persona [nama persona] menunjukkan minat pada fitur ini; belum diuji ke pengguna nyata." |
| "Skor kami akurat." | "Backtest internal pada dataset demo menunjukkan [hasil]; akurasi pada data nyata divalidasi saat pilot." |

Kalau sebuah kalimat tidak bisa membawa penanda tanpa jadi janggal, itu tanda klaimnya terlalu besar. Kecilkan klaimnya.

## 3. Lingkar verifikasi

Jalankan berulang per klaim, bukan sekali jalan untuk seluruh dokumen.

1. **Tulis klaim.** Satu kalimat, satu pernyataan yang bisa salah. Kalau tidak mungkin salah, itu slogan, bukan klaim — lewati.
2. **Cari sumber.** Cari di vault dulu, baru ke luar. Mulai dari [[Sumber & Asumsi Angka]] dan catatan riset terkait. Kalau tidak ketemu apa-apa, tingkatnya T1 — terima itu, jangan dikarang.
3. **Uji lawan argumen.** Tulis bantahan juri paling tajam yang kamu bisa, lalu jawab. Kalau bantahan menang, klaim belum lolos. Simpan pasangan bantahan-jawaban yang bagus ke [[13 - Pitch & Antisipasi Juri]].
4. **Perbaiki kalimat.** Turunkan kekuatan bahasa sampai cocok dengan tingkat bukti, atau kuatkan buktinya lalu naikkan tingkat.
5. **Catat sumbernya** ke [[Sumber & Asumsi Angka]] memakai format di bagian 5.

Putaran berhenti kalau ketiganya terpenuhi: bahasa cocok dengan tingkat bukti, lawan argumen terjawab, dan barisnya sudah ada di [[Sumber & Asumsi Angka]]. Kalau setelah tiga putaran klaim tetap tidak bisa didukung, **hapus klaimnya**. Menghapus klaim lemah adalah hasil yang sah, bukan kegagalan.

## 4. Kata penanda klaim rawan

Setiap kemunculan kata berikut wajib diperiksa, tanpa kecuali:

`terbukti` · `pasti` · `satu-satunya` · `semua` · `menjamin` · `dijamin` · `selalu` · `tidak pernah` · `pertama di Indonesia` · `100%` · `tentu` · `jelas` · `terbaik` · `revolusioner` · `otomatis`

Sapu cepat sebelum submit:

```bash
grep -rniE "terbukti|pasti|satu-satunya|menjamin|dijamin|selalu|pertama di indonesia|100%|terbaik" "07 - Proposal & Submission" "08 - Pitch & Presentasi"
```

Selain kata, curigai juga pola ini:

- Angka tanpa satuan, tanpa periode, atau tanpa sumber.
- Persentase tanpa pembilang atau tanpa baseline ("naik 80%" — dari berapa ke berapa).
- Konstruksi "hingga ...", yang menyembunyikan kasus terbaik sebagai kasus umum.
- Klaim kepatuhan tinggi: "menjamin kelayakan kredit", "pasti disetujui pemodal", "menggantikan analis kredit". Ini selalu harus dilunakkan jadi peran pendukung keputusan.

## 5. Format pencatatan di [[Sumber & Asumsi Angka]]

Catatan itu adalah satu-satunya tempat kebenaran untuk angka. Tambahkan satu baris ke tabel klasifikasi, pakai kosakata kolom `Jenis` yang sudah ada di sana:

```markdown
| [nama angka] | [nilai] | [Jenis] | [dasar atau sumber, dengan wikilink atau tautan] |
```

Pemetaan tingkat ke kolom `Jenis`: T5 → `Tersitasi`; T4 → `Uji internal` (sebutkan apa yang diuji); T3 → `Validasi sintetis`; T2 → `Proyeksi` atau `Turunan`; T1 → `Asumsi` atau `Estimasi internal`. Harga dan target yang kita tetapkan sendiri tetap `Keputusan internal` / `Target internal`.

Klaim non-angka dicatat dengan kolom nilai diisi `(pernyataan)`. Angka T1 dan T2 yang menopang klaim besar juga harus masuk daftar asumsi yang wajib divalidasi saat pilot di catatan yang sama.

## 6. Format keluaran

```markdown
LAPORAN VERIFIKASI KLAIM
Berkas: [[nama catatan]]

| # | Klaim (kutipan pendek) | Tingkat | Bahasa cocok | Tindakan |
|---|---|---|---|---|
| 1 | "..." | T2 | tidak | tambahkan penanda asumsi |
| 2 | "..." | T5 | ya | - |

Wajib direvisi sebelum submit:
1. [klaim] - [alasan] - [usulan kalimat pengganti]

Baris baru untuk [[Sumber & Asumsi Angka]]:
| ... | ... | ... | ... |

Lawan argumen yang belum terjawab:
- [pertanyaan juri] - [status]

Status: SIAP / PERLU REVISI
```

Laporan ini keluaran ke percakapan. Jangan membuat berkas laporan baru di vault; perubahan yang disetujui langsung diterapkan ke catatan aslinya dan ke [[Sumber & Asumsi Angka]].

> Diadaptasi dari [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT) untuk vault RetailMind AI.
