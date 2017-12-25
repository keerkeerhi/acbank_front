/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
import React, { Component } from 'react'
import { Avatar, Dialog, FlatButton, FloatingActionButton, Divider, Paper, TextField } from 'material-ui'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import defautimg from '../../images/headimg.jpg'
import ContentAdd from 'material-ui/svg-icons/content/add'
import managerService from '../service/managerService'

import './ManagerHome.css'
const style = {margin: 5}

class ManagerHome extends Component {
  constructor () {
    super()
  }

  state = {staffList: [], loading: false, open: false, currentStaff: {}}

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  handleSave = () => {
    managerService.save(){

    }
  }

  render () {
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="添加"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ]
    return (
      <section className="staffBody">
        <List className="listCls">
          {
            this.state.staffList.map((staff) => {
              return (
                <ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar
                      src={defautimg}
                      size={30}
                      style={style}
                    />
                  }
                >
                  {staff.name}
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
            <TextField hintText="姓名" onChange={(e) => {
              this.setState({currentStaff: Object.assign(this.state.currentStaff, {name: e.target.value})})
            }} style={style}/>
            <span style={{margin: '20px 15px'}}>初始密码为123456<br/> 建立账号以后通知业务经理修改密码。</span>
          </div>
        </Dialog>
      </section>
    )
  }
}

export default ManagerHome