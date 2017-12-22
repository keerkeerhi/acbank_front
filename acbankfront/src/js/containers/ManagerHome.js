/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';
const style = {margin: 5};

class ManagerHome extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <List>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar
                            src="images/headimg.jpg"
                            size={30}
                            style={style}
                        />
                    }
                >
                    Image Avatar with custom size
                </ListItem>
            </List>
        )
    }
}

export default ManagerHome;