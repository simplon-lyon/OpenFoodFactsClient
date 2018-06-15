import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductStoreService } from '../services/product-store.service';
import { Router } from '@angular/router';
import { Product } from '../entities/product';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() clickedItem: EventEmitter<Product> = new EventEmitter;

  constructor(private likeService:LikeService) { }

  ngOnInit() {
  }

  onClick(){
    this.clickedItem.emit(this.product);
  }

  /**
   * Methode qui utilise le this.product pour le donner à manger
   * à la méthode toggleLike du LikeService (qu'il faudra injecter
   * dans le constructeur)
   */
  doLike() {
    this.likeService.toggleLike(this.product);
  }
}
