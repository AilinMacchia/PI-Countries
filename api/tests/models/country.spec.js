const { Countries, conn } = require('../../src/db.js');


describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Countries.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Countries.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Countries.create({ name: 'Argentina' });
      });
    });
    describe('id', () => {
      it('should throw an error if id is null', (done) => {
        Countries.create({})
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });
      it('should work when its a valid id', () => {
        Countries.create({ id: 'ARG' });
      });
    });
    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Countries.create({})
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });
      it('should work when its a valid image', () => {
        Countries.create({ image: "https://flagcdn.com/w320/ar.png" });
      });
    });
    describe('continent', () => {
      it('should throw an error if continent is null', (done) => {
        Countries.create({})
          .then(() => done(new Error('It requires a valid continent')))
          .catch(() => done());
      });
      it('should work when its a valid continent', () => {
        Countries.create({ continent: 'South America' });
      });
    });
    describe('capital', () => {
      it('should throw an error if capital is null', (done) => {
        Countries.create({})
          .then(() => done(new Error('It requires a valid capital')))
          .catch(() => done());
      });
      it('should work when its a valid capital', () => {
        Countries.create({ capital: 'Buenos Aires' });
      });
    });
    it('should work when all fields are complete', () => {
      Countries.create({ name: 'Argentina',id: 'ARG', image: "https://flagcdn.com/w320/ar.png",continent: 'South America',capital: 'Buenos Aires'})

      .then(() => done())
      .catch(() => done(new Error('should work when all fields are complete')));
    });
  });
});
