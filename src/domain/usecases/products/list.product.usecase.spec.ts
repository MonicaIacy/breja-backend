import listProductUsecase from './list.product.usecase'

test("Teste unitário ListproductUsecase", async() => {
    expect(await listProductUsecase.execute()).toEqual([]);
});