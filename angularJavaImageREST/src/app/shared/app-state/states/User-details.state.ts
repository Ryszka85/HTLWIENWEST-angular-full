import {Action, Selector, State, StateContext} from "@ngxs/store";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {Injectable} from "@angular/core";
import {UserAuthenticationService} from "../../../serviceV2/user-authentication.service";
import {AuthenticationActions} from "../actions/authentication-action";
import {Observable} from "rxjs";
import {LoggedInUserModel} from "../../domain/userModel/UserLoginModel";
import {tap} from "rxjs/operators";
import {UserDetailsActions} from "../actions/user-details.action";
import {UploadImageModel} from "../../domain/imageModel/upload-image.model";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {ImageModel} from "../../domain/imageModel/image.model";

@State<BaseUserDetails>({
  name: 'UserDetails',
  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: undefined
  }
})
@Injectable()
export class UserDetailsState {
  constructor(private authService: UserAuthenticationService,
              private imageRequestService: ImageRequestService) {
  }

  @Selector()
  static profileImgPath(state: BaseUserDetails): string {
    return state.profileImgPath;
  }

  @Selector()
  static userDetails(state: BaseUserDetails): BaseUserDetails {
    return state;
  }

  @Selector()
  static firstLastName(state: BaseUserDetails): string {
    return state.firstName + " " + state.lastName;
  }

  @Selector()
  static getState(state: BaseUserDetails): BaseUserDetails {
    return state;
  }

  @Selector()
  static getUserImages(state: BaseUserDetails): ImageModel[] {
    return state.images;
  }

  @Selector()
  static getUserLikes(state: BaseUserDetails): ImageModel[] {
    return state.likes;
  }

  @Action(UserDetailsActions.GetUserDetails)
  userDetails(ctx: StateContext<BaseUserDetails>,
              action: UserDetailsActions.GetUserDetails): Observable<BaseUserDetails> {
    return this.authService.getUserDetails(action.userId)
      .pipe(
        tap(response => {
          console.log(response)
          const state = ctx.getState();
          console.log(response)
          console.log(response.images);
          ctx.setState({
            ...state,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            userId: response.userId,
            profileImgPath: response.profileImgPath,
            username: response.username,
            likes: response.likes,
            images: response.images
          })
        })
      )
  }




}
