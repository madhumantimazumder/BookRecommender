import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookTileComponent } from './book-tile/book-tile.component';
import {ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { UtilityService } from './services/utility.service';
import { RecommendationComponent } from './recommendation/recommendation.component';


@NgModule({
  declarations: [
    AppComponent,
    BookTileComponent,
    RecommendationComponent,
    HelpComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
