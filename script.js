const questions = [
  "Gosto de aprender sobre novas tecnologias.",
  "Gosto de ajudar pessoas a resolver problemas.",
  "Gosto de desenhar, criar ou inventar coisas.",
  "Tenho facilidade com matemática.",
  "Gosto de ensinar ou explicar conteúdos.",
  "Me preocupo com questões ambientais.",
  "Gosto de liderar grupos ou equipes.",
  "Gosto de analisar informações antes de decidir.",
  "Tenho interesse em ciência e pesquisas.",
  "Prefiro trabalhos criativos a repetitivos.",
  "Gosto de planejar e organizar atividades.",
  "Tenho curiosidade sobre como máquinas funcionam.",
  "Gosto de conversar e me comunicar com pessoas.",
  "Tenho interesse em melhorar a vida das pessoas.",
  "Gostaria de trabalhar em algo que impacte o futuro."
];

const areasInfo = {
  tecnologia: {
    nome: "💻 Tecnologia",
    descricao: "Área focada em inovação, programação e soluções tecnológicas.",
    salario: "R$ 3.000 a R$ 15.000+",
    mercado: "Alta demanda e crescimento constante.",
    profissao: [
      "Desenvolvedor de Software",
      "Cientista de Dados",
      "Especialista em Cibersegurança",
      "Engenheiro de IA"
    ]
  },

  saude: {
    nome: "🏥 Saúde",
    descricao: "Área voltada ao cuidado das pessoas.",
    salario: "R$ 3.500 a R$ 20.000+",
    mercado: "Sempre necessária.",
    profissao: [
      "Médico",
      "Enfermeiro",
      "Fisioterapeuta",
      "Biotecnologista"
    ]
  },

  educacao: {
    nome: "📚 Educação",
    descricao: "Área responsável pela formação das pessoas.",
    salario: "R$ 2.500 a R$ 12.000+",
    mercado: "Muito importante para a sociedade.",
    profissao: [
      "Professor",
      "Pedagogo",
      "Psicopedagogo",
      "Designer Educacional"
    ]
  },

  artes: {
    nome: "🎨 Artes e Design",
    descricao: "Área ligada à criatividade e comunicação visual.",
    salario: "R$ 2.000 a R$ 15.000+",
    mercado: "Em crescimento.",
    profissao: [
      "Designer Gráfico",
      "Animador Digital",
      "UX/UI Designer",
      "Diretor de Arte"
    ]
  },

  negocios: {
    nome: "💼 Negócios",
    descricao: "Área de gestão e empreendedorismo.",
    salario: "R$ 3.000 a R$ 20.000+",
    mercado: "Presente em todos os setores.",
    profissao: [
      "Administrador",
      "Empreendedor",
      "Analista Financeiro",
      "Gestor de Projetos"
    ]
  },

  ambiente: {
    nome: "🌱 Meio Ambiente",
    descricao: "Área dedicada à sustentabilidade.",
    salario: "R$ 3.000 a R$ 12.000+",
    mercado: "Cada vez mais importante.",
    profissao: [
      "Engenheiro Ambiental",
      "Biólogo",
      "Gestor Ambiental",
      "Especialista em Energias Renováveis"
    ]
  },

  engenharia: {
    nome: "⚙️ Engenharia",
    descricao: "Área que cria soluções para problemas reais.",
    salario: "R$ 4.000 a R$ 20.000+",
    mercado: "Alta valorização.",
    profissao: [
      "Engenheiro Civil",
      "Engenheiro Mecânico",
      "Engenheiro Elétrico",
      "Engenheiro de Produção"
    ]
  },

  direito: {
    nome: "⚖️ Direito",
    descricao: "Área relacionada à justiça e às leis.",
    salario: "R$ 4.000 a R$ 30.000+",
    mercado: "Diversas oportunidades.",
    profissao: [
      "Advogado",
      "Promotor",
      "Juiz",
      "Delegado"
    ]
  }
};

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

startBtn.onclick = function () {
  home.classList.remove("active");
  quiz.classList.add("active");
  loadQuestion();
};

function loadQuestion() {

  questionText.textContent = questions[currentQuestion];

  questionCounter.textContent =
    `Pergunta ${currentQuestion + 1} de ${questions.length}`;

  progressBar.style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  selectedAnswer = null;

  options.forEach(btn => {
    btn.classList.remove("selected");
  });
}

options.forEach(btn => {

  btn.onclick = function () {

    options.forEach(b => {
      b.classList.remove("selected");
    });

    btn.classList.add("selected");

    selectedAnswer = Number(btn.dataset.value);
  };

});

nextBtn.onclick = function () {

  if (selectedAnswer === null) {
    alert("Escolha uma resposta.");
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

  scores.tecnologia += answers[0]*3 + answers[3]*2 + answers[11]*3;
  scores.saude += answers[1]*3 + answers[8]*2 + answers[13]*3;
  scores.educacao += answers[4]*3 + answers[12]*2 + answers[13]*2;
  scores.artes += answers[2]*3 + answers[9]*3;
  scores.negocios += answers[6]*3 + answers[10]*2 + answers[12]*2;
  scores.ambiente += answers[5]*3 + answers[8]*2 + answers[14]*2;
  scores.engenharia += answers[3]*3 + answers[7]*2 + answers[11]*3;
  scores.direito += answers[6]*2 + answers[7]*2 + answers[12]*3;

  const ranking = document.getElementById("ranking");
  const bestArea = document.getElementById("bestArea");

  ranking.innerHTML = "<h2>📊 Afinidade com cada área</h2>";

  const maximos = {
    tecnologia: 40,
    saude: 40,
    educacao: 35,
    artes: 30,
    negocios: 35,
    ambiente: 35,
    engenharia: 40,
    direito: 35
  };
  
  const sorted = Object.entries(scores)
  .map(([area, valor]) => ({
    area,
    valor,
    porcentagem: Math.round((valor /
  maximos[area]) * 100)
    }))
  
    .sort((a, b) => b.valor - a.valor);

  sorted.forEach(item => {

    ranking.innerHTML += `
      <div class="area-score">
        <strong>${areasInfo[item.area].nome}</strong> - ${item.porcentagem}%

        <div class="bar">
          <div class="fill" style="width:${item.porcentagem}%"></div>
        </div>
      </div>
    `;
  });

  const info = areasInfo[sorted[0].area];

  bestArea.innerHTML = `
    <h2>${info.nome}</h2>

    <p>${info.descricao}</p>

    <div class="info-box">
      <strong>💰 Faixa Salarial</strong><br>
      ${info.salario}
    </div>

    <div class="info-box">
      <strong>📈 Mercado de Trabalho</strong><br>
      ${info.mercado}
    </div>

    <div class="info-box">
      <strong>👨‍💻 Profissões Relacionadas</strong>

      <ul>
        ${info.profissao.map(p => `<li>${p}</li>`).join("")}
      </ul>
    </div>
  `;
}

restartBtn.onclick = function () {

  currentQuestion = 0;
  answers = [];
  selectedAnswer = null;

  result.classList.remove("active");
  quiz.classList.remove("active");
  home.classList.add("active");

  document.getElementById("ranking").innerHTML = "";
  document.getElementById("bestArea").innerHTML = "";

  progressBar.style.width = "0%";

};
