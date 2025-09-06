// "use client";
// import React, { useState } from "react";


// const services = [
//   {
//     title: "One-to-One Mentorship",
//     description:
//       "Personalized guidance from industry experts to help you achieve your goals faster with tailored advice.",
//     image: "https://cdn-icons-gif.flaticon.com/16059/16059864.gif",
//   },
//   {
//     title: "Host Webinars",
//     description:
//       "Organize interactive live webinars and share your expertise with a wider audience across the globe.",
//     image: "https://www.ringcentral.com/au/en/blog/wp-content/uploads/2023/10/RingCentral-Webinar-polling.gif",
//   },
//   {
//     title: "Take Mentorship Calls",
//     description:
//       "Seamless call booking and scheduling system to connect mentors and mentees in real time.",
//     image: "https://www.hubspot.com/hs-fs/hubfs/dealing%20with%20frustrated%20customers.gif?width=480&height=270&name=dealing%20with%20frustrated%20customers.gif",
//   },
//   {
//     title: "Sell Courses & Resources",
//     description:
//       "Create, upload, and sell your professional courses, eBooks, templates, and exclusive resources.",
//     image: "https://miro.medium.com/v2/resize:fit:1400/0*FO2brgO0dIobaBRw.gif",
//   },
//   {
//     title: "And Many More Services",
//     description:
//       "We provide additional tools for growth such as career support, community access, and analytics dashboard.",
//     image: "https://static.wixstatic.com/media/9278bd_3fbec7effe314af4b12a9f3a349827a8~mv2.gif",
//   },
// ];

// const ServicesPage = () => {
//   const [selected, setSelected] = useState(services[0]);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300 drop-shadow-lg decoration-red-400 underline mb-12">
//         What We Provide
//       </h2>
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Services List */}
//         <div className="space-y-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className={`p-6 rounded-2xl border transition-all cursor-pointer ${
//                 selected.title === service.title
//                   ? "bg-indigo-600 text-white shadow-lg"
//                   : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700"
//               }`}
//               onClick={() => setSelected(service)}
//             >
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-sm opacity-80">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex justify-center">
//           <div className="rounded-2xl overflow-hidden shadow-xl bg-pink-600 dark:bg-teal-400 p-4">
//             <img
//               src={selected.image}
//               alt={selected.title}
//               width={500}
//               height={400}
//               className="rounded-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

"use client";
import React, { useState } from "react";

const services = [
  {
    title: "One-to-One Mentorship",
    description:
      "Personalized guidance from industry experts to help you achieve your goals faster with tailored advice.",
    image: "https://cdn-icons-gif.flaticon.com/16059/16059864.gif",
  },
  {
    title: "Host Webinars",
    description:
      "Organize interactive live webinars and share your expertise with a wider audience across the globe.",
    image: "https://www.ringcentral.com/au/en/blog/wp-content/uploads/2023/10/RingCentral-Webinar-polling.gif",
  },
  {
    title: "Take Mentorship Calls",
    description:
      "Seamless call booking and scheduling system to connect mentors and mentees in real time.",
    image: "https://www.hubspot.com/hs-fs/hubfs/dealing%20with%20frustrated%20customers.gif?width=480&height=270&name=dealing%20with%20frustrated%20customers.gif",
  },
  {
    title: "Sell Courses & Resources",
    description:
      "Create, upload, and sell your professional courses, eBooks, templates, and exclusive resources.",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*FO2brgO0dIobaBRw.gif",
  },
  {
    title: "And Many More Services",
    description:
      "We provide additional tools for growth such as career support, community access, and analytics dashboard.",
    image: "https://static.wixstatic.com/media/9278bd_3fbec7effe314af4b12a9f3a349827a8~mv2.gif",
  },
];

const accentIcons = [
  "🗣️",
  "🎤",
  "📞",
  "🎓",
  "✨",
];

const ServicesPage = () => {
  const [selected, setSelected] = useState(services);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-100 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 md:px-20 flex flex-col">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-400 to-pink-600 dark:from-blue-300 dark:to-cyan-300 drop-shadow mb-14 tracking-tight animate-fade-in">
        What We Provide
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Services List */}
        <div className="space-y-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              tabIndex={0}
              role="button"
              className={`group p-6 rounded-3xl border border-transparent backdrop-blur-lg shadow-lg transition-all cursor-pointer focus:outline-none ${
                selected.title === service.title
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-400 text-white scale-105 border-cyan-400 shadow-2xl"
                  : "bg-white/60 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 hover:bg-gradient-to-r hover:from-pink-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-900"
              }`}
              onClick={() => setSelected(service)}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(service);
              }}
              aria-label={service.title}
            >
              <div className="flex items-center gap-3 mb-2 text-2xl">
                <span className="text-3xl">{accentIcons[idx]}</span>
                <h3 className="font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center relative animate-fade-in">
          <div className="rounded-3xl overflow-hidden shadow-2xl glassmorphism px-6 py-2 flex flex-col items-center border-2 border-pink-200 dark:border-teal-400">
            <img
              src={selected.image}
              alt={selected.title}
              width={370}
              height={300}
              className="rounded-xl object-contain mb-4 transition-all duration-500 ease-in animate-pop"
              style={{ boxShadow: "0 7px 28px 0 rgba(50,110,170,0.12)" }}
            />
            <div className="text-lg sm:text-xl font-semibold text-center text-gray-900 dark:text-gray-50 mt-2">
              {selected.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ServicesPage;
