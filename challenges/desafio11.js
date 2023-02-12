db.produtos.find(
  {
    nome: {
      $nin: ["Big Mac", "McChicken"],
    },
  },
  {
    curtidas: 1,
    _id: 0,
    nome: 1,
    vendidos: 1,
  },
);