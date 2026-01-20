# Build a Basic Express NodeJS Server

This project is built with express-generator.
## To Run

To run this on your machine, clone this repo and then navigate to the "/node-project-express-v4" directory inside it (it is nested inside the parent project "Intermediate-dev-1-class"). In terminal, do the basic install (`npm i`). Then, `npm start` will spin up the server, and the site should be viewable in the browser at `localhost:8000`.

If you would like to run the tests, in terminal enter `test/routes.test.js`. Results are then viewable in the terminal window.

## Project Requirements
1. Installs: 
```shell
npx express-generator
npm i
```
note: `express-generator` has not caught up with Express v5, but I suspect the assignment particulars has not either, as Express has changed some of its route handling

2. Implement root route that sends "Hello World".
3. Create Route: an `/about` route that sends "About page".

note: import and use express.Router route names in app.js and use file names in `/routes` folder to complete the assignment

4. Create Route: a conditional rendering in new route `/foo` that sends either "sometimes this" or "and sometimes that". DO NOT add `next()` as this creates a non-breaking error.
5. Create Route: use reg ex (Express v4, this changes in v5) and send simple text response
6. Create Route: dynamic user route that sends personalized message using the route parameter
7. Create Route: handle a query string route and log the query to the console.
8. Error handling: for 404 error, be sure that exact plaintext "404 - Not Found" is painted to the browser
9. Add "server started successfully" message