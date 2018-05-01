import Team from "./team";
import Stadium from "./stadium";
import Channel from "./channel";
import Group from "./group";
import MatchType from "./match-type";

class Match {
    private id: number;
    private homeTeam: Team;
    private awayTeam: Team;
    private homeResult: number;
    private awayResult: number;
    private date: Date;
    private stadium: Stadium;
    private channels: Channel[];
    private type: MatchType;
    private group: Group;

    public constructor(id: number, homeTeam: Team, awayTeam: Team, 
        homeResult: number, awayResult: number, date: Date, stadium: Stadium, channels: Channel[], 
        type: MatchType, group: Group = null) {
        this.id = id;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeResult = homeResult;
        this.awayResult = awayResult;
        this.date = date;
        this.stadium = stadium;
        this.channels = channels;
        this.type = type;
        this.group = group;
    }

    public getId(): number {
        return this.id;
    }

    public getHomeTeam(): Team {
        return this.homeTeam;
    }

    public getAwayTeam(): Team {
        return this.awayTeam;
    }

    public getHomeResult(): number | null {
        return this.homeResult;
    }

    public setHomeResult(result: number) {
        this.homeResult = result;
    }

    public getAwayResult(): number | null {
        return this.awayResult;
    }

    public setAwayResult(result: number) {
        this.awayResult = result;
    }

    public getDate(): Date {
        return this.date;
    }

    public getStadium(): Stadium {
        return this.stadium;
    }

    public getChannels(): Channel[] | null {
        return this.channels;
    }

    public getType(): MatchType {
        return this.type;
    }

    public isFinish(): boolean {
        return this.getHomeResult() !== null && this.getAwayResult() !== null;
    }

    public isStarted(): boolean {
        let now = Date.now();
        return now > this.getDate().getDate();
    }

    public getWinner(): Team {
        if (this.getHomeResult() > this.getAwayResult()) {
            return this.getHomeTeam();
        }
        else if( this.getHomeResult() === this.getAwayResult() ) {
            return null;
        }

        return this.getAwayTeam();
    }

    public getLoser(): Team {
        if (this.getHomeResult() < this.getAwayResult()) {
            return this.getHomeTeam();
        }
        else if( this.getHomeResult() === this.getAwayResult() ) {
            return null;
        }

        return this.getAwayTeam();
    }

    public setHomeTeam(team: Team) {
        this.homeTeam = team;
    }

    public setAwayTeam(team: Team) {
        this.awayTeam = team;
    }

    public getGroup(): Group {
        return this.group;
    }
}

export default Match;