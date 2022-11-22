import express from 'express'
import AddressesController from '../controllers/addresses.controller'
import AddressesMiddleware from '../middlewares/addresses.middleware'


import { CommonRoutesConfig } from "./common.routes.config"

export class AddressesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'AddressesRoutes')
  }

  configureRoutes(): express.Application {
    this.app.route(`/addresses/:cep`).get(AddressesMiddleware.validateRequiredAddressParams, AddressesController.findCep)
    // /addresses?cep=
    // /addresses/:cep
    return this.app
  }
}
