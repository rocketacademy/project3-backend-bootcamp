const BaseController = require("./baseController");

class OrdersController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve specific listing. No authentication required.
  async getOne(req, res) {
    const { orderId } = req.params;

    try {
      const output = await this.model.findByPk(orderId);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}

module.exports = OrdersController;