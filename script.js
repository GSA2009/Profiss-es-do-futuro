// =====================================
// PROFISSÕES DO FUTURO - SCRIPT.JS
// PARTE 1
// =====================================


// ===============================
// INFORMAÇÕES DAS ÁREAS
// ===============================


const areas = {

    tecnologia: {

        nome: "💻 Tecnologia",

        profissao: "👨‍💻 Desenvolvedor de Software",

        salario: "R$ 4.000 a R$ 25.000+",

        cursos:
        "Ciência da Computação, Sistemas de Informação, Engenharia de Software e Análise e Desenvolvimento de Sistemas.",

        mercado:
        "A área de tecnologia está crescendo bastante e possui muitas oportunidades no Brasil e no exterior.",

        profissaoRelacionada:
        "Programador, Desenvolvedor de Jogos, Analista de Sistemas, Cientista de Dados.",

        explicacao:
        "Você demonstra interesse por criar soluções, usar tecnologia e resolver problemas usando criatividade e lógica."

    },


    saude: {

        nome: "🏥 Saúde",

        profissao: "🩺 Profissional da Saúde",

        salario: "R$ 3.500 a R$ 30.000+",

        cursos:
        "Medicina, Enfermagem, Fisioterapia, Farmácia e Odontologia.",

        mercado:
        "Sempre existe necessidade de profissionais da saúde para cuidar das pessoas.",

        profissaoRelacionada:
        "Médico, Enfermeiro, Dentista, Fisioterapeuta e Farmacêutico.",

        explicacao:
        "Você mostra interesse em ajudar pessoas e contribuir para o bem-estar delas."

    },


    engenharia: {

        nome: "⚙️ Engenharia",

        profissao: "👷 Engenheiro",

        salario: "R$ 5.000 a R$ 20.000+",

        cursos:
        "Engenharia Civil, Mecânica, Elétrica, Produção e Computação.",

        mercado:
        "Engenheiros são importantes para criar projetos e melhorar tecnologias.",

        profissaoRelacionada:
        "Engenheiro Civil, Mecânico, Eletricista e de Software.",

        explicacao:
        "Você gosta de construir, criar soluções e entender como as coisas funcionam."

    },


    educacao: {

        nome: "📚 Educação",

        profissao: "👩‍🏫 Professor",

        salario: "R$ 3.000 a R$ 12.000+",

        cursos:
        "Pedagogia, Letras, Matemática, História e outras licenciaturas.",

        mercado:
        "Profissionais da educação são essenciais para formar novas gerações.",

        profissaoRelacionada:
        "Professor, Coordenador Pedagógico e Diretor Escolar.",

        explicacao:
        "Você gosta de ensinar, explicar ideias e ajudar outras pessoas a aprender."

    },


    negocios: {

        nome: "💼 Negócios",

        profissao: "📊 Administrador",

        salario: "R$ 3.500 a R$ 25.000+",

        cursos:
        "Administração, Marketing, Economia e Gestão Comercial.",

        mercado:
        "Empresas sempre precisam de pessoas que saibam organizar e liderar projetos.",

        profissaoRelacionada:
        "Empreendedor, Gestor, Analista Financeiro e Gerente.",

        explicacao:
        "Você possui características de liderança, organização e planejamento."

    },


    direito: {

        nome: "⚖️ Direito",

        profissao: "👨‍⚖️ Advogado",

        salario: "R$ 4.000 a R$ 30.000+",

        cursos:
        "Curso superior em Direito.",

        mercado:
        "Existem oportunidades em escritórios, empresas e órgãos públicos.",

        profissaoRelacionada:
        "Advogado, Juiz, Promotor e Delegado.",

        explicacao:
        "Você demonstra interesse por justiça, comunicação e defesa de ideias."

    },


    artes: {

        nome: "🎨 Artes",

        profissao: "🎨 Designer",

        salario:
        "R$ 2.500 a R$ 15.000+",

        cursos:
        "Design, Cinema, Artes Visuais, Publicidade e Animação.",

        mercado:
        "O mercado criativo cresce com internet, jogos, vídeos e mídias digitais.",

        profissaoRelacionada:
        "Designer, Ilustrador, Animador e Fotógrafo.",

        explicacao:
        "Você gosta de criar, imaginar novas ideias e se expressar."

    },


    meioAmbiente: {

        nome: "🌱 Meio Ambiente",

        profissao: "🌎 Especialista Ambiental",

        salario:
        "R$ 3.500 a R$ 18.000+",

        cursos:
        "Biologia, Engenharia Ambiental e Gestão Ambiental.",

        mercado:
        "A sustentabilidade aumenta a procura por profissionais ambientais.",

        profissaoRelacionada:
        "Biólogo, Engenheiro Ambiental e Consultor Ambiental.",

        explicacao:
        "Você demonstra preocupação com a natureza e vontade de proteger o planeta."

    }

};



// ===============================
// PERGUNTAS DO TESTE
// ===============================


const perguntas = [

{
texto:"Você gosta de mexer no computador ou celular para descobrir coisas novas?",
area:"tecnologia"
},

{
texto:"Você teria vontade de criar um jogo, aplicativo ou site?",
area:"tecnologia"
},


{
texto:"Você gosta de ajudar pessoas quando elas precisam?",
area:"saude"
},

{
texto:"Você se imagina trabalhando cuidando da saúde de alguém?",
area:"saude"
},


{
texto:"Você gosta de montar, construir ou consertar coisas?",
area:"engenharia"
},

{
texto:"Quando aparece um problema, você gosta de procurar uma solução?",
area:"engenharia"
},


{
texto:"Você gosta de explicar coisas para seus colegas?",
area:"educacao"
},

{
texto:"Você teria prazer em ensinar algo para outra pessoa?",
area:"educacao"
},


{
texto:"Você gosta de organizar grupos ou liderar atividades?",
area:"negocios"
},

{
texto:"Você gostaria de criar sua própria empresa um dia?",
area:"negocios"
},


{
texto:"Você gosta de conversar e defender suas opiniões?",
area:"direito"
},

{
texto:"Você acha interessante conhecer regras e direitos das pessoas?",
area:"direito"
},


{
texto:"Você gosta de desenhar, criar ou inventar coisas?",
area:"artes"
},

{
texto:"Você gosta de música, vídeos, fotos ou animações?",
area:"artes"
},


{
texto:"Você gosta da natureza e dos animais?",
area:"meioAmbiente"
},

{
texto:"Você gostaria de ajudar a proteger o planeta?",
area:"meioAmbiente"
}

];



// ===============================
// VARIÁVEIS DO TESTE
// ===============================


let perguntaAtual = 0;


let respostas = {};



Object.keys(areas).forEach(area=>{

    respostas[area]=0;

});
// =====================================
// SCRIPT.JS - PARTE 2
// FUNCIONAMENTO DO QUIZ
// =====================================


// ===============================
// ELEMENTOS DA PÁGINA
// ===============================


const home = document.getElementById("home");

const quiz = document.getElementById("quiz");

const result = document.getElementById("result");


const startBtn = document.getElementById("startBtn");

const restartBtn = document.getElementById("restartBtn");


const questionText = document.getElementById("questionText");

const questionCounter = document.getElementById("questionCounter");


const options = document.querySelectorAll(".option");


const nextBtn = document.getElementById("nextBtn");


const progressBar = document.getElementById("progressBar");



// Guarda a resposta escolhida

let respostaSelecionada = null;



// ===============================
// COMEÇAR TESTE
// ===============================


startBtn.addEventListener("click",()=>{


    home.classList.remove("active");


    quiz.classList.add("active");


    mostrarPergunta();


});




// ===============================
// MOSTRAR PERGUNTA
// ===============================


function mostrarPergunta(){


    let pergunta = perguntas[perguntaAtual];


    questionText.textContent = pergunta.texto;



    questionCounter.textContent =

    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;



    let progresso =

    ((perguntaAtual) / perguntas.length) * 100;



    progressBar.style.width = progresso + "%";



    respostaSelecionada = null;



    // Remove seleção anterior

    options.forEach(botao=>{


        botao.classList.remove("selected");


    });



    nextBtn.style.display="none";


}




// ===============================
// ESCOLHA DAS RESPOSTAS
// ===============================


options.forEach(botao=>{


    botao.addEventListener("click",()=>{


        options.forEach(btn=>{

            btn.classList.remove("selected");

        });



        botao.classList.add("selected");



        respostaSelecionada =

        Number(botao.dataset.value);



        nextBtn.style.display="block";



    });



});




// ===============================
// PRÓXIMA PERGUNTA
// ===============================


nextBtn.addEventListener("click",()=>{


    if(respostaSelecionada === null){

        return;

    }



    let pergunta = perguntas[perguntaAtual];



    /*
    
    O valor da resposta vai de 1 até 5.
    
    Quanto maior, maior a afinidade
    com aquela área.

    */


    respostas[pergunta.area] += respostaSelecionada;




    perguntaAtual++;





    if(perguntaAtual < perguntas.length){



        mostrarPergunta();



    }

    else{



        finalizarTeste();



    }



});




// ===============================
// FINALIZAR TESTE
// ===============================


function finalizarTeste(){


    progressBar.style.width="100%";



    quiz.classList.remove("active");


    result.classList.add("active");



    mostrarResultado();


}
// =====================================
// SCRIPT.JS - PARTE 3
// RESULTADO DO TESTE
// =====================================


// ===============================
// MOSTRAR RESULTADO
// ===============================


function mostrarResultado(){


    const bestArea = document.getElementById("bestArea");

    const ranking = document.getElementById("ranking");

    const whyArea = document.getElementById("whyArea");

    const coursesArea = document.getElementById("coursesArea");

    const jobsArea = document.getElementById("jobsArea");

    const marketArea = document.getElementById("marketArea");



    ranking.innerHTML="";



    // Organiza as áreas pela pontuação

    let lista = Object.keys(respostas).map(area=>{


        return {

            area:area,

            pontos:respostas[area]

        };


    });



    lista.sort((a,b)=>{


        return b.pontos - a.pontos;


    });



    const principal = lista[0];


    const dados = areas[principal.area];



    // Calcula porcentagem

    const maiorPontuacao = 5 * 2;


    const porcentagemPrincipal = Math.round(

        (principal.pontos / maiorPontuacao) * 100

    );





    // ===============================
    // ÁREA PRINCIPAL
    // ===============================


    bestArea.innerHTML = `


        <h2>

        🏆 Sua maior afinidade:

        </h2>


        <h1>

        ${dados.profissao}

        </h1>



        <h3>

        Área: ${dados.nome}

        </h3>



        <p class="percent">

        Compatibilidade: ${porcentagemPrincipal}%

        </p>


    `;




    // ===============================
    // EXPLICAÇÃO
    // ===============================


    whyArea.innerHTML = `


    <h2>

    💡 Por que essa profissão combina com você?

    </h2>


    <p>

    ${dados.explicacao}

    </p>


    `;




    // ===============================
    // CURSOS
    // ===============================


    coursesArea.innerHTML = `


    <h2>

    🎓 Cursos recomendados

    </h2>


    <p>

    ${dados.cursos}

    </p>


    `;




    // ===============================
    // PROFISSÕES
    // ===============================


    jobsArea.innerHTML = `


    <h2>

    💼 Profissões relacionadas

    </h2>


    <p>

    ${dados.profissaoRelacionada}

    </p>


    `;




    // ===============================
    // MERCADO
    // ===============================


    marketArea.innerHTML = `


    <h2>

    📈 Mercado e salário

    </h2>


    <p>

    💰 ${dados.salario}

    </p>


    <p>

    ${dados.mercado}

    </p>


    `;




    // ===============================
    // RANKING COMPLETO
    // ===============================



    lista.forEach((item,index)=>{


        let area = areas[item.area];



        let porcentagem = Math.round(

            (item.pontos / maiorPontuacao) * 100

        );



        let medalha="";


        if(index===0){

            medalha="🥇";

        }

        else if(index===1){

            medalha="🥈";

        }

        else if(index===2){

            medalha="🥉";

        }




        ranking.innerHTML += `


        <div class="rank-item top${index+1}">


            <div class="rank-title">


                <span>

                ${medalha}

                ${area.nome}

                </span>


                <span>

                ${porcentagem}%

                </span>


            </div>



            <div class="rank-bar">


                <div class="rank-fill"

                style="width:${porcentagem}%">

                </div>


            </div>



        </div>


        `;



    });


}
// =====================================
// SCRIPT.JS - PARTE 4
// AJUSTES FINAIS
// =====================================



// ===============================
// BOTÃO REFAZER TESTE
// ===============================


restartBtn.addEventListener("click",()=>{


    // Volta para a primeira tela

    result.classList.remove("active");

    home.classList.add("active");



    // Reinicia pergunta

    perguntaAtual = 0;



    // Limpa respostas

    Object.keys(respostas).forEach(area=>{


        respostas[area] = 0;


    });



    // Limpa resultado anterior

    document.getElementById("bestArea").innerHTML="";

    document.getElementById("ranking").innerHTML="";

    document.getElementById("whyArea").innerHTML="";

    document.getElementById("coursesArea").innerHTML="";

    document.getElementById("jobsArea").innerHTML="";

    document.getElementById("marketArea").innerHTML="";



    // Volta barra de progresso

    progressBar.style.width="0%";



    // Remove respostas selecionadas

    options.forEach(botao=>{


        botao.classList.remove("selected");


    });



});




// ===============================
// ANIMAÇÃO DOS RESULTADOS
// ===============================


function animarResultado(){


    const cards = document.querySelectorAll(

        ".info-card, .rank-item"

    );



    cards.forEach((card,index)=>{


        card.style.opacity="0";


        card.style.transform="translateY(30px)";



        setTimeout(()=>{


            card.style.transition=".5s";


            card.style.opacity="1";


            card.style.transform="translateY(0)";



        },index * 100);



    });


}



// Executa animação quando abrir resultado

const resultadoOriginal = mostrarResultado;


mostrarResultado = function(){


    resultadoOriginal();


    setTimeout(()=>{


        animarResultado();


    },100);



};





// ===============================
// PROTEÇÃO CONTRA ERROS
// ===============================


window.addEventListener("load",()=>{


    if(!home.classList.contains("active")

    && !quiz.classList.contains("active")

    && !result.classList.contains("active")){


        home.classList.add("active");


    }


});
