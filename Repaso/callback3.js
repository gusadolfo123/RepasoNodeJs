let empelados = [
  {
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

let salario = [
  {
    id: 1,
    salario: 1500,
  },
  {
    id: 2,
    salario: 2500,
  },
];

let getEmpelado = (id, callback) => {
  let empleadoDB = empelados.find(empleado => empleado.id === id);
  if (!empleadoDB) {
    callback(`No existe el empleado con el id ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

let getSalario = (empleado, callback) => {
  let salarioDB = salario.find(salario => salario.id === empleado.id);
  if (!salarioDB) callback(`No se encontro un salario para el usuario ${empelado.nombre}`);
  else
    callback(null, {
      empleado: empleado.nombre,
      salario: salarioDB.salario,
    });
};

getEmpelado(1, (err, empleado) => {
  if (err) console.log(err);
  else
    getSalario(empleado, (err, result) => {
      if (!err) console.log(result);
      else console.log(err);
    });
});

getEmpelado(10, (err, empleado) => {
  if (err) console.log(err);
  else
    getSalario(empleado, (err, result) => {
      if (!err) console.log(result);
      else console.log(err);
    });
});
