import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ImageModel, SetImageWithTags} from "../shared/domain/imageModel/image.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeleteImageService {
  private static readonly DELETE_IMAGE_URL = environment.apiUrl + "image/delete";
  constructor(private http: HttpClient) { }

  public deleteImage(image: ImageModel): Observable<any> {
    return this.http.post(
      DeleteImageService.DELETE_IMAGE_URL,
      image,
      {observe: 'response'});
  }


}
