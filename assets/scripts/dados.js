// # carregar vagas (fetch) + localStorage — export

// localStorage: ver aula S11/aula2/main.js

//  import { mostrarStatus } from "./ui.js"
import { userFeedback } from "./ui.js"

export let dadosVagas = []
console.log(typeof dadosVagas)



// PERSISTÊNCIA DE DADOS > localStorage: salvar e carregar perfil candidato
export function carregarCandidato(){
    return JSON.parse(localStorage.getItem('instanciaCandidato')) || []
}



// PERSISTÊNCIA DE DADOS: > localStorage: salvar e carregar vaga analisada
export function carregarVaga(a){
    const textoVaga = localStorage.getItem(a)
    return JSON.parse(textoVaga) || []
}

export function salvarVaga(a){
    localStorage.setItem('dadosvagas', JSON.stringify(a))
}

function mostrarEstado(a){
  userFeedback.textContent = a
}

// REQUISIÇÃO DAS VAGAS (via ASYNC AWAIT & FETCH): (em andamento)
export async function buscarVagas(){
    console.log('buscando vagas...')
    mostrarEstado('carregando vagas...')

    // try/catch & resposta.ok: tratamento de erro
    try{
        const response = await fetch("./assets/dados/vagas.json")
        
        if (!response.ok){
            throw new Error('Erro de conexão '+ response.status)
            mostrarEstado('Erro de conexão '+ response.status)
        }
        
        dadosVagas = await response.json()
        
        // checagem de retorno positivo
        if (Array.isArray(dadosVagas) && dadosVagas.length > 0) {
            console.log('retornaram os dados')
            mostrarEstado('dados retornados com sucesso')
            console.log('em DADOS.js, array de objetos dadosVagas obtido via fetch: ', dadosVagas)
            console.log('em DADOS.js, typeof de dadosVagas obtido via fetch: ', typeof dadosVagas)
            return dadosVagas
        } return []
    } catch (erro){
        console.log(erro)
        mostrarEstado('Não foi possível carregar. Tente novamente.', 'erro')
        return []
    }
}

// Carregando (avisar que está pedindo)
// Sucesso (mostrar)
// Erro (mensagem amigável)
// mensagem de erro é anunciada ao leitor de tela c/ aria-live (amarra A1 → A3: a acessibilidade volta viva)