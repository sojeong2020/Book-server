const http = require("http");
const fs = require('fs');

const server = http.createServer((request, response) => {
  const{method, url} =request;
  if(url === '/api' && method === 'GET'){
  response.setHeader("Content-Type", "application/json");
  response.statusCode = 200;
  response.write(JSON.stringify({ msg: "Hello Mr.Get Request" }));
  response.end();
  }
   else if(url === '/api/books' && method === 'GET'){
    fs.readFile('data/books.json','utf-8',(err,fileContents)=>{
      if(err) console.log(err);
      else{
        const parsedContents = JSON.parse(fileContents);
        console.log(parsedContents);
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.write(JSON.stringify({books: parsedContents}));
        response.end();
      }
    })
   }

});
server.listen(5656, (err) => {
  if (err) console.log(err);
  else console.log('Server listening on port: 5656')
});