import { carregarCandidato, salvarCandidato } from "./dados.js"

export const userFeedback = document.getElementById('feedback-usuario')

let buttonMenu = document.getElementById("hamburger")
const menu = document.querySelector("nav")

buttonMenu.addEventListener("click", function(){
  menu.classList.toggle("ativa")
})

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

    <p class="match">match</p>
    <p class="score">${b.score}%</p>

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