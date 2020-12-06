import {ImageModel} from "../../domain/imageModel/image.model";
import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {DeleteImageService} from "../../../serviceV2/delete-image.service";
import {DeleteImage} from "../actions/image.action";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@State<ImageModel>({
  name: 'Delete'
})
@Injectable()
export class DeleteImageState {
    constructor(private deleteService: DeleteImageService) { }

    @Action(DeleteImage)
    public deleteUserImage(ctx: StateContext<ImageModel>, action: DeleteImage): Observable<any> {
      return this.deleteService
        .deleteImage(action.image)
        .pipe(map(response => {
          return response;
        }))
    }
}
