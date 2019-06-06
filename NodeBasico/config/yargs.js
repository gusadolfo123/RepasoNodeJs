const options = {
    base: {
        demand: true,
        alias: 'b',
    },
    limit: {
        alias: 'l',
        default: 10,
    },
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Genera archivo con tabla de multiplicar', options)
    .help().argv;

module.exports = {
    argv
};