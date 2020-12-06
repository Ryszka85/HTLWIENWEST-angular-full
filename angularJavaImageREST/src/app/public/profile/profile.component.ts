import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {LoginStateModel} from "../../shared/app-state/states/login.state.model";
import {UserDetailsState} from "../../shared/app-state/states/User-details.state";
import {UserDetailsActions} from "../../shared/app-state/actions/user-details.action";
import {ImagesByUserIDAction} from "../../shared/app-state/actions/image.action";
import {ImagesByUserIdState} from "../../shared/app-state/states/images-by-user-id.state";
import {DisplayImagesAction} from "../../shared/app-state/actions/display-images.action";
import {AuthenticationActions} from "../../shared/app-state/actions/authentication-action";
import {ImageRequestService} from "../../serviceV2/image-request.service";
import {LoggedUserDetailsState} from "../../shared/app-state/states/logged-user-details.state";
import {map, share, switchMap, tap} from "rxjs/operators";
import {LoggedInUserModel} from "../../shared/domain/userModel/UserLoginModel";
import {BaseUserDetails} from "../../shared/domain/userModel/user-details.model";
import {UserAuthStateModel} from "../../shared/domain/UserAuthStateModel";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {ImageModel} from "../../shared/domain/imageModel/image.model";
import LoggedUserDetails = AuthenticationActions.LoggedUserDetails;
import {MatTabChangeEvent} from "@angular/material/tabs";
import {ProfileViewModel} from "./profile-view-model";
import {ModelFilter} from "../../shared/util/model-filter";
import {ImageModelFilter} from "../../shared/util/image-model-filter";
import {RequestMessageAction} from "../../shared/app-state/actions/request-message.action";
import {RequestStatusState} from "../../shared/app-state/states/request-status.state";
import {MediaProcessorService} from "../../serviceV2/media-processor.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  weekFilter: boolean = false;


  @Select(UserDetailsState.profileImgPath) $profileImg;

  @Select(LoginStateModel.loggedInUser) $logged;
  userDetails: ProfileViewModel;
  @Select(UserDetailsState.firstLastName) $firstLast;
  @Select(UserDetailsState.getUserImages) $userImages;
  @Select(UserDetailsState.getUserLikes) $userLikes;
  @Select(UserDetailsState.userDetails) $userDetails;

  @Select(RequestStatusState.getStatus) $requestStatus;
  $imgs = new Observable<ImageModel[]>();
  $likeds = new Observable<ImageModel[]>();
  requestError: boolean = false;
  errorMessage: string;
  downloadLink: any;
  editableProfile = new BehaviorSubject<boolean>(false);

  constructor(private store: Store,
              private route: ActivatedRoute,
              private service: ImageRequestService,
              private router: Router) {
    // this.route.data.subscribe((value: { userDetails: ProfileViewModel }) => {
    //   this.userDetails = value.userDetails;
    //   this.$imgs = of(value.userDetails.userProfile.images);
    //   this.$likeds = of(value.userDetails.userProfile.likes)
    // })
  }

  ngOnInit(): void {


    this.$userImages
      .subscribe(model =>  {
        if (model !== undefined) {

          // ImageModelFilter.apply(model, 3600000 * 24 * 7)
          //   .forEach(image => console.log("Week : " + image.uploadDate));

          // ImageModelFilter.apply(model, 3600000 * 24 * 30)
          //   .forEach(image => console.log("Month : " + image.uploadDate))
          //
          // ImageModelFilter
          //   .apply(model, 3600000 * 24 * 365)
          //   .forEach(image => console.log("Year : " + image.uploadDate))

        }
      })


    console.log(this.userDetails);
    this.route.paramMap
      .subscribe(param => {
        const userId = param.get('userId');
        this.store
          .dispatch(new UserDetailsActions.GetUserDetails(userId))
          .subscribe(value => {
            console.log(value.UserDetails);
            this.requestError = false;
          }, error => {
            this.requestError = true;
            this.errorMessage = 'Unable to find requested user';
            this.router.navigate(['profile', {error: error.error.message}])
          })
        this.$logged.subscribe(loggedUser => {
          if (loggedUser) {
            this.editableProfile.next(loggedUser.userId === param.get('userId'));
          }
        })
      })

    const loggedUser : BaseUserDetails =
      this.store.selectSnapshot(LoginStateModel.loggedInUser);
    if (loggedUser !== undefined && loggedUser !== null) {

      // this.store.dispatch([
      //     new AuthenticationActions.IsLoggedIn(),
      //     new ImagesByUserIDAction(loggedUser.userId)
      //   ]
      // )
    }

  }

  download(name: any, userId: any) {

  }

  ngOnDestroy(): void {

  }

  imageWasLiked($event: MatTabChangeEvent): void {
    const label = $event.tab.textLabel;
    console.log(label);
    if (label === 'Likes') {
      console.log("da schau her");
      this.store.dispatch(new UserDetailsActions.GetUserDetails(
        this.store.selectSnapshot(UserDetailsState.userDetails).userId
      ))
    }
  }
}
