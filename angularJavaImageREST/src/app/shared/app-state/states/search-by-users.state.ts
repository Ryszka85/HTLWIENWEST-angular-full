import { Injectable } from '@angular/core';
import {SearchByUsersService} from "../../../serviceV2/search-by-users.service";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {QueryTagAction} from "../actions/query-tag-action";
import {TagQueryList} from "../../domain/tagModel/tag-query-list";
import {map, tap} from "rxjs/operators";
import {UserDetailsActions} from "../actions/user-details.action";
import SearchUsers = UserDetailsActions.SearchUsers;
import {BaseUserDetails} from "../../domain/userModel/user-details.model";
import {TagModel} from "../../domain/tagModel/tag-model";
import {SearchViewModel} from "../../../public/search-toolbar/search-view.model";
import {Observable} from "rxjs";

@State<UserSearchModel>({
  name: 'users'
})
@Injectable()
export class SearchByUsersState {

  constructor(public userSearchService: SearchByUsersService) { }

  @Selector()
  static getFetchedUsersAsOptions(state: UserSearchModel): SearchViewModel[] {
    console.log(state.data);
    return state.data.map(val => {
      return {
        value: val.username
      }
    });
  }


  @Selector()
  static getFetchedUsers(state: UserSearchModel): BaseUserDetails[] {
    console.log(state.data);
    return state.data;
  }

  @Action(SearchUsers)
  queryTags(ctx: StateContext<UserSearchModel>, action: SearchUsers): Observable<UserSearchModel> {
    return this.userSearchService
      .searchByEmail(action.searchTerm)
      .pipe(map(response => {
        console.log(response)
        const users = {data: response};
        const state = ctx.getState();
        ctx.patchState({
          ...state,
          data: response
        })
        return ctx.getState();
      }))
  }
}

export interface UserSearchModel {
  data: BaseUserDetails[];
}
