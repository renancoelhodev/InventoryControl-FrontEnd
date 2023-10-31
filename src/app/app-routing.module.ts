import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRegisterComponent } from './components/products-register/products-register.component';

const routes: Routes = [
  {path: "products-list", component: ProductsListComponent},
  {path: "products-register", component: ProductsRegisterComponent},
  {path: "products-edit/:id", component: ProductsRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
