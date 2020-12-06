import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CropImageModel, ImageModel} from "../../domain/imageModel/image.model";
import {
  ImageFileDetails,
  ImageDownloadResponse,
  ImageDetailsViewModel
} from "../../domain/imageModel/image-file-details";
import {Injectable} from "@angular/core";
import {ImageDownloadService} from "../../../serviceV2/image-download.service";
import {CropGalleryViewImage, GetDownloadDetails} from "../actions/image.action";
import {map, switchMap, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@State<ImageDetailsViewModel>({
  name: 'downloadDetails',
})
@Injectable()
export class DownloadDetailsState {
  constructor(private downloadService: ImageDownloadService) { }

  @Selector()
  static getFile(state: ImageDetailsViewModel): ImageModel {
    return state.image;
  }

  @Selector()
  static getDetails(state: ImageDetailsViewModel): ImageFileDetails {
    return state.fileDetails;
  }

  @Action(GetDownloadDetails)
  public getDownloadDetails(ctx: StateContext<ImageFileDetails>, action: GetDownloadDetails): Observable<ImageFileDetails> {
    const state = ctx.getState();
    return this.downloadService
      .downloadImage(action.imageId, action.imageFileDetail)
      .pipe(map(res => {
        console.log(res);
        ctx.setState({
          ...state,
          downloadLink: res.downloadLink,
          width: res.width,
          height: res.height,
          size: res.size,
          contentType: res.contentType
        })
        return res;
      }))
  }
}
