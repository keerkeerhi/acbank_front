/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentSend from 'material-ui/svg-icons/content/send';

class DepositHome extends Component {

    constructor(props) {
        super();
        let staffId = props.match.params.userId;
        this.state = {staffId};
    }

    render(props) {
        return (<List>
                <Subheader><h3>汤阴农商银行存款产品</h3></Subheader>
                <ListItem primaryText='"享当当"存款' rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/1/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="智能通知存款" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/2/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="免预约通知存款" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/3/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="七天理财" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/4/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="周周赚" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionDeposit/DepositDetail/5/'+this.state.staffId);
                          }}
                />
            </List>
        )
    }
}

export default DepositHome;