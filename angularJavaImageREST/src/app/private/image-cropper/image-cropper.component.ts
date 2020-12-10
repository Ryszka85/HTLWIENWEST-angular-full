import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Dimensions, ImageCroppedEvent} from "ngx-image-cropper";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Select, Store} from "@ngxs/store";
import {CropImageState} from "../../shared/app-state/states/crop-image.state";
import {CropDownloadViewImage, CropGalleryViewImage} from "../../shared/app-state/actions/image.action";
import {Device, DeviceObserverService} from "../../serviceV2/device-observer.service";
import {MediaObserver} from "@angular/flex-layout";
import {PassDataToCropperDialogState} from "../../shared/app-state/states/pass-data-to-cropper-dialog.state";
import {DialogCropperData} from "../../shared/app-state/actions/pass-data-to-dialog.action";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
  public width: number;
  public height: number;
  public cropForView: string;
  imageChangedEvent: any;
  croppedImage: any;
  showCropper: boolean = false;
  transF: any;
  cropped2: any;
  isMobile: boolean;
  isPortraitFormat: boolean;
  device: Device;

  data: DialogCropperData;

  cropperObj: CropperObject = {};

  resizedRatio: number;

  @Select(CropImageState.getData) $imageData;

  @ViewChild('cropperComponent') cropperRef: ElementRef;

  cropper = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  };

  resizedFactor = 0;
  canvasRotation: any;

  disable = false;

  constructor(@Inject(MAT_DIALOG_DATA) public $event: any,
              private dialogRef: MatDialogRef<ImageCropperComponent>,
              private store: Store,
              public deviceObserverService: DeviceObserverService,
              private media: MediaObserver) {
    this.data = this.store.selectSnapshot(PassDataToCropperDialogState.getComponentData);

  }

  ngOnInit(): void {

    this.media.asObservable().subscribe(console.log)


    console.log(this.store.selectSnapshot(PassDataToCropperDialogState.getComponentData));


    const passedData = this.store.selectSnapshot(PassDataToCropperDialogState.getComponentData);
    this.cropperObj.base64 = passedData.imgData;

    this.croppedImage = this.$event.img;
    this.width = this.$event.width;

    this.cropperObj.originalWidth = this.$event.imgDimensions.width;

    this.cropperObj.originalHeight = this.$event.imgDimensions.height;
    this.cropperObj.resizeWidth = this.$event.width;
    this.cropperObj.resizeHeight = this.$event.height;
    this.cropperObj.isPortraitFormat = this.cropperObj.originalWidth < this.cropperObj.originalHeight;
    /*this.cropperObj.staticWidth = this.$event.width;*/

    this.deviceObserverService.getActiveDevice()
      .subscribe(value => {
        console.log(this.device);
        console.log(this.device !== this.device);
        if (value === Device.MOBILE) {
          this.device = Device.MOBILE;
          this.cropperObj.staticWidth = this.getStaticCropperWidthByViewAndDevice();
          this.cropperObj.staticHeight = this.getStaticCropperWidthByViewAndDevice() / this.getRatioByView();

          /* this.device = Device.MOBILE;
           this.disable = false;

           this.cropperObj.rotate = true;
           this.cropperObj.staticHeight = 150;
           this.cropperObj.staticWidth = (150 / (500 / 460));
           this.cropperDimensions.logDimensions();*/

        }  else if (value === Device.TABLET) {
          this.device = Device.TABLET;

          this.cropperObj.staticWidth = this.getStaticCropperWidthByViewAndDevice();
          this.cropperObj.staticHeight = this.getStaticCropperWidthByViewAndDevice() / this.getRatioByView();

        } else {
          this.device = Device.DESKTOP;
          if (this.cropForView === 'Gallery') {
            this.cropperObj.rotate = false;
            this.cropperObj.staticHeight = 460;
            this.cropperObj.staticWidth = 500;
          }
        }
        this.isMobile = ((value === 'xs') && this.$event.imgDimensions.width > this.$event.imgDimensions.height);
      });

    console.log(this.$event.imgDimensions);
    console.log(this.width);
    this.height = this.$event.height;
    /*this.cropperObj.staticHeight = this.$event.height;*/
    console.log(this.height);
    this.cropForView = this.$event.viewName;
  }

  imageCropped($event: ImageCroppedEvent) {

    if (this.cropperObj.isPortraitFormat == false && this.device === Device.MOBILE) {




      /*console.log(this.cropperObj.resizeFactor);

      console.log($event.cropperPosition.x1);

      console.log(this.cropperObj.imgViewWidth - $event.cropperPosition.x2);

      console.log((this.cropperObj.imgViewWidth - $event.cropperPosition.x2) * this.cropperObj.resizeFactor);

      console.log($event.cropperPosition.y1 * this.cropperObj.resizeFactor);

      console.log(this.cropperDimensions.getCropperXAndYDistance().x);

      console.log(this.cropperDimensions.getCropperXAndYDistance().x * this.cropperObj.resizeFactor);

      console.log(this.cropperDimensions.getCropperXAndYDistance().y);

      console.log(this.cropperDimensions.getCropperXAndYDistance().y * this.cropperObj.resizeFactor);*/

    } else {


    }

    if (this.cropForView === 'Gallery') {
      this.store.dispatch(new CropGalleryViewImage($event.base64));
    } else
      this.store.dispatch(new CropDownloadViewImage($event.base64));
  }



  imageLoaded() {

    console.log("HALLLLLOOOO???");
/*
    setTimeout(() => {
      this.cropper = {
        x1: 0,
        y1: 0,
        x2: this.getStaticCropperWidthByViewAndDevice(),
        y2: this.getStaticCropperWidthByViewAndDevice() / this.getRatioByView()
      };
      /!*this.cropperDimensions = new CropperDimension(this.cropper);*!/
    });*/
  }


  public close(): void {
    this.dialogRef.close(this.cropped2);
  }


  getDimensionFromCropper($event: Dimensions) {


    console.log("get dimensions function");


    this.cropperObj.imgViewHeight = $event.height;
    this.cropperObj.imgViewWidth = $event.width;

    if (this.device === Device.MOBILE) {
      this.device = Device.MOBILE;
      this.cropperObj.staticWidth = this.getStaticCropperWidthByViewAndDevice();
      this.cropperObj.staticHeight = this.getStaticCropperWidthByViewAndDevice() / this.getRatioByView();
      this.cropperObj.resizeFactor = this.$event.imgDimensions.width / $event.width;

    } else if (this.device === Device.TABLET) {
      console.log("TABLET!!!!!!");
      const ratioByView = this.getRatioByView();
      this.cropperObj.staticWidth = this.getStaticCropperWidthByViewAndDevice();
      this.cropperObj.staticHeight = this.getStaticCropperWidthByViewAndDevice() / ratioByView;
      this.cropperObj.resizeFactor = this.$event.imgDimensions.width / $event.width;
    } else {
      this.resizedFactor = this.$event.imgDimensions.width / $event.width;
      this.cropperObj.resizeFactor = this.$event.imgDimensions.width / $event.width;

    }

    this.cropperObj.resizeWidth = this.getDesktopWidthByView();
    this.cropperObj.resizeHeight = this.getDesktopHeightByView();

  }

  private getDesktopHeightByView() {
    return this.isGalleryView() ? environment.desktopGalleryHeight :
      this.isDownloadView() ? environment.desktopDownloadHeight : -1;
  }

  private getDesktopWidthByView() {
    return this.isGalleryView() ? environment.desktopGalleryWidth :
      this.isDownloadView() ? environment.desktopDownloadWidth : -1;
  }

  private getRatioByView() {
    return this.isGalleryView() ? environment.galleryAspectRatio :
      this.isDownloadView() ? environment.downloadAspectRatio : -1;
  }

  private isGalleryView() {
    return this.data.viewName === 'Gallery';
  }

  private getStaticCropperWidthByViewAndDevice() {
    return (this.device === Device.TABLET ? this.getTabletWidthByView() :
      this.device === Device.MOBILE ? this.getMobileWidthByView() :
        this.device === Device.DESKTOP ? this.getDesktopWidthByView() : -1);
  }

  private getMobileWidthByView() {
    return this.isGalleryView() ? environment.mobileGalleryWidth :
      this.isDownloadView() ? environment.mobileDownloadWidth : -1;
  }

  private getTabletWidthByView() {
    return this.isGalleryView() ? environment.tabletGalleryWidth :
      this.isDownloadView() ? environment.tabletDownloadWidth : -1;
  }

  private getStaticWidthByViewAndDeviceRotated() {
    return (this.device === Device.TABLET ? this.getTabletWidthByView() :
      this.device === Device.MOBILE ? this.getMobileWidthByView() :
        this.device === Device.DESKTOP ? this.getDesktopWidthByView() : -1) / this.getRatioByView();
  }

  private isDownloadView() {
    return this.data.viewName === 'Download';
  }

  test($event: Event) {
    console.log($event)
  }
}

export interface CropperObject {
  base64?: any;
  resizeWidth?: number;
  resizeHeight?: number;
  staticWidth?: number;
  staticHeight?: number;
  imgViewWidth?: number;
  imgViewHeight?: number;
  isPortraitFormat?: boolean;
  resizeFactor?: number;
  originalWidth?: number;
  originalHeight?: number;
  rotate?: boolean;
}


