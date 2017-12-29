/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import homeService from '../service/homeService';

class Home extends Component {
    constructor(props) {
        super();
        console.log('------------->Home')
        this.checkAuth();
    }

    checkAuth(){
        homeService.checkAuth().then(res=>{
            if (res.ispassed)
            {
                let user = res.info;
                if (user.type=='1')
                    this.props.history.push('/ManagerHome')
                else
                    this.props.history.push('/StaffHome')
            }
            else
                this.props.history.push('/Login')
        })
    }

    render() {
        return <div></div>
    }
}

export default Home;