/**
 * Created by Administrator on 2017/12/23.
 */
import axios from 'axios';
import {global_host} from '../common/globalConfig';

const customerurl = "customs"

export default {
    customers(params){
        return new Promise((resolve, reject) => {
            axios.get(global_host + customerurl + '/' + params.id)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    delCustomer(params){
        return new Promise((resolve, reject) => {
            axios.delete(global_host + customerurl + "/" + params.id)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    saveCustomer(params){
        return new Promise((resolve, reject) => {
            axios.post(global_host + customerurl,params)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}