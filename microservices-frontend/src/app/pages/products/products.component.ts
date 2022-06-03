import { Component, OnInit } from "@angular/core";
import { DialogService } from "primeng/dynamicdialog";
import { Observable, switchMap } from "rxjs";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { AddProductComponent } from "./add-product/add-product.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  providers: [DialogService],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  addProduct() {
    const ref = this.dialogService.open(AddProductComponent, {
      header: "Add Product",
      width: "70%",
    });
    ref.onClose
      .pipe(switchMap((data: Product) => this.productService.addProduct(data)))
      .subscribe(this.getProducts);
  }

  getProducts() {
    this.products$ = this.productService.getProducts();
  }
}
