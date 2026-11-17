# Evidências de testes

Testes feitos em 11/11/2026, com o site rodando pelo `server.js` (do mesmo jeito que fica publicado).

## 1. Validação W3C

Todas as 10 páginas e o `css/estilo.css` foram validados com o **Nu Html Checker**, o mesmo validador usado pelo site [validator.w3.org](https://validator.w3.org).

| Arquivo | Erros | Avisos |
|---|---|---|
| 10 páginas HTML | 0 | 0 |
| `css/estilo.css` | 0 | 0 |
| `docs/orcamento_hospedagem.html` | 0 | 0 |

> **Para a apresentação:** depois do deploy, abram o validator.w3.org, colem a URL de cada página e tirem um print do resultado "No errors".

## 2. Contraste das cores (WCAG AA)

Calculado pela fórmula de contraste da WCAG 2. O mínimo é **4,5:1** para texto normal e **3:1** para texto grande (24 px, ou 18,66 px em negrito).

| Onde | Cores (texto / fundo) | Contraste | Resultado |
|---|---|---|---|
| Texto dos cards | #f1e8e4 / #755a4f | 5,22:1 | ✅ AA |
| Etiquetas e datas | #c8e6c4 / #755a4f | 4,67:1 | ✅ AA |
| Botões | #ffffff / #056b07 | 6,75:1 | ✅ AA |
| Mensagens de erro | #ffe0db / #755a4f | 5,08:1 | ✅ AA |
| Títulos das seções (grande) | #a8d5a2 / #634a40 | 4,92:1 | ✅ AA |
| Texto da faixa verde (grande) | #3a0505 / #08900a | 4,16:1 | ✅ AA |
| Título da faixa (grande) | #3fa9f5 / #634a40 | 3,18:1 | ✅ AA (texto grande) |
| Menu | #222222 / #ffffff | 15,91:1 | ✅ AAA |
| Modo alto contraste | #ffff00 / #000000 | 19,56:1 | ✅ AAA |

## 3. Testes automatizados no navegador (42 de 42 passaram)

Feitos com o Google Chrome em modo automático: o teste clica, digita e confere o resultado, como uma pessoa faria.

| # | Teste | Resultado |
|---|---|---|
| 1 | Página index.html abre (HTTP 200) | ✅ Passou |
| 2 | Página noticias.html abre (HTTP 200) | ✅ Passou |
| 3 | Página contato.html abre (HTTP 200) | ✅ Passou |
| 4 | Página acessibilidade.html abre (HTTP 200) | ✅ Passou |
| 5 | Página sobre.html abre (HTTP 200) | ✅ Passou |
| 6 | Página dicas.html abre (HTTP 200) | ✅ Passou |
| 7 | Página parceiros.html abre (HTTP 200) | ✅ Passou |
| 8 | Página plastico.html abre (HTTP 200) | ✅ Passou |
| 9 | Página agua.html abre (HTTP 200) | ✅ Passou |
| 10 | Página energia.html abre (HTTP 200) | ✅ Passou |
| 11 | Nenhum erro de JavaScript no console | ✅ Passou |
| 12 | Menu abre ao clicar no ☰ (aria-expanded=true) | ✅ Passou |
| 13 | Tecla Esc fecha o menu | ✅ Passou |
| 14 | Envio vazio mostra erros e borda nos 4 campos (nome, email, assunto, mensagem) | ✅ Passou |
| 15 | Mensagem de erro aparece embaixo do campo ("Digite seu nome (pelo menos 3 letras).") | ✅ Passou |
| 16 | Foco vai para o primeiro campo com erro | ✅ Passou |
| 17 | Rascunho volta depois de recarregar (localStorage) | ✅ Passou |
| 18 | E-mail inválido é recusado | ✅ Passou |
| 19 | Envio correto mostra mensagem de sucesso | ✅ Passou |
| 20 | Rascunho é apagado depois do envio | ✅ Passou |
| 21 | Alto contraste continua ligado em outra página (localStorage) | ✅ Passou |
| 22 | Tamanho da letra fica salvo após recarregar (zoom=1.1) | ✅ Passou |
| 23 | Filtro 'Água' mostra só notícias de água (1 visível(is)) | ✅ Passou |
| 24 | Doação sem escolher opção mostra erro | ✅ Passou |
| 25 | Doação correta mostra agradecimento | ✅ Passou |
| 26 | 'Onde eu jogo isso?' responde | ✅ Passou |
| 27 | Calculadora do banho: 15 min = 135 litros | ✅ Passou |
| 28 | Checklist conta 5 de 5 | ✅ Passou |
| 29 | Dica do dia troca a dica | ✅ Passou |
| 30 | EcoBot abre e responde | ✅ Passou |
| 31 | Primeiro Tab foca 'Pular para o conteúdo' | ✅ Passou |
| 32 | Enter no atalho leva ao conteúdo | ✅ Passou |
| 33 | Sem rolagem lateral no celular: index.html | ✅ Passou |
| 34 | Sem rolagem lateral no celular: noticias.html | ✅ Passou |
| 35 | Sem rolagem lateral no celular: contato.html | ✅ Passou |
| 36 | Sem rolagem lateral no celular: acessibilidade.html | ✅ Passou |
| 37 | Sem rolagem lateral no celular: sobre.html | ✅ Passou |
| 38 | Sem rolagem lateral no celular: dicas.html | ✅ Passou |
| 39 | Sem rolagem lateral no celular: parceiros.html | ✅ Passou |
| 40 | Sem rolagem lateral no celular: plastico.html | ✅ Passou |
| 41 | Sem rolagem lateral no celular: agua.html | ✅ Passou |
| 42 | Sem rolagem lateral no celular: energia.html | ✅ Passou |

## 4. Testes manuais para fazer depois do deploy

| Teste | Como fazer | Resultado |
|---|---|---|
| Site abre com HTTPS | Abrir a URL publicada e ver o cadeado no navegador | PREENCHER |
| Links funcionando online | Clicar em todos os itens do menu no site publicado | PREENCHER |
| Lighthouse | No Chrome: F12 → Lighthouse → Analisar (Acessibilidade) | PREENCHER (nota) |
| Leitor de tela | Ligar o Narrador do Windows (Ctrl + Win + Enter) e preencher o formulário | PREENCHER |

## 5. Prints

| Print | Arquivo |
|---|---|
| Página inicial no computador | `prints/home-desktop.png` |
| Página inicial no celular | `prints/home-celular.png` |
| Formulário mostrando os erros | `prints/teste-formulario-erro.png` |
| Alto contraste ligado | `prints/alto-contraste.png` |
| EcoBot aberto | `prints/ecobot.png` |
| Notícias, Contato e Parceiros | `prints/noticias-desktop.png`, `prints/contato-desktop.png`, `prints/parceiros-desktop.png` |
