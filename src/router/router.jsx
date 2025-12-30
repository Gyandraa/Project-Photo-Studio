import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import Review from "../Pages/Review";
// import Contact from "../Pages/Contact";

// studio kecil - besar
import StudioSmall from "../Pages/studio-kecil/studio-kecil.jsx";
import StudioMedium from "../Pages/studio-medium/studio-medium.jsx";
import StudioBig from "../Pages/studio-besar/studio-besar.jsx";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* studio besar - kecil*/}
        <Route path="/studio-small" element={<StudioSmall />} />
        <Route path="/studio-medium" element={<StudioMedium />} />
        <Route path="/studio-big" element={<StudioBig />} />
      </Routes>
    </div>
  );
}
