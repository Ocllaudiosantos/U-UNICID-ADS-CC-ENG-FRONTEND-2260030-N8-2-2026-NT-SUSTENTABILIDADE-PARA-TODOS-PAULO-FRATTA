/* =========================================================
   Sustentabilidade para Todos — JavaScript do site
   Este arquivo é carregado em todas as páginas.
   Cada parte só roda se o elemento dela existir na página
   (por isso os "if (elemento)" antes de cada bloco).
   ========================================================= */


/* ---------- 1. Menu lateral (botão ☰) ---------- */
const botaoMenu = document.getElementById("botaoMenu");
const menuLateral = document.getElementById("menuLateral");

if (botaoMenu && menuLateral) {
  botaoMenu.addEventListener("click", function () {
    menuLateral.classList.toggle("aberto");

    // avisa o leitor de tela se o menu está aberto ou fechado
    const aberto = menuLateral.classList.contains("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto);
  });

  // a tecla Esc fecha o menu
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && menuLateral.classList.contains("aberto")) {
      menuLateral.classList.remove("aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.focus();
    }
  });
}


/* ---------- 2. Alto contraste (salvo no localStorage) ---------- */
// Quando a pessoa liga o alto contraste, guardamos "sim" no navegador.
// Assim, ao abrir outra página ou recarregar, o contraste continua ligado.
const botoesContraste = document.querySelectorAll(".js-contraste");

function aplicarContraste(ligado) {
  document.body.classList.toggle("alto-contraste", ligado);
  botoesContraste.forEach(function (botao) {
    botao.setAttribute("aria-pressed", ligado);
  });
}

// ao carregar a página, lê a preferência salva
aplicarContraste(localStorage.getItem("altoContraste") === "sim");

botoesContraste.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const ligado = !document.body.classList.contains("alto-contraste");
    aplicarContraste(ligado);
    localStorage.setItem("altoContraste", ligado ? "sim" : "nao");
  });
});


/* ---------- 3. Tamanho da letra (página Acessibilidade) ---------- */
// O tamanho escolhido também fica salvo no localStorage.
let tamanhoLetra = Number(localStorage.getItem("tamanhoLetra")) || 1;
document.body.style.zoom = tamanhoLetra;

const botaoAumentar = document.getElementById("aumentarLetra");
const botaoDiminuir = document.getElementById("diminuirLetra");

function mudarLetra(valor) {
  tamanhoLetra = Math.min(1.4, Math.max(1, valor)); // fica entre 1 e 1.4
  tamanhoLetra = Math.round(tamanhoLetra * 10) / 10;
  document.body.style.zoom = tamanhoLetra;
  localStorage.setItem("tamanhoLetra", tamanhoLetra);
}

if (botaoAumentar && botaoDiminuir) {
  botaoAumentar.addEventListener("click", function () {
    mudarLetra(tamanhoLetra + 0.1);
  });
  botaoDiminuir.addEventListener("click", function () {
    mudarLetra(tamanhoLetra - 0.1);
  });
}


/* ---------- 4. Validação de formulários ---------- */
// Mostra a mensagem de erro embaixo do campo e deixa a borda vermelha.
function mostrarErro(campo, mensagem) {
  const erro = document.getElementById("erro-" + campo.id);
  campo.classList.add("campo-erro");
  campo.setAttribute("aria-invalid", "true");
  erro.textContent = mensagem;
}

// Tira o erro quando o campo está certo.
function limparErro(campo) {
  const erro = document.getElementById("erro-" + campo.id);
  campo.classList.remove("campo-erro");
  campo.removeAttribute("aria-invalid");
  erro.textContent = "";
}

// Confere se o e-mail tem o formato nome@site.com
function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ---------- 4.1 Formulário de contato / voluntariado ---------- */
const formContato = document.getElementById("formContato");

if (formContato) {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const assunto = document.getElementById("assunto");
  const mensagem = document.getElementById("mensagem");
  const mensagemSucesso = document.getElementById("mensagemSucesso");
  const avisoRascunho = document.getElementById("avisoRascunho");

  // --- Rascunho salvo no localStorage ---
  // Se a pessoa começou a escrever e recarregou a página, o texto volta.
  const rascunho = JSON.parse(localStorage.getItem("rascunhoContato"));
  if (rascunho) {
    nome.value = rascunho.nome;
    email.value = rascunho.email;
    assunto.value = rascunho.assunto;
    mensagem.value = rascunho.mensagem;
    avisoRascunho.textContent = "📝 Recuperamos o rascunho que você tinha começado.";
  }

  // a cada tecla digitada, salva o rascunho
  formContato.addEventListener("input", function () {
    const dados = {
      nome: nome.value,
      email: email.value,
      assunto: assunto.value,
      mensagem: mensagem.value
    };
    localStorage.setItem("rascunhoContato", JSON.stringify(dados));
  });

  // --- Validação ao enviar ---
  formContato.addEventListener("submit", function (evento) {
    evento.preventDefault(); // não deixa a página recarregar

    let tudoCerto = true;

    if (nome.value.trim().length < 3) {
      mostrarErro(nome, "Digite seu nome (pelo menos 3 letras).");
      tudoCerto = false;
    } else {
      limparErro(nome);
    }

    if (!emailValido(email.value.trim())) {
      mostrarErro(email, "Digite um e-mail válido, por exemplo: maria@email.com");
      tudoCerto = false;
    } else {
      limparErro(email);
    }

    if (assunto.value === "") {
      mostrarErro(assunto, "Escolha um assunto.");
      tudoCerto = false;
    } else {
      limparErro(assunto);
    }

    if (mensagem.value.trim().length < 10) {
      mostrarErro(mensagem, "Escreva uma mensagem com pelo menos 10 caracteres.");
      tudoCerto = false;
    } else {
      limparErro(mensagem);
    }

    if (tudoCerto) {
      mensagemSucesso.style.display = "block";
      formContato.reset();
      localStorage.removeItem("rascunhoContato"); // enviado: apaga o rascunho
      avisoRascunho.textContent = "";
    } else {
      mensagemSucesso.style.display = "none";
      // leva o foco para o primeiro campo com erro (ajuda quem usa teclado ou leitor de tela)
      formContato.querySelector(".campo-erro").focus();
    }
  });
}


/* ---------- 4.2 Formulário de apoio / doação (página Parceiros) ---------- */
const formDoacao = document.getElementById("formDoacao");

if (formDoacao) {
  const nomeDoador = document.getElementById("nomeDoador");
  const emailDoador = document.getElementById("emailDoador");
  const erroValor = document.getElementById("erro-valor");
  const sucessoDoacao = document.getElementById("sucessoDoacao");

  formDoacao.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let tudoCerto = true;
    const valorEscolhido = formDoacao.querySelector('input[name="valor"]:checked');

    if (nomeDoador.value.trim().length < 3) {
      mostrarErro(nomeDoador, "Digite seu nome (pelo menos 3 letras).");
      tudoCerto = false;
    } else {
      limparErro(nomeDoador);
    }

    if (!emailValido(emailDoador.value.trim())) {
      mostrarErro(emailDoador, "Digite um e-mail válido.");
      tudoCerto = false;
    } else {
      limparErro(emailDoador);
    }

    if (!valorEscolhido) {
      erroValor.textContent = "Escolha uma forma de apoio.";
      tudoCerto = false;
    } else {
      erroValor.textContent = "";
    }

    if (tudoCerto) {
      sucessoDoacao.textContent = "💚 Obrigado, " + nomeDoador.value.trim() +
        "! Recebemos seu interesse em apoiar (" + valorEscolhido.value +
        "). Vamos te mandar as instruções por e-mail.";
      sucessoDoacao.style.display = "block";
      formDoacao.reset();
    } else {
      sucessoDoacao.style.display = "none";
    }
  });
}


/* ---------- 5. Filtro de notícias ---------- */
const botoesFiltro = document.querySelectorAll(".js-filtro");

botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const categoria = botao.dataset.categoria;

    // marca só o botão clicado como selecionado
    botoesFiltro.forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
    });
    botao.setAttribute("aria-pressed", "true");

    // mostra só as notícias da categoria escolhida
    document.querySelectorAll(".noticia").forEach(function (noticia) {
      const mostrar = categoria === "todas" || noticia.dataset.categoria === categoria;
      noticia.classList.toggle("escondido", !mostrar);
    });
  });
});


/* ---------- 6. Dica do dia (página Dicas) ---------- */
const botaoDica = document.getElementById("botaoDica");

if (botaoDica) {
  const listaDicas = [
    "Leve sua garrafinha de água para onde for e diga não aos copos descartáveis.",
    "Use os dois lados da folha de papel antes de jogar fora.",
    "Junte a água da máquina de lavar para limpar o quintal ou a calçada.",
    "Abra as janelas e aproveite a luz do sol em vez de acender a lâmpada.",
    "Óleo de cozinha usado não vai na pia: guarde numa garrafa e leve a um ponto de coleta.",
    "Pilhas e baterias também não vão no lixo comum. Procure um ponto de coleta perto de você.",
    "Antes de comprar algo novo, pergunte a si mesmo: eu realmente preciso disso?",
    "Plante uma mudinha, mesmo que seja em um vaso na janela."
  ];
  const textoDica = document.getElementById("textoDica");

  botaoDica.addEventListener("click", function () {
    let novaDica = textoDica.textContent;

    // sorteia até cair numa dica diferente da que está na tela
    while (novaDica === textoDica.textContent) {
      const posicao = Math.floor(Math.random() * listaDicas.length);
      novaDica = listaDicas[posicao];
    }
    textoDica.textContent = novaDica;
  });
}


/* ---------- 7. "Onde eu jogo isso?" (página Plástico) ---------- */
const itemDescarte = document.getElementById("itemDescarte");

if (itemDescarte) {
  const respostas = {
    reciclavel: "♻️ Lixo reciclável! Dê uma enxaguada e coloque na lixeira de plástico (vermelha).",
    comum: "🗑️ Esse vai no lixo comum. Na maioria das cidades ele ainda não é reciclado.",
    especial: "⚠️ Esse precisa de descarte especial! Leve a um ponto de coleta, muitos mercados recebem."
  };
  const resultadoDescarte = document.getElementById("resultadoDescarte");

  itemDescarte.addEventListener("change", function () {
    resultadoDescarte.textContent = respostas[itemDescarte.value] || "";
  });
}


/* ---------- 8. Calculadora do banho (página Água) ---------- */
const botaoCalcular = document.getElementById("botaoCalcular");

if (botaoCalcular) {
  // Um chuveiro elétrico gasta, em média, cerca de 9 litros por minuto
  const LITROS_POR_MINUTO = 9;

  botaoCalcular.addEventListener("click", function () {
    const minutos = Number(document.getElementById("minutosBanho").value);
    const resultado = document.getElementById("resultadoBanho");

    if (!minutos || minutos <= 0) {
      resultado.textContent = "Digite um número de minutos maior que zero.";
      return;
    }

    const litros = minutos * LITROS_POR_MINUTO;
    const economia = minutos > 5 ? (minutos - 5) * LITROS_POR_MINUTO : 0;

    if (economia > 0) {
      resultado.textContent = "💧 Cerca de " + litros + " litros por banho. Se baixar para 5 minutos, você economiza uns " + economia + " litros!";
    } else {
      resultado.textContent = "💧 Cerca de " + litros + " litros por banho. Parabéns, você já toma um banho econômico!";
    }
  });
}


/* ---------- 9. Checklist de hábitos (página Energia) ---------- */
const habitos = document.querySelectorAll(".habito");
const resultadoHabitos = document.getElementById("resultadoHabitos");

if (habitos.length > 0 && resultadoHabitos) {
  habitos.forEach(function (caixa) {
    caixa.addEventListener("change", function () {
      let marcados = 0;
      habitos.forEach(function (h) {
        if (h.checked) marcados++;
      });

      let mensagemHabitos = "Bora começar? 🌱";
      if (marcados >= 2) mensagemHabitos = "Muito bem, continue assim! 👏";
      if (marcados === habitos.length) mensagemHabitos = "Você é fera na economia de energia! ⚡";

      resultadoHabitos.textContent = "Você marcou " + marcados + " de " + habitos.length + ". " + mensagemHabitos;
    });
  });
}


/* ---------- 10. EcoBot: assistente de perguntas frequentes ---------- */
// Ele aparece em todas as páginas: um botão no canto que abre uma janelinha
// com perguntas prontas. Ao clicar numa pergunta, a resposta aparece embaixo.
const perguntasEcoBot = [
  {
    pergunta: "O que posso reciclar?",
    resposta: "Plástico, papel, vidro e metal limpos. Restos de comida e papel engordurado vão no lixo comum. Veja mais na página Plástico."
  },
  {
    pergunta: "Como economizar água em casa?",
    resposta: "Banhos de até 5 minutos, torneira fechada ao escovar os dentes e vassoura no lugar da mangueira já ajudam muito. Teste a calculadora na página Água!"
  },
  {
    pergunta: "Como posso ajudar o projeto?",
    resposta: "Você pode ser voluntário pelo formulário da página Contato ou apoiar pela área de doações na página Parceiros."
  },
  {
    pergunta: "Onde descarto pilhas e óleo?",
    resposta: "Nunca no lixo comum nem na pia. Leve a um ponto de coleta: muitos mercados e farmácias recebem."
  },
  {
    pergunta: "Como deixo o site mais fácil de ler?",
    resposta: "Use o botão \"Alto contraste\" no topo da página ou vá até a página Acessibilidade para aumentar a letra."
  }
];

// cria o botão e a janela do EcoBot e coloca no fim da página
const ecoBotao = document.createElement("button");
ecoBotao.className = "ecobot-botao";
ecoBotao.type = "button";
ecoBotao.textContent = "🤖 EcoBot";
ecoBotao.setAttribute("aria-expanded", "false");
ecoBotao.setAttribute("aria-controls", "ecobotJanela");

const ecoJanela = document.createElement("div");
ecoJanela.className = "ecobot-janela";
ecoJanela.id = "ecobotJanela";
ecoJanela.hidden = true;
ecoJanela.setAttribute("role", "dialog");
ecoJanela.setAttribute("aria-label", "EcoBot, assistente de perguntas");
ecoJanela.innerHTML =
  "<h2>🤖 Oi, eu sou o EcoBot!</h2>" +
  "<p>Escolha uma pergunta:</p>" +
  '<div class="ecobot-perguntas"></div>' +
  '<p class="ecobot-resposta" aria-live="polite">As respostas aparecem aqui. 🌱</p>';

document.body.appendChild(ecoJanela);
document.body.appendChild(ecoBotao);

const areaPerguntas = ecoJanela.querySelector(".ecobot-perguntas");
const areaResposta = ecoJanela.querySelector(".ecobot-resposta");

// um botão para cada pergunta da lista
perguntasEcoBot.forEach(function (item) {
  const botaoPergunta = document.createElement("button");
  botaoPergunta.type = "button";
  botaoPergunta.textContent = item.pergunta;
  botaoPergunta.addEventListener("click", function () {
    areaResposta.textContent = item.resposta;
  });
  areaPerguntas.appendChild(botaoPergunta);
});

// abre e fecha a janela
ecoBotao.addEventListener("click", function () {
  ecoJanela.hidden = !ecoJanela.hidden;
  ecoBotao.setAttribute("aria-expanded", !ecoJanela.hidden);
  if (!ecoJanela.hidden) {
    areaPerguntas.querySelector("button").focus();
  }
});
