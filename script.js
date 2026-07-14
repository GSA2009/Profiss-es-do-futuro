// =========================
// PERGUNTAS
// =========================

const questions = [

  // 💻 Tecnologia
  {
    texto: "Você gosta de mexer no computador, celular ou aprender sobre tecnologia?",
    areas: ["tecnologia"]
  },
  {
    texto: "Se pudesse criar um jogo ou um aplicativo, você acharia isso legal?",
    areas: ["tecnologia"]
  },

  // 🏥 Saúde
  {
    texto: "Você gosta de cuidar das pessoas quando elas precisam de ajuda?",
    areas: ["saude"]
  },
  {
    texto: "Você acha interessante aprender como funciona o corpo humano?",
    areas: ["saude"]
  },

  // 📚 Educação
  {
    texto: "Você gosta de ajudar seus colegas quando eles têm dificuldade em alguma matéria?",
    areas: ["educacao"]
  },
  {
    texto: "Você teria paciência para ensinar algo que sabe fazer bem?",
    areas: ["educacao"]
  },

  // 🎨 Artes
  {
    texto: "Você gosta de desenhar, criar ou inventar coisas novas?",
    areas: ["artes"]
  },
  {
    texto: "Você gosta de fazer vídeos, editar fotos ou criar artes para a internet?",
    areas: ["artes"]
  },

  // 💼 Negócios
  {
    texto: "Você gosta de organizar atividades ou liderar um grupo?",
    areas: ["negocios"]
  },
  {
    texto: "Você já pensou em ter sua própria empresa ou vender algum produto?",
    areas: ["negocios"]
  },

  // 🌱 Meio Ambiente
  {
    texto: "Você gosta de cuidar da natureza, das plantas ou dos animais?",
    areas: ["ambiente"]
  },
  {
    texto: "Você se preocupa com problemas como poluição e desmatamento?",
    areas: ["ambiente"]
  },

  // ⚙️ Engenharia
  {
    texto: "Você gosta de montar, desmontar ou descobrir como as coisas funcionam?",
    areas: ["engenharia"]
  },
  {
    texto: "Você gostaria de criar pontes, prédios, carros ou máquinas no futuro?",
    areas: ["engenharia"]
  },

  // ⚖️ Direito
  {
    texto: "Você gosta de defender quem está certo quando vê uma injustiça?",
    areas: ["direito"]
  },
  {
    texto: "Você gosta de conversar e tentar resolver brigas ou problemas entre as pessoas?",
    areas: ["direito"]
  }

];

// =========================
// DADOS DAS ÁREAS
// =========================

const areasInfo = {

  tecnologia:{
    nome:"💻 Tecnologia",
    descricao:"Você gosta de tecnologia, inovação e computadores.",
    salario:"R$ 3.000 a R$ 15.000+",
    mercado:"Alta demanda.",
    profissao:[
      "Programador",
      "Desenvolvedor de Jogos",
      "Analista de Sistemas",
      "Cientista de Dados"
    ]
  },

  saude:{
    nome:"🏥 Saúde",
    descricao:"Você gosta de cuidar das pessoas.",
    salario:"R$ 3.500 a R$ 20.000+",
    mercado:"Sempre em crescimento.",
    profissao:[
      "Médico",
      "Enfermeiro",
      "Fisioterapeuta",
      "Nutricionista"
    ]
  },

  educacao:{
    nome:"📚 Educação",
    descricao:"Você gosta de ensinar e compartilhar conhecimento.",
    salario:"R$ 2.500 a R$ 12.000+",
    mercado:"Muito importante.",
    profissao:[
      "Professor",
      "Pedagogo",
      "Psicopedagogo",
      "Coordenador Escolar"
    ]
  },

  artes:{
    nome:"🎨 Artes",
    descricao:"Você é criativo e gosta de criar coisas novas.",
    salario:"R$ 2.000 a R$ 15.000+",
    mercado:"Em crescimento.",
    profissao:[
      "Designer",
      "Ilustrador",
      "Fotógrafo",
      "Animador"
    ]
  },

  negocios:{
    nome:"💼 Negócios",
    descricao:"Você gosta de liderança e organização.",
    salario:"R$ 3.000 a R$ 20.000+",
    mercado:"Presente em qualquer empresa.",
    profissao:[
      "Administrador",
      "Empreendedor",
      "Gestor",
      "Consultor"
    ]
  },

  ambiente:{
    nome:"🌱 Meio Ambiente",
    descricao:"Você gosta de cuidar da natureza.",
    salario:"R$ 3.000 a R$ 12.000+",
    mercado:"Cada vez mais valorizado.",
    profissao:[
      "Biólogo",
      "Engenheiro Ambiental",
      "Gestor Ambiental"
    ]
  },

  engenharia:{
    nome:"⚙️ Engenharia",
    descricao:"Você gosta de construir e resolver problemas.",
    salario:"R$ 4.000 a R$ 20.000+",
    mercado:"Alta valorização.",
    profissao:[
      "Engenheiro Civil",
      "Engenheiro Mecânico",
      "Engenheiro Elétrico"
    ]
  },

  direito:{
    nome:"⚖️ Direito",
    descricao:"Você gosta de justiça e argumentação.",
    salario:"R$ 4.000 a R$ 30.000+",
    mercado:"Diversas oportunidades.",
    profissao:[
      "Advogado",
      "Promotor",
      "Juiz",
      "Delegado"
    ]
  }

};

// =========================
// VARIÁVEIS
// =========================

let currentQuestion = 0;
let answers = [];
let selectedAnswer = null;

const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionText = document.getElementById("questionText");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");

const options = document.querySelectorAll(".option");

// =========================
// INICIAR TESTE
// =========================

startBtn.onclick = function () {

    home.classList.remove("active");
    quiz.classList.add("active");

    loadQuestion();

};

// =========================
// CARREGAR PERGUNTA
// =========================

function loadQuestion() {

    const pergunta = questions[currentQuestion];

    questionText.textContent = pergunta.texto;

    questionCounter.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    selectedAnswer = null;

    options.forEach(btn => {

        btn.classList.remove("selected");

    });

}

// =========================
// SELECIONAR RESPOSTA
// =========================

options.forEach(btn => {

    btn.onclick = function () {

        options.forEach(botao => {

            botao.classList.remove("selected");

        });

        btn.classList.add("selected");

        selectedAnswer = Number(btn.dataset.value);

    };

});

// =========================
// BOTÃO PRÓXIMA
// =========================

nextBtn.onclick = function () {

    if (selectedAnswer === null) {

        alert("Escolha uma resposta antes de continuar.");

        return;

    }

    answers.push(selectedAnswer);

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

};
// =========================
// CALCULAR RESULTADO
// =========================

function showResult() {

    quiz.classList.remove("active");
    result.classList.add("active");

    let scores = {
        tecnologia: 0,
        saude: 0,
        educacao: 0,
        artes: 0,
        negocios: 0,
        ambiente: 0,
        engenharia: 0,
        direito: 0
    };

    // Soma os pontos automaticamente
    questions.forEach((pergunta, indice) => {

        pergunta.areas.forEach(area => {

            scores[area] += answers[indice];

        });

    });

    const ranking = document.getElementById("ranking");
    const bestArea = document.getElementById("bestArea");

    ranking.innerHTML = "<h2>📊 Compatibilidade com as áreas</h2>";

    // Cada área possui 2 perguntas.
    // Máximo = 2 perguntas × 5 pontos = 10.
    const maximo = 10;

    const resultado = Object.entries(scores)
        .map(([area, valor]) => ({
            area,
            valor,
            porcentagem: Math.round((valor / maximo) * 100)
        }))
        .sort((a, b) => b.porcentagem - a.porcentagem);

    resultado.forEach((item, index) => {

        let medalha = "";

        if (index === 0) medalha = "🥇";
        else if (index === 1) medalha = "🥈";
        else if (index === 2) medalha = "🥉";

        ranking.innerHTML += `

        <div class="area-score">

            <strong>${medalha} ${areasInfo[item.area].nome}</strong>
            - ${item.porcentagem}%

            <div class="bar">

                <div class="fill"
                     style="width:${item.porcentagem}%">
                </div>

            </div>

        </div>

        `;

    });

    const melhor = areasInfo[resultado[0].area];

    bestArea.innerHTML = `

        <h2>${melhor.nome}</h2>

        <p>${melhor.descricao}</p>

        <div class="info-box">

            <strong>💰 Faixa Salarial</strong><br>

            ${melhor.salario}

        </div>

        <div class="info-box">

            <strong>📈 Mercado de Trabalho</strong><br>

            ${melhor.mercado}

        </div>

        <div class="info-box">

            <strong>👨‍💼 Profissões</strong>

            <ul>

                ${melhor.profissao.map(p => `<li>${p}</li>`).join("")}

            </ul>

        </div>

    `;

}
// =========================
// REFAZER TESTE
// =========================

restartBtn.onclick = function () {

    // Zera as variáveis
    currentQuestion = 0;
    answers = [];
    selectedAnswer = null;

    // Limpa os resultados
    document.getElementById("ranking").innerHTML = "";
    document.getElementById("bestArea").innerHTML = "";

    // Zera a barra de progresso
    progressBar.style.width = "0%";

    // Remove seleção das respostas
    options.forEach(btn => {
        btn.classList.remove("selected");
    });

    // Volta para a tela inicial
    result.classList.remove("active");
    quiz.classList.remove("active");
    home.classList.add("active");

};

// =========================
// CARREGAR PRIMEIRA PERGUNTA
// =========================

loadQuestion();
