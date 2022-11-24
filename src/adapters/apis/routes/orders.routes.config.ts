import express from "express"

import { CommonRoutesConfig } from "./common.routes.config"
//import OrdersController from "../controllers/orders.controller"

export class OrdersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "OrdersRoutes")
  }

  configureRoutes(): express.Application {
    this.app.route(`/orders`).post()

    return this.app
  }
}
