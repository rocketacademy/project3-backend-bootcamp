const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 3000;

const app = express();

// IMPORT ROUTER
const UsersRouter = require('./routers/usersRouter')

// IMPORT CONTROLLER
const UsersController = require('./controllers/userController')


// IMPORT DB 
const db = require('./models/index')
const { user, listing, category, chat_image, chatroom_message, chatroom, like, listing_image, order, review } =db

// INIT CONTROLLER 
const usersController = new UsersController(user)
// ,like, listing, chatroom, chatroom_message, order

// INIT ROUTERS 
const usersRouter = new UsersRouter(usersController).routes()


// Middleware 
app.use(cors());
app.use(express.json())
// Enable and use routers
app.use('/users', usersRouter)



// Start the server
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
