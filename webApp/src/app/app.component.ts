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
  constructor(private utilityService: UtilityService){

  }
  ngOninit(){
    this.utilityService.setGenre("all");
  }
  showGenre(){
    this.isShowBook=true;
    this.utilityService.setGenre("adv");
  }
}

