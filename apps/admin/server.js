const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/api/health'){res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({status:"ok", admin:"shandy connected"}));}
  else if(req.url==='/api/admin'){res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({users:[{email:"admin@splat.app",role:"admin"}]}));}
  else {res.writeHead(404);res.end("not found");}
});
server.listen(3001,()=>console.log("shandy admin on http://localhost:3001"));
