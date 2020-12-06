import {Action, Selector, State, StateContext} from "@ngxs/store";
import {ImagesByTagNameStateModel} from "../../domain/imageModel/ImagesByTagNameQuery";
import {Injectable} from "@angular/core";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {ImageModel} from "../../domain/imageModel/image.model";
import {ImagesByTagsAction, ImagesByUserIDAction, ImagesNextPageAction} from "../actions/image.action";
import {tap} from "rxjs/operators";
import {ImageModelList} from "../../domain/imageModel/image-model-list";

@State<ImageModelList>({
  name: 'ImagesByUserId'
})
@Injectable()
export class ImagesByUserIdState {
  constructor(private imageRequestService: ImageRequestService) {
  }

  @Selector()
  static getData(state: ImageModelList): ImageModel[] {
    return state.models;
  }

  @Action(ImagesByUserIDAction)
  searchByTags(ctx: StateContext<ImageModelList>, action: ImagesByUserIDAction) {
    const state = ctx.getState();
    return this.imageRequestService
      .getImagesByUserId(action.userId)
      .pipe(
        tap(res => {
          ctx.setState(
            {
              ...state,
              models: res
            }
          )
        })
      )
  }

}
