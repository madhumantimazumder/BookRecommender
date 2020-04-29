import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
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
  searchForm;
  searchText;
  recommendation:string="recommendation";
  constructor(private utility_service  :UtilityService) {
    this.checkoutForm =  new FormGroup({
      "uname": new FormControl(null, [Validators.required]),
    });
    this.searchForm =  new FormGroup({
      "searchName": new FormControl(null),
    });
  }
  
  books=[
    {"name":"Wings of Fire",
    "author":"A P J Abdul Kalam, Arun Tiwari"
    },
    {"name":"Harry Potter and the Half-Blood Prince",
    "author":"J K Rowling"
    },
    {"name":"Harry Potter and the Half-Blood Prince",
    "author":"J K Rowling"
    },
    {"name":"Harry Potter and the Half-Blood Prince",
    "author":"J K Rowling"
    }
  ]
  ngOnInit(): void {
    this.utility_service.setBooks("")   ;
  }
  sendUsername(){
      this.utility_service.fetchDataUsingUsername(this.checkoutForm.value.uname).subscribe((data)=>{
               this.utility_service.setBooks(data)   ;
               this.recommendation="username";
               this.utility_service.setReccomendationType("uname");
      }, (error)=>{
      });
  }
}
