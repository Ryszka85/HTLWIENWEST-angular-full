import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Dimensions, ImageCroppedEvent} from "ngx-image-cropper";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Select, Store} from "@ngxs/store";
import {CropImageState} from "../../shared/app-state/states/crop-image.state";
import {CropDownloadViewImage, CropGalleryViewImage} from "../../shared/app-state/actions/image.action";
import {Device, DeviceObserverService} from "../../serviceV2/device-observer.service";
import {MediaObserver} from "@angular/flex-layout";

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

  constructor(@Inject(MAT_DIALOG_DATA) public $event: any,
              private dialogRef: MatDialogRef<ImageCropperComponent>,
              private store: Store,
              public deviceObserverService: DeviceObserverService,
              private media: MediaObserver) {
  }

  ngOnInit(): void {
    this.cropperObj.base64 = this.$event.img;

    this.croppedImage = this.$event.img;
    this.width = this.$event.width;
    this.cropperObj.staticWidth = this.$event.width;
    /*this.media.asObservable().subscribe(media => {
      console.log(media[0].mqAlias);
    })*/
    /*this.deviceObserverService.getActiveDevice()
      .subscribe(value =>
        this.isMobile = ((value === 'xs') && this.$event.imgDimensions.width > this.$event.imgDimensions.height));*/

    this.cropperObj.originalWidth = this.$event.imgDimensions.width;
    this.cropperObj.originalHeight = this.$event.imgDimensions.height;
    this.cropperObj.isPortraitFormat = this.cropperObj.originalWidth < this.cropperObj.originalHeight;

    this.deviceObserverService.getActiveDevice()
      .subscribe(value => {
        if (value === Device.MOBILE && this.cropperObj.isPortraitFormat === false) {
          this.device = Device.MOBILE;
          this.cropperObj.rotate = true;
          this.cropperObj.staticHeight = (150 / (500 / 460));
          this.cropperObj.staticWidth = 150;
        } else if (value === Device.TABLET) {
          this.device = Device.TABLET;
          this.cropperObj.rotate = false;
          this.cropperObj.staticWidth = 250;
          this.cropperObj.staticHeight = 250 / (500 / 460);
        } else if (value === Device.TABLET) {
          this.device = Device.TABLET;
        } else {
          this.device = Device.DESKTOP;
        }
        this.isMobile = ((value === 'xs') && this.$event.imgDimensions.width > this.$event.imgDimensions.height);
      });

    console.log(this.$event.imgDimensions);
    console.log(this.width);
    this.height = this.$event.height;
    this.cropperObj.staticHeight = this.$event.height;
    console.log(this.height);
    this.cropForView = this.$event.viewName;
  }

  imageCropped($event: ImageCroppedEvent) {

    if (this.cropperObj.isPortraitFormat == false && this.device === Device.MOBILE) {

      console.log($event.cropperPosition.y1 * this.cropperObj.resizeFactor);

      console.log($event.cropperPosition.x1);

      console.log($event.cropperPosition.x1 * this.cropperObj.resizeFactor);

      console.log((($event.cropperPosition.y2 - $event.cropperPosition.y1) * 3.357));

      console.log(($event.cropperPosition.x1 + ($event.cropperPosition.y2 - $event.cropperPosition.y1 )) * this.resizedFactor);

      console.log(((($event.cropperPosition.x2 - ($event.cropperPosition.x2 - $event.cropperPosition.x1))) * this.resizedFactor) + ($event.cropperPosition.x2 - $event.cropperPosition.x1) * 3.357);

      const test = (460 - (($event.cropperPosition.x2 - $event.cropperPosition.x1) * 3.357)) / 2;

      console.log($event.cropperPosition.x1 + ($event.cropperPosition.x2 - $event.cropperPosition.x1) * 3.357);

      console.log($event.cropperPosition.x2 - test);

      // y1 querformat -> hochformat gedreht
      console.log($event.cropperPosition.x2 * this.resizedFactor - 460);
      // y2 querformat -> hochformat gedreht
      console.log($event.cropperPosition.x2 * this.resizedFactor);
      // x2 querformat -> hochformat gedreht
      console.log($event.cropperPosition.y2 * this.resizedFactor);
      // x1 querformat -> hochformat gedreht
      console.log(($event.cropperPosition.y2 * this.resizedFactor) - 500);
    } else {
      // y1 querformat -> hochformat gedreht
      console.log($event.cropperPosition.x2 * this.resizedFactor - 500);
      // y2 querformat -> hochformat gedreht
      console.log($event.cropperPosition.x2 * this.resizedFactor);
      // x2 querformat -> hochformat gedreht
      console.log($event.cropperPosition.y2 * this.resizedFactor);
      // x1 querformat -> hochformat gedreht
      console.log(($event.cropperPosition.y2 * this.resizedFactor) - 460);
    }

    if (this.cropForView === 'Gallery')
      this.store.dispatch(new CropGalleryViewImage($event.base64));
    else
      this.store.dispatch(new CropDownloadViewImage($event.base64));
  }

  imageLoaded() {

    /*console.log((this.cropperRef.nativeElement as HTM));*/

    /*setTimeout(() => {
      this.cropper = {
        x1: 0,
        y1: 0,
        x2: this.width,
        y2: this.height
      };
    });*/

    console.log("dfghdfjkgh666666666");
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady($event: Dimensions) {
    console.log($event.height);
    console.log($event.width);
  }

  loadImageFailed() {
  }

  public close(): void {
    // this.store.dispatch(new CropGalleryViewImage(this.cropped2));
    this.dialogRef.close(this.cropped2);
  }


  foo($event: Dimensions) {
    this.cropperObj.imgViewHeight = this.$event.imgDimensions.height;
    this.cropperObj.imgViewWidth = this.$event.imgDimensions.width;
    console.log(this.cropperObj.imgViewHeight);
    console.log(this.cropperObj.imgViewWidth);
    console.log($event.width);
    console.log($event.height);


    /*this.cropperObj.isPortraitFormat = this.$event.imgDimensions.width < this.$event.imgDimensions.height;*/
    console.log(this.cropperObj.isPortraitFormat);
    console.log(this.device === Device.MOBILE);
    if (!this.cropperObj.isPortraitFormat && this.device === Device.MOBILE) {

      console.log("Funkts ??");


      /*this.cropperObj.rotate = true;*/
      this.cropperObj.staticWidth = 150;
      this.cropperObj.staticWidth.toFixed(0);
      this.cropperObj.staticHeight = (150 / (500 / 460));
      this.cropperObj.resizeHeight = (150 / (500 / 460));
      this.cropperObj.resizeWidth = 150;

      this.isPortraitFormat = true;
      this.resizedFactor = this.$event.imgDimensions.width / $event.height;
      console.log(this.resizedFactor);
      this.cropperObj.resizeFactor = this.$event.imgDimensions.width / $event.height;
      console.log(this.cropperObj.resizeFactor);

    } else if (this.device === Device.TABLET) {
      console.log("TABLET!!!!!!");
      this.cropperObj.rotate = false;
      this.cropperObj.staticWidth = 350;
      this.cropperObj.staticHeight = 350 / (500 / 460);
      this.cropperObj.resizeHeight = 350 / (500 / 460);
      this.cropperObj.resizeWidth = 350;
      this.resizedFactor = this.$event.imgDimensions.width / $event.width;
      this.cropperObj.resizeFactor = this.$event.imgDimensions.width / $event.width;
    } else {
      this.resizedFactor = this.$event.imgDimensions.width / $event.width;
      this.cropperObj.resizeFactor = this.$event.imgDimensions.width / $event.width;
    }
    this.resizedFactor.toFixed(2);

     if (this.device === Device.MOBILE) {

    } else if (this.device === Device.TABLET) {

    } else {

    }




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
