// // import React from "react";

// // const Header = () => {
// //   return (
// //     <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 relative overflow-hidden">
// //       {/* Background decorative shapes */}
// //       <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
// //       <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

// //       <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
// //         {/* Left Section - Text */}
// //         <div className="flex-1 text-center lg:text-left">
// //           <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
// //             Unlock Your Career <span className="text-yellow-300">Potential</span>
// //           </h1>
// //           <p className="text-lg lg:text-xl mb-4 opacity-90">
// //             Our Career Mentorship App helps students and professionals connect
// //             with experienced mentors, gain real-world guidance, and build a
// //             roadmap for success.
// //           </p>
// //           <p className="text-lg lg:text-xl mb-8 opacity-90">
// //             Whether you’re starting your journey or aiming to grow in your
// //             career, we provide personalized mentorship that empowers you to take
// //             confident steps toward your goals.
// //           </p>

// //           <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:scale-110 hover:shadow-yellow-500 transition duration-300">
// //             Get Started 🚀
// //           </button>
// //         </div>

// //         {/* Right Section - Images */}
// //         <div className="flex-1 flex justify-center items-center gap-6">
// //           <div className="w-60 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-3 hover:scale-105 transition duration-500">
// //             <img
// //               src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
// //               alt="Mentorship"
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="w-60 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:-rotate-3 hover:scale-105 transition duration-500 hidden md:block">
// //             <img
// //               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
// //               alt="Career Growth"
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;


// import React from "react";

// const Header = () => {
//   return (
//     <div className="relative text-black bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900   dark:text-white  transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 dark:from-blue-400 dark:to-cyan-300">
//             Unlock Your Career Growth
//           </h1>
//           <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-300">
//             Welcome to our <span className="font-semibold">Career Mentorship App</span>, where
//             guidance meets opportunity. We connect you with experienced mentors who provide
//             personalized advice, skills development, and growth strategies.
//           </p>
//           <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-300">
//             Whether you're a student exploring career options or a professional aiming for the
//             next big leap, our platform helps you gain clarity, build confidence, and achieve your
//             goals.
//           </p>
//           <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/40 hover:scale-105 transition-transform duration-300">
//             Get Started
//           </button>
//         </div>

//         {/* Right Content - Images */}
//         <div className="relative flex items-center justify-center">
//           <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute -bottom-6 -right-6 w-52 h-52 bg-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>

//           <div className="relative w-full flex gap-6">
//             <img
//               src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
//               alt="Mentorship"
//               className="rounded-2xl shadow-xl w-1/2 object-cover hover:scale-105 transition-transform duration-300"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
//               alt="Career Growth"
//               className="rounded-2xl shadow-xl w-1/2 object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="relative text-black bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300 drop-shadow-lg">
            Unlock Your Career Growth
          </h1>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            Welcome to our <span className="font-semibold text-blue-600 dark:text-cyan-300">Career Mentorship App</span>, where
            guidance meets opportunity. We connect you with experienced mentors who provide
            personalized advice, skills development, and growth strategies.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            Whether you're a student exploring career options or a professional aiming for the
            next big leap, our platform helps you gain clarity, build confidence, and achieve your
            goals.
          </p>
          <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.9)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out">
            🚀 Get Started
          </button>
        </div>

        {/* Right Content - Images */}
        <div className="relative flex items-center justify-center">
          {/* Background glowing orbs */}
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>

          <div className="relative w-full flex gap-6">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
              alt="Mentorship"
              className="rounded-3xl shadow-2xl w-1/2 object-cover transform hover:scale-110 hover:rotate-1 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
              alt="Career Growth"
              className="rounded-3xl shadow-2xl w-1/2 object-cover transform hover:scale-110 hover:-rotate-1 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-black/20 pointer-events-none"></div>

      <div className="flex justify-center items-center mx-auto w-fit px-4 py-2 bg-green-400 dark:bg-green-500/70 text-pink-800 dark:text-gray-200 text-sm font-semibold rounded-full shadow-md backdrop-blur-sm text-center">
  <h3>
    <Typewriter
      words={["Its on Development Mode"]}
      loop={false}
      cursor
      cursorStyle="_"
      typeSpeed={60}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </h3>
</div>

    </div>
  );
};

export default Header;
