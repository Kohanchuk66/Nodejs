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
}

const fighterService = new FighterService();

export { fighterService };
