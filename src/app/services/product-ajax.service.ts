import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Product } from '../entities/product';
import { ProductStoreService } from './product-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductAjaxService {

  constructor( private http: HttpClient, private productStore: ProductStoreService ) { }

  search(query){
    const modifier = map((val: any) => Product.list(val.products));
    const storer = tap((list: Product[]) => this.productStore.list = list);
    const result = this.http.get(`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`);

    return storer(modifier(result));
  }

  getById(id){
    const modifier = map((val: any) => new Product(val.product));
    const storer = tap((product: Product) => {
      this.productStore.product = product;
    });
    const result = this.http.get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`);

    return storer(modifier(result));
  }
}
