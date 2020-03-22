const {
  app
} = require('../src/app');
const request = require('supertest')(app)
request
    .get('/accounts')
    .expect(200)
    .end((err, res) => {
        if (err) throw err;
    })