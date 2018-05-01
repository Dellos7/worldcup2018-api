import DataService from './main';
import {expect, assert} from 'chai';
import HttpAxiosServiceMock from './mocks/http-axios-service-mock';

describe('Main', () => {

    let dataService: DataService;

    beforeEach( () => {
        dataService = new DataService( new HttpAxiosServiceMock(), '' );
    });

    describe('parseTeams', () => {
        it('should correctly parse teams', (done) => {
            dataService.parseTeams(null).then(
                (promRes) => {
                    let teams = dataService.teams;
                    expect(teams.length).equals(2);
                    let team1 = teams[0];
                    expect(team1.getId()).equals(1);
                    expect(team1.getName()).equals('Russia');
                    expect(team1.getIso2()).equals('ru');
                    let team2 = teams[1];
                    expect(team2.getId()).equals(2);
                    expect(team2.getName()).equals('Spain');
                    expect(team2.getIso2()).equals('es');
                    done();
                }
            );
        });
    });

});