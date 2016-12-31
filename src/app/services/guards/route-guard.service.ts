import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AuthModel} from "../../modules/login/models/login.model";


@Injectable()
export class RouteGuardService implements CanActivate{

  private login$: Observable<AuthModel>;

  private authorized:boolean = false;

  constructor(private router: Router,private store: Store<AuthModel>) {
    this.login$ = store.select('login');

    this.login$.subscribe(
      data => this.authorized = data.authorized
    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    console.log("Am I authorized? " + this.authorized);
    if(this.authorized) {
      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }

}
