const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const cors = require("cors");

//importing routers
const UserRouter = require("./routers/userRouter.js");
const SellerRouter = require("./routers/sellerRouter.js");
const OrderRouter = require("./routers/orderRouter.js");
const NotificationRouter = require("./routers/notificationRouter.js");
const FeedRouter = require("./routers/feedRouter.js");
const CartRouter = require("./routers/cartRouter.js");
const BasketRouter = require("./routers/basketRouter.js");

//importing controllers
const UserController = require("./controllers/userController.js");
const SellerController = require("./controllers/sellerController.js");
const OrderController = require("./controllers/orderController.js");
const NotificationController = require("./controllers/notificationController.js");
const FeedController = require("./controllers/feedController.js");
const CartController = require("./controllers/cartController.js");
const BasketController = require("./controllers/basketController.js");

//importing DB
const db = require("./db/models/index.js");
const {
  basket,
  category,
  currentCart,
  feed,
  feedLike,
  feedReview,
  notification,
  order,
  orderedItem,
  seller,
  sellerLike,
  sellerReview,
  user,
} = db;

//initializing controllers
const userController = new UserController(user);
const sellerController = new SellerController(
  seller,
  sellerLike,
  sellerReview,
  category
);
const orderController = new OrderController(order, orderedItem);
const notificationController = new NotificationController(notification);
const feedController = new FeedController(feed, feedLike, feedReview);
const cartController = new CartController(currentCart);
const basketController = new BasketController(basket);

//initializing routers
const userRouter = new UserRouter(userController).routes();
const sellerRouter = new SellerRouter(sellerController).routes();
const orderRouter = new OrderRouter(orderController).routes();
const notificationRouter = new NotificationRouter(
  notificationController
).routes();
const feedRouter = new FeedRouter(feedController).routes();
const cartRouter = new CartRouter(cartController).routes();
const basketRouter = new BasketRouter(basketController).routes();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.use("/order", orderRouter);
app.use("/notification", notificationRouter);
app.use("/feed", feedRouter);
app.use("/cart", cartRouter);
app.use("/basket", basketRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
