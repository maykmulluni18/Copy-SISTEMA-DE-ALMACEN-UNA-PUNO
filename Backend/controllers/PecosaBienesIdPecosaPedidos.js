import ModelsPecosaBienes from "../models/ModelsPecosaBienes.js";
import ModelsPecosaPedidos from "../models/ModelsPecosaPedidos.js";
import ModelsBienes from "../models/ModelsBienes.js";

export const getPecosaBienesPeidosId = async (req, res) => {
    try {
        const pecosabienpedidos = await ModelsPecosaBienes.findAll({
            where: {pecosaPedidoId: req.params.id},
            include: [ModelsBienes, ModelsPecosaPedidos]
        })
        res.json(pecosabienpedidos)
    } catch (error) {
        res.json({message: error.message})
    }
}



