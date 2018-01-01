/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react'
import './Login.css'
import homeService from '../service/homeService'
import NotificationSystem from 'react-notification-system';

class Login extends Component {

    constructor() {
        super();
        this.state = {username:'',password:''};
    }
    _notificationSystem = null;

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    render() {
        console.log('loginjs')
        return (
            <section className="loginsec">
                <div className="login">
                    <h1>管理员登录</h1>
                    <form method="post" >
                        <input type="text" name="username"
                               onChange={(evt)=>this.setState({username: evt.target.value})}
                               placeholder="用户名" required="required" />
                        <input type="password" name="pwd"
                               onChange={(evt)=>this.setState({password: evt.target.value})}
                               placeholder="密码" required="required" />
                        <button type="button" onClick={this.login.bind(this)} className="btn btn-primary btn-block btn-large">登录</button>
                    </form>
                </div>
                <NotificationSystem ref="notificationSystem"/>
            </section>
        )
    }

    login(){
        homeService.login(this.state).then(res=>{
            if (res.flag)
            {
                this.props.history.push('/home')
            }
            else
                this._notificationSystem.addNotification({
                    title: 'Fail!',
                    message: "用户名密码有误！",
                    autoDismiss: 3,
                    level: 'error',
                    position: 'tr'
                })
        })
    }
}

export default Login;