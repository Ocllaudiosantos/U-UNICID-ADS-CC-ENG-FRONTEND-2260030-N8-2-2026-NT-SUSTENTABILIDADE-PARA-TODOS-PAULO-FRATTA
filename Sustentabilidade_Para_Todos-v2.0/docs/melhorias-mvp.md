# Melhorias desde o MVP (1ª entrega)

## 1. Ponto de partida

O professor não fez comentários específicos sobre o MVP. Por isso, a equipe fez uma **autoavaliação**: comparou o site da 1ª entrega com o roteiro e a rubrica da 2ª entrega e listou o que precisava melhorar.

| O que o roteiro pede | Como estava no MVP | Como resolvemos |
|---|---|---|
| 10 páginas interligadas | Várias páginas eram só um título (placeholder) | 10 páginas completas, todas no mesmo menu |
| Identidade visual única | A página inicial tinha cabeçalho diferente das outras | Um único `css/estilo.css` para todo o site |
| Validação do formulário com JS | Só o `required` do navegador | Mensagens de erro, borda vermelha e `preventDefault` |
| Dados salvos com `localStorage` | Não tinha | Rascunho do formulário, alto contraste e tamanho da letra salvos |
| Acessibilidade (WCAG) | Alto contraste só em uma página, duas fotos quebradas | Contraste AA, alto contraste em tudo, atalho "Pular para o conteúdo", fotos corrigidas |
| Doações e multimídia | Não tinha | Área "Apoie o projeto", vídeo e mapa |
| W3C sem erros | Não tinha sido validado | 0 erros e 0 avisos |

## 2. O que melhoramos (antes × depois)

| # | Antes (MVP) | Depois (versão final) |
|---|---|---|
| 1 | Várias páginas eram só um título com "Voltar para o início" (placeholder) | As 10 páginas têm conteúdo de verdade e alguma interação |
| 2 | Cada página tinha o próprio CSS dentro do HTML, repetido | Um único arquivo `css/estilo.css` para o site inteiro |
| 3 | A página inicial tinha cabeçalho e menu diferentes das outras | Todas as páginas têm o mesmo cabeçalho, menu, cores e rodapé |
| 4 | Duas fotos da página inicial não apareciam (o código pedia `.jpeg`, mas os arquivos eram `.jpg`) | Caminhos das imagens corrigidos |
| 5 | Algumas páginas não tinham como voltar ao início | Menu com "Início" em todas as páginas, e o título do site também leva ao início |
| 6 | Sem JavaScript na maioria das páginas | `js/script.js` com validação, `localStorage`, filtro, EcoBot e interações |
| 7 | O formulário só usava o `required` do navegador | Validação própria em JS: mensagem embaixo de cada campo, borda vermelha e foco no primeiro erro |
| 8 | O alto contraste existia só na página de acessibilidade | Botão de alto contraste em todas as páginas, com a preferência salva |
| 9 | Sem área de doações | Seção "Apoie o projeto" na página Parceiros |
| 10 | Sem multimídia | Vídeo (iframe do YouTube) em Notícias e mapa (iframe) em Contato |
| 11 | `lang="pt-br"` e sem atalho para quem usa teclado | `lang="pt-BR"`, link "Pular para o conteúdo", foco visível e `aria-*` |
| 12 | Algumas cores com pouco contraste | Cores conferidas pela fórmula da WCAG; textos pequenos com contraste AA (4,5:1 ou mais) |

## 3. Prints de antes e depois

| Antes (versão 0.2) | Depois (versão final) | O que mostra |
|---|---|---|
| `prints/antes-home.png` | `prints/depois-home.png` | Duas fotos quebradas na página inicial → fotos corrigidas, botão de alto contraste e EcoBot |
| `prints/antes-pagina-vazia.png` | `prints/depois-sobre.png` | Página "Sobre" só com o título → página completa com o mesmo visual do site |
