db.produtos.find(
  {
    $or: [{
      curtidas: 36,
    }, {
      vendidos: 85,
    }],
  },
  {
    curtidas: 1,
    _id: 0,
    nome: 1,
    vendidos: 1,
  },
);