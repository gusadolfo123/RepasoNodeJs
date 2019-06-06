const employees = [{
        id: 1,
        name: 'Gustavo Moreno',
    },
    {
        id: 2,
        name: 'Pedro Perez',
    },
    {
        id: 3,
        name: 'Camino Lopez',
    },
];

const salaries = [{
        id: 1,
        salary: 50000,
    },
    {
        id: 2,
        salary: 75000,
    },
];

// let getEmployee = id => {
//     return new Promise((resolve, reject) => {
//         const employee = employees.find(employee => employee.id === id);
//         if (!employee) reject(`Empleado con id ${id} no existe en Base de datos`);
//         resolve(employee);
//     });
// };

let getEmployee = async (id) => {
    const employee = employees.find(employee => employee.id === id);
    if (!employee) throw new Error(`Empleado con id ${id} no existe en Base de datos`);
    return employee;
};

let getSalary = async (employee) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);
    if (!salaryDB) throw new Error(`Salario no disponible para el empleado con id ${employee.id}`);
    return {
        name: employee.name,
        salary: salaryDB.salary,
        id: employee.id
    };
};

let getInfoEmployee = async id => {
    const employee = await getEmployee(id);
    const {
        salary
    } = await getSalary(employee);

    // return {
    //     ...employee,
    //     salary,
    // };
    return `El salario del empleado ${employee.name} con id ${id} es de ${salary}`;
};

getInfoEmployee(1).then(result => console.log(result)).catch(error => console.log(error));
getInfoEmployee(2).then(result => console.log(result)).catch(error => console.log(error));
getInfoEmployee(20).then(result => console.log(result)).catch(error => console.log(error));