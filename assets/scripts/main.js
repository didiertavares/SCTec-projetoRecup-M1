// # ponto de entrada (<script type="module">)

// MOTOR.JS: importação das classes Candidato, Vaga e VagaFE 
import { Vaga, VagaFE } from "./motor.js"

// EXPORTAÇÕES

// DADOS.JS: importação localStorage vaga
import { carregarVaga } from "./dados.js"

// DADOS.JS: importação da função de requisição das vagas: async/await, fetch & try/catch
import { buscarVagas } from "./dados.js"

// DADOS.JS: importação localStorage perfil-candidato
import { carregarCandidato } from "./dados.js"

// UI.JS: importação da função de reinserção no form dos dados recuperados do localStorage
import { reinsercaoDadosForm } from "./ui.js"

// recuperação de dadosCandidato a partir do localStorage
const lStorage_Candidato = carregarCandidato('dadosCandidato')
console.log(lStorage_Candidato)
reinsercaoDadosForm(lStorage_Candidato)

// -> criação de instancia newCandidatoInstance, com dados lStorage-Candidato resgatados de localStorage a partir de método classe Candidato
// const newCandidatoInstance = new Candidato(lStorage_Candidato.nome, lStorage_Candidato.email, lStorage_Candidato.telefone, lStorage_Candidato.experiencia, lStorage_Candidato.area, lStorage_Candidato.habilidades, lStorage_Candidato.nivel)
// console.log(newCandidatoInstance)

