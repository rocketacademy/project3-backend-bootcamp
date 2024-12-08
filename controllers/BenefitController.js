const BaseController = require("./BaseController");

class BenefitController extends BaseController {
  constructor(model) {
    super(model);
  }
}

// allow users to read info, and select data only.
// user cannot add, edit or delete benefits.

module.exports = BenefitController;
