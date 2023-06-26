import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  checkPower(power) {
    return !!(power >= 1 && power <= 100);
  }

  checkDefense(defense) {
    return !!(defense >= 1 && defense <= 10);
  }

  checkHealth(health) {
    return !!(health >= 80 && health <= 120);
  }

  getFighters(){
    return JSON.stringify(fighterRepository.getAll());
  }

  createFighter(data){
    return fighterRepository.create(data);
  }

  updateFighter(id, data){
    return fighterRepository.update(id, data);
  }

  deleteFighter(id){
    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };
