const http = require("http");
const fs = require('fs');

const server = http.createServer((request, response) => {
  const{method, url} =request;
  if(url === '/api' && method === 'GET'){
  response.setHeader("Content-Type", "application/json");
  response.statusCode = 418;
  response.statusCode = 200;
  response.write(JSON.stringify({ msg: "Hello Mr.Get Request" }));
  response.end();
  }
  else if (url === '/api/books' && method === 'GET'){
    const booksContents = fs.readFile('data/books.json','utf8'(err,contents)=>{


    booksContents.then((contents)=>{
      const parsedContents= JSON.parse(contents);
      console.log(parsedContents);
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 200;
      response.write(JSON.parse(contents));
      response.end();

    })

  })

});
server.listen(5656, (err) => {
  if (err) console.log(err);