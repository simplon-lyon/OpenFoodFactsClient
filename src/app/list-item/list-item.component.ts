import { Component, OnInit, Input } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() product:any;

  constructor( private productData : ProductDataService, private router : Router ) { }

  ngOnInit() {
  }

  onClick(){
    this.productData.setData(this.product);
    this.router.navigate([`/product/${this.product.id}`]);
  }

}
