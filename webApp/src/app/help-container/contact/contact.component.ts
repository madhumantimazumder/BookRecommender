import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { UtilityService } from '../../services/utility.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm;
  constructor(private utilityService: UtilityService) { 
    this.contactForm =  new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required,Validators.email]),
      "message": new FormControl(null, [Validators.required]),
    });
    
  }

  ngOnInit() {
    
  }
  sendContact(){
    this.utilityService.sendContactData(this.contactForm).subscribe((data)=>{ 
      this.contactForm.reset();
    },
    (error)=>{
    });
  }
}
