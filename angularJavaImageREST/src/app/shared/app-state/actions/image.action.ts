import {Observable} from "rxjs";
import {ImageModel} from "../../domain/imageModel/image.model";
import {ImagesByTagName, ImagesByTagNameQueryImpl} from "../../domain/imageModel/ImagesByTagNameQuery";
import {UploadImageModel} from "../../domain/imageModel/upload-image.model";
import {ImageFileDetails} from "../../domain/imageModel/image-file-details";
import {TagModel} from "../../domain/tagModel/tag-model";

export class ImagesByUserIDAction {
  static readonly type = '[ImageAPI] Images by userId';
  constructor(public userId: string) { }
}

export class ImagesByTagsAction {
  static readonly type = '[ImageAPI] ImagesByTagsAction';
  constructor(public imagesByTag: ImagesByTagName) { }
}

export class ImagesNextPageAction {
  static readonly type = '[ImageAPI] NextImagePage';
  constructor(public imageResponseModel: ImageModel[]) { }
}

export class UploadImage {
  static readonly type = '[ImageAPI] Upload image';
  constructor(public uploadModel: UploadImageModel) { }
}

export class FilterByDate {
  static readonly type = '[ImageAPI] Filter image'
  constructor(public limit: number) { }
}

export class DeleteImage {
  static readonly type = '[ImageAPI] Delete image';
  constructor(public image: ImageModel) { }
}

export class SelectImage {
  static readonly type = '[ImageAPI] Select image';
  constructor(public image: ImageModel) { }
}

export class GetDownloadDetails {
  static readonly type = '[ImageAPI] Get download details';
  constructor(public imageId: string, public imageFileDetail: ImageFileDetails) { }
}

export class GetImageByImageId {
  static readonly type = '[ImageAPI] Get image by imageId';
  constructor(public imageId: string) { }
}

export class GetRelatedImagesByTagIDs {
  static readonly type = '[ImageAPI] Related images';
  constructor(public tagIds: TagModel[]) { }
}


export class GetImageAsByse64 {
  static readonly type = '[ImageAPI] Get image bytes';
  constructor(public imageId: string) { }
}

export class CropAndDownload {
  static readonly type = '[ImageAPI] Crop and download';
  constructor(public base64: string) { }
}

export class CropDownloadViewImage {
  static readonly type = '[ImageAPI] Crop download view image';
  constructor(public data: string) { }
}

export class CropGalleryViewImage {
  static readonly type = '[ImageAPI] Crop gallery view image';
  constructor(public data: string) { }
}

export class SetCroppedOffsetValues {
  static readonly type = '[ImageAPI] Set cropped image values';
  constructor(public imgId: string,
              public offsetX: number, public offsetY: number,
              public subImageWidth: number,public subImageHeight: number) { }
}


