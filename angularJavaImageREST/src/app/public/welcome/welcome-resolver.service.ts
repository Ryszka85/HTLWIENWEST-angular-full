import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserAuthStateModel} from "../../shared/domain/UserAuthStateModel";
import {LoginStateModel} from "../../shared/app-state/states/login.state.model";
import {AuthenticationActions} from "../../shared/app-state/actions/authentication-action";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WelcomeResolverService implements Resolve<boolean>{

  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
     if (this.store.selectSnapshot(LoginStateModel.isLoggedIn) === false) {
      return this.store
        .dispatch(new AuthenticationActions.IsLoggedIn())
        .pipe(tap(state => console.log("WelcomeResolver was called with value : ", state.Authentication)));
    } else return this.store.selectSnapshot(LoginStateModel.isLoggedIn);
  }
}
