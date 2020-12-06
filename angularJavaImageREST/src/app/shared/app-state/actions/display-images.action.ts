import {ImageModelList} from "../../domain/imageModel/image-model-list";
import {ImageModel} from "../../domain/imageModel/image.model";

export class DisplayImagesAction {
  static readonly type = '[ImageView] Display images';
  constructor(public imageModelList: ImageModel[]) { }
}
