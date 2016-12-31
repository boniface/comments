import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {LoginModule} from "./modules/login/login.module";
import {AppRoutingModule} from "./app.routing";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {RouteGuardService} from "./services/guards/route-guard.service";
import {StoreModule} from "@ngrx/store";
import {LoginReducers} from "./modules/login/reducers/reducers";
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import {AlertModule, Ng2BootstrapModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(LoginReducers)
  ],
  providers: [
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
