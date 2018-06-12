import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Search } from '../entities/search';
import { forbiddenRegexValidator } from '../forbidden-regex-validator.directive';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  @Output() doSearch = new EventEmitter<string>();

  search = new Search();

  constructor() {
    
  }
  ngOnInit() {

    new FormGroup({
      'query': new FormControl(this.search.query, [
        Validators.required,
        forbiddenRegexValidator(/toto/i)
      ])
    })

  }

  onSubmit() {
    this.doSearch.emit(this.search.query);
  }
  
}
