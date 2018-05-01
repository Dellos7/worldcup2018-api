import {expect, assert} from 'chai';
import Standing from './standing';
import Team from './team';
import Group from './group';
import Match from './match';
import MatchType from './match-type';

describe('Standing', () => {

    let team: Team;
    let group: Group;
    let standing: Standing;

    beforeEach(() => {
        team = new Team( 1, 'Spain', 'es' );
        standing = new Standing( team );
    });

    describe('getGoalsDifference', () => {
        it('should correctly get goals difference, possitive difference ', () => {
            standing.setGoalsFor(10);
            standing.setGoalsAgainst(5);
            let goalsDifference = standing.getGoalsDifference();
            expect(goalsDifference).equals(5);
        });
    
        it('should correctly get goals difference, negative difference ', () => {
            standing.setGoalsFor(5);
            standing.setGoalsAgainst(10);
            let goalsDifference = standing.getGoalsDifference();
            expect(goalsDifference).equals(-5);
        });
    
        it('should correctly get goals difference, no difference ', () => {
            standing.setGoalsFor(10);
            standing.setGoalsAgainst(10);
            let goalsDifference = standing.getGoalsDifference();
            expect(goalsDifference).equals(0);
        });
    });

    describe('getPoints', () => {
        it('should correctly get points, no matches', () => {
            let points = standing.getPoints();
            expect(points).equals(0);
        });

        it('should correctly get points, 1 win', () => {
            standing.addPlayed();
            standing.addWin();
            let points = standing.getPoints();
            expect(points).equals(3);
        });

        it('should correctly get points, 2 wins', () => {
            standing.addPlayed();
            standing.addWin();
            standing.addPlayed();
            standing.addWin();
            let points = standing.getPoints();
            expect(points).equals(6);
        });

        it('should correctly get points, 2 wins, 1 lost', () => {
            standing.addPlayed();
            standing.addWin();
            standing.addPlayed();
            standing.addWin();
            standing.addPlayed();
            standing.addLost();
            let points = standing.getPoints();
            expect(points).equals(6);
        });

        it('should correctly get points, 2 wins, 1 lost, 1 draw', () => {
            standing.addPlayed();
            standing.addWin();
            standing.addPlayed();
            standing.addWin();
            standing.addPlayed();
            standing.addLost();
            standing.addPlayed();
            standing.addDraw();
            let points = standing.getPoints();
            expect(points).equals(7);
        });
    });

    describe('addGoalsFor', () => {
        it('should correctly add goals for, 0 goals for', () => {
            standing.addGoalsFor(0);
            let goalsFor = standing.getGoalsFor();
            expect(goalsFor).equals(0);
        });

        it('should correctly add goals for, 3 goals for', () => {
            standing.addGoalsFor(3);
            let goalsFor = standing.getGoalsFor();
            expect(goalsFor).equals(3);
        });

        it('should correctly add goals for, 5 goals for and 3 goals for', () => {
            standing.addGoalsFor(5);
            let goalsFor = standing.getGoalsFor();
            expect(goalsFor).equals(5);

            standing.addGoalsFor(3);
            goalsFor = standing.getGoalsFor();
            expect(goalsFor).equals(8);
        });
    });

    describe('addGoalsAgainst', () => {
        it('should correctly add goals against, 0 goals against', () => {
            standing.addGoalsAgainst(0);
            let goalsAgainst = standing.getGoalsAgainst();
            expect(goalsAgainst).equals(0);
        });

        it('should correctly add goals against, 3 goals against', () => {
            standing.addGoalsAgainst(3);
            let goalsAgainst = standing.getGoalsAgainst();
            expect(goalsAgainst).equals(3);
        });

        it('should correctly add goals for, 5 goals against and 3 goals against', () => {
            standing.addGoalsAgainst(5);
            let goalsAgainst = standing.getGoalsAgainst();
            expect(goalsAgainst).equals(5);

            standing.addGoalsAgainst(3);
            goalsAgainst = standing.getGoalsAgainst();
            expect(goalsAgainst).equals(8);
        });
    });

    describe('getGoalsDifference', () => {
        it('should correctly get goals difference, 5 goals for and 3 goals against', () => {
            standing.addGoalsFor(5);
            standing.addGoalsAgainst(3);
            let goalsDifference = standing.getGoalsDifference();
            expect(goalsDifference).equals(2);
        });

        it('should correctly get goals difference, 3 goals for and 5 goals against', () => {
            standing.addGoalsFor(3);
            standing.addGoalsAgainst(5);
            let goalsDifference = standing.getGoalsDifference();
            expect(goalsDifference).equals(-2);
        });

        it('should correctly get goals difference, 10 goals for and 10 goals against', () => {
            standing.addGoalsFor(10);
            standing.addGoalsAgainst(10);
            let goalsDifference = standing.getGoalsDifference();
            expect(goalsDifference).equals(0);
        });
    });

    describe('addPlayedMatch', () => {
        it('should correctly add played match, home and win', () => {
            let match = new Match( 1, team, new Team( 2, 'Italy', 'it' ), 
                                5, 3, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            standing.addPlayedMatch(match);          
            expect(standing.getPlayed()).equals(1);
            expect(standing.getWins()).equals(1);
            expect(standing.getDraws()).equals(0);
            expect(standing.getLosts()).equals(0);
            expect(standing.getGoalsFor()).equals(5);
            expect(standing.getGoalsAgainst()).equals(3);
        });

        it('should correctly add played match, home and lost', () => {
            let match = new Match( 1, team, new Team( 2, 'Italy', 'it' ),
                                2, 4, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            standing.addPlayedMatch(match);          
            expect(standing.getPlayed()).equals(1);
            expect(standing.getWins()).equals(0);
            expect(standing.getDraws()).equals(0);
            expect(standing.getLosts()).equals(1);
            expect(standing.getGoalsFor()).equals(2);
            expect(standing.getGoalsAgainst()).equals(4);
        });

        it('should correctly add played match, home and draw', () => {
            let match = new Match( 1, team, new Team( 2, 'Italy', 'it' ),
                                0, 0, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            standing.addPlayedMatch(match);          
            expect(standing.getPlayed()).equals(1);
            expect(standing.getWins()).equals(0);
            expect(standing.getDraws()).equals(1);
            expect(standing.getLosts()).equals(0);
            expect(standing.getGoalsFor()).equals(0);
            expect(standing.getGoalsAgainst()).equals(0);
        });

        it('should correctly add played match, away and win', () => {
            let match = new Match( 1, new Team( 2, 'Italy', 'it' ), team,
                                1, 2, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            standing.addPlayedMatch(match);          
            expect(standing.getPlayed()).equals(1);
            expect(standing.getWins()).equals(1);
            expect(standing.getDraws()).equals(0);
            expect(standing.getLosts()).equals(0);
            expect(standing.getGoalsFor()).equals(2);
            expect(standing.getGoalsAgainst()).equals(1);
        });

        it('should correctly add played match, away and draw', () => {
            let match = new Match( 1, new Team( 2, 'Italy', 'it' ), team,
                                3, 3, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            standing.addPlayedMatch(match);          
            expect(standing.getPlayed()).equals(1);
            expect(standing.getWins()).equals(0);
            expect(standing.getDraws()).equals(1);
            expect(standing.getLosts()).equals(0);
            expect(standing.getGoalsFor()).equals(3);
            expect(standing.getGoalsAgainst()).equals(3);
        });

        it('should correctly add played match, away and lost', () => {
            let match = new Match( 1, new Team( 2, 'Italy', 'it' ), team,
                                5, 1, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            standing.addPlayedMatch(match);          
            expect(standing.getPlayed()).equals(1);
            expect(standing.getWins()).equals(0);
            expect(standing.getDraws()).equals(0);
            expect(standing.getLosts()).equals(1);
            expect(standing.getGoalsFor()).equals(1);
            expect(standing.getGoalsAgainst()).equals(5);
        });

        it('should not add played match, match is not group', () => {
            let match = new Match( 1, new Team( 2, 'Italy', 'it' ), team,
                                5, 1, new Date('2100-01-01 00:00:00'), null, null, MatchType.LOSER );
            expect( () => {
                standing.addPlayedMatch(match);    
            }).to.throw( /group/ );
            
        });

        it('should not add played match, match has not finished', () => {
            let match = new Match( 1, new Team( 2, 'Italy', 'it' ), team,
                                null, null, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            expect( () => {
                standing.addPlayedMatch(match);
            }).to.throw( /finish/ );
            
        });

        it('should not add played match, match does not correspond to standing', () => {
            let match = new Match( 1, new Team( 2, 'Italy', 'it' ), new Team(3, 'Germany', 'de'),
                                1, 1, new Date('2100-01-01 00:00:00'), null, null, MatchType.GROUP );
            expect( () => {
                standing.addPlayedMatch(match);
            }).to.throw( /correspond/ );
            
        });
    });

});