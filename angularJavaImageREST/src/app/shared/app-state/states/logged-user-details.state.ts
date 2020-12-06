import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {Injectable} from "@angular/core";
import {UserAuthenticationService} from "../../../serviceV2/user-authentication.service";
import {UserDetailsActions} from "../actions/user-details.action";
import {Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {AuthenticationActions} from "../actions/authentication-action";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {UpdateUserService} from "../../../serviceV2/update-user.service";

@State<BaseUserDetails>({
  name: 'LoggedDetails'
})
@Injectable()
export class LoggedUserDetailsState {
  constructor(private authService: UserAuthenticationService,
              private imageRequestService: UpdateUserService,
              private store: Store) {
  }

  @Selector()
  static getProfile(state: BaseUserDetails): string {
    return state.profileImgPath;
  }

  @Selector()
  static loggedUserDetails(state: BaseUserDetails): BaseUserDetails {
    return state;
  }

  @Selector()
  static loggedUserId(state: BaseUserDetails): string {
    return state.userId;
  }

  @Selector()
  static loggedFirstLastName(state: BaseUserDetails): string {
    return state.firstName + " " + state.lastName;
  }

  @Selector()
  static loggedUsername(state: BaseUserDetails): string {
    return state.username;
  }

  @Selector()
  static getLoggedState(state: BaseUserDetails): BaseUserDetails {
    return state;
  }

  @Action(AuthenticationActions.LoggedUserDetails)
  getUserDetails(ctx: StateContext<BaseUserDetails>,
                 action: AuthenticationActions.LoggedUserDetails): Observable<BaseUserDetails> {
    return this.authService.getUserDetails(action.userId)
      .pipe(
        tap(response => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            userId: response.userId,
            profileImgPath: response.profileImgPath,
            username: response.username
          })
        })
      )
  }

  @Action(UserDetailsActions.UploadUserProfile)
  uploadProfileImage(ctx: StateContext<BaseUserDetails>,
                     action: UserDetailsActions.UploadUserProfile): Observable<any> {
    return this.imageRequestService
      .setUserProfile(action.userId, action.file)
      .pipe(map(res => {
        if (res.status === 200) {
          console.log(res.body);
          const state = ctx.getState();
          return this.store.dispatch(new AuthenticationActions.IsLoggedIn())
        }
      }))
  }

}
