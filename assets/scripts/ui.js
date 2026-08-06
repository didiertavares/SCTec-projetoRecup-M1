// # tela: render dos cards, formulário, DOM/eventos — export
//  ver renderização em S11/aula2/main.js
import { Candidato } from "./motor.js"

export const userFeedback = document.getElementById('feedback-usuario')

const form = document.getElementById('form-perfil')

const techsChecklist = [...document.querySelectorAll('.techs-fe')]

// const nomeInput = form.querySelector('#nome')
// const telInput = form.querySelector('#telefone')
// const emailInput = form.querySelector('#email')
// const expeInput = form.querySelector('#experiencia')
// const areaInput = form.querySelector('#area')
// let habilInput
// const habilInput = techsChecklist.filter(item => item.checked).map(item => item.labels[0].textContent)

let nomeInput
let telInput
let emailInput
let expeInput
let areaInput
let habilInput




function mostrarFeedback(a){
  userFeedback.textContent = a
}

// function exportarCandidatoEscopo(a){
//   return a
//   console.log('manuseando escopo de variável ', a)
// }


let instanciaCandidato

const arrayDadosForm = []
console.log('arrayDadosForm FORA ANTES do eventListener: ', arrayDadosForm)

let dadosCandidato = {}

// var dadosCandidato = {
//   "nome": form.querySelector('#nome').value,
//   "telefone": form.querySelector('#telefone').value,
//   "email": form.querySelector('#email').value,
//   "experiencia": form.querySelector('#experiencia').value,
//   "area": form.querySelector('#area').value,
//   "habilidades": techsChecklist.filter(item => item.checked).map(item => item.labels[0].textContent)
// }


dadosCandidato.experiencia = 200
dadosCandidato.habilidades = ['github', 'astro', 'js']

console.log('dadosCandidato FORA ANTES do eventListener: ', dadosCandidato)
console.log('typeof dadosCandidato FORA ANTES do eventListener: ', typeof dadosCandidato)
console.log('dadosCandidato.habilidades FORA ANTES do eventListener: ', dadosCandidato.habilidades)

function subirEscopo(a){
  console.log(`função subirEscopo acionada: ${a} retornada`)
  return a
}

function retornarDado(a){
  console.log(`função retornarDado chamada: ${a} retornado`)
  return a.property
}

function mostrarDados(){
  console.log(dadosCandidato)
}



// function retornarDadosForm(dadosCandidato, a){
//   dadosCandidato.forEach(property => {
//     dadosCandidato.property = a.property.value
//   })    
// }

//  tentar com object.key
// Object.keys(a).forEach(key => {
  // if (key ==='habilidades') return


// 1ª versão ineficiente:
function criarInstanciaCandidato(a) {
  return new Candidato(a.nome, a.email, a.telefone, a.experiencia, a.area, a.habilidades, a.nivel)
}
// versão alternativa:
// let a = []
// const instanciaCandidato = new Candidato(a.nome, a.email, a.telefone, a.experiencia, a.area, a.habilidades, a.nivel)





form.addEventListener("submit", (event)=> {
  event.preventDefault()

  const dadosForm = {
    "nome": form.querySelector('#nome').value,
    "telefone": form.querySelector('#telefone').value,
    "email": form.querySelector('#email').value,
    "experiencia": form.querySelector('#experiencia').value,
    "area": form.querySelector('#area').value,
    "habilidades": techsChecklist.filter(item => item.checked).map(item => item.labels[0].textContent)
  }
  
  dadosCandidato.nome = retornarDado(dadosForm)


  dadosCandidato = dadosForm.map(dado => {
    dadosCandidato.dado = dado.value
  })

  dadosForm.forEach(key =>{
    dadosCandidato.key = value

  })

  console.log(dadosForm.dado)
  console.log(dadosCandidato.dado)

  console.log('dadosCandidato APÓS o MAP: ', dadosCandidato)


  // dadosCandidato = Object.fromEntries([
  //   ['nome', dadosForm.nome],
  //   ['email', dadosForm.email],
  //   ['telefone', dadosForm.telefone]
  // ])
  // dadosCandidato = { ...dadosForm }
  // console.log('dadosCandidato após object.fromEntries de dadosForm: ', dadosCandidato)
  // dadosCandidato.forEach(property => {
  //   arrayDadosForm.push(property) = 
  // })

  for (const [key, value] of Object.entries(dadosForm)) {
    console.log(`${key}: ${value}`)
    arrayDadosForm.push({key: value})
  }
  console.log('arrayDadosForm DENTRO do eventListener: ', arrayDadosForm)


  nomeInput = retornarDado(dadosForm.nome)
  telInput = retornarDado(dadosForm.telefone)
  emailInput = retornarDado(dadosForm.email)
  expeInput = retornarDado(dadosForm.experiencia)
  areaInput = retornarDado(dadosForm.area)
  habilInput =  retornarDado(dadosForm.habilidades)


  console.log('dadosForm DENTRO do eventListener: ', dadosForm)
  console.log('typeof dadosForm DENTRO do eventListener: ', typeof dadosForm)
  console.log('dadosForm.nome DENTRO do eventListener: ', dadosForm.nome)
  console.log('dadosForm.email DENTRO do eventListener: ', dadosForm.email)
  console.log('dadosForm.habilidades DENTRO do eventListener: ', dadosForm.habilidades)
  
  
  // instanciaCandidato = criarInstanciaCandidato(dadosCandidato)
  // console.log('instanciaCandidato DENTRO do eventListener: ', instanciaCandidato)
  // console.log('typeof instanciaCandidato DENTRO do eventListener: ', typeof instanciaCandidato)
  // console.log('instanciaCandidato.habilidades DENTRO do eventListener: ', instanciaCandidato.habilidades)


  function salvarCandidato(a){
    localStorage.setItem('instanciaCandidato', JSON.stringify(a))
  }



  //     salvarCandidato(instanciaCandidato)



  // // validações de formato: telefone e email
  // function validacaoEnvioDados(dadosCandidato, instanciaCandidato){
  //   console.log('dadosCandidato DENTRO de validacaoEnvioDados(): ', dadosCandidato)
  //   console.log('instanciaCandidato DENTRO de validacaoEnvioDados(): ', instanciaCandidato)

  //   let emailValido = true
  //   form.querySelector('#email').addEventListener('change', (e)=> {
  //     if (dadosCandidato.email.includes("@")) {emailValido}
  //     else {
  //       mostrarFeedback(`E-mail inválido! Digite novamente.`)
  //       return emailValido = false
  //     }
  //   })
  //   console.log(`status emailValido? ${emailValido}`)

    
  //   let telValido = true
  //   form.querySelector('#telefone').addEventListener('change', (e)=> {
  //     if (dadosCandidato.telefone.length >= 10) {telValido}
  //     else {
  //       mostrarFeedback(`Telefone inválido: o número deve ter ao menos 10 dígitos.`)
  //       return telValido = false
  //     }
  //   })      
  //   console.log(`status telValido? ${telValido}`)


  //   // validação de preenchimento completo do formulario 
  //   let formCompleto = true
  //   if (dadosCandidato.nome === "" || dadosCandidato.telefone === "" || dadosCandidato.email === "" || dadosCandidato.experiencia === "" || dadosCandidato.area === "" || dadosCandidato.habilidades.length === 0) {
  //     mostrarFeedback(`Todos os campos são obrigatórios`)
  //     console.log('todos os campos devem ser preenchidos')
  //     return formCompleto = false
  //   }
  //   console.log(`status formCompleto? ${formCompleto}`)


  //   //  validação final e envio dados ao localStorage
  //   let dadosValidos = true
  //   if (emailValido && telValido && formCompleto) {
  //     mostrarFeedback(`Campos preenchidos corretamente. Formulário enviado com sucesso!`)
      
  //     salvarCandidato(instanciaCandidato)
  //     console.log('dados enviados ao localStorage > OK')}
  //   else {
  //     return dadosValidos = false
  //   }

  // }
  // validacaoEnvioDados(dadosCandidato, instanciaCandidato)
  
  // subirEscopo(instanciaCandidato)
  
  // prosseguirFluxo(instanciaCandidato)
  subirEscopo(dadosForm)
})


mostrarDados()

console.log('dadosCandidato FORA DEPOIS do eventListener: ', dadosCandidato)
console.log('typeof dadosCandidato FORA DEPOIS do eventListener: ', typeof dadosCandidato)
console.log('dadosCandidato.habilidades FORA DEPOIS do eventListener: ', dadosCandidato.habilidades)

console.log('arrayDadosForm FORA DEPOIS do eventListener: ', arrayDadosForm)

console.log('let nomeInput FORA DEPOIS de eventListener: ', nomeInput)
console.log('let telInput FORA DEPOIS de eventListener: ', telInput)
console.log('let emailInput FORA DEPOIS de eventListener: ', emailInput)
console.log('let expeInput FORA DEPOIS de eventListener: ', expeInput)
console.log('let nomeInput FORA DEPOIS de eventListener: ', nomeInput)
console.log('let areaInput FORA DEPOIS de eventListener: ', areaInput)
console.log('let habilInput FORA DEPOIS de eventListener: ', habilInput)


instanciaCandidato = criarInstanciaCandidato(dadosCandidato)
// console.log('instanciaCandidato DENTRO do eventListener: ', instanciaCandidato)
// console.log('typeof instanciaCandidato DENTRO do eventListener: ', typeof instanciaCandidato)
// console.log('instanciaCandidato.habilidades DENTRO do eventListener: ', instanciaCandidato.habilidades)



// console.log('dadosCandidato FORA do eventListener: ', dadosCandidato)
// console.log('typeof dadosCandidato FORA do eventListener: ', typeof dadosCandidato)
// console.log('dadosCandidato.habilidades FORA do eventListener: ', dadosCandidato.habilidades)


// export function subirEscopo(a){
//   const candidato = a
//   console.log('return candidato DENTRO do eventLIstener', candidato)
//   return candidato
// }
// console.log('return candidato FORA do eventLIstener', candidato)



// function prosseguirFluxo(a){
//   console.log('prosseguindo fluxo código pós eventlistener com ', a)
// }
// console.log('prosseguindo fluxo FORA do eventLIstener', a)


// const novoCandidato = candidato
// console.log('fora do eventListener', novoCandidato)

// const candidato = instanciaCandidato
// console.log('return candidato FORA do eventLIstener', candidato)






// instanciaCandidato = candidato
console.log('instanciaCandidato FORA DEPOIS do eventListener: ', instanciaCandidato)
console.log('typeof instanciaCandidato FORA DEPOIS do eventListener: ', typeof instanciaCandidato)
console.log('instanciaCandidato.habilidades FORA DEPOIS do eventListener: ', instanciaCandidato.habilidades)



// objetoCandidato = instanciaCandidato
// console.log('let objetoCandidato FORA do eventListener: ', objetoCandidato)
// console.log('typeof objetoCandidato FORA do eventListener: ', typeof objetoCandidato)
// console.log('objetoCandidato.habilidades FORA do eventListener: ', objetoCandidato.habilidades)





export function reinsercaoDadosForm(a){
  if (!a) return

  Object.keys(a).forEach(key => {
    if (key ==='habilidades') return
    
    const campoForm = form.elements[key]

    if (campoForm && campoForm.type !== "checkbox"){
      campoForm.value = a[key]
    }
  })
  techsChecklist.forEach(checkbox => {
    const labelText = checkbox.labels[0].textContent
    checkbox.checked = a.habilidades.includes(labelText)
  })
}


// exemplo S11/aula2/main.js
// function renderizarLista() {
//   const cidades = carregarCidades();
//   listaCidades.innerHTML = ""; // limpa antes de redesenhar (evita duplicar)
//   cidades.forEach((cidade) => {
//     const item = document.createElement("li");
//     item.classList.add("cidade-item");

//     const nome = document.createElement("span");
//     nome.classList.add("cidade-nome");
//     nome.textContent = cidade.nome;

//     const botao = document.createElement("button");
//     botao.type = "button";
//     botao.classList.add("btn-remover");
//     botao.textContent = "Remover";
//     botao.setAttribute("aria-label", "Remover " + cidade.nome); // nome acessível
//     botao.addEventListener("click", () => {
//       removerCidade(cidade.nome);
//       console.log("Removendo cidade:", cidade.nome);
//     });

//     item.appendChild(nome);
//     item.appendChild(botao);
//     listaCidades.appendChild(item);
//   });
// }

// function removerCidade(nomeCidade) {
//   const cidades = carregarCidades();
//   const novaLista = cidades.filter((c) => {
//     return c.nome !== nomeCidade;
//   });

//   salvarCidades(novaLista);

//   console.log(renderizarLista());
// }

// renderizarLista();



// exemplo S11/aula3/main.js
// function renderizarCard(dado) {
//   const card = document.getElementById("card-clima");

//   const unidade = carregarUnidade(); // lê a preferência °C/°F (do Bloco 0.5)

//   card.querySelector(".card-cidade").textContent = dado.nome || "Clima atual";

//   // ícone grande = emoji da condição (o <p class="card-icone" role="img"> vira dinâmico)
//   const icone = card.querySelector(".card-icone");
//   icone.textContent = dado.icone;
//   icone.setAttribute("aria-label", dado.descricao);

//   // mira os <dd> dentro de cada .card-dado (por posição) e preenche:
//   const valores = card.querySelectorAll(".card-dado dd");
//   valores[0].textContent = formatarTemperatura(dado.temperaturaC, unidade); // Temperatura
//   valores[1].textContent = dado.icone + " " + dado.descricao; // Condição
//   valores[2].textContent = dado.momento; // Atualizado em
// }

