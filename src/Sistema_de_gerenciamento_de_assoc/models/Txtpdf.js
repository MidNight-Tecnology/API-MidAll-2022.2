const db = require('./db')
const Txtpdf = db.sequelize.define('txtpdf', {
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    txt: {
        type: db.DataTypes.TEXT,
        allowNull: false,
    },
    assoc_nome: {
        type: db.DataTypes.STRING,
        allowNull: false,
    },
})

// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
// Txtpdf.sync({ force: true });
module.exports = Txtpdf