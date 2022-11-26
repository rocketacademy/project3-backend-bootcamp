const BaseController = require("./baseController");

class CadetsController extends BaseController {
  constructor(model, cadetModulesModel, cadetChaptersModel) {
    super(model);
    this.cadetModulesModel = cadetModulesModel;
    this.cadetChaptersModel = cadetChaptersModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
}

module.exports = CadetsController;
