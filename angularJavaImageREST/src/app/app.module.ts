import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkScrollableModule, ScrollingModule} from '@angular/cdk/scrolling';
import { SearchToolbarComponent } from './public/search-toolbar/search.toolbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ImageByTagComponent } from './public/welcome/image-by-tag.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {ImagesByTagState} from "./shared/app-state/states/images-by-tag-state";
import {SearchByTagState} from "./shared/app-state/states/search-by-tag.state";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import { ImageContentComponent } from './shared/image-content/image-content.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { SignupComponent } from './shared/signup/signup.component';
import {CookieAuthInterceptorService} from "./security/cookie-auth-interceptor.service";
import {LoginStateModel} from "./shared/app-state/states/login.state.model";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import { LoginComponent } from './shared/login/login.component';
import {AddressValidationState} from "./shared/app-state/states/address.validation.state";
import {MatSelectModule} from '@angular/material/select';
import {SignupState} from "./shared/app-state/states/signup.state";
import { ProfileComponent } from './public/profile/profile.component';
import { LoginDialogWrapperComponent } from './shared/dialog-wrapper/login-dialog-wrapper.component';
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {UserDetailsState} from "./shared/app-state/states/User-details.state";
import {MatTabsModule} from '@angular/material/tabs';
import {ImagesByUserIdState} from "./shared/app-state/states/images-by-user-id.state";
import { FileUploadComponent } from './private/file-upload/file-upload.component';
import {NgxDropzoneModule} from "ngx-dropzone";
import { FileUploadWrapperComponent } from './private/file-upload-wrapper/file-upload-wrapper.component';
import {UploadImageState} from "./shared/app-state/states/upload-image.state";
import { UserGalleryComponent } from './shared/user-gallery/user-gallery.component';
import { ImageDetailViewComponent } from './shared/image-detail-view/image-detail-view.component';
import {SelectImageState} from "./shared/app-state/states/select-image.state";
import { EditProfileComponent } from './private/edit-profile/edit-profile.component';
import {AuthenticationActions} from "./shared/app-state/actions/authentication-action";
import LoggedUserDetails = AuthenticationActions.LoggedUserDetails;
import {LoggedUserDetailsState} from "./shared/app-state/states/logged-user-details.state";
import { AddTagsDialogComponent } from './private/add-tags-dialog/add-tags-dialog.component';
import { MatChipsModule } from "@angular/material/chips";
import {UpdateUserProfileImageState} from "./shared/app-state/states/update-user-profile-image.state";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatRadioModule} from '@angular/material/radio';
import {environment} from "../environments/environment";
import { ChangeImageDetailsDialogComponent } from './private/change-image-details-dialog/change-image-details-dialog.component';
import {FileSaverModule} from "ngx-filesaver";
import {DeleteImage, GetRelatedImagesByTagIDs} from "./shared/app-state/actions/image.action";
import {DeleteImageState} from "./shared/app-state/states/delete-image.state";
import { ImageCropperComponent } from './private/image-cropper/image-cropper.component';
import {CropImageState} from "./shared/app-state/states/crop-image.state";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ImageDetailsComponent } from './public/image-details/image-details.component';
import {DownloadDetailsState} from "./shared/app-state/states/download-details.state";
import {GetImageByIdState} from "./shared/app-state/states/get-image-by-id.state";
import {RelatedImagesState} from "./shared/app-state/states/related-images.state";
import {SearchByUsersState} from "./shared/app-state/states/search-by-users.state";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UploadImageDialogComponent } from './private/upload-image-dialog/upload-image-dialog.component';
import { DownloadCropperComponent } from './public/download-cropper/download-cropper.component';
import {GetBase64ForDownloadCropperState} from "./shared/app-state/states/get-base64-for-downloadCropper.state";
import {PrepareCroppedForDownloadState} from "./shared/app-state/states/prepare-cropped-for-download.state";
import { DownloadCroppedImageDialogComponent } from './public/download-cropped-image-dialog/download-cropped-image-dialog.component';
import { StartupComponent } from './public/startup/startup.component';
import { SetResolutionDownloadDialogComponent } from './public/set-resolution-download-dialog/set-resolution-download-dialog.component';
import {RequestStatusState} from "./shared/app-state/states/request-status.state";
import { NotFoundPageComponent } from './public/not-found-page/not-found-page.component';
import { BootstrapPlaygroundComponent } from './public/bootstrap-playground/bootstrap-playground.component';
import {FlexModule} from "@angular/flex-layout";
import { ChangeEmailThirdPartyComponent } from './private/change-email-third-party/change-email-third-party.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchToolbarComponent,
    ImageByTagComponent,
    ImageContentComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    LoginDialogWrapperComponent,
    FileUploadComponent,
    FileUploadWrapperComponent,
    UserGalleryComponent,
    ImageDetailViewComponent,
    EditProfileComponent,
    AddTagsDialogComponent,
    ChangeImageDetailsDialogComponent,
    ImageCropperComponent,
    ImageDetailsComponent,
    UploadImageDialogComponent,
    DownloadCropperComponent,
    DownloadCroppedImageDialogComponent,
    StartupComponent,
    SetResolutionDownloadDialogComponent,
    NotFoundPageComponent,
    BootstrapPlaygroundComponent,
    ChangeEmailThirdPartyComponent
  ],
    imports: [
        BrowserModule,
        FileSaverModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatExpansionModule,
        HammerModule,
        ImageCropperModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatRadioModule,
        MatChipsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatCardModule,
        MatTabsModule,
        VirtualScrollerModule,
        MatMenuModule,
        MatSelectModule,
        MatNativeDateModule,
        MatDialogModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ScrollingModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        NgxDropzoneModule,
        FormsModule,
        HttpClientModule,
        SocialLoginModule,
        NgxsModule.forRoot([
            ImagesByTagState,
            SearchByTagState,
            LoginStateModel,
            AddressValidationState,
            RelatedImagesState,
            GetImageByIdState,
            SignupState,
            UserDetailsState,
            DownloadDetailsState,
            SearchByUsersState,
            ImagesByUserIdState,
            UploadImageState,
            SelectImageState,
            LoggedUserDetailsState,
            UpdateUserProfileImageState,
            DeleteImageState,
            CropImageState,
            GetBase64ForDownloadCropperState,
            PrepareCroppedForDownloadState,
            RequestStatusState
        ]),
        NgxsLoggerPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        MatDatepickerModule,
        MatChipsModule,
        FlexModule
    ],
  exports: [
    MatAutocompleteModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CookieAuthInterceptorService,
      multi: true
    },
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.google_id
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
