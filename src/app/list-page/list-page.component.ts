import { Component, OnInit } from '@angular/core';
import { ProductAjaxService } from '../services/product-ajax.service';
import { Product } from '../entities/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductStoreService } from '../services/product-store.service';
import { Filters } from '../product-filter/filters';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  pageNumber = [];
  products: Product[];

  constructor(private productAjax: ProductAjaxService, private productStore: ProductStoreService, private router: Router, route: ActivatedRoute) {
    const currentSearch = route.snapshot.params.query;
    
    if (!this.productStore.list || this.productStore.list.length === 0) {
      this.search(currentSearch);      
    }
    this.products = this.productStore.list;
  }

  ngOnInit() { 
  }

  doSearch(eventData : string){
    this.search(eventData);
    this.router.navigate([`/list/${eventData}`])
  }

  goToProduct(product: Product){
    this.productStore.product = product;
    this.router.navigate([`/product/${product.id}`]);
  }

  changePage(index) {
    this.productAjax.pagination$.next({page:index, pageSize: 20});
  }

  private search(query){
    this.productAjax.search(query).subscribe(value => {
      this.products = value;
      this.pageNumber = new Array(Math.ceil(this.productStore.count / 20));
    });
  }

  /**
   * La méthode filter, dans son état actuel permet d'appliquer un filtre sur les produits actuellement stockés
   * dans le productStore.
   * La fonctionnalité de filtrage est implémenter de manière assez médiocre ici : en effet, ne seront filtrés que
   * les 20 résultats que l'on a actuellement sous la main, les filtres s'annuleront à chaque changement de page de
   * produit. 
   * Une meilleure méthode d'implémentation aurait été de faire le filtre directement au moment de l'appel ajax afin
   * de ne récupérer que les produits qui nous intéressent, tout se passerait alors dans le ProductAjaxService. 
   * @param filters Les filtres à appliquer sur la liste actuelle de products
   */
  filterProducts(filters:Filters) {
    this.products = this.productStore.list.filter( item => {
      //On boucle sur les filters.labels et si jamais l'item
      //actuel n'en includes pas un, on return false
      for (const label of filters.labels) {
        if(!item.labels.includes(label)) {
          return false;
        }
      }
      //On boucle sur les filters.allergens et si jamais l'item
      //actuel en includes un, on return false
      for (const allergen of filters.allergens) {
        if(item.allergens.includes(allergen)) {
          return false;
        }
      }
      //On return true à la fin (on atteindra ce true que si les deux
      //boucles sont passées sans jamais return false)
      return true;
    });


  }

}
