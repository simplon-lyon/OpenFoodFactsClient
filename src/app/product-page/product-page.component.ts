import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product : any;
  constructor(private productData: ProductDataService, private route: ActivatedRoute) { 
    this.product = this.productData.getData(this.route.snapshot.params.id);
  }

  ngOnInit() {
  }

}
