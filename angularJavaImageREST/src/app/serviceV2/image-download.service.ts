import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DownloadImageByIndividualResolution, ImageModel} from "../shared/domain/imageModel/image.model";
import {finalize, map, tap} from "rxjs/operators";
import {ImageFileDetails, ImageDownloadResponse} from "../shared/domain/imageModel/image-file-details";
import {CroppedDownloadRequest} from "../shared/domain/http/req/CroppedDownloadRequest";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";
import {BlobToBase64Pipe} from "../shared/util/blob-to-base64-pipe";

@Injectable({
  providedIn: 'root'
})
export class ImageDownloadService {
  constructor(private http: HttpClient,
              private base64Pipe: BlobToBase64Pipe) { }

  public static readonly DOWNLOAD_BY_API_RESOLUTION_URL = environment.apiUrl + "library/download/file/";
  public static readonly DOWNLOAD_BY_CROPPED_RESOLUTION_URL = environment.apiUrl + "library/download/cropped/file/";
  public static readonly DOWNLOAD_BY_INDIVIDUAL_RESOLUTION_URL = environment.apiUrl + "library/download/resized/file";


  public downloadImage(imageId: string, imageFileDetail: ImageFileDetails): Observable<ImageFileDetails> {
    return this.http
      .post<ImageFileDetails>(
        ImageDownloadService.DOWNLOAD_BY_API_RESOLUTION_URL + imageId,
        imageFileDetail);
  }


  public downloadIndividualImage(croppedDetails: CroppedDownloadRequest |
    DownloadImageByIndividualResolution, wasCropped: boolean): Observable<string> {
    console.log("seas");
    const url = wasCropped ? ImageDownloadService.DOWNLOAD_BY_CROPPED_RESOLUTION_URL :
      ImageDownloadService.DOWNLOAD_BY_INDIVIDUAL_RESOLUTION_URL;
    console.log(url);
    return this.base64Pipe.getBase64(this.http
       .post(
         url,
         croppedDetails, { responseType: 'arraybuffer' })
    );
  }


}
