import { NotFoundComponent } from "./../../pages/not-found/not-found.component";
import { Routes } from "@angular/router";

import { ProductsComponent } from "src/app/pages/products/products.component";
import { PlaceOrderComponent } from "src/app/pages/place-order/place-order.component";
import { AuthGuard } from "src/app/services/auth.guard";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  { path: "product", component: ProductsComponent, canActivate: [AuthGuard] },
  { path: "order", component: PlaceOrderComponent, canActivate: [AuthGuard] },
  { path: "**", component: NotFoundComponent },
];
