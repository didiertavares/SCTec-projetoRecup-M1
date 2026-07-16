// # ponto de entrada (<script type="module">)

// DADOS.JS: importação localStorage perfil-candidato
import { carregarCandidato, salvarCandidato } from "./dados.js"

// DADOS.JS: importação localStorage vaga
import { carregarVaga, salvarVaga } from "./dados.js"

// DADOS.JS: importação da função de requisição das vagas: async/await, fetch & try/catch
import { buscarVagas } from "./dados.js"

// UI.JS: importação de dados do candidato obtidos via formulário
import { dadosCandidato } from "./ui.js"

// MOTOR.JS: importação das classes Candidato, Vaga e VagaFE 
import { Candidato, Vaga, VagaFE } from "./motor.js" 


const candidato = new Candidato(nomeCandidato, areaCandidato, techsCandidato, expeMesesCandidato, this.nivel)
// new Candidato('Tânia FONSECA', 'FrontEnd', ['JavaScript', 'HTML', 'CSS', 'Github', 'lógica de programação', 'Kanban'], 36, this.nivel)