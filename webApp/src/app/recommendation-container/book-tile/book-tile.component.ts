import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';
import {Book} from "../../models/book"; 
@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.css']
})
export class BookTileComponent implements OnInit {
  genre_subscription:Subscription;
  @Input() page;       
  public books: Book[];
  constructor(private utilityService: UtilityService) {
      
   }

  ngOnInit() {
    if(this.page=="home"){   
      this.genre_subscription = this.utilityService.getGenre().subscribe(data => {         
        this.books=this.utilityService.getBooks();
        //console.log(this.books[0].getBooktitle());
      });
    }
    else{
      this.genre_subscription = this.utilityService.getReccomendationType().subscribe(data => {  
          this.books=this.utilityService.getBooks();
      });
    }
  }
  ngOnDestroy(){
    if(!!this.genre_subscription)
      this.genre_subscription.unsubscribe();
  }

}
