// # tela: render dos cards, formulário, DOM/eventos — export
//  ver renderização em S11/aula2/main.js

const form = document.getElementById('form-perfil')

const msgErro = form.getElementById('msg-erro')

export const dadosCandidato = form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const nomeCandidato = form.getElementById('nome').value
    const sobrenomeCandidato = form.getElementById('sobrenome').value
    const telCandidato = form.getElementById('telefone').value
    const emailCandidato = form.getElementById('email').value

    const expeMesesCandidato = form.getElementById('expe').value
    const areaCandidato = form.getElementById('area').value

    //a sintaxe abaixo [...   ] permite transformar uma Nodelist em Array manuseável, e criar novo array com seus labels
    // const techsFE = [...form.querySelectorAll('.techs-fe')]
    const techsCandidato = [...form.querySelectorAll('.techs-fe')].filter(item => item.checked).map(item => item.labels[0].textContent)

    if (nomeCandidato === "" || telCandidato === "" || emailCandidato === "" || sobrenomeCandidato === "" || expeMesesCandidato === "" || areaCandidato === "") {
    msgErro.textContent = "Todos os campos são obrigatórios"
  } else {
    msgErro.textContent = ""
  }
})