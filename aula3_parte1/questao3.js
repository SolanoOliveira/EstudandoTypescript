var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(codigo, saldo, banco) {
        this.codigo = codigo;
        this.saldo = saldo;
        this.banco = banco;
    }
    return Conta;
}());
var PJ = /** @class */ (function (_super) {
    __extends(PJ, _super);
    function PJ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PJ.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    PJ.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado com sucesso.");
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    return PJ;
}(Conta));
var Pessoa_fisica = /** @class */ (function (_super) {
    __extends(Pessoa_fisica, _super);
    function Pessoa_fisica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pessoa_fisica.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Pessoa_fisica.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado com sucesso.");
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    return Pessoa_fisica;
}(Conta));
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, cpf) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._conta = null;
    }
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "conta", {
        get: function () {
            return this._conta;
        },
        set: function (conta) {
            this._conta = conta;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
function adicionarContaAoCliente(cliente, conta) {
    cliente.conta = conta;
}
var clientes = [];
var cliente1 = new Cliente("João", 30, 123456789);
var contaPJ1 = new PJ(1, 1000, "Banco A");
adicionarContaAoCliente(cliente1, contaPJ1);
clientes.push(cliente1);
var cliente2 = new Cliente("Maria", 25, 987654321);
var contaPF1 = new Pessoa_fisica(2, 500, "Banco B");
adicionarContaAoCliente(cliente2, contaPF1);
clientes.push(cliente2);
var cliente3 = new Cliente("Pedro", 35, 456789123);
