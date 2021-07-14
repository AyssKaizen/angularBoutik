import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart:any = []

  constructor() { }

  getCart(){
    return this.cart
  }

  addinCart(item:any){
    let isExist:boolean = false;
    this.cart.forEach((element:any) => {
      if(element.label === item.label){
        element.quantity++
        isExist = true;
      }
    }); 
    !isExist ? this.cart.push(item) : ''
  }
  deleteCart(){
    this.cart = []
  }
}
