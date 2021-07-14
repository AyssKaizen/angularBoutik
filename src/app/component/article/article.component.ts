import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@Input() article!: any

 

  constructor(private serviceCart: CartServiceService) {}

  onClickAdd(){
    alert(`${this.article.label} ajouté au panier`);
    this.serviceCart.addinCart(this.article)
  }

  ngOnInit(): void {
  }

}
