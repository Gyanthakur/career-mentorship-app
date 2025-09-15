import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import studentRouter from "./routes/studentRoutes.js";
import chatRouter from "./routes/chatRoutes.js";


// app config
const app = express();

const port = process.env.PORT || 4000;
connectDb()
connectCloudinary()

// Middlewares

app.use(express.json());
app.use(cors());



// api end points
// app.use('/api/admin',adminRouter);
// app.use('/api/doctor',doctorRouter)
app.use('/api/student',studentRouter)
app.use('/api/chat', chatRouter)

// Default Route
app.get('/', (req, res) => {
  res.send('Career Mentorship Platform App working fine....');
});

app.listen(port,()=>{
    console.log('Server started on port',port);
})







