// # carregar vagas (fetch) + localStorage — export
import { VagaFE, criarInstanciaVagaFE } from "./motor.js"
import { userFeedback } from "./ui.js"


// PERSISTÊNCIA DE DADOS > localStorage: salvar e carregar perfil candidato
export function carregarCandidato(){
    return JSON.parse(localStorage.getItem('dadosFormCandidato')) || []
}

export function salvarCandidato(a){
    localStorage.setItem('dadosFormCandidato', JSON.stringify(a))
    
}


// PERSISTÊNCIA DE DADOS: > localStorage: salvar e carregar vaga analisada
export function carregarVaga(a){
    return JSON.parse(localStorage.getItem(a)) || []
}

export function salvarVaga(a){
    localStorage.setItem('dadosvagas', JSON.stringify(a))
    console.log(`${a} enviado ao localStorage`)
}



function mostrarEstado(a){
  userFeedback.textContent = a
}



// REQUISIÇÃO DAS VAGAS (via ASYNC AWAIT & FETCH):
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
        
        const dadosVagas = await response.json()
        
        // checagem de retorno positivo
        if (Array.isArray(dadosVagas) && dadosVagas.length > 0) {
            console.log('retornaram os dados')
            mostrarEstado('vagas encontradas com sucesso')
            console.log('em DADOS.js, array de objetos dadosVagas obtido via fetch DENTRO de função fetch: ', dadosVagas)
            console.log('em DADOS.js, typeof de dadosVagas obtido via fetch DENTRO de função fetch: ', typeof dadosVagas)
            // const vagasInstanciadas = dadosVagas.map(vaga => new VagaFE(vaga.id, vaga.titulo, vaga.area, vaga.empresa, vaga.requisitos, vaga.modalidade, vaga.salario, vaga.nivel, vaga.score, vaga.missingTechs))
            const vagasInstanciadas = dadosVagas.map(vaga => criarInstanciaVagaFE(vaga))
            console.log('vagasInstanciadas array de instancias obtido com map, DENTRO de escopo fetch: ', vagasInstanciadas)
            // próximo passo: destrinchar classes e dissociar delas os métodos que empacam com ref. a instanciacandidato e outras varaiveis
            return vagasInstanciadas
        } return []
    } catch (erro){
        console.log(erro)
        mostrarEstado('Erro ao carregar:\nvagas não encontradas.\nTente novamente.', 'erro')
        return []
    }
}


// Carregando (avisar que está pedindo)
// Sucesso (mostrar)
// Erro (mensagem amigável)
// mensagem de erro é anunciada ao leitor de tela c/ aria-live (amarra A1 → A3: a acessibilidade volta viva)