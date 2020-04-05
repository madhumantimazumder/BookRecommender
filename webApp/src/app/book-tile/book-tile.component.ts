import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.css']
})
export class BookTileComponent implements OnInit {
  genre_subscription:Subscription;
  @Input() page;       
  books: Array<Object>;
  constructor(private utilityService: UtilityService) {
      
   }

  ngOnInit() {
    if(this.page=="home"){   
      this.genre_subscription = this.utilityService.getGenre().subscribe(data => {  
        if (data.genre=="adv") {         
          this.utilityService.setBooks("adv");    
        } 
        else{          
          this.utilityService.setBooks("all");   
        }        
        this.books=this.utilityService.getBooks();
      });
    }
    else{
      this.genre_subscription = this.utilityService.getReccomendationType().subscribe(data => {  
        if (data.rec_type=="uname") {         
          this.utilityService.setBooks("adv");    
        } 
        else if(data.rec_type=="search"){          
          this.utilityService.setBooks("all");   
        }      
        else{
          this.utilityService.setBooks("clear");
        }  
        this.books=this.utilityService.getBooks();
      });
    }
  }
  ngOnDestroy(){
    if(!!this.genre_subscription)
      this.genre_subscription.unsubscribe();
  }

}
