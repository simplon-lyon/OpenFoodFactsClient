import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SearchComponent } from './search/search.component';
import { ForbiddenRegexValidatorDirective } from './forbidden-regex-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SearchComponent,
    ForbiddenRegexValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
