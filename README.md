# Book Server

Today we will be building our very first http server!

_Remember to use 'fs' to read the data files!_

## Challenges

1. Using Node's `https` module create a web server that responds with a status 200 and a greeting when it receives a GET request on the path `/api` (e.g. `{ message: "Hello! }`)

2. Add a GET `/api/books` endpoint that responds with a status 200 and a JSON object, that has a key of `books` with a value of the array of books from the `./data/books.json` file.

3. Add a GET `/api/authors` endpoint that responds with a status 200 and a JSON object, that has a key of `authors` with a value of the array of books from the `./data/authors.json` file.

## More Challenges

4. Add a GET `/api/books/:bookId` (e.g. `/api/books/1`) parametric endpoint that responds with a status 200 and a JSON object, that has a key of `book` with a value of the relevant book object from the `./data/books.json` file.

5. Add a GET `/api/books/:bookId/author` (e.g. `/api/books/1/author`) parametric endpoint that responds with a status 200 and a JSON author object for the specified book. The JSON object should have a key of `author` with a value of a single author object from the `./data/authors.json` file.

6. Add some error handling to your server. What should it respond with if you receive a request for a bookId that doesn't exist? What status code should you respond with?

### Even More Challenges

1. Add a `fiction` query parameter to your GET `/api/books` endpoint (e.g.) `/api/books?fiction=true` or `/api/books?fiction=false`) that searches for books that are either fiction, or non-fiction.

2. Add a POST `/api/books` endpoint that accepts a book object on the body of the request and adds the book to the `./data/books.json` file. The endpoint should respond with the newly created book object. Additional considerations:

   - How could you ensure that the `bookId` that is created is unique?
   - What status code should the server respond with?
