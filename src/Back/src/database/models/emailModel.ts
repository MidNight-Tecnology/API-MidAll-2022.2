import { DataTypes } from "sequelize";
import { db } from "../db";


export const EmailModel = db.define("emails", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome_assoc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    assunto: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.TEXT,
    },
})

EmailModel.sync();