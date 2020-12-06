import {Action, State, StateContext} from "@ngxs/store";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {UpdateUserService} from "../../../serviceV2/update-user.service";
import {UpdateUserProfileActions} from "../actions/update-user-profile.action";
import {UploadImageModel} from "../../domain/imageModel/upload-image.model";
import {switchMap, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";

@State<UploadImageModel>({
  name: 'foo'
})
@Injectable()
export class UpdateUserProfileImageState {
  constructor(private updateProfileService: UpdateUserService) { }

  @Action(UpdateUserProfileActions.UploadUserProfileImg)
  setProfile(ctx: StateContext<UploadImageModel>,
             action: UpdateUserProfileActions.UploadUserProfileImg) {
    return this.updateProfileService
      .setUserProfile(action.userId, action.file)
      .pipe(tap(response => {
        const state = ctx.getState();
        state.file = action.file;
        state.userId = action.userId;
        ctx.patchState({...state})
      }))

  }

}
