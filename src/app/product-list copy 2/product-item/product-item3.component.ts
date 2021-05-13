import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item3',
  templateUrl: './product-item3.component.html',
  styleUrls: ['./product-item3.component.css'],
})
export class ProductItemComponent3 implements OnInit {

  @Input()
  product: Product;

  @Output()
   OnSelected: EventEmitter<Product> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  select() {
    this.OnSelected.emit(this.product);
    }
}
