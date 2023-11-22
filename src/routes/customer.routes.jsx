import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { DishDetails } from "../pages/DishDetails";
import { Cart } from "../pages/Cart";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishdetails/:id" element={<DishDetails />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
