import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { BookTileComponent } from './book-tile/book-tile.component';
import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    BookTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
