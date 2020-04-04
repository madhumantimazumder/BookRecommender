import { Component, OnInit,Input } from '@angular/core';
import { BookTileComponent } from '../book-tile/book-tile.component';
import { Observable, Subscription } from 'rxjs';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  // books  = [1,2,3];
  // genre_subscription:Subscription;
  constructor(private utilityService: UtilityService) {
      
   }
  
  ngOnInit() {  
    // this.genre_subscription = this.utilityService.getGenre().subscribe(genre => {  
    //   if (genre=="adv") {         
    //     this.books=[1,2];         
    //   }  
    // }); 
  }
}
