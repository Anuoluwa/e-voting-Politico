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
});
