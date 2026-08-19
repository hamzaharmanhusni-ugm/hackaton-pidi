#!/usr/bin/env node
/**
 * Hook SessionStart - memuat konteks vault di awal sesi.
 *
 * Mencetak ringkasan singkat ke stdout supaya masuk ke konteks Claude:
 * catatan sesi terakhir (kalau ada) dan pengingat titik masuk vault.
 * Lintas platform, tanpa dependensi.
 *
 * Diadaptasi dari everything-claude-code (MIT), scripts/hooks/session-start.js.
 */

const fs = require('fs');
const path = require('path');

const VAULT = path.resolve(__dirname, '..', '..');
const DIR_SESI = path.join(VAULT, '.claude', 'sesi');

function bacaStdin() {
  // Hook menerima JSON di stdin. Isinya tidak dipakai di sini, tetapi
  // stdin tetap harus dikuras agar proses tidak menggantung.
  try {
    fs.readFileSync(0, 'utf8');
  } catch (_) {
    /* stdin kosong, abaikan */
  }
}

function sesiTerakhir() {
  if (!fs.existsSync(DIR_SESI)) return null;
  const berkas = fs
    .readdirSync(DIR_SESI)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .reverse();
  if (berkas.length === 0) return null;

  const nama = berkas[0];
  const isi = fs.readFileSync(path.join(DIR_SESI, nama), 'utf8');
  const potongan = isi.split('\n').slice(0, 12).join('\n');
  return { nama, jumlah: berkas.length, potongan };
}

function main() {
  bacaStdin();

  const baris = [];
  const sesi = sesiTerakhir();

  if (sesi) {
    baris.push(`[vault] Catatan sesi terakhir: .claude/sesi/${sesi.nama} (total ${sesi.jumlah} catatan sesi).`);
    baris.push('[vault] Cuplikan:');
    baris.push(sesi.potongan.trim());
    baris.push('[vault] Buka berkas itu bila pekerjaan sesi lalu perlu dilanjutkan.');
  } else {
    baris.push('[vault] Belum ada catatan sesi tersimpan. Pakai /titik-simpan sebelum sesi panjang berakhir.');
  }

  baris.push('[vault] Titik masuk dokumentasi: "00 - Beranda (MOC).md". Aturan kerja: .claude/rules/.');

  process.stdout.write(baris.join('\n') + '\n');
  process.exit(0);
}

try {
  main();
} catch (err) {
  process.stderr.write(`[sesi-mulai] Dilewati karena galat: ${err.message}\n`);
  process.exit(0); // hook tidak boleh memblokir sesi
}
