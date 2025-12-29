import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Studio from "../Pages/studio/Studio";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </div>
  );
}
