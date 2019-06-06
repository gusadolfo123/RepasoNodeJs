/**
 * Async y Await
 */

// con solo poner async ya la funcion se vuelve una promesa
// let getNombre = async () => {
//     throw new Error('No existe nombre para el usuario');
//     return 'Gustavo'
// };


let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gustavo');
        }, 3000);
    });
}

// getNombre().then(result => {
//     console.log(result);
// }).catch(err => console.log("error", err));

let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});