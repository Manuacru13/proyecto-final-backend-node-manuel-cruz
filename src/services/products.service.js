import * as model from "../models/products.model.js";

import { createProduct as createProductModel } from "../models/products.model.js";

export const getAllProducts = async ()=> {
    return await model.getAllProducts()
};

export const getProductById = (id) => {
  return model.getProductById(id);
};

export const createProduct = async (data) => {
  return await createProductModel(data);
};