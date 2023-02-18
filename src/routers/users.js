const { Router } = require("express");
const usersController = require("../controllers/users");
const authMiddleware = require("../middleware/auth");

const usersRouter = Router();

//everything below requires auth
usersRouter.use(authMiddleware);
usersRouter.post("/createuser", usersController.createUser);
usersRouter.get("/:user_id/homepage", usersController.getOneUser);
usersRouter.get("/listings", usersController.getAllUsers);
usersRouter.put("/:user_id/profile", usersController.editUser);
usersRouter.delete("/:user_id/profile", usersController.deleteUser);

module.exports = usersRouter;
