import {Tile} from "./tile";
import {ImageModel} from "../domain/imageModel/image.model";

export class ImageTile extends Tile{
  private _imageResponseModel: ImageModel
  constructor(row: number,
              col: number,
              imageResponseModel: ImageModel) {
    super(row, col);
    this._imageResponseModel = imageResponseModel;
  }


  get imageResponseModel(): ImageModel {
    return this._imageResponseModel;
  }
}
