db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $unset: {
      curtidas: "",
    },
  },
);

db.produtos.find(
  {},
  {
    curtidas: 1,
    _id: 0,
    nome: 1,
  },
);