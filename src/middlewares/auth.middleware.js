import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  //   console.log(req.headers);
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) {
    console.log("Token inválido:", err.message);
    return res.sendStatus(403);
  }
  console.log("Token válido, payload:", decoded);
  next();
});
};