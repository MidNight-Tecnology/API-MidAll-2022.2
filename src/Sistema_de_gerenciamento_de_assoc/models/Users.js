const db = require('./db')
const Users = db.sequelize.define('users', {
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: db.DataTypes.STRING,
        allowNull: false,
    }
})
// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
// Users.sync({ force: true });

// Users.create({
//     nome: 'Guilherme Duarte',
//     email: 'gui@gui',
//     senha: '1234',
// });
module.exports = Users