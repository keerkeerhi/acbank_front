/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react'
import './Login.css'
import homeService from '../service/homeService'

class Login extends Component {
    constructor() {
        super();
        this.state = {username:'',password:''};
    }

    render() {
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
            </section>
        )
    }

    login(){
        homeService.login(this.state).then(res=>{
            if (res.flag)
            {
                let user = res.info;
                if (user.type=='1')
                    this.props.history.push('/ManagerHome')
                else
                    this.props.history.push('/StaffHome')
            }
            else
                alert(res);
        })
    }
}

export default Login;