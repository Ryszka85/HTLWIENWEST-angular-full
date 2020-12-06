import {ImageModel} from "./image.model";

export interface ImageFileDetails {
  downloadLink?: string;
  width: number;
  height: number;
  size: number;
  contentType: string;
}

export interface ImageDownloadResponse {
  files: ImageFileDetails[];
  image?: ImageModel;
}

export interface ImageDetailsViewModel {
  fileDetails: ImageFileDetails;
  image?: ImageModel
}
