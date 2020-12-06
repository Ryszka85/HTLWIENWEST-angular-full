import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap, tap, throttleTime} from "rxjs/operators"
import {HttpClient} from "@angular/common/http";
import {ImageModel} from "../shared/domain/imageModel/image.model";
import {DistinctSubscriber} from "rxjs/internal/operators/distinct";
import {TagModel} from "../shared/domain/tagModel/tag-model";
import {SearchRequestService} from "./search.request.service";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class TagRequestService {
  private readonly secr = "user/HJeDHE2XBFwgJ81pzuLNj3MshJqXbU/images/all";
  constructor(private http: HttpClient,
              private searchReqService: SearchRequestService<TagModel>) { }
  //178.112.217.30
  private readonly SEARCH_URL: string = environment.apiUrl + "query/searchByTag/";
  private static readonly REQUEST_DELAY: number = 2000;

  public searchByTagName(searchTerm$: Observable<string>): Observable<TagModel[]> {
    return this.searchReqService.search(searchTerm$, this.SEARCH_URL)
  }

}
