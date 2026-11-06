const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT) || 3000;
const root = path.resolve(__dirname);

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

function send(res, status, headers, body) {
    res.writeHead(status, headers);
    res.end(body);
}

const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const relative = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
    const filePath = path.resolve(root, relative);

    if (!filePath.startsWith(root + path.sep) && filePath !== root) {
        send(res, 403, { "Content-Type": "text/plain; charset=utf-8" }, "Forbidden");
        return;
    }

    fs.stat(filePath, (err, stat) => {
        if (err || !stat.isFile()) {
            send(res, 404, { "Content-Type": "text/plain; charset=utf-8" }, "Not found");
            return;
        }

        const type = types[path.extname(filePath).toLowerCase()] || "application/octet-stream";
        res.writeHead(200, { "Content-Type": type });
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(port, "0.0.0.0", () => {
    console.log(`Listening on 0.0.0.0:${port}`);
});
