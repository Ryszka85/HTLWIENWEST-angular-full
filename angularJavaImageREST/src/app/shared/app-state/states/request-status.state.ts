import {Action, Selector, State, StateContext} from "@ngxs/store";
import {RequestStatus} from "../../domain/request-status";
import {Injectable} from "@angular/core";
import {RequestMessageAction} from "../actions/request-message.action";
import {ImageModelList} from "../../domain/imageModel/image-model-list";
import {ImageModel} from "../../domain/imageModel/image.model";

@State<RequestStatus>({
  name: 'RequestStatus'
})
@Injectable()
export class RequestStatusState {

  @Selector()
  static getStatus(state: RequestStatus): RequestStatus {
    return state;
  }


  @Action(RequestMessageAction)
  getRequestStatus(ctx: StateContext<RequestStatus>, action: RequestMessageAction) {
    let state = ctx.getState();
    state.message = '';
    if (action.requestStatus !== null) {
      ctx.setState({
        message: action.requestStatus.message,
        status: action.requestStatus.status !== null ?
          action.requestStatus.status : null
      });
    }
  }
}
