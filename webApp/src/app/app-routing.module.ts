import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecommendationContainerComponent } from'./recommendation-container/recommendation-container.component';
import {HelpContainerComponent } from'./help-container/help-container.component';
const appRoutes: Routes = [
  { path: 'recommendation', component: RecommendationContainerComponent },
  { path: 'help', component: HelpContainerComponent },
  { path: 'contact', component: HelpContainerComponent },
  { path: '',
    redirectTo: '/recommendation',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
