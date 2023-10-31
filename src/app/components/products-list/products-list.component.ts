import { Component, Inject } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Product } from 'src/app/shared/interface/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  productList$: any;
  searchText = '';
  constructor(public dialog: MatDialog, private service: ProductServiceService, private router: Router) {  
  }
  
  ngOnInit(): void {    
    this.service.getData().subscribe((data) => this.productList$ = data);
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe(
      item => {
        this.service.getData().subscribe((data) => this.productList$ = data)        
      },
      error => {
        alert("Erro ao deletar produto");
      }
    )
  }

  ngOnChange(): void {
    this.service.getData().subscribe((data) => this.productList$ = data);
  }
    
  onEdit(id: number){
    this.router.navigate(["products-edit", id])
  }

  openDialog(id: number){
    const dialog = this.dialog.open(DialogRemove);

    dialog.afterClosed().subscribe((remove => {
      if (remove){
        this.deleteProduct(id);
      }
    }))

    
  }
  
}

@Component({
  selector: 'dialog-remove',
  template: `<h1 mat-dialog-title>Deletar produto</h1>
  <div mat-dialog-content>
    Você tem certeza que deseja deletar este produto?
  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="false">Não</button>
    <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Sim</button>
</div>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogRemove {

  constructor() {
    
    
  }
}