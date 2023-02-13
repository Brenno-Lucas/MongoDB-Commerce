db.produtos.updateMany(
  {},
  {
    $rename: {
      descricao: "descricaoSite",
    },
  },
);

db.produtos.find({}, {
  descricaoSite: 1,
  _id: 0,
  nome: 1,
});