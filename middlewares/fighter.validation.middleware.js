import { FIGHTER } from "../models/fighter.js";
import { fighterService } from "../services/fighterService.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const {name, health, power, defense} = req?.body;

  if(
    !name || 
    !power || 
    !defense
  ) {
    res.status(400).send({
      error: true,
      message: 'Fighter entity to create isn’t valid'
    });
  }

  if(
    !fighterService.checkDefense(defense) || 
    health && !fighterService.checkHealth(health) || 
    !fighterService.checkPower(power)
  ) {
    res.status(400).send({
      error: true,
      message: 'Fighter data isn’t valid'
    });
  }

  if( fighterService.search({name: name}) ) {
    res.status(400).send({
      error: true,
      message: 'This name is already associated with an fighter.'
    });
  }

  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update

  const {name, health, power, defense} = req?.body;

  if(
    !name &&
    !power &&
    !defense &&
    !health
  ) {
    res.status(400).send({
      error: true,
      message: 'Fighter entity to update isn’t valid'
    });
  }

  if(
    defense && !fighterService.checkDefense(defense) || 
    health && !fighterService.checkHealth(health) || 
    power && !fighterService.checkPower(power)
  ) {
    res.status(400).send({
      error: true,
      message: 'Fighter data isn’t valid'
    });
  }

  if( name && fighterService.search({name: name}) ) {
    res.status(400).send({
      error: true,
      message: 'This name is already associated with an fighter.'
    });
  }

  next();
};

export { createFighterValid, updateFighterValid };
