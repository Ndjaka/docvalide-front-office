import { userUrls } from "../index";
import UserPayloadTypes from "../../types/UserPayloadTypes";

class UserService {

  static async addUser(user: UserPayloadTypes) {
    return userUrls.addUser(user);
  }
}

export default UserService;