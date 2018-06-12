import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Search } from '../entities/search';
import { forbiddenRegexValidator } from '../forbidden-regex-validator.directive';

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

    new FormGroup({
      'query': new FormControl(this.search.query, [
        Validators.required,
        forbiddenRegexValidator(/toto/i)
      ])
    })

  }

  onSubmit() {
    console.log(this.search);
  }
  
}
