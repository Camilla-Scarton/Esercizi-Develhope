import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('This is the message I write inside the message.txt file!'));

// writeFile creates a new file named message.txt in the write.mjs directory. 
// The message.txt content is inside the variable data.
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// NB: If the file message.txt is already in the directory, its content is overwritten!