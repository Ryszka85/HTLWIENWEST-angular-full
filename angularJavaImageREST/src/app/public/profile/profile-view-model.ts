import {BaseUserDetails} from "../../shared/domain/userModel/user-details.model";

export interface ProfileViewModel {
  isOwner: boolean;
  userProfile: BaseUserDetails;
}

