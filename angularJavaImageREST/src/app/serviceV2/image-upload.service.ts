import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {UploadImageModel} from "../shared/domain/imageModel/upload-image.model";
import {SetImageWithTags} from "../shared/domain/imageModel/image.model";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private readonly UPLOAD_IMAGE = environment.apiUrl + "images/insert/";
  private readonly VALIDATE_IMAGE = environment.apiUrl + "library/validate-image/";
  constructor(private http: HttpClient) { }

  public addToUserLibrary(uploadModel: UploadImageModel): Observable<any> {
    let request: FormData = new FormData();
    request.append("file", uploadModel.orgFile);
    request.append("userId", uploadModel.userId);
    request.append("urlReference", uploadModel.urlReference);
    request.append("isPublic", uploadModel.isPublic);
    request.append('galleryFile', uploadModel.galleryFile);
    request.append("downloadFile", uploadModel.downloadFile)
    console.log(uploadModel.urlReference);
    return this.http.post(
      this.UPLOAD_IMAGE, request,
      {observe: 'response'});
  }

  public validateImage(data: File): Observable<any> {
    let request: FormData = new FormData();
    request.append("file", data);
    return this.http.post(
      this.VALIDATE_IMAGE,
      request,
      {responseType: 'json'});
  }
}
