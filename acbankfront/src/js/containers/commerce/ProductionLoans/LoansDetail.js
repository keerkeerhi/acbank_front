/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';
import HotLine from '../HotLine'
import dictServer from '../../../service/dictService';
import {isArray} from '../../../common/Util'

class LoansDetail extends Component {

    constructor(props) {
        super();
        this.state = {id: props.match.params.id, dataList: []};
        dictServer.dictListDetail({id: 2}).then(res => {
            if (isArray(res))
                this.setState({dataList: res});
        })
    }

    getContent(tp) {
        let type = Number(tp) - 1;
        if (this.state.dataList.length == 0)
            return <div></div>
        return (
            <div style={{overflow:'auto'}} className="DetailContent">
                <div className="DetailPaper">
                    <HotLine/>
                    <h3 style={{textAlign: 'center'}}>{this.state.dataList[type].name}</h3>
                    <section>
                        <h4>贷款对象：</h4>
                        <p>
                            {this.state.dataList[type].customer}
                        </p>
                    </section>
                    <section>
                        <h4>产品特点：</h4>
                        <p>
                            {this.state.dataList[type].charact}
                        </p>
                    </section>
                    {
                        this.state.dataList[type].usefor ? (
                            <section>
                                <h4>贷款用途：</h4>
                                <p>
                                    {this.state.dataList[type].usefor}
                                </p>
                            </section>
                        ) : ""
                    }
                    <section>
                        <h4>授信额度：</h4>
                        <p>
                            {this.state.dataList[type].limit}
                        </p>
                    </section>
                    {
                        this.state.dataList[type].ratio ? (
                            <section>
                                <h4>贷款利率：</h4>
                                <p>
                                    {this.state.dataList[type].ratio}
                                </p>
                            </section>
                        ) : ""
                    }
                    {
                        this.state.dataList[type].timelimit ? (
                            <section>
                                <h4>贷款期限：</h4>
                                <p>
                                    {this.state.dataList[type].timelimit}
                                </p>
                            </section>
                        ) : ""
                    }
                    <div style={{textAlign: 'center'}}>
                        <RaisedButton style={{margin: '20px 20px 0 0'}}
                                      label="立刻申请" primary={true}/>
                    </div>
                </div>
            </div>
        )
    }

    render(props) {
        return (
            <div className="homeDiv">
                {
                    this.getContent(this.state.id)
                }
            </div>
        )
    }
}

export default LoansDetail;