import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {BehaviorSubject, EMPTY, Observable, of, Subject, throwError} from 'rxjs';
import {Select, Selector, Store} from "@ngxs/store";
import {LoginStateModel} from "../shared/app-state/states/login.state.model";
import {Navigate} from "@ngxs/router-plugin";
import {AuthenticationActions} from "../shared/app-state/actions/authentication-action";
import {async} from "rxjs/internal/scheduler/async";
import {UserAuthenticationService} from "../serviceV2/user-authentication.service";
import {catchError, map, retry, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthSecurityGuard implements CanActivate {
  $test = new Subject<boolean>();
  @Select(LoginStateModel.isLoggedIn) $isLoggedIn;

  constructor(private store: Store,
              private router: Router,
              private authService: UserAuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.$isLoggedIn;

    let isLoggedIn: boolean =
      this.store.selectSnapshot(LoginStateModel.isLoggedIn);
    if (!isLoggedIn) {
      console.log("could not login");
      this.store.dispatch(new AuthenticationActions.IsLoggedIn())
        .pipe(map(loggedUser => {
          if (loggedUser) return loggedUser.Authentication.status;
        })).subscribe(status => {
          if (!status) this.store.dispatch(new Navigate(['login']))
        this.$test.next(status);
      })
    } else return isLoggedIn;
    return this.$test;
    // this.store.dispatch(new AuthenticationActions.IsLoggedIn())
    //   .pipe(
    //     map(value => {
    //       return !!value.Authentication.status;
    //     })
    //   ).subscribe(value => this.$diffRatio.next(value),
    //   error => {
    //     console.log(error)
    //   });
    // return this.$diffRatio;
  }

}
