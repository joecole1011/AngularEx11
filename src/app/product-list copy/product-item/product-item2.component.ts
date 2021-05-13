import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item2',
  templateUrl: './product-item2.component.html',
  styleUrls: ['./product-item2.component.css'],
})
export class ProductItemComponent2 implements OnInit {

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
