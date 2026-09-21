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
                afirmacao: ["Seu companheiro recebe livre e finaliza, mas o goleiro consegue defender.",
                "Você faz um passe rasteiro para dentro da área, mas um defensor do Palmeiras aparece no último instante e corta.",
                "O passe chega ao companheiro, que tenta cruzar para o meio. A defesa consegue afastar, mas o Flamengo continua pressionando.",
            ]
            }
        ]
    },
    {
        enunciado: "Começa o segundo tempo. O Flamengo consegue um escanteio. Você olha para a área e percebe que Danilo está entrando livre. O que você faz?",
        alternativas: [
            {
                texto: "A) 🎯 Cobra o escanteio na direção de Danilo.",
                afirmacao: ["A bola chega perfeita em Danilo. Ele sobe mais alto que os defensores e cabeceia para o gol! ⚽ GOOOOOOOL!",
                "Você coloca a bola na pequena área. Danilo se antecipa ao marcador e desvia de cabeça para o fundo da rede! Gol do Flamengo!",
                "A cobrança encontra Danilo completamente livre. Ele cabeceia forte, e o goleiro ainda toca na bola, mas não consegue evitar o gol!",
            ]
            },
            {
                texto: "B) 🔄 Faz um passe curto para outro jogador.",
                afirmacao: ["O companheiro recebe o passe, mas demora para cruzar. Um defensor chega e recupera a bola.",
                "O passe curto funciona inicialmente, mas o Palmeiras fecha os espaços e consegue afastar a bola da área.",
                "Você tenta uma jogada ensaiada, mas o passe sai forte demais. A defesa recupera e começa um contra-ataque.",
            ]
            }
        ]
    },
    {
        enunciado: "Faltam poucos minutos para terminar a partida. O Palmeiras começa a pressionar. Você está cansado, mas precisa ajudar sua equipe. O que você faz?",
        alternativas: [
            {
                texto: "A) 🛡️ Volta para ajudar a defesa.",
                afirmacao:["Você acompanha o atacante do Palmeiras e consegue bloquear o chute antes que ele chegue ao gol.",
                "Você volta rapidamente e intercepta um passe perigoso dentro da área. A torcida comemora como se fosse gol!",
                "Você ajuda a fechar os espaços e força o adversário a recuar. O Flamengo ganha alguns segundos preciosos.",
                ]
            },
            {
                texto: "B) 🚀 Continua no ataque para tentar marcar o segundo gol.",
                afirmacao:[" O Flamengo recupera a bola e você dispara no contra-ataque. Você recebe na frente do goleiro, mas a finalização passa raspando a trave!",
                "Você recebe um lançamento perfeito, entra na área e chuta cruzado. O goleiro faz uma defesa espetacular.",
                "Você consegue escapar da marcação e fica cara a cara com o goleiro. O chute é defendido, mas o Flamengo quase amplia a vantagem!",
            ]
            }
        ]
    },
    {
        enunciado: "O relógio marca 90 minutos. O Palmeiras tenta empatar. Você recebe a bola e precisa tomar uma última decisão. O que você faz?",
        alternativas: [
            {
                texto: "A) 🛡️ Protege a bola e ajuda o time a controlar o jogo.",
                afirmacao: ["Você protege a bola perto da bandeirinha de escanteio e sofre uma falta. O relógio continua correndo.",
                "Você mantém a posse, troca passes com seus companheiros e faz o Palmeiras correr atrás da bola.",
                " Você segura a bola com inteligência, espera o adversário chegar e consegue tocar para um companheiro. O Flamengo controla os últimos segundos.",
            ]
            },
            {
                texto: "B) ⚡ Parte para o ataque em busca do segundo gol.",
                afirmacao: ["Você tenta passar por dois defensores, mas perde a bola. Felizmente, um companheiro recupera rapidamente.",
                "Você avança pelo meio e tenta um passe arriscado. O Palmeiras intercepta, mas a defesa do Flamengo consegue afastar.",
                "Você parte em velocidade, mas é cercado por três jogadores. A bola sobra para o Palmeiras, que começa uma última tentativa de ataque.",

            ]
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