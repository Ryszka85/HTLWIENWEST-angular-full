import {Action, Selector, State, StateContext} from "@ngxs/store";
import {ImageModel} from "../../domain/imageModel/image.model";
import {Injectable} from "@angular/core";
import {ImageRequestService} from "../../../serviceV2/image-request.service";
import {UserDetailsActions} from "../actions/user-details.action";
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {GetRelatedImagesByTagIDs} from "../actions/image.action";

@State<RelatedImagesModel>({
  name: 'RelatedImages'
})
@Injectable()
export class RelatedImagesState {
  constructor(private imageReqService: ImageRequestService) {
  }

  @Selector()
  static getRelatedImages(state: RelatedImagesModel): ImageModel[] {
    return state.data;
  }

  @Action(GetRelatedImagesByTagIDs)
  userDetails(ctx: StateContext<RelatedImagesModel>,
              action: GetRelatedImagesByTagIDs): Observable<ImageModel[]> {
    return this.imageReqService.getRelatedImagesByTagList(action.tagIds)
      .pipe(
        map(response => {
          console.log(response)
          let state = ctx.getState();
          state.data = response;
          ctx.setState({
            data: response
          })
          return response;
        })
      )
  }

}

export interface RelatedImagesModel {
  data: ImageModel[]
}
