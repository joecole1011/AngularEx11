import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent3} from './product-list copy 2/product-list3.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'AngularEx11'; //Re1 Re2 

  //Re3 Start
  @ViewChild('productList',{static:true}) 
  productList: ProductListComponent3;

  ngOnInit(): void {
    this.productList.products = [
    {
    name: 'ส้มโอ',
    price: 111
    },
    {
    name: 'แตงโม',
    price: 222
    },
    {
    name: 'มะพร้าวนํ้าหอม',
    price: 333
    }
    ];

  }
  //Re3 End
  constructor() {}
}
  
  // CreateUser:string = "Enter UserName"

  // userlist = []

  // onclick(prouser){
    
  //   if(prouser.value.length > 0)
  //   {
  //     this.userlist.push(prouser.value);
  //     prouser.value = '';
  //   }
  // }

  // ondelete(deleteme)
  // {
  //   this.userlist.splice(deleteme,1)
  // }