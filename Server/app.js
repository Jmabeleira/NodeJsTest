const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    const method = req.method;
    if(url === "/main"){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action ="/message" method="POST"><input type="text"><button type = "submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === "/message" && method === "POST"){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/main');
        return res.end();

    }
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>404 Page not found</h1></body>');
        res.write('</html>');
        return res.end();
    
});

server.listen(3000);
