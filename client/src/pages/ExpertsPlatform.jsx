"use client";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
	Brain,
	Code,
	Paintbrush,
	BookOpen,
	DollarSign,
	Stethoscope,
	Users,
	Gavel,
	Rocket,
	Heart,
	GraduationCap,
	Cloud,
	Database,
	Cpu,
	PenTool,
	Briefcase,
	Globe,
	Settings,
	Sparkles,
	Mic,
	Shield,
	Dumbbell,
} from "lucide-react";

const categories = [
	{ id: "cloud", name: "Cloud Computing", icon: Cloud, color: "text-blue-500" },
	{ id: "blockchain", name: "Blockchain", icon: Cpu, color: "text-purple-500" },
	{ id: "devops", name: "DevOps", icon: Settings, color: "text-cyan-500" },
	{ id: "ml", name: "Machine Learning", icon: Brain, color: "text-green-500" },
	{
		id: "public-speaking",
		name: "Public Speaking",
		icon: Mic,
		color: "text-yellow-500",
	},
	{
		id: "fitness",
		name: "Fitness & Health",
		icon: Dumbbell,
		color: "text-red-500",
	},
	{
		id: "relationships",
		name: "Relationships",
		icon: Heart,
		color: "text-pink-500",
	},
	{
		id: "self-growth",
		name: "Self Growth",
		icon: Sparkles,
		color: "text-indigo-500",
	},
	{ id: "career", name: "Career", icon: Briefcase, color: "text-gray-700" },
	{
		id: "consulting",
		name: "Consulting",
		icon: Users,
		color: "text-orange-500",
	},
	{ id: "content", name: "Content", icon: PenTool, color: "text-blue-700" },
	{
		id: "cybersecurity",
		name: "Cybersecurity",
		icon: Shield,
		color: "text-red-600",
	},
	{ id: "data-ai", name: "Data & AI", icon: Brain, color: "text-green-600" },
	{ id: "design", name: "Design", icon: Paintbrush, color: "text-pink-600" },
	{
		id: "finance",
		name: "Finance",
		icon: DollarSign,
		color: "text-yellow-600",
	},
	{ id: "hr", name: "HR", icon: Users, color: "text-gray-600" },
	{ id: "law", name: "Law", icon: Gavel, color: "text-purple-600" },
	{ id: "marketing", name: "Marketing", icon: Rocket, color: "text-cyan-600" },
	{
		id: "mental-health",
		name: "Mental Health",
		icon: Heart,
		color: "text-pink-700",
	},
	{ id: "product", name: "Product", icon: Settings, color: "text-indigo-600" },
	{ id: "software", name: "Software", icon: Code, color: "text-gray-800" },
	{
		id: "study-abroad",
		name: "Study Abroad",
		icon: Globe,
		color: "text-blue-600",
	},
	{
		id: "best-selling",
		name: "Best Selling",
		icon: Sparkles,
		color: "text-yellow-500",
	},
	{
		id: "supply-chain",
		name: "Supply Chain",
		icon: Database,
		color: "text-green-700",
	},
	{ id: "others", name: "Others", icon: BookOpen, color: "text-gray-500" },
];

export default function CategoriesPage() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen  py-16 px-6 md:px-20 flex flex-col">
			{/* <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400 drop-shadow-sm leading-tight">
				🚀 Explore Categories
			</h1> */}
			<h1 className="text-4xl md:text-5xl text-center mb-10">
				{" "}
				🚀
				<span className="text-4xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400 drop-shadow-sm leading">
					Explore Categories{" "}
				</span>
			</h1>

			<div className="text-center max-w-3xl mx-auto mb-14">
				<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white tracking-wide mb-4">
					The{" "}
					<span className="text-blue-600 dark:text-blue-400 underline decoration-2 decoration-blue-200">
						Career Mentorship App
					</span>{" "}
					Platform for Experts
				</h2>
				<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
					Experts from across industries use our platform to grow credibility,
					increase revenue, and connect with clients.
				</p>
			</div>

			<div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 py-6">
				<Marquee
					gradient={false}
					speed={45}
					pauseOnHover={true}
					className="space-x-10 px-6"
				>
					{categories.map(({ id, name, icon: Icon, color }) => (
						<div
							key={id}
							className="flex flex-col items-center justify-center cursor-pointer select-none transition-transform hover:scale-105 hover:shadow-md"
							// onClick={() => navigate(`/categories/${id}`)}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ")
									navigate(`/categories/${id}`);
							}}
							aria-label={`Go to ${name} category`}
						>
							<div
								className={`p-5 rounded-full bg-gradient-to-tr from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-sm border border-gray-200 flex items-center justify-center gap-5 mt-5 m-5`}
								style={{ boxShadow: "0 8px 20px -6px rgba(0,0,0,0.1)" }}
							>
								<Icon className={`h-12 w-12 ${color}`} />
							</div>
							<p className="mt-3 text-base m-5 text-gray-800 dark:text-gray-200 font-medium tracking-wide">
								{name}
							</p>
						</div>
					))}
				</Marquee>
			</div>
			<div className="max-w-3xl mx-auto mt-10 text-center p-6 bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-2xl shadow-md">
				<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
					Experts from diverse industries use our platform to build credibility,
					expand their revenue streams, and connect meaningfully with clients
					seeking guidance and mentorship.
				</p>
			</div>
		</div>
	);
}
