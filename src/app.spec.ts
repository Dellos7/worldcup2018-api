import App from './App';
import {expect} from 'chai';
import * as supertest from 'supertest'

describe('GET /', () => {

    it('should work', () => {
        return supertest(App)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then( (res) => {
                expect(res.body.message).contains('Hello');
            });
    });

});

describe('POST /', () => {

    it('should work', () => {
        return supertest(App)
            .post('/')
            .send({
                'name': 'david'
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .then( (res) => {
                expect(res.body.name).equals('david');
            });
    });

});