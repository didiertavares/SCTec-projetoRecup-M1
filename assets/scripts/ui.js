// # tela: render dos cards, formulário, DOM/eventos — export
//  ver renderização em S11/aula2/main.js

const form = document.getElementById('form-perfil')

const userFeedback = document.getElementById('feedback-usuario')

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    const dadosCandidato = {
      "nome": form.querySelector('#nome').value,
      "telefone": form.querySelector('#telefone').value,
      "email": form.querySelector('#email').value,
      "expe": form.querySelector('#expe').value,
      "area": form.querySelector('#area').value,
      "habilidades": [...form.querySelectorAll('.techs-fe')].filter(item => item.checked).map(item => item.labels[0].textContent)
    }
    console.log(dadosCandidato)

    // validações de formato: telefone e email
    if (!dadosCandidato.email.includes("@")) {
      userFeedback.textContent = "E-mail inválido!"
      return
    } else {validacaoEmail = true}
    
    if (dadosCandidato.telefone.length < 10) {
      userFeedback.textContent = 'O número de telefone precisa ter ao menos 10 dígitos.\nEx: (DDD) XXXX-XXXX'
      return
    } else {validacaoTel = true}
    
    // // validação de preenchimento completo do formulário
    // if (dadosCandidato.nome === "" || dadosCandidato.telefone === "" || dadosCandidato.email === "" || dadosCandidato.sobrenome === "" || dadosCandidato.expe === "" || dadosCandidato.area === "" || dadosCandidato.habilidades == []) {
    //   userFeedback.textContent = "Todos os campos são obrigatórios"
    //   return
    // } else {
    //   validacaoForm = true
    //   userFeedback.textContent =
    //     'Campos preenchidos corretamente.\nFormulário enviado com sucesso!´
    //     console.log('dados preenchidos corretamt')
    // }

    // console.log('form enviado com sucesso')
    // validação dos dados, antes de salvar os dados no localStorage
    // function validacaoEnvio(){
    //   if (validacaoEmail && validacaoTel && validacaoForm) {
    //     salvarCandidato('candidato')
    //   }
    // }
    function salvarCandidato(a){
      localStorage.setItem('dadosCandidato', JSON.stringify(a))
    }
    salvarCandidato(dadosCandidato)
    // validacaoEnvio()

})

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

