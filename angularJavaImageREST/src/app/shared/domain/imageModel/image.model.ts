import {TagModel} from "../tagModel/tag-model";
import {BaseUserDetails} from "../userModel/user-details.model";
import {ImageFileDetails} from "./image-file-details";

export interface ImageModel {
  imageId: string;
  link: string;
  name: string;
  profileImg?: string;
  linkReference?: string;
  isPublic?: boolean;
  tags: TagModel[];
  user?: BaseUserDetails;
  downloaded?: number;
  liked?: number;
  imageDetails?: ImageFileDetails[];
  uploadDate?: Date;
}

export interface ImageViewModel {
  imageModel: ImageModel;
  owner: boolean;
}


export class SelectedImage{
  image: ImageModel;
}

export class SetImageWithTags {
  userId: string;
  imageId: string;
  tags: TagModel[];
}

export class CropImageModel {
  data: string;
  downloadViewFile?: string;
}

export interface DownloadImageByIndividualResolution {
  imageId: string;
  width: number;
  height: number;
}

export interface GetImagesByTagNameRequest {
  tagName: string;
  filterByDays: number;
  mostDownloaded: boolean;
  mostLiked: boolean;
}

