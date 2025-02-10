const http=require('http');
const PORT=2500;
const server =http.createServer((req,res)=>{
    res.write("Hello, Welcome node isrequested")
    res.end("Requested has been ended")
})
server.listen(PORT,()=>{
    console.log("server is is running on : ",PORT)
})