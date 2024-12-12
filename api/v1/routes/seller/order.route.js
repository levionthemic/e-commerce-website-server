const express = require("express");

const controller = require("../../controllers/seller/order.controller");

const routes = express.Router();

routes.get("/" , controller.index);
routes.patch("/changeStatus", controller.changeStatus);
routes.patch("/cancel", controller.cancel);

// routes.get("/search", controller.search);

module.exports = routes; 