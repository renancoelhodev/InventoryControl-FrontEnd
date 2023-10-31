import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductsRegisterComponent } from './products-register.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

fdescribe('ProductsRegisterComponent', () => {
  let component: ProductsRegisterComponent;
  let fixture: ComponentFixture<ProductsRegisterComponent>;

  const fakeActivatedRoute = {
    snapshot: {
        paramMap: {
            get(): string {
                return '123';
            },
        },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsRegisterComponent],
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule],
      providers: [HttpClientModule]
    });
    fixture = TestBed.createComponent(ProductsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should call onSubmit with success', async () => {

    component.productForm = new FormGroup({
      "productId": new FormControl(1, [Validators.required]),
      "productName": new FormControl("produto", [Validators.required]),
      "categoryId": new FormControl("categoria", [Validators.required]), 
    });

    spyOn(component, 'onSubmit');

    let button = fixture.debugElement.query(By.css('#submit')).nativeElement;
    button.click();

    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
