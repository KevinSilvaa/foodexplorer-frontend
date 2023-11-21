import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { DishDetails } from "../pages/DishDetails";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishdetails/:id" element={<DishDetails />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
