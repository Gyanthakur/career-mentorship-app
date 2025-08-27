import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

// Simple loader component
const Loader = () => (
	<div className="flex items-center justify-center h-screen">
		<div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
	</div>
);

const MyProfile = () => {
	const {
		studentData,
		setStudentData,
		loadStudentProfileData,
		token,
		backendUrl,
	} = useContext(AppContext);

	const [isEdit, setIsEdit] = useState(false);
	const [image, setImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [initialLoading, setInitialLoading] = useState(true);

	// 🔄 Fetch profile when page loads
	useEffect(() => {
		const fetchData = async () => {
			setInitialLoading(true);
			await loadStudentProfileData();
			setInitialLoading(false);
		};
		fetchData();
	}, []);

	// ✅ Update Student Profile API
	const updateStudentProfileData = async () => {
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.append("name", studentData.name);
			formData.append("phone", studentData.phone);
			formData.append("gender", studentData.gender);
			formData.append("dob", studentData.dob);

			if (image) {
				formData.append("image", image);
			}

			const { data } = await axios.post(
				`${backendUrl}/api/student/update-profile`,
				formData,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			if (data.success) {
				toast.success(data.message);
				await loadStudentProfileData();
				setIsEdit(false);
				setImage(null);
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			console.error(error);
			toast.error(error.response?.data?.message || error.message);
		}
		setIsLoading(false);
	};

	// Show loader until data is ready
	if (initialLoading || !studentData) return <Loader />;

	return (
		<div className="max-w-3xl mx-auto mt-16 mb-5 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all">
			<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-sm ">
				Your Profile Information
			</h3>

			{/* Profile Image & Name */}
			<div className="flex flex-col items-center mt-6">
				{isEdit ? (
					<label htmlFor="image" className="cursor-pointer relative group">
						<img
							className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-pink-300 dark:ring-pink-600 opacity-80 group-hover:opacity-100 transition-all"
							src={image ? URL.createObjectURL(image) : studentData.image}
							alt="profile"
						/>
						<div className="absolute bottom-2 right-2 bg-pink-600 text-white text-xs sm:text-sm px-2 py-1 rounded shadow">
							Change
						</div>
						<input
							onChange={(e) => setImage(e.target.files[0])}
							type="file"
							id="image"
							hidden
						/>
					</label>
				) : (
					<img
						className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-pink-300 dark:ring-pink-600"
						src={studentData.image}
						alt="profile"
					/>
				)}

				{/* Name */}
				{isEdit ? (
					<input
						className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-center bg-gray-100 dark:bg-gray-700 dark:text-white px-3 py-2 rounded focus:ring-2 focus:ring-pink-400 outline-none w-full max-w-xs"
						type="text"
						value={studentData.name}
						onChange={(e) =>
							setStudentData((prev) => ({ ...prev, name: e.target.value }))
						}
					/>
				) : (
					<p className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-100 mt-4 text-center">
						{studentData.name}
					</p>
				)}
			</div>

			{/* Contact Section */}
			<div className="mt-8">
				<h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wide mb-3">
					Contact Information
				</h3>
				<div className="grid grid-cols-[120px_1fr] gap-y-3 text-gray-700 dark:text-gray-300">
					<span className="font-medium">Email:</span>
					<span className="text-blue-600">{studentData.email}</span>

					<span className="font-medium">Phone:</span>
					{isEdit ? (
						<input
							className="bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded focus:ring-2 focus:ring-pink-400 outline-none max-w-xs"
							type="tel"
							value={studentData.phone}
							onChange={(e) =>
								setStudentData((prev) => ({
									...prev,
									phone: e.target.value,
								}))
							}
						/>
					) : (
						<span className="text-blue-500">{studentData.phone}</span>
					)}
				</div>
			</div>

			{/* Basic Section */}
			<div className="mt-8">
				<h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wide mb-3">
					Basic Information
				</h3>
				<div className="grid grid-cols-[120px_1fr] gap-y-3 text-gray-700 dark:text-gray-300">
					<span className="font-medium">Gender:</span>
					{isEdit ? (
						<select
							className="bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded focus:ring-2 focus:ring-pink-400 outline-none max-w-[140px]"
							value={studentData.gender}
							onChange={(e) =>
								setStudentData((prev) => ({ ...prev, gender: e.target.value }))
							}
						>
							<option value="Not Selected">Not Selected</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					) : (
						<span>{studentData.gender}</span>
					)}

					<span className="font-medium">Birthday:</span>
					{isEdit ? (
						<input
							className="bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded focus:ring-2 focus:ring-pink-400 outline-none max-w-[160px]"
							type="date"
							value={studentData.dob}
							onChange={(e) =>
								setStudentData((prev) => ({ ...prev, dob: e.target.value }))
							}
						/>
					) : (
						<span>{studentData.dob}</span>
					)}

					<span className="font-medium">Role:</span>
					<span className="text-gray-600 dark:text-gray-300">
						{studentData.role}
					</span>
				</div>
			</div>

			{/* Save/Edit Buttons */}
			<div className="flex justify-center mt-10">
				{isEdit ? (
					<button
						className="flex items-center justify-center gap-2 border border-pink-500 text-pink-600 dark:text-pink-400 px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white dark:hover:text-black transition-all disabled:opacity-50"
						onClick={updateStudentProfileData}
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<div className="w-5 h-5 border-2 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
								<span>Saving...</span>
							</>
						) : (
							"Save Information"
						)}
					</button>
				) : (
					<button
						className="border border-pink-500 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white dark:hover:text-black transition-all"
						onClick={() => setIsEdit(true)}
					>
						Edit Profile
					</button>
				)}
			</div>
		</div>
	);
};

export default MyProfile;
