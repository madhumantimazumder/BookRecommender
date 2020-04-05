import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';
  isShowBook : boolean =true;
  home="home";
  constructor(private utilityService: UtilityService){

  }
  
  showGenre(){
    this.isShowBook=true;
    this.utilityService.setGenre("adv");
  }
}

