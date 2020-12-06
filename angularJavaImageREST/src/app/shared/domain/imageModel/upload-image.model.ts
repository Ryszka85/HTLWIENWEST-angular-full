export class UploadImageModel {
  userId: string;
  file: FormData;
  galleryFile?: File;
  downloadFile?: File;
  status?: boolean;
  isPublic?: string;
  urlReference?: string;
  orgFile?: File;
  progress?: number;
}
