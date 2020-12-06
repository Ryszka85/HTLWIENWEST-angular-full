import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {EMPTY, Observable, throwError} from "rxjs";
import {Store} from "@ngxs/store";
import {AuthenticationActions} from "../shared/app-state/actions/authentication-action";
import {catchError} from "rxjs/operators";
import {Navigate} from "@ngxs/router-plugin";
import {ResponseBody} from "../shared/domain/responseBody";
import {UserAuthenticationService} from "../serviceV2/user-authentication.service";
import {RequestMessageAction} from "../shared/app-state/actions/request-message.action";
import {Router} from "@angular/router";
import {DeviceDetectorService} from "ngx-device-detector";

@Injectable({
  providedIn: 'root'
})
export class CookieAuthInterceptorService implements HttpInterceptor{

  constructor(private store: Store, private router: Router,
              private deviceService: DeviceDetectorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isMobile = this.deviceService.isMobile() ? 1 : 0;
    const clonedReq = req.clone({withCredentials: true,
      headers: req.headers.set('isMobile', isMobile + ""  )});
    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', error.error.message);
        } else {
          // this.store.dispatch(new Navigate(['/login']))
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(error);
          console.log(error.message);
          console.log();
          if (error.url === 'http://localhost:8880/image-app/images/insert/') {
            console.log(error.error);
            return throwError(error);
          } else if (error.url === 'http://localhost:8880/image-app/users/signUp') {
            console.log(error.error);
            return throwError(error);
          } else if (error.url === UserAuthenticationService.USER_LOGIN ||
            error.url === UserAuthenticationService.GOOGLE_LOGIN) {
            this.store.dispatch(new RequestMessageAction({ message: error.error }))
          } else if (error.url.indexOf(UserAuthenticationService.USER_DETAILS) !== -1) {
            this.store.dispatch(new RequestMessageAction({ message: error.error }))
            /*this.router.navigate(['not-found']);*/
            return throwError(error);
          }
          console.log(error.statusText);
          if (error.error !== null && error.error.message !== null) {

            console.log(`Backend returned code ${error.status}, body was: ${error.error.message}`);
          }
        }

        // If you want to return a new response:
        //return of(new HttpResponse({body: [{name: "Default value..."}]}));

        // If you want to return the error on the upper level:
        //return throwError(error);

        // or just return nothing:
        return EMPTY;
      })
    );
  }
}
