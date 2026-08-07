// # ponto de entrada (<script type="module">)

// MOTOR.JS: importação das classes Vaga e VagaFE 
// import { Vaga, VagaFE } from "./motor.js"

// DADOS.JS: resgate localStorage dos objetos instanciaCandidato & array vagas
import { carregarCandidato, carregarVaga } from "./dados.js"

// UI.JS: importação da função de reinserção no form dos dados recuperados do localStorage
import { reinsercaoDadosForm } from "./ui.js"

// DADOS.JS: importação da função de requisição das vagas: async/await, fetch & try/catch
import { buscarVagas } from "./dados.js"


// recuperação de dadosCandidato a partir do localStorage
const storedCandidato = carregarCandidato('dadosFormCandidato')
console.log('no MAIN,js, objeto instanciaCandidato recup do localStorage: ', storedCandidato)
console.log('no MAIN.js, array de habilidades recup do localStorage: ', storedCandidato.habilidades)


document.addEventListener('DOMContentLoaded', () => {
    reinsercaoDadosForm(storedCandidato)
})


const vagasBuscadas = await buscarVagas()
console.log(`no MAIN.js, array vagasBuscadas retornadas p/ escopo global, FORA do escopo fetch, `, vagasBuscadas)
// console.log(`array vagasBuscadas retornadas p/ escopo global, FORA do escopo fetch, `, vagasBuscadas)






