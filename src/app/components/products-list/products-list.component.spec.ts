import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchPipe } from 'src/app/shared/search-pipe/search.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Product } from 'src/app/shared/interface/product.interface';
import { Observable, of } from 'rxjs';
import { ProductServiceService } from 'src/app/service/product-service.service';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let productService: ProductServiceService;
  let fixture: ComponentFixture<ProductsListComponent>;
  let mockGetDataService: any;
  TestBed.overrideProvider(ProductServiceService, { useValue: mockGetDataService });
  beforeEach(() => {
    mockGetDataService = jasmine.createSpyObj(['service', 'getData']);
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent, SearchPipe,],
      imports: [MatDialogModule, HttpClientModule, FormsModule],
      providers: [HttpClientModule, MatDialogModule, ProductServiceService]
    });
    
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    
  });



  it('should be true', function() {
    expect(true).toEqual(true);
  });

  // fit('should call delete', function() {

  //   let productList: Array<Product> = [{
  //     productId: 1,
  //     productName: 'livro',
  //     categoryName: 'livro'
  //   },
  //   {
  //     productId: 2,
  //     productName: 'a',
  //     categoryName: 'b'
  //   }];

  //   let servico = fixture.debugElement.injector.get(ProductServiceService);
  //   spyOn(servico, 'getData').and.returnValue(of(productList));
    
  //   fixture.detectChanges();
  //   let button = fixture.debugElement.query(By.css('button')).nativeElement;
  //   button.click();
  //   tick();
  //   expect(component.onEdit).toHaveBeenCalled();
  // });

});
