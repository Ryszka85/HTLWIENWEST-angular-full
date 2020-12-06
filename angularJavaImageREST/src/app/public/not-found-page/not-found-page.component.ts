import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {RequestMessageAction} from "../../shared/app-state/actions/request-message.action";
import {UserDetailsState} from "../../shared/app-state/states/User-details.state";
import {RequestStatusState} from "../../shared/app-state/states/request-status.state";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  @Select(RequestStatusState.getStatus) $requestStatus;
  constructor(private store: Store) { }

  ngOnInit(): void {
    /*this.store.dispatch(new RequestMessageAction(null));*/
  }

}
