# CLAUDE.md — panduan kerja Claude Code di vault ini

> Berkas konfigurasi Claude Code, bukan bagian isi vault. Jangan ditautkan dari `[[00 - Beranda (MOC)]]` dan jangan diberi nomor folder.

## Direktori ini apa

**Vault Obsidian** berisi dokumentasi, riset, validasi, proposal, dan naskah pitch **RetailMind AI** — platform *Business Health Scoring* untuk UMKM F&B Indonesia, yang diajukan tim Financial Freedom (UGM) ke DIGDAYA X Hackathon PIDI 2026 (Bank Indonesia, OJK, ASPI, Fintech Indonesia, APUVINDO, LPPI).

**Tidak ada kode aplikasi di sini.** Kode ada di repo terpisah `Hacketon_financial_freedom` (branch `v2`). Jangan menawarkan pekerjaan build, test runner, atau perkakas pemrograman di direktori ini — yang dikerjakan di sini adalah catatan Markdown, kanvas, dan dokumen.

Titik masuk isi vault: `00 - Beranda (MOC).md`. Struktur folder dan dokumen kunci ada di tabel dalam catatan itu.

## Bahasa

Seluruh isi vault dan seluruh balasan ke pengguna memakai **bahasa Indonesia**. Istilah teknis Claude Code (agent, skill, hook, command, frontmatter, wikilink) boleh tetap Inggris.

## Aturan yang selalu berlaku

Enam berkas aturan berikut diimpor langsung, jadi isinya berlaku di setiap sesi tanpa perlu dibuka manual.

@.claude/rules/gaya-penulisan.md
@.claude/rules/bukti-dan-angka.md
@.claude/rules/data-dan-kepatuhan.md
@.claude/rules/orkestrasi-agent.md
@.claude/rules/alur-git.md
@.claude/rules/manajemen-konteks.md

Tiga hal yang paling sering salah dan paling mahal di lomba ini:

1. **Angka yang berbeda antar catatan.** Sebelum menulis angka, cek `[[Sumber & Asumsi Angka]]`. Kalau mengubah satu angka, cari kemunculannya di seluruh vault.
2. **Klaim yang melampaui bukti.** Panel persona di vault ini adalah simulasi sintetis, bukan wawancara nyata. Setiap laporan yang memakainya wajib menyebut itu.
3. **Navigasi yang tertinggal.** Menambah, memindah, atau mengganti nama catatan berarti MOC, README, dan wikilink ikut diperbarui.

## Perkakas yang tersedia

Slash command: `/rencana`, `/tinjau-dokumen`, `/cek-angka`, `/validasi-agent`, `/selaraskan`, `/siap-submit`, `/titik-simpan`, `/belajar`, `/orkestrasi`.

Agent: `perencana`, `arsitek-solusi`, `peninjau-dokumen`, `pemeriksa-angka`, `peninjau-kepatuhan`, `penyelaras-vault`, `perapi-vault`, `validator-persona`.

Peta lengkap beserta kapan memakai yang mana ada di `.claude/README.md`.

## Alur kerja yang dianjurkan

```
Pekerjaan dokumen besar : /rencana -> kerjakan -> /tinjau-dokumen -> /selaraskan
Menguji ide atau naskah : /validasi-agent -> perbaiki -> /validasi-agent lagi
Sebelum kirim ke panitia: /cek-angka -> /siap-submit
Sesi panjang mau ditutup: /titik-simpan
```

## Batas yang tidak boleh dilewati

- Jangan menyunting apa pun di `.claude/vendor/` — itu arsip repo pihak ketiga.
- Jangan menaruh berkas kerja di folder bernomor. Catatan sesi masuk ke `.claude/sesi/`.
- Jangan meng-commit `.mcp.json` (sudah masuk `.gitignore`; berisi kunci API).
- Jangan menghapus catatan tanpa persetujuan pengguna. Usulkan pengarsipan.
- Jangan mengubah berkas di `07 - Proposal & Submission/FIX FINAL SUBMISSION/` tanpa diminta eksplisit — itu berkas yang sudah difinalkan.

## Struktur `.claude/`

```
.claude/
  agents/     8 agent khusus vault ini
  commands/   9 slash command berbahasa Indonesia
  skills/     7 skill: gaya menulis, validasi, verifikasi klaim, rubrik, kepatuhan
  rules/      6 aturan yang selalu berlaku
  contexts/   3 mode kerja: riset, tulis, tinjau
  hooks/      skrip Node opsional, tidak aktif secara bawaan
  vendor/     arsip utuh everything-claude-code (MIT), rujukan saja
  sesi/       catatan sesi dari /titik-simpan (tidak masuk git)
```
