import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true
})
export class CartComponent {
  @Input() getBuyProducts: any[] = [];


  check(){
    console.log(this.getBuyProducts);
  }
}
