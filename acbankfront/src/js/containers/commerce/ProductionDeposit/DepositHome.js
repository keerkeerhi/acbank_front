/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentSend from 'material-ui/svg-icons/content/send';

class DepositHome extends Component {
    render(props) {
        return (<List>
                <Subheader><h3>汤阴农商银行存款产品</h3></Subheader>
                <ListItem primaryText='"享当当"存款' rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/1');
                          }}
                />
                <ListItem primaryText="智能通知存款" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/2');
                          }}
                />
                <ListItem primaryText="免预约通知存款" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/3');
                          }}
                />
                <ListItem primaryText="七天理财" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/4');
                          }}
                />
                <ListItem primaryText="周周赚" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/5');
                          }}
                />
            </List>
        )
    }
}

export default DepositHome;