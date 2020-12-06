import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CropImageModel, ImageModel} from "../../domain/imageModel/image.model";
import {Injectable} from "@angular/core";
import {CropAndDownload, CropGalleryViewImage, GetImageAsByse64} from "../actions/image.action";
import {Observable, of} from "rxjs";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {map} from "rxjs/operators";

export interface CropAndDownloadStateModel {
  base64: string;
}

@State<CropAndDownloadStateModel>({
  name: 'CropAndDownload',
  defaults: {
    base64: ''
  }
})
@Injectable()
export class GetBase64ForDownloadCropperState {

  constructor(private service: ImageRequestService) {

  }


  @Selector()
  public static getBase64(state: CropAndDownloadStateModel): string {
    return state.base64;
  }

  @Selector()
  public static getModel(state: CropAndDownloadStateModel): CropAndDownloadStateModel {
    return state;
  }

  @Action(GetImageAsByse64)
  getDataAsBytes(ctx: StateContext<CropAndDownloadStateModel>, action: GetImageAsByse64): Observable<CropAndDownloadStateModel> {
    return this.service
      .getImageBytes(action.imageId)
      .pipe(map(byteArray => {
        let blob = new Blob([byteArray],{type:'application/octet-binary'});
        let reader = new FileReader();
        let state = ctx.getState();
        reader.onload = (evt: any) => {
          ctx.patchState({
            ...state,
            base64: evt.target.result
          })
        };
        reader.readAsDataURL(blob);
        return GetBase64ForDownloadCropperState.getModel(state);
      }))
  }

  @Action(CropAndDownload)
  getData(ctx: StateContext<CropAndDownloadStateModel>, action: CropAndDownload): Observable<CropAndDownloadStateModel> {
    let state = ctx.getState();
    console.log(state);
    ctx.patchState({
      ...state,
      base64: action.base64
    })
    return of(ctx.getState());
  }
}
