import {Component, Inject, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ImageRequestService} from "../../serviceV2/image-request.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ImageModel} from "../../shared/domain/imageModel/image.model";
import {MatRadioChange} from "@angular/material/radio";
import {AbstractControl, FormBuilder, FormControl, ValidatorFn} from "@angular/forms";
import {SelectImageState} from "../../shared/app-state/states/select-image.state";
import {DeleteImage, SelectImage} from "../../shared/app-state/actions/image.action";
import {FocusMonitor} from "@angular/cdk/a11y";
import {Subject} from "rxjs";
import {UpdateImageDetailsService} from "../../serviceV2/update-image-details.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DeleteImageService} from "../../serviceV2/delete-image.service";
import {Router} from "@angular/router";
import {Navigate} from "@ngxs/router-plugin";
import {UserDetailsActions} from "../../shared/app-state/actions/user-details.action";

@Component({
  selector: 'app-change-image-details-dialog',
  templateUrl: './change-image-details-dialog.component.html',
  styleUrls: ['./change-image-details-dialog.component.scss']
})
export class ChangeImageDetailsDialogComponent implements OnInit {
  urlReference = new FormControl('');
  isPublic = new FormControl(false);
  @Select(SelectImageState.getSelectedImage) $selectedImage;
  @Select(SelectImageState.getIsPublic) $isPublic;
  public formGroup;
  public selectedImage: ImageModel;
  public $detailsChanged = new Subject<boolean>();
  public tempPublic: boolean;
  public finishedDeleting = null;
  public pressedDelete = false;


  constructor(private store: Store,
              private imageService: ImageRequestService,
              @Inject(MAT_DIALOG_DATA) public data: ImageModel,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<ChangeImageDetailsDialogComponent>,
              private updateImgService: UpdateImageDetailsService,
              private deleteImageService: DeleteImageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.selectedImage = this.store.selectSnapshot(SelectImageState.getSelectedImage);
    const formState = this.selectedImage.linkReference === 'null' ?
      "" : this.selectedImage.linkReference;
    this.urlReference = new FormControl(formState, [urlValidator(formState)]);
    this.$selectedImage.subscribe(val => console.log(val.public))
    this.isPublic = new FormControl(this.selectedImage.isPublic);

    this.formGroup = this.formBuilder
      .group({urlReference: this.urlReference, tempPublic: this.selectedImage.linkReference})

    this.tempPublic = this.selectedImage.isPublic;

  }

  public urlReferenceValidator(): void {
    let value = this.formGroup.get('urlReference').value;
    if (this.selectedImage.linkReference === 'null' && this.urlReference.value.length === 0) {
      this.$detailsChanged.next(false);
    } else if (this.selectedImage.linkReference !== value && this.urlReference.errors === null) {
      this.$detailsChanged.next(true);
    } else this.$detailsChanged.next(false);
  }

  public changeStuff(mrChange: MatRadioChange): void {
    if (this.selectedImage.isPublic !== this.tempPublic) {
      this.$detailsChanged.next(true);
    } else { this.$detailsChanged.next(false); }

  }

  changeDetails(img: ImageModel): void {
    console.log(this.selectedImage);
  }

  saveChanges(): void {
    this.selectedImage.isPublic = this.tempPublic;
    this.selectedImage.linkReference =
      this.urlReference.value.length === 0 ? null : this.urlReference.value;
    console.log(this.tempPublic);
    this.updateImgService
      .changeImageDetails(this.selectedImage)
      .subscribe(value => {
        if (value.status === 200) {
          this.snackBar.open(
            'Image details update was successful.',
            'Details updated',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            }
          );
          this.$detailsChanged.next(false);
        }
      });

    console.log(this.selectedImage)
  }

  public deleteImage(img: ImageModel): void {
    console.log(img);
    this.pressedDelete = true;
    this.finishedDeleting = false;
    this.store
      .dispatch(new DeleteImage(img))
      .subscribe(value => console.log(value),
        error => {
          this.snackBar.open('Deleting image was not successful',
            null,
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: "top"
            });
        },
        () => {
          this.snackBar.open("Deleting image was successful",
            null,
            {
              duration: 3000,
              horizontalPosition: "center",
              verticalPosition: "top"
            });
          this.dialogRef.close();
          this.store.dispatch(new UserDetailsActions
            .GetUserDetails(this.store
              .selectSnapshot(SelectImageState.getSelectedImage).user.userId));
          /*this.store.dispatch(new Navigate(
            [
              'profile',
              {
                userId: this.store.selectSnapshot(SelectImageState.getSelectedImage).user.userId
              }
            ]
          ));*/
        });

  }
}


export function urlValidator(value: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const regExp =
      new RegExp('^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,}(:[0-9]{1,5})?(\\/.*)?$');
    const forbidden = regExp.test(control.value) === false;
    /*this.$detailsChanged.next(this.selectedImage.linkReference !== value);*/
    console.log(forbidden);
    console.log(control.value);
    return control.value.length === 0 ? null :
      forbidden || control.value > 0 ?
      {forbiddenValue: {value: control.value}} :
        null;
  };
}
