// # carregar vagas (fetch) + localStorage — export

// localStorage: ver aula S11/aula2/main.js

// PERSISTÊNCIA DE DADOS > localStorage: salvar e carregar perfil candidato

const storedCandidato = "dadoscandidato:itens"

export function carregarCandidato(){
    const textoCandidato = localStorage.getItem(storedCandidato)
    return JSON.parse(textoCandidato) || []

    // outro modo: a verificar
    // const storageCandidato = JSON.parse(textoCandidato) || []
    // return storageCandidato
}

export function salvarCandidato(itens){
    localStorage.setItem(storedCandidato, JSON.stringify(itens))
}


// PERSISTÊNCIA DE DADOS: > localStorage: salvar e carregar vaga analisada
const storedVaga = "dadosvaga:itens"

export function carregarVaga(){
    const textoVaga = localStorage.getItem(storedVaga)
    return JSON.parse(textoVaga) || []
}

export function salvarVaga(itens){
    localStorage.setItem(storedVaga, JSON.stringify(itens))
}

// REQUISIÇÃO DAS VAGAS (via ASYNC AWAIT & FETCH): (em andamento)
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