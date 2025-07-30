# Proyecto Final Backend - API REST con Node.js y Firebase Firestore

## Descripción

API REST desarrollada en Node.js con Express para gestionar productos artesanales y regionales del norte argentino. Utiliza Firebase Firestore como base de datos y JWT para autenticación.

---

## Tecnologías

- Node.js  
- Express  
- Firebase Firestore  
- JSON Web Token (JWT)  
- ES6 Modules

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Manuacru13/proyecto-final-backend-node-manuel-cruz.git
cd proyecto-final-backend-node-manuel-cruz
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
cp .env-example .env
```

Editar `.env` con:

- `JWT_SECRET` (clave secreta para JWT)
- Otros valores si corresponden

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## Estructura del proyecto

```
src/
├── config/
│   └── firebase.config.js           # Configuración Firebase
├── controllers/
│   └── products.controller.js      # Controladores productos
├── middlewares/
│   └── auth.middleware.js          # Middleware autenticación JWT
├── models/
│   └── products.model.js           # Funciones de acceso a Firestore
├── routes/
│   └── products.router.js          # Rutas productos
app.js                             # Archivo principal servidor
.env                              # Variables de entorno
```

---

## Endpoints

> Todas las rutas requieren el header `Authorization: Bearer <token>` excepto `/` y el endpoint de login si implementaste.

### GET `/api/products`

Obtiene todos los productos.

### GET `/api/products/search?name=texto`

Busca productos cuyo nombre contenga `texto`.

### GET `/api/products/:id`

Obtiene producto por ID.

### POST `/api/products`

Crea un producto nuevo.  
Body JSON ejemplo:

```json
{
  "name": "Producto nuevo",
  "price": 1500,
  "categories": ["queso", "artesanal"]
}
```

### PUT `/api/products/:id`

Actualiza completamente un producto.

### DELETE `/api/products/:id`

Elimina un producto.

---

## Ejemplos de uso con Postman

- Buscar productos:

```
GET http://localhost:3000/api/products/search?name=queso
Authorization: Bearer <tu_token>
```

- Crear producto:

```
POST http://localhost:3000/api/products
Authorization: Bearer <tu_token>
Content-Type: application/json

{
  "name": "Vino Torrontés",
  "price": 3200,
  "categories": ["vino"]
}
```

---

## Códigos de respuesta importantes

- 200 OK  
- 201 Created  
- 204 No Content (eliminación exitosa)  
- 400 Bad Request  
- 401 Unauthorized  
- 403 Forbidden  
- 404 Not Found  
- 500 Internal Server Error

---

## Notas adicionales

- Asegurate de tener productos cargados en Firestore para probar búsquedas y listados.
- Los tokens JWT deben generarse con el `JWT_SECRET` configurado.
- Para desarrollo local, `npm run dev` usa nodemon para recarga automática.

---

¿Querés ayuda para crear scripts para poblar la base o probar la autenticación? Solo decime.
