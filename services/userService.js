import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  phonePattern = "^+380\d{3}\d{2}\d{2}\d{2}$";
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@gmail.com";

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  checkPhoneNumber(phoneNumber) {
    return phonePattern.test(phoneNumber);
  }

  checkEmail(email) {
    return emailPattern.test(email);
  }

  checkPassword(password) {
    return !!(typeof password === 'string' && password.length >= 3);
  }
}

const userService = new UserService();

export { userService };
