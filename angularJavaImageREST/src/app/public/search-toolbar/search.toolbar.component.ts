import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {debounceTime, filter, map, switchMap, tap, throttleTime} from "rxjs/operators";
import {TagRequestService} from "../../serviceV2/tag-request.service";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {ImageModel} from "../../shared/domain/imageModel/image.model";
import {Select, Store} from "@ngxs/store";
import {ImagesByTagsAction} from "../../shared/app-state/actions/image.action";
import {ImagesByTagState} from "../../shared/app-state/states/images-by-tag-state";
import {ImageModelList} from "../../shared/domain/imageModel/image-model-list";
import {QueryTagAction} from "../../shared/app-state/actions/query-tag-action";
import {TagModel} from "../../shared/domain/tagModel/tag-model";
import {SearchByTagState} from "../../shared/app-state/states/search-by-tag.state";
import {TagQueryList} from "../../shared/domain/tagModel/tag-query-list";
import {ImageRequestService} from "../../serviceV2/image-request.service";
import {
  FilterName,
  ImagesByTagNameQueryImpl,
  ImagesByTagNameWithFilterArgs, ImagesByTagNameWithFilterOpt
} from "../../shared/domain/imageModel/ImagesByTagNameQuery";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SignupComponent} from "../../shared/signup/signup.component";
import {LoggedInUserModel} from "../../shared/domain/userModel/UserLoginModel";
import {LoginComponent} from "../../shared/login/login.component";
import {LoginStateModel} from "../../shared/app-state/states/login.state.model";
import {AuthenticationActions} from "../../shared/app-state/actions/authentication-action";
import {UserAuthenticationService} from "../../serviceV2/user-authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Navigate} from "@ngxs/router-plugin";
import {error} from "@angular/compiler/src/util";
import {DisplayImagesAction} from "../../shared/app-state/actions/display-images.action";
import {UserDetailsState} from "../../shared/app-state/states/User-details.state";
import {UserDetailsActions} from "../../shared/app-state/actions/user-details.action";
import {LoggedUserDetailsState} from "../../shared/app-state/states/logged-user-details.state";
import {IUserAuthState} from "../../shared/domain/UserAuthStateModel";
import {BaseUserDetails} from "../../shared/domain/userModel/user-details.model";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import LoggedUserDetails = AuthenticationActions.LoggedUserDetails;
import SearchUsers = UserDetailsActions.SearchUsers;
import {SearchByUsersState} from "../../shared/app-state/states/search-by-users.state";
import {SearchViewModel} from "./search-view.model";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MediaObserver} from "@angular/flex-layout";
import {DeviceDetectorService} from "ngx-device-detector";
import {Device, DeviceObserverService} from "../../serviceV2/device-observer.service";


@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search.toolbar.component.html',
  styleUrls: ['./search.toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit, OnDestroy {
  // if variable filterable is set to true then
  // autocomplete image-request will be filtered with the applied values
  @Input('filterable') filterable: boolean;

  openCloseDetails: boolean = false;
  // searchOption can be set either to tags or to users
  // if one of both is set then individual filter-options can be applied
  searchOption = "Tags";
  // observable-searchTerm changes when the value in the
  // autocomplete input changes
  searchTerm$ = new Subject<string>();
  // observable $tagOptions is directly fetched from the rest api
  // to be displayed in the options-dialog as a clickable tagList
  @Select(SearchByTagState.getFetchedTagListAsOption) $tagOptions: Observable<SearchViewModel[]>;
  // observable $userOptions is directly fetched from the rest api
  // to be displayed in the options-dialog as a clickable userList
  // which has an existing profile
  @Select(SearchByUsersState.getFetchedUsers) $users: Observable<BaseUserDetails[]>;
  // observable $isLoggedIn validates with a
  // server request if the user is logged in
  @Select(LoginStateModel.isLoggedIn) $isLoggedIn;
  // $profileImage is to display the clickable
  // logged users profile image int the toolbar
  // when icon is clicked then a options menu opens
  @Select(LoginStateModel.profileImg) $profileImage;
  // $loggedUser is fetched from the server
  // and displays the logged user details
  @Select(LoginStateModel.loggedInUser) $loggedUser;
  // $userName -> formatted logged userName
  @Select(LoggedUserDetailsState.loggedUsername) $userName;

  mobile$ = new Subject<boolean>();
  desktop$ = new Subject<boolean>();

  isDesktopDevice: boolean;
  isTabletDevice: boolean;
  isMobileDevice: boolean;

  filterOptions: FilterCheckBox = {
    timeFilterOptions: [
      {name: 'Last 7 Days', checked: false,  value: 7},
      {name: 'Last 30 Days', checked: false,  value: 30},
      {name: 'Last 365 Days', checked: false, value: 365},
      {name: 'All', checked: true, disabled: false, value: -1}
    ],
    mostDownloads: { name: 'Most downloaded', checked: false },
    mostLiked: { name: 'Most liked', checked: false }
  };

  weekFilter: boolean = false;
  monthFilter: boolean = false;
  yearFilter: boolean = false;

  // ng until destroy

  constructor(private service: TagRequestService,
              public store: Store,
              public imageService: ImageRequestService,
              private dialog: MatDialog,
              private authService: UserAuthenticationService,
              private router: Router,
              private route: ActivatedRoute,
              private media: MediaObserver,
              private deviceService: DeviceDetectorService,
              public deviceObserverService: DeviceObserverService) {

    this.searchTerm$
      .pipe(debounceTime(1000))
      .subscribe(value => {
        switch (this.searchOption) {
          case 'Tags':
            this.store.dispatch(new QueryTagAction(new BehaviorSubject(value)))
            break;
          case 'Users':
            this.store.dispatch(new SearchUsers(new BehaviorSubject(value)))
            break;
        }
      });

    this.isTabletDevice = deviceService.isTablet();
    this.isDesktopDevice = deviceService.isDesktop();
    this.isMobileDevice = deviceService.isMobile();



    this.media.asObservable().subscribe(value => {
      value.filter(value1 => {
        if (value1.mqAlias === 'xs') {
          this.isMobileDevice = true;
          this.isDesktopDevice = false;
          this.isTabletDevice = false;
        } else if (value1.mqAlias === 'sm') {
          this.isMobileDevice = false;
          this.isDesktopDevice = false;
          this.isTabletDevice = true;
        } else if (value1.mqAlias === 'xl' || value1.mqAlias === 'lg') {
          this.isMobileDevice = false;
          this.isDesktopDevice = true;
          this.isTabletDevice = false;
        }
      });
    });
  }

  foo(evt) {
    console.log(evt.target.value)
  }

  ngOnInit(): void {

    this.media.asObservable().subscribe(value => {
      console.log(value);
    });


    let val: BaseUserDetails =
      this.store.selectSnapshot(LoginStateModel.loggedInUser);
    if (val === undefined || val === null)
      this.store.dispatch(new AuthenticationActions.IsLoggedIn())
        .subscribe(value => {
          this.store.dispatch(new LoggedUserDetails(value.Authentication.user.userId))
            .subscribe(value1 => console.log(value1));
        });
  }

  search(selected: string): void {
    /*const filter: ImagesByTagNameWithFilterOpt;*/

    let filters = new Map();
    filters.set(FilterName.FILTER_BY_DATE_WEEK, this.weekFilter);
    filters.set(FilterName.FILTER_BY_DATE_MONTH, this.monthFilter);
    filters.set(FilterName.FILTER_BY_DATE_YEAR, this.yearFilter);
    switch (this.searchOption) {
      case 'Tags' :
        this.store.dispatch(new ImagesByTagsAction(
          new ImagesByTagNameWithFilterOpt(this.filterOptions, selected)))
          .subscribe(value => {
            console.log(value);
            console.log("Search pressed..");
            this.store.dispatch(new Navigate(['/image-by-tags']))
          });
        break;
      case 'Users':
        const userId = this.store
          .selectSnapshot(SearchByUsersState.getFetchedUsers)
          .filter(user => user.username === selected)
          .map(filteredUser => filteredUser.userId);
        this.store.dispatch(
          new Navigate(['profile', {userId: userId}]));
    }

  }

  signup(): void {
    const ref = new MatDialogConfig();
    this.dialog.open(SignupComponent,
      {
        width: '660px',
        disableClose: true,
        autoFocus: false
      });
  }

  login(): void {
    const ref = new MatDialogConfig();
    ref.disableClose = true;
    this.dialog.open(LoginComponent,
      {width: this.isDesktopDevice ? '380px' : this.isMobileDevice ? '320' :  '300px',
        panelClass: 'login-dialog'});
  }

  logout(): void {
    this.store.dispatch(new AuthenticationActions.Logout())
      .subscribe(value =>
        this.store.dispatch(new Navigate(['welcome'])))
  }

  navigateUploadImage(): void {
    let loggedUser: BaseUserDetails =
      this.store.selectSnapshot(LoginStateModel.loggedInUser);
    this.router.navigate(['upload', {userId: loggedUser.userId}]);
  }


  navigateToSettings(): void {
    this.store.dispatch(new Navigate(['edit-profile']))
  }

  navigateToUser(): void {
    let loggedUser: BaseUserDetails =
      this.store.selectSnapshot(LoginStateModel.loggedInUser);
    this.store.dispatch(
      new Navigate(['profile', {userId: loggedUser.userId}])
    )
  }

  ngOnDestroy(): void {
  }

  testing(el: any) {
    console.log(el);
    console.log("AHAHAHAHAH");
  }

  closeFilterDetails(): void {
    this.openCloseDetails = !this.openCloseDetails;
  }

  public updateAll(checked: MatCheckboxChange, timeFilter: CheckBoxModel<number>): void {
    this.filterOptions
      .timeFilterOptions
      .filter(value => value.name != timeFilter.name)
      .forEach(value => value.checked = false);
  }
}


export interface CheckBoxModel<T> {
  name: string;
  checked: boolean;
  disabled?: boolean;
  value?: T;
}

export interface FilterCheckBox {
  timeFilterOptions: Array<CheckBoxModel<number>>;
  mostDownloads: CheckBoxModel<boolean>;
  mostLiked: CheckBoxModel<boolean>;
}


