enum Turno {
    Manha = "manhã",
    Tarde = "tarde",
    Noite = "noite",
  }
  
  enum AreaCurso {
    Humanas = "humanas",
    Biologicas = "biologicas",
    Exatas = "exatas",
  }
  
  class Turma {
    id: number;
    descricao: string;
    turno: Turno;
    curso: { descricao: string; area: AreaCurso };
  
    constructor(
      id: number,
      descricao: string,
      turno: Turno,
      curso: { descricao: string; area: AreaCurso }
    ) {
      this.id = id;
      this.descricao = descricao;
      this.turno = turno;
      this.curso = curso;
    }
  }
  
  function validarTamanhoMinimo(tamanhoMinimo: number) {
    return function (target: any, propertyKey: string) {
      let value: any;
  
      const getter = function () {
        return value;
      };
  
      const setter = function (newVal: any) {
        if (newVal.length < tamanhoMinimo) {
          throw new Error(`A descrição deve ter no mínimo ${tamanhoMinimo} caracteres.`);
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
  
  const turmas: Turma[] = [];
  
  const turma1 = new Turma(1, "Turma A", Turno.Manha, {
    descricao: "Curso de Matemática",
    area: AreaCurso.Exatas,
  });
  turmas.push(turma1);
  
  const turma2 = new Turma(2, "Turma B", Turno.Tarde, {
    descricao: "Curso de História",
    area: AreaCurso.Humanas,
  });
  turmas.push(turma2);
  
  for (const turma of turmas) {
    console.log("ID: ", turma.id);
    console.log("Descrição: ", turma.descricao);
    console.log("Turno: ", turma.turno);
    console.log("Curso: ", turma.curso.descricao);
    console.log("Área: ", turma.curso.area);
    console.log("---------------------------------");
  }