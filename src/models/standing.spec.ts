import {expect} from 'chai';
import Standing from './standing';
import Team from './team';

describe('Standing', () => {

    let team: Team;
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

});