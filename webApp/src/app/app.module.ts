import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookTileComponent } from './recommendation-container/book-tile/book-tile.component';
import {ContactComponent } from './help-container/contact/contact.component';
import { HelpComponent } from './help-container/help/help.component';
import { UtilityService } from './services/utility.service';
import { RecommendationComponent } from './recommendation-container/recommendation/recommendation.component';
import { RecommendationContainerComponent } from './recommendation-container/recommendation-container.component';
import { HelpContainerComponent } from './help-container/help-container.component';


@NgModule({
  declarations: [
    AppComponent,
    BookTileComponent,
    RecommendationComponent,
    HelpComponent,
    ContactComponent,
    RecommendationContainerComponent,
    HelpContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
