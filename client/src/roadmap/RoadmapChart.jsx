import { Link, useParams } from "react-router-dom";
import { roadmap } from "../data/roadmap";

export default function RoadmapChart() {
  const { id } = useParams();

  return (
   
    <div className="mt-10 w-full overflow-x-auto pb-6">
  <div className="flex items-center justify-start min-w-max relative">

    {/* Timeline line with gradient progress effect */}
    <div className="absolute top-9 left-0 right-0 h-2 bg-gray-200 dark:bg-gray-700 rounded-full z-0">
      <div
        className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all"
        style={{ width: `${((roadmap.findIndex(step => step.id === id) + 1) / roadmap.length) * 100}%` }}
      />
    </div>

    {roadmap.map((step, i) => {
      const isActive = step.id === id;
      return (
        <Link
          key={step.id}
          to={`/roadmap/${step.id}`}
          className="relative flex flex-col items-center z-10 mx-4 min-w-[90px] group mt-2"
        >
          {/* Step node */}
          <div
            className={`flex items-center justify-center h-16 w-16 rounded-full shadow-lg border-2 transition-all duration-300
              ${isActive
                ? "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 border-blue-400 scale-110 shadow-xl"
                : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 group-hover:scale-105 group-hover:shadow-lg"}
            `}
          >
            <img
              src={step.image}
              alt={step.title}
              className={`rounded-full h-12 w-12 object-cover border-4 transition
                ${isActive
                  ? "border-white dark:border-gray-900"
                  : "border-gray-100 dark:border-gray-700"}
              `}
            />
          </div>

          {/* Step Title */}
          <span
            className={`mt-3 text-sm font-semibold text-center transition-colors duration-300
              ${isActive
                ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
                : "text-gray-700 dark:text-gray-300 group-hover:text-blue-500"}
            `}
          >
            {step.title}
          </span>

          {/* Step Dot marker */}
          <div
            className={`absolute top-[72px] left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border
              ${isActive
                ? "bg-pink-500 border-pink-300 shadow-md"
                : "bg-gray-300 dark:bg-gray-700 border-gray-400 dark:border-gray-600"}
            `}
          ></div>
        </Link>
      );
    })}
  </div>
</div>

  );
}
