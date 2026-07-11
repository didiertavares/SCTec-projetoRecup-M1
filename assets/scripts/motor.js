// ARQUIVO DE REGRAS E CLASSES

// CRIAÇÃO DA CLASSE "CANDIDATO"
    
    // função para automatizar avaliação do nivel candidato
export function classifNivel(a){
    if (a <= 6) return "Estágio"
    if (a > 6 && a <= 48) return "Junior"
    if (a > 48 && a <= 120) return "Pleno"
    if (a > 120) return "Sênior"
    if (a == null) return ''
}

export class Candidato{
    constructor(nome, area, habilidades, experienciaMeses, nivel){
    this.nome = nome;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
    this.nivel = classifNivel(experienciaMeses)
    }
}


// CRIAÇÃO DE CLASSE VAGA GENERALISTA:
export class Vaga{
    constructor(id, titulo, empresa, requisitos, modalidade, salario){
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.requisitos = requisitos;
    this.modalidade = modalidade;
    this.salario = salario
    }
}

// CRIAÇÃO DE CLASSE FILHA "VAGAS FRONTEND": a classe filha HERDA atributos e métodos da classe pai
export class VagaFE extends Vaga{
    constructor(id, titulo, empresa, requisitos, modalidade, salario, nivel, score, missingTechs){
       super(id, titulo, empresa, requisitos, modalidade, salario)
       this.nivel = nivel;
       this.score = score;
       this.missingTechs = missingTechs
    }
    exibirResumo(){
    console.log(`${this.id} | ${this.empresa} -> ${this.titulo}, nível ${this.nivel}'\n'Requisitos: ${this.requisitos}'\n'Salario: R$ ${this.salario}'\n'Modo: ${this.modalidade}\nScore: ${this.score}\nMissng Techs: ${this.missingTechs}`)
    }
}T005 > MOTOR.js: criação de classe candidato, função classifNivel  e classes Vagas e VagasFE
