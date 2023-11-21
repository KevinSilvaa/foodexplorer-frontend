import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { NotFound } from "../pages/NotFound";

export function AdminRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishdetails/:id" element={<DishDetails />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish/:id" element={<EditDish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
