import findCepUseCase from "./find.cep.usecase"

test(" Teste unitário de findCepUsecase", async () => {
  const cep: any = {
    cep: 13386060,
  }
  await findCepUseCase.execute(cep)
  const cep2: object = {
      cep: "13386-060",
      logradouro: "Rua João Severiano da Silva",
      complemento: "",
      bairro: "Jardim Santa Rita I",
      cidade: "Nova Odessa",
      estado: "SP",
  }

  expect(await findCepUseCase.execute(cep)).toMatchObject(cep2)
})
