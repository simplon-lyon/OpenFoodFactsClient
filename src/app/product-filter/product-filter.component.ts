import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  form:FormGroup;
  @Output()
  filterSubmit= new EventEmitter();

  constructor(private fb:FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      labels: [[]],
      allergens: [[]]
    });
    
  }

  doForm() {
    this.filterSubmit.emit(this.form.value);
  }

}
