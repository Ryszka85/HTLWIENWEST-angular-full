export interface IUserLoginModel {
  userId?: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  profileImg?: string;
  tokenId?: string;
}

export class UserLoginModel implements IUserLoginModel{
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class LoggedInUserModel implements IUserLoginModel {
  email: string;
  userId: string;

  constructor(userId: string, email: string) {
    this.email = email;
    this.userId = userId;
  }
}

export class GoogleUserLogin implements IUserLoginModel {
  email: string;
  firstName: string;
  lastName: string;
  profileImg: string;
  tokenId: string;


  constructor(email: string, firstName: string, lastName: string, profileImg: string, tokenId: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImg = profileImg;
    this.tokenId = tokenId;
  }
}
