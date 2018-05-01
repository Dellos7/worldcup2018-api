import Team from "../models/team";

class TeamParser {

    public static parseTeams( jsonData: any ): Team[] {
        let teams: Team[] = [];
        let teamsJson = jsonData.teams;
        if( !teamsJson ) {
            throw new Error('Invalid JSON data, no "teams" found.');
        }
        for( let jsonTeam in teamsJson ) {
            teams.push( Object.assign( new Team(null, null, null), teamsJson[jsonTeam] ) );
        }
        return teams;
    }

}

export default TeamParser;