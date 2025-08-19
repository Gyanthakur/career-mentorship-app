import exprex from 'express'
import { registerStudent, LoginStudent, updateProfile, getprofile } from '../controllers/studentController.js';
import upload from '../middleware/multer.js';
import authStudent from '../middleware/authStudents.js';
const studentRouter = exprex.Router();

studentRouter.post('/register',registerStudent)
studentRouter.post('/login',LoginStudent)

studentRouter.get('/get-profile',authStudent,getprofile)
studentRouter.post('/update-profile',upload.single('image'),authStudent,updateProfile)
// studentRouter.post('/book-appointment',authStudent,bookAppointments)
// studentRouter.get('/appointments',authStudent,listAppointment)
// studentRouter.post('/cancel-appointment',authStudent,cancelAppointment)
// studentRouter.post('/payment-razorpay',authStudent,paymentRazorpay)
// studentRouter.post('/verifyRazorpay',authStudent,verifyRazorpay)

export default studentRouter;