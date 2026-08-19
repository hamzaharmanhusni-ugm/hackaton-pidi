#!/usr/bin/env node
/**
 * Hook SessionEnd - menyimpan kerangka catatan sesi.
 *
 * Membuat berkas .claude/sesi/<tanggal>-sesi.md bila belum ada, atau
 * memperbarui cap waktu terakhirnya bila sudah ada. Isi rinci diisi oleh
 * command /titik-simpan; hook ini hanya menjamin jejaknya tidak hilang.
 *
 * Diadaptasi dari everything-claude-code (MIT), scripts/hooks/session-end.js.
 */

const fs = require('fs');
const path = require('path');

const VAULT = path.resolve(__dirname, '..', '..');
const DIR_SESI = path.join(VAULT, '.claude', 'sesi');

function stempel() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return {
    tanggal: `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`,
    waktu: `${p(d.getHours())}:${p(d.getMinutes())}`,
  };
}

function main() {
  try {
    fs.readFileSync(0, 'utf8');
  } catch (_) {
    /* stdin kosong, abaikan */
  }

  const { tanggal, waktu } = stempel();
  fs.mkdirSync(DIR_SESI, { recursive: true });

  const berkas = path.join(DIR_SESI, `${tanggal}-sesi.md`);

  if (fs.existsSync(berkas)) {
    const isi = fs.readFileSync(berkas, 'utf8');
    const baru = isi.replace(/^\*\*Diperbarui:\*\*.*$/m, `**Diperbarui:** ${waktu}`);
    fs.writeFileSync(berkas, baru, 'utf8');
    process.stderr.write(`[sesi-selesai] Catatan sesi diperbarui: ${berkas}\n`);
    process.exit(0);
  }

  const kerangka = `# Catatan sesi ${tanggal}

**Tanggal:** ${tanggal}
**Dimulai:** ${waktu}
**Diperbarui:** ${waktu}

> Berkas kerja, bukan bagian isi vault. Jangan dipindah ke folder bernomor.

## Yang selesai

-

## Yang sedang dikerjakan

-

## Keputusan yang diambil

-

## Menggantung untuk sesi berikutnya

-

## Catatan yang perlu dibuka lebih dulu

-
`;

  fs.writeFileSync(berkas, kerangka, 'utf8');
  process.stderr.write(`[sesi-selesai] Catatan sesi dibuat: ${berkas}\n`);
  process.exit(0);
}

try {
  main();
} catch (err) {
  process.stderr.write(`[sesi-selesai] Dilewati karena galat: ${err.message}\n`);
  process.exit(0);
}
