import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Store} from "@ngxs/store";
import {CropAndDownload} from "../app-state/actions/image.action";
import {
  CropAndDownloadStateModel,
  GetBase64ForDownloadCropperState
} from "../app-state/states/get-base64-for-downloadCropper.state";
import * as FileSaver from "file-saver";
import {GetImageByIdState} from "../app-state/states/get-image-by-id.state";

@Injectable({
  providedIn: 'root'
})
export class BlobToBase64Pipe {
  constructor(private store: Store) { }


  public getBase64(source: Observable<ArrayBuffer>): Observable<string> {
    return source.pipe(map(byteArray => {
      let blob = new Blob([byteArray],{type:'application/octet-binary'});
      FileSaver.saveAs(blob, this.store.selectSnapshot(GetImageByIdState.getImageDetail).name);
      return this.store.selectSnapshot(GetBase64ForDownloadCropperState.getModel).base64
    }))
  }

}

/*function base64Pipe() {
  return function<T> (source: Observable<ArrayBuffer>): Observable<string> {
    return source.pipe(map())
  }
}*/
