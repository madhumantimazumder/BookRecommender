import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';
  active_genre;
  isShowBook : boolean =true;
  home="home";
  constructor(private utilityService: UtilityService){
    this.utilityService.fetchDataUsingUsername("uname").subscribe((data)=>{ 
      this.utilityService.setBooks(data)   ;
      this.utilityService.setGenre("all");
    },
    (error)=>{

    });
  }
  
  showGenre(genre){
    this.active_genre=genre;
    this.isShowBook=true;
    this.utilityService.fetchDataUsingGenre(this.active_genre).subscribe((data)=>{ 
      this.utilityService.setBooks(data) ;
      this.utilityService.setGenre(this.active_genre);
    },
    (error)=>{

    });
  }
  showRecommend(){
    this.isShowBook=false ;
    this.active_genre='none';
  }
}

