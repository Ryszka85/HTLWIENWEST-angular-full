import {FilterStrategy} from "./filter-strategy";
import {ImageModel} from "../domain/imageModel/image.model";

export class ImageModelFilter {
  public static apply(source: ImageModel[], limit: number): ImageModel[] {
    return source.filter(model => {
      const UPLOAD_DATE_IN_MS = new Date(model.uploadDate).valueOf();
      return limit >= Date.now() - UPLOAD_DATE_IN_MS;
    })
  }
}
