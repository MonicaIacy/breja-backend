import express from 'express'

import { CommonRoutesConfig } from "./common.routes.config"

export class ProductsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'AddressesRoutes')
  }

  configureRoutes(): express.Application {
    this.app.route(`/addresses/:cep`).get()
    // /addresses?cep=
    // /addresses/:cep
    return this.app
  }
}
