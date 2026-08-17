// DADOS.JS: resgate localStorage dos objetos instanciaCandidato & array vagas
import { carregarCandidato, carregarVaga } from "./dados.js"

// UI.JS: importação da função de reinserção no form dos dados recuperados do localStorage
import { reinsercaoDadosForm, renderCandidato, renderContainerVagas, renderResumosVagas } from "./ui.js"





// recuperação de dadosCandidato a partir do localStorage
const storedCandidato = carregarCandidato('dadosFormCandidato')

// recuperação de dadosVagasOrdenadas a partir do localStorage
const storedVagasOrdenadas = carregarVaga('dadosVagasOrdenadas')





document.addEventListener('DOMContentLoaded', () => {
    reinsercaoDadosForm(storedCandidato)
    renderCandidato(storedCandidato)
    renderContainerVagas(storedVagasOrdenadas)
})

