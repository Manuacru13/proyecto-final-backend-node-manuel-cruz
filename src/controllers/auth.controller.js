import jwt from "jsonwebtoken";

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "strongPass123",
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email === default_user.email && password === default_user.password) {
    const payload = { id: default_user.id, email: default_user.email };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }
};
