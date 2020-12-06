import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from "./shared/signup/signup.component";
import {ProfileComponent} from "./public/profile/profile.component";
import {ImageByTagComponent} from "./public/welcome/image-by-tag.component";
import {AuthSecurityGuard} from "./security/auth-security.guard";
import {LoginDialogWrapperComponent} from "./shared/dialog-wrapper/login-dialog-wrapper.component";
import {FileUploadComponent} from "./private/file-upload/file-upload.component";
import {FileUploadWrapperComponent} from "./private/file-upload-wrapper/file-upload-wrapper.component";
import {UserGalleryComponent} from "./shared/user-gallery/user-gallery.component";
import {EditProfileComponent} from "./private/edit-profile/edit-profile.component";
import {ImageDetailsComponent} from "./public/image-details/image-details.component";
import {ImageDetailsResolverService} from "./serviceV2/image-details-resolver.service";
import {ProfileResolverService} from "./public/profile/profile-resolver.service";
import {DownloadCropperComponent} from "./public/download-cropper/download-cropper.component";
import {CropAndDownloadResolverService} from "./serviceV2/crop-and-download-resolver.service";
import {StartupComponent} from "./public/startup/startup.component";
import {NotFoundPageComponent} from "./public/not-found-page/not-found-page.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginDialogWrapperComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'upload',
    component: FileUploadWrapperComponent,
    canActivate: [AuthSecurityGuard]
  },
  {
    path: 'welcome',
    component: StartupComponent
  },
  {
    path: 'image-by-tags',
    component: ImageByTagComponent
  },
  {
    path: 'gallery',
    component: UserGalleryComponent
  },
  {
    path: 'crop-download',
    component: DownloadCropperComponent,
    resolve : { image: CropAndDownloadResolverService }
  },
  {
    path: 'image',
    component: ImageDetailsComponent,
    resolve : { image: ImageDetailsResolverService }
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthSecurityGuard]
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
