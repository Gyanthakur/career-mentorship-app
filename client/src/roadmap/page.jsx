// "use client";
// import { NavLink } from "react-router-dom";



// import { roadmap } from "../data/roadmap";

// export default function RoadmapPage() {
//   return (
//     <div className="min-h-screen dark:bg-gray-900 dark:text-white p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Developer Roadmap</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {roadmap.map((item) => (
//           <NavLink key={item.id} to={`/roadmap/${item.id}`}>
//             <div className="p-5 border rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition cursor-pointer">
//               <img src={item.image} alt={item.title} className="h-28 mx-auto mb-4" />
//               <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//               <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
//             </div>
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";
import { roadmap } from "../data/roadmap";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white p-8 sm:p-12">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white underline decoration-blue-500 decoration-4 underline-offset-8">
        Developer Roadmap
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {roadmap.map((item) => (
          <NavLink
            key={item.id}
            to={`/roadmap/${item.id}`}
            className="transform transition hover:scale-[1.03] hover:shadow-2xl"
            aria-label={`Navigate to ${item.title} roadmap details`}
          >
            <div className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md p-6 flex flex-col items-center text-center h-full">
              <img
                src={item.image}
                alt={item.title}
                className="h-36 w-auto rounded-xl mb-5 object-contain"
                loading="lazy"
                decoding="async"
              />
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-4">
                {item.description}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
