"use client";
import { NavLink } from "react-router-dom";

// const roadmap = [
//   {
//     id: "html-css",
//     title: "HTML & CSS Basics",
//     description: "Start with the fundamentals of web development – HTML structure, tags, forms, and CSS styling, layout, responsiveness.",
//     details: [
//       "Learn HTML tags, forms, semantic elements",
//       "Understand CSS selectors, box model, flexbox, grid",
//       "Build simple static websites",
//     ],
//     image: "https://www.w3schools.com/html/img_girl.jpg",
//   },
//   {
//     id: "javascript",
//     title: "JavaScript Fundamentals",
//     description: "Learn the programming language of the web – variables, functions, loops, and DOM manipulation.",
//     details: [
//       "Variables, data types, operators",
//       "Functions, loops, conditions",
//       "DOM manipulation and events",
//     ],
//     image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
//   },
//   {
//     id: "react",
//     title: "ReactJS",
//     description: "Move to modern frontend – components, props, state, hooks, and routing.",
//     details: ["JSX and Components", "Props and State", "React Router and Hooks"],
//     image: "https://react.dev/images/og-home.png",
//   },
//   {
//     id: "backend",
//     title: "Backend Development",
//     description: "Learn how servers work – Node.js, Express, APIs, and database handling.",
//     details: ["Node.js basics and NPM", "Express.js routing", "MongoDB or SQL"],
//     image: "https://nodejs.org/static/images/logo.svg",
//   },
//   {
//     id: "fullstack",
//     title: "Full Stack Projects",
//     description: "Combine frontend & backend into real-world projects.",
//     details: ["Authentication system", "Job portal or LMS project", "Deployment on Vercel/Render"],
//     image: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
//   },
// ];

// export default function RoadmapPage() {
//   return (
//     <div className="p-6 grid md:grid-cols-3 gap-6">
//       {roadmap.map((step) => (
//         <NavLink
//           key={step.id}
//           href={`/roadmap/${step.id}`}
//           className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-4 transition"
//         >
//           <img src={step.image} alt={step.title} className="w-full h-40 object-cover rounded-lg" />
//           <h2 className="text-xl font-bold mt-4">{step.title}</h2>
//           <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
//         </NavLink>
//       ))}
//     </div>
//   );
// }


import { roadmap } from "../data/roadmap";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Developer Roadmap</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmap.map((item) => (
          <NavLink key={item.id} to={`/roadmap/${item.id}`}>
            <div className="p-5 border rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition cursor-pointer">
              <img src={item.image} alt={item.title} className="h-28 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

