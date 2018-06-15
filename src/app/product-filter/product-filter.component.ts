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
    /**
     * Ici, on utilise le service angular FormBuilder qui nous permet de créer des reactive forms plus facilement.
     * Les reactive forms sont des formulaires model driven, c'est à dire que toute leur logique se trouve dans le
     * typescript plutôt que dans le template.
     * Les reactive forms peuvent être pratique pour générer des formulaire à la volée ou alors pour assigner une
     * logique de validation de formulaire sur le formulaire dans son ensemble (exemple : la confirmation du mot de passe
     * pour un formulaire d'inscription)
     */
    this.form = this.fb.group({
      labels: [[]],
      allergens: [[]]
    });
    
  }

  doForm() {
    //On peut récupérer les valeurs du formulaire sous forme d'objet avec this.form.value
    this.filterSubmit.emit(this.form.value);
  }

}
