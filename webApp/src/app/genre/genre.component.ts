import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input() genre: String;
  constructor() {
   }
  
  ngOnInit(): void {    
  }

}
