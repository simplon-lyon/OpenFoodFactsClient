import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private data : Object;
  constructor() { }

  getData(id){
    return this.data;
  }

  setData(data){
    this.data = data;
  }
}
