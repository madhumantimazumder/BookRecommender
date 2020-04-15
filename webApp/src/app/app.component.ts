import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookaholics';
  active_genre;
  features = 
    {isShowBook  : true,
    isRecommend  : false,
    isHelp  : false,
    isContact : false}
    ;
  
  home="home";
  constructor(private utilityService: UtilityService){
    this.utilityService.fetchDataUsingUsername("uname").subscribe((data)=>{ 
      this.utilityService.setBooks(data)   ;
      this.utilityService.setGenre("all");
    },
    (error)=>{

    });
  }
  clearFeature(f){
    for( const feature in this.features){
      if(feature == f){
        this.features[feature]=true;
      }
      else
        this.features[feature]=false;
    }
  }
  showGenre(genre){
    this.active_genre=genre;
    this.clearFeature('isShowBook');
    this.utilityService.fetchDataUsingGenre(this.active_genre).subscribe((data)=>{ 
      this.utilityService.setBooks(data) ;
      this.utilityService.setGenre(this.active_genre);
    },
    (error)=>{

    });
  }
  showFeature(f){
    this.clearFeature(f);
    this.active_genre='none';
  }
}

