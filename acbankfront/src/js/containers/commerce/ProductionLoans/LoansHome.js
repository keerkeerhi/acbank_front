/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentSend from 'material-ui/svg-icons/content/send';

class LoansHome extends Component {
    render(props) {
        console.log('---------LoansHome')
        return (<List style={{overflow:'auto'}} >
                <Subheader><h3>汤阴农商银行信贷产品</h3></Subheader>
                <ListItem primaryText="普惠贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/1');
                          }}
                />
                <ListItem primaryText="职贷通" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/2');
                          }}
                />
                <ListItem primaryText="助学贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/3');
                          }}
                />
                <ListItem primaryText="留学贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/4');
                          }}
                />
                <ListItem primaryText="购物贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/5');
                          }}
                />
                <ListItem primaryText="装修贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/6');
                          }}
                />
                <ListItem primaryText="旅游贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/7');
                          }}
                />
                <ListItem primaryText="住房按揭贷款" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/8');
                          }}
                />
                <ListItem primaryText="二手房贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/9');
                          }}
                />
                <ListItem primaryText="车易贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/10');
                          }}
                />
                <ListItem primaryText="二手车贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/11');
                          }}
                />
                <ListItem primaryText="长期贷" rightIcon={<ContentSend />}
                          onClick={() => {
                              this.props.history.push('/ProductionLoans/LoansDetail/12');
                          }}
                />
            </List>
        )
    }
}

export default LoansHome;