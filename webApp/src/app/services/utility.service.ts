import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private genre_subject = new Subject<any>(); 
  constructor() { }
  setGenre(genre: string) {  
    this.genre_subject.next({ genre: genre });  
  }
  getGenre(){  
    return this.genre_subject;  
  }
}
