import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {LoginRouter} from "./login.routing";
import {LoginService} from "./services/login.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    LoginRouter,
  ],
  //This lets  other components inside the module have accuess to the login component
  declarations: [
    LoginComponent
  ],

  //This lets anyone that imports the module have accees to the login component
  exports: [
    LoginComponent
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
