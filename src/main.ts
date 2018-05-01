import Match from 'models/match';import Stadium from 'models/stadium';
import Channel from 'models/channel';
import Group from 'models/group';
import MatchParser from './parsers/match';
import Team from './models/team';
import axios from 'axios';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import TeamParser from './parsers/team';
import HttpAxiosService from 'services/http-axios-service';


class DataService {

    public httpAxiosService: HttpAxiosService;
    public url: string;

    public matches: Match[];
    public stadiums: Stadium[];
    public channels: Channel[];
    public groups: Group[];
    public teams: Team[];

    constructor( httpAxiosService: HttpAxiosService, url: string ) {
        this.httpAxiosService = httpAxiosService;
        this.url = url;
    }

    public getData( url: string ): Promise<any> {
        return this.httpAxiosService.doGet( url );
    }

    private parse( url: string ): Promise<any> {
        return new Promise<any>( (resolve, reject) => {
            this.getData( url ).then(
                (data) => {
                    resolve(data);
                }
            ).catch(
                (err) => {
                    reject(err);
                }
            );
        });
    }

    public parseAll( url: string ): Promise<boolean> | Promise<any> {
        if( !url ) {
            url = this.url;
        }
        return new Promise<boolean>( (resolve, reject) => {
            this.parse( url ).then(
                (data) => {
                    this.teams = TeamParser.parseTeams(data);
                    resolve(true);
                }
            ).catch(
                (err) => {
                    reject(err);
                }
            );
        });
        
    }

    public parseTeams( url: string ): Promise<boolean>{
        if( !url ) {
            url = this.url;
        }
        return new Promise<boolean>( (resolve, reject) => {
            this.parse( url ).then(
                (data) => {
                    this.teams = TeamParser.parseTeams(data);
                    resolve(true);
                }
            ).catch(
                (err) => {
                    reject(err);
                }
            );
        });
    }

}

export default DataService;