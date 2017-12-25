/**
 * Created by Administrator on 2017/12/20.
 */
import axios from 'axios';
import {global_host} from '../common/globalConfig';

const checkAuth = "checkAuth";

export default {
    checkAuth(){
        return new Promise((resolve,reject)=>{
            axios.get(global_host + 'checkAuth')
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