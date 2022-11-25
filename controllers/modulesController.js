const BaseController = require("./baseController");

class ModulesController extends BaseController {
  constructor(model) {
    super(model);
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
}

module.exports = ModulesController;
