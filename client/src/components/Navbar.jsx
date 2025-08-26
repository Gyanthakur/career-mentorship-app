"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Menu, X, Sun, Moon } from "lucide-react"; // icons

const Navbar = ({ darkMode, setDarkMode }) => {
	const { token, setToken, studentData } = useContext(AppContext);
	// console.log("navbar", studentData.image);

	const [isOpen, setIsOpen] = React.useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	const navigate = useNavigate();

	// Default profile image if studentData image is not available
	const defaultAvatar = "https://www.w3schools.com/w3images/avatar2.png";

	// Toggle dark/light mode
	const toggleDarkMode = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		localStorage.setItem("darkMode", newMode);
		document.documentElement.classList.toggle("dark", newMode);
	};

	// Logout
	const handleLogout = () => {
		setToken(null);
		localStorage.removeItem("token");
		navigate("/login");
	};

	// Close mobile menu when clicking a link
	const handleNavClick = () => {
		setIsOpen(false);
	};

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<NavLink
						to={"/"}
						className="flex-shrink-0 text-xl font-bold text-gray-800 dark:text-white"
					>
						{/* Light Mode Logo */}
						<img
							src="/logo1.png"
							alt="Logo Light"
							className="h-20 w-24 mr-2 inline block dark:hidden"
						/>

						{/* Dark Mode Logo */}
						<img
							src="/logo2.png"
							alt="Logo Dark"
							className="h-20 w-24 mr-2 inline hidden dark:block"
						/>
					</NavLink>

					{/* Desktop Links */}
					<div className="hidden md:flex space-x-6 items-center">
						<NavLink
							to="/"
							onClick={handleNavClick}
							className={({ isActive }) =>
								`px-3 py-2 rounded-md text-sm font-medium ${
									isActive
										? "text-blue-600 dark:text-blue-400"
										: "text-gray-700 dark:text-gray-300"
								}`
							}
						>
							Home
						</NavLink>

						<NavLink
							to="/mentors"
							onClick={handleNavClick}
							className={({ isActive }) =>
								`px-3 py-2 rounded-md text-sm font-medium ${
									isActive
										? "text-blue-600 dark:text-blue-400"
										: "text-gray-700 dark:text-gray-300"
								}`
							}
						>
							Mentors
						</NavLink>

						<NavLink
							to="/about"
							onClick={handleNavClick}
							className={({ isActive }) =>
								`px-3 py-2 rounded-md text-sm font-medium ${
									isActive
										? "text-blue-600 dark:text-blue-400"
										: "text-gray-700 dark:text-gray-300"
								}`
							}
						>
							About
						</NavLink>

						{!token ? (
							<>
								<NavLink
									to="/login"
									onClick={handleNavClick}
									className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300"
								>
									Login
								</NavLink>
								<NavLink
									to="/signup"
									onClick={handleNavClick}
									className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300"
								>
									Signup
								</NavLink>
							</>
						) : (
							// <button
							//   onClick={handleLogout}
							//   className="px-3 py-2 rounded-md text-sm font-medium text-red-500 hover:text-red-700"
							// >
							//   Logout
							// </button>

							//   <div className="flex items-center space-x-4">
							//   <button
							//     onClick={handleLogout}
							//     className="bg-red-500 text-white px-4 py-2 rounded-lg"
							//   >
							//     Logout
							//   </button>
							//   <img
							//     src={studentData?.image || defaultAvatar}
							//     alt="profile"
							//     className="w-10 h-10 rounded-full object-cover "
							//   />
							// </div>

							<div
								className="flex items-center space-x-4 relative"
								ref={dropdownRef}
							>
								{/* Profile Image */}
								<img
									src={studentData?.image || defaultAvatar}
									alt="profile"
									className="w-10 h-10 rounded-full object-cover cursor-pointer"
									onClick={() => setDropdownOpen(!dropdownOpen)}
								/>

								{/* Dropdown Menu */}
								{dropdownOpen && (
									<div className="absolute right-0 top-12 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 py-2">
										<NavLink
											to="/my-profile"
											className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
											onClick={() => setDropdownOpen(false)}
										>
											My Profile
										</NavLink>
										<button
											onClick={() => {
												handleLogout();
												setDropdownOpen(false);
											}}
											className="block w-full text-left px-4 py-2 text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
										>
											Logout
										</button>
									</div>
								)}
							</div>
						)}

						{/* Dark Mode Button */}
						<button
							onClick={toggleDarkMode}
							className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 text-gray-700 dark:text-gray-300"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Links */}
			{isOpen && (
				<div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1 shadow-lg">
					<NavLink
						to="/"
						onClick={handleNavClick}
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
					>
						Home
					</NavLink>

					<NavLink
						to="/mentors"
						onClick={handleNavClick}
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
					>
						Mentors
					</NavLink>

					<NavLink
						to="/about"
						onClick={handleNavClick}
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
					>
						About
					</NavLink>

					{!token ? (
						<>
							<NavLink
								to="/login"
								onClick={handleNavClick}
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
							>
								Login
							</NavLink>
							<NavLink
								to="/signup"
								onClick={handleNavClick}
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
							>
								Signup
							</NavLink>
						</>
					) : (
						// <button
						//   onClick={() => {
						//     handleLogout();
						//     handleNavClick();
						//   }}
						//   className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:text-red-700"
						// >
						//   Logout
						// </button>
						<div className="flex items-center space-x-4">
							<button
								onClick={handleLogout}
								className="bg-red-500 text-white px-4 py-2 rounded-lg"
							>
								Logout
							</button>
							<img
								src={studentData?.image || defaultAvatar}
								alt="profile"
								className="w-10 h-10 rounded-full object-cover"
							/>
						</div>
					)}

					{/* Dark Mode in Mobile */}
					<button
						onClick={toggleDarkMode}
						className="block min-w-fit text-left px-3 py-2 rounded-md text-base font-medium bg-gray-200 dark:bg-gray-700"
					>
						{darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
