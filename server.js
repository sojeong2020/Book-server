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
   else if(url === '/api/authors' && method === 'GET'){
    fs.readFile('data/authors.json','utf-8',(err,fileContents)=>{
      if(err) console.log(err);
      else{
        const parsedContents = JSON.parse(fileContents);
        //console.log(parsedContents);
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.write(JSON.stringify({authors: parsedContents}));
        response.end();
      }
    })
   }
   else if(url.startsWith('/api/books') && method === 'GET'){
    const bookId = Number(url.slice(11));
      
    //console.log("bookId:",bookId)

    fs.readFile('data/books.json','utf-8',(err,books)=>{
      if(err) console.log(err);
      else{
        const parsedContents = JSON.parse(books);
        //console.log("books: ", books);//JSON obj
        //console.log("parsedContents:", parsedContents)//JS obj
        const bookById = parsedContents.find((book)=> {
            return book.bookId === bookId
        });
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.write(JSON.stringify({books: bookById}));
        response.end();
      }
    })
   }
     else if (url === "/api/books" && method === "POST") {
    //fs.readFile all the data from the file and store in variable
    const booksContents = fs.readFile(
      "data/books.json",
      "utf8",
      (err, data) => {
        //look inside the array and push the inputted object onto it
        const parsedContents = JSON.parse(data);
        request.on("data", (bookToAdd) => {
          const parsedBookToAdd = JSON.parse(bookToAdd);
          const finalBookToAdd = parsedBookToAdd.book;
          parsedContents.push(finalBookToAdd);
          console.log(parsedContents);
          fs.writeFile(
            "data/books.json",
            JSON.stringify(parsedContents),
            (err) => {
              if (err) console.log(err);
            }
          );
          response.statusCode = 201;
          response.end();
        });
        //fs.writeFile the new updated array to the books.json
      }
    );
  }  
   /* else if(url === '/api/books' && method === 'POST'){
     let body = '';
      request.on('data',packet =>{
       //console.log("packet:", packet)
       body += packet.toString();

     })
     request.on('end',()=>{
     //read, modify, write(update)!

     fs.readFile('data/books.json','utf-8',(err,file)=>{
       if(err)console.log(err)
       else{
         //console.log("file:", file); JSON obj of books
         const parsedFile = JSON.parse(file);
         const newFile = JSON.parse(body)
         console.log("newFile:")
         const newFiles = [...parsedFile,newFile];
         fs.write('data/books.json', JSON.stringify(newFiles),(err)=>{
           if(err)console.log(err)
           else{
             console.log("file has written!");
             response.statusCode =201;
             response.write(JSON.stringify({file: newFiles}))
             response.end();
           }
         })

       }
     })

     })
   }  */
 
});
server.listen(5656, (err) => {
  if (err) console.log(err);
  else console.log('Server listening on port: 5656')
});