var CategoriaLivro;
(function (CategoriaLivro) {
    CategoriaLivro["Ficcao"] = "Fic\u00E7\u00E3o";
    CategoriaLivro["Fantasia"] = "Fantasia";
    CategoriaLivro["Romance"] = "Romance";
    CategoriaLivro["Suspense"] = "Suspense";
    CategoriaLivro["Biografia"] = "Biografia";
})(CategoriaLivro || (CategoriaLivro = {}));
var livro1 = {
    nome: "aaaaaaaaa",
    preco: 2,
    categoria: CategoriaLivro.Biografia
};
var livro2 = {
    nome: "bbbbbbbbb",
    preco: 3,
    categoria: CategoriaLivro.Fantasia
};
var livro3 = {
    nome: "ccccccc bbbbbbbbbbb",
    preco: 4,
};
var biblioteca = new Map();
biblioteca.set(livro1.nome, livro1);
biblioteca.set(livro2.nome, livro2);
biblioteca.set(livro3.nome, livro3);
biblioteca.forEach(function (item) {
    if ('categoria' in item) {
        console.log("Livro:");
        console.log("Nome: " + item.nome);
        console.log("Preço: " + item.preco);
        console.log("Categoria: " + item.categoria);
    }
});
