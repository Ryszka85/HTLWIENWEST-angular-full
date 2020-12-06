import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {GetBase64ForDownloadCropperState, CropAndDownloadStateModel} from "../shared/app-state/states/get-base64-for-downloadCropper.state";
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {ImageRequestService} from "./image-request.service";
import {CropAndDownload, GetImageByImageId} from "../shared/app-state/actions/image.action";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CropAndDownloadResolverService implements Resolve<CropAndDownloadStateModel> {

  constructor(private store: Store,
              private service: ImageRequestService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CropAndDownloadStateModel> | Promise<CropAndDownloadStateModel> | CropAndDownloadStateModel {
    this.store
      .dispatch(new GetImageByImageId(route.params.imageId))
    return this.service
      .getImageBytes(route.params.imageId)
      .pipe(map(byteArray => {
        let blob = new Blob([byteArray],{type:'application/octet-binary'});
        let reader = new FileReader();
        reader.onload = (evt: any) => {
           this.store
            .dispatch(new CropAndDownload(evt.target.result))
        };
        // this.dialog.open(DownloadCropperComponent,{
        //   data: { img: evt.target.result,
        //     width: imageDetail.width,
        //     height: imageDetail.height, viewName: 'Download' }
        // })
        reader.readAsDataURL(blob);
        return this.store.selectSnapshot(GetBase64ForDownloadCropperState.getModel)
      }))
  }
}
