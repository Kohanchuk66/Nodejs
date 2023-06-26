import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get("/", function(req, res, next) {
                  const users = userService.getUsers();

                  if(!users){
                    res.status(404).send('Users not found');
                  }

                  if(users?.length === 0){
                    res.status(204).send('No data');
                  }

                  res.send(`Users: ${users}`);
                }
          );

router.get("/:id", function(req, res, next) {
                      const user = userService.search(req.params.id);

                      res.send(`User: ${user}`);
                    }
          );

router.post("/",
            createUserValid,
            function(req, res, next) {
              userService.createUser(req.body);

              res.send(`User created successfully`);
            }
          );

router.put("/:id",
            updateUserValid,
            function(req, res, next) {
              userService.updateUser(req.params.id, req.body);

              res.send(`User updated successfully`);
            }
          );

router.delete("/:id",
                function(req, res, next) {
                  userService.deleteUser(req.params.id);

                  res.send(`User deleted successfully`);
                }
              );

export { router };
