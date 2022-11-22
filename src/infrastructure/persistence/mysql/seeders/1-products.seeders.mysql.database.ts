import * as Sequelize from "sequelize"

export default {
  up: (QueryInterface: Sequelize.QueryInterface) => {
    return QueryInterface.bulkInsert("products", [
      {
        productId: 1,
        title: "Breja IPA",
        description: "American IPA com uma dose generosa de lúpulo, muito aromática e com amargor característico.",
        details: "IBU 56 - ABV 5,6% - EBC 6,6",
        price: "25,00",
        inventory: true,
        image: "https://res.cloudinary.com/dmcfe589p/image/upload/v1669116023/cervejaria/IPA_xedaxk.jpg",
      },
      {
        productId: 2,
        title: "Breja Lager",
        description: "Lager é uma cerveja leve e refrescante, com amargor bem presente e notas florais de lúpulo.",
        details: "IBU 14 - ABV 4,8% - EBC 6",
        price: "20,00",
        inventory: true,
        image: "https://res.cloudinary.com/dmcfe589p/image/upload/v1669116023/cervejaria/LAGER_zdam2b.jpg",
      },
      {
        productId: 3,
        title: "Breja Stout",
        description: "Cerveja escura e intensa com adição de castanhas e chocolate 100% , bem aromática e equilibrada.",
        details: "IBU 45 - ABV 8% - EBC 55",
        price: "25,00",
        inventory: true,
        image: "https://res.cloudinary.com/dmcfe589p/image/upload/v1669116023/cervejaria/STOUT_gtkkqb.jpg",
      },
      {
        productId: 4,
        title: "Breja Porter",
        description:
          "Cerveja escura produzida com malte torrado, suas principais caracteristicas são notas de café,toffee e biscoitos.",
        details: "IBU 56 - ABV 5,6% - EBC 6,6",
        price: "29,00",
        inventory: true,
        image: "https://res.cloudinary.com/dmcfe589p/image/upload/v1669116023/cervejaria/PORTER_qd8i5y.jpg",
      },
      {
        productId: 5,
        title: "Breja Weizen",
        description: "Feita com malte de trigo e cevada, aroma frutado e condimentado, lembrando banana e cravo.",
        details: "IBU 9 - ABV 5,5% - EBC 7,2",
        price: "25,00",
        inventory: true,
        image: "https://res.cloudinary.com/dmcfe589p/image/upload/v1669115157/cervejaria/Cerveja_Arte_2_rotus0.jpg",
      },
      {
        productId: 6,
        title: "Breja Witbier",
        description:
          "Cerveja leve feita com trigo não maltado, cítrica e com muito aroma, suas notas lembram limão, abacaxi e coentro.",
        details: "IBU 4,2 - ABV 5% - EBC 6",
        price: "29,00",
        inventory: true,
        image: "https://res.cloudinary.com/dmcfe589p/image/upload/v1669116023/cervejaria/WITBIER_fbdqoc.jpg",
      },
    ])
  },

  down: (QueryInterface: Sequelize.QueryInterface) => {
    return QueryInterface.bulkDelete('products', {})
  }
}
