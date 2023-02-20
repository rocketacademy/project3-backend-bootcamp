const { Router } = require("express");
const usersController = require("../controllers/users");
const authMiddleware = require("../middleware/auth");

const usersRouter = Router();

//this one need to edit to new Auth user
usersRouter.post("/createuser", usersController.createUser);

//everything below requires auth
usersRouter.use(authMiddleware);
usersRouter.get("/users", usersController.getAllUsers);
usersRouter.get("/:user_id/editprofile", usersController.getOneUser);
usersRouter.put("/:user_id/settings", usersController.editUser);
usersRouter.delete("/:user_id/profile", usersController.deleteUser);

module.exports = usersRouter;
