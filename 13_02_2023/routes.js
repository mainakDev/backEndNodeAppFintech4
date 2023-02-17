const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write("<html><head><title>Node.js App</title></head><body><form action='/message' method='post'><input type='text' name='message'/><button type=submit>Submit</button></form></body></html>");
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        //when we are receiving the data
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        //when we have received all the data
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    res.write("<html><head><title>My Node.js app</title></head><body><h1>Hello from Node.js</h1></body></html>");
    return res.end();
};

module.exports = requestHandler;