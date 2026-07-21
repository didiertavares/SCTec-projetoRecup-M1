// # ponto de entrada (<script type="module">)

// MOTOR.JS: importação das classes Candidato, Vaga e VagaFE 
import { Vaga, VagaFE } from "./motor.js"

// EXPORTAÇÕES

// DADOS.JS: importação localStorage vaga
import { carregarVaga } from "./dados.js"

// DADOS.JS: importação da função de requisição das vagas: async/await, fetch & try/catch
import { buscarVagas, dadosVagas } from "./dados.js"

// DADOS.JS: importação localStorage perfil-candidato
import { carregarCandidato } from "./dados.js"

// UI.JS: importação da função de reinserção no form dos dados recuperados do localStorage
import { reinsercaoDadosForm } from "./ui.js"



// recuperação de dadosCandidato a partir do localStorage
const lStorage_Candidato = carregarCandidato('instanciaCandidato')
console.log(lStorage_Candidato)
console.log(lStorage_Candidato.habilidades)

document.addEventListener('DOMContentLoaded', () => {
    reinsercaoDadosForm(lStorage_Candidato)
})



buscarVagas()
console.log(dadosVagas)
