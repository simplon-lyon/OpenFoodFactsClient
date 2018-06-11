import { Component, OnInit } from '@angular/core';
import { Search } from '../entities/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  search = new Search();

  constructor() {
    
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.search);
  }
  
}
