/* =========================================================
   Sustentabilidade para Todos — servidor do site
   Este arquivo é usado pelo Railway para colocar o site no ar.
   Ele recebe o pedido do navegador (ex.: "/contato.html"),
   procura o arquivo na pasta do projeto e devolve para quem pediu.
   ========================================================= */

// Módulos que já vêm com o Node.js (não precisa instalar nada)
const http = require("http"); // cria o servidor web
const fs = require("fs");     // lê arquivos do computador
const path = require("path"); // monta caminhos de pastas e arquivos

// Porta onde o servidor vai rodar.
// O Railway informa a porta pela variável PORT; no computador, usamos a 3000.
const port = Number(process.env.PORT) || 3000;

// Pasta raiz do site: a mesma pasta onde está este arquivo
const root = path.resolve(__dirname);

// Tabela que diz ao navegador que tipo de arquivo está chegando.
// Ex.: ".css" é estilo, ".jpg" é imagem. Sem isso, o navegador não sabe abrir o arquivo.
const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".ico": "image/x-icon"
};

// Função de apoio: envia uma resposta simples (usada para os erros 403 e 404)
function send(res, status, headers, body) {
    res.writeHead(status, headers); // código da resposta (ex.: 404) + cabeçalhos
    res.end(body);                  // texto da resposta e fim
}

// Cria o servidor. Esta função roda toda vez que alguém abre uma página do site.
// "req" é o pedido que chegou; "res" é a resposta que vamos devolver.
const server = http.createServer((req, res) => {
    // Pega o endereço pedido, sem o que vem depois do "?"
    // e trocando códigos como "%20" pelo caractere certo
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);

    // Se pediram só "/", entregamos o index.html (a página inicial).
    // Nos outros casos, tiramos a "/" do começo: "/agua.html" vira "agua.html".
    const relative = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");

    // Monta o caminho completo do arquivo dentro da pasta do site
    const filePath = path.resolve(root, relative);

    // Segurança: se o caminho tentar sair da pasta do site (ex.: "../senhas.txt"),
    // bloqueia com o erro 403 (proibido)
    if (!filePath.startsWith(root + path.sep) && filePath !== root) {
        send(res, 403, { "Content-Type": "text/plain; charset=utf-8" }, "Forbidden");
        return;
    }

    // Confere se o arquivo existe
    fs.stat(filePath, (err, stat) => {
        // Se não existe (ou é uma pasta), devolve o erro 404 (não encontrado)
        if (err || !stat.isFile()) {
            send(res, 404, { "Content-Type": "text/plain; charset=utf-8" }, "Not found");
            return;
        }

        // Descobre o tipo do arquivo pela extensão (.html, .css...) usando a tabela lá de cima
        const type = types[path.extname(filePath).toLowerCase()] || "application/octet-stream";

        // Responde com 200 (deu certo) e envia o arquivo aos pedaços (stream),
        // o que é mais leve para arquivos grandes, como as imagens
        res.writeHead(200, { "Content-Type": type });
        fs.createReadStream(filePath).pipe(res);
    });
});

// Liga o servidor. O "0.0.0.0" faz ele aceitar acessos de fora (necessário no Railway).
server.listen(port, "0.0.0.0", () => {
    console.log(`Listening on 0.0.0.0:${port}`);
});
