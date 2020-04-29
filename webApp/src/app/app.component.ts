import { Component,ViewChild,ElementRef } from '@angular/core';
import { UtilityService } from './services/utility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookaholics';
  load;
  loading_subscription : Subscription;
  constructor(private utility_service:UtilityService,private elem: ElementRef){
   
  }
  ngAfterViewInit(){
    let element = this.elem.nativeElement.querySelectorAll('.spinner') as HTMLElement;
    this.utility_service.display_loading.subscribe(function(t) {
        if(t==true)

          element[0].style.display='block';
        else
          element[0].style.display='none';
    });
  }
}

