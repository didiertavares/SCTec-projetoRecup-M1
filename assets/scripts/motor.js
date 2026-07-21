// # o MOTOR do SkillMatch: compatibilidade classes — export

// REGRAS E CLASSES
// import { instanciaCandidato } from "./ui.js"
import { dadosVagas } from "./dados.js"


// -> CRIAÇÃO DA CLASSE "CANDIDATO"
    
export class Candidato{
    constructor(nome, email, telefone, experiencia, area, habilidades, nivel){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.experiencia = experiencia;
    this.area = area;
    this.habilidades = habilidades;
    this.nivel = this.classifNivel(experiencia)
    }

    // método para automatizar avaliação do nivel/senioridade candidato
    classifNivel(a){
    if (a <= 6) return "Estágio"
    if (a > 6 && a <= 48) return "Junior"
    if (a > 48 && a <= 120) return "Pleno"
    if (a > 120) return "Sênior"
    if (a == null) return ''
    }

}

export function criarInstanciaCandidato(a){
    const instanciaCandidato = new Candidato(a.nome, a.email, a.telefone, a.experiencia, a.area, a.habilidades, a.nivel)
    // console.log(instanciaCandidato)
    // console.log(typeof instanciaCandidato)
    // console.log(instanciaCandidato.habilidades)
    return instanciaCandidato
}



// -> CRIAÇÃO DE CLASSE VAGA GENERALISTA:
export class Vaga{
    constructor(id, titulo, empresa, requisitos, score, modalidade, salario){
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.requisitos = requisitos;
    this.score = this.calcularCompat(instanciaCandidato.habilidades)
    this.modalidade = modalidade;
    this.salario = salario
    }

    // draft > arrumar e consertar
    calcularCompat(a){
        let pontosTotais = 0
        let pontosGanhos = 0

        // compatibilidade entre habilidades-candidato e requisitos-vaga
        this.requisitos.forEach(requisito=> {
            pontosTotais++
            if (a.habilidades.includes(requisito)) {pontosGanhos++}
        })
    
        const score = Number(((pontosGanhos/pontosTotais)*100).toFixed(0))
        return score
    }

    classifCompat(score){
        if (score <= 49) console.log("| compatibilidade BAIXA")
        if (score >= 50 && score <= 79) console.log("| compatibilidade MÉDIA")
        if (score >= 80 && score <= 100) console.log("| compatibilidade ALTA")
    }

}

function criarInstanciasVagas(a){
    const arrayInstanciasVagas = a.forEach(vaga => {
        new Vaga(vaga.id, vaga.titulo, vaga.empresa, vaga.requisitos, vaga.score, vaga.modalidade, vaga.salario)
    })
    console.log(arrayInstanciasVagas)
    return arrayInstanciasVagas
}



// -> CRIAÇÃO DE CLASSE FILHA "VAGAS FRONTEND": a classe filha HERDA atributos e métodos da classe pai
export class VagaFE extends Vaga{
    constructor(id, titulo, empresa, requisitos, score, modalidade, salario, senioridade, missingTechs){
    super(id, titulo, empresa, requisitos, score, modalidade, salario)
    this.senioridade = senioridade;
    this.missingTechs = this.identificarTechsFaltantes(habilidades)
    }
        
    calcularCompat(habilidades){
        let pontosTotais = 0
        let pontosGanhos = 0

        // compatibilidade em nível de experiência
        pontosTotais += 2
        if (candidato.nivel === this.senioridade) {pontosGanhos += 2}

        // compatibilidade entre habilidades-candidato e requisitos-vaga
        this.requisitos.forEach(requisito=> {
            pontosTotais++
            if (habilidadesCandidato.includes(requisito)) {pontosGanhos++}
        })
    
        const scorePercent = Number(((pontosGanhos/pontosTotais)*100).toFixed(0))
        return scorePercent
    }

    classifCompat(scorePercent){
        if (scorePercent <= 49) console.log("| compatibilidade BAIXA")
        if (scorePercent >= 50 && scorePercent <= 79) console.log("| compatibilidade MÉDIA")
        if (scorePercent >= 80 && scorePercent <= 100) console.log("| compatibilidade ALTA")
    }
    
    identificarTechsFaltantes(habilidadesCandidato){
        const techsFaltantes = this.requisitos.filter(requisito => {
            return (!habilidadesCandidato.includes(requisito))
        })
    }
    
}

// CLOSURE: contador de análises de compatibilidade feitas
// conceito e sintaxe não dominados: a desenvolver, em andamento. 
// 1ª tentativa:
// function contarAnalises(){
//     contadorAnalises++
//     console.log(`foram realizadas ${contadorAnalises} análises de compatibilidade`)
// }

// 2ª tentativa, + complexa, não funcional, não entendida
// export function criarContadorAnalises() {
//   let totalAnalises = 0;

//   return function registrarAnalise() {
//     totalAnalises += 1;
//     return totalAnalises;
//   };
// }

// const contarAnalises = criarContadorAnalises();

// function analisarCompatibilidade(habilidadesCandidato) {
//   const quantidade = contarAnalises();
//   console.log(`Análise ${quantidade} realizada`);
//   return calcularCompat(habilidadesCandidato);
// }
