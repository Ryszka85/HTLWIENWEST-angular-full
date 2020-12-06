import { Component, OnInit } from '@angular/core';
import {Select} from "@ngxs/store";
import {GetImageByIdState} from "../../shared/app-state/states/get-image-by-id.state";
import {PrepareCroppedForDownloadState} from "../../shared/app-state/states/prepare-cropped-for-download.state";

@Component({
  selector: 'app-download-cropped-image-dialog',
  templateUrl: './download-cropped-image-dialog.component.html',
  styleUrls: ['./download-cropped-image-dialog.component.scss']
})
export class DownloadCroppedImageDialogComponent implements OnInit {
  @Select(PrepareCroppedForDownloadState.getCroppedValues) $croppedValueState;


  constructor() { }

  ngOnInit(): void {
  }

}
