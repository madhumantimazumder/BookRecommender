import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';
  genre : Observable<String> ;
  constructor(private utilityService: UtilityService){

  }
  ngOninit() : void{
    this.utilityService.setGenre("all");
  }
  showAdv(){
    this.utilityService.setGenre("adv");
  }
}

