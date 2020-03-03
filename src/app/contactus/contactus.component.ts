import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from  '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  submitted=false;

  constructor( private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
  
    this.contactForm = this.formBuilder.group({
      fname: ['',[Validators.required]],  
      lname:['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      comment: ['',[Validators.required]]

    });
  }
  get f() { return this.contactForm.controls; }

  OnSubmit() {
  this.submitted=true;

      console.log('Your form data : ', this.contactForm.value);
  }

}

