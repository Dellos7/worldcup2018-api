
import Match from 'models/match';import Stadium from 'models/stadium';
import Channel from 'models/channel';
import Group from 'models/group';
import MatchParser from './parsers/match';
import Team from './models/team';
import axios from 'axios';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import TeamParser from './parsers/team';


class DataService {

    public static matches: Match[];
    public static stadiums: Stadium[];
    public static channels: Channel[];
    public static groups: Group[];
    public static teams: Team[];

    public static initFromJsonDataUrl( jsonDataUrl: string ): Promise<boolean> {
        return new Promise( (resolve, reject) => {
            let config: AxiosRequestConfig = {
                url: jsonDataUrl,
                method: 'get'
            };
            let axiosInstance: AxiosInstance = axios.create();
            axiosInstance.request(config).then(
                (res) => {
                    if(res && res.data) {
                        this.init( res.data );
                        resolve(true);
                    }
                }
            ).catch(
                (err) => {
                    reject();
                }
            );
        });
    }

    public static init( jsonData: any ) {
        DataService.teams = TeamParser.parseTeams(jsonData);
    }

}

export default DataService;