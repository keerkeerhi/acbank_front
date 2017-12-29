/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react'
import {Avatar} from 'material-ui'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import defautimg from '../../images/headimg.jpg'
import staffService from '../service/staffService'
import {isArray} from '../common/Util'

import './StaffHome.css'
const style = {margin: 5}

class StaffHome extends Component {
    state = {
        customList: [],
        loading: false,
    }

    constructor(props) {
        super()
        this.getCustomers(props.match.params);
    }

    handleDel = (id) => {
        staffService.delCustomer({id}).then(res => {
            console.log('==============>', res);
            if (res == '1') {
                this.getStaffList();
            }
            else
                alert("删除失败！");
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

    render() {
        return (
            <section className="staffBody">
                <List className="listCls">
                    {
                        this.state.customList.map((custom, index) => {
                            return (
                                <ListItem className="listItemCls" key={index}
                                          leftAvatar={
                                              <Avatar
                                                  src={defautimg}
                                                  size={30}
                                                  style={style}
                                              />
                                          }
                                          primaryText={custom.name}
                                          rightIcon={
                                        <i className="iconfont icon-shanchu"
                                           style={{fontSize: '35px', color: '#FF4F4F'}}
                                           onClick={
                                               () => {
                                                   this.handleDel(custom.id)
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
            </section>
        )
    }
}

export default StaffHome;