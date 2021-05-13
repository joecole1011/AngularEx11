import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent2 } from './product-list copy/product-list2.component';
import { ProductItemComponent2 } from './product-list copy/product-item/product-item2.component';
import { ProductListComponent3 } from './product-list copy 2/product-list3.component';
import { ProductItemComponent3 } from './product-list copy 2/product-item/product-item3.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductListComponent2,
    ProductItemComponent2,
    ProductListComponent3,
    ProductItemComponent3
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
