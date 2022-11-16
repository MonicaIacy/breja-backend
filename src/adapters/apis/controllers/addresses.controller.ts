import express from 'express'
import findCepUsecase from '../../../domain/usecases/addresses/find.cep.usecase'
import {IUserEntity} from '../../../domain/entities/users/user.entity'


class AddressesController {
    async findCep(req: express.Request, res: express.Response) {
        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')

        console.log(req)
        const endereco = await findCepUsecase.execute(req.body);
        res.status(201).send(endereco);
    }
    }
  
 export default new AddressesController();