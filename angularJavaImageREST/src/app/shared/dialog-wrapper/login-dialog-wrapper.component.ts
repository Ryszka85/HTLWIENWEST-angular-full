import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SignupComponent} from "../signup/signup.component";
import {LoginComponent} from "../login/login.component";
import {Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationActions} from "../app-state/actions/authentication-action";
import LoggedUserDetails = AuthenticationActions.LoggedUserDetails;

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './login-dialog-wrapper.component.html',
  styleUrls: ['./login-dialog-wrapper.component.scss']
})
export class LoginDialogWrapperComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private store: Store) { }

  ngOnInit(): void {
    const ref = new MatDialogConfig();
    this.dialog.open(LoginComponent,
      {
        width: '750px',
        height: '400px',
        disableClose: true,
        autoFocus: false
      });
  }

}
