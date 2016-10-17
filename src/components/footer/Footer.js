import React, { Component, PropTypes } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <p className="text-xs-center text-center">
                        Meet footer {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        );
    }
}

