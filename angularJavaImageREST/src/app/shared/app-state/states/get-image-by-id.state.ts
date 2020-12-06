import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CropImageModel, ImageModel, SelectedImage} from "../../domain/imageModel/image.model";
import {Injectable} from "@angular/core";
import {ImageDetailsViewModel, ImageFileDetails} from "../../domain/imageModel/image-file-details";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {GetImageByImageId} from "../actions/image.action";
import {TagModel} from "../../domain/tagModel/tag-model";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@State<ImageModel>({
  name: 'modelDetails',
})
@Injectable()
export class GetImageByIdState {
  constructor(private imgReqService: ImageRequestService) {
  }

  @Selector()
  public static getImageDetail(state: ImageModel): ImageModel {
    return state;
  }


  @Selector()
  public static getFileDetails(state: ImageModel): ImageFileDetails {
    return state.imageDetails[0];
  }

  @Selector()
  public static getRatioAsString(state: ImageModel): number {
    return state.imageDetails[0].width /state.imageDetails[0].height;
  }

  @Action(GetImageByImageId)
  getImageById(ctx: StateContext<ImageModel>, action: GetImageByImageId): Observable<ImageModel> {
    return this.imgReqService
      .getImagesByImgId(action.imageId)
      .pipe(map(req => {
          let state = ctx.getState();
        const newState = {
          imageId: req.imageId,
          link: req.link,
          name: req.name,
          profileImg: req.profileImg,
          linkReference: req.linkReference,
          isPublic: req.isPublic,
          tags: req.tags,
          user: req.user,
          downloaded: req.downloaded,
          liked: req.liked,
          imageDetails: req.imageDetails
        };
        ctx.setState(newState)
        return newState;
        })
      )
  }
}
