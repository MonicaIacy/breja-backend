import express from "express"
import findCepUsecase from "../../../domain/usecases/addresses/find.cep.usecase"

class AddressesController {
  async findCep(req: express.Request, res: express.Response) {
    console.log(req)
    const endereco = await findCepUsecase.execute(req.params)
    res.status(200).send(endereco)
  }
}

export default new AddressesController()
