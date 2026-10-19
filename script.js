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
    opcoes: ["Vírgula (,)", "Ponto final (.)", "Interrogação (?)", "Dois-pontos (:)"],
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
    explicacao: "Normalmente usamos vírgula antes de 'mas', que indica oposição.",
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

const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const fim = document.getElementById("fim");

const pontosEl = document.getElementById("pontos");
const nivelEl = document.getElementById("nivel");
const numeroEl = document.getElementById("numero");
const totalEl = document.getElementById("total");
const barra = document.getElementById("barra-progresso");

const categoriaEl = document.getElementById("categoria");
const perguntaEl = document.getElementById("pergunta");
const instrucaoEl = document.getElementById("instrucao");
const fraseEl = document.getElementById("frase");
const opcoesEl = document.getElementById("opcoes");
const feedbackEl = document.getElementById("feedback");

const dicaBtn = document.getElementById("dica");
const proximaBtn = document.getElementById("proxima");

let indice = 0;
let pontos = 0;
let acertosPrimeira = 0;
let respondeu = false;
let tentouErrado = false;
let dicaUsada = false;
let nivelAtual = 1;

function mostrarTela(tela) {
  [inicio, jogo, fim].forEach(elemento => {
    elemento.classList.add("escondido");
  });

  tela.classList.remove("escondido");
}

function calcularNivel() {
  // O nível aumenta conforme o número de acertos.
  if (acertosPrimeira >= 7) return 3;
  if (acertosPrimeira >= 3) return 2;
  return 1;
}

function comecar() {
  indice = 0;
  pontos = 0;
  acertosPrimeira = 0;
  nivelAtual = 1;

  pontosEl.textContent = pontos;

  mostrarTela(jogo);
  mostrarPergunta();
}

function mostrarPergunta() {
  const p = perguntas[indice];

  respondeu = false;
  tentouErrado = false;
  dicaUsada = false;

  nivelAtual = calcularNivel();

  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  dicaBtn.classList.remove("escondido");
  proximaBtn.classList.add("escondido");

  nivelEl.textContent = `NÍVEL ${nivelAtual}`;
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

  opcoesEl.innerHTML = "";

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

    feedbackEl.classList.add("bom");
    pontosEl.textContent = pontos;

    dicaBtn.classList.add("escondido");
    proximaBtn.classList.remove("escondido");

    // Atualiza o nível de acordo com os acertos.
    nivelAtual = calcularNivel();
    nivelEl.textContent = `NÍVEL ${nivelAtual}`;

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

    feedbackEl.classList.remove("bom");
    feedbackEl.classList.add("ajuda");
  }
}

function mostrarDica() {
  if (respondeu || dicaUsada) return;

  dicaUsada = true;

  feedbackEl.textContent =
    `💡 Dica: ${perguntas[indice].dica}`;

  feedbackEl.className = "feedback ajuda";
}

function proximaPergunta() {
  if (indice < perguntas.length - 1) {
    indice++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  mostrarTela(fim);
  barra.style.width = "100%";

  document.getElementById("pontuacao-final").textContent = pontos;

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
    "Resumo: porque explica; por que pergunta; por quê aparece no fim de uma pergunta; porquê significa 'o motivo'. A vírgula organiza partes da frase e o ponto final encerra uma afirmação.";
}

document.getElementById("comecar")
  .addEventListener("click", comecar);

dicaBtn.addEventListener("click", mostrarDica);

proximaBtn.addEventListener("click", proximaPergunta);

document.getElementById("reiniciar")
  .addEventListener("click", comecar);
}
