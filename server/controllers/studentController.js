import validator from "validator";
import bcript from "bcrypt";
import studentModel from "../models/studentModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from 'cloudinary'
// import doctorModel from "../models/doctorModel.js";
// import appointmentModel from "../models/appointmentModel.js";
// import razorpay from 'razorpay'
// api to resister user

const registerStudent = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res.json({ success: false, message: "Missing Details" });
		}

		// validating email format
		if (!validator.isEmail(email)) {
			return res.json({
				success: false,
				message: "Please enter a valid email!",
			});
		}

		// validating strong password
		if (password.length < 8) {
			return res.json({ success: false, message: "Enter a strong password!" });
		}

		// hashing student password
		const salt = await bcript.genSalt(10);
		const hashedPassword = await bcript.hash(password, salt);

		const studentData = {
			name,
			email,
			password: hashedPassword,
		};
		const newStudent = new studentModel(studentData);
		const student = await newStudent.save();

		const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
		res.json({ success: true, token });
	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
};

// API for Login student
const LoginStudent = async (req, res) => {
	try {
		const { email, password } = req.body;
		const student = await studentModel.findOne({ email });

		if (!student) {
			return res.json({ success: false, message: "Student doesn't exist!" });
		}

		const isMatch = await bcript.compare(password, student.password);
		if (isMatch) {
			const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
			res.json({ success: true, token });
		} else {
			res.json({ success: false, message: "Invalid credentials" });
		}
	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
};

// API to get student profile data

const getprofile = async (req, res) => {
	try {
    const studentId = req.user.studentId; // ✅ from middleware
    const studentData = await studentModel.findById(studentId).select("-password");

    if (!studentData) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({ success: true, studentData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// API for update student profile

const updateProfile = async (req, res) => {
	try {
		const studentId = req.user.studentId;
		const {  name, phone, dob, gender } = req.body;
		const imageFile = req.file;
        console.log(req.body);
        

		if (!name || !phone || !dob || !gender) {
			return res.json({ success: false, message: "Missing data" });
		}

		await studentModel.findByIdAndUpdate(studentId, {
			name,
			phone,
            role: "student",
			dob,
			gender,
		});

        if(imageFile){
            // upload image to clouduinary
            const imageUpload =await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL = imageUpload.secure_url;

            await studentModel.findByIdAndUpdate(studentId,{image:imageURL})

        }

        res.json({success:true,message:"Profile Updated"})
	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
};



/*
// API to book appointments

const bookAppointments= async(req,res)=>{
	try {
		const {userId,docId,slotDate,slotTime} = req.body;

		const docData = await doctorModel.findById(docId).select('-password')

		if(!docData.available){
			return res.json({success:false,message:"The doctor is not available at the moment."})
		}
		
		let slots_booked = docData.slots_booked ;
		
		// checking for slots availability
		if(slots_booked[slotDate]){
			if(slots_booked[slotDate].includes(slotTime)){
				return res.json({success:false,message:"Slot is not available at the moment."})

			}
			else{
				slots_booked[slotDate].push(slotTime)
			}
		}
		else{
			slots_booked[slotDate] = []
			slots_booked[slotDate].push(slotTime)
		}
		 
		const userData = await userModel.findById(userId).select('-password')
		delete docData.slots_booked

		const appointmentData = {
			userId,
			docId,
			userData,
			docData,
			amount:docData.fees,
			slotTime,
			slotDate,
			date: Date.now()
		}

		const newAppointment = new appointmentModel(appointmentData);
		await newAppointment.save();

		// save new slots data in docData
		await doctorModel.findByIdAndUpdate(docId,{slots_booked})
		res.json({success:true,message:"Your appointment Booked!"})


	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
}


// API to get user appointments for frontend  my-appointments page
const listAppointment = async(req,res) =>{
	try {
		const {userId} = req.body;
		const appointment = await appointmentModel.find({userId})		
		res.json({success:true,appointment});
	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
}

// API to cancle appointment
const cancelAppointment = async(req,res) =>{
	try {
		const {userId,appointmentId} = req.body;

		const appointmentData = await appointmentModel.findById(appointmentId)

		// verify appointment user 
		if(appointmentData.userId !== userId){
			return res.json({success:false,message:"Unauthorized Action"})
		
		}
		await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled: true})
		// releasing doctor slots
		const {docId,slotDate,slotTime} = appointmentData
		const doctorData = await doctorModel.findById(docId)

		let slots_booked = doctorData.slots_booked
		slots_booked[slotDate] = slots_booked[slotDate].filter(e => e!== slotTime)
		await doctorModel.findByIdAndUpdate(docId,{slots_booked})
		res.json({success:true,message:"appointment cancelled "})
		
	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
}


const razorpayInstance = new razorpay({
	key_id : process.env.RAZORPAY_KAY_ID,
	key_secret : process.env.RAZORPAY_KAY_SECRET
})
// API to make payment of appointment uding razorpay
const paymentRazorpay = async(req,res)=>{
	try {
		const {appointmentId} = req.body

	const appointmentData = await appointmentModel.findById(appointmentId)
	if(!appointmentData || appointmentData.cancelled){
		return res.json({success:false,message:"Appointment Cancelled or not found!"})
	}

		// creating options for razorpay payment
		const options = {
			amount : appointmentData.amount * 100,
			currency: process.env.CURRENCY,
			receipt :appointmentId

		}


		// creation of an order 
		const order = await razorpayInstance.orders.create(options);
		res.json({success:true,order});
	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
	
}


// API to verify payment of razorpay

const verifyRazorpay = async(req,res)=>{
	try {
		const {razorpay_order_id} = req.body
		const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

		if(orderInfo.status === 'paid'){
			await appointmentModel.findByIdAndUpdate(orderInfo.receipt,{payment:true})
			res.json({success:true,message:"Payment successfylly paid."})
		}
		else{
			res.json({success:false,message:"Payment failed!"})

		}

	} catch (error) {
		console.error(error);
		res.json({ success: false, message: error.message });
	}
}

*/

export { registerStudent, LoginStudent, getprofile, updateProfile};
