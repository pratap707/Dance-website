
const { Http2ServerRequest } = require('http2');
const filecontent =fs.readFileSync('p2.html')

const server = Http. createServer((req,res)=>{
    res.writehead(200,{'content-type':'text/html'})
    res.end(filecontent)
})

Server.listen(80, '127.0.0.1',()=>{
    console.log("listening on port 80")
})