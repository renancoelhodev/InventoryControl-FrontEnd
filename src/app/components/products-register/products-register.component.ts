import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { firstValueFrom, take } from 'rxjs';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-products-register',
  templateUrl: './products-register.component.html',
  styleUrls: ['./products-register.component.css']
})
export class ProductsRegisterComponent {

  editMode = false;
  productForm!: FormGroup;
  productEntry: any;
  paramId!: number;
  categoriesList$: any;

  constructor(private service: ProductServiceService,  private categoryService: CategoryService, private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {

    this.productForm = new FormGroup({
      "productId": new FormControl(null, [Validators.required]),
      "productName": new FormControl(null, [Validators.required]),
      "categoryId": new FormControl(null, [Validators.required]),
    });
    
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if(paramMap.has('id')){
        this.editMode = true;
        this.paramId = +paramMap.get('id')!;
        this.service.getById(this.paramId).subscribe((data) => (
          this.productForm.controls['productId'].setValue(data.productId),
          this.productForm.controls['productName'].setValue(data.productName),
          this.productForm.controls['categoryId'].setValue(data.categoryId)));
        
        
      }
      else {
        this.editMode = false;
      }
    })
      
    this.categoryService.getCategories().subscribe((data) => (this.categoriesList$ = data));
  }

  onSubmit() {
    if (!this.editMode) {
      this.service.createProduct(this.productForm.value).subscribe(
        item => {
          alert("Produto criado com sucesso!");
        },
        error => {
          alert("Erro ao cadastrar");
        }
      )
    }
    else {
      this.service.updateProduct(this.paramId, this.productForm.value).subscribe(
        item => {
          alert("Produto atualizado com sucesso!");
        },
        error => {
          alert("Erro ao atualizar");
        }
      )
    }


  }
}
