/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import homeService from '../service/homeService';

class Home extends Component {
    constructor(props) {
        super();
        this.checkAuth();
    }

    checkAuth(){
        homeService.checkAuth().then(res=>{
            if (res.ispassed)
                this.props.history.push('/Detail')
            else
                this.props.history.push('/Login')
        })
    }

    render() {
        return <div></div>
    }
}

export default Home;