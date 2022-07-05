/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Countries, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',id: 'ARG', image: "https://flagcdn.com/w320/ar.png",continent: 'South America',capital: 'Buenos Aires'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Countries.sync({ force: true })
    .then(() => Countries.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe('GET /countries/:id', () => {
    it('should get 200', () =>
      agent.get('/countries/ARG').expect(200)
    );
  })
  describe('GET /countries?name=argentina', () => {
    it('should get 200', () =>
      agent.get('/countries?name=argentina').expect(200)
    );
  })
});
