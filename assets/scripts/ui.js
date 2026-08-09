// # tela: render dos cards, formulário, DOM/eventos — export

import { carregarCandidato, salvarCandidato } from "./dados.js"

export const userFeedback = document.getElementById('feedback-usuario')

// constantes do DOM declaradas p/ uso posterior em card de perfil candidato
const articlePerfil = document.getElementById('card-perfil')
const h2Titulo = document.getElementById('resumo-candidato')
const ul = document.querySelector('ul')


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




// modelo de function render a aplicar aos cards vagas
// export function renderCandidato(a) {

//   h2Titulo.textContent = ``

//   const nome = document.createElement('h3')
//   nome.classList.add('prop-candidato')
//   nome.textContent = ``
//   ul.appendChild(nome)

//   const email = document.createElement('li')
//   email.classList.add('prop-candidato')
//   email.textContent = ``
//   ul.appendChild(email)

//   const telefone = document.createElement('li')
//   telefone.classList.add('prop-candidato')
//   telefone.textContent = ``
//   ul.appendChild(telefone)

//   const experiencia = document.createElement('li')
//   experiencia.classList.add('prop-candidato')
//   experiencia.textContent = ``
//   ul.appendChild(experiencia)

//   const nivel = document.createElement('li')
//   nivel.classList.add('prop-candidato')
//   nivel.textContent = ``
//   ul.appendChild(nivel)

//   const area = document.createElement('li')
//   area.classList.add('prop-candidato')
//   area.textContent = ``
//   ul.appendChild(area)

//   const habilidades = document.createElement('li')
//   habilidades.classList.add('prop-candidato')
//   habilidades.textContent = ``
//   ul.appendChild(habilidades)


//   // função p/ categorizar senioridade candidato
//   function classifNivel(b){
//     if (b <= 6) return "Estágio";
//     if (b > 6 && b <= 48) return "Junior";
//     if (b > 48 && b <= 120) return "Pleno";
//     if (b > 120) return "Sênior";
//     if (b == null) return ''
//   }
//   const nivelCandidato = classifNivel(a.experiencia)
//   console.log(nivelCandidato)


//   function inserirDadosCard(a){
//     h2Titulo.textContent = `candidato`
//     nome.textContent = a.nome
//     email.textContent = `Email: ${a.email}`
//     telefone.textContent = `Tel: ${a.telefone}`
//     experiencia.textContent = `XP: ${a.experiencia} meses`
//     nivel.textContent = `Nível: ${nivelCandidato}`
//     area.textContent = `Stack area: ${a.area}`
//     habilidades.textContent = `Techs: ${a.habilidades.join(', ')}`
//   }
//   inserirDadosCard(a)

// }





// function limparForm(){
//   techsChecklist.forEach(checkbox => {
//     checkbox.unchecked
//   })
// }


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