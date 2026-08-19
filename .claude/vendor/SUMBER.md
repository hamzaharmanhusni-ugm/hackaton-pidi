# Sumber dan atribusi

Direktori `everything-claude-code/` di sini adalah **salinan utuh repo pihak ketiga**, disimpan sebagai arsip referensi. Jangan disunting. Kalau butuh perubahan, buat versi adaptasinya di `.claude/agents`, `.claude/commands`, `.claude/skills`, `.claude/rules`, atau `.claude/contexts`.

| Keterangan | Nilai |
|---|---|
| Repo yang di-clone | https://github.com/WorldFlowAI/everything-claude-code |
| Repo asal (upstream) | https://github.com/affaan-m/everything-claude-code |
| Penulis asli | Affaan Mustafa (https://x.com/affaanmustafa) |
| Lisensi | MIT (dinyatakan di `README.md` dan `.claude-plugin/plugin.json` repo tersebut; berkas `LICENSE` sendiri tidak disertakan upstream) |
| Commit yang diambil | `432485ba6b92c14fb357276a98957f348bcff9ee` |
| Tanggal commit | 2026-01-23 |
| Tanggal clone ke vault ini | 2026-08-19 |
| Riwayat git | Dihapus. Yang disimpan hanya isi berkas pada commit di atas. |

## Kenapa disimpan utuh

Sebagian besar isi repo itu ditujukan untuk proyek perangkat lunak: TDD, perbaikan build, uji E2E, pola backend dan frontend, deteksi package manager. Vault ini dokumentasi, bukan kode, jadi bagian-bagian itu tidak diaktifkan di sini. Tetapi tim juga punya repo aplikasi terpisah, dan di sana isi aslinya justru berguna. Karena itu salinannya disimpan lengkap, bukan dibuang.

## Bagian yang dipakai ulang dan bagian yang tidak

| Bagian upstream | Status di vault ini |
|---|---|
| `agents/planner.md`, `architect.md`, `code-reviewer.md`, `security-reviewer.md`, `doc-updater.md`, `refactor-cleaner.md` | Diadaptasi menjadi agent berbahasa Indonesia di `.claude/agents/` |
| `agents/tdd-guide.md`, `build-error-resolver.md`, `e2e-runner.md` | Tidak dipakai di sini. Relevan untuk repo aplikasi. |
| `commands/plan.md`, `code-review.md`, `update-docs.md`, `update-codemaps.md`, `checkpoint.md`, `learn.md`, `orchestrate.md` | Diadaptasi menjadi slash command di `.claude/commands/` |
| `commands/tdd.md`, `e2e.md`, `build-fix.md`, `test-coverage.md`, `setup-pm.md`, `refactor-clean.md`, `verify.md`, `eval.md` | Tidak dipakai di sini |
| `skills/coding-standards`, `verification-loop`, `eval-harness`, `security-review`, `continuous-learning`, `strategic-compact` | Diadaptasi menjadi skill di `.claude/skills/` |
| `skills/backend-patterns`, `frontend-patterns`, `clickhouse-io`, `tdd-workflow`, `project-guidelines-example` | Tidak dipakai di sini |
| `rules/*` | Seluruhnya diadaptasi ke `.claude/rules/` dengan isi yang diganti ke konteks dokumen |
| `contexts/*` | Diadaptasi ke `.claude/contexts/` |
| `hooks/hooks.json`, `scripts/hooks/*` | Ditulis ulang menjadi skrip Node mandiri di `.claude/hooks/`. Hook upstream yang memblokir pembuatan berkas `.md` sengaja **tidak** dipakai karena akan melumpuhkan vault yang seluruhnya berisi berkas `.md`. |
| `scripts/lib/*`, `tests/*`, `mcp-configs/*` | Tidak dipakai di sini |

## Catatan penting soal hook upstream

`hooks/hooks.json` bawaan repo itu memuat aturan yang **berbahaya untuk vault ini**:

- memblokir pembuatan berkas `.md` di luar README, CLAUDE, AGENTS, dan CONTRIBUTING;
- memblokir server pengembangan di luar tmux, yang tidak ada di Windows;
- menjalankan pemformat dan pemeriksa tipe untuk berkas TypeScript.

Jangan menyalin berkas itu apa adanya ke `settings.json`. Pakai `.claude/hooks/hooks.contoh.json` yang sudah disesuaikan.
