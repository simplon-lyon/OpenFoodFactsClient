import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../services/product-store.service';
import { ActivatedRoute } from '@angular/router';
import { ProductAjaxService } from '../services/product-ajax.service';
import { Product } from '../entities/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product : Product;

  constructor(private productStore: ProductStoreService, private productAjax: ProductAjaxService, private route: ActivatedRoute) {
    const currentProductId = this.route.snapshot.params.id;

    if (!this.productStore.product) {
      this.productAjax.getById(currentProductId).subscribe(value => {
        this.productStore.product = value;
        this.product = this.productStore.product;
      });
    }

    this.product = this.productStore.product;
  }

  ngOnInit() {
  }

}
