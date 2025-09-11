import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyProfile from "./pages/MyProfile";
import Footer from "./components/Footer";
import RoadmapPage from "./roadmap/page";
import RoadmapDetails from "./roadmap/[id]/page";
import { ToastContainer } from "react-toastify";
import AboutPage from "./pages/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved dark mode from localStorage on app start
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <ToastContainer />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="min-h-screen pt-">
        
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/login" element={<Login darkMode={darkMode} />} />
        <Route path="/signup" element={<Signup darkMode={darkMode} />} />
        <Route path="/my-profile" element={<MyProfile darkMode={darkMode} />} />
        <Route path="/roadmap/:id" element={<RoadmapDetails darkMode={darkMode} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
