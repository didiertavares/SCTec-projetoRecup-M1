import { carregarCandidato, salvarCandidato, carregarVaga, salvarVaga, mostrarEstado, buscarVagas } from "./dados.js"
import { VagaRemota, Candidato, criarInstanciaVagaRemota, criarInstanciaCandidato } from "./motor.js"

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
const checkboxRemote = document.getElementById('aceita-remotas')
const buttonLimpForm = document.querySelector('#limp-form')
const buttonCopyPerfil = document.querySelector('#copy-card')


// constantes declaradas para uso posterior no controle e pausas da execução do código
const buttonRenderizarvagas = document.querySelector('#analisar-vagas')
const buttonLimparResultados = document.querySelector('#limpar-vagas')
const buttonBuscarVagas = document.querySelector('#buscar-vagas')


// função para inserir no HTML feedback para o usuario
function mostrarFeedback(a){
  userFeedback.textContent = a
}

// função simples para exibição de console.logs
function mostrarDados(a){
  console.log(a)
  console.log(`typeof :`, typeof a)
  console.log(`candidato.habilidades: `, a.habilidades)
}





// captura de dados candidato no formulaŕio
form.addEventListener("submit", (event)=> {
  event.preventDefault()

  const dadosCandidato = {
    "nome": form.querySelector('#nome').value.trim(),
    "telefone": form.querySelector('#telefone').value.trim(),
    "email": form.querySelector('#email').value.trim(),
    "estado": form.querySelector('#estado').value,
    "experiencia": form.querySelector('#experiencia').value.trim(),
    "area": form.querySelector('#area').value,
    "habilidades": techsChecklist.filter(item => item.checked).map(item => item.labels[0].textContent),
    "aceitaVagasRemotas": checkboxRemote.checked
  }

  mostrarDados(dadosCandidato)




  // VALIDAÇÃO DE DADOS: número mínimoo de dígitos-telefone e de habilidades-candidato para prosseguir 
  if (dadosCandidato.telefone.length < 10) {
    mostrarFeedback('O telefone deve ter ao menos 10 dígitos. Não esqueça os 2 dígitos do DDD, e procure não usar "-" nem espaço.')
    return
  }
  
  if (dadosCandidato.habilidades.length < 2) {
    mostrarFeedback('Selecione ao menos 2 habilidades.')
    return
  }


  salvarCandidato(dadosCandidato)

  mostrarFeedback('Dados do(a) candidato(a) registrados com êxito.')

  renderCandidato(dadosCandidato)
})







// -----------------------------------------------------------------------------//
// FUNÇÕES REFERENTES AO CANDIDATO: RENDERIZAÇÃO DE RESUMOS & FICHA, BUTTONS DE MANUSEIO
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

  checkboxRemote.checked = a.aceitaVagasRemotas

}


export function renderCandidato(a) {

  h2Titulo.textContent = ``

  const nome = document.getElementById('h3-nome')
  nome.textContent = ``
  
  const email = document.getElementById('li-email')
  email.textContent = ``
  
  const telefone = document.getElementById('li-telefone')
  telefone.textContent = ``

  const estado = document.getElementById('li-estado')
  estado.textContent = ''

  const experiencia = document.getElementById('li-experiencia')
  experiencia.textContent = ``
  
  const nivel = document.getElementById('li-nivel')
  nivel.textContent = ``

  const area = document.getElementById('li-area')
  area.textContent = ``
  
  const habilidades = document.getElementById('li-habilidades')
  habilidades.textContent = ``
  
  const aceitaRemotas = document.getElementById('li-aceitaRemotas')
  aceitaRemotas.textContent = ``

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

  function msgVagasRemotas(b){
    if (b.aceitaVagasRemotas) return `Aceita vagas remotas`
    if (!b.aceitaVagasRemotas) return `Não tem interesse por vagas remotas`
  }

  function inserirDadosCard(a){
    h2Titulo.textContent = `candidato`
    nome.textContent = a.nome
    email.textContent = `Email: ${a.email}`
    telefone.textContent = `Tel: ${a.telefone}`
    estado.textContent = `Estado / UF: ${a.estado}`
    experiencia.textContent = `XP: ${a.experiencia} meses`
    nivel.textContent = `Nível: ${nivelCandidato}`
    area.textContent = `Stack area: ${a.area}`
    habilidades.textContent = `Techs: ${a.habilidades.join(', ')}`
    aceitaRemotas.textContent = msgVagasRemotas(a)
  }
  inserirDadosCard(a)

}  

buttonLimpForm.addEventListener("click", () => {
  console.log('botão limpCamposForm foi clicado')
  form.reset()
  mostrarFeedback('Formulário apagado com êxito.')

})

buttonCopyPerfil.addEventListener('click', () => {
  console.log('botão copiar perfil foi clicado')
  const dadosCandidato = carregarCandidato('dadosFormCandidato')
  console.log('dadosFormCandidato puxado de localStorage para reinserir pelo botão copy card')
  reinsercaoDadosForm(dadosCandidato)
  mostrarFeedback('Formulário preenchido com dados cadastrados do candidato.')
})







// -----------------------------------------------------------------------------//
// FUNÇÕES REFERENTES À VAGAS: RENDERIZAÇÃO DE RESUMOS & CARDS, , BUTTONS DE MANUSEIO
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
    
    <p class="habilidades-faltantes">Techs que lhe falta dominar:\n ${b.missingTechs.length ? b.missingTechs.join(', ') : 'nenhuma!'}</p>`
    
    containerCardsVagas.appendChild(article)
  
  }


  for (let i = 0 ; i < 4; i++){
    console.log(a[i])
    renderVaga(a[i])
  }

}

buttonRenderizarvagas.addEventListener("click", () => {
  console.log('botão renderizarVagas foi clicado')

  // 1. internalização dos dados candidatos registrados no localStorage pelo submit Form 
  const storedDadosCandidato = carregarCandidato('dadosFormCandidato')

  // 2. criação da instância Candidato a partir da classe Candidato
  const instanciaCandidato = criarInstanciaCandidato(storedDadosCandidato)
  mostrarDados(instanciaCandidato)
  instanciaCandidato.mostrarResumoCandidato()


  // INSTANCIAÇÃO DAS VAGAS FILTRADAS (a partir da classe VagaRemota)

  // 3. internalização do array de vagasFiltradas registradas no localStorage pelo fetch() de buscarVagas()
  const storedVagasFiltradas = carregarVaga('dadosVagasFiltradas')
  console.log('DENTRO de buttonRenderCards, UI.js, storedVagasFiltradas: ', storedVagasFiltradas)

  // 4. criação do array de instâncias VagaRemota a partir da classe VagaRemota
  const vagasInstanciadas = storedVagasFiltradas.map(vaga => criarInstanciaVagaRemota(vaga))
  console.log('vagasInstanciadas obtido com map, DENTRO de escopo buttonRenderCards: ', vagasInstanciadas)

  // 5. inserção dos valores faltantes nas propriedades "score", "missingTechs" e "classificacao" das vagas instanciadas
  vagasInstanciadas.forEach(vaga => {
  vaga.score = vaga.calcularCompat(instanciaCandidato)
  vaga.missingTechs = vaga.identificarTechsFaltantes(instanciaCandidato)
  vaga.classificacao = vaga.classifCompat(vaga.score)
  vaga.mostrarResumoVaga()
  })

  // 6. reordenamento de instanciasVagas em ordem decrescente do score de compatibilidade
  const vagasOrdenadas = vagasInstanciadas.sort((a, b) => b.score - a.score)
  console.log(vagasOrdenadas)
  // armazenamento das vagas instanciadas e reordenadas dentro do localStorage
  salvarVaga('dadosVagasOrdenadas', vagasOrdenadas)

  // 7. renderização e inserção dos cards referentes às 4 melhores / + compatíveis vagas para o canddato
  renderContainerVagas(vagasOrdenadas)
  
  if (vagasOrdenadas.length > 0) {mostrarEstado('Seguem abaixo as 4 melhores vagas para você!')}
  if (vagasOrdenadas.length === 0) {mostrarEstado(`Nenhuma análise encontrada: tente selecionar outra UF ou aceitar vagas remotas`)}
})


export function renderResumosVagas(a){
  containerCardsVagas.innerHTML = ''
  
  function resumirVaga(b) {
    const article = document.createElement('article')
    article.classList.add('resumo-vaga')
    article.setAttribute("aria-label", 'resumo-vaga')

    article.innerHTML = `
    <h4 class="titulo-vaga" aria-label="titulo-vaga">${b.titulo} | ${b.area} | ${b.nivel}</h4>
    <p class="empresa" aria-label="empresa">${b.empresa} - ${b.estado} - ${b.modalidade} - R$ ${b.salario}</p>`

    containerCardsVagas.appendChild(article)
  
  }

  a.forEach(item => {
    resumirVaga(item)
    console.log(item)
  })

}

buttonBuscarVagas.addEventListener("click", async () => {
  const dadosVagasFiltradas = await buscarVagas()
  console.log('botão buscarVagas foi clicado')
  renderResumosVagas(dadosVagasFiltradas)
})

buttonLimparResultados.addEventListener('click', () => {
  containerCardsVagas.innerHTML = ''
  mostrarEstado('Resultados apagados com êxito')
})