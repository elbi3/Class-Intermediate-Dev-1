const request = require('supertest');
const app = require('../app');


(async () => {
    await request(app).get('/').expect(200);
    //sends "Hello World" text
    await request(app).get('/about').expect(200); 
    //sends "About page" text
    await request(app).get('/foo').expect(200); //still need to test conditional text
    //sends one of two messages randomly
    await request(app).get('/user').expect(200); //should pass, as there is a default for no param
    //sends "Hello user random guest!"
    await request(app).get('/user/name').expect(200); //dynamic route
    //sends "Hello username!"
    await request(app).get('/user/felicia').expect(200); //dynamic route
    //sends "Hello userfelicia!"
    await request(app).get('/users').expect(404);
    //sends "404 - Not Found" text (per assignment)
    await request(app).get('/regular/guy').expect(200);//route using regex /guy/
    await request(app).get('/regular/spyguy').expect(200);
    await request(app).get('/question/ask?q=me').expect(200);
    //and prints "me" in the browser
  console.log('✔ All route tests passed');
})();
