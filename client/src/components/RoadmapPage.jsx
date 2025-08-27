// "use client";
// import React from "react";
// import { ArrowDown, CheckCircle2 } from "lucide-react";

// const RoadmapPage = () => {
//   const roadmapSteps = [
//     {
//       title: "Step 1: HTML & CSS Basics",
//       description:
//         "Start with the fundamentals of web development – HTML structure, tags, forms, and CSS styling, layout, responsiveness.",
//     },
//     {
//       title: "Step 2: JavaScript Fundamentals",
//       description:
//         "Learn the programming language of the web – variables, functions, loops, and DOM manipulation.",
//     },
//     {
//       title: "Step 3: Version Control (Git & GitHub)",
//       description:
//         "Understand Git basics, branching, commits, and use GitHub for collaboration.",
//     },
//     {
//       title: "Step 4: Frontend Development with React",
//       description:
//         "Learn React.js – components, props, state, hooks, and routing to build modern UIs.",
//     },
//     {
//       title: "Step 5: Backend Development",
//       description:
//         "Master Node.js, Express.js, and databases like MongoDB/MySQL to build APIs and servers.",
//     },
//     {
//       title: "Step 6: Full Stack Projects",
//       description:
//         "Combine frontend & backend to create real-world apps – authentication, dashboards, job portals, LMS, etc.",
//     },
//     {
//       title: "Step 7: Deployment & DevOps Basics",
//       description:
//         "Deploy apps using Vercel, Netlify, or Render. Explore Docker, CI/CD, and cloud basics.",
//     },
//     {
//       title: "Step 8: Advanced Topics",
//       description:
//         "Go deeper into System Design, GraphQL, WebSockets, Microservices, and AI/ML integration.",
//     },
//   ];

//   return (
//     <div className="min-h-screen dark:bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Title */}
//         <h1 className="text-4xl font-bold text-center mb-12">
//           🚀 Web Development Roadmap
//         </h1>

//         {/* Roadmap Flow */}
//         <div className="flex flex-col items-center space-y-8">
//           {roadmapSteps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               {/* Step Card */}
//               <div className="bg-gray-800 rounded-2xl shadow-xl p-6 w-80 hover:scale-105 transition-transform duration-300">
//                 <CheckCircle2 className="text-green-400 w-8 h-8 mx-auto mb-3" />
//                 <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
//                 <p className="text-gray-400 text-sm">{step.description}</p>
//               </div>

//               {/* Arrow except last */}
//               {index < roadmapSteps.length - 1 && (
//                 <ArrowDown className="text-blue-400 w-8 h-8 my-4 animate-bounce" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoadmapPage;
"use client";
import React from "react";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const RoadmapPage = () => {
  const roadmapSteps = [
    {
      id: "basics",
      title: "Step 1: Basics of Programming",
      description: "Start with basic programming concepts like variables, loops, and functions.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
    },
    {
      id: "dsa",
      title: "Step 2: Data Structures & Algorithms",
      description: "Learn arrays, linked lists, stacks, queues, trees, and sorting algorithms.",
      image: "https://cdn-icons-png.flaticon.com/512/1329/1329016.png",
    },
    {
      id: "frontend",
      title: "Step 3: Frontend Development",
      description: "HTML, CSS, JavaScript, and frameworks like React.js.",
      image: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
    },
    {
      id: "backend",
      title: "Step 4: Backend Development",
      description: "Learn Node.js, Express.js, databases like MongoDB/MySQL.",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
    {
      id: "git",
      title: "Step 5: Version Control",
      description: "Master Git & GitHub for collaboration.",
      image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
      id: "projects",
      title: "Step 6: Projects & Deployment",
      description: "Build projects and deploy using platforms like Vercel, Netlify, or AWS.",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    },
    {
      id: "advanced",
      title: "Step 7: Advanced Topics",
      description: "Explore DevOps, System Design, Cloud, and AI/ML.",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 dark:text-gray-100 py-12 px-6">
  <div className="max-w-5xl mx-auto">
    {/* Title */}
    <h1 className="text-4xl font-bold text-center mb-12 text-pink-600 dark:text-pink-400">
      🚀 Learning Roadmap
    </h1>

    {/* Roadmap Flow */}
    <div className="flex flex-col items-center space-y-8">
      {roadmapSteps.map((step, index) => (
        <div
          key={step.id}
          className="flex flex-col items-center text-center"
        >
          {/* Step Card */}
          <NavLink
            to={`/roadmap/${step.id}`}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-80 hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-16 h-16 mx-auto mb-3"
            />
            <CheckCircle2 className="text-green-500 w-7 h-7 mx-auto mb-2" />
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {step.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {step.description}
            </p>
          </NavLink>

          {/* Arrow except last */}
          {index < roadmapSteps.length - 1 && (
            <ArrowDown className="text-pink-500 dark:text-pink-400 w-8 h-8 my-4 animate-bounce" />
          )}
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default RoadmapPage;
