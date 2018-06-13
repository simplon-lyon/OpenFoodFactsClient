import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../services/product-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product : any;
  constructor(private productData: ProductStoreService, private route: ActivatedRoute) { 
    this.product = this.productData.data;
  }

  ngOnInit() {
  }

}
