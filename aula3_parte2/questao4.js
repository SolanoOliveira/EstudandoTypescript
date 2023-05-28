var Turno;
(function (Turno) {
    Turno["Manha"] = "manh\u00E3";
    Turno["Tarde"] = "tarde";
    Turno["Noite"] = "noite";
})(Turno || (Turno = {}));
var AreaCurso;
(function (AreaCurso) {
    AreaCurso["Humanas"] = "humanas";
    AreaCurso["Biologicas"] = "biologicas";
    AreaCurso["Exatas"] = "exatas";
})(AreaCurso || (AreaCurso = {}));
var Turma = /** @class */ (function () {
    function Turma(id, descricao, turno, curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
    return Turma;
}());
function validarTamanhoMinimo(tamanhoMinimo) {
    return function (target, propertyKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (newVal) {
            if (newVal.length < tamanhoMinimo) {
                throw new Error("A descri\u00E7\u00E3o deve ter no m\u00EDnimo ".concat(tamanhoMinimo, " caracteres."));
            }
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
var turmas = [];
var turma1 = new Turma(1, "Turma A", Turno.Manha, {
    descricao: "Curso de Matemática",
    area: AreaCurso.Exatas,
});
turmas.push(turma1);
var turma2 = new Turma(2, "Turma B", Turno.Tarde, {
    descricao: "Curso de História",
    area: AreaCurso.Humanas,
});
turmas.push(turma2);
for (var _i = 0, turmas_1 = turmas; _i < turmas_1.length; _i++) {
    var turma = turmas_1[_i];
    console.log("ID: ", turma.id);
    console.log("Descrição: ", turma.descricao);
    console.log("Turno: ", turma.turno);
    console.log("Curso: ", turma.curso.descricao);
    console.log("Área: ", turma.curso.area);
    console.log("---------------------------------");
}
