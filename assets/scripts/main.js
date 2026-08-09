// # ponto de entrada (<script type="module">)

// MOTOR.JS: importação das classes Vaga e VagaFE 
import { VagaFE, criarInstanciaCandidato } from "./motor.js"

// DADOS.JS: resgate localStorage dos objetos instanciaCandidato & array vagas
import { carregarCandidato, carregarVaga } from "./dados.js"

// UI.JS: importação da função de reinserção no form dos dados recuperados do localStorage
import { reinsercaoDadosForm, renderCandidato } from "./ui.js"

// DADOS.JS: importação da função de requisição das vagas: async/await, fetch & try/catch
import { buscarVagas } from "./dados.js"


// recuperação de dadosCandidato a partir do localStorage
const storedCandidato = carregarCandidato('dadosFormCandidato')
console.log('no MAIN,js, objeto dadosFormCandidato recup do localStorage: ', storedCandidato)
console.log('no MAIN.js, array de habilidades recup do localStorage: ', storedCandidato.habilidades)


document.addEventListener('DOMContentLoaded', () => {
    reinsercaoDadosForm(storedCandidato)
    renderCandidato(storedCandidato)
})

const instanciaCandidato = criarInstanciaCandidato(storedCandidato)
instanciaCandidato.mostrarResumoCandidato()

function mostrarDados(a){
  console.log('no MAIN.js:', a)
  console.log('typeof no MAIN.js: ', typeof a)
  console.log('habilidades no MAIN.js: ', a.habilidades)
}
mostrarDados(instanciaCandidato)


const instanciasVagasFE = await buscarVagas()
console.log(`no MAIN.js, array vagasInstanciadas retornadas em const instanciasVagasFE p/ escopo global, FORA do escopo fetch, `, instanciasVagasFE)

const resumosInstanciasVagasFE = instanciasVagasFE.forEach(vaga => {
  vaga.mostrarResumoVaga()
})

const instanciasVagasRankeadas = instanciasVagasFE.map(vaga => {  
  vaga[missingTechs] = 50
  // this.score = vaga.calcularCompat(instanciaCandidato)
})
console.log('em MAIN.js, instanciasVagasRankeadas obtido por map, completando score e missingTechs: ', instanciasVagasRankeadas)
// const classifScore = vaga.classifCompat(vaga.score)

// vaga.requisitos.filter(requisito => {return (!instanciaCandidato.habilidades.includes(requisito))})

// vaga.calcularCompat(instanciaCandidato)
