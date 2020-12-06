import {Observable} from "rxjs";
import {RequestStatus} from "../../domain/request-status";

export class RequestMessageAction {
  static readonly type = '[Request] Check request status';
  constructor(public requestStatus: RequestStatus) {}
}

