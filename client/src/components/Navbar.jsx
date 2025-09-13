// "use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Menu, X, Sun, Moon } from "lucide-react"; // icons
import { toast } from "react-toastify";
import Logger from "./Logger";

const Navbar = ({ darkMode, setDarkMode }) => {
	const { token, setToken, studentData } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);
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
	const defaultAvatar = "https://www.w3schools.com/w3images/avatar2.png";

	const toggleDarkMode = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		localStorage.setItem("darkMode", newMode);
		document.documentElement.classList.toggle("dark", newMode);
	};

	const handleLogout = () => {
		setToken(null);
		const name = studentData?.name || "User";
		localStorage.removeItem("token");
		toast.success(`${name} Logged out successfully!`);
		navigate("/login");
	};

	const handleNavClick = () => {
		setIsOpen(false);
	};

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
			<div className="w-full shadow sticky top-0 z-50 bg-white/90 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
				<div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
					{/* Left: Nav links */}
					<div className="hidden md:flex gap-1">
						<NavLink
							to="/"
							onClick={handleNavClick}
							className={({ isActive }) =>
								`px-5 py-2 rounded-full text-base font-semibold transition-all ${
									isActive
										? "bg-blue-600 text-white shadow"
										: "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800"
								}`
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/mentors"
							onClick={handleNavClick}
							className={({ isActive }) =>
								`px-5 py-2 rounded-full text-base font-semibold transition-all ${
									isActive
										? "bg-blue-600 text-white shadow"
										: "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800"
								}`
							}
						>
							Mentors
						</NavLink>
						<NavLink
							to="/about"
							onClick={handleNavClick}
							className={({ isActive }) =>
								`px-5 py-2 rounded-full text-base font-semibold transition-all ${
									isActive
										? "bg-blue-600 text-white shadow"
										: "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800"
								}`
							}
						>
							About
						</NavLink>

						<Logger/>
					</div>

					{/* Middle: Centered Logo */}
					<NavLink to="/" className="flex-shrink-0">
						<img
							src="/logo1.png"
							alt="Logo"
							className="h-32 w-auto block dark:hidden"
						/>
						<img
							src="/logo2.png"
							alt="Logo Dark"
							className="h-32 w-auto hidden dark:block"
						/>
					</NavLink>

					{/* Right: Auth/Profile & Utilities */}
					<div className="flex items-center space-x-1">
						{/* <Logger /> */}
						{!token ? (
							<>
								<NavLink
									to="/login"
									onClick={handleNavClick}
									className="px-5 py-2 rounded-full text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
								>
									Login
								</NavLink>
								<NavLink
									to="/signup"
									onClick={handleNavClick}
									className="px-5 py-2 rounded-full text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow transition"
								>
									Signup
								</NavLink>
							</>
						) : (
							<div ref={dropdownRef} className="relative flex items-center">
								<button
									onClick={() => setDropdownOpen(!dropdownOpen)}
									className="flex items-center px-3 py-2 rounded-full border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900 gap-2 shadow cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800 transition"
								>
									<img
										src={studentData?.image || defaultAvatar}
										alt="profile"
										className="w-8 h-8 border-2 border-blue-700 rounded-full object-cover"
									/>
									<span className="hidden md:inline text-left">
										<span className="block font-bold text-xs text-blue-700 dark:text-blue-200">
											Account
										</span>
										<span className="block font-normal text-xs text-gray-700 dark:text-gray-300">
											{studentData?.email}
										</span>
									</span>
									<svg
										className={`w-5 h-5 ml-1 transform transition-transform ${
											dropdownOpen ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{dropdownOpen && (
									<div className="absolute right-0 top-14 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 py-2 z-40">
										<NavLink
											to="/my-profile"
											className="block w-full text-left px-5 py-2 text-gray-700 dark:text-gray-200 font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 rounded transition"
											onClick={() => setDropdownOpen(false)}
										>
											My Profile
										</NavLink>
										<button
											onClick={() => {
												handleLogout();
												setDropdownOpen(false);
											}}
											className="block w-full text-left px-5 py-2 text-red-500 dark:text-red-400 font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 rounded transition"
										>
											Logout
										</button>
									</div>
								)}
							</div>
						)}

						<button
							onClick={toggleDarkMode}
							className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition"
							aria-label={
								darkMode ? "Switch to light mode" : "Switch to dark mode"
							}
						>
							{darkMode ? <Sun size={20} /> : <Moon size={20} />}
						</button>

						{/* Mobile Menu Button */}
						<div className="md:hidden flex items-center">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
								aria-label={isOpen ? "Close menu" : "Open menu"}
							>
								{isOpen ? <X size={28} /> : <Menu size={28} />}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
					<div className="flex justify-between items-center px-6 pt-6 border-b border-gray-200 dark:border-gray-700">
						<NavLink to="/" onClick={handleNavClick}>
							<img
								src="/logo1.png"
								alt="Logo"
								className="h-16 w-auto block dark:hidden"
							/>
							<img
								src="/logo2.png"
								alt="Logo Dark"
								className="h-16 w-auto hidden dark:block"
							/>
						</NavLink>
						<button
							onClick={() => setIsOpen(false)}
							className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
							aria-label="Close menu"
						>
							<X size={28} />
						</button>
					</div>
					<div className="flex flex-col items-center py-6 space-y-4">
						<NavLink
							to="/"
							onClick={handleNavClick}
							className="w-full max-w-xs text-center px-4 py-3 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							Home
						</NavLink>
						<NavLink
							to="/mentors"
							onClick={handleNavClick}
							className="w-full max-w-xs text-center px-4 py-3 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							Mentors
						</NavLink>
						<NavLink
							to="/about"
							onClick={handleNavClick}
							className="w-full max-w-xs text-center px-4 py-3 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							About
						</NavLink>
						<Logger />
						<div className="w-full max-w-xs border-t border-gray-200 dark:border-gray-700 my-4" />
						{!token ? (
							<>
								<NavLink
									to="/login"
									onClick={handleNavClick}
									className="w-full max-w-xs text-center px-4 py-3 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900 transition"
								>
									Login
								</NavLink>
								<NavLink
									to="/signup"
									onClick={handleNavClick}
									className="w-full max-w-xs text-center px-4 py-3 rounded-lg font-semibold bg-blue-600 text-white dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 shadow transition"
								>
									Signup
								</NavLink>
							</>
						) : (
							<div
								className="relative flex items-center w-full max-w-xs justify-center"
								ref={dropdownRef}
							>
								<button
									className="flex items-center gap-2 w-full justify-center px-4 py-3 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
									onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									<img
										src={studentData?.image || defaultAvatar}
										alt="profile"
										className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 shadow"
									/>
									<span className="font-semibold text-gray-800 dark:text-gray-100">
										Account
									</span>
									<svg
										className={`w-5 h-5 duration-200 ${
											dropdownOpen ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{dropdownOpen && (
									<div className="absolute w-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 py-2 z-40">
										<NavLink
											to="/my-profile"
											
											className="block text-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
											onClick={() => {setDropdownOpen(false),handleNavClick()}}
										>
											My Profile
										</NavLink>
										<button
											onClick={() => {
												handleLogout();
												setDropdownOpen(false);
											}}
											className="block w-full text-center px-4 py-2 text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
										>
											Logout
										</button>
									</div>
								)}
							</div>

)}

						<div className="w-full max-w-xs border-t border-gray-200 dark:border-gray-700 my-2" />
						<button
							onClick={toggleDarkMode}
							className="w-full max-w-xs flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
						>
							{darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
