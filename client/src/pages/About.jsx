import React from "react";

// Sample team images; replace with actual image URLs
const team = [
	{
		name: "Gyan Pratap Singh",
		role: "Founder & Developer",
		img: "/gyan.png",
		links: {
			linkedin: "https://www.linkedin.com/in/gyan-pratap-singh-275785236/",
			twitter: "https://x.com/gps_96169",
		},
	},
	{
		name: "Bhanu Pratap Singh",
		role: "Lead Mentor",
		img: "https://randomuser.me/api/portraits/men/12.jpg",
		links: {
			linkedin: "https://www.linkedin.com/in",
			twitter: "https://x.com/",
		},
	},
	{
		name: "Dhruva Pratap Singh",
		role: "Community Advisor",
		img: "https://randomuser.me/api/portraits/men/14.jpg",
		links: {
			linkedin: "https://www.linkedin.com/in",
			twitter: "https://x.com/",
		},
	},
];

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#eef2f3] via-[#fff] to-[#ddeefc] dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100">
			{/* Hero */}
			<section className="relative py-24 px-6 md:px-20 text-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-cyan-500/70 blur-2xl opacity-30 pointer-events-none"></div>
				<h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 relative z-10 drop-shadow-lg">
					About Us
				</h1>
				<p className="text-lg md:text-xl mx-auto max-w-2xl relative z-10 text-cyan-600 dark:text-cyan-300">
					A next-gen mentorship & expert platform. Connect with professionals
					worldwide. 🚀
				</p>
				<p className="text-lg md:text-xl mx-auto max-w-3xl relative z-10 text-gray-700 dark:text-gray-100 leading-relaxed">
					Our platform is a modern career mentorship and expert networking hub
					where learners and professionals connect to share knowledge, build
					skills, and grow opportunities. From coding and design to public
					speaking, fitness, and finance, we bring experts from diverse fields
					onto one trusted platform. With interactive roadmaps, personalized
					categories, and expert-led guidance, we empower individuals to learn
					at their own pace, access real-world insights, and achieve their goals
					with confidence. 🚀
				</p>
			</section>

			{/* Mission & Vision */}
			<section className="py-16 px-6 md:px-20 grid gap-10 md:grid-cols-2">
				{[
					{
						title: "🎯 Our Mission",
						color:
							"from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-900",
						desc: "Democratize mentorship. Connect learners and experts globally. Empower everyone to succeed personally and professionally.",
					},
					{
						title: "🌍 Our Vision",
						color:
							"from-cyan-50 to-blue-100 dark:from-gray-800 dark:to-gray-900",
						desc: "Create a borderless learning ecosystem. Gain wisdom, mentorship, and opportunities from anywhere.",
					},
				].map((item, i) => (
					<div
						key={item.title}
						className={`rounded-2xl p-8 shadow-xl border hover:scale-[1.03] transition bg-gradient-to-tr ${item.color} border-gray-200 dark:border-gray-700 backdrop-blur`}
					>
						<h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-cyan-400 dark:to-blue-600">
							{item.title}
						</h2>
						<p className="text-lg">{item.desc}</p>
					</div>
				))}
			</section>

			{/* Core Values */}
			<section className="py-16 px-6 md:px-20">
				<h2 className="text-4xl font-bold text-center mb-12">
					✨ Our Core Values
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Trust",
							desc: "Authenticity and transparency at every step.",
						},
						{
							title: "Growth",
							desc: "Helping individuals scale careers and dreams.",
						},
						{
							title: "Community",
							desc: "Global support system of professionals & learners.",
						},
					].map((val) => (
						<div
							key={val.title}
							className="rounded-xl p-7 shadow-lg bg-gradient-to-tr from-blue-100 to-cyan-50 dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition"
						>
							<h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-cyan-400">
								{val.title}
							</h3>
							<p className="text-gray-700 dark:text-gray-300">{val.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-16 px-6 md:px-20 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-3xl shadow-inner">
				<h2 className="text-4xl font-bold text-center mb-12">
					💡 Why Choose Us?
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					{[
						{
							title: "Expert-Led",
							desc: "Learn directly from top industry professionals.",
						},
						{
							title: "Affordable",
							desc: "Accessible mentorship at lower costs.",
						},
						{
							title: "Diverse",
							desc: "From tech to health — every niche covered.",
						},
						{
							title: "Flexible",
							desc: "Self-paced learning & 1-on-1 mentorship sessions.",
						},
					].map((feat) => (
						<div
							key={feat.title}
							className="rounded-xl p-6 shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition"
						>
							<h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-400">
								{feat.title}
							</h3>
							<p className="text-gray-700 dark:text-gray-300">{feat.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 px-6 md:px-20">
				<h2 className="text-4xl font-bold text-center mb-12">
					👨‍💻 Meet Our Team
				</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
					{team.map((member) => (
						<div
							key={member.name}
							className="p-8 rounded-2xl shadow-lg bg-white/90 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:scale-105 transition flex flex-col items-center"
						>
							<div className="relative group">
								<img
									src={member.img}
									alt={member.name}
									className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-4 border-blue-500/40 transition group-hover:brightness-90"
								/>
								<div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
									{Object.entries(member.links).map(([key, url]) => (
										<a
											key={key}
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white bg-blue-500/60 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-600"
										>
											{key.charAt(0).toUpperCase() + key.slice(1)}
										</a>
									))}
								</div>
							</div>
							<h3 className="text-lg font-semibold mt-2">{member.name}</h3>
							<p className="text-sm text-gray-700 dark:text-gray-400">
								{member.role}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 px-6 md:px-20 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white relative rounded-t-3xl mt-10">
				<div className="absolute inset-0 bg-black/10 backdrop-blur-md rounded-t-3xl"></div>
				<div className="relative z-10">
					<h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
						Ready to Start Your Journey?
					</h2>
					<p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
						Join thousands of learners & experts already growing with us.
					</p>
					<a
						href="/categories"
						className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-lg"
					>
						🚀 Explore Categories
					</a>
				</div>
			</section>
		</div>
	);
}
