
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from '../validators/password-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl; 

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.registrationForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }, 
      passwordValidator
    );
  }

  createFormControls(){
    this.email = new FormControl('', [Validators.required, Validators.pattern(/[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i)]),
    this.password = new FormControl('', [Validators.required, Validators.minLength(4)]),
    this.confirmPassword = new FormControl('', [Validators.required])
  }


  onSubmit(){
    console.log(this.registrationForm)
    if(this.registrationForm.valid){
      console.log('submit')
    }
    
  }

}

