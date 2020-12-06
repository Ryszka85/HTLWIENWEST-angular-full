import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TagQueryList} from "../../domain/tagModel/tag-query-list";
import {Injectable} from "@angular/core";
import {IUserAuthState, UserAuthStateModel} from "../../domain/UserAuthStateModel";
import {IUserLoginModel, LoggedInUserModel} from "../../domain/userModel/UserLoginModel";
import {UserAuthenticationService} from "../../../serviceV2/user-authentication.service";
import {QueryTagAction} from "../actions/query-tag-action";
import {catchError, map, retry, tap} from "rxjs/operators";
import {AuthenticationActions} from "../actions/authentication-action";
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs";
import {Router} from "@angular/router";
import {Navigate} from "@ngxs/router-plugin";
import {BaseUserDetails, UserDetailsImpl} from "../../domain/userModel/user-details.model";

@State<IUserAuthState>({
  name: 'Authentication',
  defaults: {
    user: undefined,
    status: false
  }
})
@Injectable()
export class LoginStateModel {
  constructor(private authService: UserAuthenticationService,
              private router: Router) {
  }


  @Selector()
  static loggedUserId(state: IUserAuthState): string {
    return state.user.userId;
  }

  @Selector()
  static isLoggedIn(state: IUserAuthState): boolean {
    return state.status;
  }

  @Selector()
  static loggedInUser(state: IUserAuthState): BaseUserDetails {
    return state.user;
  }

  @Selector()
  static loggedFirstName(state: IUserAuthState): string {
    return state.user.firstName;
  }

  @Selector()
  static loggedLastName(state: IUserAuthState): string {
    return state.user.lastName;
  }

  @Selector()
  static userName(state: IUserAuthState): string {
    return state.user.username;
  }

  @Selector()
  static loginType(state: IUserAuthState): boolean {
    return state.thirdPartyLogin;
  }

  @Selector()
  static userId(state: IUserAuthState): string {
    return state.user.userId;
  }

  @Selector()
  static profileImg(state: IUserAuthState): string {
    return state.user.profileImgPath;
  }

  @Action(AuthenticationActions.LoginAction)
  login(ctx: StateContext<IUserAuthState>, action: AuthenticationActions.LoginAction) {
    const loginType = action.userLoginModel.password === undefined ? "GOOGLE" : "DEFAULT";
    return this.authService.login(action.userLoginModel, loginType)
      .pipe(
        tap(response => {
          const status = response.status === 200;
          const userId = response.headers.get("UserId");
          const state = ctx.getState();
          console.log(response);
          const body = response.body;
          console.log(body)
          ctx.patchState({
            ...state,
            user: {
              userId: body.userId,
              username: body.username,
              firstName: body.firstName,
              lastName: body.lastName,
              profileImgPath: body.profileImgPath,
              email: body.email,
            },
            status: status,
            thirdPartyLogin: body.thirdPartyLogin
          });
        })
      )
  }

  @Action(AuthenticationActions.IsLoggedIn)
  isLoggedIn(ctx: StateContext<IUserAuthState>,
             action: AuthenticationActions.IsLoggedIn): Observable<boolean> {
    return this.authService.isLoggedIn()
      .pipe(
        map(response => {
          const status = response.status === 200;
          const state = ctx.getState();
          const body = response.body;
          ctx.patchState({
            ...state,
            user: {
              userId: body.userId,
              username: body.username,
              firstName: body.firstName,
              lastName: body.lastName,
              profileImgPath: body.profileImgPath,
              email: body.email
            },
            status: status,
            thirdPartyLogin: body.thirdPartyLogin
          })
          return status;
        }), retry(1), catchError(err => {
          console.log("Error in isLoggedin");
          return throwError(err);
        })
      )
  }

  @Action(AuthenticationActions.Logout)
  logout(ctx: StateContext<IUserAuthState>, action: AuthenticationActions.Logout) {
    return this.authService.logout()
      .pipe(
        tap(response => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            user: null,
            status: false
          })
        })
      )
  }


}
