

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  createFormControls(){
    this.email = new FormControl('', [Validators.required, Validators.pattern(/[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i)]),
    this.password = new FormControl('', [Validators.required])
  }


  onSubmit(){
    console.log(this.loginForm)
    if(this.loginForm.valid){
      console.log('submit')
    }
    
  }
  
}

