import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishdetails" element={<DishDetails />} />
      <Route path="/newdish" element={<NewDish />} />
    </Routes>
  );
}
