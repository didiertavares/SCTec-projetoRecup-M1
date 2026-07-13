// REGRAS E CLASSES

// -> CRIAÇÃO DA CLASSE "CANDIDATO"
    
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

const candidato = new Candidato(this.nome, this.area, this.habilidades, this.experienciaMeses, this.nivel)

// -> CRIAÇÃO DE ARRAY DAS HABILIDADES DO CANDIDATO[n]
//    OBS: verificar e alterar infos passadas dentro da const
const habilidadesCandidato = candidato.habilidades

let contadorAnalises = 0

// -> CRIAÇÃO DE CLASSE VAGA GENERALISTA:
export class Vaga{
    constructor(id, titulo, empresa, requisitos, score, modalidade, salario){
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.requisitos = requisitos;
    this.score = calcularCompat(habilidadesCandidato)
    this.modalidade = modalidade;
    this.salario = salario
    }

    // draft > arrumar e consertar
    calcularCompat(habilidadesCandidato){
        let pontosTotais = 0
        let pontosGanhos = 0

        // compatibilidade entre habilidades-candidato e requisitos-vaga
        this.requisitos.forEach(requisito=> {
            pontosTotais++
            if (habilidadesCandidato.includes(requisito)) {pontosGanhos++}
        })
    
        const scorePercent = Number(((pontosGanhos/pontosTotais)*100).toFixed(0))
        return scorePercent
    }
    contarAnalises().contadorAnalises
}

// -> CRIAÇÃO DE CLASSE FILHA "VAGAS FRONTEND": a classe filha HERDA atributos e métodos da classe pai
export class VagaFE extends Vaga{
    constructor(id, titulo, empresa, requisitos, score, modalidade, salario, senioridade, missingTechs){
    super(id, titulo, empresa, requisitos, score, modalidade, salario)
    this.senioridade = senioridade;
    this.missingTechs = identificarTechsFaltantes(habilidadesCandidato)
    }
        
    calcularCompat(habilidadesCandidato){
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
    identificarTechsFaltantes(habilidadesCandidato){
        const techsFaltantes = this.requisitos.filter(requisito => {
            return (!habilidadesCandidato.includes(requisito))
        })
    }
}

function contarAnalises(){
    contadorAnalises++
    console.log(`foram realizadas ${contadorAnalises} análises de compatibilidade`)
}

