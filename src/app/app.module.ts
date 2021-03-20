import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BookListComponent } from './book-list/book-list.component';
import { MagazineComponent } from './magazine/magazine.component';
import { BookComponent } from './book/book.component';
import { FilmComponent } from './film/film.component';
import { ProductComponent } from './product/product.component';
import { DaysComponent } from './days/days.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ToggleComponent,
    BookListComponent,
    MagazineComponent,
    BookComponent,
    FilmComponent,
    ProductComponent,
    DaysComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
