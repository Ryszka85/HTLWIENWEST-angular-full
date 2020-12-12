import {RequestStatus} from "../../domain/request-status";

export class PassDataToDialogAction {
  static readonly type = '[Dialog] Pass data to dialog';
  constructor(public data: DialogCropperData) {}
}

export interface DialogCropperData {
  imgData: any;
  resizeWidth: number;
  resizeHeight: number;
  viewName: string;
  imgDimensions: { originalWidth: number, originalHeight: number };
}
