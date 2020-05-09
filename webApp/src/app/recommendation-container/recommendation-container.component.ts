import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-recommendation-container',
  templateUrl: './recommendation-container.component.html',
  styleUrls: ['./recommendation-container.component.css']
})
export class RecommendationContainerComponent implements OnInit {

  active_genre;
  features = 
    {isShowBook  : true,
    isRecommend  : false
    // isHelp  : false,
    // isContact : false
    };
  
  home="home";
  constructor(private utilityService: UtilityService,private router: Router){
   
  }
  
  ngOnInit(): void {
    this.utilityService.fetchPopular().subscribe((data)=>{ 
      this.utilityService.setBooks(data)   ;
      this.utilityService.setGenre("all");
      
    },
    (error)=>{
      
    });
  }
  redirectTo(url){
    this.router.navigateByUrl(url);
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
