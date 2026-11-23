import * as fs from 'fs';

const ENTRY = 'Our office installed a standing desk for the intern so the manager could sit while watching him stand.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY);
