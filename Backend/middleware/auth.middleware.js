const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // First, check cookies for the token (Primary robust method)
  let token = req.cookies?.token;

  // Fallback to Authorization header if not in cookies (for backward compatibility if needed)
  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(" ")[1];
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
