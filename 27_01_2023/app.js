//my first server
const http = require('http');


const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
        res.write("<html>");
        res.write("<head>");
        res.write("<title>");
        res.write("Node.js App");
        res.write("</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<form action='/message' method='post'>");
        res.write("<input type='text' name='message'/>");
        res.write("<button type=submit>");
        res.write("Submit");
        res.write("</button>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    res.write("<html><head><title>My Node.js app</title></head><body><h1>Hello from Node.js</h1></body></html>");
    return res.end();
});

server.listen(3000);