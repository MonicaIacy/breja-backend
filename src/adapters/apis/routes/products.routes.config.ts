import express from 'express'

import { CommonRoutesConfig } from "./common.routes.config"
import ProductsController from '../controllers/products.controller'

export class ProductsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'ProductsRoutes')
  }

  configureRoutes(): express.Application {
    this.app.route(`/products`).get(ProductsController.listProducts)

    return this.app
  }
}
