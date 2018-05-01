import DataService from './main';
import AppWrapper from './app';
import {expect} from 'chai';
import * as supertest from 'supertest';
import HttpAxiosServiceMock from './mocks/http-axios-service-mock';

describe('App', () => {

    describe('GET /', () => {

        it('should work', () => {
            return supertest(AppWrapper.app)
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
            return supertest(AppWrapper.app)
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
    
    describe('GET /teams', () => {

        beforeEach( () => {
            AppWrapper.dataService = new DataService( new HttpAxiosServiceMock(), null );
        });
    
        it('should work', () => {
            return supertest(AppWrapper.app)
                .get('/teams')
                .expect('Content-Type', /json/)
                .expect(200)
                .then( (res) => {
                    expect(res.body.length).equals(2);
                });
        });
    
    });

});