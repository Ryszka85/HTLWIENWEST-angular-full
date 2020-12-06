import {State} from "@ngxs/store";
import {TagQueryList} from "../shared/domain/tagModel/tag-query-list";
import {Injectable} from "@angular/core";
import {BaseUserDetails} from "../shared/domain/userModel/user-details.model";
import {HttpClient} from "@angular/common/http";
import {SearchRequestService} from "./search.request.service";
import {TagModel} from "../shared/domain/tagModel/tag-model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SearchByUsersService {
  private readonly SEARCH_URL = environment.apiUrl + "query/searchUsers/";
  private readonly SEARCH_BY_U_NAME_URL = environment.apiUrl + "query/searchByUserName/";
  constructor(private http: HttpClient,
              private searchReqService: SearchRequestService<BaseUserDetails>) { }

  public searchByEmail(searchTerm$: Observable<string>): Observable<BaseUserDetails[]> {
    return this.searchReqService.search(searchTerm$, this.SEARCH_URL);
  }

  public searchByUserName(searchTerm$: Observable<string>): Observable<BaseUserDetails[]> {
    return this.searchReqService.search(searchTerm$, this.SEARCH_BY_U_NAME_URL);
  }
}
