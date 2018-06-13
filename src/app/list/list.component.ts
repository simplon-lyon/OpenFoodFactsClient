import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../entities/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() products: Product[]

  constructor() { }

  ngOnInit() {
  }

}
