/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentSend from 'material-ui/svg-icons/content/send';

class LoansHome extends Component {
    constructor(props) {
        super();
        let staffId = props.match.params.userId;
        this.state = {staffId};
    }

    render(props) {
        console.log('---------LoansHome')
        return (<List style={{overflow:'auto'}} >
                <Subheader><h3>汤阴农商银行信贷产品</h3></Subheader>
                <ListItem primaryText="普惠贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/1/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="职贷通" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/2/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="助学贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/3/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="留学贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/4/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="购物贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/5/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="装修贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/6/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="旅游贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/7/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="住房按揭贷款" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/8/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="二手房贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/9/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="车易贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/10/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="二手车贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/11/'+this.state.staffId);
                          }}
                />
                <ListItem primaryText="长期贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/12/'+this.state.staffId);
                          }}
                />
            </List>
        )
    }
}

export default LoansHome;