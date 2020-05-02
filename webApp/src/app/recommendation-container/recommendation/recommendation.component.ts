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
  books;
  error_message;
  recommendation:string="recommendation";
  constructor(private utility_service  :UtilityService) {
    this.checkoutForm =  new FormGroup({
      "uname": new FormControl(null, [Validators.required]),
    });
    this.searchForm =  new FormGroup({
      "searchName": new FormControl(null),
    });
  }
  
 
  ngOnInit(): void {
    this.utility_service.setBooks("")   ;
    this.getAllBooks();
  }
  sendUsername(){
      this.error_message="";
      this.utility_service.fetchDataUsingUsername(this.checkoutForm.value.uname).subscribe((data)=>{
               this.utility_service.setBooks(data)   ;
               this.recommendation="username";
               this.utility_service.setReccomendationType("uname");               
      }, (error)=>{
               this.error_message=error;
      });
  }
  getAllBooks(){
    this.utility_service.fetchAll().subscribe((data)=>{
      this.utility_service.setBooks(data)   ;
      this.books=this.utility_service.getBooks();
    }, (error)=>{
    });
  }
  getRecommendation(booktitle){
    this.utility_service.fetchDataUsingBook(booktitle).subscribe((data)=>{
      this.utility_service.setBooks(data)   ;
      this.recommendation="book";
      this.utility_service.setReccomendationType("book");
    }, (error)=>{
    });
  }
}
