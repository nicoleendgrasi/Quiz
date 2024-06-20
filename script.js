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
                afirmacao: "Incorreta"
            },
            {
                texto: "Saint louis, 1904",
                afirmacao: "Incorreta"
            },
            {
                 texto: "Atenas, 1896",
                afirmacao: "Correta"
            },
            {
                 texto: "Atenas, 1906",
                afirmacao: "Incorreta"
            }
            
        ]
    },
    {
        enunciado: "Qual time de futebol é conhecido com 'The Red Devils' ?",
        alternativas: [
            {
                texto: "Paris Saint-Germain",
                afirmacao: "Incorreta"
            },
            {
                texto: "Manchester United",
                afirmacao: "Correta"
            },
            {
               texto: "Barcelona",
                afirmacao: "Incorreta"
            },
            {
                texto: "Liverpool",
                afirmacao: "Incorreta"  
            }
        ]
    },
    {
        enunciado: "Qual motorista ganhou mais campeonatos de fórmula 1?",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: "  "
            },
            {
                texto: "",
                afirmacao: "" 
            },
            {
                texto: "",
                afirmacao: " "
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