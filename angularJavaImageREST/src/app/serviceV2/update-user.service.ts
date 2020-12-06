import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {BaseUserDetails} from "../shared/domain/userModel/user-details.model";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private readonly UPLOAD_PROFILE_IMAGE = environment.apiUrl + "user/set/profile-image/";
  private readonly ADD_USER_LIKE = environment.apiUrl + "user/set/likes/";
  private readonly CHANGE_USER_EMAIL = environment.apiUrl + "user/set/email/";

  constructor(private http: HttpClient) {
  }

  public setUserProfile(userId: string, image: FormData): Observable<any> {
    return this.http.post(
      this.UPLOAD_PROFILE_IMAGE + userId, image,
      {observe: 'response'});
  }

  public addUserLike(imageId: string, userId: string): Observable<any> {
    return this.http.post(
      this.ADD_USER_LIKE + imageId + "/" + userId,
      {observe: 'response'});
  }

  public changeUserEmail(user: BaseUserDetails): Observable<any> {
    console.log(user)
    return this.http.post(
      this.CHANGE_USER_EMAIL,
      {
        userId: user.userId,
        email: user.email,
        password: user.password,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImgPath: user.profileImgPath
      },
      {observe: 'response', responseType: "json"});
  }
}
