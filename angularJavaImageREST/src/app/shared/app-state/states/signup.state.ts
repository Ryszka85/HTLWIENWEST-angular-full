import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {IUserAuthState} from "../../domain/UserAuthStateModel";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {UserAuthenticationService} from "../../../serviceV2/user-authentication.service";
import {AuthenticationActions} from "../actions/authentication-action";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {LoggedInUserModel, UserLoginModel} from "../../domain/userModel/UserLoginModel";
import {EMPTY, Observable} from "rxjs";
import {AddressViewListState} from "../../domain/address-model/address-view.list.state";
import {Country} from "../../domain/address-model/addres.view.model";
import {RequestMessageAction} from "../actions/request-message.action";


@State<BaseUserDetails>({
  name: 'Signup',
  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: undefined
  }
})
@Injectable()
export class SignupState {
  constructor(private authService: UserAuthenticationService) {
  }

  @Selector()
  static registrationModel(state: BaseUserDetails): BaseUserDetails {
    return state;
  }



  @Action(AuthenticationActions.SignUpAction)
  createNewUser(ctx: StateContext<BaseUserDetails>,
                action: AuthenticationActions.SignUpAction): Observable<LoggedInUserModel> {
    return this.authService.createNewUser(action.userRegistration)
      .pipe(
        map(response => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            firstName: action.userRegistration.firstName,
            lastName: action.userRegistration.lastName,
            email: action.userRegistration.email,
            password: action.userRegistration.password,
            address: action.userRegistration.address
          })

          return response;
        }), catchError(err => {
          ctx.dispatch(new RequestMessageAction({ status: err.status, message: err.error.message}))
          return EMPTY;
        })
      )
  }

}
