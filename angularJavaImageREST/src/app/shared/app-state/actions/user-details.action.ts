import {UserRegistrationModel} from "../../domain/userModel/user-details.model";
import {Observable} from "rxjs";


export namespace UserDetailsActions {
  export class UploadUserProfile {
    static readonly type = '[User Action] Upload user-profile';
    constructor(public userId: string, public file: FormData) { }
  }

  export class GetUserDetails {
    static readonly type = '[User Action] Get user details';
    constructor(public userId: string) { }
  }

  export class SearchUsers {
    static readonly type = '[User Action] Get user profiles';
    constructor(public searchTerm: Observable<string>) {}
  }
}
