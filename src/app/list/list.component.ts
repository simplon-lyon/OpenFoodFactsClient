import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Object[] = [
    {id: 1, name: 'pizza', imageUrl: 'https://placekitten.com/250/250', nutriscore: 'b'},
    {id: 2, name: 'raviolli', imageUrl: 'https://placekitten.com/250/250', nutriscore: 'b'},
    {id: 3, name: 'ratatouille', imageUrl: 'https://placekitten.com/250/250', nutriscore: 'b'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
