const { Sequelize } = require('sequelize');
const db = require('./db')
const Links_de_pdf_filtrado = db.sequelize.define('links_de_pdf_filtrado', {
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    link: {
        type: db.DataTypes.TEXT,
        allowNull: false,
    },
    id_assoc: {
        type: db.DataTypes.INTEGER,
        allowNull: false,
    }
})

// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
Links_de_pdf_filtrado.sync({ force: true });

module.exports = Links_de_pdf_filtrado
