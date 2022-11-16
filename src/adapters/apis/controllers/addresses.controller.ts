import express from 'express'
import findCepUsecase from '../../../domain/usecases/addresses/find.cep.usecase'


class AddressesController {
    async createClient(req: express.Request, res: express.Response) {
        const endereco = await findCepUsecase.execute(req.body);
        res.status(201).send(endereco);
    }
    }
  
 export default new AddressesController();