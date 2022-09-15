const db = require('./db')
const Associado = db.sequelize.define('associado', {
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
    endereco: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    complemento: {
        type: db.DataTypes.STRING,
        allowNull: true,
    },
    data_nasc: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    CPF: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    RG: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
    }

})

// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
// Associado.sync({ force: true });

module.exports = Associado
