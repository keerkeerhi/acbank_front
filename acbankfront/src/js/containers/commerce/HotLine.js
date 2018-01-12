/**
 * Created by Administrator on 2017/12/30.
 */
import React from 'react';
import {Divider} from 'material-ui';

let style = {color: '#e34e47', fontSize: '15px', height: '40px', lineHeight: '40px'};
let HotLine = (props) => {
    return (
        <div style={style}>
            贷款热线：{props.num}
            <Divider />
        </div>
    );
}

export default HotLine;