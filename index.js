const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 3000;

const app = express();

// IMPORT ROUTER
const UsersRouter = require('./routers/usersRouter')
const CategoriesRouter = require('./routers/categoriesRouter')

// IMPORT CONTROLLER
const UsersController = require('./controllers/userController')
const CategoriesController = require('./controllers/categoriesController')


// IMPORT DB 
const db = require('./models/index')
const { user, listing, category, chat_image, chatroom_message, chatroom, like, listing_image, order, review } =db

// INIT CONTROLLER 
const usersController = new UsersController(user)
// ,like, listing, chatroom, chatroom_message, order
const categoriesController = new CategoriesController(category)

// INIT ROUTERS 
const usersRouter = new UsersRouter(usersController).routes()
const categoriesRouter = new CategoriesRouter(categoriesController).routes()


// Middleware 
app.use(cors());
app.use(express.json())
// Enable and use routers
app.use('/users', usersRouter)
app.use('/categories', categoriesRouter)



// Start the server
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
