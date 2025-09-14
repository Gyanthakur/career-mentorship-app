

// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// import RoadmapChart from "../RoadmapChart";
// import { roadmap } from "../../data/roadmap";

// export default function RoadmapDetails() {
//   const { id } = useParams();
//   const item = roadmap.find((step) => step.id === id);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!item) {
//     return (
//       <div className="p-10 text-center text-lg font-semibold bg-red-50 rounded-xl mt-20">
//         ❌ Roadmap not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black p-6 pt-16 flex flex-col items-center">
//       <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 pb-12 border border-gray-200 dark:border-gray-700">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="h-40 sm:h-48 mx-auto mb-8 rounded-xl shadow"
//         />

//         <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800 dark:text-white leading-tight">
//           {item.title}
//         </h1>

//         <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 text-center">
//           {item.description}
//         </p>

//         {item.roadmapPdf && (
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
//             <a
//               href={item.roadmapPdf}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow transition font-semibold"
//             >
//               <span>🔗</span> Open Roadmap PDF
//             </a>
//             <a
//               href={item.roadmapPdf}
//               download
//               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition font-semibold"
//             >
//               <span>📄</span> Download PDF
//             </a>
//           </div>
//         )}

//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
//             What You'll Learn
//           </h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-2">
//             {item.details.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Roadmap Chart Section */}
//         <div className="mt-8">
//           <RoadmapChart />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import RoadmapChart from "../RoadmapChart";
import { roadmap } from "../../data/roadmap";

export default function RoadmapDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = roadmap.findIndex((step) => step.id === id);
  const item = roadmap[currentIndex];

  // Scroll to top on topic change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle left/right key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && currentIndex < roadmap.length - 1) {
        navigate(`/roadmap/${roadmap[currentIndex + 1].id}`);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        navigate(`/roadmap/${roadmap[currentIndex - 1].id}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, navigate]);

  if (!item) {
    return (
      <div className="p-10 text-center text-lg font-semibold bg-red-50 rounded-xl mt-20">
        ❌ Roadmap not found
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black p-6 pt-16 flex flex-col items-center">
    //   <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 pb-12 border border-gray-200 dark:border-gray-700">
    //     <img
    //       src={item.image}
    //       alt={item.title}
    //       className="h-40 sm:h-48 mx-auto mb-8 rounded-xl shadow"
    //     />

    //     <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800 dark:text-white leading-tight">
    //       {item.title}
    //     </h1>

    //     <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 text-center">
    //       {item.description}
    //     </p>

    //     {item.roadmapPdf && (
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
    //         <a
    //           href={item.roadmapPdf}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow transition font-semibold"
    //         >
    //           <span>🔗</span> Open Roadmap PDF
    //         </a>
    //         <a
    //           href={item.roadmapPdf}
    //           download
    //           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition font-semibold"
    //         >
    //           <span>📄</span> Download PDF
    //         </a>
    //       </div>
    //     )}

    //     <div className="mb-8">
    //       <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
    //         What You'll Learn
    //       </h2>
    //       <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-2">
    //         {item.details.map((point, index) => (
    //           <li key={index}>{point}</li>
    //         ))}
    //       </ul>
    //     </div>

        
    //     <div className="mt-8">
    //       <RoadmapChart />
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black p-6 pt-16 flex flex-col items-center">
  <div className="max-w-3xl w-full relative bg-white/90 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 pb-14 border border-gray-200 dark:border-gray-700">
    
    {/* Hero Image */}
    <div className="relative">
      <img
        src={item.image}
        alt={item.title}
        className="h-44 sm:h-52 mx-auto mb-8 rounded-2xl shadow-lg object-cover"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />
    </div>

    {/* Title */}
    <h1 className="text-center mb-4">

    <span className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 leading-tight">
      {item.title}
    </span>
    </h1>

    {/* Description */}
    <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300 text-center leading-relaxed">
      {item.description}
    </p>

    {/* Action Buttons */}
    {item.roadmapPdf && (
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href={item.roadmapPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl shadow-md transition font-semibold"
        >
          🔗 Open Roadmap PDF
        </a>
        <a
          href={item.roadmapPdf}
          download
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition font-semibold"
        >
          📄 Download PDF
        </a>
      </div>
    )}

    {/* Learnings Section */}
    <div className="mb-10 text-left">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        What You'll Learn
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
        {item.details.map((point, index) => (
          <li key={index} className="pl-1">{point}</li>
        ))}
      </ul>
    </div>

    {/* Roadmap Chart */}
    <div className="mt-10">
      <RoadmapChart />
    </div>
  </div>
</div>

  );
}
