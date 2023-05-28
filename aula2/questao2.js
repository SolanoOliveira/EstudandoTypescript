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
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, preco, status) {
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = status;
        this._codigo = Produto.contador + 1;
        Produto.contador++;
    }
    Object.defineProperty(Produto.prototype, "nome", {
        // Getters e Setters públicos
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "categoria", {
        get: function () {
            return this._categoria;
        },
        set: function (value) {
            this._categoria = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (value) {
            this._preco = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        enumerable: false,
        configurable: true
    });
    Produto.contador = 0;
    return Produto;
}());
var ProdutoInfantil = /** @class */ (function (_super) {
    __extends(ProdutoInfantil, _super);
    function ProdutoInfantil(nome, categoria, preco, status, faixa_etaria) {
        var _this = _super.call(this, nome, categoria, preco, status) || this;
        _this._faixa_etaria = _this.validarFaixaEtaria(faixa_etaria);
        return _this;
    }
    ProdutoInfantil.prototype.validarFaixaEtaria = function (faixa_etaria) {
        if (faixa_etaria <= 12) {
            return faixa_etaria;
        }
        else {
            throw new Error("Faixa etária inválida para produto infantil.");
        }
    };
    Object.defineProperty(ProdutoInfantil.prototype, "faixa_etaria", {
        // Getter e Setter específico para ProdutoInfantil
        get: function () {
            return this._faixa_etaria;
        },
        set: function (value) {
            this._faixa_etaria = value;
        },
        enumerable: false,
        configurable: true
    });
    return ProdutoInfantil;
}(Produto));
var novoProdutoInfantil = new ProdutoInfantil("Shampoo2", "Cuidados Pessoais", 30, "ESGOTADO", 12);
console.log(novoProdutoInfantil.nome);
novoProdutoInfantil.nome = "Novo Shampoo";
console.log(novoProdutoInfantil.nome);
console.log(novoProdutoInfantil.codigo);
console.log(novoProdutoInfantil.faixa_etaria);
novoProdutoInfantil.faixa_etaria = 10;
