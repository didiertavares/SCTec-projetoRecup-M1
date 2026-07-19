// # ponto de entrada (<script type="module">)

// DADOS.JS: importação localStorage vaga
import { carregarVaga } from "./dados.js"

// DADOS.JS: importação da função de requisição das vagas: async/await, fetch & try/catch
import { buscarVagas } from "./dados.js"

// DADOS.JS: importação localStorage perfil-candidato
import { carregarCandidato } from "./dados.js"

// UI.JS: importação da função de reinserção no form dos dados recuperados do localStorage
import { reinsercaoDadosForm } from "./ui.js"

// MOTOR.JS: importação das classes Candidato, Vaga e VagaFE 
import { Candidato, Vaga, VagaFE } from "./motor.js" 

// recuperação de dadosCandidato a partir do localStorage
const lStorage_Candidato = carregarCandidato('dadosCandidato')
console.log(lStorage_Candidato)
reinsercaoDadosForm(lStorage_Candidato)



// -> criação de objeto candidato, uma instância da classe Candidato
// const newCandidatoInstance = new Candidato(lStorage_Candidato.nome, lStorage_Candidato.email, lStorage_Candidato.telefone, lStorage_Candidato.area, lStorage_Candidato.habilidades, lStorage_Candidato.experienciaMeses, lStorage_Candidato.nivel)
// console.log(newCandidatoInstance)
// console.log(typeof newCandidatoInstance)