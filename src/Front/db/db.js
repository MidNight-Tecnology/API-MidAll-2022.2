const Sequelize = require('sequelize');
const DataTypes = require('sequelize')
const sequelize = new Sequelize('crud', 'root', 'root', {
    dialect: "mysql",
    host: "localhost",
    port: '3306',
});

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(function (erro) {
    console.log("Erro ao conectar: " + erro)
});



const Associado = sequelize.define('associado', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complemento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    data_nasc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CPF: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    RG: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})


Associado.sync({ force: true });


const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Users.sync({ force: true });