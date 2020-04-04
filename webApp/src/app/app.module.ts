import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTileComponent } from './book-tile/book-tile.component';
import { UtilityService } from './services/utility.service';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    BookTileComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
