/**
 * Created by Administrator on 2017/12/20.
 */
import React,{Component} from 'react';
import InfoHeader from './InfoHeader';
import {renderRoutes} from 'react-router-config'

class Production_deposit extends Component {
    render(props){
        let {route} = this.props;
        return (
            <div className="homeDiv">
                <InfoHeader/>
                {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
            </div>
        )
    }
}

export default Production_deposit;