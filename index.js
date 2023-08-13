const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing DB
const db = require("./db/models/index");
const { product, user, order, category, seller_discount } = db;

// import middlewares
// const jwtCheck = require("./middlewares/jwtCheck");

// importing Controllers
const ProductsController = require("./controllers/productsController");
const UsersController = require("./controllers/usersController.js");
const OrdersController = require("./controllers/ordersController.js");

// initializing Controllers -> note the lowercase for the first word
const productsController = new ProductsController(
  product,
  category,
  seller_discount,
  user
);
const usersController = new UsersController(user);
const ordersController = new OrdersController(order, user);

// importing Routers
const ProductsRouter = require("./routers/productsRouter");
const UsersRouter = require("./routers/usersRouter");
const OrdersRouter = require("./routers/ordersRouter");

// initialize Routers
const productsRouter = new ProductsRouter(productsController); // pass in jwtCheck as 2nd parameter if needed
const usersRouter = new UsersRouter(usersController);
const ordersRouter = new OrdersRouter(ordersController);

// declare port to listen to and initialise Express
const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
const corsOptions = {
  origin: process.env.REACT_APP_CORS_OPTIONS,
};

app.use(cors(corsOptions));
// Enable reading JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable and use router
app.use("/products", productsRouter.routes());
app.use("/users", usersRouter.routes());
app.use("/orders", ordersRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
