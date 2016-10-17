import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import { Link, IndexLink } from 'react-router';
import { browserHistory } from 'react-router';
import 'rc-menu/assets/index.css';
import animate from 'css-animation';
import './header.css';

const USER_LOGOUT_KEY = 'user-logout';

export class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: []
        }
    }

    onClick = (info) => {
        console.log('click ', info);
        if (info.key === USER_LOGOUT_KEY) {
        } else {
            this.setState({
                openKeys: info.keyPath.slice(1)
            });
            browserHistory.push(info.key);
        }
    };

    onOpen = (info) => {
        console.log('onOpen', info);
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
        });
    };

    onClose = (info) => {
        this.onOpen(info);
    };

    getMenu = () => {
        const {user} = this.props;

        return (
            <Menu
                onClick={this.onClick}
                onOpen={this.onOpen}
                onClose={this.onClose}
                openKeys={this.state.openKeys}
                mode="horizontal"
                openAnimation="slide-up"
            >
                <MenuItem key="/">HOME</MenuItem>
                <MenuItem key="/users">USER</MenuItem>
            </Menu>
        );
    };

    render() {
        return (
            <div>
                {this.getMenu()}
            </div>);
    }
}

UserMenu.propTypes = {
    user: React.PropTypes.string.isRequired,
};
