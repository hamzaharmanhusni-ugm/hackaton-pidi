#!/usr/bin/env node
/**
 * Hook PreToolUse - mencegah kunci dan token masuk ke catatan vault.
 *
 * Vault ini repo publik. Aturan .claude/rules/data-dan-kepatuhan.md melarang
 * kunci, token, atau kata sandi ditulis di dalam catatan. Hook ini menahan
 * penulisan bila menemukan pola rahasia berkeyakinan tinggi, lalu menjelaskan
 * alasannya lewat stderr dengan kode keluar 2 supaya Claude bisa memperbaiki.
 *
 * Pola sengaja dibuat sempit agar tidak salah tangkap. Kata sandi demo yang
 * memang sudah publik tidak akan kena.
 *
 * Dibuat khusus untuk vault RetailMind AI, mengikuti pola everything-claude-code (MIT).
 */

const POLA = [
  { nama: 'kunci privat PEM', re: /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { nama: 'token OpenAI atau sejenis', re: /\bsk-[A-Za-z0-9]{20,}\b/ },
  { nama: 'token GitHub', re: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/ },
  { nama: 'token Hugging Face', re: /\bhf_[A-Za-z0-9]{30,}\b/ },
  { nama: 'token Supabase', re: /\bsbp_[a-f0-9]{40,}\b/ },
  { nama: 'kunci akses AWS', re: /\bAKIA[0-9A-Z]{16}\b/ },
  { nama: 'JSON Web Token', re: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/ },
  { nama: 'header Authorization Bearer berisi nilai panjang', re: /Bearer\s+[A-Za-z0-9._-]{32,}/ },
  { nama: 'nilai api key heksadesimal panjang', re: /(api[_-]?key|apikey|secret|token)["'\s:=]{1,6}[a-f0-9]{40,}/i },
];

function main() {
  let mentah = '';
  try {
    mentah = require('fs').readFileSync(0, 'utf8');
  } catch (_) {
    process.exit(0);
  }
  if (!mentah.trim()) process.exit(0);

  let masuk;
  try {
    masuk = JSON.parse(mentah);
  } catch (_) {
    process.exit(0);
  }

  const input = masuk.tool_input || {};
  const berkas = input.file_path || '';

  // Berkas konfigurasi rahasia memang tempatnya kunci. Vendor hanya arsip.
  if (/(^|[\\/])\.mcp\.json$|(^|[\\/])\.env|[\\/]\.claude[\\/]vendor[\\/]/.test(berkas)) {
    process.exit(0);
  }

  const isi = [input.content, input.new_string, input.replace_all ? '' : '']
    .filter((v) => typeof v === 'string')
    .join('\n');
  if (!isi) process.exit(0);

  const kena = POLA.filter((p) => p.re.test(isi));
  if (kena.length === 0) process.exit(0);

  process.stderr.write(
    [
      '[jaga-rahasia] DITAHAN: ada yang tampak seperti kredensial pada tulisan ini.',
      `[jaga-rahasia] Berkas: ${berkas}`,
      `[jaga-rahasia] Pola terdeteksi: ${kena.map((k) => k.nama).join(', ')}`,
      '[jaga-rahasia] Vault ini repo publik. Ganti nilainya dengan placeholder, atau simpan di .mcp.json yang sudah masuk .gitignore.',
      '[jaga-rahasia] Lihat .claude/rules/data-dan-kepatuhan.md.',
    ].join('\n') + '\n'
  );
  process.exit(2); // kode 2 memberi tahu Claude alasan penolakan
}

try {
  main();
} catch (err) {
  process.stderr.write(`[jaga-rahasia] Dilewati karena galat: ${err.message}\n`);
  process.exit(0);
}
