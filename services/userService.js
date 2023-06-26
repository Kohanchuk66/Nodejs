import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  phonePattern = new RegExp(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm);
  emailPattern = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@gmail.com$");

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  checkPhoneNumber(phoneNumber) {
    return this.phonePattern.test(phoneNumber);
  }

  checkEmail(email) {
    return this.emailPattern.test(email);
  }

  checkPassword(password) {
    return !!(typeof password === 'string' && password.length >= 3);
  }

  getUsers(){
    return JSON.stringify(userRepository.getAll());
  }

  createUser(data){
    return userRepository.create(data);
  }

  updateUser(id, data){
    return userRepository.update(id, data);
  }

  deleteUser(id){
    return userRepository.delete(id);
  }
}

const userService = new UserService();

export { userService };
