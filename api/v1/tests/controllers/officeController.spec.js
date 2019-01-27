import { expect } from 'chai';
import request from 'supertest';
import app from '../../../../server';

describe('Test suite for offices endpoint controller', () => {
  describe('GET /offices, for all offices in the endpoint', () => {
    it('should return succcess without null', (done) => {
      request(app)
        .get('/api/v1/offices')
        .end((err, res) => {
          expect(res.status).to.not.eql(null);
          expect(res.body.id).to.not.equal(null);
          done();
        });
    });
    it('respond with object in json', (done) => {
      request(app)
        .get('/api/v1/offices')
        .set('Content-Type', 'application/json')
        .expect(200);
      done();
    });
    it('should return success for response', (done) => {
      request(app)
        .get('/api/v1/offices')
        .end((error, res) => {
          expect(res.status).to.eql(200);
          done();
        });
    });
  });
  describe('GET /offices/:id', () => {
    it('should be an object with keys and values that are not null', (done) => {
      request(app)
        .get('/api/v1/offices/1')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body.officeId).to.not.equal(null);
          expect(res.body.type).to.not.equal(null);
          expect(res.body.name).to.not.equal(null);
          expect(res.body.year).to.not.equal(null);
          expect(res.body.createdOn).to.not.equal(null);
          done();
        });
    });
    it('should be an object with keys and values', (done) => {
      request(app)
        .get('/api/v1/offices/1')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});
