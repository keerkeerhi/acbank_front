/**
 * Created by Administrator on 2017/12/23.
 */
import axios from 'axios';
import {global_host} from '../common/globalConfig';

const staffUrl = "staff"
const logoutUrl = 'logout';

export default {
    staffList(){
        return new Promise((resolve,reject)=>{
            axios.get(global_host + staffUrl)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    saveStaff(params){
        return new Promise((resolve,reject)=>{
            axios.post(global_host + staffUrl,params)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    logout(){
        return new Promise((resolve,reject)=>{
            axios.post(global_host + logoutUrl)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    delStaff(params){
        return new Promise((resolve,reject)=>{
            axios.delete(global_host + staffUrl+"/"+params.id)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    showStaff(params)
    {
        return new Promise((resolve,reject)=>{
            axios.get(global_host + staffUrl+"/"+params.id)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    updateStaff(params,id)
    {
        return new Promise((resolve,reject)=>{
            axios.put(global_host + staffUrl+"/"+id,{info:params})
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}