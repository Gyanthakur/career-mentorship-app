import { Link, useParams } from "react-router-dom";
import { roadmap } from "../data/roadmap";

export default function RoadmapChart() {
  const { id } = useParams();

  return (
    <div className="mt-10 w-full overflow-x-auto">
      <div className="flex items-center justify-start min-w-max relative">
        {/* Timeline line */}
        <div className="absolute top-9 left-0 right-0 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full z-0"></div>
        {roadmap.map((step, i) => {
          const isActive = step.id === id;
          return (
            <Link
              key={step.id}
              to={`/roadmap/${step.id}`}
              className={`relative flex flex-col items-center z-10 mx-2 min-w-[80px] group`}
            >
              {/* Step node */}
              <div className={`flex mt-1 items-center justify-center h-16 w-16 rounded-full shadow-lg border-2 transition-all
                ${isActive ? "bg-blue-600 border-blue-500 scale-105" : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 group-hover:scale-105"}
              `}>
                <img
                  src={step.image}
                  alt={step.title}
                  className={`rounded-full h-12 w-12 object-cover border-4
                    ${isActive ? "border-blue-200 dark:border-blue-600" : "border-gray-100 dark:border-gray-700"}
                  `}
                />
              </div>
              {/* Step Title */}
              <span className={`mt-2 text-xs font-medium transition
                ${isActive ? "text-blue-600" : "text-gray-700 dark:text-gray-300 group-hover:text-blue-500"}
              `}>
                {step.title}
              </span>
              {/* Step Dot marker */}
              <div
                className={`absolute top-14 left-1/2 -translate-x-1/2
                  h-3 w-3 rounded-full border-[1px] bg-gray-300 dark:bg-gray-700
                  ${isActive ? "bg-red-500  dark:bg-red-700" : ""}
                `}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
