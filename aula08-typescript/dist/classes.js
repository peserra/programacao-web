"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    constructor(nome, sobrenome, ra) {
        this._ra = "";
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.ra = ra;
    }
    set ra(ra) {
        if (/^\d+$/.test(ra)) {
            this._ra = ra;
        }
        else {
            throw new Error("RA must be digits");
        }
    }
    toString() {
        return `nome: ${this.nome} \n`
            + `sobrenome: ${this.sobrenome}\n`
            + `ra: ${this.ra}\n`;
    }
}
class AlunoGrad extends Aluno {
    constructor(nome, sobrenome, ra, curso) {
        super(nome, sobrenome, ra);
        this.curso = curso;
    }
    toString() {
        return super.toString() + `curso: ${this.curso}\n`;
    }
}
class AlunoPos extends Aluno {
    constructor(nome, sobrenome, ra, programa, orientador) {
        super(nome, sobrenome, ra);
        this.programa = programa;
        this.orientador = orientador;
    }
    toString() {
        return super.toString() + `programa: ${this.programa}\n`
            + `orientador: ${this.orientador}`;
    }
}
// const a0 = new Aluno('joao', 'silva', '1234')
const a1 = new AlunoGrad('joao', 'silva', '1234', 'bcc');
const a2 = new AlunoPos('maria', 'pereira', '5678', 'ppgcc', 'cassio silva');
// console.log(a0 + "");
console.log(a1 + "");
console.log(a2 + "");
