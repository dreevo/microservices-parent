import { Routes } from "@angular/router";

import { ProductsComponent } from "src/app/pages/products/products.component";
import { PlaceOrderComponent } from "src/app/pages/place-order/place-order.component";

export const AdminLayoutRoutes: Routes = [
  { path: "product", component: ProductsComponent },
  { path: "order", component: PlaceOrderComponent },
];
