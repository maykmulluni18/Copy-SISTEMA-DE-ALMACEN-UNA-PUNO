import db from '../database/db.js';
import { Sequelize } from "sequelize";
import ModelsPecosaPedidos from "./ModelsPecosaPedidos.js"
import ModelsInvenInicial from "../models/ModelsInvenInicial.js"
const { DataTypes } = Sequelize;
const ModelsPecosaBienes = db.define('pecosa_bienes', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    pecosaPedidoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    inventaridoInicialId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        

    },
    observaciones: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    }

}, {
    freezeTableName: true
});



ModelsPecosaBienes.belongsTo(ModelsPecosaPedidos, { foreignKey: "pecosaPedidoId" })
ModelsPecosaPedidos.hasOne(ModelsPecosaBienes, {
    foreignKey: {
        name: 'id',
    }
})

ModelsPecosaBienes.belongsTo(ModelsInvenInicial, { foreignKey: "inventaridoInicialId" })
ModelsInvenInicial.hasOne(ModelsPecosaBienes, {
    foreignKey: {
        name: 'id',
    }
})

export default ModelsPecosaBienes