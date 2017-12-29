/**
 * Created by Administrator on 2017/12/20.
 */
import axios from 'axios';
import {global_host} from '../common/globalConfig';

const dicturl = "dict";

export default {
    dictList(){
        return new Promise((resolve, reject) => {
            axios.get(global_host + dicturl)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}