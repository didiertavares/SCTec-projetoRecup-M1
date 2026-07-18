// # carregar vagas (fetch) + localStorage — export

// localStorage: ver aula S11/aula2/main.js

// PERSISTÊNCIA DE DADOS > localStorage: salvar e carregar perfil candidato
export function carregarCandidato(){
    return JSON.parse(localStorage.getItem('dadosCandidato')) || []
}


// PERSISTÊNCIA DE DADOS: > localStorage: salvar e carregar vaga analisada
export function carregarVaga(a){
    const textoVaga = localStorage.getItem(a)
    return JSON.parse(textoVaga) || []
}

export function salvarVaga(a){
    localStorage.setItem('dadosvagas', JSON.stringify(a))
}

// REQUISIÇÃO DAS VAGAS (via ASYNC AWAIT & FETCH): (em andamento)
export async function buscarVagas(){
    console.log('buscando vagas...')

    // try/catch & resposta.ok: tratamento de erro
    try{
        const response = await fetch("./assets/dados/vagas.json")
        
        if (!response.ok){
            throw new Error('servidor responde '+ response.status)
        }
        
        const dados = await response.json()
        
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