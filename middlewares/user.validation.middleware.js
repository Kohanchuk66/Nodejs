import { USER } from "../models/user.js";
import { userService } from "../services/userService.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const {firstName, lastName, email, phoneNumber, password} = req?.body;

  if(
      !firstName || 
      !lastName || 
      !email || 
      !phoneNumber || 
      !password
    ) {
    res.status(400).send({
      error: true,
      message: 'User entity to create isn’t valid'
    });
  }

  if(
      !userService.checkEmail(email) || 
      !userService.checkPassword(password) || 
      !userService.checkPhoneNumber(phoneNumber)
    ) {
      res.status(400).send({
        error: true,
        message: 'User data isn’t valid'
      });
  }

  if( userService.search({email: email}) ) {
    res.status(400).send({
      error: true,
      message: 'This email is already associated with an account.'
    });
  }

  if( userService.search({phoneNumber: phoneNumber}) ) {
    res.status(400).send({
      error: true,
      message: 'This phone number is already associated with an account.'
    });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const {firstName, lastName, email, phoneNumber, password} = req?.body;

  if(!firstName && !lastName && !email && !phoneNumber && !password){
    res.status(400).send({
      error: true,
      message: 'User entity to create isn’t valid'
  });
  }

  if(
      email && !userService.checkEmail(email) || 
      password && !userService.checkPassword(password) || 
      phoneNumber && !userService.checkPhoneNumber(phoneNumber)
    ) {
      res.status(400).send({
        error: true,
        message: 'User data isn’t valid'
    });
  }

  if( email && userService.search({email: email}) ) {
    res.status(400).send({
      error: true,
      message: 'This email is already associated with an account.'
    });
  }

  if( phoneNumber && userService.search({phoneNumber: phoneNumber}) ) {
    res.status(400).send({
      error: true,
      message: 'This phone number is already associated with an account.'
    });
  }

  next();
};

export { createUserValid, updateUserValid };
