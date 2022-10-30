import { DataTypes } from "sequelize";
import { db } from "../db";


export const FilterLinksModel = db.define("filterLinks", {
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
    link_pdf: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})

FilterLinksModel.sync();