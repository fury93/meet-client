import React, { Component, PropTypes } from 'react';
import {UserMenu} from './Menu';
import './header.css';

export default class Header extends Component {

    render() {
        return (
            <div>
                <UserMenu
                    user={'Anonymous'}
                />
            </div>
        );
    }
}
