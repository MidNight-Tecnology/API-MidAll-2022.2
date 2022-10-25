import { DataTypes } from "sequelize";
import { db } from "../db";


export const PdfModel = db.define("pdfs", {
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
    },
    link_pdf_filtrado: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

PdfModel.sync();