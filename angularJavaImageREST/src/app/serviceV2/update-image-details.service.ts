import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ImageModel} from "../shared/domain/imageModel/image.model";

@Injectable({
  providedIn: 'root'
})
export class UpdateImageDetailsService {
  private readonly UPDATE_IMAGE_DETAILS_URL = environment.apiUrl + "image/update/details";
  constructor(private http: HttpClient) { }

  public changeImageDetails(imageToUpdate: ImageModel): Observable<any> {
    console.log(imageToUpdate);
    return this.http.post(
      this.UPDATE_IMAGE_DETAILS_URL,
      imageToUpdate,
      {observe: 'response'});
  }
}
