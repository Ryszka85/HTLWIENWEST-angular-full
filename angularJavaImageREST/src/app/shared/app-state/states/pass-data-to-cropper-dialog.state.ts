import {Action, Selector, State, StateContext} from "@ngxs/store";
import {UploadImageModel} from "../../domain/imageModel/upload-image.model";
import {Injectable} from "@angular/core";
import {DialogCropperData, PassDataToDialogAction} from "../actions/pass-data-to-dialog.action";
import {CroppedDownloadRequest} from "../../domain/http/req/CroppedDownloadRequest";
import {SetCroppedOffsetValues} from "../actions/image.action";
import {Observable, of} from "rxjs";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";

@State<DialogCropperData>({
  name: 'PassDataToDialog'

})
@Injectable()
export class PassDataToCropperDialogState {
  constructor() {  }


  @Selector()
  static getComponentData(state: DialogCropperData): DialogCropperData {
    return state;
  }

  @Action(PassDataToDialogAction)
  public passData(ctx: StateContext<DialogCropperData>,
                  action: PassDataToDialogAction): Observable<DialogCropperData> {
    ctx.patchState(action.data);
    return of(ctx.getState());
  }

}
