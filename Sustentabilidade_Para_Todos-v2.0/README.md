# 🌱 Sustentabilidade para Todos

Site do projeto **Sustentabilidade para Todos**, feito para a disciplina **Desenvolvimento Front-End (UNICID)**, AV A1 (2ª entrega).

O site mostra como pequenas atitudes do dia a dia (economizar água e energia, usar menos plástico, separar o lixo) ajudam o planeta. Ele também foi pensado para ser **acessível para todas as pessoas, incluindo pessoas com deficiência**.

## 🔗 Links

| O quê | Link |
|---|---|
| Site publicado (HTTPS) | https://sustentabilidadeparatodos.up.railway.app/ |
| Repositório no GitHub | https://github.com/Ocllaudiosantos/U-UNICID-ADS-CC-ENG-FRONTEND-2260030-N8-2-2026-NT-SUSTENTABILIDADE-PARA-TODOS-PAULO-FRATTA |

## 👥 Equipe

| Nome completo | RGM | O que fez |
|---|---|---|
| Claudio Santos Costa | 47708077 | Planejamento e deploy |
| Lucas Lopes da Silva | 47672960 | Programação do site |
| Kevin Miney Tan Broetto | 47746882 | Estrutura |
| Otávio Oliveira Marselhas | 47681859 | Documentação |

## 🧭 Plano de contexto (escopo original da equipe)

- **Problema que resolve:** descarte inadequado de resíduos, poluição ambiental e desperdício de água e energia.
- **Público-alvo:** todas as pessoas, com foco nas que vivem em situação precária e nas pessoas com deficiência.
- **Objetivo:** promover a preservação do meio ambiente pelo uso consciente dos recursos naturais, pela redução de resíduos e pela conscientização da sociedade.
- **Requisitos não funcionais:** WCAG AA, mobile-first, imagens leves, LGPD.
- **Critérios de sucesso:** 0 erros no W3C e nota de acessibilidade no Lighthouse de 90 ou mais.

O escopo completo, com objetivos e critérios de aceitação, está em [`docs/escopo.md`](docs/escopo.md).

## 🧰 Tecnologias

- **HTML5** semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3**: um único arquivo (`css/estilo.css`), com Flexbox, variáveis de cor, transições e layout responsivo
- **JavaScript** puro (`js/script.js`): validação de formulários, `localStorage`, filtro de notícias, alto contraste, EcoBot e outras interações
- **Git e GitHub** para versionamento, **Railway** para publicação (com HTTPS)

## 🗺️ Mapa do site (10 páginas)

```
index.html            Início
├── noticias.html     Notícias (com filtro por tema e vídeo)
├── contato.html      Contato e voluntariado (formulário validado + mapa)
├── acessibilidade.html  Recursos de acessibilidade (letra e contraste)
├── sobre.html        Quem somos, missão, visão, valores e ODS
├── dicas.html        Dicas do dia a dia (dica do dia sorteada)
├── parceiros.html    Parceiros e área de doações/apoio
├── plastico.html     Plástico ("Onde eu jogo isso?")
├── agua.html         Água (calculadora do banho)
└── energia.html      Energia (checklist de hábitos)
```

## 📁 Estrutura de pastas

```
/
├── index.html e as outras 9 páginas
├── css/estilo.css        estilo único de todo o site
├── js/script.js          JavaScript de todo o site
├── imagem/               fotos usadas no site
├── docs/                 documentação do projeto
│   ├── README.md
│   ├── diario-de-bordo.md
│   ├── escopo.md
│   ├── orcamento_hospedagem.html
│   ├── testes.md
│   ├── melhorias-mvp.md
│   ├── uso-de-ia.md
│   └── prints/           prints da interface e dos testes
├── server.js, package.json, Dockerfile, railway.toml   (publicação no Railway)
└── .nojekyll             usado só se publicar no GitHub Pages
```

## ▶️ Como rodar

**Jeito mais simples:** abra o arquivo `index.html` no navegador (dois cliques).

**Com servidor local (igual ao site publicado):**

```bash
node server.js
```

Depois abra `http://localhost:3000` no navegador.

## ✅ Funcionalidades em JavaScript

| Funcionalidade | Onde |
|---|---|
| Validação do formulário com `preventDefault`, mensagens de erro e borda vermelha | Contato e Parceiros |
| Rascunho do formulário salvo no `localStorage` (volta ao recarregar) | Contato |
| Preferência de alto contraste e tamanho da letra salvas no `localStorage` | Todas as páginas |
| Menu ☰ que abre e fecha (fecha com Esc) | Todas as páginas |
| Filtro de notícias por tema | Notícias |
| EcoBot: assistente de perguntas frequentes | Todas as páginas |
| Dica do dia, calculadora do banho, "Onde eu jogo isso?", checklist | Dicas, Água, Plástico, Energia |

## 📚 Documentação

Todos os documentos estão na pasta [`docs/`](docs/).

## 🚀 Como publicar (Railway)

O site está publicado no **Railway**, que usa o `Dockerfile` e o `server.js` deste projeto.

1. Envie as alterações para a branch `main` do GitHub (`git add .`, `git commit -m "mensagem"`, `git push`).
2. Com o Railway ligado ao repositório, ele publica a nova versão sozinho em alguns minutos.
3. Se não estiver ligado, abra o projeto no Railway e clique em **Deploy** (ou rode `railway up` na pasta do projeto).

**Alternativa grátis:** GitHub Pages (Settings → Pages → branch `main`, pasta `/ (root)`).
