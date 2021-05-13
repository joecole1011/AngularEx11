import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.css'],
})
export class ProductListComponent2 implements OnInit {
  products: Product[]; 
  constructor() {
    this.products = [];
    this.products.push({
      name: 'มะเฟือง',
      price: 10,
    });
    this.products.push({
      name: 'มะไฟ',
      price: 20,
    });
    this.products.push({
      name: 'มะกรูด',
      price: 30,
    });
  }

  ngOnInit(): void {}
  
  selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);
  }
}
