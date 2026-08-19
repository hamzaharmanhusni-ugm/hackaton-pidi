#!/usr/bin/env node
/**
 * Hook PreToolUse - menyarankan /compact di batas fase kerja.
 *
 * Menghitung pemanggilan tool per sesi lewat berkas pencacah di direktori
 * sementara sistem. Setelah ambang tercapai, memberi pengingat bahwa konteks
 * penelusuran mungkin sudah tidak dipakai lagi. Hook ini hanya mengingatkan,
 * keputusan tetap di tangan pengguna.
 *
 * Ambang bisa diubah lewat variabel lingkungan COMPACT_THRESHOLD.
 *
 * Diadaptasi dari everything-claude-code (MIT), scripts/hooks/suggest-compact.js.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

function main() {
  try {
    fs.readFileSync(0, 'utf8');
  } catch (_) {
    /* stdin kosong, abaikan */
  }

  const sesi = process.env.CLAUDE_SESSION_ID || String(process.ppid || 'baku');
  const pencacah = path.join(os.tmpdir(), `claude-hitung-tool-${sesi}`);
  const ambang = parseInt(process.env.COMPACT_THRESHOLD || '60', 10);

  let hitung = 1;
  if (fs.existsSync(pencacah)) {
    const isi = parseInt(fs.readFileSync(pencacah, 'utf8').trim(), 10);
    if (!Number.isNaN(isi)) hitung = isi + 1;
  }
  fs.writeFileSync(pencacah, String(hitung), 'utf8');

  if (hitung === ambang) {
    process.stderr.write(
      `[kompaksi] ${ambang} pemanggilan tool. Kalau sedang berpindah fase, ini titik aman untuk /compact. Simpan dulu keadaan kerja lewat /titik-simpan.\n`
    );
  } else if (hitung > ambang && hitung % 30 === 0) {
    process.stderr.write(
      `[kompaksi] ${hitung} pemanggilan tool. Konteks penelusuran lama mungkin sudah tidak dipakai.\n`
    );
  }

  process.exit(0);
}

try {
  main();
} catch (err) {
  process.stderr.write(`[kompaksi] Dilewati karena galat: ${err.message}\n`);
  process.exit(0);
}
