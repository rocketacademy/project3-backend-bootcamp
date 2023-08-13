const BaseController = require("./baseController");

class OrdersController extends BaseController {
  constructor(model, userModel) {
    super(model);
    this.userModel = userModel;
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

  // Retrieve all orders with User info
  async getAllOrders(req, res) {
    try {
      const output = await this.model.findAll({
        include: [{ model: this.userModel }],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  // Retrieve all orders with User info
  async getAllOrdersForUser(req, res) {
    const id = req.params.userId;
    try {
      const output = await this.model.findAll({
        include: { model: this.userModel, where: { id: id } },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}

module.exports = OrdersController;
