import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthModel} from "../models/login.model";
import * as loginActions from '../actions/login.action';

@Injectable()
export class LoginService {

  constructor(private router: Router, private store: Store<AuthModel>) {

  }

  login(username:string,password:string,siteId:string) {

    this.store.dispatch(new loginActions.LoginAction(true));
    this.router.navigate([''])
  }

  loginOut() {
    this.store.dispatch(new loginActions.LoginAction(false));
    this.router.navigate([''])
  }

}
