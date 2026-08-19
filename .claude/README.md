# Perkakas Claude Code untuk vault RetailMind AI

Isi direktori ini adalah konfigurasi Claude Code, bukan bagian dokumentasi proyek. Obsidian tidak menampilkan direktori berawalan titik, jadi berkas di sini tidak akan mengotori pencarian, graph, maupun quick switcher vault.

Asalnya dari repo [everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) (MIT). Repo itu ditujukan untuk proyek perangkat lunak, sedangkan direktori ini vault dokumentasi. Yang relevan diadaptasi ke konteks kerja dokumen dan diterjemahkan; sisanya disimpan utuh sebagai arsip di `vendor/`. Rinciannya di [vendor/SUMBER.md](vendor/SUMBER.md).

## Isi

```
.claude/
  agents/     8 agent yang bisa didelegasikan tugas
  commands/   9 slash command
  skills/     7 skill yang aktif otomatis sesuai konteks
  rules/      6 aturan yang selalu berlaku
  contexts/   3 mode kerja yang bisa disisipkan
  hooks/      skrip Node opsional, TIDAK aktif secara bawaan
  vendor/     arsip utuh repo asal, hanya untuk rujukan
  sesi/       catatan sesi dari /titik-simpan (tidak masuk git)
```

## Slash command

| Command | Untuk apa | Kapan dipakai |
|---|---|---|
| `/rencana` | Menyusun rencana kerja dokumen sebelum ada catatan yang disentuh | Sebelum menulis ulang bab, menyiapkan jawaban submission, atau menyusun materi baru |
| `/tinjau-dokumen` | Tinjauan kualitas catatan | Setelah selesai menulis, sebelum dianggap final |
| `/cek-angka` | Audit konsistensi angka lintas catatan | Setiap kali angka berubah, dan wajib sebelum submission |
| `/validasi-agent` | Panel persona sintetis menguji dokumen, fitur, atau naskah | Saat ingin tahu keberatan pengguna, bank, atau investor |
| `/selaraskan` | Menyinkronkan MOC, README, STATUS, dan wikilink | Setelah menambah, memindah, atau mengganti nama catatan |
| `/siap-submit` | Daftar periksa kesiapan pengiriman ke panitia | Sebelum berkas dikirim |
| `/titik-simpan` | Menyimpan keadaan kerja ke `.claude/sesi/` | Sebelum sesi panjang berakhir |
| `/belajar` | Menyaring pelajaran berulang jadi skill atau rule | Ketika koreksi yang sama muncul lebih dari sekali |
| `/orkestrasi` | Memecah pekerjaan besar jadi tugas paralel | Ketika satu permintaan menyentuh banyak catatan sekaligus |

## Agent

| Agent | Peran |
|---|---|
| `perencana` | Merencanakan pekerjaan dokumen, berhenti menunggu konfirmasi sebelum menyunting |
| `arsitek-solusi` | Menimbang dan mendokumentasikan keputusan desain produk serta arsitektur |
| `peninjau-dokumen` | Meninjau kualitas, struktur, dan kekuatan klaim sebuah catatan |
| `pemeriksa-angka` | Mengaudit angka dan klaim kuantitatif terhadap catatan sumber |
| `peninjau-kepatuhan` | Menyaring risiko klaim, data, dan kredensial sebelum publikasi |
| `penyelaras-vault` | Menjaga MOC, README, STATUS, dan wikilink tetap sinkron |
| `perapi-vault` | Menemukan catatan yatim, duplikasi, dan tautan mati |
| `validator-persona` | Memerankan satu persona penguji secara konsisten |

Agent dipanggil otomatis oleh command, atau bisa diminta langsung, misalnya "pakai pemeriksa-angka untuk folder 05".

## Skill

Skill aktif sendiri ketika konteksnya cocok, tidak perlu dipanggil.

| Skill | Aktif ketika |
|---|---|
| `penulisan-vault` | Menulis atau menyunting catatan apa pun di vault |
| `validasi-multi-agent` | Menjalankan atau melaporkan validasi lewat panel persona |
| `verifikasi-klaim` | Menulis atau meninjau klaim, angka, dan pernyataan hasil |
| `rubrik-hackathon` | Menyusun atau menilai materi yang akan dilihat juri |
| `tinjauan-kepatuhan` | Menyiapkan dokumen untuk dipublikasikan atau dikirim |
| `pembelajaran-berkelanjutan` | Akhir sesi panjang, atau saat koreksi berulang |
| `kompaksi-strategis` | Sesi mulai panjang dan konteks penelusuran sudah usang |

## Rules dan contexts

`rules/` berisi aturan yang selalu berlaku. Dirujuk dari `CLAUDE.md` di root vault, jadi ikut terbaca setiap sesi.

`contexts/` berisi mode kerja yang bisa disisipkan manual ketika ingin mengunci perilaku dalam satu sesi, misalnya "pakai mode di .claude/contexts/tinjau.md". Isinya sengaja pendek.

## Hooks (opsional, tidak aktif)

Empat skrip tersedia di `hooks/`, semuanya Node mandiri tanpa dependensi dan sudah diuji jalan di Windows:

| Skrip | Peristiwa | Fungsi |
|---|---|---|
| `sesi-mulai.js` | SessionStart | Memuat cuplikan catatan sesi terakhir ke konteks |
| `sesi-selesai.js` | SessionEnd | Membuat atau memperbarui kerangka catatan sesi |
| `jaga-rahasia.js` | PreToolUse | Menahan penulisan bila ada pola kunci atau token |
| `saran-kompaksi.js` | PreToolUse | Mengingatkan `/compact` di batas fase kerja |

**Tidak ada satu pun yang aktif secara bawaan.** Mengaktifkan hook mengubah perilaku setiap sesi, jadi itu keputusan pemilik repo. Untuk mengaktifkan, salin blok `hooks` dari [hooks/hooks.contoh.json](hooks/hooks.contoh.json) ke `.claude/settings.json` (berlaku untuk semua yang membuka repo) atau `.claude/settings.local.json` (hanya mesin sendiri, sudah masuk `.gitignore`). Aktifkan satu per satu, jangan sekaligus.

Hook bawaan repo asal sengaja tidak dipakai. Salah satunya memblokir pembuatan berkas `.md` di luar beberapa nama tertentu — di vault yang seluruh isinya berkas `.md`, itu akan melumpuhkan pekerjaan.

## Merawat direktori ini

- Perkakas baru ditambahkan di `agents/`, `commands/`, atau `skills/`, bukan di `vendor/`.
- `vendor/` hanya diperbarui dengan cara mengambil ulang dari repo asal, dan catat commit barunya di `vendor/SUMBER.md`.
- Setiap penambahan agent atau command wajib ikut diperbarui di tabel berkas ini, di `CLAUDE.md`, dan di `.claude/rules/orkestrasi-agent.md`.
