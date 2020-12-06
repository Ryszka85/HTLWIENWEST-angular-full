import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ImageModel} from "../shared/domain/imageModel/image.model";
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {GetImageByIdState} from "../shared/app-state/states/get-image-by-id.state";
import {GetImageByImageId, GetRelatedImagesByTagIDs} from "../shared/app-state/actions/image.action";
import {switchMap, tap} from "rxjs/operators";
import {AuthenticationActions} from "../shared/app-state/actions/authentication-action";

@Injectable({
  providedIn: 'root'
})
export class ImageDetailsResolverService implements Resolve<ImageModel> {

  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ImageModel> | ImageModel {
    return this.store
      .dispatch(new GetImageByImageId(route.params.imageId))
      .pipe(switchMap(state =>
          this.store.dispatch(new GetRelatedImagesByTagIDs(state.modelDetails.tags)))
      )
      .pipe(tap(val => {
        this.store.dispatch(new AuthenticationActions.IsLoggedIn());
        console.log("ImageDetailResolver was called with value : " + val);
      }));
  }
}
