import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishdetails" element={<DishDetails />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish" element={<EditDish />} />
    </Routes>
  );
}
