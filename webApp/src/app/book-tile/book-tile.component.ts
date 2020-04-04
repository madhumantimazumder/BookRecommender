import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.css']
})
export class BookTileComponent implements OnInit {
  genre_subscription:Subscription;
         
  books: Array<number>;
  constructor(private utilityService: UtilityService) {
      this.books=[1,2,3];
   }

  ngOnInit() {
    this.genre_subscription = this.utilityService.getGenre().subscribe(data => {  
      if (data.genre=="adv") {         
        this.books=[2,3];    
      }  
    });
  }

}
