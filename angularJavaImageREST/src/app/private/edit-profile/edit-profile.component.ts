import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {LoginStateModel} from "../../shared/app-state/states/login.state.model";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {UserDetailsState} from "../../shared/app-state/states/User-details.state";
import {UserDetailsActions} from "../../shared/app-state/actions/user-details.action";
import {AuthenticationActions} from "../../shared/app-state/actions/authentication-action";
import {debounceTime, distinctUntilChanged, map, share} from "rxjs/operators";
import {Navigate} from "@ngxs/router-plugin";
import {LoggedInUserModel} from "../../shared/domain/userModel/UserLoginModel";
import {ImagesByUserIDAction} from "../../shared/app-state/actions/image.action";
import {UserAuthenticationService} from "../../serviceV2/user-authentication.service";
import {LoggedUserDetailsState} from "../../shared/app-state/states/logged-user-details.state";
import {AbstractControl, Form, FormBuilder, FormControl, ValidatorFn, Validators} from "@angular/forms";
import {BaseUserDetails} from "../../shared/domain/userModel/user-details.model";
import {IUserAuthState} from "../../shared/domain/UserAuthStateModel";
import {SelectedImage} from "../../shared/domain/imageModel/image.model";
import {MatDialog} from "@angular/material/dialog";
import {ChangeEmailThirdPartyComponent} from "../change-email-third-party/change-email-third-party.component";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import SearchUsers = UserDetailsActions.SearchUsers;
import {SearchByUsersState} from "../../shared/app-state/states/search-by-users.state";
import {UpdateUserService} from "../../serviceV2/update-user.service";
import {SearchByUsersService} from "../../serviceV2/search-by-users.service";
import IsLoggedIn = AuthenticationActions.IsLoggedIn;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Select(UserDetailsState.userDetails) $userDetails;
  @Select(LoginStateModel.profileImg) $profile;
  @Select(LoginStateModel.loggedUserId) $userId;
  firstNameControl = new FormControl();
  lastNameControl = new FormControl();
  emailControl = new FormControl();
  userNameControl = new FormControl();
  formGroup;

  readOnlyEmail: boolean = true;
  readOnlyUserName: boolean = true;
  readOnlyFirstName: boolean = true;
  readOnlyLastName: boolean = true;


  emailValChange$ = new Subject<boolean>();
  firstValChange$ = new Subject<boolean>();
  lastValChange$ = new Subject<boolean>();
  userNameValChange$ = new Subject<boolean>();
  userDetailsChanged$ = new Subject<boolean>();

  loggedUser: BaseUserDetails;

  constructor(private store: Store,
              private service: UserAuthenticationService,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private updateUserService: UpdateUserService,
              private userService: SearchByUsersService) { }

  ngOnInit(): void {

    /*this.emailValChange$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(email => {
        if (email !== this.loggedUser.email) {
          if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            this.userDetailsChanged$.next(true);
          }
        } else {
          this.userDetailsChanged$.next(false);
        }
      });*/






    const loggedUser : BaseUserDetails =
      this.store.selectSnapshot(LoginStateModel.loggedInUser);

    this.loggedUser = this.store.selectSnapshot(LoginStateModel.loggedInUser);

    const userDetails: BaseUserDetails =
       this.store.selectSnapshot(LoginStateModel.loggedInUser);

    console.log("google login ? : " + this.store.selectSnapshot(LoginStateModel.loginType));

    if (userDetails.userId === undefined) {
      this.store.dispatch(
        new AuthenticationActions.LoggedUserDetails(loggedUser.userId))
        .subscribe(userDetailsResp => {
          this.initFormGroup(userDetailsResp);
        })
    } else {
      this.firstNameControl = new FormControl(userDetails.firstName, [Validators.required]);
      this.lastNameControl = new FormControl(userDetails.lastName, [Validators.required]);
      this.emailControl = new FormControl(userDetails.email,
        [
          emailValidator(loggedUser.email), Validators.required]);
      this.userNameControl = new FormControl(userDetails.username, [Validators.required]);
      this.formGroup = this.formBuilder.group({
        firstName: this.firstNameControl,
        lastName: this.lastNameControl,
        email: this.emailControl,
        userName: this.userNameControl
      });
      this.store.dispatch(
        new AuthenticationActions.LoggedUserDetails(loggedUser.userId))
        .subscribe(userDetailsResp => {
          /*this.initFormGroup(userDetailsResp);*/
        });
    }

    this.firstNameControl.valueChanges.subscribe(value => console.log(value))

    // this.formGroup = this.formBuilder.group({
    //   firstName: null
    // })
    // if (loggedUser !== undefined && loggedUser !== null) {
    //   this.store.dispatch(
    //     new UserDetailsActions
    //       .GetUserDetails(loggedUser.userId)
    //   )
    // } else this.store.dispatch(new Navigate(['/login']))



  }


  get email() {
    return this.formGroup.get('email');
  }

  get userName() {
    return this.formGroup.get('userName');
  }

  get lastName() {
    return this.formGroup.get('lastName');
  }



  get firstName() {
    return this.formGroup.get('firstName');
  }

  /*get height() {
    return this.formGroup.get('height');
  }*/

  private initFormGroup(userDetailsResp) {
    console.log(userDetailsResp.LoggedDetails);
    this.firstNameControl = new FormControl(userDetailsResp.LoggedDetails.firstName);
    this.lastNameControl = new FormControl(userDetailsResp.LoggedDetails.lastName);
    this.emailControl = new FormControl(userDetailsResp.LoggedDetails.email,
      [
        emailValidator(userDetailsResp.LoggedDetails.email)]
    );
    this.userNameControl = new FormControl(userDetailsResp.LoggedDetails.userName);
    this.formGroup = this.formBuilder.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      userName: this.userNameControl
    });
  }

  navigateToUpload() {
    this.store.dispatch(new Navigate(['upload']))
  }

  handleFileInput(files: FileList) {
    const loggedUser: BaseUserDetails =
      this.store.selectSnapshot(LoginStateModel.loggedInUser);
    const formData = new FormData();
    formData.append('file', files[0]);
    this.store.dispatch(new UserDetailsActions
      .UploadUserProfile(loggedUser.userId, formData));
  }

  editEmail(): void {
    const thirdPartyLogin = this.store.selectSnapshot(LoginStateModel.loginType);

    if (thirdPartyLogin) {
      this.dialog.open(ChangeEmailThirdPartyComponent, {
        width: '450px',
        height: '460px'
      });
    } else {
      this.readOnlyEmail = false;
      console.log(this.loggedUser.email);
      console.log(this.emailControl.value);
    }

    /*this.readOnlyEmail = true;*/


  }

  emailChanged(): void {
    console.log(this.email.errors);
    this.store
      .dispatch(new SearchUsers(new BehaviorSubject(this.email.value)))
      .pipe(map(value => {
        console.log("JFSDJSDJSDFJFJSDJDJDJ");

      }));
    if (this.emailControl.value !== this.loggedUser.email && this.email.errors === null) {
      this.store
        .selectSnapshot(SearchByUsersState.getFetchedUsers)
        .forEach(user => {
          if (user.email !== this.email.value && this.email.errors === null) {
            this.userDetailsChanged$.next(true);
          } else {
            this.userDetailsChanged$.next(false);
            this.formGroup
              .controls
              .email.setErrors({forbiddenValue: {value: 'Invalid!! Email Already exists'}});
          }
        });
    } else {
      this.userDetailsChanged$.next(false);
    }
  }

  saveEmailChanges() {
    const baseUserDetails = this.store.selectSnapshot(LoginStateModel.loggedInUser);
    const user: BaseUserDetails = {
      userId: baseUserDetails.userId,
      firstName: this.firstNameControl.value,
      lastName: this.lastNameControl.value,
      email: this.emailControl.value,
      password: baseUserDetails.password,
      profileImgPath: baseUserDetails.profileImgPath,
      username: this.userNameControl.value
    }
    this.updateUserService.changeUserEmail(user)
      .subscribe(value => console.log(value));
  }

  userNameChanged() {
    this.userService
      .searchByUserName(new BehaviorSubject(this.userName.value))
      .subscribe(userList => {
        userList.forEach(user => {
          if (user.username !== this.userName.value) {
            this.userNameValChange$.next(true);
          } else {
            this.formGroup
              .controls
              .userName
              .setErrors({value: 'Invalid!! Email Already exists'});
            this.emailValChange$.next(false);
          }
        });
      });
    console.log(this.userName.value);
  }

  firstNameChanged(): void {
    if (this.firstName.value !== this.loggedUser.firstName) {
      this.firstValChange$.next(true);
    } else {
      this.firstValChange$.next(false);
    }
  }

  lastNameOnChange(): void {
    if (this.lastName.value !== this.loggedUser.lastName) {
      this.lastValChange$.next(true);
    } else {
      this.lastValChange$.next(false);
    }
  }
}



export function emailValidator(value: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let mailformat = new RegExp(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
    const forbidden = mailformat.test(control.value) === false;
    return forbidden ? {forbiddenValue: {value: control.value + " is not an valid email"}} : null;
  };
}
