import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/", function(req, res, next) {
    const fighters = fighterService.getFighters();

    if(!fighters){
      res.status(404).send('Fighters not found');
    }

    if(fighters?.length === 0){
      res.status(204).send('No data');
    }

    res.send(`Fighters: ${users}`);
  }
);

router.get("/:id", function(req, res, next) {
      const fighter = fighterService.search(req.params.id);

      res.send(`Fighter: ${fighter}`);
    }
);

router.post("/",
              createFighterValid,
              function(req, res, next) {
                fighterService.createFighter(req.body);

              res.send(`Fighter created successfully`);
              }
            );

router.put("/:id",
            updateFighterValid,
            function(req, res, next) {
              fighterService.updateFighter(req.params.id, req.body);

            res.send(`Fighter updated successfully`);
            }
          );

router.delete("/:id",
                function(req, res, next) {
                  fighterService.deleteFighter(req.params.id);

                  res.send(`Fighter deleted successfully`);
                }
              );

export { router };
