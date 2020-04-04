import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.css']
})
export class BookTileComponent implements OnInit {
  @Input() book;
  constructor() { }

  ngOnInit(): void {
  }

}
