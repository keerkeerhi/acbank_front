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
import {isArray} from '../../common/Util'
import './TelephoneDirector.css'

class TelephoneDirectory extends Component {
    constructor() {
        super();
        this.state = {dataList: []};
        dictServer.dictListDetail({id: 3}).then(res => {
            if (isArray(res))
                this.setState({dataList: res});
        })
    }

    render(props) {
        return (
            <div className="homeDiv">
                <InfoHeader/>
                <section className="rateBody">
                    <HotLine/>
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
                                      label="我要贷款" primary={true}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default TelephoneDirectory;