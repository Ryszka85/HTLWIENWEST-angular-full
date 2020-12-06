import {IUserLoginModel} from "../../domain/userModel/UserLoginModel";
import {UserRegistrationModel} from "../../domain/userModel/user-details.model";

export namespace AuthenticationActions {
  export class LoginAction {
    static readonly type = '[Authentication] Login';
    constructor(public userLoginModel: IUserLoginModel) { }
  }

  export class LogoutAction {
    static readonly type = '[Authentication] Logout';
    constructor(public userLoginModel: IUserLoginModel) { }
  }

  export class SignUpAction {
    static readonly type = '[Authentication] Signup';
    constructor(public userRegistration: UserRegistrationModel) { }
  }

  export class IsLoggedIn {
    static readonly type = '[Authentication] Is logged in';
    constructor() { }
  }

  export class Logout {
    static readonly type = '[Authentication] Logout';
    constructor() { }
  }

  export class LoggedUserDetails {
    static readonly type = '[Authentication] Logged userDetails';
    constructor(public userId: string) { }
  }
}
