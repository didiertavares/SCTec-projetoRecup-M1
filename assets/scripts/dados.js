 
// # carregar vagas (fetch) + localStorage — export
 
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

// ASYNC AWAIT & FETCH: draft, em andamento
export async function buscarVagas(){
    console.log('buscando vagas...')

    // try/catch & resposta.ok: tratamento de erro
    try{
        const resposta = await fetch("./assets/dados/vagas.json")
        
        if (!resposta.ok){
            throw new Error('servidor responde '+ resposta.status)
        }
        
        const dados = await resposta.json()
        
        // checagem de results
        if (!dados.results || dados.results.length === 0) {
            return null
        }
        return dados
    } catch (erro){
        mostrarStatus('Não foi possível carregar! Tente novamente.', 'erro')
    }
}

// Carregando (avisar que está pedindo)
// Sucesso (mostrar)
// Erro (mensagem amigável)
// mensagem de erro é anunciada ao leitor de tela c/ aria-live (amarra A1 → A3: a acessibilidade volta viva)