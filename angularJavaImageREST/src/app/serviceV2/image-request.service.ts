import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, EMPTY, Observable, Subject} from "rxjs";
import {GetImagesByTagNameRequest, ImageModel, SetImageWithTags} from "../shared/domain/imageModel/image.model";
import {TagModel} from "../shared/domain/tagModel/tag-model";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {ResponseBody} from "../shared/domain/responseBody";
import {environment} from "../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {ResolutionsResponse} from "../shared/app-state/states/prepare-cropped-for-download.state";

@Injectable({
  providedIn: 'root'
})
export class ImageRequestService {
  // 178.112.217.30
  public $bSubject = new BehaviorSubject<ImageModel[]>(null);
  // private readonly SEARCH_URL: string = "http://localhost:8880/image-app/images/search/by/tag/";
  private readonly SEARCH_URL: string = environment.apiUrl + "library/search-by/tag/";

  public static readonly ALL_IMAGES_BY_USERID = environment.apiUrl + "library/search-by/user/";
  public static readonly ALL_IMAGES_BY_IMG_ID = environment.apiUrl + "library/search-by/image/";
  public static readonly RELATED_IMAGES_BY_TAG_IDS = environment.apiUrl + "library/search-by/tags/";
  public static readonly GET_IMAGE_BYTES_BY_ID_URL = environment.apiUrl + "library/search-by/image/raw/";
  public static readonly GET_API_RESOLTIONS = environment.apiUrl + "api/resolutions/";
  private readonly UPLOAD_PROFILE_IMAGE = environment.apiUrl + "user/set/profile-image/";
  private readonly UPLOAD_TAG = environment.apiUrl + "image/update/tags/";

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer) {
  }


  public getRelatedImagesByTagList(tags: TagModel[]): Observable<ImageModel[]> {
    console.log(tags)
    return this.http
      .post<ImageModel[]>(
        ImageRequestService.RELATED_IMAGES_BY_TAG_IDS,
        {tags: tags},
        {responseType: "json"});
  }


  public setTagToImage(data: SetImageWithTags): Observable<any> {
    console.log(data)
    return this.http.post(
      this.UPLOAD_TAG,
      data,
      {observe: 'response'});
  }


  public getResolutions(): Observable<ResolutionsResponse> {
    return this.http
      .get<ResolutionsResponse>(
        ImageRequestService.GET_API_RESOLTIONS,
        {responseType: "json"} );
  }

  public getImageBytes(imgId: string) {
    return this.http
      .get(
        ImageRequestService.GET_IMAGE_BYTES_BY_ID_URL + imgId,
        {responseType: "arraybuffer"}
        );
  }




  public getImagesByImgId(imgId: string): Observable<ImageModel> {
    return this.http.get<ImageModel>(
      ImageRequestService.ALL_IMAGES_BY_IMG_ID + imgId)
      .pipe(
        tap(x => console.log(x))
      );
  }


  public getImagesByUserId(userId: string): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>(
      ImageRequestService.ALL_IMAGES_BY_USERID + userId)
      .pipe(
        tap(x => console.log(x))
      );
  }

  public getImagesByTag(req: GetImagesByTagNameRequest, page: number): Observable<ImageModel[]> {
    return this.http.post<ImageModel[]>(
      this.SEARCH_URL,
      req, { observe: "response" })
      .pipe(
        map(resp => {
          console.log(resp.status)
          return resp.body;
        }),
        catchError((err) => {
          console.log(err.error.message);
          return EMPTY;
        }));
  }

}
