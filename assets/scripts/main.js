// # ponto de entrada (<script type="module">)

// DADOS.JS: importação localStorage perfil-candidato
import { carregarCandidato } from "./dados.js"

// DADOS.JS: importação localStorage vaga
import { carregarVaga } from "./dados.js"

// DADOS.JS: importação da função de requisição das vagas: async/await, fetch & try/catch
import { buscarVagas } from "./dados.js"

// UI.JS: importação de dados do candidato obtidos via formulário
import "./ui.js"

// MOTOR.JS: importação das classes Candidato, Vaga e VagaFE 
import { Candidato, Vaga, VagaFE } from "./motor.js" 


// recuperação de dadosCandidato a partir do localStorage, obtidos de formulário perfil candidato
const lsCandidato = carregarCandidato('dadosCandidato')
console.log(lsCandidato)

// -> criação de objeto candidato, uma instância da classe Candidato
const candidato = new Candidato(lsCandidato.nome, lsCandidato.email, lsCandidato.telefone, lsCandidato.area, lsCandidato.habilidades, lsCandidato.experienciaMeses, lsCandidato.nivel)


