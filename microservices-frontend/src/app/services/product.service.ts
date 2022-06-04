import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private oauthService: OAuthService
  ) {}

  getProducts(): Observable<Product[]> {
    let authToken: string = "Bearer " + this.oauthService.getAccessToken();

    let headers = new HttpHeaders();
    headers = headers.append("Authorization", authToken);
    return this.httpClient.get<Product[]>(
      "http://localhost:9090/api/product/",
      { headers }
    );
  }

  addProduct(product: Product): Observable<any> {
    return this.httpClient.post<any>(
      "http://localhost:9090/api/product/",
      product
    );
  }
}
