//import to librery file from server
const http = require("http");

//creating request
http.createServer((req, res)=>{     
    res.end("welcome to the node js server");
}).listen(3900);
