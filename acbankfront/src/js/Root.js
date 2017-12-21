/**
 * Created by Administrator on 2017/12/20.
 */
import React,{Component} from 'react';
import {renderRoutes} from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Root extends Component {
  render(){
    let {route} = this.props;
    return (
      <MuiThemeProvider className="homeDiv">
          {/* child routes won't render without this */}
          {renderRoutes(route.routes)}
      </MuiThemeProvider>
    )
  }
}

export default Root;