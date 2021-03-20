import { Component, OnInit } from '@angular/core';

interface IProduct{
  type: string,
  title: string,
  year: string,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public product = {
    type: 'film',
    title: 'American Psycho',
    year: '2000'
  }

  public setProduct(product:IProduct){
      this.product=product;
  }
}
