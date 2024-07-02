const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {         
        enunciado: "Onde foram realizados os primeiros jogos olímpicos modernos?",
        alternativas: [
            {
                texto: "Paris,1900?",
                afirmacao: "ERRADO!! Na verdade Em 6 de abril de 1896 começava em Atenas, na Grécia, a primeira edição dos Jogos Olímpicos da Era Moderna. O renascimento do espírito olímpico, interrompido no ano 392, deveu-se ao francês Barão de Coubertin."
           "
            },
            {
                texto: "Saint louis, 1904",
                afirmacao: "ERRADO!! Na verdade Em 6 de abril de 1896 começava em Atenas, na Grécia, a primeira edição dos Jogos Olímpicos da Era Moderna. O renascimento do espírito olímpico, interrompido no ano 392, deveu-se ao francês Barão de Coubertin."
           "
            },
            {
                 texto: "Atenas, 1896",
                afirmacao: "Correta Em 6 de abril de 1896 começava em Atenas, na Grécia, a primeira edição dos Jogos Olímpicos da Era Moderna. O renascimento do espírito olímpico, interrompido no ano 392, deveu-se ao francês Barão de Coubertin."
           "
            },
            {
                 texto: "Atenas, 1906",
                afirmacao: " ERRADO!! Na verdade Em 6 de abril de 1896 começava em Atenas, na Grécia, a primeira edição dos Jogos Olímpicos da Era Moderna. O renascimento do espírito olímpico, interrompido no ano 392, deveu-se ao francês Barão de Coubertin."
            }
            
        ]
    },
    {
        enunciado: "Qual time de futebol é conhecido com 'The Red Devils' ?",
        alternativas: [
            {
                texto: "Paris Saint-Germain",
                afirmacao: "Incorreta!! Na Verdade O marcante e muito conhecido apelido “Red Devils” se originou do rúgbi. Assim como o futebol, o esporte também é muito valorizado na Inglaterra. Por volta dos anos 1930, a melhor equipe de rúgbi inglesa era de Salford, região metropolitana de Manchester. Manchester United – Red Devils."
            },
            {
                texto: "Manchester United",
                afirmacao: "Correta!! O marcante e muito conhecido apelido “Red Devils” se originou do rúgbi. Assim como o futebol, o esporte também é muito valorizado na Inglaterra. Por volta dos anos 1930, a melhor equipe de rúgbi inglesa era de Salford, região metropolitana de Manchester. Manchester United – Red Devils."
            },
            {
               texto: "Barcelona",
                afirmacao: "Incorreta!! Na Verdade O marcante e muito conhecido apelido “Red Devils” se originou do rúgbi. Assim como o futebol, o esporte também é muito valorizado na Inglaterra. Por volta dos anos 1930, a melhor equipe de rúgbi inglesa era de Salford, região metropolitana de Manchester. Manchester United – Red Devils."
            },
            {
                texto: "Liverpool",
                afirmacao: "Incorreta!! Na verdade O marcante e muito conhecido apelido “Red Devils” se originou do rúgbi. Assim como o futebol, o esporte também é muito valorizado na Inglaterra. Por volta dos anos 1930, a melhor equipe de rúgbi inglesa era de Salford, região metropolitana de Manchester. Manchester United – Red Devils."  
            }
        ]
    },
    {
        enunciado: "Qual motorista ganhou mais campeonatos de fórmula 1?",
        alternativas: [
            {
                texto: "Max Verstappen",
                afirmacao: "Correto!! O neerlandês Max Verstappen, é o atual campeão da categoria, pela Red Bull. Em um total de 74 temporadas, 34 pilotos conquistaram o título mundial de pilotos, sendo o alemão Michael Schumacher e o inglês Lewis Hamilton, os maiores vencedores com 7 títulos cada um"
            },
            {
                texto: "Lewis Hamilton",
                afirmacao: "Incorreto na verdade  O neerlandês Max Verstappen, é o atual campeão da categoria, pela Red Bull. Em um total de 74 temporadas, 34 pilotos conquistaram o título mundial de pilotos, sendo o alemão Michael Schumacher e o inglês Lewis Hamilton, os maiores vencedores com 7 títulos cada um "
            },
            {
                texto: "Ayrton Senna",
                afirmacao: "Incorreta na verdade O neerlandês Max Verstappen, é o atual campeão da categoria, pela Red Bull. Em um total de 74 temporadas, 34 pilotos conquistaram o título mundial de pilotos, sendo o alemão Michael Schumacher e o inglês Lewis Hamilton, os maiores vencedores com 7 títulos cada um" 
            },
            {
                texto: "George Russell",
                afirmacao: "Incorreto na verdade O neerlandês Max Verstappen, é o atual campeão da categoria, pela Red Bull. Em um total de 74 temporadas, 34 pilotos conquistaram o título mundial de pilotos, sendo o alemão Michael Schumacher e o inglês Lewis Hamilton, os maiores vencedores com 7 títulos cada um "
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
