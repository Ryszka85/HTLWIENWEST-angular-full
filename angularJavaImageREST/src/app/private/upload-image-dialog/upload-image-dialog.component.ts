import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent implements OnInit {
  secondFormGroup: any;
  firstFormGroup: any;
  isLinear: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
