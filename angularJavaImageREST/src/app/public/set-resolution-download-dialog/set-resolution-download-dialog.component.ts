import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn} from "@angular/forms";
import {ImageFileDetails} from "../../shared/domain/imageModel/image-file-details";
import {Select, Store} from "@ngxs/store";
import {GetImageByIdState} from "../../shared/app-state/states/get-image-by-id.state";
import {tap} from "rxjs/operators";
import {ImageDownloadService} from "../../serviceV2/image-download.service";

@Component({
  selector: 'app-set-resolution-download-dialog',
  templateUrl: './set-resolution-download-dialog.component.html',
  styleUrls: ['./set-resolution-download-dialog.component.scss']
})
export class SetResolutionDownloadDialogComponent implements OnInit {
  public formGroup: FormGroup;
  public widthInputField: FormControl;
  public heightInputField: FormControl;
  public widthFocus: boolean = false;
  public heightFocus: boolean = false;
  @Select(GetImageByIdState.getFileDetails) $selectedImage;

  constructor(private dialogRef: MatDialogRef<SetResolutionDownloadDialogComponent>,
              private fb: FormBuilder,
              private store: Store,
              private downloadService: ImageDownloadService) {
  }

  ngOnInit(): void {
    const imageFileDetails = this.store.selectSnapshot(GetImageByIdState.getFileDetails);
    this.initFormFields(imageFileDetails);
    const ratio = imageFileDetails.width / imageFileDetails.height;

    this.widthInputField
      .valueChanges
      .subscribe(val => {
        if (!this.heightFocus && this.widthFocus)
          this.heightInputField.setValue((val / ratio).toFixed(2));

      });
    this.heightInputField
      .valueChanges
      .subscribe(val => {
        if (!this.widthFocus && this.heightFocus)
          this.widthInputField.setValue((val * ratio).toFixed(2));
      })
  }

  get width() {
    return this.formGroup.get('width');
  }

  get height() {
    return this.formGroup.get('height');
  }

  private initFormFields(imageFileDetails: ImageFileDetails) {
    this.widthInputField = new FormControl(imageFileDetails.width, [
      imgSizeValidator(imageFileDetails.width)
    ]);
    this.heightInputField = new FormControl(imageFileDetails.height, [
      imgSizeValidator(imageFileDetails.height)
    ]);
    this.formGroup = this.fb.group({
      width: this.widthInputField,
      height: this.heightInputField,
    })
  }

  focusedInWidth($event: FocusEvent): void {
    console.log($event);
    this.widthFocus = true;
    this.heightFocus = false;
  }

  focusInHeight($event: FocusEvent): void {
    console.log($event);
    this.heightFocus = true;
    this.widthFocus = false;
  }

  public downloadImage(width: any, height: any): void {
    this.downloadService
      .downloadIndividualImage(
        {
          imageId: this.store.selectSnapshot(GetImageByIdState.getImageDetail).imageId,
          width: width,
          height: height
        },
        false)
      .subscribe(value => console.log(value))
  }
}


export function imgSizeValidator(value: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = value < Number.parseFloat(control.value) || control.value < 100;
    return forbidden ? {forbiddenValue: {value: control.value}} : null;
  };
}
