"use client";
import React from "react";
import { Code, Database, PenTool, Layout, Cloud, Brain } from "lucide-react";

const skills = [
	{
		name: "Frontend Development",
		icon: <Layout size={28} />,
		desc: "React, Next.js, TailwindCSS, Material UI",
	},
	{
		name: "Backend Development",
		icon: <Database size={28} />,
		desc: "Node.js, Express, MongoDB, REST APIs",
	},
	{
		name: "Programming",
		icon: <Code size={28} />,
		desc: "C++, Java, JavaScript, Python",
	},
	{
		name: "UI/UX Design",
		icon: <PenTool size={28} />,
		desc: "Figma, Responsive Design, Wireframing",
	},
	{
		name: "Cloud & DevOps",
		icon: <Cloud size={28} />,
		desc: "GitHub, Vercel, Netlify, Docker basics",
	},
	{
		name: "Problem Solving",
		icon: <Brain size={28} />,
		desc: "DSA, Algorithms, System Design basics",
	},
];

const Skills = () => {
	return (
		<div className="min-h-screen  px-6 py-12">
			{/* <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black px-6 py-12"> */}
			<div className="max-w-6xl mx-auto text-center">
				<h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
					Skills Available
				</h1>
				<p className="text-gray-600 dark:text-gray-300 mb-10">
					Explore the skills and technologies you can learn and practice on this
					site.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
						>
							<div className="flex items-center justify-center w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 group-hover:scale-110 transition">
								{skill.icon}
							</div>
							<h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
								{skill.name}
							</h2>
							<p className="text-gray-600 dark:text-gray-300 text-sm">
								{skill.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
