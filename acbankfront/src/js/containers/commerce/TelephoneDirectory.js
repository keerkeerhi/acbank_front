/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import InfoHeader from './InfoHeader';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {RaisedButton} from 'material-ui';
import HotLine from './HotLine';
import dictServer from '../../service/dictService';
import managerService from '../../service/managerService';
import {isArray} from '../../common/Util'
import './TelephoneDirector.css'

class TelephoneDirectory extends Component {
    constructor(props) {
        super();
        this.state = {dataList: [],currentStaff:{}};
        dictServer.dictListDetail({id: 3}).then(res => {
            if (isArray(res))
                this.setState({dataList: res});
        })
        let staffId = props.match.params.userId;
        managerService.showStaff({id: staffId}).then(res => {
            this.setState({currentStaff: res[0]});
        });
    }

    render(props) {
        return (
            <div className="homeDiv">
                <InfoHeader/>
                <section className="rateBody">
                    <HotLine num={this.state.currentStaff.phone} />
                    <Table>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn >网点名称</TableHeaderColumn>
                                <TableHeaderColumn >联系电话</TableHeaderColumn>
                                <TableHeaderColumn ></TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {
                                this.state.dataList.map((it)=>{
                                    return (
                                        <TableRow>
                                            <TableRowColumn>{it.name}</TableRowColumn>
                                            <TableRowColumn>{it.customer}</TableRowColumn>
                                            <TableRowColumn>
                                                <a href={'tel:'+it.customer}>
                                                    <i className="iconfont icon-xingzhuang10 callPhone"></i>
                                                </a>
                                            </TableRowColumn>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    <div style={{textAlign: 'center'}}>
                        <RaisedButton style={{margin: '20px 20px 0 0'}}
                                      onClick={() => {
                                          let ae = document.createElement('a');
                                          ae.href = "tel:" + this.state.currentStaff.phone;
                                          ae.click();
                                      }}
                                      label="我要贷款" primary={true}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default TelephoneDirectory;