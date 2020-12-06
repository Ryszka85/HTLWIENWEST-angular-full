import {ImageModel} from "./domain/imageModel/image.model";
import {ImageRowView} from "./domain/ImageRowView";

export class ImageRowMapper {
  public static mapToImageRow(imageModels: ImageModel[]): ImageRowView[] {
    let countRow: number = 0;
    let countItem: number = 0;
    let rowModels: ImageRowView[] = [];
    let temp: ImageModel[] = [];
    let test: ImageRowView = {row: null, content: []};
    if (imageModels !== undefined && imageModels !== null) {
      imageModels.forEach((value1, index) => {
        countItem++;
        if (countItem <= 3) temp.push(value1);
        if (countItem == 3) {
          countItem = 0;
          rowModels.push({row: countRow, content: temp});
          temp = [];
          countRow++;
        }
        if (index == imageModels.length - 1) {
          rowModels.push({row: countRow, content: temp});
        }
      })
      return rowModels;
    }
    return null;
  }
}
