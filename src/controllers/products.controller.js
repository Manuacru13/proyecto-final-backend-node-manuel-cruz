import * as Service from "../services/products.service.js";
import * as Model from "../models/products.model.js";

export const getAllProducts = async (req,res)=> {
    const products = await Service.getAllProducts();
    res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await Model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};
