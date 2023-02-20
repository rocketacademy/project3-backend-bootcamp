const { users, listings } = require("../db/models");

module.exports = {
  async createUser(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();

    const newUser = await users.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });

    return res.json(newUser);
  },
  async getOneUser(req, res) {
    const user = await users.findOne({
      where: {
        id: req.params.user_id,
      },
    });
    return res.json(user);
  },
  async getAllUsers(req, res) {
    const retrievedUsers = await users.findAll();
    return res.json(retrievedUsers);
  },
  //this edit listing may have some issue with what the model returns
  async editUser(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();
    const editedData = await users.update(
      {
        ...payload,
        updated_at: currentDate,
      },
      {
        where: {
          id: req.params.user_id,
        },
      }
    );
    return res.json(editedData);
  },
  async deleteUser(req, res) {
    const deleteResult = await users.destroy({
      where: {
        id: req.params.user_id,
      },
    });
    return res.json(deleteResult);
  },
};
