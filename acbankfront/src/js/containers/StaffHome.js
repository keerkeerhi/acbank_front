/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react'
import {Avatar, Dialog, FlatButton, RaisedButton} from 'material-ui'
import {Toolbar} from 'material-ui/Toolbar';
import NotificationSystem from 'react-notification-system';
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import defautimg from '../../images/headimg.jpg'
import customerimg from '../../images/customer.jpg'
import staffService from '../service/staffService'
import {ValidatorForm} from 'react-form-validator-core';
import {TextValidator} from 'react-material-ui-form-validator';
import {isArray} from '../common/Util'
import managerService from '../service/managerService'

import {darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import './StaffHome.css'
const style = {margin: 5}

class StaffHome extends Component {
    _notificationSystem = null;

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    state = {
        customList: [],
        loading: false,
        del_winOpen: false,
        del_id: "",
        set_winOpen: false,
        currentStaff: {email: '', phone: ''},
        imgFile: null,
        fileName: null,
        reallyStaff: {headimg: ''}
    }

    constructor(props) {
        super()
        let params = props.match.params
        this.getCustomers(params);
        this.getStaffDetail(params);
    }

    handleOpen_del = (id) => {
        this.setState({del_winOpen: true, del_id: id})
    }
    handleClose_del = () => {
        this.setState({del_winOpen: false})
    }

    handleDel = () => {
        let id = this.state.del_id;
        staffService.delCustomer({id}).then(res => {
            if (res == '1') {
                this.getCustomers(this.props.match.params);
                this.handleClose_del();
            }
            else
                this._notificationSystem.addNotification({
                    title: 'Fail!',
                    message: "删除客户失败！",
                    autoDismiss: 3,
                    level: 'error',
                    position: 'tr'
                })
        })
    }

    handleOpen_set = () => {
        this.setState({set_winOpen: true})
    }
    handleClose_set = () => {
        this.getStaffDetail(this.props.match.params).then(res => {
            this.setState({set_winOpen: false})
        })
    }
    handleSet = () => {
        let staff = this.state.currentStaff;
        console.log('-------->save', staff);
        let formData = new FormData();
        formData.append('headImg', this.state.imgFile);
        formData.append('id', staff.id + '');
        formData.append('email', staff.email);
        formData.append('phone', staff.phone);
        managerService.saveStaff(formData).then(res => {
            if (res.flag == '1') {
                this.handleClose_set();
                this._notificationSystem.addNotification({
                    title: 'Success',
                    message: '保存成功！',
                    autoDismiss: 3,
                    level: 'success',
                    position: 'tr'
                })
            }
        })
    }

    getStaffDetail = (params) => {
        return managerService.showStaff(params).then(res => {
            if (isArray(res) && res.length > 0) {
                let sf = res[0];
                let reallyStaff = JSON.parse(JSON.stringify(sf));
                this.setState({currentStaff: sf, reallyStaff});
            }
        })
    }
    getCustomers = (params) => {
        staffService.customers(params).then(res => {
            if (isArray(res)) {
                this.setState({open: false})
                this.setState({customList: res});
            }
        })
    }
    handleLogout = () => {
        managerService.logout().then(res => {
            if (res == '1')
                this.props.history.push('/Login')
        })
    }
    handleLogout = () => {
        managerService.logout().then(res => {
            if (res == '1')
                this.props.history.push('/Login')
        })
    }
    handleUpImg = () => {
        let finput = this.refs.upimg;
        finput.onchange = (() => {
            let fl = finput.files[0];
            if (fl.size > 2097152) {
                finput.value = "";
                this._notificationSystem.addNotification({
                    title: '提示',
                    message: "请选择不大于2M的图片！",
                    autoDismiss: 3,
                    level: 'info',
                    position: 'tr'
                })
                return;
            }
            if (finput.value.match(/\.(jpg|jpeg|JPG|JPEG)(\?.*)?$/)) {
                this.setState({imgFile: finput.files[0]});
            } else {
                finput.value = "";
                this._notificationSystem.addNotification({
                    title: '提示',
                    message: "请选择正确的图片格式！",
                    autoDismiss: 3,
                    level: 'info',
                    position: 'tr'
                })
            }
        });
        finput.click();
    }

    handleChange = name => event => {
        this.setState({
            currentStaff: Object.assign(this.state.currentStaff,
                {[name]: event.target.value,}
            )
        });
    };

    render() {
        const actions_del = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose_del}
            />,
            <FlatButton
                label="确认删除"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleDel}
            />,
        ]
        return (
            <section className="staffBody">
                <Toolbar>
                    <Avatar
                        src={this.state.reallyStaff.headimg ? this.state.reallyStaff.headimg : defautimg}
                        size={30}
                        style={{marginTop: '10px'}}
                    />
                    <IconMenu style={{float: 'right'}}
                              iconButtonElement={
                                  <IconButton touch={true}>
                                      <NavigationExpandMoreIcon />
                                  </IconButton>
                              }
                    >
                        <MenuItem primaryText="设置" onClick={this.handleOpen_set}/>
                        <MenuItem primaryText="注销" onClick={this.handleLogout}/>
                    </IconMenu>
                </Toolbar>
                <List className="listCls">
                    {
                        this.state.customList.map((custom, index) => {
                            return (
                                <ListItem key={index}
                                          leftAvatar={<Avatar
                                              src={customerimg}
                                              size={30}
                                              style={style}
                                          />}
                                          rightIcon={
                                              <i className="iconfont icon-shanchu"
                                                 style={{fontSize: '35px', color: '#FF4F4F'}}
                                                 onClick={
                                                     () => {
                                                         this.handleOpen_del(custom.id)
                                                     }
                                                 }
                                              ></i>
                                          }
                                          primaryText={custom.name}
                                          secondaryText={
                                              <p>
                                                  <span style={{color: darkBlack}}>{custom.phone}</span><br />
                                                  地址：{custom.address}申请金额：{custom.numb}
                                              </p>
                                          }
                                          secondaryTextLines={2}
                                />
                            )
                        })
                    }
                </List>
                <Dialog
                    title="删除确认"
                    actions={actions_del}
                    modal={false}
                    open={this.state.del_winOpen}
                    onRequestClose={this.handleClose_del}
                >
                    确认删除客户？
                </Dialog>

                <Dialog
                    title="用户设置"
                    modal={false}
                    open={this.state.set_winOpen}
                    onRequestClose={this.handleClose_set}
                >
                    <RaisedButton label="上传头像" onClick={this.handleUpImg} primary={true}>
                        <input className="upInput" type="file" ref="upimg">

                        </input>
                    </RaisedButton>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSet}
                        autoComplete="off"
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            value={this.state.currentStaff.email}
                            floatingLabelText="邮箱"
                            name="numb"
                            onChange={this.handleChange('email')}
                            validators={['required', 'isEmail']}
                            errorMessages={['请填写邮箱', '邮箱格式不正确']}
                            margin="normal"
                        /><br/>
                        <TextValidator
                            value={this.state.currentStaff.phone}
                            floatingLabelText="手机号码"
                            name="phone"
                            onChange={this.handleChange('phone')}
                            validators={['required', 'matchRegexp:^1[34578]\\d{9}$']}
                            errorMessages={['请填写电话号码', '电话号码格式不正确']}
                        /><br/>
                        <RaisedButton label="保存"
                                      keyboardFocused={true} type="submit"
                                      style={{float: 'right', margin: '20px 20px 0 0'}}
                                      primary={true}/>
                        <RaisedButton
                            label="取消"
                            primary={true}
                            style={{float: 'right', margin: '20px 20px 0 0'}}
                            onClick={this.handleClose_set}
                        />
                    </ValidatorForm>
                </Dialog>
                <NotificationSystem ref="notificationSystem"/>
            </section>
        )
    }
}

export default StaffHome;