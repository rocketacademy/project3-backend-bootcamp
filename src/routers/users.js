const { Router } = require("express");
const usersController = require("../controllers/users");

const usersRouter = Router();

usersRouter.post("/createuser", usersController.createUser);
usersRouter.get("/:user_id/homepage", usersController.getOneUser);
usersRouter.get("/listings", usersController.getAllUsers);
usersRouter.put("/:user_id/profile", usersController.editUser);
usersRouter.delete("/:user_id/profile", usersController.deleteUser);

module.exports = usersRouter;
