import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TagQueryList} from "../../domain/tagModel/tag-query-list";
import {Injectable} from "@angular/core";
import {QueryTagAction} from "../actions/query-tag-action";
import {TagRequestService} from "../../../serviceV2/tag-request.service";
import {tap} from "rxjs/operators";
import {TagModel} from "../../domain/tagModel/tag-model";
import {SearchViewModel} from "../../../public/search-toolbar/search-view.model";

@State<TagQueryList>({
  name: 'tag'
})
@Injectable()
export class SearchByTagState {
  constructor(public tagService: TagRequestService) {
  }

  @Selector()
  static tags(state: TagQueryList): TagQueryList {
    return state;
  }

  @Selector()
  static getFetchedTagListAsOption(state: TagQueryList): SearchViewModel[] {
    return state.result
      .map(val => {
        return {
          value: val.tag
        }
      });
  }

  @Selector()
  static getFetchedTagList(state: TagQueryList): TagModel[] {
    return state.result;
  }

  @Action(QueryTagAction)
  queryTags(ctx: StateContext<TagQueryList>, action: QueryTagAction) {
    return this.tagService
      .searchByTagName(action.searchTerm)
      .pipe(
        tap(res => {
          const state = ctx.getState();
          //ctx.patchState({result: res})
          ctx.setState({
            ...state,
            result: res
          })
        })
      )
  }
}
