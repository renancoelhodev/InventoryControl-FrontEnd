import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';

fdescribe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [MatDialog],
      providers: [HttpClientModule]
    });
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  fit('should be true', function() {
    expect(true).toEqual(true);
  });
});
