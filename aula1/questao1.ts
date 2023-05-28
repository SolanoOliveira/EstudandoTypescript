enum CategoriaLivro {
  Ficcao = "Ficção",
  Fantasia = "Fantasia",
  Romance = "Romance",
  Suspense = "Suspense",
  Biografia = "Biografia"
}

interface Livro {
  nome: string;
  preco: number;
  categoria?: CategoriaLivro;
}

interface Autor {
  nome: string;
  idade: number;
}

type AutorLivro = Autor | Livro;

const livro1: Livro = {
  nome: "aaaaaaaaa",
  preco: 2,
  categoria: CategoriaLivro.Biografia
};

const livro2: Livro = {
  nome: "bbbbbbbbb",
  preco: 3,
  categoria: CategoriaLivro.Fantasia
};

const livro3: Livro = {
  nome: "ccccccc bbbbbbbbbbb",
  preco: 4,
};

const biblioteca: Map<string, AutorLivro> = new Map();
biblioteca.set(livro1.nome, livro1);
biblioteca.set(livro2.nome, livro2);
biblioteca.set(livro3.nome, livro3);

biblioteca.forEach((item) => {
  if ('categoria' in item) {
    console.log("Livro:");
    console.log("Nome: " + item.nome);
    console.log("Preço: " + item.preco);
    console.log("Categoria: " + item.categoria);
  }
});
