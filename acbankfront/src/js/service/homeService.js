/**
 * Created by Administrator on 2017/12/20.
 */
import axios from 'axios';
import {global_host} from '../common/globalConfig';
import {fGetRandom} from '../common/Util'

export default {
    checkAuth(){
        return new Promise((resolve,reject)=>{
            axios.post(global_host + 'checkAuth'+'?t='+fGetRandom())
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    login(params){
        return new Promise((resolve,reject)=>{
            axios.post(global_host + 'login',params)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}