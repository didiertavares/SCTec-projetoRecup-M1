// # tela: render dos cards, formulário, DOM/eventos — export

import { carregarCandidato, salvarCandidato } from "./dados.js"

export const userFeedback = document.getElementById('feedback-usuario')

// constantes do DOM declaradas p/ uso posterior em card de perfil candidato
const articlePerfil = document.getElementById('card-perfil')
const h2Titulo = document.getElementById('resumo-candidato')
const ul = document.querySelector('ul')

const containerCardsVagas = document.getElementById('container-cardsResultados')


// constantes declaradas para uso posterior durante captura de dados formulario
const form = document.getElementById('form-perfil')
const techsChecklist = [...document.querySelectorAll('.techs-fe')]

// função para inserir no HTML feedback para o usuario
function mostrarFeedback(a){
  userFeedback.textContent = a
}

// função simples para exibição de console.logs
function mostrarDados(a){
  console.log(`DENTRO do form.addEventListener:`, a)
  console.log(`typeof DENTRO do form.addEventListener: `, typeof a)
  console.log(`dadosCandidato.habilidades DENTRO do form.addEventListener: `, a.habilidades)
}



// captura de dados candidato no formulaŕio
form.addEventListener("submit", (event)=> {
  event.preventDefault()

  const dadosCandidato = {
    "nome": form.querySelector('#nome').value,
    "telefone": form.querySelector('#telefone').value,
    "email": form.querySelector('#email').value,
    "experiencia": form.querySelector('#experiencia').value,
    "area": form.querySelector('#area').value,
    "habilidades": techsChecklist.filter(item => item.checked).map(item => item.labels[0].textContent)
  }
  
  mostrarDados(dadosCandidato)


  salvarCandidato(dadosCandidato)


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
  

  renderCandidato(dadosCandidato)
})




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



export function renderCandidato(a) {

  h2Titulo.textContent = ``

  const nome = document.getElementById('h3-nome')
  nome.textContent = ``
  
  const email = document.getElementById('li-email')
  email.textContent = ``
  
  const telefone = document.getElementById('li-telefone')
  telefone.textContent = ``

  const experiencia = document.getElementById('li-experiencia')
  experiencia.textContent = ``
  
  const nivel = document.getElementById('li-nivel')
  nivel.textContent = ``

  const area = document.getElementById('li-area')
  area.textContent = ``
  
  const habilidades = document.getElementById('li-habilidades')
  habilidades.textContent = ``
  

  // função p/ categorizar senioridade candidato
  function classifNivel(b){
    if (b <= 6) return "Estágio";
    if (b > 6 && b <= 48) return "Junior";
    if (b > 48 && b <= 120) return "Pleno";
    if (b > 120) return "Sênior";
    if (b == null) return ''
  }
  const nivelCandidato = classifNivel(a.experiencia)
  console.log(nivelCandidato)


  function inserirDadosCard(a){
    h2Titulo.textContent = `candidato`
    nome.textContent = a.nome
    email.textContent = `Email: ${a.email}`
    telefone.textContent = `Tel: ${a.telefone}`
    experiencia.textContent = `XP: ${a.experiencia} meses`
    nivel.textContent = `Nível: ${nivelCandidato}`
    area.textContent = `Stack area: ${a.area}`
    habilidades.textContent = `Techs: ${a.habilidades.join(', ')}`
  }
  inserirDadosCard(a)

}  





export function renderContainerVagas(a) {
  containerCardsVagas.innerHTML = ''
  

  function renderVaga(b) {
    const article = document.createElement('article')
    article.classList.add('card-vaga')
    article.setAttribute("aria-label", 'card-vaga')

    article.innerHTML = `
    <h3 class="titulo-vaga" aria-label="titulo-vaga">${b.titulo}</h3>
    <p class="empresa" aria-label="empresa">${b.empresa}</p>
    
    <div id='badges1' class="badges">
      <span class="badge" id="badge-area">${b.area}</span>
      <span class="badge" id="badge-nivel">${b.nivel}</span>
    </div>

    <p class="score">${b.score}% Match</p>

    <div id='badges2' class="badges">
      <span class="badge" id="badge-classificacao">${b.classificacao}</span>
      <span class="badge" id="badge-modalidade">${b.modalidade}</span>
      <span class="badge" id="badge-salario">R$ ${b.salario}</span>
    </div>
    
    <p class="habilidades-faltantes">Techs que você deveria estudar:\n ${b.missingTechs.length ? b.missingTechs.join(', ') : 'Nenhuma!'}</p>`
    
    containerCardsVagas.appendChild(article)
  
  }


  for (let i = 0 ; i < 4; i++){
    console.log(a[i])
    renderVaga(a[i])
  }

}


  // const h3Titulo = document.createElement('h3')
  // h3Titulo.classList.add('titulo-vaga')
  // h3Titulo.setAttribute('aria-label', 'titulo-vaga')
  // article.appendChild(h3Titulo)

  // const pEmpresa = document.createElement('p')
  // pEmpresa.classList.add('empresa')
  // pEmpresa.setAttribute('aria-label', 'empresa')
  // article.appendChild(pEmpresa)



//  listaCidades.innerHTML = ""; // limpa antes de redesenhar (evita duplicar)
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
