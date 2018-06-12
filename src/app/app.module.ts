import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: 'list', component: ListPageComponent },
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
