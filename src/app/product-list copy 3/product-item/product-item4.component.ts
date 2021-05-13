import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item4',
  templateUrl: './product-item4.component.html',
  styleUrls: ['./product-item4.component.css'],
})
export class ProductItemComponent4 implements OnInit {

  @Input()
  product: Product;

  @Output()
   OnSelected: EventEmitter<ProductItemComponent4> = new EventEmitter();

   isSelected: boolean;
  
  constructor() {}

  ngOnInit(): void {}

  select() {
    this.OnSelected.emit(this);
    }
}
