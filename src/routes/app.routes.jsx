import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { DishDetails } from "../pages/DishDetails";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishdetails" element={<DishDetails />} />
    </Routes>
  );
}
