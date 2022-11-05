import { DataTypes } from "sequelize";
import { db } from "../db";


export const RelatoriosModel = db.define("relatorios", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome_do_associado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
    },
    caderno: {
        type: DataTypes.STRING,
    },
    pagina: {
        type: DataTypes.STRING,
    },
    texto_do_bloco: {
        type: DataTypes.TEXT,
    },
})

RelatoriosModel.sync();