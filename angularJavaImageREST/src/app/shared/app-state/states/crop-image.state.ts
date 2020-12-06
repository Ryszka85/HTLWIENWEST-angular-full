import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TagQueryList} from "../../domain/tagModel/tag-query-list";
import {Injectable} from "@angular/core";
import {TagRequestService} from "../../../serviceV2/tag-request.service";
import {TagModel} from "../../domain/tagModel/tag-model";
import {QueryTagAction} from "../actions/query-tag-action";
import {tap} from "rxjs/operators";
import {CropImageModel, ImageModel} from "../../domain/imageModel/image.model";
import {CropDownloadViewImage, CropGalleryViewImage} from "../actions/image.action";
import {ImagesByTagNameStateModel} from "../../domain/imageModel/ImagesByTagNameQuery";

@State<CropImageModel>({
  name: 'cropImage',
  defaults: {
    data: ''
  }
})
@Injectable()
export class CropImageState {
  constructor() {
  }


  @Selector()
  static getCroppedDownloadImage(state: CropImageModel): string {
    return state.downloadViewFile;
  }

  @Selector()
  static getData(state: CropImageModel): string {
    return state.data;
  }

  @Action(CropGalleryViewImage)
  cropImage(ctx: StateContext<CropImageModel>, action: CropGalleryViewImage) {
    let state = ctx.getState();
    console.log(state);
    ctx.patchState({
      ...state,
      data: action.data
    })
  }

  @Action(CropDownloadViewImage)
  cropDownloadViewImage(ctx: StateContext<CropImageModel>, action: CropDownloadViewImage) {
    let state = ctx.getState();
    console.log(state);
    ctx.patchState({
      ...state,
      downloadViewFile: action.data
    })
  }
}
