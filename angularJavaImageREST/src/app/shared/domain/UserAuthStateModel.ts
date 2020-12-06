import {LoggedInUserModel} from "./userModel/UserLoginModel";
import {BaseUserDetails} from "./userModel/user-details.model";

export interface IUserAuthState {
  user: BaseUserDetails;
  status: boolean;
  thirdPartyLogin?: boolean;
}

export class UserAuthStateModel implements IUserAuthState{
  status: boolean;
  user: BaseUserDetails;

  constructor(authenticated: boolean, user: BaseUserDetails) {
    this.status = authenticated;
    this.user = user;
  }
}
