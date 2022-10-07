import { DataTypes } from "sequelize";
import { db } from "../db";

export const AssocModel = db.define("associado", {
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
    comp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nasc: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado_cv: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    inst_ens: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})
// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
AssocModel.sync();