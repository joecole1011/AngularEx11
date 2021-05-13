import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  //Recam2
  @Output()
  OnSelected: EventEmitter<Product> = new EventEmitter();
  //OnSelected: EventEmitter<Product> = new EventEmitter();

  //Recam2 End

  constructor() {}

  ngOnInit(): void {}
  //Recam2
  select() {
    this.OnSelected.emit(this.product);
  }
  //Recam2 End
}
