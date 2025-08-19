// import jwt from "jsonwebtoken";

// // Student authentication middlewares

// const authStudent = async (req, res, next) => {
// 	try {

//         // atoken = admin token
//         const {token} = req.headers;
//         if(!token){
//             return res.json({success:false,message:"Not Authorized Login Again!"})
//         }
//         const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.studentId = tokenDecode.id;

//         next();


// 	} catch (error) {
// 		console.error(error);
// 		res.json({ success: false, message: error.message });
// 	}
// };

// export default authStudent;







import jwt from "jsonwebtoken";

// Student authentication middleware
const authStudent = async (req, res, next) => {
  try {
    // Token should come in headers (usually as Authorization: Bearer <token>)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not Authorized, Login Again!" });
    }

    const token = authHeader.split(" ")[1];
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach studentId to req.user instead of req.body
    req.user = { studentId: tokenDecode.id };

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Invalid or Expired Token!" });
  }
};

export default authStudent;
