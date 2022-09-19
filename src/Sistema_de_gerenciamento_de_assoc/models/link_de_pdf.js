const { Sequelize } = require('sequelize');
const db = require('./db')
const Links_de_pdfs = db.sequelize.define('links_de_pdfs', {
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
    assoc_nome: {
        type: db.DataTypes.STRING,
        allowNull: false,
    }
})

// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
// Links_de_pdf.sync({ force: true });

module.exports = Links_de_pdfs 
