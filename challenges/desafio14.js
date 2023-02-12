db.produtos.find({ 
    ingredientes: "picles",
  },
  {
    _id: 0,
    ingredientes: 1,
    nome: 1,
    valoresNutricionais: {
      $slice: 3,
    },
  });