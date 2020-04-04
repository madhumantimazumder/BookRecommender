import { Component, OnInit,Input } from '@angular/core';
import { BookTileComponent } from '../book-tile/book-tile.component';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input() genre: String;
  books  = [1,2,3];
  constructor() {
    
   }
  
  ngOnInit(): void {  
  }

}
