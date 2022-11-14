import express from 'express'
import debug from 'debug'

import listProductUsecase from '../../../domain/usecases/products/list.product.usecase'

const log: debug.IDebugger = debug('app: products-controller')

class ProductsController {
  async listProducts(req: express.Request, res: express.Response) {
    const products = await listProductUsecase.execute()
    res.status(200).send(products)
  }
}

export default new ProductsController
