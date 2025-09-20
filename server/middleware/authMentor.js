import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export const mentorAuth = (req, res, next) => {
  const mtoken = req.headers.authorization?.split(" ")[1];
  if (!mtoken) return res.status(401).json({ message: "Access denied. No mtoken provided." });

  try {
    const decoded = jwt.verify(mtoken, JWT_SECRET);
    if (decoded.role !== "mentor") {
      return res.status(403).json({ message: "Access denied. Not a mentor." });
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid mtoken" });
  }
};
