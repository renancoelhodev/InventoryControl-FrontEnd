import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = 'https://localhost:7238';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiBaseUrl}/Category`);

    
  }
}
