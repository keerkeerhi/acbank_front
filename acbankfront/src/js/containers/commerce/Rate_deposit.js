/**
 * Created by Administrator on 2017/12/20.
 */
import React,{Component} from 'react';
import InfoHeader from './InfoHeader';
import Footer from './Footer'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import HotLine from './HotLine';
import './Rate_deposit.css'
import managerService from '../../service/managerService';

class Rate_deposit extends Component {

    constructor(props) {
        super();
        let staffId = props.match.params.userId;
        this.state = {currentStaff:{}};
        managerService.showStaff({id: staffId}).then(res => {
            this.setState({currentStaff: res[0]});
        });
    }

    render(props){
        return (
            <div className="homeDiv" style={{overflow:"auto"}}>
                <InfoHeader/>
                <section className="pageContent">
                    <section className="rateBody">
                        <HotLine num={this.state.currentStaff.phone} />
                        <h3>人民币存款利率</h3>
                        <h4>河南省农信社存款利率执行情况表 </h4>
                        <div className="unitCls">
                            单位：年利率%
                        </div>
                        <Table>
                            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn >项 目</TableHeaderColumn>
                                    <TableHeaderColumn >基准利率</TableHeaderColumn>
                                    <TableHeaderColumn >农信社执行利率</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>一、活期存款</TableRowColumn>
                                    <TableRowColumn>0.35</TableRowColumn>
                                    <TableRowColumn>0.385</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>二、定期存款</TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>（一）整存整取</TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>三个月<br/>
                                        半年<br/>
                                        一年<br/>
                                        二年<br/>
                                        三年 <br/>
                                        五年 </TableRowColumn>
                                    <TableRowColumn>1.10<br/>
                                        1.30<br/>
                                        1.50<br/>
                                        2.10<br/>
                                        2.75<br/>
                                        --</TableRowColumn>
                                    <TableRowColumn>1.430<br/>
                                        1.690<br/>
                                        1.950<br/>
                                        2.730<br/>
                                        3.575<br/>
                                        4.000</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>（二）零存整取、整存零取、存本取息</TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>一年<br/>三年</TableRowColumn>
                                    <TableRowColumn>1.10<br/>1.30</TableRowColumn>
                                    <TableRowColumn>1.430<br/>1.690</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>（三）定活两便</TableRowColumn>
                                    <TableRowColumn>按一年以内定期整存整取同档次利率打六折执行</TableRowColumn>
                                    <TableRowColumn>按一年以内定期整存整取同档次利率打六折执行</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>三、协定存款</TableRowColumn>
                                    <TableRowColumn>1.15</TableRowColumn>
                                    <TableRowColumn>1.495</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>四、通知存款</TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>一天<br/>七天</TableRowColumn>
                                    <TableRowColumn>0.80<br/>1.35</TableRowColumn>
                                    <TableRowColumn>1.040<br/>1.755</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>五、个人住房公积金存款</TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>当年缴存<br/>上年结转</TableRowColumn>
                                    <TableRowColumn>0.35<br/>1.10</TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </section>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Rate_deposit;