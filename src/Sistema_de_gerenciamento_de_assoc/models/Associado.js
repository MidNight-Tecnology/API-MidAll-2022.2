const { Sequelize } = require('sequelize');
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
    comp: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    nasc: {
        type: db.DataTypes.DATE,
        allowNull: false,
    },
    cep: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    tel: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    rg: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    estado_cv: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
    inst_ens: {
        type: db.DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
    }

})
// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
//Associado.sync({ force: true });

module.exports = Associado
