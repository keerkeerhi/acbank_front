/**
 * Created by Administrator on 2017/12/20.
 */
import React,{Component} from 'react';
import './InfoHeader.css';
import logo from '../../../images/logo.jpg'

class InfoHeader extends Component {
    render(props){
        return (
            <section className="headerBody">
                <img style={{height:'60px',margin:'5px 10px 5px 20px'}} src={logo} />
                <div className="headerTitle">
                    <div><h1>汤阴农商银行</h1></div>
                    <div className="englishtitle">TANGYIN RURAL COMMERCIAL BANK</div>
                </div>
            </section>
        )
    }
}

export default InfoHeader;