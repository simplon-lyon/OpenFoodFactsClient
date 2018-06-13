import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  product: Product;
  list: Product[];
  constructor() { }
}
