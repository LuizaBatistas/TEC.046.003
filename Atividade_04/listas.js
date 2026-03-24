// 1. ARRAYS

// 1.1 Array Simples
const frutas = ["Maçã" , "Banana" , "Laranja"];
// 1.2 FIFO (Fila)
const fila = ["Ana", "Beto", "Caio", "Daiane"];
fila.push ("Ellen");
const primeiro = fila.shift(); // Primeiro item
console.log(primeiro);
// 1.3 FILO (Pilha)
const pilha = ["Chama de Ferro", 
    "Quarta Asa", 
    "A guerra da papoula"];
    pilha.push ("Bindling 13");
    const livro = pilha.pop ();
    console.log (livro);
    // 1.4 Buscar se existe
    const temLaranja = frutas.includes ("Laranja");
    const temManga = frutas.includes ("Manga")
    console.log (temLaranja);
    console.log (temManga);

    // 2. Sets (Conjuntos)
    // 2.1 Adicionamento duplicados
    const matriculas = new Set([1001, 1002, 1005, 1009, 1002]);
    console.log ([ ...matriculas ]);
    // 2.2 Adicionar
    const cores = new Set(["Azul", "Violeta", "Turquesa"]);
    cores.add("Púrpura");
    cores.add("Azul real");
    cores.add ("Branco");
    console.log ([...cores])
    // 2.3 Buscar se existe
    const temAzul = cores.has ("Azul");
    const temAmarelo = cores.has ("Amarelo");
    console.log (temAzul);
    console.log (temAmarelo);
// 2.4 Conventer array em set
const convidados = ["Bruno", "Henrique", "Julia", "Carla","Julia", "Breno", "Henrique"];
const convidados_unicos = new Set (convidados);
console.log([...convidados_unicos]);

// 3. Map (Mapas)
// 3.1 Cadastro de preços
const produtos = new Map();
produtos.set ("Arroz", 5,99);
produtos.set ("Ovos", 12,99);
produtos.set ("Leite", 4,59);
// 3.2 Buscando um valor
console.log (valorArroz);


