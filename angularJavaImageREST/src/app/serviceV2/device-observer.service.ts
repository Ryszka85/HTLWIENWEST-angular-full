import { Injectable } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {flatMap, map, mergeMap, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";


export enum Device {
  MOBILE = 'xs',
  DESKTOP = 'lg',
  DESKTOP_XL = 'xl',
  TABLET = 'sm',
}

@Injectable({
  providedIn: 'root'
})
export class DeviceObserverService {
  constructor(private media: MediaObserver) { }

  public getActiveDevice(): Observable<string> {
    return this.media.asObservable()
      .pipe(map(media => {
        return media[0].mqAlias;
    }));
  }

}

