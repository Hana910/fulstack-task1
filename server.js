const http=require ('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('content-type','text/html');
    fs.readFile('./views/index.html',(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }

    })
    });
    
    res.write('<p>Welcome,Hana!<p>');
    res.write('<p>Welcome back,Hana!<p>');
    res.end();

server.listen(3000,'localhost',()=>{
    console.log('accepting requests on port 3000')
});


