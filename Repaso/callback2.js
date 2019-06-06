let getUserDb = (id, callback) => {
    let user = {
        id,
        Name: 'Gustavo Moreno'
    };
    if (id === 20)
        callback(`Error Id ${id} no exite en DB`);
    else
        callback(null, `Usuario encontrado ${user}`);
};


getUserDb(10, (err, user) => {
    if (err)
        console.log(err);
    else
        console.log(user);
});

getUserDb(20, (err, user) => {
    if (err)
        console.log(err);
    else
        console.log(user);
});