import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Product } from './product';
import { ProductItemComponent4 } from './product-item/product-item4.component';

@Component({
  selector: 'app-product-list4',
  templateUrl: './product-list4.component.html',
  styleUrls: ['./product-list4.component.css'],
})
export class ProductListComponent4 implements OnInit {
  @ViewChildren(ProductItemComponent4)
  productItems: QueryList<ProductItemComponent4>;
  

  products: Product[];

  constructor() {
    this.products = [];
  }

  ngOnInit() {}

  selectedProduct(productComponent: ProductItemComponent4) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach((p) => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }
}
