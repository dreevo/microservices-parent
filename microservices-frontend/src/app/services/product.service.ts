import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:8080/api/product/");
  }

  addProduct(product: Product): Observable<any> {
    return this.httpClient.post<any>(
      "http://localhost:8080/api/product/",
      product
    );
  }
}
