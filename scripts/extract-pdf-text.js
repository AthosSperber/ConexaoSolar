import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
// pdf-parse é CommonJS; em projetos ESM ("type": "module"), carregue via require.
const pdfParseModule = require('pdf-parse');
const PDFParse = pdfParseModule?.PDFParse;

if (!PDFParse) {
  console.error('Não foi possível carregar PDFParse de pdf-parse.');
  process.exit(1);
}

function usage() {
  console.error('Uso: node scripts/extract-pdf-text.js <caminho-do-pdf> <arquivo-saida.txt>');
  process.exit(1);
}

const [, , pdfPathArg, outPathArg] = process.argv;
if (!pdfPathArg || !outPathArg) usage();

const pdfPath = path.resolve(pdfPathArg);
const outPath = path.resolve(outPathArg);

if (!fs.existsSync(pdfPath)) {
  console.error(`PDF não encontrado: ${pdfPath}`);
  process.exit(1);
}

const buffer = fs.readFileSync(pdfPath);
// Garante Uint8Array “puro” (o pdf-parse recente rejeita Buffer diretamente em alguns caminhos).
const uint8 = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);

const parser = new PDFParse({ data: uint8, verbosity: pdfParseModule?.VerbosityLevel?.ERRORS });
const data = await parser.getText({
  // Mantém separadores por página para facilitar auditoria
  pageJoiner: '\n--- PÁGINA page_number de total_number ---\n',
});

const totalPages = data?.total ?? data?.pages?.length ?? 'desconhecido';
const header = `# Extração de texto\n# PDF: ${pdfPath}\n# Páginas: ${totalPages}\n\n`;
const body = `${data?.text ?? ''}\n`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, header + body, 'utf8');

console.log(`OK: extraído para ${outPath}`);
