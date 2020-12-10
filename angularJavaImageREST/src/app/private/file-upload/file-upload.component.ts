import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {NgxDropzoneChangeEvent} from "ngx-dropzone";
import {Select, Store} from "@ngxs/store";
import {
  AsignBase64ToOriginalImage,
  CropDownloadViewImage,
  CropGalleryViewImage,
  UploadImage
} from "../../shared/app-state/actions/image.action";
import {LoginStateModel} from "../../shared/app-state/states/login.state.model";
import {switchMap, tap} from "rxjs/operators";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Navigate} from "@ngxs/router-plugin";
import {Location} from '@angular/common';
import {LoggedInUserModel} from "../../shared/domain/userModel/UserLoginModel";
import {BaseUserDetails} from "../../shared/domain/userModel/user-details.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FILE} from "dns";
import {AuthenticationActions} from "../../shared/app-state/actions/authentication-action";
import LoggedUserDetails = AuthenticationActions.LoggedUserDetails;
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatRadioChange} from "@angular/material/radio";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UploadImageModel} from "../../shared/domain/imageModel/upload-image.model";
import {Dimensions, ImageCroppedEvent} from "ngx-image-cropper";
import {ImageCropperComponent} from "../image-cropper/image-cropper.component";
import {CropImageState} from "../../shared/app-state/states/crop-image.state";
import {Base64ToBlobConverter} from "../../shared/util/Base64ToBlobConverter";
import {Subject} from "rxjs";
import {ImageUploadService} from "../../serviceV2/image-upload.service";
import {MediaProcessorService} from "../../serviceV2/media-processor.service";
import {Device, DeviceObserverService} from "../../serviceV2/device-observer.service";
import {MediaObserver} from "@angular/flex-layout";
import {PassDataToDialogAction} from "../../shared/app-state/actions/pass-data-to-dialog.action";


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  firstFormGroup: FormGroup;
  isLinear = true;
  uploadSuccess: boolean = false;
  files: File[] = [];
  spinner = new Subject<boolean>();
  isValidating: boolean = false;
  imageChangedEvent: any;
  croppedGalleryImage: any;
  croppedDownloadViewImage: any;
  showCropper = false;
  foo;
  @Output()
  change: EventEmitter<MatRadioChange>
  public formGroup;
  public isPublic: boolean = true;
  fooControl = new FormControl(false);
  public imageUrlReference = new FormControl('');
  @Select(LoginStateModel.loggedInUser) $loggedUser;
  @Select(CropImageState.getData) $imageData;
  @Select(CropImageState.getCroppedDownloadImage) $croppedDownloadViewImage;
  @Select(CropImageState.getGalleryFile) $galleryFile;


  isValidToUpload: boolean = false;
  canvasRotation: any;
  public displayCroppedImage: boolean = false;

  originalFileDimensions = {
    width: 0,
    height: 0
  };


  public device: string;

  constructor(private store: Store,
              private dialogRef: MatDialogRef<FileUploadComponent>,
              private router: Router,
              private location: Location,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public userId: string,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private dialogRef2: MatDialogRef<ImageCropperComponent>,
              public media: MediaProcessorService,
              private media2: MediaObserver,
              private  uploadService: ImageUploadService,
              public deviceObserverService: DeviceObserverService) {
    this.formGroup = this.formBuilder
      .group({url: this.imageUrlReference})
    this.foo = this.formBuilder
      .group({isPublic: this.fooControl})

    this.firstFormGroup = this.formBuilder.group({
      uploadCtr: ['', Validators.required]
    })

    /*this.media2.asObservable()
      .subscribe(value => {
        console.log(value[0].mqAlias);
      })*/

  }

  ngOnInit(): void {
    this.deviceObserverService.getActiveDevice().subscribe(value => this.device = value);
  }

  public changeStuff(mrChange: MatRadioChange): void {
    console.log(mrChange.value);
    this.isPublic = mrChange.value === '1';
  }

  public validate(value: string): boolean {
    const regExp = new RegExp('[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(.*)[.]{1}[a-zA-Z]{2,}');
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

  public urlReferenceValidator(): void {
    const value = this.formGroup.get('url').value;
    const regExp = new RegExp("[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(.*)[.]{1}[a-zA-Z]{2,}");
    if (regExp.test(value)) {
      this.formGroup.controls['url']
        .setErrors(null)
    } else {
      this.formGroup.controls['url']
        .setErrors({'error': true})
    }
  }

  onSelect($event: NgxDropzoneChangeEvent): void {
    this.isValidating = true;
    const typeIndex = $event.addedFiles[0].name.lastIndexOf('.');
    const type = $event.addedFiles[0].name.substr(typeIndex + 1);
    console.log(type);
    if ((type === 'jpg' || type === 'png' || type === 'jfif')) {
      let request = new FormData();
      request.append('file', $event.addedFiles[0]);


      this.uploadService.validateImage($event.addedFiles[0])
        .subscribe(value => {
          const message = value.message;
          console.log(value.status);
          if (value.status === 200) {
            this.originalFileDimensions.width = value.width;
            this.originalFileDimensions.height = value.height;
            this.files.push(...$event.addedFiles);
            this.isValidToUpload = true;
            this.isLinear = true;
            this.uploadSuccess = true;
            this.isValidating = false;

            // getting uploaded file and passing it to crop image
            const reader = new FileReader();
            reader.onload = (e: any) => {
              const base64Temp = e.target.result;
              this.croppedGalleryImage = base64Temp;
              this.croppedDownloadViewImage = base64Temp;
              this.store.dispatch(new AsignBase64ToOriginalImage(base64Temp));
              this.store.dispatch(new CropDownloadViewImage(this.croppedGalleryImage));
              this.store.dispatch(new CropGalleryViewImage(this.croppedDownloadViewImage))
                .subscribe(value => {
                  // open imageCropper dialog(component) to let user decide
                  // which part of th uploaded image should be displayed
                  // this.dialog.open(ImageCropperComponent,{
                  //   data: e.target.result,
                  //   height: '1200px',
                  //   width: '1400px'
                  // })
                });
            };
            reader.readAsDataURL($event.addedFiles[0]);
          } else {
            this.onRemove($event.addedFiles[0]);
            this.isValidToUpload = false;
            this.isValidating = false;
            console.log(this.isValidToUpload)
            this.snackBar.open(
              message,
              "Validation was unsuccessful",
              {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "top"
              }
            );
          }
        })
    }

  }

  public cropImageForDownloadView(): void {
    const isMobile = this.device === Device.MOBILE;
    const width = isMobile ? 250 : 1200;
    const height = isMobile ? width / 1.7910 : 670;

    this.store.dispatch(new PassDataToDialogAction(
      {
        imgData: this.store.selectSnapshot(CropImageState.getData),
        resizeWidth: width,
        resizeHeight: height,
        viewName: 'Download',
        imgDimensions: {
          originalWidth: this.originalFileDimensions.width, originalHeight: this.originalFileDimensions.height
        }
      }
    ));

    if (this.device === Device.TABLET || this.device == Device.MOBILE) {
      this.dialog.open(ImageCropperComponent, {
        data: {
          img: this.store.selectSnapshot(CropImageState.getData),
          width,
          height, viewName: 'Download', imgDimensions: this.originalFileDimensions
        },
        height: '1000px',
        width: '100vw',
        maxWidth: '100vw'
      });
    } else {
      this.dialog.open(ImageCropperComponent, {
        data: {
          img: this.store.selectSnapshot(CropImageState.getData),
          width,
          height, viewName: 'Download', imgDimensions: this.originalFileDimensions
        },
        height: '1000px'
      });
    }

  }

  public cropImageForGallery(): void {

    const isMobile = this.device === Device.MOBILE;
    const isTablet = this.device === Device.TABLET;
    const width = isMobile ? 150 : 500;
    const height = isMobile ? width / 1.087 : 460;
    this.store.dispatch(new PassDataToDialogAction(
      {
        imgData: this.store.selectSnapshot(CropImageState.getData),
        resizeWidth: width,
        resizeHeight: height,
        viewName: 'Gallery',
        imgDimensions: {
          originalWidth: this.originalFileDimensions.width, originalHeight: this.originalFileDimensions.height
        }
      }
    ));


    if (this.device === Device.TABLET || this.device == Device.MOBILE) {
      this.dialog.open(ImageCropperComponent, {
        data: {
          img: this.store.selectSnapshot(CropImageState.getData),
          width,
          height,
          viewName: 'Gallery',
          imgDimensions: this.originalFileDimensions
        },
        height: '1000px',
        width: '100vw',
        maxWidth: '100vw'
      });
    } else {
      this.dialog.open(ImageCropperComponent, {
        data: {
          img: this.store.selectSnapshot(CropImageState.getData),
          width,
          height,
          viewName: 'Gallery',
          imgDimensions: this.originalFileDimensions
        },
        height: '1000px'
      })
    }
    this.displayCroppedImage = true;
    // this.store.dispatch(new CropGalleryViewImage(this.croppedGalleryImage))
    //   .subscribe(value => console.log(value));

  }

  onRemove(f: any): void {
    this.files.splice(this.files.indexOf(f), 1);
    this.isValidToUpload = false;
    this.store.dispatch(new CropGalleryViewImage(null))
  }

  upload(): void {
    this.spinner.next(true);
    const loggedInUserModel: BaseUserDetails =
      this.store.selectSnapshot(LoginStateModel.loggedInUser);
    let request = new FormData();
    request.append('file', this.files[0]);
    const isP = this.isPublic ? 'true' : 'false';


    const galleryBase64 = this.store.selectSnapshot(CropImageState.getGalleryFile);
    //cropped image to file(base64 to file)
    const imageBlob = Base64ToBlobConverter.dataURItoBlob(galleryBase64.substr(galleryBase64.lastIndexOf(',') + 1));

    const imageFile = new File([imageBlob],
      "cropped-" + this.files[0].name,
      {type: 'image/jpeg'});


    const downloadBase64 = this.store.selectSnapshot(CropImageState.getCroppedDownloadImage);
    const downloadBlob = Base64ToBlobConverter.dataURItoBlob(downloadBase64.substr(downloadBase64.lastIndexOf(',') + 1));
    const downloadImageFile = new File([downloadBlob],
      "cropped-" + this.files[0].name,
      {type: 'image/jpeg'});

    // setting response object with needed values
    const uploadModel: UploadImageModel = {
      userId: loggedInUserModel.userId,
      orgFile: this.files[0],
      isPublic: isP,
      urlReference: this.validate(this.imageUrlReference.value) === true ?
        this.imageUrlReference.value : null,
      file: request,
      galleryFile: imageFile,
      downloadFile: downloadImageFile
    }

    // sending request
    this.store.dispatch(new UploadImage(uploadModel))
      .subscribe(value1 => {
        request = null;
        this.files = [];
        this.isValidToUpload = false;
        if (value1.Upload.status) {
          this.snackBar.open(
            "File uploaded successfully",
            "File uploaded",
            {
              duration: 3000,
              horizontalPosition: "center",
              verticalPosition: "top"
            }
          );
          this.spinner.next(false);
          this.store.dispatch(new CropGalleryViewImage(null))
          this.store.dispatch(new CropDownloadViewImage(null))
          this.store.dispatch(new AsignBase64ToOriginalImage(null))
        }
        // window.location.reload();
      }, error => {
        this.spinner.next(false);
        this.snackBar.open(
          error.error,
          "File uploaded error",
          {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: ['uploadError']
          }
        );
        request = null;
        this.files = [];
        this.isValidToUpload = false;
        this.imageUrlReference = null;
        this.store.dispatch(new CropGalleryViewImage(null))
      });
  }

  close(): void {
    const userId: string = this.store.selectSnapshot(LoginStateModel.loggedUserId);
    // this.router.navigate(['profile'])
    this.store.dispatch(new Navigate(['profile', {userId: userId}]))
    this.store.dispatch(new CropGalleryViewImage(null));
    this.dialogRef.close();
  }

  imageCropped($event: ImageCroppedEvent) {
    console.log("dfghdfjkgh");
    this.croppedGalleryImage = $event.base64;
  }

  imageLoaded() {
    console.log("dfghdfjkgh666666666");
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady($event: Dimensions) {
    console.log("what");
  }

  loadImageFailed() {

  }

  // fileChangeEvent($event: Event) {
  //   this.imageChangedEvent = $event;
  //   console.log(this.imageChangedEvent)
  // }
  cropped2: any;

  fileChangeEvent($event: Event) {
    this.imageChangedEvent = $event;
  }
}
