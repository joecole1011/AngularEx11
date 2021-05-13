import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list3',
  templateUrl: './product-list3.component.html',
  styleUrls: ['./product-list3.component.css'],
})
export class ProductListComponent3 implements OnInit {
  products: Product[]; 
  constructor() {
    this.products = [];

  }

  ngOnInit() {}
    
    // selectedProduct(product: Product) {
    //   alert(`Product ${product.name} selected`);
    // }
    selectedProduct(product: Product){
      alert(`Product ${product.name} selected`)
    }
  }
  
  

