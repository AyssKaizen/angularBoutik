import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-article',
  templateUrl: './fiche-article.component.html',
  styleUrls: ['./fiche-article.component.css']
})
export class FicheArticleComponent implements OnInit {
  article = {
    label: "Elastic set",
    price: '1.12',
    stock!: true,
    description: "set for elastic hair 1x5 Black + range", 
    weight: 8,
    quantity: 1,
    picture: "https://images.ulta.com/is/image/Ulta/2565552?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
