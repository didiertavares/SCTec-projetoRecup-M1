link para o vídeo de apresentação no YT:
https://www.youtube.com/watch?v=ecJ5922zFrE

SCTec projeto de recuperação M1

JobzHub / SkillMatch Regional
Aplicação Single Page em JavaScript para análise de compatibilidade entre perfis de desenvolvedores e vagas de tecnologia, locais ou remotas.

Sobre o projeto
Projeto de conclusão de módulo visando o desenvolvimento de uma aplicação Single Page construída em JavaScript puro, com HTML e CSS.
O Skillmatch Regional permite que candidatos cadastrem seu perfil profissional, definam preferências residenciais e remotas, e descubram de forma automatizada seu percentual de compatibilidade (score) com oportunidades de emprego em TI.
contém:
    - busca via fetch() e filtragem prévia dos objetos vagas.json conforme critérios escolhidos de proximidade (Estado/UF de residência) e modalidade de trabalho (remoto / híbrido / presencial), que serão considerados no retorno dos dados e cálculos de compatibilidade.
    - cálculo de porcentagem comparativa estabelecendo níveis de aderência do candidato à vaga, por meio de scores.
    - identificação das skills do candidato exigidas, presentes, no conjunto das vagas.
    - identificação das habilidades faltantes ao candidato para uma correspondência ideal às respectivas vagas.   
    - rankeamento e identificação das 4 vagas mais compatíveis com o candidato na listagem de vagas analisadas, apresentadas na forma de cards renderizados em JS.
    - identificação de conceitos e tecnologias recomendadas para o plano de estudo do candidato, visando sua qualificação profissional.

Funcionalidades:
    . Cadastro de Perfil: Formulário dinâmico com campos de competências, experiência, localização e preferências de modalidade.
    . Persistência de Dados: Armazenamento automático e recuperação das preferências do usuário via localStorage.
    . Integração com Servidor "Fake": Busca assíncrona de vagas em catálogo JSON via fetch().
    . Filtragem por Elegibilidade: Triagem prévia (no nível da busca) de vagas por proximidade de estado (UF) e preferência por trabalho remoto.
    . Algoritmo de Compatibilidade: Cálculo percentual de match baseado nas hard skills exigidas x competências do candidato.
    . Identificação de Missing Techs: Mapeamento em tempo real das tecnologias faltantes para cada vaga.
    . Panorama de região para finalizar a experiência: indisponível
    . Interface Acessível e Responsiva: Estruturação semântica em HTML5 e layout dinâmico em CSS3 (sem frameworks ou CSS Grid).

Tecnologias
Este projeto foi desenvolvido com:
    . JavaScript
    . HTML
    . CSS
    . JSON
    versões de install: Node version: v24.14.0, npm version: 11.9.0
    -> rodar npm para garantir install e config de todos os arquivos e dependências necessários ao funcionamento da aplicação em sua máquina local.

Como executar
montado sobre o engine do miniprojeto SkillMatch.js original, foi acrescido de HTML & CSS devido à decisão de disponibilizar ao usuário uma interface gráfica para visualizar o andamento / execução do manuseio e da interação de seus dados com as vagas disponíveis E adequadas à sua realidade geográfica e profissional.
A criação do ambiente adequado de pastas, subpastas, arquivos e dependencies decorrentes  (assets, scripts, styles, .gitignore, node_modules, package.json, etc) devidamente configurados foi primordial para o desenvolvimento da aplicaçao.
    1. Clonar ou baixar este repositório para o seu computador.
    2. Como a aplicação utiliza ES Modules (ESM) e requisições fetch() para o arquivo local vagas.json, rode a aplicação em um servidor web local.
    3. Abra a pasta no VS Code e inicie a extensão Live Server a partir da pasta Skillmatch.js

Apredizados e desafios
    Orientação a Objetos vs. Manipulação de DOM: separação de responsabilidades, garantindo que o módulo motor.js permaneça como código puro sem dependências do HTML.

    Gestão de Assincronia: sincronização do fluxo do fetch() com os ouvintes de eventos (addEventListener) - principalmente do form - disparados pela interface do usuário.
    (OBS: essa foi a parte mais difícil de internalizar e que me fez perder mais tempo e sono, a razão principal de meu fracasso no projeto final da S13.)

    Design: ajustes finos de CSS para uniformização de formulários,seções e cards. Ainda falta estudo e trabalho relativamente à responsividade.