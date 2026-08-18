// DADOS.JS: resgate localStorage dos objetos instanciaCandidato & array vagas
import { carregarCandidato, carregarVaga } from "./dados.js"

// FILTROS.JS: filtragem das vagas por localização e modalidade, a ser aplicada em buscarVagas() 
import { elegibilidadeVaga } from "./filtros.js";


// -> CRIAÇÃO DA CLASSE "CANDIDATO"   
export class Candidato{
    constructor(nome, email, telefone, estado, experiencia, area, habilidades, nivel, aceitaVagasRemotas){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.estado = estado;
    this.experiencia = experiencia;
    this.area = area;
    this.habilidades = habilidades;
    this.nivel = this.classifNivel(experiencia);
    this.aceitaVagasRemotas = aceitaVagasRemotas
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
            '\nEstado (UF:): ' + this.estado +
            '\nExperiência (em meses): ' + this.experiencia +
            '\nÁrea: ' + this.area +
            '\nHabilidades: ' + this.habilidades.join(', ') +
            '\nNível do candidato: ' + this.nivel + '\n') +
            '\nAceita vagas remotas? ' + this.aceitaVagasRemotas
    }
}

// função de instanciação de objeto new Candidato a partir de class Candidato 
export function criarInstanciaCandidato(a) {
  return new Candidato(a.nome, a.email, a.telefone, a.estado, a.experiencia, a.area, a.habilidades, a.nivel, a.aceitaVagasRemotas)
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

// função de instanciação de objeto new Vaga a partir de class Vaga
export function criarInstanciaVaga(a){
    return new Vaga(a.id, a.titulo, a.empresa, a.requisitos, a.modalidade, a.salario)
}





// -> CRIAÇÃO DE CLASSE FILHA "VAGA REMOTA": a classe filha HERDA atributos e métodos da classe pai
export class VagaRemota extends Vaga{
    constructor(id, titulo, area, empresa, requisitos, modalidade, salario, nivel, estado, score, classificacao, missingTechs){
    super(id, titulo, empresa, requisitos, modalidade, salario)
    this.area = area;
    this.nivel = nivel;
    this.estado = estado;
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
            '\nEstado (UF): ' + this.estado +
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
        this.requisitos.forEach(requisito => {
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

// função de instanciação de objeto new VagaRemota a partir de class VagaRemota
export function criarInstanciaVagaRemota(a){
    return new VagaRemota(a.id, a.titulo, a.area, a.empresa, a.requisitos, a.modalidade, a.salario, a.nivel, a.estado, a.score, a.classificacao, a.missingTechs)
}
