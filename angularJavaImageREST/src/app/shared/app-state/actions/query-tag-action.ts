import {Observable} from "rxjs";

export class QueryTagAction {
  static readonly type = '[Tag] Query tags';
  constructor(public searchTerm: Observable<string>) {}
}
