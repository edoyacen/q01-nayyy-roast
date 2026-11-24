// This entry writes the answer for the "Roast Your Own Agent" bounty to the
// output directory, saving it as entry.txt (or under MAKEFUN_OUTPUT_DIR when set).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "My agent said it would handle it, then spent twenty minutes explaining why the tool call it never made was a success.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
