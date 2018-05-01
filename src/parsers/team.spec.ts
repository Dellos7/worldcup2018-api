import Team from 'models/team';
import {expect, assert} from 'chai';
import TeamParser from './team';

describe('TeamParser', () => {

    let jsonData: any;

    beforeEach(() => {
        jsonData = {
            teams: [
                {
                    "id": 1,
                    "name": "Russia",
                    "iso2": "ru"
                  },
                  {
                    "id": 2,
                    "name": "Saudi Arabia",
                    "iso2": "sa"
                  },
                  {
                    "id": 3,
                    "name": "Egypt",
                    "iso2": "eg"
                  },
                  {
                    "id": 4,
                    "name": "Uruguay",
                    "iso2": "uy"
                  },
                  {
                    "id": 5,
                    "name": "Portugal",
                    "iso2": "pt"
                  }
            ]
        };
    });

    describe('parseTeams', () => {
        it('should correctly parse teams ', () => {
            let teams: Team[] = TeamParser.parseTeams( jsonData );
            expect(teams.length).equals(5);
            let team1: Team = teams[0];
            expect(team1.getId()).equals(1);
            expect(team1.getName()).equals('Russia');
            expect(team1.getIso2()).equals('ru');
            let team2: Team = teams[1];
            expect(team2.getId()).equals(2);
            expect(team2.getName()).equals('Saudi Arabia');
            expect(team2.getIso2()).equals('sa');
        });

    });

});