let empelados = [{
    id: 1,
    nombre: 'Pedro',
  },
  {
    id: 2,
    nombre: 'Elmo',
  },
  {
    id: 3,
    nombre: 'Marlon',
  },
];

let salario = [{
    id: 1,
    salario: 1500,
  },
  {
    id: 2,
    salario: 2500,
  },
];

let getEmpelado = id => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empelados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      reject(`No existe el empleado con el id ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

let getSalario = empleado => {
  return new Promise((resolve, reject) => {
    let salarioDb = salario.find(salario => salario.id === empleado.id);
    if (!salarioDb) reject(`Salario no disponible para el empleado con id ${id}`);
    resolve({
      id: empleado.id,
      salario: salarioDb.salario,
      nombre: empleado.nombre
    });
  });
};

getEmpelado(1)
  .then(empleado => {
    console.log(`Empleado de base de datos ${empleado.nombre}`);
    getSalario(empleado)
      .then(result => console.log(`El salario del empleado ${empleado.nombre} es de ${empleado.salario}`))
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });

getEmpelado(50)
  .then(empleado => {
    console.log(`Empleado de base de datos ${empleado.nombre}`);
    getSalario(empleado)
      .then(result => console.log(`El salario del empleado ${empleado.nombre} es de ${empleado.salario}`))
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });