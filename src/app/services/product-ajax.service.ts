import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductAjaxService {

  constructor( private http : HttpClient ) { }

  search(query){
    const modifier = map((val: any) => Product.list(val.products));
    const result = this.http.get(`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`);

    return modifier(result);
  }

  getById(id){
    return this.http.get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`);
  }
}
