import Team from './team';

class Standing {

    private team: Team;
    private played: number;
    private wins: number;
    private draws: number;
    private losts: number;
    private goalsFor: number;
    private goalsAgainst: number;

    constructor( team: Team, played: number = 0, wins: number = 0, 
        draws: number = 0, losts: number = 0, goalsFor: number = 0, goalsAgainst: number = 0 ) {
        this.team = team;
        this.played = played;
        this.wins = wins;
        this.draws = draws;
        this.losts = losts;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
    }

    public getTeam(): Team {
        return this.team;
    }

    public getPlayed(): number {
        return this.played;
    }

    public getWins(): number {
        return this.wins;
    }

    public getDraws(): number {
        return this.draws;
    }

    public getLosts(): number {
        return this.losts;
    }

    public getGoalsFor(): number {
        return this.goalsFor;
    }

    public getGoalsAgainst(): number {
        return this.goalsAgainst;
    }

    public setPlayed( played: number ) {
        this.played = played;
    }

    public setWins( wins: number ) {
        this.wins = wins;
    }

    public setDraws( draws: number ) {
        this.draws = draws;
    }

    public setLosts( losts: number ) {
        this.losts = losts;
    }

    public setGoalsFor( goalsFor: number ) {
        this.goalsFor = goalsFor;
    }

    public setGoalsAgainst( goalsAgainst: number ) {
        this.goalsAgainst = goalsAgainst;
    }

    public setTeam( team: Team ) {
        this.team = team;
    }

    public getGoalsDifference(): number {
        return this.getGoalsFor() - this.getGoalsAgainst();
    }

    public getPoints(): number {
        return (this.getWins() * 3) + this.getDraws();
    }

    public addPlayed(): void {
        this.played += 1;
    }

    public addWin(): void {
        this.wins += 1;
    }

    public addDraw(): void {
        this.draws += 1;
    }

    public addLost(): void {
        this.losts += 1;
    }

    public addGoalsFor(goals: number){
        if (goals) {
            goals = +this.goalsFor + +goals;
            this.goalsFor = goals;
        }
    }

    public addGoalsAgainst(goals: number) {
        if (goals) {
            goals = +this.goalsAgainst + +goals;
            this.goalsAgainst = goals;
        }
    }

}

export default Standing;