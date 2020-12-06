import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {UserDetailsActions} from "../../shared/app-state/actions/user-details.action";
import {map, mergeMap, switchMap, tap} from "rxjs/operators";
import {LoginStateModel} from "../../shared/app-state/states/login.state.model";
import {ProfileViewModel} from "./profile-view-model";
import {AuthenticationActions} from "../../shared/app-state/actions/authentication-action";
import {BaseUserDetails} from "../../shared/domain/userModel/user-details.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<ProfileViewModel> {
  @Select(LoginStateModel.loggedInUser) $logged;

  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileViewModel> | ProfileViewModel {
    return this.store
      .dispatch(new UserDetailsActions.GetUserDetails(route.params.userId))
      .pipe(
        switchMap(state => {
          return this.store
            .dispatch(new AuthenticationActions.IsLoggedIn())
            .pipe(map(state2 => {
              console.log(state2.Authentication.user.userId);
              console.log(state.UserDetails);
              return {
                isOwner: state2.Authentication.user.userId === route.params.userId,
                userProfile: state.UserDetails
              };
            }));
        }))
      .pipe(
        map(r => {
          console.log("ProfileResolver was called with value : " , r)
          return r;
        })
      );
  }
}
