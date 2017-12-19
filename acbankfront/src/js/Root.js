/**
 * Created by Administrator on 2017/12/20.
 */
import React,{Component} from 'react';
import {renderRoutes} from 'react-router-config';

class Root extends Component {
  render(){
    let {route} = this.props;
    return (
      <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default Root;