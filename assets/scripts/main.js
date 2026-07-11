
// lista de candidatos disponíveis a avaliar
const candidatos = []

// CRIAÇÃO DE UM OBJETO CANDIDATO a partir de sua classe
// -> inserção desse candidato no array geral (base RH) de candidatos disponiveis
candidatos.push(new Candidato('Tânia FONSECA', 'FrontEnd', ['JavaScript', 'HTML', 'CSS', 'Github', 'lógica de programação', 'Kanban'], 36, this.nivel))

candidatos.push(new Candidato('Felipe BONAVENTURA', 'FrontEnd', ['JavaScript', 'HTML', 'CSS', 'Github', 'lógica de programação', 'Kanban', "React", "Git", "Bootstrap", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"], 106, this.nivel))

candidatos.push(new Candidato('Beatriz MARTINS', 'FrontEnd', ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", 'Kanban', "Bootstrap", "React", "Next.js", 'Node.js'], 45, this.nivel))
// console.log(candidatos)


// APRESENTAÇÃO DO(S) CANDIDATO(S)
console.log('LISTA DE CANDIDATOS DISPONÍVEIS NA BASE RH: \n')
candidatos.forEach(candidato =>{
    console.log('Nome do(a) candidato(a): ' + candidato.nome +
    '\nÁrea: ' + candidato.area +
    '\nSkills: ' + candidato.habilidades.join(', ') +
    '\nExperiência (em meses): ' + candidato.experienciaMeses +
    '\nNível do candidato: ' + candidato.nivel + '\n')
})

// criação de campo de entrada de dados do usuário: escolha de um candidato dentro os disponíveis
let inputCandidato = input('Qual candidato você quer avaliar?  ')
// criação de uma variável n p/ acessar determinado perfil de cnadidato
const n = Number(inputCandidato)

if (n >= 0 && n < candidatos.length) {
    console.log(`\nOk, vamos avaliar a compatibilidade de ${candidatos[n].nome} com as vagas disponíveis\n`)
} else {
    console.log('Opção inexistente! Por favor escolha outro candidato');
    return;
}



// CONSTRUÇÃO DO ARRAY DE OBJETOS-VAGAS A PARTIR DA CLASSE VAGADEV
const vagasIndex = []

vagasIndex.push(new VagaFE(1, 'Desenvolvedor Front-End', 'StormCode', ['JavaScript', 'Github', 'lógica de programação'], 'Remoto', 2800, 'Junior', '', ''))

vagasIndex.push(new VagaFE(2, 'Estagiário Front-End', 'TechRockode', ['JavaScript', 'Github', 'lógica de programação', 'Kanban'], 'Híbrido', 1800, "Estágio", '', ''))

vagasIndex.push(new VagaFE(3, 'Programador Javascript', 'GoBuzz Lab', ['JavaScript', 'arrays', 'objetos', 'funções', 'Github', 'lógica de programação'], 'Presencial', 3000, "Junior", '', ''))

vagasIndex.push(new VagaFE(4, "Desenvolvedor Front-End", "WebStart Tecnologia", ["JavaScript", "HTML", "CSS", 'Github', 'lógica de programação', "React", "Git"], "Remoto", 4500, "Junior", '', ''))

vagasIndex.push(new VagaFE(5, "Estagiário em Desenvolvimento Web", "Inova Digital", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Bootstrap"], "Híbrido", 1800, "Estágio", '', ''))

vagasIndex.push(new VagaFE(6, "Front-End Developer (React) - Pleno", "Fintech Nexus", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Next.js", "Tailwind CSS"], "Remoto", 8500, "Pleno", '', ''))

vagasIndex.push(new VagaFE(7, "Desenvolvedor Full Stack JS", "Core Systems", ["JavaScript", 'Github', 'lógica de programação', "Node.js", "Express", "React", "MongoDB"], "Presencial", 5000, "Junior", '', ''))

vagasIndex.push(new VagaFE(8, "Desenvolvedor Front-End focado em UI", "Creative Studio", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Sass", "Figma"], "Remoto", 4000, "Junior", '', ''))

vagasIndex.push(new VagaFE(9, "Engenheiro de Software React", "BigTech Brasil", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Redux", "Jest", "AWS"], "Remoto", 15000, "Sênior", '', ''))

vagasIndex.push(new VagaFE(10, "Dev Front-End", "Inclusiva Tech", ['Github', 'lógica de programação', "JavaScript", "HTML", "CSS", "React"], "Remoto", 4200, "Junior", '', ''))

vagasIndex.push(new VagaFE(11, "Desenvolvedor JavaScript (Node.js)", "LogiTech", ['Github', 'lógica de programação', "JavaScript", "Node.js", "TypeScript", "PostgreSQL", "Docker"], "Híbrido", 9000, "Pleno", '', ''))

vagasIndex.push(new VagaFE(12, "Desenvolvedor Front-End Júnior", "Pixel Perfeito Software", ['Github', 'lógica de programação', "JavaScript", "HTML", "CSS", "Vue.js"], "Híbrido", 4800, "Junior", '', ''))

vagasIndex.push(new VagaFE(13, "Desenvolvedor Front-End Mobile (React Native)", "AppNation", ['Github', 'lógica de programação', "JavaScript", "TypeScript", "React Native", "Android Studio", "iOS"], "Remoto", 9500, "Pleno", '', ''))
// console.log(vagasIndex)


// APRESENTAÇÃO FORMATADA DAS VAGAS INDEXADAS (SUPOSTAMENTE PELO BUSCADOR)
console.log('\n')
console.log('LISTA DE VAGAS FRONT-END INDEXADAS\n')


vagasIndex.forEach(item =>{
    console.log(`${item.id}. ${item.empresa} -> ${item.titulo}, nível ${item.nivel}\nRequisitos: ${item.requisitos}\nSalario: R$ ${item.salario}\nModo: ${item.modalidade}\n`)
    console.log('\n')
})


// CRIAÇÃO DE ARRAY DAS HABILIDADES DO CANDIDATO[n]
const techsCandidato = candidatos[n].habilidades

// criação de campo de entrada de dados do usuário: escolha de uma vaga a analisar para o perfil do candidato 
let inputVaga = input('Qual vaga você quer avaliar?  ')
// criação de um contador v para varrer o array vagasIndex
const v = Number(inputVaga)-1

if(v >= 0 && v < vagasIndex.length) {console.log(`\nOk, vamos avaliar a compatibilidade de ${candidatos[n].nome} especificamente com a vaga de ${vagasIndex[v].titulo} na ${vagasIndex[v].empresa}!\n`)}
else {
    console.log('Opção inexistente! Por favor escolha outro candidato')
    return
}


// ADERÊNCIA DO PERFIL CANDIDATO[n] À 1 VAGA SELECIONADA: análise única
// > CRIAÇÃO DE FUNÇÃO PARA:
// 1. cálculo da pontuação da vaga específica
// 2. cálculo de score a partir dessa pontuação
// 3. levantamento das techs faltantes do candidato para esta vaga a partir de .filter e .includes
function calcularCompatVaga(n, v) {

    let pontosTotais = 0
    let pontosGanhos = 0

    // compatibilidade em nível de experiência
    pontosTotais += 2
    if (candidatos[n].nivel === vagasIndex[v].nivel) {pontosGanhos += 2}
    else {console.log('nível de experiência INCOMPATÍVEL!')}

    // compatibilidade entre habilidades-Candidato e requisitos-Vaga
    vagasIndex[v].requisitos.forEach(requisito=> {
        pontosTotais++
        if (techsCandidato.includes(requisito)) {pontosGanhos++}
    })
    
    const scorePercent = Number(((pontosGanhos/pontosTotais)*100).toFixed(0))

    console.log(`${candidatos[n].nome} tem ${scorePercent}% de compatibilidade com a vaga de ${vagasIndex[v].titulo} na ${vagasIndex[v].empresa}`)

    const techsFaltantes = vagasIndex[v].requisitos.filter(requisito => {
        return (!techsCandidato.includes(requisito))
    })
    
    console.log(`Para esta vaga, faltam as techs seguintes: \n${techsFaltantes.join('\n')}\n`)

}
calcularCompatVaga(n, v)


// na falta de ASYNC \ AWAIT, para pausar temporariamente a execução, abre-se um input de CONTINUAR ou ENCERRAR:
// CONTINUAR leva a sequência da análise de compatibilidade sobre TODA as vagas
let inputContinuar = input('Ver a análise de compatibilidade de todas as vagas? (tecle S para continuar)  ')
if (inputContinuar.toLowerCase() !== 's') {
    console.log('Programa encerrado.')
    return
}

// COMPATIBILIDADE DO(A) CANDIDATO(A) COM A LISTA DE VAGAS
// > CRIAÇÃO DE FUNÇÃO PARA:
// 1. cálculo de pontuação
// 2. cálculo de score a partir da pontuação -> inserção no array vagasIndex via atributo dedicado na classe VagaFE
// 3. levantamento de techs faltantes a partir de .filter e .includes -> inserção no array vagasIndex via atributo dedicado na classe VagaFE
let i
function calculoScoreTechsVagas(n, i) {

    let pontosTotais = 0
    let pontosGanhos = 0

    // compatibilidade em nível de experiência
    pontosTotais += 2
    if (candidatos[n].nivel === vagasIndex[i].nivel) {pontosGanhos += 2}
    // console.log(pontosGanhos, pontosTotais)

    // compatibilidade entre habilidades-Candidato e requisitos-Vaga
    vagasIndex[i].requisitos.forEach(requisito=> {
        pontosTotais++
        if (techsCandidato.includes(requisito)) {pontosGanhos++}
    })

    // cálculo do score percentual de aderência do candoadto à vaga -> inserção no array via atributo score
    const scorePercent = Number(((pontosGanhos/pontosTotais)*100).toFixed(0))
    vagasIndex[i].score = scorePercent
    // console.log(vagasIndex[i].score)

    // levantamento de techs/requisitos da vaga faltantes no perfil do candidato 
    // -> inserção no array via atributo missingTechs
    const techsFaltantes = vagasIndex[i].requisitos.filter(requisito => {
        return (!techsCandidato.includes(requisito))
    })
    vagasIndex[i].missingTechs = techsFaltantes
}

console.log(`\nCOMPATIBILIDADE DA LISTA DE VAGAS DISPONÍVEIS COM: ${candidatos[n].nome}`)
for (i = 0; i < vagasIndex.length; i++){
    calculoScoreTechsVagas(n, i)
}

// uso de .SORT() no array vagasIndex para reordená-lo em ordem decrescente em função do valor de score
const vagasIndexOrdenadas = vagasIndex.sort((a, b) => b.score - a.score)

function classifCompat(a){
    if (a <= 49) console.log("| compatibilidade BAIXA")
    if (a >= 50 && a <= 79) console.log("| compatibilidade MÉDIA")
    if (a >= 80 && a <= 100) console.log("| compatibilidade ALTA")
}

for (i = 0; i < vagasIndexOrdenadas.length; i++){
    const scorePercent2 = vagasIndexOrdenadas[i].score
    // console.log(scorePercent2)
    const techsFaltantes2 = vagasIndexOrdenadas[i].missingTechs
    // console.log(techsFaltantes2)
    console.log(`| ${i+1} - ${vagasIndexOrdenadas[i].titulo} na ${vagasIndexOrdenadas[i].empresa}\n| score: ${vagasIndexOrdenadas[i].score}%`)
    classifCompat(scorePercent2)
    if (techsFaltantes2.length != 0) {
        console.log(`| -> faltam as techs seguintes: ${techsFaltantes2.join(', ')}\n`)
    } else {console.log('| -> o(a) candidato(a) possui todas as habilidades necessárias\n')}

}

console.log(`CONCLUSÃO:\nAs vagas com as quais ${candidatos[n].nome} tem mais compatibilidade são:\n- ${vagasIndexOrdenadas[0].titulo} na ${vagasIndexOrdenadas[0].empresa}: ${vagasIndexOrdenadas[0].score}%\n- ${vagasIndexOrdenadas[1].titulo} na ${vagasIndexOrdenadas[1].empresa}: ${vagasIndexOrdenadas[1].score}%\n- ${vagasIndexOrdenadas[2].titulo} na ${vagasIndexOrdenadas[2].empresa}: ${vagasIndexOrdenadas[2].score}%\n- ${vagasIndexOrdenadas[3].titulo} na ${vagasIndexOrdenadas[3].empresa}: ${vagasIndexOrdenadas[3].score}%\nBaseado no presente estudo de aderência entre as vagas e as habilidades do(a) candidato(a), as techs faltantes, que convem estudar, das 4 melhores vagas para o candidato são:\n${vagasIndexOrdenadas[0].missingTechs}\n${vagasIndexOrdenadas[1].missingTechs}\n${vagasIndexOrdenadas[2].missingTechs}\n${vagasIndexOrdenadas[3].missingTechs}`)