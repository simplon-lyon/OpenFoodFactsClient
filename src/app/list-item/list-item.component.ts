import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductStoreService } from '../services/product-store.service';
import { Router } from '@angular/router';
import { Product } from '../entities/product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() clickedItem: EventEmitter<Product> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clickedItem.emit(this.product);
  }

}
