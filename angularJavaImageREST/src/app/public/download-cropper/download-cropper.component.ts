import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Select, Store} from "@ngxs/store";
import {ImageCroppedEvent} from "ngx-image-cropper";
import {Subject} from "rxjs";
import {GetBase64ForDownloadCropperState} from "../../shared/app-state/states/get-base64-for-downloadCropper.state";
import {GetImageByIdState} from "../../shared/app-state/states/get-image-by-id.state";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ImageRequestService} from "../../serviceV2/image-request.service";
import {CropAndDownload, GetImageAsByse64, SetCroppedOffsetValues} from "../../shared/app-state/actions/image.action";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {ImageFileDetails} from "../../shared/domain/imageModel/image-file-details";
import {tap} from "rxjs/operators";
import {state} from "@angular/animations";
import {DownloadCroppedImageDialogComponent} from "../download-cropped-image-dialog/download-cropped-image-dialog.component";
import {PrepareCroppedForDownloadState} from "../../shared/app-state/states/prepare-cropped-for-download.state";
import {ImageDownloadService} from "../../serviceV2/image-download.service";
import {resolveProvidersRequiringFactory} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-download-cropper',
  templateUrl: './download-cropper.component.html',
  styleUrls: ['./download-cropper.component.scss']
})
export class DownloadCropperComponent implements OnInit {
  public formGroup: FormGroup;
  public widthInputField: FormControl;
  public heightInputField: FormControl;
  public origWidthInputField: FormControl;
  public wTest: number;
  public hTest: number;
  private wasCropped: boolean;
  public croppedImage: any;
  public width: number;
  public height: number;
  public diffRatio: number;
  public showDimensions: boolean = false;
  public widthChanged: number;
  public croppedWidth: boolean = false;
  public croppedHeight: boolean = false;
  @Select(PrepareCroppedForDownloadState.getCroppedValues) $croppedValues;
  @Select(GetBase64ForDownloadCropperState.getBase64) $base64;
  @Select(GetImageByIdState.getRatioAsString) $ratio;
  @Select(GetImageByIdState.getFileDetails) $details;
  public loaded: number = 0;
  cropper = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  };
  enableUserInput: any;

  constructor(private store: Store,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private service: ImageRequestService,
              private downloadService: ImageDownloadService) {
  }

  ngOnInit(): void {
    const imageFileDetails = this.store.selectSnapshot(GetImageByIdState.getFileDetails);
    this.extractImageIdFromRequest(imageFileDetails);
    /*this.subscribeToWidthInput(imageFileDetails);
    this.subscribeToHeightInput(imageFileDetails);*/
  }


  private extractImageIdFromRequest(imageFileDetails: ImageFileDetails) {
    this.route
      .paramMap
      .subscribe(param => {
        const imageId = param.get("imageId");
        this.store.dispatch(new GetImageAsByse64(imageId));
        this.initFormFields(imageFileDetails);
      })
  }

  private initFormFields(imageFileDetails: ImageFileDetails) {
    this.widthInputField = new FormControl(imageFileDetails.width);
    this.heightInputField = new FormControl(imageFileDetails.height);
    this.formGroup = this.fb.group({
      width: this.widthInputField,
      height: this.heightInputField,
    })
  }



  public imageCropped($event: ImageCroppedEvent): void {
    const imageFileDetails = this.store.selectSnapshot(GetImageByIdState.getFileDetails);
    console.log("Starting Cropper method.....................................................");
    const ratio = imageFileDetails.width / imageFileDetails.height;
    const width = $event.cropperPosition.x2 - $event.cropperPosition.x1;
    console.log($event.cropperPosition.x1);
    console.log($event.cropperPosition.x2);
    if (!this.croppedWidth || !this.croppedHeight) {
      console.log("Cropper width : " + width);
      this.wasCropped = true;
      this.widthInputField.setValue(width.toFixed(2));
      const height = $event.cropperPosition.y2 - $event.cropperPosition.y1;
      console.log("Cropper height : " + height);
      this.heightInputField.setValue(height.toFixed(2));
      this.wasCropped = false;
    }
    if (this.loaded == 0) {
      this.diffRatio = imageFileDetails.width / width;
      this.diffRatio.toFixed(2);
    }
    // this.croppedWidth.next($event.cropperPosition.x2 - $event.cropperPosition.x1);
    // this.croppedHeight.next($event.cropperPosition.y2 - $event.cropperPosition.y1)
    this.loaded++;
    console.log("Method cropper finished............................................");
  }

  close() {

  }

  public imageLoaded(): void {
    setTimeout(() => {
      const imageFileDetails = this.store.selectSnapshot(GetImageByIdState.getFileDetails);
      const width = imageFileDetails.width;
      this.cropper = {
        x1: 0,
        y1: 0,
        x2: width,
        y2: imageFileDetails.height
      };
      this.showDimensions = true;
    });
  }

  changeStuff($event: MatSlideToggleChange) {

  }

  changedWidthFunc(value: string) {
    console.log(value);
  }

  public cropAndDownload(width: string, height: string): void {
    const parsedWidth: number = Number.parseFloat(width);
    const parsedHeight: number = Number.parseFloat(height);
    this.store.dispatch(
      new SetCroppedOffsetValues(
        this.store.selectSnapshot(GetImageByIdState.getImageDetail).imageId,
        this.cropper.x1 * this.diffRatio,
        this.cropper.y1 * this.diffRatio,
        parsedWidth * this.diffRatio,
        parsedHeight * this.diffRatio
      )
    )
  }


  download(detail: string): void {
    let croppedDownloadRequest = this.store.selectSnapshot(PrepareCroppedForDownloadState.getCroppedValues);
    croppedDownloadRequest.imageId = this.store.selectSnapshot(GetImageByIdState.getImageDetail).imageId;
    croppedDownloadRequest.selectedWidth = Number.parseFloat(detail.split(' x ')[0]);
    croppedDownloadRequest.selectedHeight = Number.parseFloat(detail.split(' x ')[1])
    console.log(croppedDownloadRequest.selectedWidth);
    this.downloadService
      .downloadIndividualImage(croppedDownloadRequest, true)
      .subscribe(res => res)
  }
}
