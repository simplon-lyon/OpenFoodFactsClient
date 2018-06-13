import { Component, OnInit, Input } from '@angular/core';
import { ProductStoreService } from '../services/product-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() product:any;

  constructor( private productData : ProductStoreService, private router : Router ) { }

  ngOnInit() {
  }

  onClick(){
    this.productData.data = this.product;
    this.router.navigate([`/product/${this.product.id}`]);
  }

}
