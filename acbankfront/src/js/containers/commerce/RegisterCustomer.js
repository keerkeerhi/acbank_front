/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import InfoHeader from './InfoHeader';
import {Paper, MenuItem, RaisedButton, Dialog, FlatButton} from 'material-ui';
import {ValidatorForm} from 'react-form-validator-core';
import {TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import NotificationSystem from 'react-notification-system';

import './RegisterCustomer.css'
import dictServer from  '../../service/dictService'
import staffService from '../../service/staffService'
import {isArray} from '../../common/Util'

class RegisterCustomer extends Component {

    _notificationSystem = null;

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    constructor(props) {
        super();
        let staffId = props.match.params.id;
        this.state = {
            staffId,
            currentCustom: {name: "", numb: "", phone: "", address: "", managerid: staffId},
            addressList: [],
        };
        dictServer.dictList().then(res => {
            if (isArray(res))
                this.setState({addressList: res});
        })
    }

    addressHandle = (event, index, address) => {
        this.setState({currentCustom: Object.assign(this.state.currentCustom, {address})});
    };
    handleChange = name => event => {
        this.setState({
            currentCustom: Object.assign(this.state.currentCustom,
                {[name]: event.target.value,}
            )
        });
    };
    saveApply = () => {
        staffService.saveCustomer({custom: this.state.currentCustom}).then(res => {
            if (res.info) {
                this._notificationSystem.addNotification({
                    title: 'Success!',
                    message: '保存成功！',
                    autoDismiss: 3,
                    level: 'success',
                    position: 'tr'
                })
                setTimeout(()=>{
                    this.props.history.push('/Bussiness/'+this.state.staffId);
                },3150);
            }
            else
                this._notificationSystem.addNotification({
                    title: 'Fail!',
                    message: '保存失败！',
                    autoDismiss: 3,
                    level: 'error',
                    position: 'tr'
                })
        })
    }

    handleClose = () => {
        this.setState({open: false});
    };

    render(props) {
        return (
            <div className="homeDiv">
                <InfoHeader/>
                <Paper className="registPaper">
                    <section className="registSec">
                        <div className="applyTitle">
                            <span>
                                贷款申请
                            </span><br/>
                            <span>
                                贷款热线：15537232100
                            </span>
                        </div>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.saveApply}
                            autoComplete="off"
                            onError={errors => console.log(errors)}
                        >
                            <TextValidator
                                name="name"
                                value={this.state.currentCustom.name}
                                floatingLabelText="姓名"
                                onChange={this.handleChange('name')}
                                validators={['required']}
                                errorMessages={['姓名为必填']}
                            /><br/>
                            <TextValidator
                                value={this.state.currentCustom.numb}
                                floatingLabelText="申请金额（元）"
                                name="numb"
                                onChange={this.handleChange('numb')}
                                validators={['required', 'isNumber']}
                                errorMessages={['请填写申请金额', '金额必须为数字']}
                                margin="normal"
                            /><br/>
                            <TextValidator
                                value={this.state.currentCustom.phone}
                                floatingLabelText="手机号码"
                                name="phone"
                                onChange={this.handleChange('phone')}
                                validators={['required', 'matchRegexp:^1[34578]\\d{9}$']}
                                errorMessages={['请填写电话号码', '电话号码格式不正确']}
                            /><br/>
                            <SelectValidator
                                value={this.state.currentCustom.address}
                                onChange={this.addressHandle}
                                maxHeight={200}
                                name="address"
                                floatingLabelText="常住地址"
                                validators={['required']}
                                errorMessages={['请填写您的住址']}
                            >
                                {
                                    this.state.addressList.map((address, index) => {
                                        return <MenuItem value={address.code} key={index} primaryText={address.name}/>
                                    })
                                }
                            </SelectValidator><br/>
                            <RaisedButton type="submit" style={{float: 'right', margin: '20px 20px 0 0'}}
                                          label="立刻申请" primary={true}/>
                            <NotificationSystem ref="notificationSystem"/>
                        </ValidatorForm>
                    </section>
                </Paper>
            </div>
        )
    }
}

export default RegisterCustomer;