/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import './Bussiness.css';
import headimg from '../../images/headimg.jpg';
import managerService from '../service/managerService';

class Bussiness extends Component {
    constructor(props) {
        super();
        let staffId = props.match.params.id;
        this.state = {staffId,currentStaff:{}};
        managerService.showStaff({id:staffId}).then(res=>{
            this.setState({currentStaff:res});
        });
    }

    render() {
        return (
            <section className="bussinessBody">
                <img className="headImg" src={headimg} />
                <h3>{this.state.currentStaff.name}</h3>
                <p className="userPost">汤阴农商银行-个贷一部客户经理</p>
                <p style={{margin:'10px'}}>服务区域：住房、汽车、二手房按揭、金太阳”光伏、市区个人100万以内贷款
                </p>
                <div>
                    <a>
                        <div className="ecard-text">电子名片：</div>
                        <div className="ecard-img">
                        </div>
                    </a>
                </div>
                <ul className="shortCut">
                    <li>
                        <FloatingActionButton onClick={()=>{
                            this.props.history.push('/registerCustomer/'+this.state.staffId);
                        }}
                            backgroundColor="#FC5858"
                            children={<i className="iconfont icon-apply fontsize50"></i>}
                        />
                        {/*<div><i className="iconfont icon-weibiaoti5"></i></div><br/>*/}
                        <div>贷款申请</div>
                    </li>
                    <li>
                        <FloatingActionButton
                            backgroundColor="#229988"
                            children={<i className="iconfont icon-weibiaoti5 fontsize50"></i>}
                        />
                        {/*<div><i className="iconfont icon-weibiaoti5"></i></div>*/}
                        <div>贷款产品</div>
                    </li>
                    <li>
                        <FloatingActionButton
                            backgroundColor="#9955BB"
                            children={<i className="iconfont icon-cunkuanlicairenminbi fontsize50"></i>}
                        />
                        {/*<div><i className="iconfont icon-weibiaoti5"></i></div>*/}
                        <div>存款产品</div>
                    </li>
                    <li>
                        <FloatingActionButton
                            children={<i className="iconfont icon-cunkuanlishuai fontsize50"></i>}
                        />
                        {/*<div><i className="iconfont icon-weibiaoti5"></i></div>*/}
                        <div>存款利率</div>
                    </li>
                    <li>
                        <FloatingActionButton
                            backgroundColor="#42DF91"
                            children={<i className="iconfont icon-dianhuabu fontsize50"></i>}
                        />
                        {/*<div><i className="iconfont icon-weibiaoti5"></i></div>*/}
                        <div>网点电话</div>
                    </li>
                    <li>
                        <FloatingActionButton
                            backgroundColor="#BBDD55"
                            children={<i className="iconfont icon-lianxiwomen fontsize50"></i>}
                        />
                        {/*<div><i className="iconfont icon-weibiaoti5"></i></div><br/>*/}
                        <div>联系我们</div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Bussiness;