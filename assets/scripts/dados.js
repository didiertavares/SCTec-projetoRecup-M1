// PERSISTÊNCIA DE DADOS > localStorage: salvar e carregar perfil candidato
function carregarCandidato(){
    const textoCandidato = localStorage.getItem('candidato')
    return JSON.parse(textoCandidato) || []
}

function salvarCandidato(candidato){
    localStorage.setItem('candidato', JSON.stringify(candidato))
}


// PERSISTÊNCIA DE DADOS: > localStorage: salvar e carregar vaga analisada
function carregarVaga(){
    const textoVaga = localStorage.getItem('vaga')
    return JSON.parse(textoVaga) || []
}

function salvarVaga(vaga){
    localStorage.setItem('vaga', JSON.stringify(vaga))
}
