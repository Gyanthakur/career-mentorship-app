// "use client";
// import React, { useState, useContext, useEffect } from "react";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const {token, setToken } = useContext(AppContext);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/student/signup",
//         formData
//       );
//       if (response.data.success) {
//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       setError("Signup failed. Please try again.");
//     }
//     setLoading(false);
//   };

//    useEffect(()=>{
//       if(token){
//         navigate('/')
//       }
//     },[token])

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 dark:from-gray-900 dark:to-gray-800 p-4">
//       <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
//           Sign Up
//         </h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           {/* Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white pr-10"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <input
//               type={showConfirm ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white pr-10"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirm(!showConfirm)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300"
//             >
//               {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200 disabled:opacity-50"
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
//           >
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
"use client";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();
	const { token, setToken } = useContext(AppContext);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		image: "",
		role: "student",
		gender: "Not Selected",
		dob: "",
		phone: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);

	const [image, setImage] = useState(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(URL.createObjectURL(file)); // Preview
		}
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match!");
			setLoading(false);
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:4000/api/student/signup",
				formData
			);
			if (response.data.success) {
				setToken(response.data.token);
				localStorage.setItem("token", response.data.token);
			} else {
				setError(response.data.message);
			}
		} catch (err) {
			setError("Signup failed. Please try again.");
		}
		setLoading(false);
	};

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);

	const isFormValid =
		formData.name &&
		formData.email &&
		formData.password &&
		formData.confirmPassword &&
		formData.password === formData.confirmPassword;

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 dark:from-gray-900 dark:to-gray-800 p-4 pt-24">
			<div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl w-full max-w-md p-8">
				<h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
					Sign Up
				</h2>
				{error && <p className="text-red-500 text-center mb-4">{error}</p>}

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Name */}
					<input
						type="text"
						name="name"
						placeholder="Full Name"
						className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
						value={formData.name}
						onChange={handleChange}
						required
					/>

					{/* Email */}
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
						value={formData.email}
						onChange={handleChange}
						required
					/>

					{/* Phone */}
					<input
						type="text"
						name="phone"
						placeholder="Phone"
						className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
						value={formData.phone}
						onChange={handleChange}
					/>

					{/* DOB */}
					{/* <input
            type="date"
            name="dob"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
            value={formData.dob}
            onChange={handleChange}
          /> */}

					{/* Gender */}
					<select
						name="gender"
						className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
						value={formData.gender}
						onChange={handleChange}
					>
						<option value="Not Selected">Select Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>

					{/* Role */}
					<select
						name="role"
						className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white"
						value={formData.role}
						onChange={handleChange}
					>
						<option value="student">Student</option>
						<option value="mentor">Mentor</option>
						<option value="admin">Admin</option>
					</select>

					{/* Image */}
					{/* <div className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white">
						<input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							className="border rounded-md p-2"
						/>

						{image && (
							<div className="w-40 h-40 rounded-full overflow-hidden border">
								<img
									src={image}
									alt="Preview"
									className="w-full h-full object-cover"
								/>
							</div>
						)}
					</div> */}

					{/* Password */}
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="Password"
							className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white pr-10"
							value={formData.password}
							onChange={handleChange}
							required
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300"
						>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
					</div>

					{/* Confirm Password */}
					<div className="relative">
						<input
							type={showConfirm ? "text" : "password"}
							name="confirmPassword"
							placeholder="Confirm Password"
							className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-pink-400 dark:bg-gray-800 dark:text-white pr-10"
							value={formData.confirmPassword}
							onChange={handleChange}
							required
						/>
						<button
							type="button"
							onClick={() => setShowConfirm(!showConfirm)}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300"
						>
							{showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
					</div>

					{/* Submit */}
					<button
						type="submit"
						disabled={loading || !isFormValid}
						className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200 disabled:opacity-50"
					>
						{loading ? "Signing up..." : "Sign Up"}
					</button>
				</form>

				{/* Login Link */}
				<p className="mt-6 text-center text-gray-600 dark:text-gray-400">
					Already have an account?{" "}
					<a
						href="/login"
						className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
					>
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default Signup;
