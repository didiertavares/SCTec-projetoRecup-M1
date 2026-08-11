// DADOS.JS: resgate localStorage dos objetos instanciaCandidato & array vagas
import { carregarCandidato, carregarVaga } from "./dados.js"


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

    mostrarResumoCandidato(){
        console.log('Nome do(a) candidato(a): ' + this.nome +
            '\nEmail: ' + this.email +
            '\nTelefone: ' + this.telefone +
            '\nExperiência (em meses): ' + this.experiencia +
            '\nÁrea: ' + this.area +
            '\nHabilidades: ' + this.habilidades.join(', ') +
            '\nNível do candidato: ' + this.nivel + '\n')
    }
}

// função de instanciação de objeto new Candidato a partir de class Candidato 
export function criarInstanciaCandidato(a) {
  return new Candidato(a.nome, a.email, a.telefone, a.experiencia, a.area, a.habilidades, a.nivel)
}





// -> CRIAÇÃO DE CLASSE VAGA GENERALISTA:
export class Vaga{
    constructor(id, titulo, empresa, requisitos, modalidade, salario){
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.requisitos = requisitos;
    this.modalidade = modalidade;
    this.salario = salario
    }


    mostrarResumoVaga(){
        console.log('ID: ' + this.id +
            '\nTítulo: ' + this.titulo +
            '\nEmpresa: ' + this.empresa +
            '\nRequisitos: ' + this.requisitos.join(', ') +
            '\nModalidade: ' + this.modalidade +
            '\nSalário: ' + this.salario + '\n')
    }


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



export function criarInstanciaVaga(a){
    return new Vaga(a.id, a.titulo, a.empresa, a.requisitos, a.modalidade, a.salario)
}



// -> CRIAÇÃO DE CLASSE FILHA "VAGAS FRONTEND": a classe filha HERDA atributos e métodos da classe pai
export class VagaFE extends Vaga{
    constructor(id, titulo, area, empresa, requisitos, modalidade, salario, nivel, score, classificacao, missingTechs){
    super(id, titulo, empresa, requisitos, modalidade, salario)
    this.area = area;
    this.nivel = nivel;
    this.score = score;
    this.classificacao = classificacao;
    this.missingTechs = missingTechs
    }

    mostrarResumoVaga(){
        console.log('ID: ' + this.id +
            '\nTítulo: ' + this.titulo +
            '\nÁrea: ' + this.area +
            '\nEmpresa: ' + this.empresa +
            '\nRequisitos: ' + this.requisitos.join(', ') +
            '\nModalidade: ' + this.modalidade +
            '\nSalário: ' + this.salario +
            '\nNível: ' + this.nivel +
            '\nScore: ' + this.score +
            '\nRanking de compatibilidade: ' + this.classificacao +
            '\nTechs faltantes: ' + this.missingTechs +'\n')
    }

    calcularCompat(a){
        let pontosTotais = 0
        let pontosGanhos = 0

        // compatibilidade em nível de experiência
        pontosTotais += 2
        if (a.nivel === this.nivel) {pontosGanhos += 2}

        // compatibilidade entre habilidades-candidato e requisitos-vaga
        this.requisitos.forEach(requisito=> {
            pontosTotais++
            if (a.habilidades.includes(requisito)) {pontosGanhos++}
        })
    
        const score = Number(((pontosGanhos/pontosTotais)*100).toFixed(0))
        return score
    }

    classifCompat(score) {
        if (score <= 49) {
            console.log("| compatibilidade BAIXA");
            return `BAIXA`;
        }
        if (score >= 50 && score <= 79) {
            console.log("| compatibilidade MÉDIA");
            return `MÉDIA`;
        }
        if (score >= 80 && score <= 100){
            console.log("| compatibilidade ALTA");
            return `ALTA`;
        }
    }
    
    identificarTechsFaltantes(a){
        const techsFaltantes = this.requisitos.filter(requisito => {
            return (!a.habilidades.includes(requisito))
        })
        return techsFaltantes
    }
    
}


export function criarInstanciaVagaFE(a){
    return new VagaFE(a.id, a.titulo, a.area, a.empresa, a.requisitos, a.modalidade, a.salario, a.nivel, a.score, a.classificacao, a.missingTechs)
}
