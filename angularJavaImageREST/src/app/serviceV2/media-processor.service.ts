import { Injectable } from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaProcessorService {
  public $mediaGetter: Observable<MediaChange[]>;
  constructor(private media: MediaObserver) {
    this.$mediaGetter = media.asObservable();
    console.log(this.media);
  }
}
