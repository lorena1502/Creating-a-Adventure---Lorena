const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você recebe a bola no meio-campo. Um jogador do Palmeiras vem rapidamente para marcar você. O que você faz?",
        alternativas: [
            
            {
                texto: "🏃 Tenta driblar o adversário e avançar.",            
                afirmacao:[ "Você dá um corte rápido, deixa o marcador para trás e avança pelo meio-campo. A torcida do Flamengo começa a vibrar!",
                "Você aplica uma caneta no adversário e dispara pela lateral. Agora há espaço para criar uma jogada perigosa", 
                " Você tenta o drible, sofre uma falta e consegue uma boa oportunidade para o Flamengo continuar no ataque.",
            ]
            },
            {
                texto: " 🤝 Passa a bola para um companheiro.",
                afirmacao: [" Você faz um passe preciso para o companheiro, que domina e começa a organizar o ataque.",
                "O passe encontra seu companheiro livre. O Flamengo troca passes rapidamente e avança em direção à área.",
                "Você toca de primeira e seu companheiro devolve a bola em velocidade. A jogada deixa a defesa do Palmeiras desorganizada.",
            ]
            }
        ]
    },
    {
        enunciado: "Você recebe a bola perto da área. O goleiro está atento. O que você faz?",
        alternativas: [
            {
                texto: "A) ⚽ Chuta em direção ao gol.",
                afirmacao: ["Você bate colocado no canto, mas o goleiro se estica e faz uma grande defesa!", 
                "Você solta uma bomba de fora da área. A bola passa muito perto da trave e assusta o goleiro.",
                "Você chuta rasteiro no meio dos defensores. O goleiro espalma, e o Flamengo ganha um escanteio.",
            
            
            ]

            },
            {
                texto: "B) 🤝 Passa para um companheiro melhor posicionado.",
                afirmacao: "Resposta incorreta."
            }
        ]
    },
    {
        enunciado: "Começa o segundo tempo. O Flamengo consegue um escanteio. Você olha para a área e percebe que Danilo está entrando livre. O que você faz?",
        alternativas: [
            {
                texto: "A) 🎯 Cobra o escanteio na direção de Danilo.",
                afirmacao: "Resposta correta!"
            },
            {
                texto: "B) 🔄 Faz um passe curto para outro jogador.",
                afirmacao: "Resposta incorreta."
            }
        ]
    },
    {
        enunciado: "Faltam poucos minutos para terminar a partida. O Palmeiras começa a pressionar. Você está cansado, mas precisa ajudar sua equipe. O que você faz?",
        alternativas: [
            {
                texto: "A) 🛡️ Volta para ajudar a defesa.",
                afirmacao: "Resposta correta!"
            },
            {
                texto: "B) 🚀 Continua no ataque para tentar marcar o segundo gol.",
                afirmacao: "Resposta incorreta."
            }
        ]
    },
    {
        enunciado: "O relógio marca 90 minutos. O Palmeiras tenta empatar. Você recebe a bola e precisa tomar uma última decisão. O que você faz?",
        alternativas: [
            {
                texto: "A) 🛡️ Protege a bola e ajuda o time a controlar o jogo.",
                afirmacao: "Resposta correta!"
            },
            {
                texto: "B) ⚡ Parte para o ataque em busca do segundo gol.",
                afirmacao: "Resposta incorreta."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz Finalizado!";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = historiaFinal;
    caixaResultado.style.display = "block";
}

mostraPergunta();