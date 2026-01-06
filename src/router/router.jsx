import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ReviewPage from "../Pages/Review.jsx";
import Contact from "../Pages/Contact.jsx";

// studio kecil - besar
import StudioSmall from "../Pages/studio-kecil/studio-kecil.jsx";
import StudioMedium from "../Pages/studio-medium/studio-medium.jsx";
import StudioBig from "../Pages/studio-besar/studio-besar.jsx";

import StudioKecilDetail from "../Pages/studio-kecil/detail-studio-kecil/studio-kecil-detail.jsx";
import StudioSedangDetail from "../Pages/studio-medium/detail-studio-medium/studio-medium-detail.jsx";
import StudioBesarDetail from "../Pages/studio-besar/detail-studio-besar/studio-besar-detail.jsx";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/contact" element={<Contact />} />

        {/* studio besar - kecil*/}
        <Route path="/studio-small" element={<StudioSmall />} />
        <Route path="/studio-medium" element={<StudioMedium />} />
        <Route path="/studio-big" element={<StudioBig />} />

        <Route path="/studio-small/:id" element={<StudioKecilDetail />} />
        <Route path="/studio-medium/:id" element={<StudioSedangDetail />} />
        <Route path="/studio-big/:id" element={<StudioBesarDetail />} />
      </Routes>
    </div>
  );
}
