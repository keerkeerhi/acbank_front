/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import homeService from '../service/homeService';

class Home extends Component {
    constructor() {
        super();
        homeService.checkAuth();
    }

    render() {
        return <div>this is Home!</div>
    }
}

export default Home;