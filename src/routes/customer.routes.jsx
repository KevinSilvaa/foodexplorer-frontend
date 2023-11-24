import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { DishDetails } from "../pages/DishDetails";
import { Cart } from "../pages/Cart";
import { Favorites } from "../pages/Favorites";
import { Orders } from "../pages/Orders";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishdetails/:id" element={<DishDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/orders" element={<Orders />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
