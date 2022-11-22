import express from 'express'
import debug from 'debug'
import logger from '../../../infrastructure/logs/winston.logs'
import findCepUsecase from '../../../domain/usecases/addresses/find.cep.usecase'
//importar constants

const log: debug.IDebugger = debug('app: addresses-middleware')

class AddressesMiddleware {
  async validateRequiredAddressParams(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.params.cep.length == 8) {
      next()
    } else {
      res.status(400).send({ error: `Preencha o cep corretamente.` })
    }
  }
}

export default new AddressesMiddleware()
