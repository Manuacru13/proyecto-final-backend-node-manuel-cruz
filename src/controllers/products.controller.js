import * as model from "../models/products.model.js";


export const getAllProducts = async (req, res) => {
  const products = await model.getAllProducts();
  // console.log(products);
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};


export const searchProduct = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: "El parámetro 'name' es requerido" });
    }

    const products = await model.getAllProducts();

    if (!Array.isArray(products)) {
      return res.status(500).json({ error: "Error interno: productos no es un array" });
    }

    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredProducts);
  } catch (error) {
    console.error("Error en searchProduct:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  const newProduct = await model.createProduct({ name, price, categories });

  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  const product = await model.deleteProduct(productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(204).send();
};