const fs = require('fs');

function requestHandler(req, res) {
    var url = req.url;
    var method = req.method;
    if(url === "/main"){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action ="/message" method="POST"><input type="text"><button type = "submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === "/message" && method === "POST"){
        var body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            var parsedBody = Buffer.concat(body).toString();
            var message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/main');
            return res.end();
        });
       
    
    }
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>404 Page not found</h1></body>');
        res.write('</html>');
        return res.end();

};

module.exports = requestHandler; 