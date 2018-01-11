/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react'
import {Avatar, Dialog, FlatButton, FloatingActionButton, TextField, RaisedButton} from 'material-ui'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import NotificationSystem from 'react-notification-system';
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import defautimg from '../../images/headimg.jpg'
import ContentAdd from 'material-ui/svg-icons/content/add'
import managerService from '../service/managerService'
import {isArray} from '../common/Util'

import './ManagerHome.css'
const style = {margin: 5}

class ManagerHome extends Component {
    _notificationSystem = null;

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    state = {
        staffList: [],
        loading: false,
        open: false,
        currentStaff: {},
        del_winOpen: false,
        del_id: ""
    }

    constructor() {
        super()
        this.getStaffList();
    }

    getStaffList = () => {
        managerService.staffList().then(res => {
            if (isArray(res)) {
                this.setState({open: false})
                this.setState({staffList: res});
            }
        })
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handleSave = () => {
        managerService.saveStaff({staff: this.state.currentStaff}).then(res => {
            console.log('==============>', res);
            if (res.flag) {
                this.getStaffList();
                this._notificationSystem.addNotification({
                    title: 'Success!',
                    message: '保存成功！',
                    autoDismiss: 3,
                    level: 'success',
                    position: 'tr'
                })
            }
            else
                this._notificationSystem.addNotification({
                    title: 'Fail!',
                    message: res.info,
                    autoDismiss: 3,
                    level: 'error',
                    position: 'tr'
                })
        })
    }
    handleOpen_del = (id) => {
        this.setState({del_winOpen: true, del_id: id})
    }
    handleClose_del = () => {
        this.setState({del_winOpen: false})
    }
    handleDel = () => {
        let id = this.state.del_id;
        managerService.delStaff({id}).then(res => {
            console.log('==============>', res, this);
            if (res == '1') {
                this.getStaffList();
                this.handleClose_del();
            }
            else
                this._notificationSystem.addNotification({
                    title: 'Fail!',
                    message: "删除员工失败！",
                    autoDismiss: 3,
                    level: 'error',
                    position: 'tr'
                })
        })
    }

    handleLogout = () => {
        managerService.logout().then(res => {
            if (res == '1')
                this.props.history.push('/Login')
        })
    }

    render() {
        console.log('====>', this.state.staffList);
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="保存"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSave}
            />,
        ]
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
                    <ToolbarGroup firstChild={true}>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <RaisedButton label="退出登录" onClick={this.handleLogout} primary={true}/>
                    </ToolbarGroup>
                </Toolbar>
                <List className="listCls">
                    {
                        this.state.staffList.map((staff, index) => {
                            return (
                                <ListItem key={index}
                                          leftAvatar={
                                              <Avatar
                                                  src={staff.headimg ? staff.headimg : defautimg}
                                                  size={30}
                                                  style={style}
                                              />
                                          }
                                          primaryText={staff.name}
                                          rightIcon={
                                              <i className="iconfont icon-shanchu"
                                                 style={{fontSize: '35px', color: '#FF4F4F'}}
                                                 onClick={
                                                     () => {
                                                         this.handleOpen_del(staff.id)
                                                     }
                                                 }
                                              ></i>
                                          }
                                >
                                </ListItem>
                            )
                        })
                    }
                </List>
                <footer className="footerCls">
                    <FloatingActionButton>
                        <ContentAdd onClick={this.handleOpen}/>
                    </FloatingActionButton>
                </footer>
                <Dialog
                    title="添加业务经理"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <div>
                        <TextField hintText="登录账号" onChange={(e) => {
                            this.setState({currentStaff: Object.assign(this.state.currentStaff, {loginName: e.target.value})})
                        }} style={style}/>
                        <br/>
                        <TextField hintText="姓名" onChange={(e) => {
                            this.setState({currentStaff: Object.assign(this.state.currentStaff, {name: e.target.value})})
                        }} style={style}/>
                        <p>初始密码为123456，建立账号以后通知业务经理修改密码。</p>
                    </div>
                </Dialog>
                <Dialog
                    title="确认删除员工？"
                    actions={actions_del}
                    modal={false}
                    open={this.state.del_winOpen}
                    onRequestClose={this.handleClose_del}
                >
                    确认删除员工？
                </Dialog>
                <NotificationSystem ref="notificationSystem"/>
            </section>
        )
    }
}

export default ManagerHome