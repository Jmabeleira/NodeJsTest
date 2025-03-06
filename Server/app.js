const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if(url === "/main"){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action ="/message" method="POST"><input type="text"><button type = "submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>404 Page not found</h1></body>');
        res.write('</html>');
        return res.end();
    
});

server.listen(3000);
