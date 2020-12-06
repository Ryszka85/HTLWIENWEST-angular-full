import {Component, Inject, OnInit} from '@angular/core';
import {Dimensions, ImageCroppedEvent} from "ngx-image-cropper";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Select, Store} from "@ngxs/store";
import {ImagesByUserIdState} from "../../shared/app-state/states/images-by-user-id.state";
import {CropImageState} from "../../shared/app-state/states/crop-image.state";
import {CropDownloadViewImage, CropGalleryViewImage} from "../../shared/app-state/actions/image.action";
import {DeviceObserverService} from "../../serviceV2/device-observer.service";

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
  cropped2: any;
  @Select(CropImageState.getData) $imageData;

  constructor(@Inject(MAT_DIALOG_DATA) public $event: any,
              private dialogRef: MatDialogRef<ImageCropperComponent>,
              private store: Store,
              public deviceObserverService: DeviceObserverService) {
  }

  ngOnInit(): void {
    this.croppedImage = this.$event.img;
    this.width = this.$event.width;
    console.log(this.width)
    this.height = this.$event.height;
    console.log(this.height)
    this.cropForView = this.$event.viewName;
  }

  imageCropped($event: ImageCroppedEvent) {
    if (this.cropForView === 'Gallery')
      this.store.dispatch(new CropGalleryViewImage($event.base64));
    else
      this.store.dispatch(new CropDownloadViewImage($event.base64));
  }

  imageLoaded() {
    console.log("dfghdfjkgh666666666");
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady($event: Dimensions) {

  }

  loadImageFailed() {
  }

  public close(): void {
    // this.store.dispatch(new CropGalleryViewImage(this.cropped2));
    this.dialogRef.close(this.cropped2);
  }
}
