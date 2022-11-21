import * as Sequelize from "sequelize"

export default {
  up: (QueryInterface: Sequelize.QueryInterface) => {
    return QueryInterface.bulkInsert("products", [
      {
        productId: 1,
        title: "Breja IPA",
        description: "American IPA com uma dose generosa de lúpulo, muito aromática e com amargor característico.",
        details: "IBU 56 - ABV 5,6% - EBC 6,6",
        price: "R$25,00",
        inventory: true,
        image: "https://asset.cloudinary.com/dz4gujotu/948b46c8159264d4487e1b70da6105f0",
      },
      {
        productId: 2,
        title: "Breja Lager",
        description: "Lager é uma cerveja leve e refrescante, com amargor bem presente e notas florais de lúpulo.",
        details: "IBU 14 - ABV 4,8% - EBC 6",
        price: "R$20,00",
        inventory: true,
        image: "https://asset.cloudinary.com/dz4gujotu/0d4a62154ef0618bfa1873f32fca0af7",
      },
      {
        productId: 3,
        title: "Breja Stout",
        description: "Cerveja escura e intensa com adição de castanhas e chocolate 100% , bem aromática e equilibrada.",
        details: "IBU 45 - ABV 8% - EBC 55",
        price: "R$25,00",
        inventory: true,
        image: "https://asset.cloudinary.com/dz4gujotu/419fa03f32fd2be692644429c97233fd",
      },
      {
        productId: 4,
        title: "Breja Porter",
        description:
          "Cerveja escura produzida com malte torrado, suas principais caracteristicas são notas de café,toffee e biscoitos.",
        details: "IBU 56 - ABV 5,6% - EBC 6,6",
        price: "R$29,00",
        inventory: true,
        image: "https://asset.cloudinary.com/dz4gujotu/43995a38805fa59a17d9670597b7d426",
      },
      {
        productId: 5,
        title: "Breja Weizen",
        description: "Feita com malte de trigo e cevada, aroma frutado e condimentado, lembrando banana e cravo.",
        details: "IBU 9 - ABV 5,5% - EBC 7,2",
        price: "R$25,00",
        inventory: true,
        image: "https://asset.cloudinary.com/dz4gujotu/af57b2f1940157c7d820cdaa715d0827",
      },
      {
        productId: 6,
        title: "Breja Witbier",
        description:
          "Cerveja leve feita com trigo não maltado, cítrica e com muito aroma, suas notas lembram limão, abacaxi e coentro.",
        details: "IBU 4,2 - ABV 5% - EBC 6",
        price: "R$29,00",
        inventory: true,
        image: "https://asset.cloudinary.com/dz4gujotu/a9d0935234549a65474e4784af73c499",
      },
    ])
  },

  down: (QueryInterface: Sequelize.QueryInterface) => {
    return QueryInterface.bulkDelete('products', {})
  }
}
