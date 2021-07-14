import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  products =[
    {
      label: "Hair set",
      price: '23.12',
      stock!: true,
      description: "set for brush 200ml lotion + soin 20ml",
      weight: 350,
      quantity: 1, 
      picture: "https://www.pmebusiness.com/files/main/products/big/IIDE_FitLineHair+PhaseI_97001242.png"
    },
    {
      label: "Barber set",
      price: '13.88',
      stock!: true,
      description: "set for beard 100ml lotion + soin 10ml", 
      weight: 250,
      quantity: 1,
      picture: "https://www.unjourunhomme.com/webp-ar-3797.webp"
    },
    {
      label: "Face creme",
      price: '3.92',
      stock!: false,
      description: "cream for face 50ml shining tech", 
      weight: 20,
      quantity: 1,
      picture: "https://image.darty.com/darty?type=image&source=/market/2018/10/11/mkp_1mkcApxsBKkhjg.jpeg&width=400&height=300&quality=90"
    },
    {
      label: "Elastic set",
      price: '1.12',
      stock!: true,
      description: "set for elastic hair 1x5 Black + range", 
      weight: 8,
      quantity: 1,
      picture: "https://images.ulta.com/is/image/Ulta/2565552?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg"
    },
    {
      label: "Hair brush",
      price: '1.99',
      stock!: true, 
      description: '1 hair brush no node tech',
      weight: 110,
      quantity: 1,
      picture: "https://static1.bleulibellule.com/34820-thickbox_default/brosse-ronde-brushing-diamond-brush-53mm.jpg"
    },
    {
      label: "Wax",
      price: '4.75',
      stock!: true, 
      description: "1 charge of wax depilation orange & peach",
      weight: 190,
      quantity: 1,
      picture: "data:image/jpeg;base64,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"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
