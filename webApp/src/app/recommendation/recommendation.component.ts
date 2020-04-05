import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { BookTileComponent } from '../book-tile/book-tile.component';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  isCollapsed: number =1;
  checkoutForm;
  recommendation:string="recommendation";
  constructor(private utility_service  :UtilityService) { 
    this.checkoutForm =  new FormGroup({
      "uname": new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    
  }
  sendUsername(){
      this.utility_service.setReccomendationType("uname");
      this.recommendation="username";
      this.utility_service.fetchDataUsingUsername(this.checkoutForm.value.uname).subscribe((data)=>{                
               this.utility_service.setBooks("all")   ;
      },
      (error)=>{

      });
  }
}
