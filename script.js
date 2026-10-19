"use strict";

const perguntas = [
  {
    tipo: "porques",
    pergunta: "Qual palavra completa a frase?",
    instrucao: "Escolha o porquê que apresenta uma explicação.",
    frase: "Não fui à escola ____ estava doente.",
    opcoes: ["porque", "por que", "por quê", "porquê"],
    correta: 0,
    explicacao: "Porque, junto e sem acento, apresenta uma explicação ou causa.",
    dica: "A frase explica a causa de não ter ido à escola."
  },
  {
    tipo: "pontuacao",
    pergunta: "Qual sinal encerra a frase?",
    instrucao: "A frase apresenta uma informação.",
    frase: "A biblioteca fecha às cinco horas ____",
    opcoes: [
      "Vírgula (,)",
      "Ponto final (.)",
      "Interrogação (?)",
      "Dois-pontos (:)"
    ],
    correta: 1,
    explicacao: "O ponto final encerra uma frase declarativa.",
    dica: "A frase informa um horário. Não é uma pergunta."
  },
  {
    tipo: "porques",
    pergunta: "Qual é a forma correta?",
    instrucao: "A frase está fazendo uma pergunta.",
    frase: "____ você está sorrindo?",
    opcoes: ["Porque", "Por quê", "Por que", "Porquê"],
    correta: 2,
    explicacao: "Por que, separado e sem acento, é usado em perguntas com sentido de 'por qual motivo'.",
    dica: "Experimente trocar a expressão por 'por qual motivo'."
  },
  {
    tipo: "pontuacao",
    pergunta: "Onde a vírgula deve aparecer?",
    instrucao: "Escolha a frase pontuada corretamente.",
    frase: "Qual frase está correta?",
    opcoes: [
      "Comprei maçãs bananas e peras.",
      "Comprei, maçãs bananas e peras.",
      "Comprei maçãs, bananas e peras.",
      "Comprei maçãs bananas, e peras."
    ],
    correta: 2,
    explicacao: "A vírgula separa os elementos de uma lista: maçãs, bananas e peras.",
    dica: "Pense em como separar os itens de uma lista."
  },
  {
    tipo: "porques",
    pergunta: "Desafio dos porquês!",
    instrucao: "Observe a posição da expressão.",
    frase: "Você saiu mais cedo, ____?",
    opcoes: ["porque", "por que", "por quê", "porquê"],
    correta: 2,
    explicacao: "Por quê, separado e com acento, é usado no fim de uma pergunta.",
    dica: "Quando aparece no fim da pergunta, o quê recebe acento."
  },
  {
    tipo: "pontuacao",
    pergunta: "Qual frase usa a vírgula corretamente?",
    instrucao: "Observe o nome da pessoa chamada.",
    frase: "Escolha a frase correta.",
    opcoes: [
      "Lucas venha aqui.",
      "Lucas, venha aqui.",
      "Lucas venha, aqui.",
      "Lucas venha aqui,"
    ],
    correta: 1,
    explicacao: "A vírgula separa o vocativo, isto é, o nome da pessoa a quem falamos.",
    dica: "Quando chamamos alguém pelo nome, usamos uma vírgula para separá-lo."
  },
  {
    tipo: "porques",
    pergunta: "Qual porquê significa 'o motivo'?",
    instrucao: "Complete a frase com atenção.",
    frase: "Ninguém entendeu o ____ da confusão.",
    opcoes: ["por que", "porque", "por quê", "porquê"],
    correta: 3,
    explicacao: "Porquê é um substantivo que significa 'o motivo'. Observe o artigo 'o' antes dele.",
    dica: "Experimente substituir a palavra por 'motivo'."
  },
  {
    tipo: "pontuacao",
    pergunta: "Escolha a pontuação adequada.",
    instrucao: "Observe a palavra que indica oposição.",
    frase: "Eu queria brincar ____ precisava terminar a tarefa.",
    opcoes: [
      "Ponto final (.)",
      "Vírgula (,)",
      "Ponto de interrogação (?)",
      "Nenhum sinal"
    ],
    correta: 1,
    explicacao: "A vírgula costuma ser usada antes de 'mas', que indica oposição. A frase completa fica: 'Eu queria brincar, mas precisava terminar a tarefa.'",
    dica: "A palavra 'mas' liga ideias que contrastam."
  },
  {
    tipo: "porques",
    pergunta: "Desafio avançado dos porquês!",
    instrucao: "Complete a pergunta indireta.",
    frase: "Gostaria de saber ____ o jogo terminou.",
    opcoes: ["porquê", "por que", "porque", "por quê"],
    correta: 1,
    explicacao: "Por que é usado em perguntas indiretas, com sentido de 'por qual motivo'.",
    dica: "A frase quer descobrir o motivo, mesmo sem terminar com interrogação."
  },
  {
    tipo: "pontuacao",
    pergunta: "Qual opção está pontuada corretamente?",
    instrucao: "Observe a pausa e o encerramento.",
    frase: "Escolha a frase correta.",
    opcoes: [
      "Quando cheguei em casa, fui tomar banho.",
      "Quando cheguei, em casa fui tomar banho",
      "Quando, cheguei em casa fui tomar banho.",
      "Quando cheguei em casa fui, tomar banho."
    ],
    correta: 0,
    explicacao: "A vírgula separa a oração inicial da oração principal. O ponto final encerra a afirmação.",
    dica: "A expressão 'Quando cheguei em casa' vem antes da ideia principal."
  }
];

// Elementos das telas
const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const fim = document.getElementById("fim");

// Elementos do painel
const pontosEl = document.getElementById("pontos");
const nivelEl = document.getElementById("nivel");
const numeroEl = document.getElementById("numero");
const totalEl = document.getElementById("total");
const barra = document.getElementById("barra-progresso");

// Elementos das perguntas
const categoriaEl = document.getElementById("categoria");
const perguntaEl = document.getElementById("pergunta");
const instrucaoEl = document.getElementById("instrucao");
const fraseEl = document.getElementById("frase");
const opcoesEl = document.getElementById("opcoes");
const feedbackEl = document.getElementById("feedback");

// Botões
const comecarBtn = document.getElementById("comecar");
const dicaBtn = document.getElementById("dica");
const proximaBtn = document.getElementById("proxima");
const reiniciarBtn = document.getElementById("reiniciar");

// Estado do jogo
let indice = 0;
let pontos = 0;
let acertosPrimeira = 0;
let respondeu = false;
let tentouErrado = false;
let dicaUsada = false;

// Alterna entre as telas
function mostrarTela(tela) {
  [inicio, jogo, fim].forEach(elemento => {
    elemento.classList.add("escondido");
  });

  tela.classList.remove("escondido");
}

// Calcula o nível do jogador
function calcularNivel() {
  if (acertosPrimeira >= 7) return 3;
  if (acertosPrimeira >= 3) return 2;
  return 1;
}

// Inicia ou reinicia a missão
function comecar() {
  indice = 0;
  pontos = 0;
  acertosPrimeira = 0;
  respondeu = false;
  tentouErrado = false;
  dicaUsada = false;

  pontosEl.textContent = "0";
  barra.style.width = "0%";

  mostrarTela(jogo);
  mostrarPergunta();
}

// Exibe a pergunta atual
function mostrarPergunta() {
  const p = perguntas[indice];

  respondeu = false;
  tentouErrado = false;
  dicaUsada = false;

  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  dicaBtn.classList.remove("escondido");
  dicaBtn.disabled = false;
  proximaBtn.classList.add("escondido");

  nivelEl.textContent = `NÍVEL ${calcularNivel()}`;
  numeroEl.textContent = indice + 1;
  totalEl.textContent = perguntas.length;

  barra.style.width =
    `${(indice / perguntas.length) * 100}%`;

  categoriaEl.textContent =
    p.tipo === "porques"
      ? "🔎 MISSÃO: OS PORQUÊS"
      : "✏️ MISSÃO: PONTUAÇÃO";

  perguntaEl.textContent = p.pergunta;
  instrucaoEl.textContent = p.instrucao;
  fraseEl.textContent = p.frase;

  // Cria as alternativas sem inserir texto HTML externo
  opcoesEl.replaceChildren();

  p.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");

    botao.className = "opcao";
    botao.type = "button";
    botao.textContent =
      `${String.fromCharCode(65 + i)}. ${opcao}`;

    botao.addEventListener("click", () => {
      verificarResposta(i, botao);
    });

    opcoesEl.appendChild(botao);
  });
}

// Verifica a resposta escolhida
function verificarResposta(escolha, botaoEscolhido) {
  if (respondeu) return;

  const p = perguntas[indice];
  const botoes = [...opcoesEl.querySelectorAll("button")];

  if (escolha === p.correta) {
    respondeu = true;

    botoes.forEach(botao => {
      botao.disabled = true;
    });

    botaoEscolhido.classList.add("correta");

    if (!tentouErrado && !dicaUsada) {
      pontos += 10;
      acertosPrimeira++;

      feedbackEl.textContent =
        `🌟 Muito bem! ${p.explicacao} +10 pontos!`;
    } else {
      pontos += 5;

      feedbackEl.textContent =
        `👏 Você conseguiu! ${p.explicacao} +5 pontos!`;
    }

    feedbackEl.className = "feedback bom";
    pontosEl.textContent = pontos;

    dicaBtn.classList.add("escondido");
    proximaBtn.classList.remove("escondido");

    nivelEl.textContent = `NÍVEL ${calcularNivel()}`;

    proximaBtn.textContent =
      indice === perguntas.length - 1
        ? "Ver resultado 🏆"
        : "Próxima questão ➜";

  } else {
    tentouErrado = true;

    botaoEscolhido.classList.add("errada");
    botaoEscolhido.disabled = true;

    feedbackEl.textContent =
      `Quase! ${p.dica} Tente outra alternativa.`;

    feedbackEl.className = "feedback ajuda";
  }
}

// Mostra uma dica sem revelar a resposta
function mostrarDica() {
  if (respondeu || dicaUsada) return;

  dicaUsada = true;

  feedbackEl.textContent =
    `💡 Dica: ${perguntas[indice].dica}`;

  feedbackEl.className = "feedback ajuda";

  // A dica só pode ser usada uma vez por pergunta
  dicaBtn.disabled = true;
}

// Avança para a próxima pergunta
function proximaPergunta() {
  if (!respondeu) return;

  if (indice < perguntas.length - 1) {
    indice++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

// Exibe o resultado final
function mostrarResultado() {
  mostrarTela(fim);

  barra.style.width = "100%";

  document.getElementById("pontuacao-final").textContent =
    pontos;

  document.getElementById("acertos-final").textContent =
    `${acertosPrimeira}/${perguntas.length}`;

  const titulo = document.getElementById("titulo-final");
  const mensagem = document.getElementById("mensagem-final");
  const dicaFinal = document.getElementById("dica-final");

  if (acertosPrimeira >= 8) {
    titulo.textContent = "Craque da gramática! 🏆";
    mensagem.textContent =
      "Excelente! Você demonstrou domínio dos porquês e da pontuação.";
  } else if (acertosPrimeira >= 5) {
    titulo.textContent = "Ótimo trabalho! 🌟";
    mensagem.textContent =
      "Você está avançando. Revise as dicas e tente melhorar sua pontuação.";
  } else {
    titulo.textContent = "Continue treinando! 🔎";
    mensagem.textContent =
      "Errar faz parte do aprendizado. Jogue novamente e use as dicas para evoluir.";
  }

  dicaFinal.textContent =
    "Resumo: porque explica; por que é usado em perguntas; por quê aparece no fim de uma pergunta; porquê significa 'o motivo'. A vírgula organiza partes da frase e o ponto final encerra uma afirmação.";
}

// Eventos dos botões
comecarBtn.addEventListener("click", comecar);
dicaBtn.addEventListener("click", mostrarDica);
proximaBtn.addEventListener("click", proximaPergunta);
reiniciarBtn.addEventListener("click", comecar);

// Confirma que os arquivos foram conectados corretamente
console.log("Missão Português carregada com sucesso!");
