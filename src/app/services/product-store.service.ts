import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  data : Object;
  constructor() { }

  getData(id){
    return this.data;
  }

  setData(data){
    this.data = data;
  }
}
