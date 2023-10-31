import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRegisterComponent } from './products-register.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsRegisterComponent', () => {
  let component: ProductsRegisterComponent;
  let fixture: ComponentFixture<ProductsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsRegisterComponent],
      providers: [HttpClientModule]
    });
    fixture = TestBed.createComponent(ProductsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
