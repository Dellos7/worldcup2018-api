import DataService from './main';
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        const router = express.Router();
    
        router.get('/', (req: Request, res: Response) => {
          res.status(200).send({
            message: 'Hello World! This is the World Cup 2018 API.'
          })
        });
    
        router.post('/', (req: Request, res: Response) => {
          const data = req.body;
          res.status(200).send(data);
        });

        router.get('/teams', (req: Request, res: Response) => {
            DataService.initFromJsonDataUrl('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
                .then(
                    (callRes) => {
                        res.status(200).send({
                          teams: DataService.teams
                        });
                    }
                ).catch(
                    (err) => {
                        res.status(500).send({
                            message: 'Error: ' + err
                          });
                    }
                );
          });
    
        this.app.use('/', router); 
    
    }
}

export default new App().app;