export namespace UpdateUserProfileActions {
  export class UploadUserProfileImg {
    static readonly type = '[Update profile] Set user profile';
    constructor(public userId: string, public file: FormData) { }
  }
}
