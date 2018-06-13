import { Component, OnInit } from '@angular/core';
import { ProductAjaxService } from '../services/product-ajax.service';
import { Product } from '../entities/product';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  products: Product[];

  constructor(private productAjax: ProductAjaxService) {
    productAjax.search('pizza').subscribe(value => {
      this.products = value;
    })
  }

  ngOnInit() { 
  }

}
