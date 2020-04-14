const fs = require('fs');
const readline = require('readline');
const neatCsv = require('neat-csv');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const outFileName = 'out.json';

rl.question('File name CSV: ', (path) => {
  fs.readFile(path, async (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    let result = await neatCsv(data);
    try {
      fs.writeFileSync(outFileName, JSON.stringify(result));
      console.log(`The file out.json was generated`);
    } catch (err) {
      console.error(err)
    }
  });
  rl.close();
});