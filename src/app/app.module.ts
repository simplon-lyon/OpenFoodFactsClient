import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ProductAjaxService } from './services/product-ajax.service';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: 'list', component: ListPageComponent },
  { path: 'list/:query', component: ListPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    ProductPageComponent,
    SearchComponent,
    ListComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ProductAjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
