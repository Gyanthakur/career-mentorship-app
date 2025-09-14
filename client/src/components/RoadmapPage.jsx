"use client";
import React from "react";
import { ArrowDown, CheckCircle2, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const RoadmapPage = () => {
	const roadmapSteps = [
		{
			id: "basics",
			title: "Step 1: Basics of Programming",
			description:
				"Begin learning programming with variables, loops, functions, and logic.",
			image: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
		},
		{
			id: "dsa",
			title: "Step 2: Data Structures & Algorithms",
			description:
				"Understand arrays, stacks, queues, trees, graphs,  sorting .",
			image: "https://cdn-icons-png.flaticon.com/512/1329/1329016.png",
		},
		{
			id: "frontend",
			title: "Step 3: Frontend Development",
			description:
				"Learn HTML, CSS, JavaScript, and frameworks such as React.js, Next.js.",
			image: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
		},
		{
			id: "backend",
			title: "Step 4: Backend Development",
			description:
				"Study Node.js, Express.js, MongoDB, MySQL, and backend API design.",
			image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
		},
		{
			id: "git",
			title: "Step 5: Version Control",
			description:
				"Master Git commands and GitHub collaboration for professional project management.",
			image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
		},
		{
			id: "projects",
			title: "Step 6: Projects & Deployment",
			description:
				"Build real-world projects, deploy them using Vercel, Netlify, or Amazon Web Services.",
			image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
		},
		{
			id: "advanced",
			title: "Step 7: Advanced Topics",
			description:
				"Explore DevOps, System Design, Cloud technologies, Artificial Intelligence, and Machine Learning.",
			image: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
		},
	];

	return (
		<div className="min-h-screen dark:text-gray-100 py-16 px-6">
			<div className="max-w-7xl mx-auto">
				{/* Title */}
				<h1 className="text-4xl md:text-5xl text-center mb-16 font-bold">
					🚀{" "}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
						Learning Roadmap
					</span>
				</h1>

				{/* Roadmap Flow - Horizontal */}
				<div className="relative flex items-center justify-start overflow-x-auto scrollbar-hide pb-12">
					<div className="flex items-center space-x-16 relative">
						{roadmapSteps.map((step, index) => (
							<div
								key={step.id}
								className="relative flex flex-col items-center mt-5"
							>
								{/* Connector Line */}
								{index < roadmapSteps.length - 1 && (
									<div className="absolute left-full top-1/2 w-20 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" />
								)}

								{/* Step Card */}
								<NavLink
									to={`/roadmap/${step.id}`}
									className="relative group bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl shadow-lg p-8 w-64 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800"
								>
									{/* Gradient glow outline on hover */}
									<div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-pink-400/60 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition" />

									{/* Icon container */}
									<div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-700/30 dark:via-purple-700/40 dark:to-pink-700/30 flex items-center justify-center shadow-inner">
										<img
											src={step.image}
											alt={step.title}
											className="w-12 h-12 object-contain"
										/>
									</div>

									{/* Title */}
									<h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-pink-500 transition">
										{step.title}
									</h2>

									{/* Description */}
									<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
										{step.description}
									</p>
								</NavLink>

								{/* Step Indicator */}
								<div className="mt-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[7px] shadow-md">
									<CheckCircle2 className="text-white w-5 h-5" />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="max-w-3xl mx-auto text-center p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-2xl shadow-md">
					<h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
						🚀 Developer Roadmap Summary
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
						This roadmap guides learners from programming basics through data
						structures, frontend and backend development, version control, and
						project deployment. It concludes with advanced topics like system
						design, DevOps, cloud, and artificial intelligence—helping you grow
						step by step into a complete developer.
					</p>
				</div>
			</div>
		</div>
	);
};

export default RoadmapPage;
