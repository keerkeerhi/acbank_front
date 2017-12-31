/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react';
import {Paper, RaisedButton} from 'material-ui';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import HotLine from '../HotLine'
import '../ProductionLoans/LoansDetail.css'
class DepositDetail extends Component {

    constructor(props) {
        super();
        this.state = {id: props.match.params.id};
    }

    getContent(tp) {
        let type = Number(tp);
        switch (type){
            case 1:return(
                <div className="DetailContent">
                    <div className="DetailPaper">
                        <HotLine/>
                        <h3 style={{textAlign: 'center'}}>【个人】"享档档"存款</h3>
                        <section>
                            <h4>产品介绍：</h4>
                            <p>
                                享档档是本行面向个人客户推出的一款储蓄存款产品，提前支取按定期存款靠档计息，满一年期连本带息自动约转，可多次部提，兼顾客户资金流动性与收益性。
                            </p>
                        </section>
                        <section>
                            <h4>执行利率：</h4>
                            <Table>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn style={{width:'40%'}}>实际存期</TableHeaderColumn>
                                        <TableHeaderColumn style={{width:'60%',textAlign:'center'}} >执行利率标准<br/>
                                            （活期按支取日、定期按起息日对外公布对应档次利率）</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>不满3个月</TableRowColumn>
                                        <TableRowColumn>全程执行活期利率</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>大于等于3个月不满6个月</TableRowColumn>
                                        <TableRowColumn>全程执行3个月利率</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>大于等于6个月不满1年</TableRowColumn>
                                        <TableRowColumn>全程执行6个月利率</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>1年</TableRowColumn>
                                        <TableRowColumn>全程执行1年期利率</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>14个月</TableRowColumn>
                                        <TableRowColumn>前12个月执行1年期利率，<br/>后2个月执行活期利率</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>17个月</TableRowColumn>
                                        <TableRowColumn>前12个月执行1年期利率，<br/>后5个月执行3个月利率</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </section>

                        <section>
                            <h4>产品特点：</h4>
                            <p>
                                1、该产品为定期类产品，起存金额为1万元。
                            </p>
                            <p>
                                2、存款期限为一年，到期连本带息自动约转，无需到网点再办理。
                            </p>
                            <p>
                                3、存取灵活，支持多次支取。
                            </p>
                            <p>
                                4、享活期便利，定期收益，按实际存期向下靠档计息。
                            </p>
                        </section>
                        <section>
                            <h4>业务案例：</h4>
                            <p>王女士于2017年１月１日分别存入10万元“享档档”存款、10万元一年定期存款，2017年8月１日分别支取，存期７个月。利息如何计算？</p>
                            <Table>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>支取日期</TableHeaderColumn>
                                        <TableHeaderColumn>2017年8月1日</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>实际存期</TableRowColumn>
                                        <TableRowColumn>7个月</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>享档档利息
                                            （全程半年利率）</TableRowColumn>
                                        <TableRowColumn>100000*1.69%*7/12=985.83</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>一年定期利息
                                            （提前支取,全程活期）</TableRowColumn>
                                        <TableRowColumn>227.79</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>差额</TableRowColumn>
                                        <TableRowColumn>758.04</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div>注：活期利率指支取日河南农信（农商行）挂牌活期利率。３个月、６个月、１年定期利率指起息日河南农信（农商行）挂牌相应档次定期利率。</div>
                        </section>
                    </div>
                </div>
            );
            case 2:return (
                <div className="DetailContent">
                    <div className="DetailPaper">
                        <HotLine/>
                        <h3 style={{textAlign: 'center'}}>【个人】智能通知存款</h3>
                        <section>
                            <h4>产品介绍：</h4>
                            <p>
                                智能通知存款是指客户一次签约，无需预设期限，账户余额扣除约定留存金额大于5万元时，
                                将扣除约定留存金额的剩余资金按100的整数倍自动转为七天通知存款，七天后自动转回活期账户并按七天通知存款的利率计息。
                                在客户需要使用资金而活期存款账户余额不足时，可以在理财分户余额内进行透支，
                                系统日终处理会自动将通知存款账户余额按100的整数倍对透支部分进行回补，通知存款账户余额不足起存金额时，
                                全部转回活期账户。该产品既有活期存款的便利，又有通知存款的利息收益。
                            </p>
                        </section>
                        <section>
                            <h4>执行利率：</h4>
                            <p>执行利率：年利率为1.755%</p>
                        </section>

                        <section>
                            <h4>产品特点：</h4>
                            <p>
                                1、通过签约交易开立，无需再单独开立账户。
                            </p>
                            <p>
                                2、通知存款约定的通知期限为七天。
                            </p>
                            <p>
                                3、约定留存金额，最低为1000元，可修改。
                            </p>
                            <p>
                                4、智能通知签约、修改交易成功后，次日生效；智能通知签约取消交易，实时生效。
                            </p>
                        </section>
                        <section>
                            <h4>业务案例：</h4>
                            <p>功能1、（活期账户余额 - 最低留存金额）>5万元时，将扣除留存金额外的剩余资金按100的整数倍自动转存七天通知存款。<br/>
                                【案例】王女士开通了智能通知存款，约定最低留存金额1000元，2017年1月1日卡上活期账户余额1001088元，则2017年1月1日王女士账户上100万资金会自动转智能通知存款，七天后利息如何计算？ </p>
                            <Table>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>支取日期</TableHeaderColumn>
                                        <TableHeaderColumn>2017年1月7日</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>智能通知存款金额</TableRowColumn>
                                        <TableRowColumn>100万</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>实际存期</TableRowColumn>
                                        <TableRowColumn>7天</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>智能通知存款账户利息</TableRowColumn>
                                        <TableRowColumn>341.25</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>活期利息</TableRowColumn>
                                        <TableRowColumn>74.86</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>差额</TableRowColumn>
                                        <TableRowColumn>266.39</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div style={{color:'red'}}>7天100万元钱就可以多出266.39元的利息</div>
                        </section>
                    </div>
                </div>
            );
            case 3: return (
                <div className="DetailContent">
                    <div className="DetailPaper">
                        <HotLine/>
                        <h3 style={{textAlign: 'center'}}>【个人】免预约通知存款</h3>
                        <section>
                            <h4>产品介绍：</h4>
                            <p>
                                个人免预约通知存款，存入款项时存款人只需指定免预约通知的期限，
                                支取时无需提前预约通知，可直接办理支取手续的个人通知存款。
                                按指定期限的长短分为一天个人免预约通知存款和七天个人免预约通知存款。
                            </p>
                        </section>
                        <section>
                            <h4>执行利率：</h4>
                            <p>一天个人免预约通知存款年利率1.040%</p>
                            <p>七天个人免预约通知存款年利率1.755%</p>
                        </section>

                        <section>
                            <h4>产品特点：</h4>
                            <p>
                                1、起存金额和最低留存金额均为5万元
                            </p>
                            <p>
                                2、存款时需指定免预约通知的期限，支取时无需提前通知。
                            </p>
                            <p>
                                3、可多次部提。
                            </p>
                        </section>
                        <section>
                            <h4>业务案例：</h4>
                            <p>王女士于2017年1月１日分别存入100万元七天个人免预约通知存款和活期存款，
                                2017年1月5日、1月15日分别支取其中部分金额。利息如何计算？</p>
                            <Table>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>支取日期</TableHeaderColumn>
                                        <TableHeaderColumn>2017-01-05</TableHeaderColumn>
                                        <TableHeaderColumn>2017-01-15</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>支取金额</TableRowColumn>
                                        <TableRowColumn>5万</TableRowColumn>
                                        <TableRowColumn>95万</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>实际存期</TableRowColumn>
                                        <TableRowColumn>5天</TableRowColumn>
                                        <TableRowColumn>15天</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>个人七天免预约通知存款利</TableRowColumn>
                                        <TableRowColumn>2.67</TableRowColumn>
                                        <TableRowColumn>694.69</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>活期利息</TableRowColumn>
                                        <TableRowColumn>2.67</TableRowColumn>
                                        <TableRowColumn>152.40</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>差额</TableRowColumn>
                                        <TableRowColumn>0</TableRowColumn>
                                        <TableRowColumn>542.29</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div style={{color:'red'}}>注：每次支取金额不足5万元的按活期计息。</div>
                        </section>
                    </div>
                </div>
            );
            case 4: return (
                <div className="DetailContent">
                    <div className="DetailPaper">
                        <HotLine/>
                        <h3 style={{textAlign: 'center'}}>【个人】七天理财</h3>
                        <section>
                            <h4>产品介绍：</h4>
                            <p>
                                个人七天理财继承了七天通知存款的基本属性，存期满七天后自动转存，支取不需要预约通知。
                            </p>
                        </section>
                        <section>
                            <h4>执行利率：</h4>
                            <p>　年利率为1.755%</p>
                        </section>

                        <section>
                            <h4>产品特点：</h4>
                            <p>
                                1.起存金额和最低留存金额均为5万元
                            </p>
                            <p>
                                2. 支取不需提前通知，七天为一周期，本息自动转存。
                            </p>
                            <p>
                                3. 支取时，满七天或为七天的整数倍的时段按七天通知存款利率计息，不足7天的时段，按照活期利率计息。
                            </p>
                        </section>
                    </div>
                </div>
            );
            case 5: return (
                <div className="DetailContent">
                    <div className="DetailPaper">
                        <HotLine/>
                        <h3 style={{textAlign: 'center'}}>【对公】周周赚</h3>
                        <section>
                            <h4>产品介绍：</h4>
                            <p>
                                周周赚单位存款产品，以七天为周期，继承七天通知存款的基本属性，存期满七天后自动转存，支取不需预约通知。
                            </p>
                        </section>
                        <section>
                            <h4>产品特点：</h4>
                            <p>
                                1．周周赚最低起存金额为50万元，一次性存入，可以全部或部分支取，每次部分支取金额不得小于10万元，留存部分不得小于起存金额。
                            </p>
                            <p>
                                2．支取不需提前通知，七天为一周期，本息自动转存。
                            </p>
                            <p>
                                3．支取时，满七天或为七天的整数倍的时段按七天通知存款利率计息，不足7天的时段，按照活期利率计息。
                            </p>
                        </section>
                        <section>
                            <h4>执行利率：</h4>
                            <p>　年利率为1.755%</p>
                        </section>
                        <section>
                            <h4>业务案例：</h4>
                            <Table>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>支取日期</TableHeaderColumn>
                                        <TableHeaderColumn>2017年2月25日</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>周周赚存款金额</TableRowColumn>
                                        <TableRowColumn>100万</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>实际存期</TableRowColumn>
                                        <TableRowColumn>56天</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>周周赚存款账户利息</TableRowColumn>
                                        <TableRowColumn>2733.26</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>活期利息</TableRowColumn>
                                        <TableRowColumn>598.86</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>差额</TableRowColumn>
                                        <TableRowColumn>2134.39</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </section>
                    </div>
                </div>
            );
        }
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

export default DepositDetail;