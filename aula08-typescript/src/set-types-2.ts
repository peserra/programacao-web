/**
 * We use interfaces to define typed objects.
 * Typed objects are not classes.
 * We can extend interfaces.
 */
interface MembroAcademico {
    nome: string,
    sobrenome: string
}

interface Professor extends MembroAcademico {
    siape: string
}

interface Aluno extends MembroAcademico {
    ra: string
}

interface AlunoGrad extends Aluno {
    curso: string
}

interface AlunoPos extends Aluno {
    programa: string,
    orientador: string
}

/**
 * Type aliases can be used to name union and
 * intersection types (derived types)
 */
type AlunoTrilha = AlunoGrad & AlunoPos
type AlunoGeral = AlunoGrad | AlunoPos

let a1: AlunoTrilha = {
    nome: 'joao', 
    sobrenome: 'silva',
    ra: '1234',
    curso: 'cc',
    programa: 'ppgcc',
    orientador: 'manoel siqueira'
}

let a2: AlunoGeral = {
    nome: 'maria', 
    sobrenome: 'pereira',
    ra: '5678'
} as AlunoGrad



console.log(a1)

export {}