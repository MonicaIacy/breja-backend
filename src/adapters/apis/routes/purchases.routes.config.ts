import express from "express"

import { CommonRoutesConfig } from "./common.routes.config"
import PurchasesController from "../controllers/purchases.controller"

export class PurchasesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "PurchasesRoutes")
  }

  configureRoutes(): express.Application {
    this.app.route(`/purchases`).get(PurchasesController.createPurchase)

    return this.app
  }
}
