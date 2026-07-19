// # tela: render dos cards, formulário, DOM/eventos — export
//  ver renderização em S11/aula2/main.js
import { Candidato } from "./motor.js"

const form = document.getElementById('form-perfil')
const techsChecklist = [...document.querySelectorAll('.techs-fe')]
console.log(techsChecklist)

const userFeedback = document.getElementById('feedback-usuario')

function criarInstanciaCandidato(a) {
    const newCandidatoInstance = new Candidato(a.nome, a.email, a.telefone, a.experiencia, a.area, a.habilidades, a.nivel)
    console.log(newCandidatoInstance)
}


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
    console.log(dadosCandidato)


    // console.log(`instância dentro do escopo de addEventListener: ${newCandidatoInstance}`)
    criarInstanciaCandidato(dadosCandidato)


    function salvarCandidato(a){
      localStorage.setItem('dadosCandidato', JSON.stringify(a))
    }


    // validações de formato: telefone e email
    function validacaoEnvioDados(){
      let emailValido = true
      if (!dadosCandidato.email.includes("@")) {
        userFeedback.textContent = `E-mail inválido! Digite novamente.`
        emailValido = false
      }

      console.log(`status emailValido? ${emailValido}`)
      
      let telValido = true
      if (dadosCandidato.telefone.length < 10) {
        userFeedback.textContent = `Telefone inválido! O número deve ter ao menos 10 dígitos (DDD incluso).`
        telValido = false
      }
      console.log(`status telValido? ${telValido}`)

      // validação da checklist de habilidades
      let habilidadesValido = true
      if (dadosCandidato.habilidades.length === 0) {
        userFeedback.textContent = `Você deve selecionar ao menos 1 skill.`
        habilidadesValido = false
      }
      console.log(`status habilidadesValido? ${habilidadesValido}`)

      // validação de preenchimento completo do formulario 
      let formCompleto = true
      if (dadosCandidato.nome === "" || dadosCandidato.telefone === "" || dadosCandidato.email === "" || dadosCandidato.experiencia === "" || dadosCandidato.area === "" || dadosCandidato.habilidades.length === 0) {
        userFeedback.textContent = `Todos os campos são obrigatórios`
        console.log('todos os campos devem ser preenchidos')
        formCompleto = false
      }
      console.log(`status formCompleto? ${formCompleto}`)

      //  validação final e envio dados ao localStorage
      let dadosInvalidos = true
      if (emailValido && telValido && habilidadesValido && formCompleto) {
        userFeedback.textContent = `Campos preenchidos corretamente. Formulário enviado com sucesso!`
        salvarCandidato(dadosCandidato)
        console.log('dados enviados ao localStorage > OK')
        dadosInvalidos = false
        console.log(`status dadosInvalidos DENTRO do escopo IF: ${dadosInvalidos}`)
      }
      console.log(`status dadosInvalidos fora do escopo IF: ${dadosInvalidos}`)
      console.log(`dadosCandidato fora do escopo: ${dadosCandidato}`)
    }
    validacaoEnvioDados(dadosCandidato)
})



export function reinsercaoDadosForm(a){
  if (!a) return

  console.log(a.habilidades)
  console.log(a.habilidades.length)
  console.log(a.habilidades[2])
  
  Object.keys(a).forEach(key => {
    const campoForm = form.elements[key]
    if (key ==='habilidades') return

    if (campoForm.type !== "checkbox" && campoForm.type !== "radio"){
      campoForm.value = a[key]
    }
  })
  techsChecklist.forEach(checkbox => {
    const labelText = checkbox.labels[0].textContent
    checkbox.checked = a.habilidades.includes(labelText)
  })
}


// document.addEventListener('DOMContentLoaded', reinsercaoDadosForm);
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

