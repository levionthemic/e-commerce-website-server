const express = require("express");
require("dotenv").config();

const bodyParser = require("body-parser");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const database = require("./config/database");

const adminRoutes = require("./api/v1/routes/admin/index.route");
const clientRoutes = require("./api/v1/routes/client/index.route");
const sellerRoutes = require("./api/v1/routes/seller/index.route");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cookieParser());

// Database
database.connect();

app.use(function (req, res, next) {
  // Allow access request from any computers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', true);
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Routes
adminRoutes(app);
clientRoutes(app);
sellerRoutes(app);

// Listen
app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})