import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const Loader = () => (
	<div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
		<div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
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

	useEffect(() => {
		const fetchProfile = async () => {
			setInitialLoading(true);
			await loadStudentProfileData();
			setInitialLoading(false);
		};
		fetchProfile();
	}, []);

	const updateStudentProfileData = async () => {
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.append("name", studentData.name);
			formData.append("phone", studentData.phone);
			formData.append("gender", studentData.gender);
			formData.append("dob", studentData.dob);
			if (image) formData.append("image", image);

			const { data } = await axios.post(
				`${backendUrl}/api/student/update-profile`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			if (data.success) {
				toast.success(data.message);
				await loadStudentProfileData();
				setIsEdit(false);
				setImage(null);
			} else toast.error(data.message);
		} catch (err) {
			console.error(err);
			toast.error(err.response?.data?.message || err.message);
		}
		setIsLoading(false);
	};

	if (initialLoading || !studentData) return <Loader />;

	return (
		<div className="max-w-3xl mx-auto mt-16 mb-5 p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transition-colors duration-300">
			<h3 className="text-4xl font-semibold text-center text-blue-700 dark:text-cyan-400 mb-8 tracking-tight drop-shadow-sm">
				Your Profile Information
			</h3>

			<div className="flex flex-col items-center space-y-6">
				{isEdit ? (
					<label
						htmlFor="image"
						className="relative cursor-pointer group rounded-full overflow-hidden shadow-md ring-4 ring-blue-400 dark:ring-blue-600 w-36 h-36"
					>
						<img
							src={image ? URL.createObjectURL(image) : studentData.image}
							alt="profile"
							className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
						/>
						<div className="absolute bottom-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
							Change
						</div>
						<input
							id="image"
							type="file"
							accept="image/*"
							hidden
							onChange={(e) => setImage(e.target.files[0])}
						/>
					</label>
				) : (
					<img
						src={studentData.image}
						alt="profile"
						className="w-36 h-36 rounded-full object-cover ring-4 ring-blue-400 dark:ring-blue-600 shadow-lg"
					/>
				)}

				{isEdit ? (
					<input
						type="text"
						value={studentData.name}
						onChange={(e) =>
							setStudentData((prev) => ({ ...prev, name: e.target.value }))
						}
						className="w-full max-w-xs px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white text-center text-2xl font-semibold shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-400"
						placeholder="Your name"
					/>
				) : (
					<p className="text-2xl font-extrabold text-center text-blue-500 dark:text-blue-300 drop-shadow-sm">
						{studentData.name}
					</p>
				)}
			</div>

			<section className="mt-10 space-y-6">
				<h4 className="text-sm font-bold uppercase tracking-wide border-b border-blue-400 pb-1 text-gray-600 dark:text-blue-400">
					Contact Information
				</h4>
				<div className="grid grid-cols-[140px_1fr] gap-x-6 gap-y-6 text-gray-800 dark:text-gray-300 font-medium">
					<span>Email:</span>
					<span className="text-blue-600 dark:text-blue-400 break-words truncate">
						{studentData.email}
					</span>

					<span>Phone:</span>
					{isEdit ? (
						<input
							type="tel"
							value={studentData.phone}
							onChange={(e) =>
								setStudentData((prev) => ({ ...prev, phone: e.target.value }))
							}
							className="rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-inner"
							placeholder="Enter phone number"
						/>
					) : (
						<span className="text-blue-500">{studentData.phone}</span>
					)}
				</div>
			</section>

			<section className="mt-10 space-y-6">
				<h4 className="text-sm font-bold uppercase tracking-wide border-b border-blue-400 pb-1 text-gray-600 dark:text-blue-400">
					Basic Information
				</h4>
				<div className="grid grid-cols-[140px_1fr] gap-x-6 gap-y-6 text-gray-800 dark:text-gray-300 font-medium">
					<span>Gender:</span>
					{isEdit ? (
						<select
							value={studentData.gender}
							onChange={(e) =>
								setStudentData((prev) => ({ ...prev, gender: e.target.value }))
							}
							className="rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-inner"
						>
							<option value="Not Selected">Not Selected</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					) : (
						<span>{studentData.gender}</span>
					)}

					<span>Birthday:</span>
					{isEdit ? (
						<input
							type="date"
							value={studentData.dob}
							onChange={(e) =>
								setStudentData((prev) => ({ ...prev, dob: e.target.value }))
							}
							className="rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-inner"
						/>
					) : (
						<span>{studentData.dob}</span>
					)}

					<span>Role:</span>
					<span className="text-gray-700 dark:text-gray-400 italic">
						{studentData.role}
					</span>
				</div>
			</section>

			<div className="flex justify-center mt-12">
				{isEdit ? (
					<button
						onClick={updateStudentProfileData}
						disabled={isLoading}
						className="flex items-center gap-3 px-8 py-3 font-semibold rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 shadow-lg hover:bg-blue-600 hover:text-white dark:hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? (
							<>
								<span className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
								Saving...
							</>
						) : (
							"Save Information"
						)}
					</button>
				) : (
					<button
						onClick={() => setIsEdit(true)}
						className="px-8 py-3 font-semibold rounded-full border-2 border-blue-600 text-gray-900 dark:text-blue-400 shadow-lg hover:bg-blue-600 hover:text-white dark:hover:text-black transition"
					>
						Edit Profile
					</button>
				)}
			</div>
		</div>
	);
};

export default MyProfile;
