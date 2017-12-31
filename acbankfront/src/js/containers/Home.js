/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import homeService from '../service/homeService';
import {renderRoutes} from 'react-router-config'

class Home extends Component {
    constructor(props) {
        super();
        this.checkAuth();
    }

    checkAuth() {
        homeService.checkAuth().then(res => {
            if (res.ispassed) {
                let user = res.info;
                if (user.type == '1')
                    this.props.history.push('/home/ManagerHome')
                else
                    this.props.history.push('/home/StaffHome/'+user.id)
            }
            else
                this.props.history.push('/Login')
        })
    }

    render() {
        let {route} = this.props;
        return (
            <div>
                {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
            </div>
        )
    }
}

export default Home;