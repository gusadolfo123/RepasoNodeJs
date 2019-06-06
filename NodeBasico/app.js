const colors = require('colors');

const {
  createFile,
  listTable
} = require('./multiplicar');

const {
  argv
} = require('./config/yargs');

// para enviar el base desde el llamado al archibo de node
// nodemon app.js --base=5
// let base = 4;

// let argv = process.argv;
// let parameter = argv[2];
// let base = parameter.split('=')[1];

let base = argv['base'];
let limit = argv.limit;
let comando = argv._[0];

switch (comando) {
  case 'listar':
    listTable(base, limit)
      .then(result => console.log(result.red))
      .catch(error => console.log(error));
    break;
  case 'crear':
    createFile(base, limit)
      .then(fileName => console.log(`Archivo Creado: ${fileName}`))
      .catch(error => console.log(error));
    break;
  default:
    console.log('comando no reconocido');
    break;
}