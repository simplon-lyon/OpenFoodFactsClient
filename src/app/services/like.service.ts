import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  likedProducts$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.getLikedProducts();
  }

  getLikedProducts(): Product[] {
    let storage: any = localStorage.getItem('likes');
    if (storage) {
      storage = JSON.parse(storage);
    } else {
      storage = [];
    }
    this.likedProducts$.next(storage);
    return storage;
  }

  toggleLike(product: Product): void {
    //On récupère les likes actuels avec la méthode du dessus
    let likes = this.getLikedProducts();
    //puis on cherche dans ces likes si le product en argument est
    //déjà contenu dedans
    let index = likes.findIndex(item => item.id === product.id);

    if(index !== -1) {
      //Si oui, on le retire de la liste de likes (avec un splice)
      likes.splice(index,1);
    }else {
      //Si non, on le rajoute dans la liste (avec un push)
      likes.push(product);
    }
    //On met la liste stringifiée dans le localStorage
    localStorage.setItem('likes', JSON.stringify(likes));

    this.likedProducts$.next(likes);

  }
}
