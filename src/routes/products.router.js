import { Router } from "express";
const router = Router();

import {
  getAllProducts,
  searchProduct,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

// Ruta para buscar productos (primero porque si no entra en /:id)
router.get("/products/search", auth, searchProduct);

// Obtener todos los productos
router.get("/products", getAllProducts);

// Obtener producto por ID
router.get("/products/:id", auth, getProductById);

// Crear nuevo producto
router.post("/products/create", auth, createProduct);


// Eliminar producto por ID
router.delete("/products/:id", auth, deleteProduct);

export default router;