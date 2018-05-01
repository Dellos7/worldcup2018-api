import { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from 'axios';

class HttpAxiosService {

    doGet( url: string ): Promise<any> {
        return new Promise( (resolve, reject) => {
            let config: AxiosRequestConfig = {
                url: url,
                method: 'get'
            };
            let axiosInstance: AxiosInstance = axios.create();
            axiosInstance.request(config).then(
                (res) => {
                    if(res && res.data) {
                        resolve(res.data);
                    }
                    else {
                        reject();
                    }
                }
            ).catch(
                (err) => {
                    reject(err);
                }
            );
        });
    }

}

export default HttpAxiosService;