// "use client";
// import React, { useState } from "react";
// import AddGoalForm from "./AddGoalForm";
// import ProgressBar from "./ProgressBar";
// import SkillTimeline from "./SkillTimeline";

// export default function SkillTracker() {
//   const [goals, setGoals] = useState([]);

//   const addGoal = (goal) => {
//     setGoals([...goals, { ...goal, id: Date.now(), completed: false }]);
//   };

//   const toggleComplete = (id) => {
//     setGoals(
//       goals.map((goal) =>
//         goal.id === id ? { ...goal, completed: !goal.completed } : goal
//       )
//     );
//   };

//   const progress =
//     goals.length === 0
//       ? 0
//       : Math.round((goals.filter((g) => g.completed).length / goals.length) * 100);

//   return (
//     <div className="bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6 rounded-2xl shadow-md max-w-4xl mx-auto">
//       <AddGoalForm addGoal={addGoal} />
//       <ProgressBar progress={progress} />
//       <ul className="mt-6 space-y-3">
//         {goals.map((goal) => (
//           <li
//             key={goal.id}
//             className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
//           >
//             <div>
//               <h3 className={`text-lg font-medium ${goal.completed ? "line-through" : ""}`}>
//                 {goal.title}
//               </h3>
//               <p className="text-sm opacity-75">Deadline: {goal.deadline}</p>
//             </div>
//             <button
//               onClick={() => toggleComplete(goal.id)}
//               className={`px-3 py-1 rounded-lg text-white ${
//                 goal.completed ? "bg-green-500" : "bg-blue-500"
//               }`}
//             >
//               {goal.completed ? "Completed" : "Mark Done"}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <SkillTimeline goals={goals} />
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import AddGoalForm from "./AddGoalForm";
import ProgressBar from "./ProgressBar";
import SkillTimeline from "./SkillTimeline";

export default function SkillTracker() {
  const [goals, setGoals] = useState([]);

  // ✅ Load saved goals from localStorage when component mounts
  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // ✅ Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = (goal) => {
    setGoals([...goals, { ...goal, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const progress =
    goals.length === 0
      ? 0
      : Math.round(
          (goals.filter((g) => g.completed).length / goals.length) * 100
        );

  return (
    <div className="bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6 rounded-2xl shadow-md max-w-4xl mx-auto">
      <AddGoalForm addGoal={addGoal} />
      <ProgressBar progress={progress} />
      <ul className="mt-6 space-y-3">
        {goals.map((goal) => (
          <li
            key={goal.id}
            className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
          >
            <div>
              <h3
                className={`text-lg font-medium ${
                  goal.completed ? "line-through" : ""
                }`}
              >
                {goal.title}
              </h3>
              <p className="text-sm opacity-75">Deadline: {goal.deadline}</p>
            </div>
            <button
              onClick={() => toggleComplete(goal.id)}
              className={`px-3 py-1 rounded-lg text-white ${
                goal.completed ? "bg-green-500" : "bg-blue-500"
              }`}
            >
              {goal.completed ? "Completed" : "Mark Done"}
            </button>
          </li>
        ))}
      </ul>
      <SkillTimeline goals={goals} />
    </div>
  );
}
