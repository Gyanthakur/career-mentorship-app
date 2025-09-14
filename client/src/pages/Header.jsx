import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
	return (
		<div className="relative text-black bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
				{/* Left Content */}
				<div className="space-y-6">
					<h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300 drop-shadow-lg">
						Unlock Your Career Growth
					</h1>
					<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
						Welcome to our{" "}
						<span className="font-semibold text-blue-600 dark:text-cyan-300">
							Career Mentorship App
						</span>
						, where guidance meets opportunity. We connect you with experienced
						mentors who provide personalized advice, skills development, and
						growth strategies.
					</p>
					<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
						Whether you're a student exploring career options or a professional
						aiming for the next big leap, our platform helps you gain clarity,
						build confidence, and achieve your goals.
					</p>
					<button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.9)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out">
						🚀 Get Started
					</button>
				</div>

				{/* Right Content - Images */}
				<div className="relative flex items-center justify-center">
					{/* Background glowing orbs */}
					<div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
					<div className="absolute -bottom-12 -right-12 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>

					<div className="relative w-full flex gap-6">
						<img
							src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
							alt="Mentorship"
							className="rounded-3xl shadow-2xl w-1/2 object-cover transform hover:scale-110 hover:rotate-1 transition-all duration-500"
						/>
						<img
							src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
							alt="Career Growth"
							className="rounded-3xl shadow-2xl w-1/2 object-cover transform hover:scale-110 hover:-rotate-1 transition-all duration-500"
						/>
					</div>
				</div>
			</div>

			{/* Decorative gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-black/20 pointer-events-none"></div>

			<div className="flex justify-center items-center mx-auto w-fit px-4 py-2 bg-green-400 dark:bg-green-500/70 text-pink-800 dark:text-gray-200 text-sm font-semibold rounded-full shadow-md backdrop-blur-sm text-center">
				<h3>
					<Typewriter
						words={["Its on Development Mode"]}
						loop={false}
						cursor
						cursorStyle="_"
						typeSpeed={60}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</h3>
			</div>
		</div>
	);
};

export default Header;
