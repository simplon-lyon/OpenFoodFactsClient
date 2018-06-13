import { Component, OnInit } from '@angular/core';
import { ProductAjaxService } from '../services/product-ajax.service';
import { Product } from '../entities/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductStoreService } from '../services/product-store.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  products: Product[];

  constructor(private productAjax: ProductAjaxService, private productStore: ProductStoreService, private router: Router, route: ActivatedRoute) {
    const currentSearch = route.snapshot.params.query;
    if (!this.productStore.list) {
      this.search(currentSearch);      
    }
    this.products = this.productStore.list;
  }

  ngOnInit() { 
  }

  doSearch(eventData : string){
    this.search(eventData);
    this.router.navigate([`/list/${eventData}`])
  }

  goToProduct(product: Product){
    this.productStore.product = product;
    this.router.navigate([`/product/${product.id}`]);
  }

  private search(query){
    this.productAjax.search(query).subscribe(value => {
      this.products = value;
    })
  }

}
