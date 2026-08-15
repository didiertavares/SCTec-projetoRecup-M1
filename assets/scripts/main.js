// MOTOR.JS: importação das classes Vaga e VagaFE 
import { VagaRemota, criarInstanciaCandidato } from "./motor.js"

// DADOS.JS: resgate localStorage dos objetos instanciaCandidato & array vagas
import { carregarCandidato, carregarVaga } from "./dados.js"

// UI.JS: importação da função de reinserção no form dos dados recuperados do localStorage
import { reinsercaoDadosForm, renderCandidato, renderContainerVagas } from "./ui.js"

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


const instanciasVagasRemotas = await buscarVagas()
console.log(`no MAIN.js, array vagasInstanciadas retornadas em const instanciasVagasRemotas p/ escopo global, FORA do escopo fetch, `, instanciasVagasRemotas)

const resumosInstanciasVagasRemotas = instanciasVagasRemotas.forEach(vaga => {
  vaga.mostrarResumoVaga()
})

// inserção dos valores faltantes nas propriedades "score", "missingTechs" e "classificacao" das vagas instanciadas
instanciasVagasRemotas.forEach(vaga => {
  vaga.score = vaga.calcularCompat(instanciaCandidato)
  vaga.missingTechs = vaga.identificarTechsFaltantes(instanciaCandidato)
  vaga.classificacao = vaga.classifCompat(vaga.score)
})
console.log(instanciasVagasRemotas)


// array das instancias de vagas reordenadas na ordem decrescente de score de compatibilidade
const vagasOrdenadas = instanciasVagasRemotas.sort((a, b) => b.score - a.score)
console.log(vagasOrdenadas)

renderContainerVagas(vagasOrdenadas)