import { expect } from 'chai';
import request from 'supertest';
import app from '../../../../server';

describe('Test suite for Server ', () => {
  it("should return 'welcome to Politico API v1!'", () => {
    request(app)
      .get('/api/v1/')
      .expect(200, 'Successful!, Welcome to Politico API v1!')
      .expect('Content-Type', 'application/json');
  });

  it('should return "Entry point not found"', () => {
    request(app)
      .get('/api/v1/3')
      .expect(404, '{"message":"Entry point not Found"}')
      .expect('Content-Type', 'text/html');
  });
  it('should return "Welcome to the client side"', () => {
    request(app)
      .get('/')
      .expect(200, '{"message":"Welcome to Politico API"}')
      .expect('Content-Type', 'application/json');
  });
});
describe('Test suite for parties endpoint controller', () => {
  describe('GET /parties, for all parties in the endpoint', () => {
    it('should return succcess without null', (done) => {
      request(app)
        .get('/api/v1/parties')
        .end((err, res) => {
          expect(res.status).to.not.eql(null);
          expect(res.body.id).to.not.equal(null);
          done();
        });
    });
    it('respond with object in json', (done) => {
      request(app)
        .get('/api/v1/parties')
        .set('Content-Type', 'application/json')
        .expect(200);
      done();
    });
    it('should return success for response', (done) => {
      request(app)
        .get('/api/v1/parties')
        .end((error, res) => {
          expect(res.status).to.eql(200);
          done();
        });
    });
  });
});
describe('GET /parties/:id', () => {
  it('should be an object with keys and values that are not null', (done) => {
    request(app)
      .get('/api/v1/parties/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.body.partyId).to.not.equal(null);
        expect(res.body.name).to.not.equal(null);
        expect(res.body.hqAddress).to.not.equal(null);
        expect(res.body.logoUrl).to.not.equal(null);
        expect(res.body.createdOn).to.not.equal(null);
        done();
      });
  });
  it('should be an object with keys and values', (done) => {
    request(app)
      .get('/api/v1/parties/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done();
      });
  });
});
