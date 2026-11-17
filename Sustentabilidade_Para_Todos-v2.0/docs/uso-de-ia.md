# Uso de Inteligência Artificial no projeto

## Ferramenta usada

- **Gemini (Google)**: testado, mas o resultado foi recusado (ver "O que recusamos")
- **Claude (Anthropic)**, usado como assistente para escrever e revisar o código HTML, CSS e JavaScript e para montar esta documentação.

## Regras e contexto que passamos para a IA

- Seguir **o mesmo modelo das páginas que já estavam prontas** (cores, cabeçalho, cards e rodapé)
- Textos **humanizados e simples**, sem palavras difíceis
- Todas as páginas **linkadas como um site só**
- Mandar o código de cada página **em arquivos separados**
- Cumprir os requisitos do roteiro da AV A1 (validação em JS, `localStorage`, acessibilidade, W3C)

## Prompts usados (do jeito que foram escritos)

| Data | Prompt | Resultado |
|---|---|---|
| 06/11/2026 | "preciso de fazer a acessibilidade, dicas e sobre seguindo o mesmo modelo dos que ja estão feitos, faça de forma humanizada e simples, quero que me mande o código delas separadamente." | Páginas Acessibilidade, Dicas e Sobre |
| 06/11/2026 | "agora eu preciso linkar esses no index para que ele possa ser uma página so de um site." | Menu do index ligado às páginas novas |
| 06/11/2026 | "eu preciso montar um site que contenha 10 páginas funcionais [...] consegue criar o resto que precisa seguindo aquele mesmo modelo da outra vez, com tudo linkado seguindo como um site só." | Páginas Parceiros, Plástico, Água e Energia |
| 06/11/2026 | "quando eu aperto em inicio ele nao encontra nada arrume isso" | Diagnóstico: o `index.html` e a pasta `imagem` não estavam na mesma pasta das outras páginas |
| 11/11/2026 | "preciso fazer isso também, o que eu preciso fazer para completar" (com o PDF do roteiro) | Lista do que faltava para a 2ª entrega |
| 11/11/2026 | "consegue fazer isso para mim?" | Versão final: CSS e JS únicos, validação, `localStorage`, doações, multimídia, EcoBot, testes e documentação |

## O que aceitamos

- Estrutura das páginas, textos e cards
- O arquivo único `css/estilo.css` e o `js/script.js` comentado
- Validação do formulário, rascunho no `localStorage` e alto contraste salvo
- Testes automatizados (ver `testes.md`)

## O que foi corrigido ou revisado

| O que aconteceu | Como foi resolvido |
|---|---|
| A primeira versão das páginas novas usava nomes com "2" (`sobre2.html`), e o menu ainda apontava para as páginas vazias | Pedimos tudo linkado, os nomes foram unificados e as páginas vazias foram apagadas |
| Testando no computador, o botão "Início" não abria | Descobrimos que os arquivos tinham sido baixados para pastas diferentes. Passamos a usar o projeto inteiro em `.zip` |
| As fotos da página inicial não apareciam | A IA encontrou a extensão errada (`.jpeg` × `.jpg`) e corrigiu |
| No teste, a borda vermelha de erro não aparecia nos campos de nome e e-mail | A regra do CSS estava sendo sobrescrita por outra mais específica. Foi corrigida e testada de novo |
| Algumas cores (texto da faixa verde e mensagem de erro) não tinham contraste AA | As cores foram ajustadas e conferidas com a fórmula da WCAG |

## O que recusamos

| Ferramenta | O que aconteceu | Por que recusamos |
|---|---|---|
| Gemini (Google) | Testamos o Gemini para gerar partes do site | O resultado não agradou a equipe, então não usamos o que ele gerou e seguimos com o Claude |

## Como garantimos que entendemos o código

- O `js/script.js` é dividido em partes numeradas, cada uma com comentários explicando o que faz
- Cada integrante deve saber explicar, linha a linha, pelo menos a parte que vai apresentar (validação, `localStorage`, menu ou EcoBot)
