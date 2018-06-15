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
    this.likeService.likedProducts$.subscribe(likes => this.products = likes);
  }

}
