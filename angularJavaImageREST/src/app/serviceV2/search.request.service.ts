import {BehaviorSubject, Observable} from "rxjs";
import {TagModel} from "../shared/domain/tagModel/tag-model";
import {distinctUntilChanged, switchMap, throttleTime} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService<T> {
  private readonly SEARCH_URL;

  constructor(private http: HttpClient) { }

  public search(searchTerm$: Observable<string>, url: string): Observable<T[]> {
    return searchTerm$.pipe(
      distinctUntilChanged(),
      throttleTime(2000),
      switchMap(searchTerm => this.getSearchResult(searchTerm, url))
    );
  }

  private getSearchResult(term: string, url: string): Observable<T[]> {
    return SearchRequestService.validateTerm(term) ?
      this.sendSearchRequest(term, url) :
      new BehaviorSubject([]);
  }

  private sendSearchRequest(terms: string, url: string): Observable<T[]> {
    return this.http.get<T[]>(url + terms);
  }

  private static validateTerm(term: string): boolean {
    return term.length > 0;
  }
}
