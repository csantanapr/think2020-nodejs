const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const port = process.env.PORT || "3000";
const delay = 1000 * (process.env.DELAY || 0);

server.listen(port, function () {
    console.log(`Server listening on http://localhost:${port}`);
});




setTimeout(() => {
    app.get('/hello', (req, res) => res.send('Hello World Node.js Wow so fast'));
    app.get('/ready', (req, res) => res.json({ status: 'UP' }));
    app.use(express.static(path.join(__dirname, "../build")));
    console.log(`app is ready for ${process.env.NODE_ENV}`);
}, delay);

