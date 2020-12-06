import {Component, OnInit} from '@angular/core';
import {BaseUserDetails, UserRegistrationModel} from "../domain/userModel/user-details.model";
import {UserAuthenticationService} from "../../serviceV2/user-authentication.service";
import {debounceTime, switchMap} from "rxjs/operators";
import {LoggedInUserModel, UserLoginModel} from "../domain/userModel/UserLoginModel";
import {Select, Store} from "@ngxs/store";
import {AuthenticationActions} from "../app-state/actions/authentication-action";
import LoginAction = AuthenticationActions.LoginAction;
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {
  GetZipCodesAndCitiesByRegion,
  GetCountriesAction,
  GetRegionsAction
} from "../app-state/actions/address-validation-action";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AddressValidationState} from "../app-state/states/address.validation.state";
import {QueryTagAction} from "../app-state/actions/query-tag-action";
import {AddressValidationService} from "../service/address-validation.service";
import {Country, Region, ZipCodeAndCity} from "../domain/address-model/addres.view.model";
import {MatSelectChange} from "@angular/material/select";
import {ImagesByTagState} from "../app-state/states/images-by-tag-state";
import {ImageModel} from "../domain/imageModel/image.model";
import {SignupState} from "../app-state/states/signup.state";
import {RequestStatusState} from "../app-state/states/request-status.state";
import {RequestMessageAction} from "../app-state/actions/request-message.action";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public disabled: boolean = true;
  public invalid: boolean = true;
  public formGroup;
  countries$ = new Subject<Country[]>();
  regions$ = new Subject<Region[]>();
  currentCounty;
  color = new FormControl("Warn")
  zipCodeAndCities$ = new Subject<ZipCodeAndCity[]>();
  zipAndCities: ZipCodeAndCity[];
  errorMsg: string = "Password required";


  @Select(AddressValidationState.countries)
  fetchedCountries$: Observable<Country[]>;

  @Select(AddressValidationState.regions)
  fetchedRegions$: Observable<Region[]>;

  @Select(AddressValidationState.zipCodesAndCities)
  fetchedZipcodesAndCities$: Observable<ZipCodeAndCity[]>;

  @Select(SignupState.registrationModel)
  registrationModel$: Observable<BaseUserDetails>;


  @Select(RequestStatusState.getStatus) $requestStatus;


  // form fields
  public countryFormField =
    new FormControl('', [Validators.required]);
  public lastNameFormField =
    new FormControl('', [Validators.required]);
  public firstNameFormField =
    new FormControl('', [Validators.required]);
  public cityFormField =
    new FormControl({value: '', disabled: true},
      [Validators.required]);
  public emailFormField =
    new FormControl('', [Validators.required]);
  public passwordFormField =
    new FormControl('', [Validators.required]);
  public confirmPwdFormField =
    new FormControl('', [Validators.required]);

  public streetFormField =
    new FormControl({value: '', disabled: true},
      [Validators.required]);
  public regionFormField =
    new FormControl({value: '', disabled: true},
      [Validators.required]);
  public zipCodeFormField =
    new FormControl({value: '', disabled: true},
      [Validators.required]);

  searchTerm$ = new Subject<string>();

  constructor(private authService: UserAuthenticationService,
              private store: Store,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<SignupComponent>,
              private addressService: AddressValidationService) {
    this.formGroup = this.formBuilder.group({
      firstName: this.firstNameFormField,
      lastName: this.lastNameFormField,
      /*street: this.streetFormField,
      city: this.cityFormField,
      country: this.countryFormField,
      region: this.regionFormField,
      zipcode: this.zipCodeFormField,*/
      email: this.emailFormField,
      password: this.passwordFormField,
      confirmPassword: this.confirmPwdFormField
    })

    /*this.formGroup.get('zipcode').disable();*/


  }

  ngOnInit(): void {

    this.store.dispatch(new RequestMessageAction(null))

    this.registrationModel$.subscribe(
      value => {
        if (value.email.length > 1) {
          this.store.dispatch(new AuthenticationActions.LoginAction(
            new UserLoginModel(value.email, value.password)
          )).pipe(switchMap(resp =>
            this.store.dispatch(
              new AuthenticationActions.LoggedUserDetails(
                resp.Authentication.user.userId))
          )).subscribe(value1 => value1)
        }
      }
    )
    /*this.validateCityAndZipFormFields();*/
    this.store.dispatch(new GetCountriesAction())
    /*this.fetchedZipcodesAndCities$
      .subscribe(value => this.zipAndCities = value)*/
  }

  /*private validateCityAndZipFormFields() {
    this.validateZipCodeFormField();
    this.validateStreetFormField();
  }

  private validateZipCodeFormField() {
    this.formGroup
      .controls['zipcode']
      .valueChanges
      .subscribe(val => {
        if (this.formGroup.controls['city'].disabled)
          this.invalid = true;
      })
  }

  private validateStreetFormField() {
    this.formGroup
      .controls['street']
      .valueChanges
      .subscribe(val => {
        if (this.formGroup.controls['street'].value.length > 0)
          this.invalid = false;
        else this.invalid = true;
      })
  }*/


  closeDialog(): void {
    // this.dialogRef.close(this.formGroup.value);
    this.dialogRef.close();
  }

  selectPostalAndSetCity(value: string) {
    this.zipAndCities
      .filter(value1 => value1.zipCode === value)
      .forEach(value1 => this.cityFormField.setValue(value1.city))
    this.streetFormField.enable();
  }

  register() {

    const registrationModel = new UserRegistrationModel(
      this.formGroup.controls['firstName'].value,
      this.formGroup.controls['lastName'].value,
      this.formGroup.controls['email'].value,
      this.formGroup.controls['password'].value,
      null, null, null, null
    );



    /*const registrationModel = new UserRegistrationModel(
      this.formGroup.controls['firstName'].value,
      this.formGroup.controls['lastName'].value,
      this.formGroup.controls['email'].value,
      this.formGroup.controls['password'].value,
      this.formGroup.controls['street'].value,
      this.formGroup.controls['region'].value,
      this.formGroup.controls['zipcode'].value,
      this.formGroup.controls['country'].value
    );*/
    this.store
      .dispatch(new AuthenticationActions.SignUpAction(registrationModel))
      .subscribe(value => this.authService.isLoggedIn())

    /*this.closeDialog();*/
  }

  /*selectedCountry($event: MatSelectChange) {
    console.log(this.disabled);
    this.disabled = false;
    console.log(this.disabled);
    this.store.dispatch(new GetRegionsAction($event.value))
      .subscribe(value => this.regionFormField.enable());
  }*/

  selectedRegion($event: MatSelectChange) {
    this.formGroup.get('zipcode').enable();
    this.searchTerm$
      .pipe(debounceTime(1000))
      .subscribe(value => {
        this.store
          .dispatch(
            new GetZipCodesAndCitiesByRegion(
              new BehaviorSubject(value),
              $event.value
            )
          )
      });
  }

  changeZipCode($event: MatSelectChange) {
  }

  hasError = (controlName: string, errorName: string) => {
    return this.formGroup.controls['firstName'].hasError(errorName)
  }

  checkPasswords() {
    const length = this.formGroup.get('password').value.length > 0;
    const confirmPwd = this.formGroup.controls['confirmPassword'].value;
    const pwd = this.formGroup.get('password').value;

    if (confirmPwd !== pwd && confirmPwd.length > 0 && length)
      this.formGroup.controls['password']
        .setErrors({'incorrect': true});

    else if (length && confirmPwd.length > 0 && confirmPwd === pwd) {
      this.formGroup.controls['password']
        .setErrors(null);
      this.invalid = false;
    }


  }
}
