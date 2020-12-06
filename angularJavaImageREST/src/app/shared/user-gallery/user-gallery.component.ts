import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {ImagesByUserIdState} from "../app-state/states/images-by-user-id.state";
import {ImagesByUserIDAction} from "../app-state/actions/image.action";
import {UserDetailsActions} from "../app-state/actions/user-details.action";
import {UserDetailsState} from "../app-state/states/User-details.state";
import {AuthenticationActions} from "../app-state/actions/authentication-action";
import {LoginStateModel} from "../app-state/states/login.state.model";
import {BehaviorSubject} from "rxjs";
import {LoggedUserDetailsState} from "../app-state/states/logged-user-details.state";
import {LoggedInUserModel} from "../domain/userModel/UserLoginModel";
import {BaseUserDetails} from "../domain/userModel/user-details.model";

@Component({
  selector: 'app-user-gallery',
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.scss']
})
export class UserGalleryComponent implements OnInit {
  @Select(ImagesByUserIdState.getData) $byUserIdData;
  @Select(UserDetailsState.firstLastName) $name;
  @Select(UserDetailsState.profileImgPath) $profileImg;
  @Select(UserDetailsState.getState) $state;
  @Select(LoginStateModel.loggedInUser) $loggedUser;
  downloadLink: any;
  $isOwner = new BehaviorSubject<boolean>(false);

  constructor(private route: ActivatedRoute,
              private store: Store) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(param => {
        const userId = param.get('userId');
        this.store.dispatch(
          [
            new UserDetailsActions.GetUserDetails(userId),
            new ImagesByUserIDAction(userId)
          ]
        )
        this.$loggedUser.subscribe(user => {
          if (user !== undefined && user !== null)
            if (user.userId === userId) {
              this.$isOwner.next(true);
            }
        })
      })

    // this.$state.subscribe(state => {
    //   if (userId === state.userId) {
    //     console.log("Super!!!!!!!!!")
    //   }
    // })
    // this.store.dispatch(new AuthenticationActions.IsLoggedIn())
    //   .subscribe(value => {})
    //
    // this.$loggedUser.subscribe(user => {
    //   if (user !== undefined && user !== null)
    //     if (user.userId === userId) {
    //       this.$isOwner.next(true);
    //     }
    //
    //
    // })

  }

  download(name: any, userId: any) {

  }
}
