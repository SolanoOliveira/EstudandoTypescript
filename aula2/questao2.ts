type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
  private static contador: number = 0;
  private _nome: string;
  private _categoria: string;
  private _preco: number;
  private _status: Status;
  private _codigo: number;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this._nome = nome;
    this._categoria = categoria;
    this._preco = preco;
    this._status = status;
    this._codigo = Produto.contador + 1;
    Produto.contador++;
  }

  // Getters e Setters públicos
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get categoria(): string {
    return this._categoria;
  }
  public set categoria(value: string) {
    this._categoria = value;
  }

  public get preco(): number {
    return this._preco;
  }
  public set preco(value: number) {
    this._preco = value;
  }

  public get status(): Status {
    return this._status;
  }
  public set status(value: Status) {
    this._status = value;
  }

  public get codigo(): number {
    return this._codigo;
  }
}

class ProdutoInfantil extends Produto {
  private _faixa_etaria: number;
  
  constructor(
    nome: string,
    categoria: string,
    preco: number,
    status: Status,
    faixa_etaria: number
  ) {
    super(nome, categoria, preco, status);
    this._faixa_etaria = this.validarFaixaEtaria(faixa_etaria);
  }
  
  private validarFaixaEtaria(faixa_etaria: number): number {
    if (faixa_etaria <= 12) {
      return faixa_etaria;
    } else {
      throw new Error("Faixa etária inválida para produto infantil.");
    }
  }

  // Getter e Setter específico para ProdutoInfantil
  get faixa_etaria(): number {
    return this._faixa_etaria;
  }
  set faixa_etaria(value: number) {
    this._faixa_etaria = value;
  }
}

const novoProdutoInfantil = new ProdutoInfantil(
  "Shampoo2",
  "Cuidados Pessoais",
  30,
  "ESGOTADO",
  12
);

console.log(novoProdutoInfantil.nome);
novoProdutoInfantil.nome = "Novo Shampoo"; 
console.log(novoProdutoInfantil.nome); 
console.log(novoProdutoInfantil.codigo); 
console.log(novoProdutoInfantil.faixa_etaria); 
novoProdutoInfantil.faixa_etaria = 10; 
