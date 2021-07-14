import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : any=[]
  constructor(private serviceCart: CartServiceService) { 

  }

  ngOnInit(): void {
    this.refresh();

  }

  refresh(){
    this.cart = this.serviceCart.getCart()

  }

  deleteCart(){
    this.serviceCart.deleteCart()
    this.refresh()
    alert('votre panier a été supprimé ! ')
  }

}
