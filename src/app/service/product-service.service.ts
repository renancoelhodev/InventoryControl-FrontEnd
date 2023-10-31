import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interface/product.interface';
import { ProductById } from '../shared/interface/productById.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = 'https://localhost:7238';

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiBaseUrl}/Products`);
  }

  createProduct(item: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiBaseUrl}/Products`, item);
  }

  updateProduct(id: number, item: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiBaseUrl}/Products/${id}`, item);
  }

  getById(id: number): Observable<ProductById> {
    return this.http.get<ProductById>(`${this.apiBaseUrl}/Products/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiBaseUrl}/Products?id=${id}`);
  }
}
