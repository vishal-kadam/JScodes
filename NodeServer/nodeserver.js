var http = require('http');
var fs = require('fs');

let folderName = 'D:/SourceCode/express-example/Store/';
let url = 'www.google.com';

let options={

    host : url,
    port : 80,
    path : '',
    method : 'GET'
};

http.createServer(function(request,response){    

    let fileName = folderName + String(encodeURIComponent(url));    
    if(fs.existsSync(fileName)) {

        response.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile(fileName,function(err,data){

            response.write(data);
            response.end();
        });
    }
    else{

        let req = http.request(options,function(res) {

            res.setEncoding('UTF-8');
            let completeText = '';
            res.on('data',function(chunk) {
                completeText+=chunk;
            });

            res.on('end',function() {

                fs.writeFile(fileName,completeText,function(err){

                    console.log(err);

                    response.writeHead(200,{'Content-Type':'text/html'});
                    fs.readFile(fileName,function(err,data){

                    response.write(data);
                    response.end();
                     });            
                });
            });

        });       
        req.end();
    }

}).listen(5000);
