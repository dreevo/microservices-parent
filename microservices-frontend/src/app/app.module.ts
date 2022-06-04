import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { ProductsComponent } from "./pages/products/products.component";
import { PlaceOrderComponent } from "./pages/place-order/place-order.component";

import { ButtonModule } from "primeng/button";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { AddProductComponent } from "./pages/products/add-product/add-product.component";

import { ReactiveFormsModule } from "@angular/forms";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { OAuthModule } from "angular-oauth2-oidc";
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ButtonModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    RippleModule,
    InputTextModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ["http://localhost:8080/api"],
        sendAccessToken: true,
      },
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ProductsComponent,
    PlaceOrderComponent,
    AddProductComponent,
    NotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
