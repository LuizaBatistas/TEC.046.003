const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];
const array_produtos = vendasRaw.map (venda => venda.produto);
const set_produtos = new Set (array_produtos);
console.log ([...set_produtos]);
const produtosMap = new Map ();
vendasRaw.forEach (item => {
    produtosMap.set (item.produto, item.preco);
});
console.log (produtosMap.get ("Mousepad"));
let totalCompra = 0
for (let preco of produtosMap.values()){
   totalCompra = totalCompra + preco;
}
console.log (totalCompra);