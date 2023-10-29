import { Component } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  productList$: any;
  constructor(private service: ProductServiceService) {
    
  }
  
  ngOnInit(): void {
    //this.productList$ = this.service.getData().pipe(tap((data) => (this.productList$ = data)));
    this.service.getData().subscribe((data) => this.productList$ = data);
  }
}
