import { VagaRemota } from "./motor.js"
import { elegibilidadeVaga } from "./filtros.js"

const vagasFeedback = document.getElementById('feedback-vagas')



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

export function salvarVaga(a, b){
    localStorage.setItem(a, JSON.stringify(b))
    console.log(`${a} enviado ao localStorage`)
}





export function mostrarEstado(a){
  vagasFeedback.textContent = a
}





// REQUISIÇÃO DAS VAGAS (via ASYNC AWAIT & FETCH):
export async function buscarVagas(){
    console.log('buscando vagas...')
    mostrarEstado('Carregando vagas...')

    const dadosFormCandidato = carregarCandidato('dadosFormCandidato')
    console.log('dadosFormCandidato DENTRO do fetch :', dadosFormCandidato)

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
            
            // FILTRAGEM DAS VAGAS RECEBIDAS:
            const vagasFiltradas = dadosVagas.filter(vaga => elegibilidadeVaga(dadosFormCandidato, vaga))

            salvarVaga('dadosVagasFiltradas', vagasFiltradas)

            if (vagasFiltradas.length > 0) {
                mostrarEstado(`${vagasFiltradas.length} vagas encontradas com sucesso!`)
            } else {mostrarEstado(`Nenhum resultado encontrado: tente selecionar outra UF ou aceitar vagas remotas`)}
            return vagasFiltradas

        } return []
    } catch (erro){
        console.log(erro)
        mostrarEstado('Erro ao carregar: vagas não encontradas. Tente novamente.', erro)
        return []
    }
}