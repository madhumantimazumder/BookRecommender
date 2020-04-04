import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private genre_subject = new BehaviorSubject<any>(''); 
  constructor() { }
  setGenre(genre: string) {  
    this.genre_subject.next({ genre: genre });  
  }
  getGenre(){  
    return this.genre_subject;  
  }
}
