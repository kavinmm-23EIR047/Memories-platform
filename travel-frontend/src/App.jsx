import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainScrollPage from "./components/MainScrollPage"; // NEW
import GalleryBusPage from "./components/GalleryBusPage";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScrollPage />} /> {/* Single scroll page */}
        <Route path="/gallery/:busId" element={<GalleryBusPage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
