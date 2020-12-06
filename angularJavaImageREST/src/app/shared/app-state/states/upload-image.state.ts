import {Action, Selector, State, StateContext} from "@ngxs/store";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {Injectable} from "@angular/core";
import {UserAuthenticationService} from "../../../serviceV2/user-authentication.service";
import {AuthenticationActions} from "../actions/authentication-action";
import {Observable} from "rxjs";
import {LoggedInUserModel} from "../../domain/userModel/UserLoginModel";
import {tap} from "rxjs/operators";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {UploadImage} from "../actions/image.action";
import {UploadImageModel} from "../../domain/imageModel/upload-image.model";
import {UserDetailsActions} from "../actions/user-details.action";
import {ImageUploadService} from "../../../serviceV2/image-upload.service";

@State<UploadImageModel>({
  name: 'Upload'

})
@Injectable()
export class UploadImageState {
  constructor(private uploadService: ImageUploadService) {
  }

  @Selector()
  static userDetails(state: BaseUserDetails): BaseUserDetails {
    return state;
  }

  @Action(UploadImage)
  uploadImage(ctx: StateContext<UploadImageModel>,
              action: UploadImage): Observable<any> {

    // const userId = action.uploadModel.userId;
    // const image = action.uploadModel.file;
    return this.uploadService
      .addToUserLibrary(action.uploadModel)
      .pipe(
        tap(response => {
          // console.log(response.status)
          const state = ctx.getState();
          ctx.setState({
            ...state,
            userId: action.uploadModel.userId,
            orgFile: action.uploadModel.orgFile,
            downloadFile: action.uploadModel.downloadFile,
            status: response.status === 200
          })
        })
      )
  }
}
