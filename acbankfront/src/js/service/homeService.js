/**
 * Created by Administrator on 2017/12/20.
 */
import axios from 'axios';

export default {
    checkAuth(){
        return axios.post('/public/checkAuth')
            .then((response) => {
                console.log('====>res=>', response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}