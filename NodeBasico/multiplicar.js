const fs = require('fs');

let listTable = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        }

        if (!Number(limit)) {
            reject('El limite no es un numero');
            return;
        }

        let data = '';

        for (let index = 1; index <= limit; index++) {
            data += ` ${base} * ${index} = ${index * base} \n`;
        }

        resolve(data);

    });
};

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        if (!Number(limit)) {
            reject('El limite no es un numero');
            return;
        }

        let data = '';
        let fileName = `tabla-${base}.txt`;

        for (let index = 1; index <= limit; index++) {
            data += ` ${base} * ${index} = ${index * base} \n`;
        }

        fs.writeFile('./tablas/' + fileName, data, 'utf-8', (error) => {
            if (error) reject(error);
            resolve(fileName);
        });

    });
};

module.exports = {
    createFile,
    listTable
};