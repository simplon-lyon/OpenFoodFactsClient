import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../entities/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() products: Product[];
  @Output() clickedItem: EventEmitter<Product> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  catchClickedItem(product : Product){
    this.clickedItem.emit(product);
  }

}
