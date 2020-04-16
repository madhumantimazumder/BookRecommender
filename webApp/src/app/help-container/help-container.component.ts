import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-help-container',
  templateUrl: './help-container.component.html',
  styleUrls: ['./help-container.component.css']
})
export class HelpContainerComponent implements OnInit {
  isContact:boolean;
  isHelp:boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url=='/contact'){
      this.isContact=true;
      this.isHelp=false;
    }
    else{
      this.isHelp=true;
      this.isContact=false;
    }
    console.log(this.router.url);
  }
  redirectTo(url){
    this.router.navigateByUrl(url);
  }
}
