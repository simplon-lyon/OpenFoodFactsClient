import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { Product } from '../entities/product';
import { ProductStoreService } from './product-store.service';
import { BehaviorSubject } from 'rxjs';
import { Pagination } from './pagination';

@Injectable({
  providedIn: 'root'
})
export class ProductAjaxService {
  pagination$ = new BehaviorSubject<Pagination>({page: 1, pageSize:20});

  constructor( private http: HttpClient, private productStore: ProductStoreService ) { }

  search(query){
    //On part de l'observable de Pagination, afin de relancer la recherche à chaque changement de page ou de
    //taille de page.
    return this.pagination$.pipe(
      //On utilise le switchMap pour dire qu'à chaque nouvelle valeur de pagination$, on fera le http.get en lui fournissant les données de paginations actuelles
      switchMap((pagination:Pagination) => this.http.get(`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1&page=${pagination.page}&page_size=${pagination.pageSize}`)),
      //on stock le nombre total de produit potentiel de la recherche dans le productStore
      tap((result: any) => this.productStore.count = result.count),
      //On transforme les données brut de l'API en une liste d'instance de Product
      map((val: any) => Product.list(val.products)),
      //On stock la liste en question dans le productStore
      tap((list: Product[]) => this.productStore.list = list)
    );
    

    // const modifier = map((val: any) => Product.list(val.products));
    // const storer = tap((list: Product[]) => this.productStore.list = list);
    // const swish = switchMap((pagination:Pagination) => this.http.get(`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1&page=${pagination.page}&page_size=${pagination.pageSize}`));

    // return storer(modifier(swish(this.pagination$)));
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
