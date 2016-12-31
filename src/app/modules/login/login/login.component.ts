import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {AbstractControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SITEID} from "../../../conf/Util"
import {TokenDecoder} from "../../../services/token/TokenDecoder";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup; //model to drive Form
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean; // keeping track on Weather form is Submitted
  public events: any[] = []; //used to display form Changes
  error = '';
  loading = false;

  constructor(private builder: FormBuilder, private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginForm = this.builder.group({
      'email': ['', [Validators.required, Validators.minLength(5)]],
      'password': ['', Validators.required]
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  login(model, isValid: boolean) {
    let token = "eyJhbGciOiJIUzI1NiIsImN0eSI6Ik1hcmdpbiBNZW50b3IiLCJ0eXAiOiJKV1QifQ.eyJqaXQiOiIwMDg1NTU1MTM5YTgwZTM5ZWM0OTIwMWMxMzI0ZDdiNiIsInJvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoxNDgzMTQ3MDQwOTkxLCJjcmVhdGlvbiI6MTQ4MzEwMzg0MDk5MSwiaWF0IjoxNDgzMTAzODQwOTkxLCJzdWIiOiJ0ZXN0QGFkbWluLmNvbSIsImlzcyI6IkhBU0hDT0RFIn0._xRoNBz55g63UB8UsdxUlc9rOD9WPdwqnYDA1QVgs8I";
    console.log('login button clicked', new TokenDecoder().decodeToken(token));
    this.loginService.login(model.email,model.password,SITEID);
  }

  logOut(){
    this.loginService.loginOut()
  }

}
