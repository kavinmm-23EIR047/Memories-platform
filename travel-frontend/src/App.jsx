import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainScrollPage from "./components/MainScrollPage";
import GalleryBusPage from "./components/GalleryBusPage";
import Feedback from "./components/Feedback";
import { useState, useEffect } from "react";
import "./index.css"; // Fire loader styles are here

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader will show for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-wrapper">
          <div className="fire-ring"></div>
          <img src="/tire.png" alt="Spinning Tire" className="spinner" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScrollPage />} />
        <Route path="/gallery/:busId" element={<GalleryBusPage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
