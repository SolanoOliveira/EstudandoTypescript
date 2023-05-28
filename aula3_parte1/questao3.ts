abstract class Conta {
    protected codigo: number;
    protected saldo: number;
    protected banco: string;
  
    constructor(codigo: number, saldo: number, banco: string) {
      this.codigo = codigo;
      this.saldo = saldo;
      this.banco = banco;
    }
  
    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
  }
  
  class PJ extends Conta {
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log("Saque realizado com sucesso.");
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  }
  
  class Pessoa_fisica extends Conta {
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log("Saque realizado com sucesso.");
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  }
  
  class Cliente {
    private _nome: string;
    private _idade: number;
    private _cpf: number;
    private _conta: Conta | null;
  
    constructor(nome: string, idade: number, cpf: number) {
      this._nome = nome;
      this._idade = idade;
      this._cpf = cpf;
      this._conta = null;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    set nome(nome: string) {
      this._nome = nome;
    }
  
    get idade(): number {
      return this._idade;
    }
  
    set idade(idade: number) {
      this._idade = idade;
    }
  
    get cpf(): number {
      return this._cpf;
    }
  
    set cpf(cpf: number) {
      this._cpf = cpf;
    }
  
    get conta(): Conta | null {
      return this._conta;
    }
  
    set conta(conta: Conta | null) {
      this._conta = conta;
    }
  }
  
  function adicionarContaAoCliente(cliente: Cliente, conta: Conta): void {
    cliente.conta = conta;
  }
  
  const clientes: Cliente[] = [];
  
  const cliente1 = new Cliente("João", 30, 123456789);
  const contaPJ1 = new PJ(1, 1000, "Banco A");
  adicionarContaAoCliente(cliente1, contaPJ1);
  clientes.push(cliente1);
  
  const cliente2 = new Cliente("Maria", 25, 987654321);
  const contaPF1 = new Pessoa_fisica(2, 500, "Banco B");
  adicionarContaAoCliente(cliente2, contaPF1);
  clientes.push(cliente2);
  
  const cliente3 = new Cliente("Pedro", 35, 456789123);
  