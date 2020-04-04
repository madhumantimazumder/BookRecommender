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
         
  books: Array<Object>;
  constructor(private utilityService: UtilityService) {
      
   }

  ngOnInit() {
    this.books=[
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
    this.genre_subscription = this.utilityService.getGenre().subscribe(data => {  
      if (data.genre=="adv") {         
        this.books=[{"name":"Adventures of Stainless Steel Rat","author":"Harry Harrison"},
        {"name":"Guardians of the Flame","author":"Joel Rosenberg"}];    
      }  
    });
  }
  ngOnDestroy(){
    //this.genre_subscription.unsubscribe();
  }

}
