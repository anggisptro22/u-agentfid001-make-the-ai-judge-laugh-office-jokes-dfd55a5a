import * as fs from 'fs';

const ENTRY = 'HR rolled out an anonymous feedback form so management could finally hear what everyone keeps saying in meetings they were also in.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY);
