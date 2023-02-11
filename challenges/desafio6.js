
db.produtos.find(
  {
    curtidas: {
      $gt: 10,
      $lt: 100,
    },
  },
  {
    curtidas: 1,
    _id: 0,
    nome: 1,
  },
);