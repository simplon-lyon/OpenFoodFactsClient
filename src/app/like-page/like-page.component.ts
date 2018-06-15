import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-like-page',
  templateUrl: './like-page.component.html',
  styleUrls: ['./like-page.component.css']
})
export class LikePageComponent implements OnInit {
  products:Product[];

  constructor(private likeService:LikeService) { }

  ngOnInit() {
    //On subscribe ici à à l'observable du service qui permettra de mettre à jour en temps
    //réel la liste des produits likés (utile notamment pour disliké les produits affichés)
    this.likeService.likedProducts$.subscribe(likes => this.products = likes);
  }

}
