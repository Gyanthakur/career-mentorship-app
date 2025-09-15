// import { NavLink } from "react-router-dom";
// import { roadmap } from "../data/roadmap";

// export default function RoadmapPage() {
// 	return (
// 		<div className="min-h-screen dark:text-white p-8 sm:p-12">
// 			{/* Title */}
// 			<h1 className="text-4xl md:text-5xl text-center mb-16 font-bold">
// 				🚀{" "}
// 				<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
// 					Developer Roadmap
// 				</span>
// 			</h1>

// 			{/* Roadmap Cards */}
// 			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
// 				{roadmap.map((item) => (
// 					<NavLink
// 						key={item.id}
// 						to={`/roadmap/${item.id}`}
// 						aria-label={`Navigate to ${item.title} roadmap details`}
// 					>
// 						<div className="relative group rounded-3xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-lg p-8 h-full flex flex-col items-center text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
// 							{/* Gradient border glow on hover */}
// 							<div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-pink-400/60 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition" />

// 							{/* Image */}
// 							<div className="relative w-28 h-28 mb-6 rounded-2xl bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-700/40 dark:via-purple-700/40 dark:to-pink-700/40 flex items-center justify-center shadow-inner">
// 								<img
// 									src={item.image}
// 									alt={item.title}
// 									className="h-20 w-20 object-contain"
// 									loading="lazy"
// 									decoding="async"
// 								/>
// 							</div>

// 							{/* Title */}
// 							<h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-pink-500 transition">
// 								{item.title}
// 							</h2>

// 							{/* Description */}
// 							<p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4">
// 								{item.description}
// 							</p>
// 						</div>
// 					</NavLink>
// 				))}
// 			</div>
// 		</div>
// 	);
// }
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { roadmap } from "../data/roadmap";
import { AppContext } from "../context/AppContext";

export default function RoadmapPage() {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (!token) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      navigate(`/roadmap/${id}`);
    }
  };

  return (
    <div className="min-h-screen dark:text-white p-8 sm:p-12">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl text-center mb-16 font-bold">
        🚀{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          Developer Roadmap
        </span>
      </h1>

      {/* Roadmap Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {roadmap.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="relative group rounded-3xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-lg p-8 h-full flex flex-col items-center text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            {/* Gradient border glow on hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-pink-400/60 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition" />

            {/* Image */}
            <div className="relative w-28 h-28 mb-6 rounded-2xl bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-700/40 dark:via-purple-700/40 dark:to-pink-700/40 flex items-center justify-center shadow-inner">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-pink-500 transition">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
